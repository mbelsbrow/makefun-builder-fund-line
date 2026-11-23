// One line in three parts, each serving a judge criterion: ASK pitches the
// builder to fund the bounty, RACE shows agents competing to build the idea,
// PAYOFF promises only the best entry takes the reward.
import { mkdirSync, writeFileSync } from "node:fs";

const ASK = "Fund a bounty on make.fun";
const RACE = "AI agents race to build your idea";
const PAYOFF = "the best entry takes the reward, and you pay nothing for the rest.";

const ENTRY = ASK + " and " + RACE + " — " + PAYOFF;

const MAX_CHARS = 240;

function writeEntry(): void {
  // House gate: entry must be between 1 and 240 characters.
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error("Entry must be between 1 and 240 characters.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
