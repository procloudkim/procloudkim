# Hyung Jun Kim

### AI Builder(Backend / AI Developer)

I build **backend systems for RAG and evidence-grounded AI**, focusing on data consistency, failure boundaries, and human review.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [한국어 소개](README.ko.md)

## Backend / AI role fit

- **RAG backend — private hiring assignment:** unified document metadata and embeddings in PostgreSQL/pgvector to keep updates within one recovery boundary. Revision checks prevent stale cache writes, per-document transaction-scoped locks serialize conflicting updates, and retries stop after the first user-visible SSE delta. This was a hiring-assignment artifact, not a production deployment.
- **Workflow automation:** connected Slack, Google Calendar, and Google Sheets for one cross-team handoff workflow. The before/after timing is self-recorded, so I do not present it as an independently reproduced benchmark.
- **Data engineering — five-person training capstone:** defined collection and retry states for five public APIs and contributed S3 Bronze→Silver loading and KMA incremental ETL fixes.

## Engineering focus

- **Evidence-grounded AI** — connect claims to sources and keep uncertainty explicit as `HOLD`, `UNKNOWN`, or an evidence gap.
- **Failure-aware backends** — separate storage, revision, cache, streaming, and recovery boundaries so failures are observable and recoverable.
- **Human-controlled agents** — separate model suggestions from authority over transactions, files, deployment, or final decisions.

## Selected public systems

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `Individual project` · `One-person hackathon team`

Designed and built a system that turns **21,386 public UK Modern Slavery Registry records** into a citation-backed human review queue. The hackathon required team registration, so this individual project was entered as a **one-person team**. The flagging path calls no LLM: exact nonblank company numbers enable cross-year comparison, while name-only or conflicting identities remain on `HOLD`.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=en&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

**Recognition:** Top Ten Honors. Austin AI Hub later invited Unseen Graph to the founding cohort of its six-month AI Hub Incubator.

**Boundary:** review questions, never accusations. The incubator statement is an invitation, not an alumni, completed-program, or pilot-deployment claim. “One-person team” describes the human team composition; it does not imply unaided coding, no external tools or libraries, production deployment, or domain adoption.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Built a human-authorized agentic-commerce prototype that separates Gemini recommendations from transaction authority. Human confirmation and deterministic budget, product, expiry, and share checks must pass before one atomic three-transfer transaction can be created. Rejected orders produce no signature, settlement, or entitlement.

[Demo and evidence ledger](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**Boundary:** atomicity is limited to the three transfers inside one Solana transaction; it does not cover Firestore and Solana as one distributed transaction. Devnet test tokens and operator simulation only—not three independent wallet approvals or commercial-payment safety.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive` · `Safety / audit controller`

Built a context-control plane for long Codex engineering tasks. It protects exact constraints as typed invariants, archives sanitized evidence by hash, and blocks lifecycle transitions when checkpoint integrity cannot be verified.

[Hosted evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site) · [User manual](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md)

**Boundary:** SHA-256 provides content addressing and integrity checks, not encryption or authenticity. “Reversible” restores verified context metadata and evidence pointers—not Git state, files, commands, redacted bytes, or external side effects. Its synthetic savings gate failed, so I claim integrity, audit, and recovery—not live cost savings.

## How I use AI coding tools

I build with Codex and GitHub Copilot to compare implementation alternatives and generate candidate tests. I accept changes only after mapping them to explicit invariants, reviewing the diff, running negative-path tests, and reducing public claims when a gate fails. ContextGC's failed synthetic savings gate is one public example.

## Contact

I am interested in **Backend / AI Developer** roles where provenance, system integrity, and safe agent behavior matter.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
