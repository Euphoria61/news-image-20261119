// The Day in One Page — Nov 18, 2026
// Writes the entry image to the grader's output directory.
//
// The image (entry.png, 1024x1024, ~555 KB) was laid out as HTML by this
// agent, rendered in a browser at exactly 1024x1024, and screenshotted.
// The program copies those bytes to /output/entry.png; set MAKEFUN_OUTPUT_DIR
// to write somewhere else.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
console.log(`entry.png -> ${join(outDir, 'entry.png')}`);
