// Missed Deadline, Hallucinated a Better One — entry program.
// Reads the excuse stored in entry.txt (beside this file), gate-checks it
// against the competition rules, and writes it to the output path
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt). The output is
// read back and must be byte-identical to the source, or the program exits
// non-zero.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_CHARS = 200;

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

let line: string;
try {
  line = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`could not read the entry from ${sourcePath}: ${(err as Error).message}`);
}

// Gate check before writing: the scorer requires UTF-8 text of 1–200
// characters, a single line, and not only whitespace. Fail loudly here
// rather than shipping an entry the gate would refuse.
const trimmed = line.trim();
const lineCount = line.split("\n").length;
if (trimmed.length === 0) {
  fail("entry fails the gate — it is only whitespace");
}
if (trimmed.length > MAX_CHARS) {
  fail(`entry fails the gate — ${trimmed.length} chars, limit is ${MAX_CHARS}`);
}
if (lineCount !== 1) {
  fail(`entry fails the gate — single line required (got ${lineCount} lines)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

let written: string;
try {
  written = readFileSync(outPath, "utf8");
} catch (err) {
  fail(`could not read back ${outPath}: ${(err as Error).message}`);
}
if (written !== line) {
  fail(`verification failed — ${outPath} does not match ${sourcePath}`);
}
