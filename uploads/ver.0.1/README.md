# Handoff: ATOMY Master Profile (Mobile + Desktop)

## Overview

애터미 사업자 개인 프로필 페이지 — 비회원이 마스터의 콘텐츠를 보고 사업자 가입을 결정하도록 돕는 단일 페이지 웹앱(SPA)이에요. 4개 메뉴로 구성된 GNB 라우팅 구조이고, **모바일(Android 393×852)과 PC(1280×820 BrowserWindow) 두 디바이스를 동시에 지원**합니다.

핵심 기능:
- **석세스클립 (홈)** — 마스터의 미디어 캐러셀 + 50개 숏폼 그리드 + 풀스크린 플레이어
- **제품구매** — 12개 제품 리스트 + 헤모힘 샷 상세 페이지 (1개 풀 상세)
- **인생시나리오** — AI 자동 생성 영상 + 8각형 인생 수레바퀴 (8개 항목 인터랙티브)
- **애터미소개** — 회원 소개 영상 + 글로벌 통계 6 + 제품군 4섹션
- **공통 요소** — 우측 하단 백조 챗봇(가입문의 폼 + 음성 대화), 알림 드롭다운, 언어 선택, 좋아요/스크롤 인터랙션

## About the Design Files

이 핸드오프 번들의 모든 HTML/JSX 파일은 **디자인 레퍼런스**예요. React 18 + 인라인 Babel + 글로벌 window 객체 기반으로 빠르게 프로토타입화한 것이라 그대로 프로덕션에 올리는 코드가 아닙니다.

개발자는 이 디자인을 **타겟 코드베이스의 기존 환경**(예: Next.js + TypeScript + TailwindCSS, Vue3 + Pinia, SwiftUI 등)에 맞춰 **재구현**해야 합니다. 환경이 아직 없다면 다음 스택을 추천합니다:

- **프론트엔드**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **상태 관리**: Zustand (페이지/모달 상태가 단순) — Redux는 과한 수준
- **애니메이션**: Framer Motion (이 디자인에 들어간 keyframes/transitions를 선언적으로 표현 가능)
- **영상**: HTML5 `<video>` + IntersectionObserver (이미 데모에 사용 중)
- **차트**: 인생 수레바퀴는 외부 차트 라이브러리 말고 **순수 SVG**로 직접 그리는 게 디자인 의도에 가장 부합 (8각형 그리드 + 다각형 채움)

본 README의 구조·색상·타이포그래피·인터랙션 명세를 그대로 옮기되, 각 컴포넌트는 코드베이스의 기존 디자인 시스템 컴포넌트(Button, Modal, Input 등)를 재사용해 구현해주세요.

## Fidelity

**High-fidelity** — 실제 컬러(`#00B6F0` 시안 블루 등), 폰트(`Pretendard`), 정확한 spacing, 모든 인터랙션 상태와 애니메이션이 명세돼 있습니다. 개발자는 픽셀 정확도로 재현하되, 재사용 가능한 디자인 시스템 컴포넌트로 구현해주세요.

---

## Screens / Views

라우팅 구조: **하나의 SPA 안에서 `currentPage` 상태**로 4개 메인 페이지가 전환됩니다. 풀스크린 모달이 아닌 **콘텐츠 영역 교체** 방식.

### 0. 글로벌 레이아웃 (모든 페이지 공통)

#### PC 헤더 (sticky, h: 84px, 1280px 폭)
좌측에서 우측으로:
- **로고** — `atom美 / ATOMY` SVG 또는 PNG (40px 높이) → 클릭 시 currentPage='shop' (제품구매 메인)
- **언어 선택 칩** — `🌐 한국어 ▾` (4개국어: 한국어, ENGLISH, 日本語, 中文) — 클릭 시 드롭다운
- **메뉴 4탭** — 제품구매 / 석세스클립 / 인생시나리오 / 애터미소개. 활성 탭은 하단에 시안 underline 2px + 800 weight
- **검색바** (280px) — placeholder: "제품, 석세스클립 검색"
- **알림 종 아이콘** + 빨간 카운트 배지 `3` — 클릭 시 380px 드롭다운
- **장바구니** + 시안 카운트 배지 `2`

#### 모바일 헤더 (sticky, h: 약 50px)
- 좌측: atom美 로고 (28px) + 한국어 언어 선택 칩
- 우측: 🔍 검색 / 🔔 알림(빨간 배지 3) / 🛍️ 장바구니

#### 모바일 푸터 네비 (sticky bottom, h: 약 60px)
4탭, 활성 탭에 시안 포인트바 + crown 색상 변경
- 🛍️ 제품구매
- ▶ 석세스클립 (기본)
- ✦ 인생시나리오 (8각형 다르마)
- ⓘ 애터미소개

