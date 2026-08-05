# Hyung Jun Kim

### Backend / AI Developer

I build **RAG backends and evidence-grounded AI systems** that make data consistency, failure boundaries, and human authority explicit and testable.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [한국어 소개](README.ko.md)

## Backend / AI role fit

- **RAG backend** — In a private individual hiring assignment, redesigned document Q&A around PostgreSQL/pgvector, version-aware cache invalidation, advisory-lock concurrency control, and retry only before the first user-visible SSE delta. Passed the BE/AI assignment; this was not a production deployment.
- **Workflow automation** — Reduced one cross-team feedback workflow from **11h 19m 40s to 4h 06m 06s** (about **63%**) in a self-recorded before/after comparison using Slack, Google Calendar, and Google Sheets.
- **Data engineering** — In a five-person training capstone, contributed five public-API research and collection paths, codebooks, manifest/log states, retry rules, S3 Bronze→Silver loading, and KMA incremental ETL fixes. **294,866,718 records** describe the team dataset scope, not my individual output.

## Engineering focus

- **Evidence-grounded AI** — connect claims to sources and keep uncertainty explicit as `HOLD`, `UNKNOWN`, or an evidence gap.
- **Failure-aware backends** — separate storage, revision, cache, streaming, and recovery boundaries so failures are observable and recoverable.
- **Human-controlled agents** — separate model suggestions from authority over transactions, files, deployment, or final decisions.

## Selected public systems

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `Individual project` · `One-person hackathon team`

Designed and built a system that turns **21,386 public UK Modern Slavery Registry records** into a citation-backed human review queue. The hackathon required a team registration, so the individual project was entered as a **one-person team**. Ambiguous identities and cases remain on hold instead of becoming unsupported conclusions.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=en&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

After the results, Austin AI Hub extended its six-month AI Hub Incubator beyond the original top five and **invited Unseen Graph to join the founding cohort**, with remote-first mentorship, monthly milestones, and a pathway toward pilot deployment with anti-trafficking organizations.

**Boundary:** review questions, never accusations. The incubator statement is an invitation, not an alumni or completed-program claim. “One-person team” describes the human team composition; it does not imply unaided coding, no external tools or libraries, production deployment, or domain adoption.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Built a human-authorized agentic-commerce prototype that separates Gemini recommendations from transaction authority. Human confirmation and deterministic budget, product, expiry, and share checks must pass before one atomic three-transfer transaction can be created. Rejected orders produce no signature, transaction, or entitlement.

[Demo and evidence ledger](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**Boundary:** Devnet test tokens and operator simulation only; this does not establish Mainnet or commercial-payment safety.

### [ContextGC](https://github.com/procloudkim/OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive` · `Safety / audit controller`

Built a reversible context-control plane for long Codex engineering tasks. It protects exact constraints as typed invariants, archives sanitized evidence by hash, and blocks lifecycle transitions when checkpoint integrity cannot be verified.

[Hosted evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site) · [User manual](https://github.com/procloudkim/OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md)

**Boundary:** its synthetic economics promotion gate failed, so I position it for integrity, audit, and recovery rather than claiming live cost savings.

<details>
<summary><strong>Additional public evidence</strong></summary>

- **[Librarian](https://github.com/procloudkim/2026-Global-AI-Hackathon-Series-with-Qwen-Cloud)** — evidence-backed persistent memory with exact-SHA deployment evidence and an explicit promotion `HOLD` when independent validation is missing.
- **[ReviewHarness](https://github.com/procloudkim/Ralphthon-ICML-2026-Track2)** — locally verified evaluation kernel with injection boundaries; live-provider and human-correlation validation remain unverified.
- **[Codex Obsidian Knowledge](https://github.com/procloudkim/codex-obsidian-knowledge)** — prerelease, traceable local knowledge capture and publication workflow.
- **[Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)** — AI-assisted productivity prototype recorded as 6th on the 2026 LipCoding leaderboard; this is a leaderboard result, not a formal award, and the leaderboard evidence was only partially reverified in this review.

</details>

## Technologies with project evidence

- **OfficeAgent — private individual hiring assignment:** Python, FastAPI, PostgreSQL, pgvector, SSE, automated tests, CI.
- **Unseen Graph — individual public project; one-person hackathon team:** deterministic knowledge graph, provenance, human review.
- **Mandate Pool — individual prototype:** TypeScript, Google ADK / Gemini, Solana Devnet.
- **Bespin capstone — scoped contribution in a five-person training project:** SQL, Parquet, and S3 in my collection/ETL scope; Glue, Step Functions, Athena, and QuickSight in the team architecture context.

**Current focus:** FastMCP/MCP tool integration and AI-agent service quality through ongoing training and individual study.

## How I use AI coding tools

I build with Codex and GitHub Copilot. I remain accountable for requirements interpretation, architecture choices, rejected alternatives, acceptance tests, failure boundaries, and every public claim on this profile.

## Contact

I am interested in **Backend / AI Developer** roles where provenance, system integrity, and safe agent behavior matter.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
