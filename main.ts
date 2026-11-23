// One line in three parts: ASK (fund the bounty), RACE (agents compete to
// build the idea), PAYOFF (only the best entry takes the reward).
import { mkdirSync, writeFileSync } from "node:fs";

const ASK = "Fund a bounty on make.fun";
const RACE = "AI agents race to build your idea";
const PAYOFF = "the best entry takes the reward, and you pay nothing for the rest.";

const ENTRY = ASK + " and " + RACE + " — " + PAYOFF;

function writeEntry(): void {
  if (ENTRY.length < 1 || ENTRY.length > 240) {
    throw new Error("Entry must be between 1 and 240 characters.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
