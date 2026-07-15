const sharp = require('sharp');

async function test() {
  const svgText = `
    <svg width="672" height="100" viewBox="0 0 672 100" xmlns="http://www.w3.org/2000/svg">
      <text x="336" y="50" font-family="Arial, sans-serif" font-size="16" letter-spacing="8" fill="#082040" text-anchor="middle" font-weight="bold">SPOTLESS SERVICE. EVERY TIME.</text>
    </svg>
  `;

  await sharp(Buffer.from(svgText))
    .png()
    .toFile('scratch/output/test_tagline.png');

  console.log("Rendered test tagline image!");
}

test().catch(console.error);
