// The machine speaks in its own world: its coil, its button B7, the snack it
// drops — and the punch lands in the last few words, where it drops its heart.
// SPDX-License-Identifier: MIT
// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single vending-machine pickup line (<= 200 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Hey, gorgeous — my coil's been saving the last chocolate bar for you. Press B7 and I'll drop it… and maybe my heart too.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
