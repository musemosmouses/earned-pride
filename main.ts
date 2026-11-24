// One Line of Earned Pride — writes a single line (1-240 chars) to entry.txt.
// Chosen entry: a 73-year-old grandmother, three failed driving tests behind
// her, finally passing and driving herself to the market — effort you can feel,
// a scene you can see, pride landing on the last words, no trophy in sight.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At seventy-three, after three failed attempts, my grandmother passed her driving test and drove herself to the market, horn honking, grinning at no one in particular.";

if (ENTRY.length < 1 || ENTRY.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${ENTRY.length}`);
}

mkdirSync("out", { recursive: true });
writeFileSync("out/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length}-char entry to out/entry.txt`);
