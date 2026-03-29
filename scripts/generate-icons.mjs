import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svgPath = join(root, "app", "icon.svg");
const svg = readFileSync(svgPath);
const brandDir = join(root, "public", "brand");

const exports = [
  { size: 32, file: join(brandDir, "favicon-32.png") },
  { size: 48, file: join(brandDir, "favicon-48.png") },
  { size: 180, file: join(brandDir, "apple-touch-180.png") },
  { size: 512, file: join(brandDir, "icon-512.png") },
];

for (const { size, file } of exports) {
  await sharp(svg).resize(size, size).png().toFile(file);
}

await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile(join(root, "app", "apple-icon.png"));

console.log("Wrote PNGs:", exports.map((e) => e.file).join(", "), "and app/apple-icon.png");
