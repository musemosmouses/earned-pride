// One Line of Earned Pride — writes a single line (1-240 chars) to entry.txt.
// Chosen entry: a 73-year-old grandmother, three failed driving tests behind
// her, finally passing and driving herself to the market — effort you can feel,
// a scene you can see, pride landing on the last words, no trophy in sight.
//
// The grader runs this in a sandbox whose working directory is read-only
// (/bot, EROFS on any write): the program must never write to the current
// directory. Every write goes to MAKEFUN_OUTPUT_DIR (the grader's /output),
// falling back to "out" only for a local run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself — one line, 166 characters. Do not edit this text:
// it is the judged artifact and must stay byte-identical.
const ENTRY =
  "At seventy-three, after three failed attempts, my grandmother passed her driving test and drove herself to the market, horn honking, grinning at no one in particular.";

const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 240) {
  throw new Error(`entry must be 1-240 characters, got ${charCount}`);
}

// EROFS fix: the only write target in this program is join(outDir,
// "entry.txt"). outDir comes from MAKEFUN_OUTPUT_DIR (the grader sets it
// to /output, which is writable); the "out" fallback is for local runs
// only. Nothing is ever written to the cwd, "./entry.txt", or a bare
// relative "out/..." path.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote ${charCount}-char entry to ${outPath}`);
