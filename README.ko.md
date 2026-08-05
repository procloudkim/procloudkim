# Hyung Jun Kim

### Backend / AI Developer

저는 **RAG 백엔드와 근거 기반 AI 시스템**에서 데이터 일관성, 실패 경계, 사람의 최종 권한을 명시하고 테스트 가능하게 만듭니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [English](README.md)

## Backend / AI 직무 연결

- **RAG 백엔드** — 비공개 개인 채용 과제에서 문서 Q&A를 PostgreSQL/pgvector, version-aware cache invalidation, advisory lock 기반 동시성 제어, 첫 사용자-visible SSE delta 이전에만 허용하는 재시도로 재설계했습니다. BE/AI 과제전형을 통과했으며 프로덕션 배포 경험으로 표현하지 않습니다.
- **업무 자동화** — Slack·Google Calendar·Google Sheets를 연결해 특정 cross-team feedback workflow를 본인 전후 기록 기준 **11시간 19분 40초에서 4시간 06분 06초로 약 63% 단축**했습니다.
- **데이터 엔지니어링** — 5인 교육 capstone에서 5개 공공 API 조사·수집, codebook, manifest/log 상태, 재시도 기준, S3 Bronze→Silver 적재, KMA 증분 ETL 오류 수정에 기여했습니다. **294,866,718건**은 개인 산출량이 아니라 팀 전체 dataset 범위입니다.

## 기술 정체성

- **Evidence-grounded AI** — claim과 source를 연결하고 불확실성을 `HOLD`, `UNKNOWN`, evidence gap으로 남깁니다.
- **Failure-aware Backend** — storage, revision, cache, streaming, recovery 경계를 분리해 실패를 관찰·복구 가능하게 만듭니다.
- **Human-controlled Agents** — 모델의 제안과 transaction, file, deploy, 최종 판단 권한을 분리합니다.

## 대표 공개 시스템

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `개인 프로젝트` · `해커톤 등록상 1인 팀`

영국 Modern Slavery Registry 공개 기록 **21,386건**을 출처 인용 기반 human review queue로 전환하는 시스템을 기획·설계·구현했습니다. 해커톤 참가 규정상 team으로 등록했지만 구성원은 본인 한 명인 **1인 팀**이었습니다. 불확실한 identity와 case는 근거 없는 결론으로 바꾸지 않고 검토 상태로 보존합니다.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=ko&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

결과 발표 후 Austin AI Hub가 6개월 AI Hub Incubator를 기존 Top 5 밖으로 확대하면서, Unseen Graph는 remote-first mentorship, monthly milestone, anti-trafficking organization과의 pilot pathway를 지원하는 **founding cohort 참여 초청**을 받았습니다.

**경계:** accusations가 아니라 review questions를 제공합니다. Incubator 문구는 초청 사실이며 alumni·과정 수료 주장이 아닙니다. `1인 팀`은 사람 팀원의 구성 범위를 뜻하며 AI 보조 없는 수작업, 외부 도구·라이브러리 미사용, 프로덕션 배포, 도메인 도입을 뜻하지 않습니다.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Gemini의 상품 제안과 돈을 움직이는 권한을 분리한 human-authorized agentic-commerce prototype입니다. 사람 확인과 결정론적 예산·상품·만료·분담 정책을 모두 통과해야 세 전송을 하나의 transaction으로 만들며, 거부된 주문은 signature, transaction, entitlement를 생성하지 않습니다.

**경계:** Devnet test token과 operator simulation 범위이며 Mainnet·상용 결제 안전성을 증명하지 않습니다.

### [ContextGC](https://github.com/procloudkim/OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive` · `Safety / audit controller`

긴 Codex 작업의 정확한 제약을 typed invariant로 보호하고, sanitized evidence를 hash로 보관하며, checkpoint integrity를 확인할 수 없으면 lifecycle transition을 중단하는 reversible context-control plane입니다.

**경계:** synthetic economics promotion gate를 통과하지 못했으므로 비용 절감 도구가 아니라 integrity, audit, recovery controller로 포지셔닝합니다.

<details>
<summary><strong>추가 공개 증거</strong></summary>

- **[Librarian](https://github.com/procloudkim/2026-Global-AI-Hackathon-Series-with-Qwen-Cloud)** — exact-SHA deployment evidence와 independent validation 부재 시 promotion `HOLD`를 갖는 persistent memory system.
- **[ReviewHarness](https://github.com/procloudkim/Ralphthon-ICML-2026-Track2)** — injection boundary를 둔 locally verified evaluation kernel. Live provider와 human correlation은 미검증입니다.
- **[Codex Obsidian Knowledge](https://github.com/procloudkim/codex-obsidian-knowledge)** — traceable local knowledge capture·publication prerelease.
- **[Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)** — 2026 LipCoding leaderboard 6위로 기록된 AI-assisted productivity prototype. 공식 수상이 아니며, 이번 검토에서 leaderboard evidence는 부분 검증 상태입니다.

</details>

## 프로젝트 근거가 있는 기술

- **OfficeAgent — 비공개 개인 채용 과제:** Python, FastAPI, PostgreSQL, pgvector, SSE, automated tests, CI.
- **Unseen Graph — 개인 공개 프로젝트·해커톤 등록상 1인 팀:** deterministic knowledge graph, provenance, human review.
- **Mandate Pool — 개인 prototype:** TypeScript, Google ADK / Gemini, Solana Devnet.
- **Bespin capstone — 5인 교육 팀 프로젝트의 제한된 개인 기여:** 개인 수집·ETL 범위의 SQL, Parquet, S3; 팀 아키텍처 맥락의 Glue, Step Functions, Athena, QuickSight.

**현재 집중:** 이어드림 스쿨 교육과 개인 학습을 통한 FastMCP/MCP 기반 tool integration, AI-agent service quality.

## AI coding tool 사용 원칙

Codex와 GitHub Copilot을 활용합니다. 요구사항 해석, architecture choice, rejected alternative, acceptance test, failure boundary와 이 프로필의 모든 공개 claim은 제가 설명하고 책임지는 범위로 유지합니다.

## Contact

Provenance, system integrity, safe agent behavior가 중요한 **Backend / AI Developer** 역할에 관심이 있습니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