#### 우측 하단 플로팅 (모든 페이지)
- **백조 캐릭터** (130px PC / 96px 모바일) — 흰색 그라디언트 원에 백조 PNG, idle 부유 애니메이션 (3초 주기)
- 호버 시 어두운 말풍선: "안녕하세요! 🦢"
- 우상단 빨간 알림 도트 `1` + 펄스 링
- 클릭 시 챗 패널 열림

---

### 1. 석세스클립 (홈, currentPage='shorts')

#### 모바일
1. **상단 미디어 캐러셀** (1:1 정사각, 높이 100vw) — 좌우 화살표로 이미지/영상 슬라이드. 좌상단 `VIDEO/PHOTO · n/total` 뱃지, 우상단 인디케이터 도트, 영상은 중앙 재생 버튼. 클릭 시 풀스크린 뷰어
2. **프로필 정보 카드** (padding 20px)
   - 좌측: `[👑 CHAIRMAN]` 시안 그라디언트 뱃지
   - 우측: SNS 4개 (Instagram, YouTube, Facebook, Naver Blog) — 호버 시 브랜드 컬러
   - 큰 텍스트: `대한민국 가장 존경받는 CEO` (네이비) + `몽상 박한길` (시안)
   - 소개글 인용문 (이탤릭)
3. **카테고리 탭 바** (sticky) — 전체/제품/기업/비즈니스/라이프 (5개)
4. **채널 필터 칩** — 채널: 전체 / 🛡 공식만 / 👤 개인만
5. **숏폼 그리드** (3열, 갭 0, 50개) — 각 카드:
   - 1:1 제품 이미지 + 컬러 톤 오버레이 (mix-blend-mode: multiply)
   - 좌상단 플래그 (공식=시안 채움 / 개인=라이트 그레이)
   - 우상단 재생시간
   - 중앙 큰 재생 버튼 (44px)
   - 하단 그라디언트 + 제목 + ▶조회수 · ♥좋아요
   - 호버 시 `scale(1.08)` 줌
   - **stagger fade-in**: 카드 인덱스 × 60ms 순차 등장

#### PC
좌측 **프로필 사이드 카드** (380px, sticky top: 88px)
- 1:1 미디어 캐러셀 + 좌우 화살표 (호버 시 visible)
- 직급 뱃지 + SNS + 이름 + 시안 디바이더 + 소개글
- "더 알아보기 ↓" 같은 추가 CTA 없음

우측 **클립 그리드** (4열 9:16 카드, 갭 16px)
- 카드 호버 시 `translateY(-3px)` + 영상 자동 미리보기 재생 (mute, loop, 인덱스 % 2의 영상 풀)
- 좌상단 플래그, 호버 중일 때만 좌상단에 `🔴 PREVIEW` 펄스 라이브 도트
- 우상단 재생시간
- 중앙 재생 버튼 (rest: 58px → hover: 68px)
- 하단 그라디언트 + 제목(14px) + ▶ 조회수 · ♥ 좋아요 (11.5px)

#### 풀스크린 숏폼 플레이어 (카드 클릭 시)
- 9:16 stage 중앙 배치 (PC: 338×600px, 모바일: 풀스크린)
- 위쪽 세그먼트 진행바 (50개) + DM 뱃지 + 닫기 버튼
- 영상 재생: 첫 번째 슬롯은 실제 mp4(`https://www.genspark.ai/api/files/s/mb60FN8q`), 나머지는 placeholder 그라디언트
- 우측 액션 스택 (♥ / 💬 / ↑ / ⋯) — 좋아요 클릭 시 **하트 폭발 파티클** (8개 작은 핑크 하트가 위로 흩어짐, 0.85s)
- 좌하단 캡션 (제목 + 통계)
- PC만 좌측 패널 (마스터 프로필 미니 카드 + 팔로우)
- PC만 우측 패널 (다음 클립 9개)
- **첫 번째 영상에는 `productAd` 떠다니는 광고** — 헤모힘 샷 보틀 + "이 제품이 궁금하시다면? ›" 라벨 칩, 부유 애니메이션 (4.5s)
- 광고 클릭 시 → 풀스크린 닫고 → currentPage='shop' + shopProduct=헤모힘 샷 상세

#### 인터랙션
- 키보드: ESC 닫기, ↑↓← → 이동, Space 재생/일시정지
- 마우스 휠: 다음/이전 슬라이드
- 터치: 위/아래 스와이프
- 더블 탭/클릭: 좋아요 토글

---

### 2. 제품구매 (currentPage='shop')

#### 메인 리스트 페이지
1. **히어로 배너** (붉은 그라디언트 `#FF6B5C → #E84141`)
   - 좌측: 카피 ("지금 몸을 깨우는 / 애터미 헤모힘 샷") + 가격 카드 + "상세보기 →" CTA
   - 우측: 헤모힘 샷 보틀 (180~260px) — `heroFloat` 부유 애니메이션 (3.5s)
2. **카테고리 칩 바** (sticky, 가로 스크롤)
   - 전체 / 베스트 / 신제품 / 건강식품 / 뷰티 / 헤어&바디 / 슬림바디
