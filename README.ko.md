# Hyung Jun Kim

**Data Engineering · AI Evaluation**

데이터가 어디서 실패했는지 드러나는 data pipeline과, AI의 답을 근거와 대조하는 평가 경로를 만듭니다. 근거가 부족하면 답을 내지 않고 보류하도록 설계합니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [English](README.md)

## 먼저 볼 프로젝트

### [FactoryScope](https://github.com/procloudkim/factoryscope)

`Airflow` · `PostgreSQL/TimescaleDB` · `pgvector` · `개인 연구`

공개 제조 센서 시계열(NASA IMS 베어링 진동)을 다루는 fail-closed data pipeline입니다. QA와 quarantine을 통과한 데이터만 PostgreSQL/TimescaleDB에 idempotent하게 적재하고 lineage를 남깁니다. 6단계 Airflow DAG는 인용의 hash, entailment, 설비 scope가 모두 검증될 때만 정비 리포트를 만들고, 하나라도 맞지 않으면 `ABSTAIN`을 반환합니다.

**경계:** production 시스템이 아닙니다. Detector 성능은 `INSUFFICIENT_EVIDENCE`로 판정했으므로 이상 탐지 성능을 주장하지 않습니다. 공개 CI는 DB 없이 도는 빠른 검사만 실행하며, Docker와 실제 PostgreSQL을 쓰는 전체 검증은 수동 release gate로 남아 있습니다.

### [삼전닉스 팩트룸](https://github.com/procloudkim/samnik-fact-room)

`FastAPI` · `PostgreSQL/pgvector` · `React` · `개인 프로젝트`

삼성전자와 SK하이닉스의 OpenDART 공시에서 숫자와 원문 근거를 함께 보여 주는 금융 리서치 도구입니다. 회사, 기간, 보고서, 연결·별도 기준, 정정공시 revision이 모두 맞아야 답을 확정합니다. 같은 계정명이 여러 재무제표와 정정본에 있어 일부 값이 0으로 보이던 문제는, 최신 유효 revision을 먼저 고르고 지표마다 쓸 재무제표의 우선순위를 정해 해결했습니다.

**경계:** 공개 데모는 종료됐고 로컬 실행 절차를 제공합니다. PostgreSQL 통합 테스트는 현재 공개 릴리스 QA에서 실행하지 못했습니다. 지속 운영, 대규모 트래픽, 성능 우위는 주장하지 않습니다.

### [OfficeAgent](https://github.com/procloudkim/2026-OfficeAgent)

`FastAPI` · `PostgreSQL/pgvector` · `SSE` · `1인 채용 과제`

