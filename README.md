# Hyung Jun Kim

**Data Engineering · AI Evaluation**

I build data pipelines that show where data failed and evaluation paths that check AI answers against their evidence. When evidence is missing, the system holds instead of answering.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [한국어 소개](README.ko.md)

## Start here

### [FactoryScope](https://github.com/procloudkim/factoryscope)

`Airflow` · `PostgreSQL/TimescaleDB` · `pgvector` · `Individual research`

Validates public NASA IMS bearing-vibration data through a fail-closed path of QA, quarantine, idempotent load, and lineage into PostgreSQL/TimescaleDB. It writes a maintenance report only when citation hash, entailment, and equipment scope verify; otherwise `ABSTAIN`.

**Boundary:** not a production system. Detector performance is `INSUFFICIENT_EVIDENCE`; no anomaly-detection claim. Public CI skips the database; the full PostgreSQL run is a manual release gate.

### [Samnik Fact Room](https://github.com/procloudkim/samnik-fact-room)

`FastAPI` · `PostgreSQL/pgvector` · `React` · `Individual project`

Shows Samsung Electronics and SK hynix OpenDART figures with their filing evidence, confirming an answer only when company, period, report, consolidated or separate basis, and correction revision all match.

**Boundary:** the public demo has ended (local run steps remain); PostgreSQL integration tests were not run in release QA. No operations, traffic, or performance claim.

### [OfficeAgent](https://github.com/procloudkim/2026-OfficeAgent)

`FastAPI` · `PostgreSQL/pgvector` · `SSE` · `Solo hiring assignment`

A document Q&A API that answers only from uploaded files: one PostgreSQL transaction per upload, revision checks against stale cache writes, per-document locks for concurrent uploads, and no retry after the first visible SSE delta. [How it works](https://github.com/procloudkim/2026-OfficeAgent/blob/main/docs/HOW-IT-WORKS.md)

**Boundary:** a hiring-assignment artifact, not a production deployment; known limits, including a possible deadlock, are listed there.

## Work

**Product Engineer Intern, Factagora** · Sep – Nov 2026. Contributing to evaluation tooling for an LLM-based evidence-classification API: a separate count of responses filled with defaults instead of analysis, and a replay that regenerates stored test results and compares them with saved copies.

**Earlier role:** automated one cross-team handoff with Slack, Google Calendar, and Google Sheets. The before/after timing is self-recorded, not an independent benchmark.

## Other public systems

- **[Lease renewal baseline](https://github.com/procloudkim/2026-wanted)** · compares a jeonse renewal offer with actual renewals for the same complex and floor area, from public transaction records. Deployed; no user research or outcome metric.
- **[Quant Research Observatory](https://github.com/procloudkim/quant-research-showcase)** · static site for an ETF momentum backtest, its verification evidence, and an AI extraction evaluation; the research code is private.
- **[PUBG Telemetry Watch](https://github.com/procloudkim/pubg-telemetry-watch)** · pre-registered telemetry review: data contract first, thresholds frozen before the data, null result reported as the finding.
- **[Agricultural weather pipeline](https://github.com/procloudkim/agri-weather-pipeline)** · five-person capstone; I owned one branch, from collection to Bronze-to-Silver cleansing, with per-run row-loss metadata. A local backfill reference, not an AWS operating record.
- **[Resumable collector](https://github.com/procloudkim/resumable-collector-fconline)** · solo. File-based resume state and idempotent composite-key UPSERT; I retired two of my own figures after rechecking. Collected data is excluded.
- **[Three-tier observability](https://github.com/procloudkim/aws-3tier-observability)** · five-person assignment; my part (CloudWatch agents, IAM role, k6 thresholds) rebuilt in 2026. A teammate ran the load tests, so no improvement figure.

## Hackathon systems

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `One-person team`

Turns **21,386 public UK Modern Slavery Registry records** into a citation-backed human review queue. The flagging path calls no LLM: only exact nonblank company numbers enable cross-year comparison; name-only or conflicting identities stay on `HOLD`.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=en&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

**Recognition:** Top Ten Honors; later invited to the founding cohort of Austin AI Hub's six-month AI Hub Incubator. **Boundary:** review questions, never accusations. The invitation is not an alumni, completed-program, or pilot-deployment claim, and "one-person team" does not imply unaided coding or production deployment.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Separates Gemini recommendations from transaction authority: a human confirmation and deterministic budget, product, expiry, and share checks gate one atomic three-transfer transaction. [Demo and evidence ledger](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**Boundary:** atomicity covers the three transfers in one Solana transaction; it does not cover Firestore and Solana as one distributed transaction. Devnet test tokens and operator simulation only.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive`

A context-control plane for long Codex tasks: typed invariants protect exact constraints, evidence is archived by hash, and transitions stop when checkpoint integrity fails to verify. [Evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site)

**Boundary:** SHA-256 gives content addressing and integrity checks, not encryption or authenticity. The synthetic savings gate failed, so I claim integrity, audit, and recovery, not cost savings.

### [Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)

`Node.js` · `GitHub Copilot SDK` · `Azure App Service` · `LipCoding 2026` · `Individual entry`

A productivity app where a GitHub Copilot SDK agent orders the day's tasks and drafts the first. Recorded 6th of 39 entries on the event leaderboard; not a formal award.

**Boundary:** Azure deployment removed after the event; runs locally with a deterministic fallback.

## How I use AI coding tools

I build with Claude Code, Codex, and GitHub Copilot to compare implementation alternatives and generate candidate tests. I accept changes only after mapping them to explicit invariants, reviewing the diff, and running negative-path tests, and I lower public claims when a gate fails.
