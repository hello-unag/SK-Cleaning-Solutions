const sharp = require('sharp');
const fs = require('fs');

async function recreateLogo(taglineText, suffix) {
  const inputPath = 'public/logo-raw.png';
  const outputPath = `scratch/output/logo-recreated-${suffix}.png`;

  console.log(`Recreating logo with tagline: "${taglineText}" (${suffix})`);

  // Crop top part of logo (monogram, company name, solutions)
  // Rows 0 to 445
  const topPart = await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 672, height: 445 })
    .toBuffer();

  // Create SVG for the tagline
  // The tagline should align with SK CLEANING (columns 58 to 616, width = 559px)
  // We'll place the text inside a 672x52 image.
  // The text y position is around 25.
  const svgText = `
    <svg width="672" height="52" xmlns="http://www.w3.org/2000/svg">
      <text
        x="58"
        y="25"
        font-family="Montserrat, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        font-size="13"
        font-weight="bold"
        fill="#082040"
        textLength="559"
        lengthAdjust="spacing"
      >${taglineText}</text>
    </svg>
  `;

  const taglineBuffer = await sharp(Buffer.from(svgText))
    .png()
    .toBuffer();

  // Combine topPart and taglineBuffer vertically
  await sharp({
    create: {
      width: 672,
      height: 497,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: topPart, top: 0, left: 0 },
    { input: taglineBuffer, top: 445, left: 0 }
  ])
  .png()
  .toFile(outputPath);

  console.log(`Saved recreated logo to: ${outputPath}`);
}

async function run() {
  if (!fs.existsSync('scratch/output')) {
    fs.mkdirSync('scratch/output', { recursive: true });
  }

  // Variant A: Original tagline text, but adjusted letter spacing to match width
  await recreateLogo("SPOTLESS SERVICE. EVERY TIME.", "original-text");

  // Variant B: Shorter tagline text, adjusted to match width
  await recreateLogo("SPOTLESS SERVICE", "shorter-text");

  // Variant C: Alternative wording, adjusted to match width
  await recreateLogo("SPOTLESS EVERY TIME", "alternative-text");
}

run().catch(console.error);
