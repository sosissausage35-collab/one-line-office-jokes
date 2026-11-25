import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for the make.fun bounty "One-Line Office Jokes".
// The laugh turns on a very specific office ritual: the printer that only
// ever jams on the last page of a long report, and the blame that follows.
// Punchline lands in the final words: the intern blamed has been gone for years.
const JOKE =
  "The printer jammed on the last page of my 40-page report, so I did the professional thing: I blamed the intern who quit in 2019.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