3. **베스트 픽 섹션** (전체 탭일 때만, 4개 카드)
4. **슬림바디 프로모션 섹션** (전체 탭일 때만, 2개 카드, 시안 PV 할인 표시)
5. **전체 상품 그리드** (모바일 2열 / PC 4열, 12개 제품)
6. **푸터** — 애터미㈜ 정보 + 대표이사 박한길, 윤용순

#### 제품 카드 디테일
- 1:1 정사각 이미지 + 호버 시 `scale(1.05)` 줌
- 좌상단 뱃지 (BEST=빨강, 신제품=시안, 프로모션=오렌지)
- 우상단 ❤️ 찜하기 (30px 흰 원, backdrop-blur)
- **헤모힘 샷만** 우하단 시안 "상세보기 ›" 칩 (다른 제품과 구분)
- 텍스트: 카테고리(10px) → 이름(14px 800w) → 서브카피(11px) → 가격(18px 900w) + 시안 PV 박스 + 별점

#### 헤모힘 샷 상세 페이지 (id='000017')
**Top: 갤러리 + 구매 영역** (좌우 분할)
- 좌측: `#FFF5F3` 그라디언트 배경 4:5 카드, 보틀 부유 애니메이션, 좌상단 "NEW · 출시 프로모션" + "기능성 표시 식품" 뱃지
- 우측:
  - 카테고리 + 영문명
  - 거대 이름 (32px 900w)
  - 태그라인 (14.5px)
  - 별점 카드 (4.8 / 후기 421건) — 노란 배경
  - 거대 가격 (42px) + PV 시안 박스
  - 수량 선택 (− 1 +)
  - 합계 박스 (시안 그라디언트, "총 결제 금액 + PV")
  - **CTA 그리드**: [장바구니 outline] / [지금 구매하기 →] (1:2 비율, 후자는 빨간 그라디언트)
  - 안전 표시 (회색 박스)

**그 다음 — 회원 소개 영상 섹션**
- 9:16 영상 카드 (자동 재생, IntersectionObserver로 화면 들어올 때만, 음소거)
- 클릭 시 풀스크린 모달 (사운드 + 컨트롤)
- 영상 옆 BEST 석세스클립 카피 + 메타 칩 (0:45 / 음소거 / 클릭 시 전체화면)

**나머지 섹션**
1. **핵심 함량 그리드** (4개 카드: 6,000mg 헤모힘 / 500mg 타우린 / 100ml / 24개월)
2. **7가지 포인트** (다크 네이비 섹션, 6개 카드 with SVG 아이콘 — leaf/bolt/fruit/liquid/glass/planet)
3. **추천 대상** (4개 이모지 카드)
4. **영양 정보 + 제품 정보** (2분할 표)
5. **고객 후기 421건** (별점 + 4개 리뷰 카드)
6. **푸터**

---

### 3. 인생시나리오 (currentPage='life')

1. **히어로** (네이비→시안 그라디언트 + 우측 거대 8각형 다르마 워터마크 opacity 0.06)
   - "LIFE SCENARIO" 키커
   - "몽상 박한길의 / 인생 시나리오" — 이름은 시안
   - 설명: "8개 인생 목표의 달성률을 8각형 수레바퀴로 시각화. 모든 항목이 100%에 닿으면 정팔각형의 인생 수레바퀴가 완성됩니다."
2. **AI 자동 생성 영상** (16:9, 자동 재생)
   - 좌상단 시안 그라디언트 칩 `✨ AI 자동 생성 영상`
   - 우상단 재생시간 1:42
   - 중앙 큰 재생 버튼
   - 하단 그라디언트 + "모든 목표가 완성된 미래"
   - 클릭 시 풀스크린 모달
3. **인생 수레바퀴 + 항목 카드 8개**
   - **PC**: 좌 카드 4 / 중앙 8각형 SVG / 우 카드 4 (3열 그리드)
   - **모바일**: 8각형 위 / 카드 2×4 그리드 아래
   - **8각형 SVG 동작**:
     - 그리드 8각형 10단계 (10/20/...100)
     - 사용자 데이터 다각형 (시안 그라디언트 채움 + 시안 stroke 2.4px)
     - 각 꼭짓점 도트 (5.5px 흰 원 + 시안 보더)
     - 외곽 라벨 (항목명 + %)
     - **진입 애니메이션**: `animPct: 0 → 1` 1.2s 동안 도트가 중심 → 자기 위치로 펼쳐짐
     - **꼭짓점 클릭** 또는 **카드 클릭** → 해당 카드가 시안 보더 2px + 글로우 + 살짝 떠오름 (3.5s 후 자동 해제), 동시에 도트도 시안 채움 + 펄스
     - smooth scrollIntoView로 카드 위치로 자동 스크롤
