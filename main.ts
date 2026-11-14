/**
 * This program copies entry.png to the output directory.
 */
import { copyFileSync, mkdirSync } from 'fs';
import { env } from 'process';

const outputDir = env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync('entry.png', `${outputDir}/entry.png`);
