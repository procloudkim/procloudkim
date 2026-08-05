import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const profilePath = path.join(rootDir, "README.md");
const koreanPath = path.join(rootDir, "README.ko.md");

const profile = await readFile(profilePath, "utf8");
const korean = await readFile(koreanPath, "utf8");
const failures = [];

function requireText(source, needle, label) {
  if (!source.includes(needle)) {
    failures.push(`${label}: missing ${JSON.stringify(needle)}`);
  }
}

function forbidPattern(source, pattern, label) {
  if (pattern.test(source)) {
    failures.push(`${label}: forbidden pattern ${pattern}`);
  }
}

function proseOnly(source) {
  return source
    .replace(/\]\([^)]+\)/g, "]")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/`[^`]*`/g, "");
}

for (const [source, label] of [
  [profile, "README.md"],
  [korean, "README.ko.md"],
]) {
  requireText(source, "Backend / AI Developer", label);
  requireText(source, "Unseen Graph", label);
  requireText(source, "Mandate Pool", label);
  requireText(source, "ContextGC", label);
  requireText(source, "Top Ten Honors", label);
  requireText(source, "founding cohort", label);

  const prose = proseOnly(source);
  forbidPattern(prose, /world\s+10th/i, label);
  forbidPattern(prose, /incubator\s+alumnus/i, label);
  forbidPattern(prose, /completed\s+the\s+incubator/i, label);
  forbidPattern(prose, /production\s+AI\s+engineer/i, label);
  forbidPattern(prose, /production[- ]ready/i, label);
  forbidPattern(prose, /mainnet[- ]safe/i, label);
  forbidPattern(prose, /(?:\+?82[- ]?)?0?10[- ]?\d{3,4}[- ]?\d{4}/, label);
  forbidPattern(source, /mailto:/i, label);
  forbidPattern(source, /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, label);
  forbidPattern(prose, /\bSeoul\b|서울/i, label);
  forbidPattern(prose, /github-readme-stats/i, label);
}

requireText(
  profile,
  "https://austinaihub.org/case-studies/united-against-trafficking/winners",
  "README.md",
);
requireText(
  profile,
  "https://github.com/procloudkim/2026-Solana-Google",
  "README.md",
);
requireText(
  profile,
  "https://github.com/procloudkim/OpenAI-Build-Week-ContextGC",
  "README.md",
);
requireText(profile, "hiring-assignment artifact, not a production deployment", "README.md");
requireText(profile, "I build with Codex and GitHub Copilot", "README.md");

if (profile.length > 9_000) {
  failures.push(`README.md: ${profile.length} characters exceeds the 9,000-character scanability guardrail`);
}

const headingCount = (profile.match(/^#{1,6}\s/gm) ?? []).length;
if (headingCount > 14) {
  failures.push(`README.md: ${headingCount} headings exceeds the 14-heading guardrail`);
}

for (const [source, sourceName] of [
  [profile, "README.md"],
  [korean, "README.ko.md"],
]) {
  const destinations = [...source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(
    (match) => match[1],
  );

  for (const destination of destinations) {
    if (/^https?:\/\//.test(destination)) continue;
    const relativePath = decodeURIComponent(destination.split("#", 1)[0]);
    if (!relativePath) continue;
    try {
      await access(path.resolve(rootDir, relativePath));
    } catch {
      failures.push(`${sourceName}: missing relative target ${destination}`);
    }
  }
}

if (failures.length > 0) {
  console.error("PROFILE_QA_FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("PROFILE_QA_PASS");
  console.log(`- README.md: ${profile.length} characters, ${headingCount} headings`);
  console.log("- Required identity, flagship, recognition, and disclosure text present");
  console.log("- Prohibited overclaims, location, email, and phone-number patterns absent");
  console.log("- Relative Markdown links resolve");
}
