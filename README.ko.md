# Hyung Jun Kim

### Backend / AI Developer

저는 **근거 기반·실패 인지형 AI 시스템**을 만듭니다. 출처와 상태를 보존하고, 결정론적 검증과 사람의 승인을 통해 AI가 무엇을 믿고 실행해도 되는지 경계를 설계합니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [English](README.md)

## 기술 정체성

- **Evidence-grounded AI** — claim과 source를 연결하고 불확실성을 `HOLD`, `UNKNOWN`, evidence gap으로 남깁니다.
- **Failure-aware Backend** — storage, revision, cache, streaming, recovery 경계를 분리해 실패를 관찰·복구 가능하게 만듭니다.
- **Human-controlled Agents** — 모델의 제안과 transaction, file, deploy, 최종 판단 권한을 분리합니다.

## 대표 시스템

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `Team project`

영국 Modern Slavery Registry 공개 기록 **21,386건**을 출처 인용 기반 human review queue로 전환하는 시스템에 기여했습니다. 불확실한 identity와 case는 근거 없는 결론으로 바꾸지 않고 검토 상태로 보존합니다.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=ko&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

결과 발표 후 Austin AI Hub가 6개월 AI Hub Incubator를 기존 Top 5 밖으로 확대하면서, Unseen Graph는 remote-first mentorship, monthly milestone, anti-trafficking organization과의 pilot pathway를 지원하는 **founding cohort 참여 초청**을 받았습니다.

**경계:** accusations가 아니라 review questions를 제공합니다. Incubator 문구는 초청 사실이며 alumni·과정 수료 주장이 아닙니다. 개인 모듈 소유권을 보여주는 공개 contribution record가 마련되기 전까지 팀 프로젝트로 표현합니다.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Gemini의 상품 제안과 돈을 움직이는 권한을 분리한 human-authorized agentic-commerce prototype입니다. 사람 확인과 결정론적 예산·상품·만료·분담 정책을 모두 통과해야 세 전송을 하나의 transaction으로 만들며, 거부된 주문은 signature, transaction, entitlement를 생성하지 않습니다.

**경계:** Devnet test token과 operator simulation 범위이며 Mainnet·상용 결제 안전성을 증명하지 않습니다.

### [ContextGC](https://github.com/procloudkim/OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive` · `Safety / audit controller`

긴 Codex 작업의 정확한 제약을 typed invariant로 보호하고, sanitized evidence를 hash로 보관하며, checkpoint integrity를 확인할 수 없으면 lifecycle transition을 중단하는 reversible context-control plane입니다.

**경계:** synthetic economics promotion gate를 통과하지 못했으므로 비용 절감 도구가 아니라 integrity, audit, recovery controller로 포지셔닝합니다.

## 추가 증거

- **[Librarian](https://github.com/procloudkim/2026-Global-AI-Hackathon-Series-with-Qwen-Cloud)** — exact-SHA deployment evidence와 independent validation 부재 시 promotion `HOLD`를 갖는 persistent memory system.
- **[ReviewHarness](https://github.com/procloudkim/Ralphthon-ICML-2026-Track2)** — injection boundary를 둔 locally verified evaluation kernel. Live provider와 human correlation은 미검증입니다.
- **[Codex Obsidian Knowledge](https://github.com/procloudkim/codex-obsidian-knowledge)** — traceable local knowledge capture·publication prerelease.
- **[Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)** — 2026 LipCoding leaderboard 6위로 기록된 AI-assisted productivity prototype. 공식 수상 표현은 사용하지 않습니다.

## Backend·Delivery 요약

- 문서 Q&A backend architecture를 PostgreSQL + pgvector, corpus-revision cache invalidation, SSE, advisory lock, automated tests, CI로 구현한 **BE/AI 개발 과제전형을 통과**했습니다. 채용 과제 artifact이며 production deployment가 아니고 source는 private입니다.
- Slack, Calendar, Sheets 자동화로 스타트업 팀 간 feedback turnaround를 **11시간 19분 40초에서 4시간 06분 06초로 약 63% 단축**했습니다.
- 5인 data-engineering capstone에서 5개 public API의 ingestion contract와 backfill rule을 정의하고, **294,866,718건의 경매 기록**과 농업기상 데이터를 AWS pipeline으로 연결했습니다.

## 프로젝트·과제에서 사용한 기술

**Backend and data:** Python, FastAPI, REST, SSE, SQL, PostgreSQL, pgvector, SQLite  
**AI systems:** RAG, retrieval provenance, deterministic knowledge graph, human-in-the-loop validation  
**Agent and product systems:** TypeScript, Node.js, Google ADK, Gemini, Solana, WebSocket  
**Cloud and delivery:** AWS S3, Glue, Step Functions, EventBridge, Athena, QuickSight, Cloud Run, automated tests, CI

## AI coding tool 사용 원칙

Codex와 GitHub Copilot을 활용합니다. 요구사항 해석, architecture choice, rejected alternative, acceptance test, failure boundary와 이 프로필의 모든 공개 claim은 제가 설명하고 책임지는 범위로 유지합니다.

## Contact

Provenance, system integrity, safe agent behavior가 중요한 **Backend / AI Developer** 역할에 관심이 있습니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
