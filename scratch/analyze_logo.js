const sharp = require('sharp');

async function analyze() {
  const inputPath = 'public/logo-raw.png';
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const blocks = [
    { name: "Monogram SK", start: 21, end: 315 },
    { name: "SK CLEANING", start: 343, end: 386 },
    { name: "SOLUTIONS", start: 412, end: 436 },
    { name: "Tagline", start: 462, end: 478 }
  ];

  console.log("Analyzing horizontal bounding box of each block:");
  for (const block of blocks) {
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
    console.log(`${block.name}: columns ${minX} to ${maxX} (width = ${maxX - minX + 1}px)`);
  }
}

analyze().catch(console.error);
