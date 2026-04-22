/**
 * Rebuilds public/assets/couple.png from scripts/couple_source.png
 * 1) AI background removal
 * 2) Strip near-white
 * 3) Watermark: frequency-separation — blend smeary grey “stamp” detail toward blurred base
 *    (best-effort; truly invisible removal often needs a clean licensed asset)
 */
import { removeBackground } from "@imgly/background-removal-node";
import { Jimp } from "jimp";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDir = path.join(__dirname, "..");
const projectRoot = path.join(frontendDir, "..");
const inputPath = path.join(projectRoot, "scripts", "couple_source.png");
const outDir = path.join(frontendDir, "public", "assets");
const outputPath = path.join(outDir, "couple.png");

if (!fs.existsSync(inputPath)) {
  console.error("Missing input:", inputPath);
  process.exit(1);
}

function boxBlur2D(gray, w, h, r) {
  const t1 = new Float32Array(gray);
  const horiz = new Float32Array(gray.length);
  const s = 2 * r + 1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let acc = 0;
      for (let dx = -r; dx <= r; dx++) {
        const xx = Math.max(0, Math.min(w - 1, x + dx));
        acc += t1[y * w + xx];
      }
      horiz[y * w + x] = acc / s;
    }
  }
  const out = new Float32Array(gray.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let acc = 0;
      for (let dy = -r; dy <= r; dy++) {
        const yy = Math.max(0, Math.min(h - 1, y + dy));
        acc += horiz[yy * w + x];
      }
      out[y * w + x] = acc / s;
    }
  }
  return out;
}

function minFilter2D(gray, w, h, r) {
  const out = new Float32Array(gray.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let m = 1e9;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const yy = y + dy;
          const xx = x + dx;
          if (yy < 0 || yy >= h || xx < 0 || xx >= w) continue;
          m = Math.min(m, gray[yy * w + xx]);
        }
      }
      out[y * w + x] = m;
    }
  }
  return out;
}

function maxFilter2D(gray, w, h, r) {
  const out = new Float32Array(gray.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let m = -1;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const yy = y + dy;
          const xx = x + dx;
          if (yy < 0 || yy >= h || xx < 0 || xx >= w) continue;
          m = Math.max(m, gray[yy * w + xx]);
        }
      }
      out[y * w + x] = m;
    }
  }
  return out;
}

function maxFilter2DFloat(arr, w, h, r) {
  const out = new Float32Array(arr.length);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let m = -1;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          const yy = y + dy;
          const xx = x + dx;
          if (yy < 0 || yy >= h || xx < 0 || xx >= w) continue;
          m = Math.max(m, arr[yy * w + xx]);
        }
      }
      out[y * w + x] = m;
    }
  }
  return out;
}

/**
 * @param {import("jimp").Jimp} image
 */
function removeWatermarkWithFrequencySeparation(image) {
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const d = image.bitmap.data;
  const n = w * h;
  const L = new Float32Array(n);
  const S = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    if (d[i * 4 + 3] < 4) {
      L[i] = 0;
      S[i] = 0;
      continue;
    }
    L[i] = 0.299 * d[i * 4] + 0.587 * d[i * 4 + 1] + 0.114 * d[i * 4 + 2];
    const mx = Math.max(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]) / 255;
    const mn = Math.min(d[i * 4], d[i * 4 + 1], d[i * 4 + 2]) / 255;
    S[i] = mx < 0.001 ? 0 : (mx - mn) / mx;
  }

  const R0 = new Float32Array(n);
  const G0 = new Float32Array(n);
  const B0 = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    R0[i] = d[i * 4] / 255;
    G0[i] = d[i * 4 + 1] / 255;
    B0[i] = d[i * 4 + 2] / 255;
  }

  const Lb = boxBlur2D(L, w, h, 5);
  const Rb = boxBlur2D(R0, w, h, 6);
  const Gb = boxBlur2D(G0, w, h, 6);
  const Bb = boxBlur2D(B0, w, h, 6);

  const H = new Float32Array(n);
  for (let i = 0; i < n; i++) H[i] = Math.abs(L[i] - Lb[i]);

  const Lmin = minFilter2D(L, w, h, 2);
  const tophatDark = new Float32Array(n);
  for (let i = 0; i < n; i++) tophatDark[i] = L[i] - Lmin[i];
  const Lmax = maxFilter2D(L, w, h, 2);
  const blackhatLight = new Float32Array(n);
  for (let i = 0; i < n; i++) blackhatLight[i] = Lmax[i] - L[i];

  const M = new Float32Array(n);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = y * w + x;
      if (d[i * 4 + 3] < 2) {
        d[i * 4 + 3] = 0;
        M[i] = 0;
        continue;
      }
      if (L[i] > 250 && d[i * 4] > 249 && d[i * 4 + 1] > 249 && d[i * 4 + 2] > 249) {
        d[i * 4 + 3] = 0;
        M[i] = 0;
        continue;
      }
      if (H[i] > 85) {
        M[i] = 0;
        continue;
      }

      const s = S[i];
      const hi = H[i];
      const Li = L[i];
      let wgt = 0;

      if (Li < 180 && s < 0.42) {
        if (tophatDark[i] > 0.8 && tophatDark[i] < 95) wgt = Math.max(wgt, 0.62);
        if (hi > 0.9 && hi < 48) wgt = Math.max(wgt, 0.82);
      }
      if (Li > 165 && s < 0.22) {
        if (hi > 0.4 && hi < 42) wgt = Math.max(wgt, 0.7);
        if (blackhatLight[i] > 0.3 && blackhatLight[i] < 65 && Li > 180) wgt = Math.max(wgt, 0.68);
      }
      if (s < 0.11 && hi < 40 && hi > 0.35) wgt = Math.max(wgt, 0.55);
      M[i] = Math.min(1, wgt);
    }
  }

  let M2 = M;
  M2 = maxFilter2DFloat(M2, w, h, 1);
  M2 = maxFilter2DFloat(M2, w, h, 1);
  M2 = boxBlur2D(M2, w, h, 1);
  M2 = boxBlur2D(M2, w, h, 1);

  for (let i = 0; i < n; i++) {
    if (d[i * 4 + 3] < 2) continue;
    const t = Math.min(0.95, M2[i] * 0.95);
    if (t < 0.01) continue;
    const o = i * 4;
    d[o] = Math.round(255 * ((d[o] / 255) * (1 - t) + Rb[i] * t * 0.9 + (d[o] / 255) * t * 0.1));
    d[o + 1] = Math.round(255 * ((d[o + 1] / 255) * (1 - t) + Gb[i] * t * 0.9 + (d[o + 1] / 255) * t * 0.1));
    d[o + 2] = Math.round(255 * ((d[o + 2] / 255) * (1 - t) + Bb[i] * t * 0.9 + (d[o + 2] / 255) * t * 0.1));
  }
}

fs.mkdirSync(outDir, { recursive: true });
console.log("Removing background (this may take a minute the first time)…");

const blob = await removeBackground(pathToFileURL(inputPath), {
  model: "medium",
  output: { quality: 0.95, format: "image/png" },
});
const afterBg = Buffer.from(await blob.arrayBuffer());

const image = await Jimp.read(afterBg);
removeWatermarkWithFrequencySeparation(image);
await image.write(outputPath);

const stat = fs.statSync(outputPath);
console.log("Wrote", outputPath, "(" + Math.round(stat.size / 1024) + " KB)");
console.log("If faint marks remain, replace scripts/couple_source.png with a licensed image and run npm run process-couple again.");
