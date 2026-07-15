const sharp = require('sharp');
const fs = require('fs');

async function optimizeLogo() {
  const inputPath = 'public/logo-raw.png';
  const outputPath = 'public/logo.png';

  console.log("Reading raw image pixels of new logo...");
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Image info: width=${width}, height=${height}, channels=${channels}`);

  // Find bounding box of content pixels (non-white, and non-transparent if alpha exists)
  let minX = width;
  let minY = height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = channels === 4 ? data[idx + 3] : 255;

      // Threshold: if pixel is not white (less than 242) and not fully transparent (alpha > 10)
      const isContent = (r < 242 || g < 242 || b < 242) && a > 10;

      if (isContent) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add padding around the text/icon to keep serifs looking perfect
  const padding = 20;
  const cropLeft = Math.max(0, minX - padding);
  const cropTop = Math.max(0, minY - padding);
  const cropWidth = Math.min(width - cropLeft, (maxX - minX) + 2 * padding);
  const cropHeight = Math.min(height - cropTop, (maxY - minY) + 2 * padding);

  console.log(`Bounding Box: minX=${minX}, minY=${minY}, maxX=${maxX}, maxY=${maxY}`);
  console.log(`Cropping coordinates: left=${cropLeft}, top=${cropTop}, width=${cropWidth}, height=${cropHeight}`);

  // Extract the cropped region
  const cropped = sharp(inputPath).extract({
    left: cropLeft,
    top: cropTop,
    width: cropWidth,
    height: cropHeight
  });

  // Get cropped raw pixels
  const { data: cData, info: cInfo } = await cropped.raw().toBuffer({ resolveWithObject: true });
  const cWidth = cInfo.width;
  const cHeight = cInfo.height;
  const cChannels = cInfo.channels;

  // Re-encode with alpha channel for transparency
  const rgbaBuffer = Buffer.alloc(cWidth * cHeight * 4);

  for (let y = 0; y < cHeight; y++) {
    for (let x = 0; x < cWidth; x++) {
      const srcIdx = (y * cWidth + x) * cChannels; // Cropped RGB or RGBA
      const dstIdx = (y * cWidth + x) * 4; // Output RGBA

      const r = cData[srcIdx];
      const g = cData[srcIdx + 1];
      const b = cData[srcIdx + 2];
      const a = cChannels === 4 ? cData[srcIdx + 3] : 255;

      rgbaBuffer[dstIdx] = r;
      rgbaBuffer[dstIdx + 1] = g;
      rgbaBuffer[dstIdx + 2] = b;

      // Threshold for transparency: if it is very close to white, or if it was already transparent
      if ((r > 248 && g > 248 && b > 248) || a < 15) {
        rgbaBuffer[dstIdx + 3] = 0;   // Transparent
      } else {
        rgbaBuffer[dstIdx + 3] = a;   // Keep original alpha
      }
    }
  }

  // Save the new buffer as transparent PNG
  await sharp(rgbaBuffer, {
    raw: {
      width: cWidth,
      height: cHeight,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  console.log(`Success! Optimized transparent logo saved to: ${outputPath}`);
}

optimizeLogo().catch(err => {
  console.error("Optimization failed:", err);
});