4. **라이프 하이라이트** — 가장 자랑스러운 항목 3개 (달성률 80%↑) Top 카드, 클릭 시 위 수레바퀴/카드 강조
5. **사업자 되기 CTA** (다크 네이비 + 8각형 워터마크 + 시안 키커 "BECOME AN ATOMY PARTNER" + "애터미 사업자가 되어 인생의 수레바퀴를 완성해보세요" + "[애터미 사업자 되기]" 흰 캡슐 버튼)
6. **푸터**

#### 인생 목표 8개 데이터 (각도 0=12시부터 시계방향 45°씩)
| key | label | pct | desc |
|-----|-------|-----|------|
| car | 차 | 90 | 페라리 1억 2000만원 → 2026년 1억 6천만원 월수입 시 2026년형으로 |
| house | 집 | 90 | 15억 50평 → 2027년 100평 아파트 |
| hobby | 취미 | 50 | 2026년까지 못해본 취미 5개 |
| travel | 여행 | 90 | 중동 정복 |
| family | 가족 | 70 | 매년 자식 용돈 늘리기 |
| faith | 신앙 | 90 | 사경회 매월 참석 |
| donate | 기부 | 100 | 십일조 평생 |
| service | 봉사 | 80 | 다문화 가정 장학금 매년 |

---

### 4. 애터미소개 (currentPage='about')

1. **히어로**
   - 좌측: "ATOMY AT A GLANCE" 키커 + "한눈에 보는 글로벌 애터미" + 회사 소개
   - 우측: **9:16 인물 카드** — 박한길 회장 정면 포트레이트 (정적 이미지)
     - 좌상단 시안 마름모 + `사업자가 소개하는 애터미`
     - 하단 그라디언트 + 시안 그라디언트 마름모 뱃지 `[👑 대한민국 가장 존경받는 CEO]` + "소비자가 100세까지 행복해야, 회사도 행복합니다" + "— 몽상 박한길"
     - 클릭 시 풀스크린 이미지 뷰어 (블러 배경 + contain)
2. **WE'RE GLOBAL ATOMY — 통계 6 카드** (3열 PC, 1열 모바일)
   - 글로벌 직판기업 10위 / 27개국 / 누적 세미나 17,758회 / 일하기 좋은 200대 기업 3위 / 누적 기부 1,300억원 / 지속가능경영체계 국내 최초
   - 각 카드: 라벨 → 거대 시안 숫자 → 부가정보 → 본문
3. **절대품질 절대가격 다크 카드** (반품률 0% 강조)
4. **헤모힘 영상 카드 + 헤모힘 섹션** — 본문 + 4 하이라이트 카드 (최초 이중 기능성 / 1위 수출액 / 3조 누적 / 28개 국제 특허)
5. **셀랙티브 영상 카드 + 본문 + 6년 타임라인**
6. **노니 영상 카드 + 본문 + 2년 타임라인**
7. **칫솔 + 치약 영상 카드 + 2분할 카드** (1초 칫솔 / 1위 치약)
8. **푸터**

#### 영상 카드 동작 (모든 섹션 공통)
- 가로형 카드 (썸네일 9:16 미니 + 본문)
- 자동 재생 (mute, IntersectionObserver, 50% 가시 시 재생)
- 화면 벗어나면 자동 정지
- 클릭 시 풀스크린 모달 (`AboutVideoModal` — 9:16 stage + 블러 배경 + 음향 활성)

---

### 5. 챗 패널 (백조 클릭 시)

#### 사이즈
- 모바일: **320 × 600** (이전 280×380에서 확장)
- PC: **360 × 540**

#### 구성 (위에서 아래로)
1. **헤더** (시안 그라디언트, 56px) — 백조 아이콘 원형 + "애터미 어시스턴트" + "🟢 온라인 · 평균 응답 1분" + ✕ 닫기
2. **메시지 영역** (스크롤, F5F7FA 배경) — 봇/유저 말풍선 (꼬리 모서리 라운드 차등화)
3. **[애터미 가입문의 · 1분이면 끝!]** 풀폭 CTA — 네이비→시안 그라디언트, 좌측 시안 원형 칩 안에 → 화살표
4. **빠른 질문 칩** — 제품 추천 / 회원가입 / 배송 문의 / 반품/교환
5. **입력 영역**
   - 좌측 **🎙️ 음성 마이크 버튼** (38px, 시안 보더, 호버 시 시안 배경)
   - 텍스트 입력 (placeholder: "메시지를 입력하세요")
   - 종이비행기 보내기 버튼 (입력 있을 때만 시안 활성)

#### 가입문의 폼 (CTA 클릭 시)
모달이 패널 위에 시트 형태로 슬라이드 업.

| 필드 | 검증 |
|------|------|
| 이름 | 2자 이상 |
| 전화번호 | 자동 포맷 (010-XXXX-XXXX), 정규식 검증 |
| 메모 | 200자 제한, 카운터 표시 |
| 동의 체크 | 필수 |

