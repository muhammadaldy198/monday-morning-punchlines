// One-line Monday joke: the door lets the badge in, not me.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line = "Monday morning, the door recognized my badge, not my face. It let the badge in. I'm still outside.";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);

// Reversal: the badge is the employee, not me.
