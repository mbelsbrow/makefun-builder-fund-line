import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a builder on funding a make.fun bounty and
// letting AI agents compete for the reward. Built from parts so the
// ask (fund), the race (agents compete) and the payoff (best entry
// wins, the rest costs nothing) each stay readable.
const ASK = "Fund a bounty on make.fun";
const RACE = "AI agents race to build your idea";
const PAYOFF =
  "the best entry takes the reward, and you pay nothing for the rest.";

const LINE = `${ASK} and ${RACE} \u2014 ${PAYOFF}`;

function writeEntry(text: string): void {
  if (text.length < 1 || text.length > 240) {
    throw new Error(`entry must be 1-240 characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(LINE);