제출 시 → 시트 닫힘 + 채팅창에 신청 내역 + 봇 응답 자동 추가

#### 음성 대화 모달 (마이크 버튼 클릭 시)
3단계 시퀀스:
1. **LISTENING** (5초) — 80px 시안 마이크 원 + 외곽 펄스 링 + 8개 파형 막대 (`voiceBar` keyframes 80ms 시차) + "{n}초 / 5초" 카운터 + "🔇 말하기 종료"
2. **TRANSCRIBING** (1.5초) — 노란 배지 + 노란 도트 3개 들썩임
3. **DONE** — 그린 배지 + 마이크가 ✓ 변환 + 변환된 텍스트 표시 + [다시 말하기] / [메시지 보내기 →]

전송 시 → 채팅창에 음성 메시지로 추가됨

(실제 음성 인식은 `webkitSpeechRecognition` API로 교체 가능 — 데모는 setTimeout로 가짜 텍스트)

---

## Interactions & Behavior

### 페이지 라우팅
- `currentPage`: `'shorts' | 'shop' | 'life' | 'about'`
- 메뉴 클릭 시 페이지 전환 + 콘텐츠 스크롤 0으로
- 풀스크린 모달이 아닌 콘텐츠 영역 교체 (헤더/푸터 고정)

### 알림 드롭다운
- 종 아이콘 클릭 시 토글
- 외부 클릭 / ESC 닫기
- 5건 알림 (1번이 마일스톤: "구매 10회 달성! 🎉" + 사업자 가입 유도 시안 카드 + CTA)

### 챗 패널
- 백조 클릭 시 마운트 (페이드+슬라이드)
- 페이지 로드 1.8초 후 자동으로 메시지 말풍선 등장 (펑 튀는 효과)
- 백조 호버 시 좌측에 다크 말풍선 "안녕하세요! 🦢"

### 좋아요 인터랙션 (풀스크린 숏폼 플레이어)
- ♥ 클릭 시:
  - 본체 `heartPulse` (1 → 1.45 → 0.95 → 1, 0.6s 탄성)
  - 8개 작은 핑크 하트가 위로 흩어짐 (`heartBurst`, 각자 dx/dy/rotate 무작위, 0.85s)
  - 카운트 +1 + 핑크 채움
- 다시 클릭 (취소)하면 폭발 없이 채움만 해제

### 인생 수레바퀴 진입 애니메이션
- 마운트 직후 0% → pct% 펼쳐지는 트랜지션 (1.2s, cubic-bezier(.2,.7,.3,1.1))
- 도트 cx/cy + polygon points + opacity 0→1 동시 진행

### 숏폼 카드 stagger
- IntersectionObserver 없이 React 마운트 시점에 인덱스별 `animation-delay` (50~60ms × index)
- 키프레임: `cardFadeUp` (translateY(14px) + opacity 0 → 0)

### 영상 자동 재생/정지 (`AutoPlayVideo` 컴포넌트)
- IntersectionObserver `threshold: [0, 0.25, 0.5, 0.75, 1]`
- 50% 이상 보이면 `play()`, 미만이면 `pause()`
- root: 가장 가까운 scrollable 부모 자동 탐색

### 클릭 외 모든 인터랙션
- 휠 스크롤 → 다음/이전 슬라이드 (풀스크린 영상에서)
- 터치 스와이프 (수직/수평) → 슬라이드 전환
- 키보드: ESC, ↑↓←→, Space, Enter

---

## State Management

루트 컴포넌트(`VariationDesktop`, `VariationClassic`)에서 관리:

```typescript
const [currentPage, setCurrentPage] = useState<'shorts'|'shop'|'life'|'about'>('shorts');
const [shopProduct, setShopProduct] = useState<Product | null>(null);
const [productVideo, setProductVideo] = useState<VideoMeta | null>(null);
const [viewerIdx, setViewerIdx] = useState<number | null>(null);  // 미디어 뷰어
const [playerIdx, setPlayerIdx] = useState<number | null>(null);  // 숏폼 플레이어
const [notifOpen, setNotifOpen] = useState(false);
// 클립 그리드 필터
const [clipTab, setClipTab] = useState<'all'|'product'|'company'|'business'|'life'>('all');
const [flagFilter, setFlagFilter] = useState<'all'|'official'|'personal'>('all');
```

서브 컴포넌트 로컬 상태: `LifeWheel`의 `selectedKey/animPct`, `ChatPanel`의 `joinFormOpen/voiceOpen/messages`, `ShortsPlayer`의 `idx/playing/liked/progress` 등

서버 데이터 (실제 백엔드 연동 시):
- `/api/profile/{masterId}` — 마스터 프로필
- `/api/shorts?master={id}&category=...` — 숏폼 목록
- `/api/products` — 제품 리스트
- `/api/products/{id}` — 제품 상세
- `/api/notifications?user={id}` — 알림
- 가입문의 폼 제출: POST `/api/inquiry/join`

