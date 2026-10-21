# Hyung Jun Kim

### Data Engineering · AI Evaluation

I build data pipelines that show where data failed and evaluation paths that check AI answers against their evidence. When evidence is missing, the system holds instead of answering.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [한국어 소개](README.ko.md)

## Start here

### [FactoryScope](https://github.com/procloudkim/factoryscope)

`Airflow` · `PostgreSQL/TimescaleDB` · `pgvector` · `Individual research`

Validates public bearing-vibration sensor data (NASA IMS) through a fail-closed path of QA, quarantine, idempotent load, and lineage into PostgreSQL/TimescaleDB. Its six-stage Airflow DAG writes a maintenance report only when citation hash, entailment, and equipment scope all verify; otherwise it returns `ABSTAIN`.

**Boundary:** not a production system. Detector performance is `INSUFFICIENT_EVIDENCE`; no anomaly-detection claim. Public CI runs fast non-DB checks; the full Docker and PostgreSQL run is a manual release gate.

### [Samnik Fact Room](https://github.com/procloudkim/samnik-fact-room)

`FastAPI` · `PostgreSQL/pgvector` · `React` · `Individual project`

Shows Samsung Electronics and SK hynix figures from OpenDART filings together with their filing evidence. An answer is confirmed only when company, period, report, consolidated or separate basis, and correction revision all match. Duplicate account labels across statements and revisions once showed valid values as zero; selecting the latest valid revision first, then per-metric statement precedence, fixed it.

**Boundary:** the public demo has ended (local run steps remain), and PostgreSQL integration tests were not run in public release QA. No operations, traffic, or performance claim.

## Current role

**Product Engineer Intern, Factagora** · since Sep 2026. Contributing to evaluation tooling for an LLM-based evidence-classification API: a separate count of responses filled with defaults instead of analysis, and a replay that regenerates stored test results and compares them with saved copies.

## Other public systems

- **[Quant Research Observatory](https://github.com/procloudkim/quant-research-showcase)** · static site for an ETF momentum backtest, its verification evidence, and an AI document-extraction evaluation. The research code is private, so it cannot be rerun here.
- **[PUBG Telemetry Watch](https://github.com/procloudkim/pubg-telemetry-watch)** · pre-registered review of match telemetry: data contract first, thresholds frozen before the data, null result reported as the finding.
- **[Agricultural weather pipeline](https://github.com/procloudkim/agri-weather-pipeline)** · five-person capstone. I owned one branch from collection to Bronze-to-Silver cleansing across three public APIs; per-run quality metadata makes row loss a number. A local backfill reference, not an AWS operating record.
- **[Resumable collector](https://github.com/procloudkim/resumable-collector-fconline)** · solo. File-based resume state and idempotent composite-key UPSERT. I doubted my own results three times and retired two figures. Collected data is excluded.
- **[Three-tier observability](https://github.com/procloudkim/aws-3tier-observability)** · five-person assignment; my part rebuilt in 2026: CloudWatch agents, EC2 IAM role, k6 baseline and thresholds. A teammate ran the load tests, so no improvement figure.

## Hackathon systems

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `One-person team`

Turns **21,386 public UK Modern Slavery Registry records** into a citation-backed human review queue. The hackathon required team registration, so this individual project entered as a **one-person team**. The flagging path calls no LLM: exact nonblank company numbers enable cross-year comparison, while name-only or conflicting identities remain on `HOLD`.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=en&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

**Recognition:** Top Ten Honors; later invited to the founding cohort of Austin AI Hub's six-month AI Hub Incubator. **Boundary:** review questions, never accusations. The invitation is not an alumni, completed-program, or pilot-deployment claim, and "one-person team" does not imply unaided coding or production deployment.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Separates Gemini recommendations from transaction authority: human confirmation and deterministic budget, product, expiry, and share checks must pass before one atomic three-transfer transaction is created. Rejected orders produce no signature, settlement, or entitlement. [Demo and evidence ledger](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**Boundary:** atomicity covers the three transfers in one Solana transaction; it does not cover Firestore and Solana as one distributed transaction. Devnet test tokens and operator simulation only.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive`

A context-control plane for long Codex tasks: typed invariants protect exact constraints, sanitized evidence is archived by hash, and lifecycle transitions stop when checkpoint integrity cannot be verified. [Evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site) · [User manual](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md)

**Boundary:** SHA-256 gives content addressing and integrity checks, not encryption or authenticity. "Reversible" restores metadata and evidence pointers only. The synthetic savings gate failed, so I claim integrity, audit, and recovery, not cost savings.

## Earlier work

- **RAG backend, private hiring assignment:** document metadata and embeddings share one recovery boundary in PostgreSQL/pgvector. Revision checks block stale cache writes, per-document transaction-scoped locks serialize conflicting updates, and retries stop after the first user-visible SSE delta. A hiring-assignment artifact, not a production deployment.
- **Workflow automation:** connected Slack, Google Calendar, and Google Sheets for one cross-team handoff workflow. The before/after timing is self-recorded, not an independent benchmark.

## How I use AI coding tools

I build with Claude Code, Codex, and GitHub Copilot to compare implementation alternatives and generate candidate tests. I accept changes only after mapping them to explicit invariants, reviewing the diff, and running negative-path tests, and I lower public claims when a gate fails.

## Contact

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
