const targets = [
  {
    label: "Unseen Graph repository",
    url: "https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking",
  },
  {
    label: "Unseen Graph English demo",
    url: "https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=en&theme=dark",
  },
  {
    label: "Unseen Graph Korean demo",
    url: "https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=ko&theme=dark",
  },
  {
    label: "Top Ten Honors result",
    url: "https://austinaihub.org/case-studies/united-against-trafficking/winners",
  },
  {
    label: "Mandate Pool repository",
    url: "https://github.com/procloudkim/2026-Solana-Google",
  },
  {
    label: "ContextGC repository",
    url: "https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC",
  },
  {
    label: "ContextGC user manual",
    url: "https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md",
  },
  {
    label: "ContextGC evidence explorer",
    url: "https://contextgc-build-week.trytrytry.chatgpt.site",
  },
];

const failures = [];
const warnings = [];
const timeoutMs = 15_000;

for (const target of targets) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(target.url, {
      method: "GET",
      redirect: "follow",
      headers: { "user-agent": "procloudkim-profile-link-check/1.0" },
      signal: controller.signal,
    });

    const result = `${target.label}: HTTP ${response.status} -> ${response.url}`;
    if (response.ok) {
      console.log(`LINK_OK ${result}`);
    } else if ([401, 403, 429].includes(response.status)) {
      warnings.push(`${result} (remote access policy; verify manually)`);
    } else {
      failures.push(result);
    }
  } catch (error) {
    failures.push(`${target.label}: ${error.name}: ${error.message}`);
  } finally {
    clearTimeout(timeout);
  }
}

for (const warning of warnings) console.warn(`LINK_WARN ${warning}`);

if (failures.length > 0) {
  console.error("PROFILE_LINK_CHECK_FAIL");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log("PROFILE_LINK_CHECK_PASS");
  console.log(`- ${targets.length} critical links checked; ${warnings.length} access-policy warnings`);
}
