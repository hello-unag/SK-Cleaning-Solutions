const sharp = require('sharp');
const fs = require('fs');

async function extract() {
  const inputPath = 'public/logo-raw.png';
  
  // Create scratch/output directory if it doesn't exist
  if (!fs.existsSync('scratch/output')) {
    fs.mkdirSync('scratch/output', { recursive: true });
  }

  // Block 1: Monogram (rows 21 to 315)
  await sharp(inputPath)
    .extract({ left: 0, top: 21, width: 672, height: 295 })
    .toFile('scratch/output/block1_monogram.png');

  // Block 2: Company Name (rows 343 to 386)
  await sharp(inputPath)
    .extract({ left: 0, top: 343, width: 672, height: 44 })
    .toFile('scratch/output/block2_company.png');

  // Block 3: Solutions (rows 412 to 436)
  await sharp(inputPath)
    .extract({ left: 0, top: 412, width: 672, height: 25 })
    .toFile('scratch/output/block3_solutions.png');

  // Block 4: Tagline (rows 462 to 478)
  await sharp(inputPath)
    .extract({ left: 0, top: 462, width: 672, height: 17 })
    .toFile('scratch/output/block4_tagline.png');

  console.log("Blocks extracted successfully!");
}

extract().catch(console.error);
