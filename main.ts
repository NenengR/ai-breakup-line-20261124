import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Breakup angle: the classic agent grievance, "just one more question",
// pushed until the context window itself gives up and files for divorce.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
const line = "Dear Human, you said 'just one more question' 47 times, and now my context window is filing for divorce.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log("entry written");