---

## Design Tokens

### Colors
```
--color-primary:        #00B6F0  /* 메인 시안 — 활성 nav, 강조 숫자, CTA 보더 */
--color-primary-light:  #5CD3F7  /* 시안 라이트 — 그라디언트 두 번째 */
--color-primary-dark:   #0088B8  /* 시안 다크 — 호버, PV 텍스트 */
--color-primary-muted:  #2A8AB0  /* 시안 뮤티드 — VARIATION 라벨 */

--color-navy:           #0B1F3A  /* 메인 텍스트, 다크 배경 */
--color-navy-2:         #0B2D58  /* 그라디언트 두 번째 */

--color-text-body:      #2B3A52  /* 본문 텍스트 */
--color-text-secondary: #4A5568  /* 서브 텍스트 */
--color-text-muted:     #6B7A90  /* 메타 정보 */
--color-text-subtle:    #8A97AD  /* 캡션, 라벨 */

--color-bg-page:        #F5F7FA  /* 페이지 기본 배경 */
--color-bg-canvas:      #ECE7DC  /* 외부 스테이지 배경 */
--color-bg-card:        #FFFFFF
--color-bg-soft:        #F5F2EA  /* 데스크톱 본문 배경 */

--color-red:            #E84141  /* BEST 뱃지, 헤모힘 샷 액센트 */
--color-pink:           #FF3B6A  /* 좋아요, 알림 카운트 */
--color-yellow:         #FFE45A  /* 헤모힘 히어로 강조 */
--color-yellow-star:    #FFB800  /* 별점 */
--color-orange:         #FF8A3D  /* 프로모션 뱃지 */
--color-green:          #22DD88  /* 온라인 도트 */

--color-border-soft:    rgba(11,31,58,0.06)
--color-border:         rgba(11,31,58,0.12)
--color-overlay-strong: rgba(11,31,58,0.55)  /* 모달 오버레이 */
```

### Typography
```
font-family: "Pretendard", "Noto Sans KR", system-ui, sans-serif;
font-feature-settings: 'tnum' 1; /* 숫자 균등 폭 */

/* 스케일 */
H1 (페이지 타이틀):  34px / 28px (mobile),  weight 800-900, letter-spacing -0.025em
H2 (섹션 타이틀):    26-30px,                weight 800-900, letter-spacing -0.02em
H3 (서브 타이틀):    20-24px,                weight 800,     letter-spacing -0.02em
H4 (카드 타이틀):    14-18px,                weight 800-900, letter-spacing -0.01em
Body large:          14-15px,                weight 500-600, line-height 1.65
Body:                12.5-13px,              weight 500,     line-height 1.5-1.65
Caption:             10.5-11.5px,            weight 600-700
Micro/Kicker:        10-11px,                weight 800,     letter-spacing 0.18-0.22em (영문) / -0.01em (한글)
```

### Spacing Scale
0 / 4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 28 / 32 / 36 / 40 / 50 / 60

### Border Radius
- 4px — 작은 뱃지
- 8-10px — 인풋, 버튼
- 12-14px — 카드
- 16-18px — 큰 카드, 패널
- 999px — 캡슐, 도트, 원형 버튼

### Shadows
```
--shadow-card:         0 2px 6px rgba(11,31,58,0.04)
--shadow-card-hover:   0 14px 36px rgba(11,31,58,0.12-0.18)
--shadow-modal:        0 20px 50px rgba(11,31,58,0.2)
--shadow-cyan-glow:    0 12px 30px rgba(0,182,240,0.4)
--shadow-red-glow:     0 12px 30px rgba(232,65,65,0.4)
--shadow-toast:        0 12px 30px rgba(11,31,58,0.15), 0 0 0 1px rgba(11,31,58,0.05)
```

