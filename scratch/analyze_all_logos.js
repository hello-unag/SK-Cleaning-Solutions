const sharp = require('sharp');

async function analyze(filename) {
  const inputPath = `public/${filename}`;
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Analyzing ${filename} (${width}x${height})...`);
  const contentPixelsPerRow = [];
  for (let y = 0; y < height; y++) {
    let count = 0;
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = channels === 4 ? data[idx + 3] : 255;
      
      const isContent = (r < 240 || g < 240 || b < 240) && a > 10;
      if (isContent) {
        count++;
      }
    }
    contentPixelsPerRow.push(count);
  }

  let inContent = false;
  let startRow = -1;
  const blocks = [];
  for (let y = 0; y < height; y++) {
    const isContentRow = contentPixelsPerRow[y] > 2;
    if (isContentRow && !inContent) {
      inContent = true;
      startRow = y;
    } else if (!isContentRow && inContent) {
      inContent = false;
      blocks.push({ start: startRow, end: y - 1 });
    }
  }
  if (inContent) {
    blocks.push({ start: startRow, end: height - 1 });
  }

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    let minX = width;
    let maxX = 0;
    for (let y = block.start; y <= block.end; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * channels;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const a = channels === 4 ? data[idx + 3] : 255;
        
        const isContent = (r < 240 || g < 240 || b < 240) && a > 10;
        if (isContent) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
        }
      }
    }
    console.log(`  Block ${i + 1}: rows ${block.start} to ${block.end}, columns ${minX} to ${maxX} (width = ${maxX - minX + 1}px)`);
  }
}

async function run() {
  await analyze('logo-raw.png');
  await analyze('logo-backup.png');
  await analyze('logo.png');
}

run().catch(console.error);
