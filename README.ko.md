# Hyung Jun Kim

**Data Engineering · AI Evaluation**

어느 단계에서 데이터가 유실되거나 거부됐는지 드러나는 데이터 파이프라인과, AI의 답을 근거와 대조하는 평가 gate를 만듭니다. 근거가 없으면 답을 내지 않고 보류합니다.

[LinkedIn](https://www.linkedin.com/in/hyungjun-kim/) · [English](README.md)

## 먼저 볼 프로젝트

### [FactoryScope](https://github.com/procloudkim/factoryscope)

`Airflow` · `PostgreSQL/TimescaleDB` · `pgvector` · `개인 연구`

공개 데이터인 NASA IMS 베어링 진동 데이터를 QA를 통과한 뒤에만 TimescaleDB에 idempotent하게 적재하고 lineage를 남깁니다. QA를 통과하지 못한 데이터는 quarantine으로 보냅니다. 인용 hash, entailment, 설비 scope가 모두 검증을 통과할 때만 정비 리포트를 만들고, 하나라도 통과하지 못하면 `ABSTAIN`을 반환합니다.

**경계:** production 시스템이 아닙니다. 이상 탐지 모델의 성능 판정은 `INSUFFICIENT_EVIDENCE`이므로 탐지 성능을 주장하지 않습니다. 공개 CI는 데이터베이스 테스트를 건너뛰며, PostgreSQL을 쓰는 전체 실행은 수동 release gate로 남아 있습니다.

### [삼전닉스 팩트룸](https://github.com/procloudkim/samnik-fact-room)

`FastAPI` · `PostgreSQL/pgvector` · `React` · `개인 프로젝트`

삼성전자와 SK하이닉스의 OpenDART 공시 숫자를 공시 원문 근거와 함께 보여 줍니다. 회사, 기간, 보고서, 연결·별도 기준이 질문과 일치하고, 정정공시까지 반영한 유효한 최신 공시를 기준으로 했을 때만 답을 확정합니다.

**경계:** 공개 데모는 종료됐고, 공개 릴리스 QA에서는 PostgreSQL 통합 테스트가 실행되지 않았습니다. 운영, 트래픽, 성능에 대해서는 주장하지 않습니다.

### [OfficeAgent](https://github.com/procloudkim/2026-OfficeAgent)

`FastAPI` · `PostgreSQL/pgvector` · `SSE` · `개인 프로젝트`

업로드한 파일에서만 근거를 찾고, 관련 구절이 없으면 답하지 않는 문서 Q&A API입니다. 업로드 한 번은 PostgreSQL transaction 하나로 처리하고, 파일 이름이 같은 업로드는 동시에 들어와도 차례로 처리합니다. 답을 만드는 동안 문서가 하나라도 새로 저장되면 그 답은 cache에 저장하지 않습니다. 답의 첫 글자를 보낸 뒤에는 스트리밍을 재시도하지 않습니다.

**경계:** production에 배포한 시스템이 아닙니다. 교착(deadlock) 가능성을 포함한 알려진 한계는 [동작 원리](https://github.com/procloudkim/2026-OfficeAgent/blob/main/docs/HOW-IT-WORKS.md) 문서에 적었습니다.

## 경력

**팩타고라 Product Engineer Intern** · 2026.09.07 – 2026.11.06. LLM으로 근거를 분류하는 API의 평가 도구 작업에서, 분석 대신 기본값으로 채워진 응답의 수를 세는 기능과 시험 결과를 다시 생성해 저장본과 대조하는 기능을 맡았습니다.

**프롭테크 스타트업 DB·HR 매니저** · 2023 – 2025. Slack, Google Calendar, Google Sheets를 연결해 팀 간 인계 워크플로 하나를 자동화하고, 전후 소요 시간을 쟀습니다. 전후 소요 시간은 직접 기록한 값이므로 독립 재현된 benchmark로 표현하지 않습니다.

## 다른 프로젝트

각 저장소의 README에 그 프로젝트의 한계를 적었습니다.

- **[갱신 기준선](https://github.com/procloudkim/2026-wanted)** · 배포된 웹 서비스로, 전세 갱신 제안을 같은 단지·같은 면적대의 실제 갱신 계약과 비교합니다.
- **[Quant Research Observatory](https://github.com/procloudkim/quant-research-showcase)** · ETF 모멘텀 백테스트와 그 검증 근거를 보여 주는 정적 사이트입니다. 연구 코드는 비공개입니다.
- **[PUBG Telemetry Watch](https://github.com/procloudkim/pubg-telemetry-watch)** · 매치 telemetry의 룰 기반 이상 신호를, 데이터를 보기 전에 기준을 고정한 protocol로 검토했습니다. 결론은 null result입니다.
- **[농업기상 수집 파이프라인](https://github.com/procloudkim/agri-weather-pipeline)** · 5인 팀 캡스톤입니다. 공공 API 3종의 수집과 Bronze에서 Silver로 가는 정제를 제가 담당했습니다.
- **[중단을 전제로 한 수집기](https://github.com/procloudkim/resumable-collector-fconline)** · 개인 프로젝트입니다. 재개 상태를 파일로 남기고, UPSERT를 idempotent하게 구성했습니다.
- **[AWS 3계층 observability](https://github.com/procloudkim/aws-3tier-observability)** · 5인 팀 교육 과제입니다. 제가 맡았던 CloudWatch와 k6 설정을 2026년에 다시 구성했습니다.

## 해커톤·대회 출품작

### [Unseen Graph](https://github.com/procloudkim/2026-Call-for-Code-AI-United-Against-Trafficking)

`Responsible AI` · `Knowledge graph` · `개인 참여`

영국 Modern Slavery Registry의 공개 기록 **21,386건**을 출처가 달린 검토 대기열로 바꿔, 사람이 검토하도록 넘깁니다. 해커톤 규정상 팀으로 등록해야 해서, 구성원이 저 한 명인 1인 팀으로 참가했습니다. 검토 대상을 고르는 경로에서는 LLM을 호출하지 않습니다. 비어 있지 않은 회사 등록번호가 정확히 일치할 때만 연도가 다른 기록을 연결하고, 이름만 같거나 식별 정보가 서로 충돌하는 기록은 `HOLD`로 남깁니다. [검토 화면 데모](https://procloudkim.github.io/2026-Call-for-Code-AI-United-Against-Trafficking/graph-view/?lang=ko&theme=dark)

**수상:** [Top Ten Honors](https://austinaihub.org/case-studies/united-against-trafficking/winners). 이후 Austin AI Hub로부터 6개월 과정인 AI Hub Incubator의 founding cohort에 참여해 달라는 초청을 받았습니다.

**경계:** 혐의를 제기하지 않고 검토할 질문만 제시하며, production 시스템이 아닙니다. 초청은 과정 수료나 pilot 배포를 뜻하지 않습니다. 「개인 참여」는 사람 팀원이 없었다는 뜻이며, AI 도구 없이 만들었다는 뜻이 아닙니다.

### [Mandate Pool](https://github.com/procloudkim/2026-Solana-Google)

`TypeScript` · `Google ADK / Gemini` · `Solana Devnet` · `Prototype`

Gemini는 상품을 추천하지만 결제 권한은 없습니다. 사람이 확인하고, 예산·상품·만료·분담액에 대한 deterministic 검사를 모두 통과해야만 구매자 세 명의 결제를 하나의 atomic Solana transaction으로 실행합니다. [데모와 근거](https://github.com/procloudkim/2026-Solana-Google#심사자용-바로가기)

**경계:** 이 atomicity는 Firestore와 Solana를 하나의 distributed transaction으로 묶지 않습니다. 운영자 한 명이 Devnet test token으로 세 구매자 역할을 모두 확인하므로, 독립된 wallet 승인과 결제의 안전성은 입증되지 않았습니다.

### [ContextGC](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC)

`Codex plugin` · `Typed invariants` · `SHA-256 archive`

긴 Codex 작업을 위한 reversible context-control plane입니다. 정확히 지켜야 할 제약은 typed invariant로 보호하고, 비밀 정보를 제거한 evidence는 SHA-256 hash를 key로 삼아 보관합니다. 저장된 checkpoint가 integrity 검사를 통과하지 못하면 다음 단계로 넘어가지 않습니다. [Evidence explorer](https://contextgc-build-week.trytrytry.chatgpt.site) · [사용 설명서](https://github.com/procloudkim/2026-OpenAI-Build-Week-ContextGC/blob/main/docs/user-manual.md)

**경계:** SHA-256은 content addressing과 integrity check를 제공하지만 encryption이나 authenticity를 보장하지 않습니다. 「Reversible」은 검증된 checkpoint와 보관된 evidence를 복원한다는 뜻이며, Git 상태·파일·명령·외부 부수 효과를 되돌린다는 뜻이 아닙니다. Synthetic 절감 benchmark를 통과하지 못했으므로 비용 절감은 주장하지 않습니다.

### [Oh-My-DayAuto](https://github.com/procloudkim/2026-MS-Lipcoding-Fin)

`Node.js` · `GitHub Copilot SDK` · `Azure App Service` · `개인 참여`

GitHub Copilot SDK 에이전트가 하루 할 일의 순서를 정하고, 우선순위가 가장 높은 작업의 초안을 만드는 생산성 웹앱입니다. 천하제일 입코딩 대회 2026 순위판에 출품작 39개 가운데 6위로 기록됐으며, 공식 수상은 아닙니다.

**경계:** 대회 뒤 Azure 리소스를 삭제했습니다. Copilot token과 Copilot CLI 런타임 가운데 하나라도 없으면 앱은 deterministic fallback으로 동작합니다.

## AI 코딩 도구 사용 원칙

Claude Code, Codex, GitHub Copilot으로 개발하며, 구현안을 비교하고 후보 테스트를 만드는 데 씁니다. 변경은 invariant 검사, diff 검토, negative-path test를 거친 뒤에만 받아들이고, 근거가 모자라면 공개 주장의 범위를 줄입니다.