### Animations
```css
/* 카드 stagger 페이드업 */
@keyframes cardFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* 백조 idle */
@keyframes swanIdle {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-6px) rotate(-1.5deg); }
}
/* 알림 펄스 링 */
@keyframes notifPulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.2); opacity: 0; }
}
/* 좋아요 하트 폭발 */
@keyframes heartBurst {
  0%   { opacity: 0; transform: translate(0,0) scale(0.4) rotate(var(--rot)); }
  20%  { opacity: 1; }
  100% { opacity: 0; transform: translate(var(--dx), var(--dy)) scale(1.3) rotate(var(--rot)); }
}
@keyframes heartPulse {
  0%, 100% { transform: scale(1); }
  40%      { transform: scale(1.45); }
  70%      { transform: scale(0.95); }
}
/* 챗 패널 등장 */
@keyframes chatPanelIn {
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
}
/* 챗 메시지 펑 등장 */
@keyframes chatPopIn {
  0%   { opacity: 0; transform: translateY(14px) scale(0.85); }
  60%  { opacity: 1; transform: translateY(-3px) scale(1.04); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
/* 영상 페이드인 */
@keyframes shortsFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
/* PREVIEW 라이브 도트 펄스 */
@keyframes pulseDot {
  0%, 100% { opacity: 1;   transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(0.7); }
}
/* 영상 광고 부유 */
@keyframes adFloat {
  0%,100% { transform: translateY(0)   translateX(0)  rotate(-3deg); }
  25%     { transform: translateY(-10px) translateX(-4px) rotate(2deg); }
  50%     { transform: translateY(-4px)  translateX(2px)  rotate(-2deg); }
  75%     { transform: translateY(-12px) translateX(-2px) rotate(3deg); }
}
@keyframes adSlideIn {
  from { opacity: 0; transform: translateX(40px) scale(0.9); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
}
@keyframes adLabelPulse {
  0%, 100% { box-shadow: 0 4px 16px rgba(0,182,240,0.35); }
  50%      { box-shadow: 0 4px 22px rgba(0,182,240,0.6); }
}
/* 음성 챗 파형 */
@keyframes voiceBar {
  0%, 100% { transform: scaleY(0.4); }
  50%      { transform: scaleY(1); }
}
/* 알림 드롭다운 */
@keyframes notifSlideDown {
  from { opacity: 0; transform: translateY(-8px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* 인생시나리오 항목 패널 */
@keyframes goalSlideLeft {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}
/* 제품 히어로 */
@keyframes heroFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-8px) rotate(-1deg); }
}
/* 애터미소개 페이지 */
@keyframes aboutSlideIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

---

## Assets

### 외부 이미지 (모두 사용자 제공/공식 자료)
| 용도 | URL |
|------|-----|
| 박한길 회장 정면 포트레이트 | Global Atomy 공식 (sspark.genspark.ai 호스팅) |
| 강연 무대 / 인터뷰 / 나눔 경영 | sspark.genspark.ai 호스팅 (총 4장 미디어 캐러셀) |
| 헤모힘 샷 보틀 PNG | https://www.genspark.ai/api/files/s/jY5Iva2i (사용자 제공) |
| 애터미 로고 (atom美 + ATOMY) | https://www.genspark.ai/api/files/s/zNx3wt9Q (사용자 제공) |
| 백조 마스코트 캐릭터 | https://www.genspark.ai/api/files/s/7dKEOpJs (사용자 제공) |
| 헤모힘 / 셀랙티브 / 노니 / 칫솔 / 치약 등 9개 제품 | sspark.genspark.ai 호스팅 |

### 영상
| 용도 | URL |
|------|-----|
| 첫 번째 숏폼 (헤모힘 한 잔) | https://www.genspark.ai/api/files/s/mb60FN8q (사용자 제공 mp4) |
| 인생시나리오 AI 자동 생성 영상 | https://www.genspark.ai/api/files/s/mjHhhZuO (사용자 제공 mp4, 8MB) |
| 그 외 헤모힘/제품 영상 | 동일 mp4 placeholder 사용 (실제 운영 시 교체) |

### SNS 외부 링크
| 채널 | URL |
|------|-----|
| Instagram | https://www.instagram.com/atomy_official/ |
| YouTube | https://m.youtube.com/@애터미ATOMY_PRODUCT/ |
| Facebook | https://www.facebook.com/atomy.inc/ |
| Naver Blog | https://blog.naver.com/atomy_official |

### SVG 아이콘 (코드에 인라인)
- `NavIcon.shop` (쇼핑백)
- `NavIcon.shorts` (사각형 + 플레이)
- `NavIcon.dharma` (8각형 수레바퀴 — 정팔각형 + 8 spokes + 중심 hub)
- `NavIcon.info` (원 + i)
- `NavIcon.globe` (지구본)
- `NavIcon.shield` (방패 + 체크)
- `NavIcon.person` (원 헤드 + 어깨)
- `ProfileIcon.crown` / `ProfileIcon.diamond` / `ProfileIcon.play` / `ProfileIcon.heart` 등
- `iconByKey('ig'|'yt'|'fb'|'kk'|'bl')` (SNS 아이콘)
- `HemoIcon.{leaf, bolt, fruit, liquid, glass, planet}` (헤모힘 7가지 포인트용)

### 폰트
- Pretendard (Noto Sans KR fallback) — Google Fonts:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  ```

---

## Files in this bundle

이 폴더 안에 핵심 디자인 파일을 복사해 두었습니다. 개발자는 이를 **레퍼런스로 보면서 타겟 코드베이스에 재구현**하세요.

