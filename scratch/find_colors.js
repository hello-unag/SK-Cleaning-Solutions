const sharp = require('sharp');

async function findColors() {
  const inputPath = 'public/logo-raw.png';
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's sample colors in the SK CLEANING block (rows 343 to 386)
  // We want to find the most common non-white, non-gray colors.
  const colorCounts = {};
  for (let y = 343; y <= 386; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = channels === 4 ? data[idx + 3] : 255;

      if (a > 10 && (r < 220 || g < 220 || b < 220)) {
        // Round to nearest 8 for binning
        const binR = Math.round(r / 8) * 8;
        const binG = Math.round(g / 8) * 8;
        const binB = Math.round(b / 8) * 8;
        const key = `${binR},${binG},${binB}`;
        colorCounts[key] = (colorCounts[key] || 0) + 1;
      }
    }
  }

  console.log("Common colors in SK CLEANING block:");
  const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
  for (const [color, count] of sortedColors.slice(0, 5)) {
    const [r, g, b] = color.split(',').map(Number);
    const hex = "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    console.log(`Color: RGB(${r}, ${g}, ${b}) -> Hex: ${hex} (count: ${count})`);
  }

  // Let's sample colors in the SOLUTIONS block (rows 412 to 436)
  const goldCounts = {};
  for (let y = 412; y <= 436; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = channels === 4 ? data[idx + 3] : 255;

      if (a > 10 && (r < 220 || g < 220 || b < 220)) {
        const binR = Math.round(r / 8) * 8;
        const binG = Math.round(g / 8) * 8;
        const binB = Math.round(b / 8) * 8;
        const key = `${binR},${binG},${binB}`;
        goldCounts[key] = (goldCounts[key] || 0) + 1;
      }
    }
  }

  console.log("\nCommon colors in SOLUTIONS block:");
  const sortedGold = Object.entries(goldCounts).sort((a, b) => b[1] - a[1]);
  for (const [color, count] of sortedGold.slice(0, 5)) {
    const [r, g, b] = color.split(',').map(Number);
    const hex = "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    console.log(`Color: RGB(${r}, ${g}, ${b}) -> Hex: ${hex} (count: ${count})`);
  }
}

findColors().catch(console.error);
