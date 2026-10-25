# Hyung Jun Kim

**Data Engineering · AI Evaluation**

I build data pipelines that show which step lost or rejected data, and evaluation gates that check AI answers against their evidence. When evidence is missing, the answer is withheld.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [한국어 소개](README.ko.md)

## Start here

### [FactoryScope](https://github.com/procloudkim/factoryscope)

`Airflow` · `PostgreSQL/TimescaleDB` · `pgvector` · `Individual research`

Loads public NASA IMS bearing-vibration data into TimescaleDB only after QA, idempotently and with lineage; failing data is quarantined. A maintenance report is issued only if citation hashes, entailment, and equipment scope all verify; otherwise `ABSTAIN`.

**Boundary:** not a production system. Anomaly-detector performance is `INSUFFICIENT_EVIDENCE`, so no detection claim. Public CI skips database tests; the full PostgreSQL run is a manual release gate.

### [Samnik Fact Room](https://github.com/procloudkim/samnik-fact-room)

`FastAPI` · `PostgreSQL/pgvector` · `React` · `Individual project`

Shows Samsung Electronics and SK hynix OpenDART figures with filing evidence; an answer is confirmed only if company, period, report, and consolidated/separate basis match the query and the latest valid filing is used.

**Boundary:** the public demo has ended; PostgreSQL integration tests were not run in public release QA. No operations, traffic, or performance claim.

### [OfficeAgent](https://github.com/procloudkim/2026-OfficeAgent)

`FastAPI` · `PostgreSQL/pgvector` · `SSE` · `Individual project`

A document Q&A API that searches only uploaded files and abstains without a relevant passage. Each upload is one PostgreSQL transaction, same-filename uploads are serialized, answers are not cached if any document changed during generation, and streaming never retries once answer text has been sent.

**Boundary:** not a production deployment. Known limits, including a possible deadlock, are listed in [How it works](https://github.com/procloudkim/2026-OfficeAgent/blob/main/docs/HOW-IT-WORKS.md).

## Work

**Product Engineer Intern, Factagora** · Sep–Nov 2026. Evaluation tooling for an LLM evidence-classification API. My contributions: a counter for responses filled with defaults instead of analysis, and a replay that regenerates test results to compare with the saved ones.

**DB and HR Manager, proptech startup** · 2023–2025. Automated one cross-team handoff with Slack, Google Calendar, and Google Sheets and timed it. The before/after timing is self-recorded, not an independent benchmark.

## Other projects

Each README states its own limits.

- **[Lease renewal baseline](https://github.com/procloudkim/2026-wanted)** · deployed service comparing a jeonse (deposit lease) renewal offer with actual renewals in the same complex and floor-area band.
- **[Quant Research Observatory](https://github.com/procloudkim/quant-research-showcase)** · static site for an ETF momentum backtest and its verification evidence; the research code is private.
- **[PUBG Telemetry Watch](https://github.com/procloudkim/pubg-telemetry-watch)** · pre-registered review of rule-based anomaly signals in match telemetry, reporting a null result.
- **[Agricultural weather pipeline](https://github.com/procloudkim/agri-weather-pipeline)** · five-person capstone; I owned collection from three public APIs and Bronze-to-Silver cleaning.
- **[Resumable collector](https://github.com/procloudkim/resumable-collector-fconline)** · individual project: file-based resume state and idempotent UPSERT.
- **[Three-tier observability](https://github.com/procloudkim/aws-3tier-observability)** · five-person course assignment; I rebuilt my CloudWatch and k6 part in 2026.

## Hackathon and contest entries

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Knowledge graph` · `Individual entry`

Turns **21,386 public UK Modern Slavery Registry records** into a citation-backed human review queue. Team registration was required, so I entered as a one-person team. Flagging calls no LLM: records are linked across years only by an exact, nonblank company number; name-only or conflicting identities stay on `HOLD`. [Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=en&theme=dark)

**Recognition:** [Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners); later invited to the founding cohort of Austin AI Hub's six-month AI Hub Incubator.

**Boundary:** review questions, never accusations; not a production system. The invitation implies no program completion or pilot deployment, and "individual entry" means no human teammates, not AI-free coding.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Gemini recommends products but holds no payment authority; three buyers' payments run as one atomic Solana transaction only after human confirmation and deterministic budget, product, expiry, and cost-share checks. [Demo and evidence](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**Boundary:** atomicity does not cover Firestore and Solana as one distributed transaction. One operator confirms all buyer roles on Devnet test tokens, so independent wallet approvals and payment safety are unproven.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive`

A reversible context-control plane for long Codex tasks: typed invariants protect exact constraints, sanitized evidence is keyed by SHA-256 hash, and transitions stop when a checkpoint fails integrity checks. [Evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site)

**Boundary:** SHA-256 gives content addressing and integrity checks, not encryption or authenticity. "Reversible" means restoring a verified checkpoint and its retained evidence, not Git state, files, commands, or side effects. A synthetic savings benchmark failed, so no cost-saving claim.

### [Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)

`Node.js` · `GitHub Copilot SDK` · `Azure App Service` · `Individual entry`

A productivity app where a GitHub Copilot SDK agent orders the day's tasks and drafts the top-priority one. Recorded 6th of 39 entries on the LipCoding 2026 leaderboard; not a formal award.

**Boundary:** Azure resources were deleted after the event; if Copilot sign-in (token or CLI login) or the CLI runtime is unavailable, the app uses a deterministic fallback.

## How I use AI coding tools

I build with Claude Code, Codex, and GitHub Copilot, using them to compare implementations and generate candidate tests. I accept a change only after an invariant check, a diff review, and negative-path tests, and narrow the public claim when evidence falls short.
