// Nasi tumpeng entry runner.
// The illustration is pre-rendered as entry.png beside this file;
// this program only places a copy of it in the harness output folder.
import { copyFileSync, mkdirSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const dirOptions = { recursive: true };
mkdirSync(outputDir, dirOptions);
// Resolve the destination once, then deliver the bundled image there.
const targetPath = `${outputDir}/entry.png`;
copyFileSync("entry.png", targetPath);