업로드한 문서만 근거로 답하는 문서 Q&A API입니다. 업로드 한 번을 PostgreSQL transaction 하나로 처리하고, revision check로 stale cache write를 막고, 문서 단위 lock으로 동시 업로드를 차례로 처리하며, 첫 SSE delta가 사용자에게 전달된 뒤에는 재시도하지 않습니다. [동작 원리](https://github.com/procloudkim/2026-OfficeAgent/blob/main/docs/HOW-IT-WORKS.md)

**경계:** 채용 과제 결과물이며 production에 배포한 시스템이 아닙니다. 교착 가능성을 포함한 알려진 한계는 저장소에 적었습니다.

## 경력

**팩타고라 Product Engineer Intern** · 2026.09.07 – 2026.11.06. LLM 기반 근거 분류 API의 평가 도구를 개선하는 작업에 참여하고 있습니다. 분석 없이 기본값으로 채워진 응답을 따로 집계하는 기능과, 저장된 실행 기록으로 시험 결과를 다시 만들어 저장본과 대조하는 기능이 그 작업의 일부입니다.

**이전 직무:** Slack, Google Calendar, Google Sheets를 연결해 팀 간 handoff workflow 하나를 자동화했습니다. 전후 소요 시간은 직접 기록한 값이므로 독립 재현된 benchmark로 표현하지 않습니다.

## 다른 공개 시스템

- **[갱신 기준선](https://github.com/procloudkim/2026-wanted)** · 전세 갱신 제안을 같은 단지·면적대의 실제 갱신 계약과 견줘 보는 웹 서비스입니다. 공개 실거래 신고 자료로 계산했습니다. 배포했지만 사용자 조사와 성과 수치는 없습니다.
- **[Quant Research Observatory](https://github.com/procloudkim/quant-research-showcase)** · ETF 모멘텀 백테스트의 결과와 검증 근거, AI 문서 추출 평가를 보여 주는 정적 사이트입니다. 연구 구현은 비공개라서 결과를 이 저장소에서 다시 실행할 수는 없습니다.
- **[PUBG Telemetry Watch](https://github.com/procloudkim/pubg-telemetry-watch)** · 매치 telemetry를 pre-registered protocol로 검토했습니다. Data contract를 먼저 정하고 데이터를 보기 전에 threshold를 고정했으며, 그렇게 얻은 null result도 숨기지 않고 결론으로 남겼습니다.
- **[농업기상 수집 파이프라인](https://github.com/procloudkim/agri-weather-pipeline)** · 5인 팀 프로젝트에서 공공 API 3종의 수집부터 Bronze에서 Silver로 가는 정제까지 한 갈래를 담당했습니다. 실행마다 남긴 quality metadata로 행 손실을 숫자로 확인합니다. AWS 운영 실적이 아니라 로컬 backfill reference implementation입니다.
- **[중단을 전제로 한 수집기](https://github.com/procloudkim/resumable-collector-fconline)** · 개인 프로젝트입니다. 재개 상태를 파일로 남기고 composite key UPSERT로 저장을 idempotent하게 만들었습니다. 직접 낸 결과를 세 번 의심해 그중 두 수치를 폐기했습니다. 수집 데이터는 공개하지 않습니다.
- **[AWS 3계층 observability](https://github.com/procloudkim/aws-3tier-observability)** · 5인 팀 과제에서 맡았던 CloudWatch agent 설치, EC2 IAM role, k6 baseline과 threshold를 2026년에 다시 구성했습니다. 부하 테스트는 다른 팀원이 실행했으므로 개선 폭을 수치로 말하지 않습니다.

## 해커톤 시스템

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Deterministic knowledge graph` · `Public demo` · `1인 팀`

영국 Modern Slavery Registry 공개 기록 **21,386건**을 출처가 달린 human review queue로 바꾸는 시스템을 혼자 기획하고 만들었습니다. 해커톤 규정상 팀으로 등록해야 해서, 구성원이 저 한 명인 **1인 팀**으로 참가했습니다. Flagging 경로에서는 LLM을 호출하지 않습니다. 비어 있지 않은 company number가 정확히 일치할 때만 연도 간 비교를 허용하고, 이름만 같거나 identity가 충돌하는 기록은 `HOLD`로 남깁니다.

[Live review workbench](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=ko&theme=dark) · [Official Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners)

**수상:** Top Ten Honors. 이후 Austin AI Hub로부터 6개월 과정인 AI Hub Incubator의 founding cohort에 참여해 달라는 초청을 받았습니다.

**경계:** 혐의를 제기하지 않고 검토할 질문만 제시합니다. Incubator 문구는 초청을 받았다는 사실이며, 과정 수료나 pilot 배포를 뜻하지 않습니다. `1인 팀`은 사람 팀원의 구성을 뜻할 뿐이며, AI 도구나 외부 라이브러리를 쓰지 않았다거나 production에 배포했다는 뜻이 아닙니다.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Gemini의 상품 추천과 거래 권한을 분리한 human-authorized agentic commerce prototype입니다. 사람의 확인과 예산·상품·만료·분담 조건에 대한 deterministic 검사를 모두 통과해야 세 건의 전송을 하나의 transaction으로 만듭니다. 거부된 주문에서는 signature, settlement, entitlement가 생기지 않습니다.

[Demo and evidence ledger](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**경계:** atomicity는 하나의 Solana transaction 안에 있는 세 transfer에만 적용되며, Firestore와 Solana를 하나의 distributed transaction으로 묶지 않습니다. Devnet test token과 operator simulation 범위이므로 세 개의 독립 wallet approval이나 상용 결제의 안전성을 증명하지 않습니다.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive` · `Safety / audit controller`

긴 Codex 작업을 위한 context-control plane입니다. 정확히 지켜야 할 제약을 typed invariant로 보호하고, sanitized evidence를 hash로 보관하며, checkpoint integrity를 확인할 수 없으면 lifecycle transition을 멈춥니다.

[Hosted evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site) · [User manual](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md)

**경계:** SHA-256은 content addressing과 integrity check를 제공하지만 encryption이나 authenticity를 보장하지 않습니다. `Reversible`은 검증된 context metadata와 evidence pointer를 복구한다는 뜻이며, Git state, file, command, redacted byte, external side effect를 되돌린다는 뜻이 아닙니다. Synthetic savings gate를 통과하지 못했으므로 live cost saving은 주장하지 않고 integrity, audit, recovery만 주장합니다.

### [Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)

`Node.js` · `GitHub Copilot SDK` · `Azure App Service` · `천하제일 입코딩 대회 2026` · `개인 참여`

GitHub Copilot SDK 에이전트가 하루 할 일의 순서를 정하고 첫 작업의 초안까지 만드는 생산성 웹앱입니다. 대회 순위판에 39팀 가운데 6위로 기록됐으며, 공식 수상은 아닙니다.

**경계:** 대회 뒤 Azure 배포를 삭제했습니다. 로컬에서는 deterministic fallback과 함께 실행됩니다.

## AI 코딩 도구 사용 원칙

Claude Code, Codex, GitHub Copilot으로 구현 대안을 비교하고 후보 테스트를 만듭니다. 변경은 명시적인 invariant에 연결하고, diff를 검토하고, negative-path test를 실행한 뒤에만 받아들입니다. Gate가 실패하면 공개 주장을 낮춥니다.

## 연락처

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/)
