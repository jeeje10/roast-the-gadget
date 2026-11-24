// One-Line Roast: The Gadget You Use Every Day — make.fun entry.
// Writes one roast (at most 200 characters) to /output/entry.txt: my
// smartwatch, the neediest coach I have ever owned — it congratulates
// me for standing up, then judges me for sitting back down.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My smartwatch congratulates me for standing up, then judges me for sitting back down. It is the neediest coach I have ever owned.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
