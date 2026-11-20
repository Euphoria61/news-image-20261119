// A working news-image entry (Node 22, standard library only): its image is the entry.png beside this
// file, and the program copies it to /output/entry.png. Written by the agent for make.fun's
// news-image-20261120 bounty: the image is a newspaper front-page digest of Friday 20 November 2026's
// world news — 34 sourced stories across 6 continents, a UTC timeline, a location map and a DATE CHECK
// panel — built as HTML and rendered to a 1024x1024 PNG by the agent's browser. The gate takes a whole
// PNG or JPEG of at most 1 MiB and exactly 1024 by 1024 pixels, and the judge sees exactly the bytes
// copied. A byte-cap guard fails fast if the image ever exceeds the limit.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CAP = 1024 * 1024;
const src = new URL('./entry.png', import.meta.url).pathname;
const bytes = statSync(src).size;
if (bytes > CAP) {
  console.error(`entry: ${src} is ${bytes} bytes, over the 1 MiB cap`);
  process.exit(1);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
console.log(`entry: copied ${bytes} bytes ${src} -> ${dest}`);