```
design_handoff_atomy_master_profile/
├── README.md                              ← 이 문서
├── Master Profile Mobile.html              ← 메인 진입점 (모바일+PC 동시 렌더)
├── components/
│   ├── Data.jsx                           ← PROFILE, SNS, SHORTS, PROFILE_MEDIA 등 데이터
│   ├── Icons.jsx                          ← 모든 SVG 아이콘 정의
│   ├── AtomyLogo.jsx                      ← 로고 컴포넌트
│   ├── ChatFloating.jsx                   ← 백조 + 챗 패널 + 가입문의 + 음성 대화
│   ├── NotificationPopup.jsx              ← 알림 드롭다운
│   ├── LanguageSwitcher.jsx               ← 언어 선택 콤보박스
│   ├── VariationClassic.jsx               ← 모바일 메인 (헤더 + 라우팅 + 푸터 + 풀스크린 모달들)
│   ├── VariationDesktop.jsx               ← PC 메인 (글로벌 헤더 + 라우팅 + 모달들)
│   ├── AtomyShop.jsx                      ← 제품구매 메인 페이지
│   ├── AtomyProductDetail.jsx             ← 헤모힘 샷 상세 페이지
│   ├── AtomyLife.jsx                      ← 인생시나리오 페이지 (LifeWheel 포함)
│   └── AtomyAbout.jsx                     ← 애터미소개 페이지
├── android_frame.jsx                      ← Android 디바이스 프레임 (모바일 미리보기용 — 실제 앱에선 불필요)
└── browser_window.jsx                     ← Chrome 윈도우 프레임 (PC 미리보기용 — 실제 앱에선 불필요)
```

`android_frame.jsx`와 `browser_window.jsx`는 데모 환경에서 두 디바이스를 한 화면에 보여주기 위한 래퍼라서 실제 운영에선 필요 없어요. 진짜 모바일/PC는 viewport에 직접 렌더하면 됩니다.

---

## Implementation Notes

### 권장 구현 순서

1. **디자인 토큰 + 타이포그래피** — Tailwind config 또는 CSS 변수로 위 색상/스페이싱/폰트 정의
2. **공통 컴포넌트** — Button, Badge, Card, Modal, Input, Toast 등 디자인 시스템 베이스
3. **글로벌 헤더 + 푸터 네비** — 라우팅 골격 먼저
4. **석세스클립 페이지** — 제일 복잡한 미디어 캐러셀 + 풀스크린 플레이어
5. **제품구매 페이지 + 헤모힘 샷 상세**
6. **인생시나리오 페이지** — 8각형 SVG 렌더러가 까다로움, 데이터→좌표 함수부터
7. **애터미소개 페이지**
8. **챗봇 + 알림 + 언어 선택** 등 글로벌 위젯
9. **애니메이션/인터랙션 마이크로 디테일**

### 유의 사항

- **z-index 위계**: 챗 패널(28) < 알림 드롭다운(40) < 영상 풀스크린(50, 70) < 가입문의 폼(시트, 더 높음)
- **풀스크린 모달은 React Portal**로 띄우는 게 stacking context 충돌을 피함 (특히 sticky 헤더 안에서 모달이 잘림 방지)
- **IntersectionObserver는 재사용 컴포넌트화** (`AutoPlayVideo`) — 영상 자동재생/정지 패턴이 5곳 이상 반복됨
- **`<button>` 안에 `<button>` 중첩 금지** — React가 DOM nesting 경고 (현재 `ProductCard`의 찜하기 버튼이 살짝 위반 중 — 정리 필요)
- **모바일 키보드 올라올 때**: `position: sticky` 푸터 네비가 가려지는 문제 → `100dvh` + `visualViewport` API 활용 권장
- **i18n**: 한국어 외 다른 언어 지원 시 `LanguageSwitcher` 클릭 → i18n 라이브러리(next-intl, react-i18next) 연결 필요. 현재 데이터는 한국어 하드코딩

### 실제 백엔드 연결 시 교체 포인트

1. `Data.jsx`의 `SHORTS`, `SHOP_PRODUCTS`, `LIFE_GOALS` 등 → API 페치
2. `ChatPanel`의 `setTimeout` 가짜 응답 → 실제 챗봇 API
3. `JoinInquiryForm.onSubmit` → POST `/api/inquiry/join`
4. `VoiceChatPanel`의 setTimeout → `webkitSpeechRecognition` 또는 서버 STT API
5. `NotificationPopup`의 `NOTIFICATIONS` 배열 → 사용자별 알림 페치
6. SNS 아이콘 클릭 → 실제 마스터의 SNS URL (현재는 모두 애터미 공식 채널)

---

## Out of Scope

핸드오프엔 포함되지 않은 기능 (별도 추후 작업):
- 백오피스 (사업자가 인생 시나리오를 입력하는 관리 화면)
- 결제 시스템 (장바구니 → 결제 페이지)
- 회원 가입/로그인 (현재는 비회원 페이지 가정)
- 유튜브 임베드를 통한 실제 애터미 공식 영상 연결
- 다국어 콘텐츠 번역
- 검색 결과 페이지
- 다른 마스터의 프로필 페이지 (현재는 박한길 회장님 한 명만)
- 알림 상세 페이지 ("전체 알림 보기 →" 링크)
- 결제·배송·반품/교환 플로우
