// Build the static site for GitHub Pages and push it to the gh-pages branch.
// usage: npm run deploy
import { execSync } from "node:child_process";
import { existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const run = (cmd, cwd = process.cwd()) => execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, PAGES: "1" } });
const read = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();

const remote = read("git remote get-url origin");
const sha = read("git rev-parse --short HEAD");

run("npx next build");

const out = join(process.cwd(), "out");
writeFileSync(join(out, ".nojekyll"), "");
if (existsSync(join(out, ".git"))) rmSync(join(out, ".git"), { recursive: true, force: true });

run("git init -q -b gh-pages", out);
run("git add -A", out);
run(`git commit -q -m "Deploy ${sha}"`, out);
run(`git push -f "${remote}" gh-pages`, out);
rmSync(join(out, ".git"), { recursive: true, force: true });

console.log(`\nDeployed ${sha} to gh-pages.`);
