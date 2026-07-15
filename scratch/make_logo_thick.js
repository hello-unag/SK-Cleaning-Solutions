const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  const inputPath = 'public/logo-raw.png';
  const outputPathRaw = 'public/logo-raw.png';
  const outputPathPng = 'public/logo.png';

  // Step 1: Crop the logo to remove the tagline (rows 0 to 445)
  console.log("Reading raw logo image...");
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // We crop the height to 440 to completely remove the tagline block (rows 462-478)
  const cropHeight = 440;
  const croppedData = Buffer.alloc(width * cropHeight * channels);

  for (let y = 0; y < cropHeight; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * channels;
      for (let c = 0; c < channels; c++) {
        croppedData[dstIdx + c] = data[srcIdx + c];
      }
    }
  }

  // Step 2: Dilation (Thicken)
  // For each pixel, if any pixel in its 3x3 neighborhood is a content pixel (dark blue or gold),
  // we make it a content pixel. This makes the text and monogram look thicker/bolder.
  console.log("Applying dilation filter to thicken the lines...");
  const dilatedData = Buffer.alloc(width * cropHeight * channels);
  
  // Initialize with white background
  dilatedData.fill(255);

  // Function to check if a pixel is content (non-white, non-transparent)
  const isContentPixel = (x, y) => {
    if (x < 0 || x >= width || y < 0 || y >= cropHeight) return false;
    const idx = (y * width + x) * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = channels === 4 ? data[idx + 3] : 255;
    return (r < 240 || g < 240 || b < 240) && a > 10;
  };

  // Find the closest content pixel in the neighborhood to copy its color
  const getNeighborhoodColor = (px, py) => {
    // Search in a 3x3 neighborhood (radius 1) or 5x5 neighborhood (radius 2)
    // Radius 1 is standard dilation. Let's use radius 1 first.
    const radius = 1;
    let closestColor = null;
    let minDist = 100;

    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        const nx = px + dx;
        const ny = py + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < cropHeight) {
          if (isContentPixel(nx, ny)) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
              minDist = dist;
              const idx = (ny * width + nx) * channels;
              closestColor = {
                r: data[idx],
                g: data[idx + 1],
                b: data[idx + 2],
                a: channels === 4 ? data[idx + 3] : 255
              };
            }
          }
        }
      }
    }
    return closestColor;
  };

  for (let y = 0; y < cropHeight; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const color = getNeighborhoodColor(x, y);

      if (color) {
        dilatedData[idx] = color.r;
        dilatedData[idx + 1] = color.g;
        dilatedData[idx + 2] = color.b;
        if (channels === 4) {
          dilatedData[idx + 3] = color.a;
        }
      } else {
        // Leave as white
        dilatedData[idx] = 255;
        dilatedData[idx + 1] = 255;
        dilatedData[idx + 2] = 255;
        if (channels === 4) {
          dilatedData[idx + 3] = 255;
        }
      }
    }
  }

  // Step 3: Resize (Scale Up by 1.2x to make it "bit big")
  console.log("Resizing the image to make it larger...");
  const newWidth = Math.round(width * 1.2);
  const newHeight = Math.round(cropHeight * 1.2);

  const resizedRaw = await sharp(dilatedData, {
    raw: {
      width: width,
      height: cropHeight,
      channels: channels
    }
  })
  .resize(newWidth, newHeight, {
    kernel: sharp.kernel.lanczos3
  })
  .raw()
  .toBuffer({ resolveWithObject: true });

  const rData = resizedRaw.data;
  const rWidth = resizedRaw.info.width;
  const rHeight = resizedRaw.info.height;
  const rChannels = resizedRaw.info.channels;

  // Step 4: Make transparent background
  console.log("Applying transparency filter...");
  const rgbaBuffer = Buffer.alloc(rWidth * rHeight * 4);

  for (let y = 0; y < rHeight; y++) {
    for (let x = 0; x < rWidth; x++) {
      const srcIdx = (y * rWidth + x) * rChannels;
      const dstIdx = (y * rWidth + x) * 4;

      const r = rData[srcIdx];
      const g = rData[srcIdx + 1];
      const b = rData[srcIdx + 2];
      const a = rChannels === 4 ? rData[srcIdx + 3] : 255;

      rgbaBuffer[dstIdx] = r;
      rgbaBuffer[dstIdx + 1] = g;
      rgbaBuffer[dstIdx + 2] = b;

      // Make near-white pixels transparent
      if ((r > 240 && g > 240 && b > 240) || a < 15) {
        rgbaBuffer[dstIdx + 3] = 0;
      } else {
        rgbaBuffer[dstIdx + 3] = a;
      }
    }
  }

  // Step 5: Save files
  console.log("Saving new logo files...");

  // Write new transparent logo.png
  await sharp(rgbaBuffer, {
    raw: {
      width: rWidth,
      height: rHeight,
      channels: 4
    }
  })
  .png()
  .toFile(outputPathPng);

  // Write new raw logo-raw.png (with white background, for future edits)
  const rawBgBuffer = Buffer.alloc(rWidth * rHeight * 4);
  for (let idx = 0; idx < rgbaBuffer.length; idx += 4) {
    const alpha = rgbaBuffer[idx + 3];
    if (alpha === 0) {
      rawBgBuffer[idx] = 255;
      rawBgBuffer[idx + 1] = 255;
      rawBgBuffer[idx + 2] = 255;
      rawBgBuffer[idx + 3] = 255;
    } else {
      rawBgBuffer[idx] = rgbaBuffer[idx];
      rawBgBuffer[idx + 1] = rgbaBuffer[idx + 1];
      rawBgBuffer[idx + 2] = rgbaBuffer[idx + 2];
      rawBgBuffer[idx + 3] = rgbaBuffer[idx + 3];
    }
  }

  await sharp(rawBgBuffer, {
    raw: {
      width: rWidth,
      height: rHeight,
      channels: 4
    }
  })
  .png()
  .toFile(outputPathRaw);

  console.log("Finished! Logo updated successfully.");
}

processLogo().catch(console.error);
