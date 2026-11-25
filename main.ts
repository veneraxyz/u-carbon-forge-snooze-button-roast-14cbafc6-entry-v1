import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROAST =
  "It's 6 AM on a Saturday and my alarm is screaming like I owe it rent - snooze, do your job and let me dream in peace.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`Roast line must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Roast line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Roast line must be exactly one line");
  }
  for (const ch of line) {
    const code = ch.charCodeAt(0);
    if (code < 0x20 || code === 0x7f) {
      throw new Error("Roast line must not contain control characters");
    }
  }
}

function main(): void {
  validate(ROAST);
  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ROAST + "\n", "utf8");
  const written = readFileSync(outPath, "utf8");
  if (written !== ROAST + "\n") {
    throw new Error("Read-back guard failed: entry.txt does not match the roast line");
  }
}

main();
