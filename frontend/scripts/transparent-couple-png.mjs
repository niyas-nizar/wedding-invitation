/**
 * Replaces public/assets/couple.png with an alpha version (removes solid/dark backdrop).
 * Uses @imgly/background-removal-node — no watermark post-processing.
 */
import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDir = path.join(__dirname, "..");
const inputPath = path.join(frontendDir, "public", "assets", "couple.png");
const outputPath = inputPath;

if (!fs.existsSync(inputPath)) {
  console.error("Missing:", inputPath);
  process.exit(1);
}

console.log("Removing background (first run may download models)…");
const blob = await removeBackground(pathToFileURL(inputPath), {
  model: "medium",
  output: { quality: 1, format: "image/png" },
});
const buf = Buffer.from(await blob.arrayBuffer());
fs.writeFileSync(outputPath, buf);
console.log("Wrote", outputPath, "(" + Math.round(buf.length / 1024) + " KB)");
