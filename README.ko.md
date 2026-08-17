# Hyung Jun Kim

### Backend / AI Developer

저는 **RAG와 근거 기반 AI를 위한 백엔드 시스템**을 만들며, 데이터 일관성·실패 경계·사람의 검토 권한에 집중합니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [English](README.md)

## Backend / AI 직무 연결

- **RAG 백엔드 — 비공개 개인 채용 과제:** document metadata와 embedding을 PostgreSQL/pgvector에 통합해 update의 recovery boundary를 하나로 두었습니다. revision check로 stale cache write를 막고, 문서 단위 transaction-scoped lock으로 충돌 update를 직렬화했으며, 첫 사용자-visible SSE delta 이후에는 재시도하지 않습니다. 채용 과제 artifact이며 production deployment가 아닙니다.
- **업무 자동화:** Slack·Google Calendar·Google Sheets를 특정 cross-team handoff workflow로 연결했습니다. 전후 시간은 본인 기록이므로 독립 재현된 benchmark로 표현하지 않습니다.
- **데이터 엔지니어링:** 5인 교육 capstone에서 농업기상 branch 하나를 공공 API 3종에 걸쳐 A to Z로 직접 소유했습니다.

## 기술 정체성

- **Evidence-grounded AI** — claim과 source를 연결하고 불확실성을 `HOLD`, `UNKNOWN`, evidence gap으로 남깁니다.
- **Failure-aware Backend** — storage, revision, cache, streaming, recovery 경계를 분리해 실패를 관찰·복구 가능하게 만듭니다.
- **Human-controlled Agents** — 모델의 제안과 transaction, file, deploy, 최종 판단 권한을 분리합니다.

## 대표 공개 시스템

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `개인 프로젝트` · `해커톤 등록상 1인 팀`

영국 Modern Slavery Registry 공개 기록 **21,386건**을 출처 인용 기반 human review queue로 전환하는 시스템을 기획·설계·구현했습니다. 해커톤 참가 규정상 team으로 등록했지만 구성원은 본인 한 명인 **1인 팀**이었습니다. Flagging path에서는 LLM을 호출하지 않으며, 비어 있지 않은 정확한 company number가 있을 때만 연도 간 비교를 허용하고 이름만 같거나 identity가 충돌하면 `HOLD`로 남깁니다.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=ko&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

**Recognition:** Top Ten Honors. 이후 Austin AI Hub로부터 6개월 AI Hub Incubator의 founding cohort 참여 초청을 받았습니다.

**경계:** accusations가 아니라 review questions를 제공합니다. Incubator 문구는 초청 사실이며 alumni·과정 수료·pilot deployment 주장이 아닙니다. `1인 팀`은 사람 팀원의 구성 범위를 뜻하며 AI 보조 없는 수작업, 외부 도구·라이브러리 미사용, production deployment, 도메인 도입을 뜻하지 않습니다.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Gemini의 상품 제안과 돈을 움직이는 권한을 분리한 human-authorized agentic-commerce prototype입니다. 사람 확인과 결정론적 예산·상품·만료·분담 정책을 모두 통과해야 세 전송을 하나의 transaction으로 만들며, 거부된 주문은 signature, settlement, entitlement를 생성하지 않습니다.

[Demo and evidence ledger](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**경계:** atomicity는 하나의 Solana transaction 안에 있는 세 transfer에만 적용되며 Firestore와 Solana를 하나의 distributed transaction으로 묶지 않습니다. Devnet test token과 operator simulation 범위이며, 세 개의 독립 wallet approval이나 상용 결제 안전성을 증명하지 않습니다.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive` · `Safety / audit controller`

긴 Codex 작업의 정확한 제약을 typed invariant로 보호하고, sanitized evidence를 hash로 보관하며, checkpoint integrity를 확인할 수 없으면 lifecycle transition을 중단하는 context-control plane입니다.

[Hosted evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site) · [User manual](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md)

**경계:** SHA-256은 content addressing과 integrity check를 제공하지만 encryption이나 authenticity를 보장하지 않습니다. `Reversible`은 검증된 context metadata와 evidence pointer를 복구한다는 뜻이며 Git state, file, command, redacted byte, external side effect를 되돌린다는 뜻이 아닙니다. Synthetic savings gate를 통과하지 못했으므로 live cost saving이 아니라 integrity, audit, recovery만 주장합니다.

## 교육 기간 시스템

2025년에서 2026년 데이터 엔지니어링 과정의 세 프로젝트입니다. 각각 무엇을 입증하지 않는지 함께 적었습니다.

**[3계층 관측](https://github.com/procloudkim/aws-3tier-observability)** | 5인 팀 중간 과제, 2025년 10월. CloudWatch 에이전트의 3계층 설치, EC2 IAM 역할, k6 baseline과 임곗값 정의를 직접 소유했습니다. 겹친 설정은 덮어쓰지 않고 걷어낸 뒤 다시 설치해야 했습니다. 덮어쓰면 그 순간엔 동작하지만 나중에 상태를 판정할 수 없게 됩니다. **경계:** 본인 소유 범위만 2026년에 재구성한 것이며 당시 팀 산출물 원본이 아닙니다. 부하 테스트 실행은 다른 팀원 소유이므로 개선 폭을 수치로 말하지 않습니다.

**[농업기상 파이프라인](https://github.com/procloudkim/agri-weather-pipeline)** | 5인 팀 Final Project, 2025년 12월에서 2026년 1월. 공공 API 3종에 걸쳐 수집, 코드북, 장기 backfill, Bronze에서 Silver 정제까지 branch 하나를 A to Z로 소유했습니다. 실행 단위로 입력 행수, 출력 행수, 키 중복, 행 중복, 키 충돌을 기록해 행 손실을 말이 아니라 값으로 보이게 했습니다. **경계:** 플랫폼, 경매 유통, ML branch는 팀원 소유이며 이 저장소에 없습니다. 로컬 백필 참조 구현이고 AWS 운영 실적이 아닙니다.

**[중단 전제 수집기](https://github.com/procloudkim/resumable-collector-fconline)** | 개인 단독 프로젝트, 2025년 9월. 오래 걸리는 작업은 끊긴다는 것을 기본값으로 두어 재개 상태를 파일로 남기고 복합키 UPSERT로 저장을 멱등하게 했습니다. 자기가 만든 결과를 세 번 뒤집었습니다. 168만이라던 수집량이 물리 줄 수 오측정이었고, 최고가와 평균가가 같은 값이라 파서 오염을 찾아 가격 주장 전체를 철회했으며, 감성 분포가 상식과 어긋나 데이터가 아니라 분류기를 의심했습니다. **경계:** 데이터는 전량 제외했으므로 분석은 이 저장소에서 재현되지 않습니다. 관찰된 상관이며 인과 주장이 아닙니다.

첫 과제에서 시스템을 재본 경험이 다 세운 뒤가 아니라 세우면서 관측을 붙이는 습관으로 이어졌고, 그것이 다음 파이프라인의 실행 단위 품질 메타 설계가 됐습니다.

## AI coding tool 사용 원칙

Codex와 GitHub Copilot으로 구현 대안을 비교하고 후보 테스트를 만듭니다. 명시적 invariant에 연결하고, diff를 검토하고, negative-path test를 실행하고, gate가 실패하면 공개 claim을 낮춘 뒤에만 변경을 수용합니다. ContextGC의 synthetic savings gate 실패가 공개 예시입니다.

## Contact

Provenance, system integrity, safe agent behavior가 중요한 **Backend / AI Developer** 역할에 관심이 있습니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
