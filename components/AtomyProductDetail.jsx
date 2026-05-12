// AtomyProductDetail.jsx — 헤모힘 샷 상세 페이지
// 구조: 갤러리/구매 영역 → 핵심 포인트 6 → 성분 함량 → 추천 대상 → 상세 정보 → 리뷰

// 공식 상세 HTML 임베드 매핑 — 제품 ID → assets 경로
// 이 매핑에 등록된 제품은 'info' 탭에서 기존 데이터 기반 섹션 대신 원본 HTML을 그대로 렌더
const HTML_DETAIL_MAP = {
  '000017': '/assets/hemohim-shot-detail.html', // 애터미 헤모힘 샷
  '000570': '/assets/thefame-detail.html',      // 애터미 스킨케어 시스템 더페임
};
const hasHtmlDetail = (id) => !!HTML_DETAIL_MAP[id];

const HEMOHIM_DETAIL = {
  id: '000017',
  name: '애터미 헤모힘 샷 (100ml*10병, 2box)',
  englishName: 'ATOMY HEMOHIM SHOT',
  category: '혼합음료 · 기능성표시식품',
  tagline: '지친 몸을 깨우는 샷, 애터미 헤모힘 샷!',
  description: '본 제품은 피로개선에 도움을 줄 수 있다고 알려진 헤모힘 당귀등 혼합추출물이 들어있습니다.',
  warning: '※ 본 제품은 건강기능식품이 아닙니다.',

  price: 59800,
  pv: 30000,
  rating: 4.6,
  reviewsCount: 41,

  // 히어로 영상 (HemohimShotDetail에서 사용)
  videoUrl: 'https://www.genspark.ai/api/files/s/mb60FN8q',
  videoPoster: 'https://image.atomy.com/KR/goods/000017/org/203/250714000044203.jpg?w=480&h=480',
  videoTitle: '아침 루틴, 헤모힘 한 잔',

  // 회원 소개 영상
  memberStory: {
    videoUrl: '/assets/member-story.mp4',
    title: '아침 루틴, 헤모힘 한 잔',
    badge: 'BEST 석세스클립',
    headline: ['회원이 직접 들려주는', '헤모힘 샷 사용 후기'],
    description: '매일 헤모힘 샷을 즐기는 회원의 솔직한 일상 영상. 음소거 상태로 자동 재생되며, 영상을 클릭하면 소리와 함께 전체화면으로 감상할 수 있어요.',
    views: '12.4K',
    likes: '1.2K',
    duration: '0:45',
  },

  // 넛지 (kr.atomy.com 공식)
  nudges: {
    likes: 606,
    orders: 10151,
    carts: 14930,
  },

  // 갤러리 이미지 — kr.atomy.com 공식 CDN
  images: [
    'https://image.atomy.com/KR/goods/000017/org/911/250902000046911.jpg?w=480&h=480',
    'https://image.atomy.com/KR/goods/000017/org/203/250714000044203.jpg?w=480&h=480',
    'https://image.atomy.com/KR/goods/000017/org/202/250714000044202.jpg?w=480&h=480',
    'https://image.atomy.com/KR/goods/000017/org/201/250714000044201.jpg?w=480&h=480',
  ],

  // 핵심 함량
  highlights: [
    { num: '6,000', unit: 'mg', label: '헤모힘 당귀등 혼합추출물', sub: '피로개선 도움 알려진 개별인정형 원료' },
    { num: '500',   unit: 'mg', label: '타우린', sub: '지친 몸에 필요한 활력 성분' },
    { num: '100',   unit: 'ml', label: '액상 타입', sub: '간편 휴대 · 즉시 섭취' },
    { num: '24',    unit: '개월', label: '소비기한', sub: '제조일로부터 실온 보관' },
  ],

  // 7가지 포인트 (kr.atomy.com 공식 POINT 1~7)
  points: [
    { icon: 'leaf',   title: '‘헤모힘 당귀등 혼합추출물’을 함유한 에너지 샷',
      desc: '당귀·천궁·백작약(국내산) 등 식약처 개별인정형 원료(제2006-17호) 6,000mg 함유.' },
    { icon: 'bolt',   title: '지친 몸에 필요한 타우린 500mg 함유',
      desc: '쓸개즙의 주 구성 성분인 타우린은 피로 회복·간 건강·시력 보호·심혈관 건강에 도움을 준다고 알려져 있습니다.' },
    { icon: 'fruit',  title: '지친 몸에 필요한 과라나 추출물 함유',
      desc: '브라질 아마존 원산의 과라나는 카페인·테오브로민·카테킨 등 생리 활성 물질이 풍부한 식물입니다.' },
    { icon: 'liquid', title: '청량한 파인애플 맛을 더해 활력을 깨우는 맛',
      desc: '파인애플 농축액 3,999mg + 천연 파인애플향 683mg + 천연 레몬향 126mg. 기분 UP, 피로 DOWN!' },
    { icon: 'glass',  title: '언제 어디서나 바로 섭취 가능한 액상 타입',
      desc: '100ml 한 병으로 간편하게 휴대해서 언제 어디서나 맛있게 피로 해소.' },
    { icon: 'glass',  title: '헤모힘 샷 본연의 맛을 살려주는 유리 용기',
      desc: '유리는 식품과 반응하지 않아 식품 고유의 맛과 향을 가장 잘 보존해 줍니다.' },
    { icon: 'planet', title: '지속 가능한 지구를 위한 BLUE MARINE PROJECT',
      desc: '애터미는 플라스틱 사용을 줄여 바다 환경을 살리는 친환경 캠페인, 블루마린 프로젝트를 실천합니다.' },
  ],

  // 추천 대상
  recommendFor: [
    { emoji: '💼', label: '직장에서 업무 효율을 높이고 싶을 때' },
    { emoji: '🏃', label: '운동 중 효과를 높이고 싶을 때' },
    { emoji: '📚', label: '업무나 공부 중 체력이 떨어질 때' },
    { emoji: '🥂', label: '손님을 위한 센스 있는 웰컴 드링크가 필요할 때' },
  ],

  // 상세 정보 (테이블) — kr.atomy.com 필수 고시정보 기준
  specs: [
    { k: '제품명', v: '애터미 헤모힘 샷' },
    { k: '식품의 유형', v: '혼합음료 / 기능성표시식품' },
    { k: '내용량', v: '{1,000 ml (100 ml × 10병)} × 2박스' },
    { k: '총 중량/크기', v: '2,400g / 245 × 200 × 150 × 2 mm' },
    { k: '제조년월일', v: '2025-09-19 이후' },
    { k: '소비기한', v: '제조일로부터 24개월' },
    { k: '원재료명', v: '정제수, 헤모힘 당귀등 혼합추출물(제2006-17호)(당귀/국내산, 천궁/국내산, 백작약/국내산), 에리스리톨(감미료), 파인애플농축액(인도네시아산), 자일리톨(감미료), 시클로덱스트린시럽, 파인애플향(천연향료), γ-시클로덱스트린, 타우린, 구연산, 구연산삼나트륨, 레몬향(천연향료), 과라나추출물분말(미국산), 효소처리스테비아(감미료), DL-사과산' },
    { k: '제조원', v: '퓨어플러스(주) · 경상남도 함양군 수동면 수동농공길 11' },
    { k: '연구개발/기술제공', v: '콜마비앤에이치(주)' },
    { k: '유통전문판매원', v: '애터미㈜ · 충청남도 공주시 백제문화로 2148-21 (웅진동)' },
    { k: '보관방법', v: '직사광선을 피해 서늘한 곳에 실온 보관. 원료 성분에 의해 침전물이 생길 수 있으나 변질이 아니니 흔들어 드시면 됩니다.' },
    { k: '심의번호', v: '심의 필 (2511F082)' },
    { k: '고객행복센터', v: '1544-8580' },
  ],

  // 영양 성분 (1회 제공량 100 mL 당)
  nutrition: [
    { k: '열량', v: '45 kcal', pct: null },
    { k: '나트륨', v: '45 mg', pct: '2%' },
    { k: '탄수화물', v: '16 g', pct: '5%' },
    { k: '당류', v: '3 g', pct: '3%' },
    { k: '에리스리톨', v: '5 g', pct: null },
    { k: '지방', v: '0 g', pct: '0%' },
    { k: '트랜스지방', v: '0 g', pct: null },
    { k: '포화지방', v: '0 g', pct: '0%' },
    { k: '콜레스테롤', v: '0 mg', pct: '0%' },
    { k: '단백질', v: '1 g 미만', pct: '0%' },
  ],

  // 기능성 성분 함량 (100 mL 당)
  functionalIngredients: {
    summary: '헤모힘 당귀등 혼합추출물로서 6g',
    items: [
      { k: 'Chlorogenic acid', v: '2.1 mg' },
      { k: 'Nodakenin', v: '6.6 mg' },
      { k: 'Paeoniflorin', v: '18 mg' },
    ],
    dailyIntake: '1일 섭취기준량 : 헤모힘 당귀등혼합추출물로서 20g',
  },

  // === 공식 상세페이지 추가 컨텐츠 (kr.atomy.com 000017) ===

  // BOX 16 — 박스 개봉 안내
  boxOpenNote: '※ 헤모힘 샷 박스 개봉 시, 옆 날개 부분을 잡아 뜯어 개봉해 주세요.',

  // BOX 3 — 애터미 헤모힘 샷의 5가지 특별함
  specialFeatures: [
    "'헤모힘 당귀등 혼합추출물'을 함유한 에너지 샷 — 헤모힘 당귀등 혼합추출물 6,000mg 함유",
    '지친 몸에 필요한 타우린 500mg과 과라나 추출물 함유',
    '청량한 파인애플 맛을 더해 활력을 깨우는 맛',
    '언제 어디서나 바로 섭취 가능한 100ml의 액상 타입',
    '유리병 사용으로 헤모힘 샷 본연의 맛을 가장 잘 보존',
  ],

  // BOX 5 — 헤모힘 당귀등 혼합추출물 원료 (당귀/천궁/작약)
  hemohimHerbs: [
    { name: '당귀', desc: '참당귀의 뿌리를 약재로 이용' },
    { name: '천궁', desc: '산형과에 속하는 다년생 초본식물로 뿌리줄기를 약재로 이용' },
    { name: '작약', desc: '미나리아재비과에 속하는 다년생 초본식물로 뿌리를 약재로 이용' },
  ],

  // BOX 14 — 타우린의 효능 키워드 5종
  taurineEffects: ['피로 회복', '간 건강', '시력 보호', '심혈관 건강', '뇌 건강'],

  // BOX 15 — 과라나의 효능 키워드 5종
  guaranaEffects: ['육체적/정신적 피로 완화', '강장 효과', '면역력 증가', '이뇨 작용', '항산화 효과'],

  // BOX 8 — 청량한 파인애플 맛 부원료 함량 6종
  flavorIngredients: [
    { name: '파인애플농축액', amount: '3,999 mg' },
    { name: '천연파인애플향', amount: '683 mg' },
    { name: '천연레몬향', amount: '126 mg' },
    { name: '자일리톨', amount: '3,675 mg' },
    { name: '에리스리톨', amount: '5,250 mg' },
    { name: '효소처리스테비아', amount: '74 mg' },
  ],

  // BOX 13 — 기능성 표시 식품 안내
  functionalLabel: {
    title: '기능성 표시 식품?',
    desc: '식약처가 인정한 건강기능식품 기능성 원료를 사용하여 일정 요건을 갖춘 경우 기능성을 표시한 일반식품입니다.',
    distinguishTitle: '건강기능식품과 구분해 주세요',
    distinguishDesc: '기능성 표시 식품과 건강기능식품을 구분하는 방법은 "건강기능식품 마크" 확인입니다. 기능성 표시 식품의 경우 \'본 제품은 건강기능식품이 아닙니다\'라는 문구가 표시되어 있습니다.',
  },

  // BOX quality — 애터미 품질 보증
  qualityAssurance: {
    intro: '본 제품은 좋은 원료의 사용과 최적화된 기술, 철저한 품질관리의 원칙을 고수하여 원료부터 완제품까지 깐깐한 애터미의 품질보증이 확인된 제품입니다.',
    sub: '까다로운 협력업체 등록 테스트를 통과한 안전한 시설에서만 제조하고 있습니다. 정기적인 협력업체 현장점검 및 3자 인증기관을 통한 크로스 점검으로 기본을 철저히 지키며 절대 품질의 제품을 제조하고 있습니다.',
    badge: 'HEALTH FOOD',
    items: [
      '1~3차 원료의 원산지 및 인증 확인을 통한 원료 적합성 검사',
      '제품의 안전성(미생물 검사, 중금속, 잔류농약 등) · 안정성 검사(소비기한 설정 실험 등)',
      '사회적 이슈에 따른 유해물질 검사(중금속, 잔류농약 등)',
      '원료 입고, 칭량, 제조, 포장, 적재, 제품 승인, 배송까지 전방위 생산점검',
      '지속적인 제품 관능평가 및 주기적인 제품 품질 테스트를 통한 절대품질 유지',
    ],
  },

  // 가짜 리뷰 (실제로는 백엔드에서)
  reviews: [
    { id: 1, author: '김**', rating: 5, date: '2025.10.18', verified: true,
      text: '아침마다 한 병씩 마시는데 정말 활력이 생겨요. 커피보다 부담 없고, 파인애플 맛이 청량해서 입에도 잘 맞아요.' },
    { id: 2, author: '박**', rating: 5, date: '2025.10.15', verified: true,
      text: '헤모힘 분말은 꾸준히 먹기 어려웠는데, 샷은 휴대가 간편해서 출장 갈 때마다 챙겨 갑니다. 피로감이 확실히 덜해요.' },
    { id: 3, author: '이**', rating: 4, date: '2025.10.10', verified: true,
      text: '맛은 호불호 갈릴 수 있지만 저는 좋아요. 운동 전 한 병 마시고 가면 후반에도 힘이 남아있는 느낌!' },
    { id: 4, author: '최**', rating: 5, date: '2025.10.07', verified: true,
      text: '직장에서 오후 3시 졸음이 사라졌어요. 카페인 음료보다 속도 편하고, 헤모힘이라는 안정감도 있어서 매일 마시고 있습니다.' },
  ],
};

const HERBAL_SHAMPOO_DETAIL = {
  id: '000605',
  name: '애터미 허벌 샴푸',
  englishName: 'ATOMY HERBAL SHAMPOO',
  category: '헤어케어 · 두피 한방 케어',
  tagline: '여섯 가지 한방으로 두피 본연의 균형을',
  description: '한방 6종(약쑥·녹차·어성초·감초·하수오·인삼)이 두피를 청결하게 가꾸고 모발에 활력을 더해줍니다.',
  warning: '※ 외부 자극 시 사용을 중단하고 전문의와 상담하세요.',

  price: 12800,
  pv: 6500,
  rating: 4.6,
  reviewsCount: 8420,

  images: [
    'https://sspark.genspark.ai/cfimages?u1=QvZ9ii2hO0i5lHxvPOIq4OQ16a9gfm3rlTYEjdaOxXJGpMKUNrEeFHqkByDkl8InXXTtiFcgTDdlJt6qZIiv5KEofarp803xdVJhhtGH6vH2gBEgduTMqNY%3D&u2=Vyr4XhK21NGFbsTi&width=2560',
  ],

  highlights: [
    { num: '6',     unit: '종',   label: '한방 추출물', sub: '약쑥·녹차·어성초·감초·하수오·인삼' },
    { num: '500',   unit: 'ml',   label: '대용량 보틀', sub: '약 2개월 사용분' },
    { num: '1,200', unit: '만병', label: '누적 판매량', sub: 'SINCE 2009 · 스테디셀러' },
    { num: '0',     unit: '종',   label: '실리콘·파라벤·인공색소', sub: 'EWG GREEN · 비건 인증' },
  ],

  points: [
    { icon: 'leaf',   title: '한방 6종 자연 유래 추출물',
      desc: '약쑥·녹차·어성초·감초·하수오·인삼이 두피를 청결하게 가꾸고 모발에 윤기를 더합니다.' },
    { icon: 'planet', title: '실리콘·파라벤·인공색소 ZERO',
      desc: '두피와 환경 모두를 생각한 클린 포뮬러. EWG GREEN 등급 원료로만 구성.' },
    { icon: 'liquid', title: '풍성한 미세 거품',
      desc: '두피 모공 깊숙이 파고드는 부드러운 거품으로 노폐물·잔여물을 깨끗하게 세정.' },
    { icon: 'fruit',  title: '은은한 허브 시트러스 향',
      desc: '인공 향료 없이 자연 유래 에센셜 오일로 완성한 산뜻한 잔향.' },
    { icon: 'glass',  title: '재활용 가능한 PET 보틀',
      desc: '분리배출이 쉬운 단일 소재 용기로 환경 부담을 줄였습니다.' },
    { icon: 'bolt',   title: '비건 · 동물 실험 NO',
      desc: '비건 인증 · 크루얼티 프리. 모두를 위한 한방 헤어 케어.' },
  ],

  recommendFor: [
    { emoji: '🌿', label: '두피가 예민하고 가려움이 잦을 때' },
    { emoji: '💧', label: '비듬·각질이 신경 쓰일 때' },
    { emoji: '🍃', label: '실리콘·합성 향료 없는 샴푸를 찾을 때' },
    { emoji: '✨', label: '모발에 윤기와 볼륨을 더하고 싶을 때' },
  ],

  specs: [
    { k: '제품명', v: '애터미 허벌 샴푸' },
    { k: '제품 유형', v: '두피·모발용 화장품 (샴푸)' },
    { k: '용량', v: '500 ml' },
    { k: '사용기한', v: '제조일로부터 36개월 (개봉 후 12개월)' },
    { k: '주요 성분', v: '약쑥·녹차·어성초·감초·하수오·인삼 추출물' },
    { k: '제조원', v: '코스맥스(주)' },
    { k: '판매원', v: '애터미㈜' },
    { k: '인증', v: 'EWG GREEN · 비건 · 크루얼티 프리' },
    { k: '보관방법', v: '직사광선을 피해 서늘한 곳에 보관' },
  ],

  nutrition: [
    { k: '실리콘', v: '무첨가', pct: null },
    { k: '파라벤', v: '무첨가', pct: null },
    { k: '인공색소', v: '무첨가', pct: null },
    { k: '미네랄오일', v: '무첨가', pct: null },
    { k: '벤조페논', v: '무첨가', pct: null },
    { k: '트리에탄올아민', v: '무첨가', pct: null },
    { k: '동물성 원료', v: '무첨가', pct: null },
  ],

  reviews: [
    { id: 1, author: '정**', rating: 5, date: '2025.10.20', verified: true,
      text: '두피가 예민해서 샴푸 고르기 까다로운데, 애터미 허벌 샴푸는 자극 없이 시원하고 가려움도 줄었어요. 향도 부담 없습니다.' },
    { id: 2, author: '한**', rating: 5, date: '2025.10.16', verified: true,
      text: '비듬이 정말 많이 줄었어요. 약쑥·어성초 성분 덕분인지 두피가 한결 가벼운 느낌이고 머리카락도 부드럽게 정돈됩니다.' },
    { id: 3, author: '윤**', rating: 4, date: '2025.10.11', verified: true,
      text: '거품이 풍성하고 헹굼이 깔끔해요. 가격 대비 만족도 매우 높습니다. 가족 모두 같이 쓰기 좋아요.' },
    { id: 4, author: '서**', rating: 5, date: '2025.10.08', verified: true,
      text: '실리콘 NO 샴푸 처음엔 걱정했는데 빗질도 잘 되고 모발 윤기까지 좋아졌어요. 재구매 꾸준히 하고 있습니다.' },
  ],
};

// =============================================================
// 애터미 스킨케어 시스템 더페임 *1set (000570) — HemohimShotDetail 래퍼로 렌더,
// '상세 정보' 탭은 assets/thefame-detail.html 임베드 (HTML_DETAIL_MAP에 등록됨)
// =============================================================
const THEFAME_DETAIL = {
  id: '000570',
  name: '애터미 스킨케어 시스템 더페임 *1set',
  englishName: 'ATOMY SKINCARE SYSTEM THE FAME',
  category: '뷰티 · 스킨케어 시스템',
  tagline: '단 한 번의 루틴, 깊은 영양 안티에이징',
  description: '토너 · 로션 · 세럼 · 아이크림 · 크림 5종이 매일의 루틴을 깊은 영양과 균형으로 완성합니다.',
  warning: '※ 외부 자극 시 사용을 중단하고 전문의와 상담하세요.',

  price: 99800,
  pv: 42000,
  rating: 4.7,
  reviewsCount: 32,

  // 히어로 영상 — 더페임 공식 홍보 영상
  videoUrl: '/assets/thefame-promo.mp4',
  videoPoster: 'https://image.atomy.com/KR/goods/000570/org/787/260315000050787.jpg?w=480&h=480',
  videoTitle: '15년의 명성, 애터미 스킨케어 시스템 더페임',

  // 회원 소개 영상 — 더페임 브랜드 필름
  memberStory: {
    videoUrl: '/assets/thefame-member-story.mp4',
    title: '봄향기 같은 더페임',
    badge: '더페임 BRAND FILM',
    headline: ['15년의 명성을 넘어', '100년을 이어갑니다'],
    description: '더욱 업그레이드되어 돌아온 애터미 더페임. 은은한 봄향기와 함께 매일의 장벽 케어를 한 단계 더 깊이 완성하세요. 음소거 자동재생 · 클릭하면 전체화면.',
    views: '8.2K',
    likes: '1.1K',
    duration: '0:38',
  },

  nudges: { likes: 412, orders: 1058, carts: 2104 },

  images: [
    'https://image.atomy.com/KR/goods/000570/org/787/260315000050787.jpg?w=480&h=480',
  ],

  // 상세 데이터 — info 탭은 HTML 임베드가 처리하므로 빈 배열 OK
  // 다른 탭(리뷰/배송) 및 기본 컴포넌트 안정성을 위해 최소값만 채움
  highlights: [],
  points: [],
  recommendFor: [],

  specs: [
    { k: '제품명', v: '애터미 스킨케어 시스템 더페임' },
    { k: '구성', v: '토너 · 로션 · 세럼 · 아이크림 · 크림 5종 1세트' },
    { k: '사용기한', v: '제조일로부터 36개월 (개봉 후 12개월)' },
    { k: '제조원', v: '코스맥스(주)' },
    { k: '유통전문판매원', v: '애터미㈜' },
    { k: '보관방법', v: '직사광선을 피해 서늘한 곳에 보관' },
    { k: '고객행복센터', v: '1544-8580' },
  ],

  nutrition: [],

  reviews: [
    { id: 1, author: '김**', rating: 5, date: '2025.11.02', verified: true,
      text: '5종 라인업이 하나로 잘 어우러져 매일 루틴이 즐거워졌어요. 발림성도 좋고 향도 은은합니다.' },
    { id: 2, author: '박**', rating: 5, date: '2025.10.28', verified: true,
      text: '에이징케어 첫 시작으로 더페임 풀세트 선택했는데, 한 달 사용하니 피부결이 정돈된 느낌이에요.' },
    { id: 3, author: '이**', rating: 4, date: '2025.10.21', verified: true,
      text: '아이크림과 세럼이 특히 마음에 들어요. 패키지도 고급스럽고 선물용으로도 좋습니다.' },
    { id: 4, author: '최**', rating: 5, date: '2025.10.15', verified: true,
      text: '풀세트로 사니 가격 부담은 있지만 단품 구매보다 훨씬 합리적이고 5종 다 써보니 만족도 매우 높습니다.' },
  ],
};

// 작은 SVG 아이콘들
function HemoIcon({ type, size = 22, color = '#fff' }) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth: 1.8,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (type) {
    case 'leaf': return (
      <svg {...props}>
        <path d="M5 21c0-9 6-15 15-16-1 9-7 15-15 16zM5 21l9-9" />
      </svg>
    );
    case 'bolt': return (
      <svg {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill={color} stroke="none" />
      </svg>
    );
    case 'fruit': return (
      <svg {...props}>
        <path d="M12 2c-1 2-2 3-4 3-2 0-3 1-3 3 0 1 1 2 2 2-2 1-3 3-3 6 0 3 2 6 4 7l4 0c2-1 4-4 4-7 0-3-1-5-3-6 1 0 2-1 2-2 0-2-1-3-3-3-2 0-3-1-4-3z" />
      </svg>
    );
    case 'liquid': return (
      <svg {...props}>
        <path d="M9 3h6v3l-2 1v3c0 4 3 5 3 9 0 2-2 4-4 4s-4-2-4-4c0-4 3-5 3-9V7l-2-1V3z" />
      </svg>
    );
    case 'glass': return (
      <svg {...props}>
        <path d="M7 4h10l-1 14a3 3 0 01-3 2h-2a3 3 0 01-3-2L7 4z" />
        <path d="M7 9h10" />
      </svg>
    );
    case 'planet': return (
      <svg {...props}>
        <circle cx="12" cy="12" r="8" />
        <path d="M3 14c2-2 6-3 9-3s7 1 9 3" />
        <path d="M3 10c2 2 6 3 9 3s7-1 9-3" />
      </svg>
    );
    default: return null;
  }
}

// 별점 렌더
function StarRating({ rating, size = 14 }) {
  const [ref, val, done] = (window.useStarCountUp ? window.useStarCountUp(rating, 1100) : [React.useRef(null), rating, true]);
  const filledTo = done ? rating : val;
  return (
    <div ref={ref} style={{ display: 'inline-flex', gap: 1 }}>
      {[1,2,3,4,5].map(i => {
        const fillRatio = Math.max(0, Math.min(1, filledTo - (i - 1)));
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id={`star-grad-${i}-${size}-${Math.round(rating*10)}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={`${fillRatio*100}%`} stopColor="#FFB800" />
                <stop offset={`${fillRatio*100}%`} stopColor="rgba(11,31,58,0.15)" />
              </linearGradient>
            </defs>
            <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9"
                     fill={`url(#star-grad-${i}-${size}-${Math.round(rating*10)})`} />
          </svg>
        );
      })}
    </div>
  );
}

// =============================================================
// 메인 상세 페이지
// =============================================================
function AtomyProductDetail({ product, isMobile = false, onClose, onPlayVideo, embedded = false, heroMedia = null }) {
  const p = product || HEMOHIM_DETAIL;
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('info'); // 'info' | 'ingredients' | 'reviews'
  const [detailHtml, setDetailHtml] = React.useState('');

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // 공식 상세 HTML 파일을 fetch해서 그대로 임베드 (제품 ID별)
  React.useEffect(() => {
    const detailFile = HTML_DETAIL_MAP[p.id];
    if (!detailFile) { setDetailHtml(''); return; }
    fetch(detailFile)
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(html => setDetailHtml(html))
      .catch(err => console.warn(`상세 HTML 로드 실패 (${p.id}):`, err));
  }, [p.id]);

  const fmt = (n) => n.toLocaleString('ko-KR');
  const totalPrice = p.price * qty;
  const totalPv = p.pv * qty;

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#fff', color: '#0B1F3A',
      minHeight: '100%',
    }}>
      {/* 상단 닫기 바 */}
      {!embedded && (<div style={{
        position: 'sticky', top: 0, zIndex: 5,
        height: isMobile ? 48 : 56,
        background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(11,31,58,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 14px' : '0 24px',
      }}>
        <button onClick={onClose} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#0B1F3A', fontSize: isMobile ? 12.5 : 13.5, fontWeight: 700,
          letterSpacing: '-0.01em', padding: '6px 8px', borderRadius: 6,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          제품 목록
        </button>
        <div style={{ fontSize: 11.5, fontWeight: 700, color: '#6B7A90' }}>
          상품번호 {p.id}
        </div>
      </div>)}

      {/* 1. 갤러리 + 구매 영역 */}
      <section style={{
        padding: isMobile ? '20px 16px' : '40px 36px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 48,
          alignItems: 'start',
        }}>
          {/* 좌 — 이미지 또는 영상(heroMedia) */}
          <div style={{
            position: 'relative',
            background: heroMedia ? '#0B1320' : 'linear-gradient(135deg, #FFF5F3 0%, #FFE5DD 100%)',
            borderRadius: 18,
            aspectRatio: isMobile ? '1/1' : '4/5',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {heroMedia ? heroMedia : (
              <img
                src={p.images[0]}
                alt={p.name}
                style={{
                  width: '70%', height: '85%',
                  objectFit: 'contain', display: 'block',
                  filter: 'drop-shadow(0 30px 60px rgba(232,65,65,0.25))',
                  animation: 'heroFloat 3.5s ease-in-out infinite',
                }}
              />
            )}
            <div style={{
              position: 'absolute', top: 18, left: 18, zIndex: 3,
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              <span style={{
                padding: '5px 11px', borderRadius: 4,
                background: '#E84141', color: '#fff',
                fontSize: 10.5, fontWeight: 800, letterSpacing: '-0.01em',
              }}>NEW · 출시 프로모션</span>
              <span style={{
                padding: '5px 11px', borderRadius: 4,
                background: 'rgba(11,31,58,0.85)', color: '#fff',
                fontSize: 10.5, fontWeight: 800, letterSpacing: '-0.01em',
                width: 'fit-content',
              }}>기능성 표시 식품</span>
            </div>
          </div>

          {/* 우 — 정보 + 구매 */}
          <div>
            {/* 카테고리 + 영문명 */}
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
              color: '#8A97AD', marginBottom: 6,
            }}>{p.category} · {p.englishName}</div>

            {/* 이름 */}
            <h1 style={{
              margin: 0, fontSize: isMobile ? 24 : 32, fontWeight: 900,
              color: '#0B1F3A', letterSpacing: '-0.025em', lineHeight: 1.2,
            }}>{p.name}</h1>

            {/* 태그라인 */}
            <p style={{
              margin: '8px 0 0', fontSize: isMobile ? 13 : 14.5,
              color: '#4A5568', fontWeight: 600, lineHeight: 1.5,
              textWrap: 'pretty',
            }}>{p.tagline}</p>

            {/* 별점 */}
            <div style={{
              marginTop: 16, display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 14px', borderRadius: 10,
              background: 'rgba(255,184,0,0.08)',
              border: '1px solid rgba(255,184,0,0.25)',
            }}>
              <StarRating rating={p.rating} size={15} />
              <span style={{
                fontSize: 14, fontWeight: 800, color: '#0B1F3A',
                fontVariantNumeric: 'tabular-nums',
              }}>{p.rating}</span>
              <span style={{ fontSize: 12, color: '#6B7A90', fontWeight: 600 }}>
                후기 {p.reviewsCount.toLocaleString()}건
              </span>
            </div>

            {/* 가격 */}
            <div style={{
              marginTop: 24, paddingTop: 24,
              borderTop: '1px solid rgba(11,31,58,0.08)',
            }}>
              <div style={{ fontSize: 11.5, color: '#6B7A90', fontWeight: 700, marginBottom: 4 }}>
                판매가
              </div>
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 6,
              }}>
                <span style={{
                  fontSize: isMobile ? 32 : 42, fontWeight: 900,
                  color: '#0B1F3A', letterSpacing: '-0.025em',
                  fontVariantNumeric: 'tabular-nums', lineHeight: 1,
                }}>{fmt(p.price)}</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: '#0B1F3A' }}>원</span>
                <span style={{
                  marginLeft: 10, padding: '3px 9px', borderRadius: 4,
                  background: 'rgba(0,182,240,0.12)',
                  color: '#0088B8', fontSize: 12, fontWeight: 800,
                  fontVariantNumeric: 'tabular-nums',
                }}>PV {fmt(p.pv)}</span>
              </div>
            </div>

            {/* 수량 선택 */}
            <div style={{
              marginTop: 20, display: 'flex',
              alignItems: 'center', justifyContent: 'space-between',
              padding: '12px 16px', borderRadius: 10,
              background: '#F5F7FA',
            }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#0B1F3A' }}>수량</span>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 0,
                border: '1px solid rgba(11,31,58,0.1)', borderRadius: 8,
                background: '#fff',
              }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))}
                  style={qtyBtnStyle()}>−</button>
                <span style={{
                  minWidth: 36, textAlign: 'center',
                  fontSize: 14, fontWeight: 800, color: '#0B1F3A',
                  fontVariantNumeric: 'tabular-nums',
                }}>{qty}</span>
                <button onClick={() => setQty(q => Math.min(99, q + 1))}
                  style={qtyBtnStyle()}>+</button>
              </div>
            </div>

            {/* 합계 */}
            <div style={{
              marginTop: 14, padding: '14px 16px', borderRadius: 10,
              background: 'linear-gradient(135deg, rgba(0,182,240,0.06), rgba(92,211,247,0.08))',
              border: '1px solid rgba(0,182,240,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontSize: 11.5, color: '#0088B8', fontWeight: 800, letterSpacing: '0.04em' }}>총 결제 금액</div>
                <div style={{
                  fontSize: 22, fontWeight: 900, color: '#0B1F3A',
                  fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                  marginTop: 2,
                }}>{fmt(totalPrice)}<span style={{ fontSize: 14, marginLeft: 2 }}>원</span></div>
              </div>
              <div style={{
                fontSize: 13, fontWeight: 800, color: '#0088B8',
                fontVariantNumeric: 'tabular-nums',
              }}>PV {fmt(totalPv)}</div>
            </div>

            {/* CTA 버튼 — embedded 모드에서는 sticky bar로 이동되므로 숨김 */}
            {!embedded && (
            <div style={{
              marginTop: 16, display: 'grid',
              gridTemplateColumns: '48px 1fr 1.4fr', gap: 8,
            }}>
              {/* 선물하기 */}
              <button aria-label="선물하기" style={{
                padding: 0, borderRadius: 8,
                background: '#fff', border: '1.5px solid #00B6F0',
                color: '#00B6F0', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00B6F0"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 12 20 22 4 22 4 12" />
                  <rect x="2" y="7" width="20" height="5" />
                  <line x1="12" y1="22" x2="12" y2="7" />
                  <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
                  <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                </svg>
              </button>
              {/* 장바구니 */}
              <button style={{
                padding: '14px', borderRadius: 8,
                background: '#2E3338', border: 'none',
                color: '#fff', fontSize: 14, fontWeight: 800,
                letterSpacing: '-0.01em', cursor: 'pointer',
              }}>
                장바구니
              </button>
              {/* 바로구매 */}
              <button
                className="cta-pulse"
                style={{
                padding: '14px', borderRadius: 8,
                background: '#00B6F0',
                border: 'none', color: '#fff', fontSize: 14, fontWeight: 800,
                letterSpacing: '-0.01em', cursor: 'pointer',
                boxShadow: '0 6px 18px rgba(0,182,240,0.32)',
                transition: 'transform 0.18s, box-shadow 0.18s',
                ['--cta-pulse-color']: 'rgba(0,182,240,0.55)',
              }}
              >
                바로구매
              </button>
            </div>
            )}

            {/* 안전 표시 */}
            <div style={{
              marginTop: 16, padding: '10px 12px', borderRadius: 8,
              background: 'rgba(11,31,58,0.04)',
              fontSize: 11.5, color: '#6B7A90', fontWeight: 600, lineHeight: 1.6,
            }}>
              {p.warning}
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. 회원 소개 영상 — 상세 정보 탭 가장 상단 (embedded이면 info 탭일 때만) */}
      {(!embedded || tab === 'info') && (() => {
        const ms = p.memberStory || {
          videoUrl: '/assets/member-story.mp4',
          title: '아침 루틴, 헤모힘 한 잔',
          badge: 'BEST 석세스클립',
          headline: ['회원이 직접 들려주는', '헤모힘 샷 사용 후기'],
          description: '매일 헤모힘 샷을 즐기는 회원의 솔직한 일상 영상. 음소거 상태로 자동 재생되며, 영상을 클릭하면 소리와 함께 전체화면으로 감상할 수 있어요.',
          views: '12.4K',
          likes: '1.2K',
          duration: '0:45',
        };
        return (<section style={{
        padding: isMobile ? '20px 16px' : '32px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="MEMBER STORY"
            title="회원 소개 영상"
            desc="실제 회원이 일상에서 어떻게 활용하는지 짧은 영상으로 확인해보세요"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '320px 1fr',
            gap: isMobile ? 16 : 28,
            alignItems: 'center',
          }}>
            {/* 9:16 숏폼 영상 — 자동재생 + 클릭 시 전체화면 */}
            <button
              onClick={() => onPlayVideo && onPlayVideo({
                videoUrl: ms.videoUrl,
                thumb: p.images[0],
                title: ms.title,
              })}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: isMobile ? 280 : 320,
                margin: isMobile ? '0 auto' : '0',
                aspectRatio: '9 / 16',
                borderRadius: 18, overflow: 'hidden',
                background: '#0B1F3A',
                boxShadow: '0 16px 50px rgba(11,31,58,0.18)',
                border: 'none', padding: 0, cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'transform 0.22s, box-shadow 0.22s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 22px 60px rgba(11,31,58,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(11,31,58,0.18)';
              }}
            >
              <AutoPlayVideo
                src={ms.videoUrl}
                poster={p.images[0]}
              />
              {/* 좌상단 라이브 라벨 */}
              <div style={{
                position: 'absolute', top: 12, left: 12, zIndex: 2,
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '4px 9px', borderRadius: 999,
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
                color: '#fff', fontSize: 9.5, fontWeight: 800, letterSpacing: '0.12em',
                pointerEvents: 'none',
              }}>
                <span style={{
                  width: 5, height: 5, borderRadius: 999, background: '#FF3B6A',
                  animation: 'pulseDot 1.6s ease-in-out infinite',
                }} />
                AUTO-PLAY
              </div>
              {/* 우상단 전체화면 아이콘 */}
              <div style={{
                position: 'absolute', top: 12, right: 12, zIndex: 2,
                width: 28, height: 28, borderRadius: 999,
                background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'none',
              }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff"
                     strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </div>
              {/* 하단 캡션 */}
              <div style={{
                position: 'absolute', left: 0, right: 0, bottom: 0,
                padding: '40px 14px 14px',
                background: 'linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0))',
                color: '#fff', pointerEvents: 'none', zIndex: 2, textAlign: 'left',
              }}>
                <div style={{
                  fontSize: 12.5, fontWeight: 800, letterSpacing: '-0.01em',
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                }}>{ms.title}</div>
                <div style={{
                  marginTop: 4, fontSize: 10.5, fontWeight: 600,
                  color: 'rgba(255,255,255,0.78)',
                  fontVariantNumeric: 'tabular-nums',
                }}>▶ {ms.views} · ♥ {ms.likes} · {ms.duration}</div>
              </div>
            </button>

            {/* 영상 옆 설명 (PC) — 모바일에선 영상 아래로 자동 흐름 */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 11px', borderRadius: 999,
                background: 'linear-gradient(135deg, #E84141, #FF8A3D)',
                color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '-0.01em',
                marginBottom: 12,
                boxShadow: '0 4px 10px rgba(232,65,65,0.25)',
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
                  <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
                </svg>
                {ms.badge}
              </div>
              <h4 style={{
                margin: '0 0 8px', fontSize: isMobile ? 17 : 22, fontWeight: 900,
                color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.3,
                textWrap: 'balance',
              }}>
                {ms.headline.map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                  </React.Fragment>
                ))}
              </h4>
              <p style={{
                margin: 0, fontSize: isMobile ? 12.5 : 13.5, lineHeight: 1.7,
                color: '#4A5568', fontWeight: 500, textWrap: 'pretty',
              }}>
                {ms.description}
              </p>

              {/* 작은 메타 정보 */}
              <div style={{
                marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8,
              }}>
                {[
                  { icon: '⏱', label: `${ms.duration} 짧은 영상` },
                  { icon: '🔇', label: '음소거 자동재생' },
                  { icon: '⛶', label: '클릭 시 전체화면' },
                ].map((m, i) => (
                  <span key={i} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '5px 10px', borderRadius: 999,
                    background: 'rgba(11,31,58,0.05)',
                    color: '#4A5568', fontSize: 11, fontWeight: 700,
                  }}>
                    <span>{m.icon}</span> {m.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>);
      })()}

      {/* 탭 바 — 상세 정보 / 핵심 성분 / 리뷰 / 배송·결제 / 반품·교환 */}
      <section style={{
        padding: isMobile ? '0 8px' : '0 36px',
        background: '#fff',
        position: 'sticky', top: 0, zIndex: 50,
        borderBottom: '1px solid rgba(11,31,58,0.08)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        overflowX: 'auto',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 0, minWidth: 'max-content' }}>
          {[
            { k: 'info', ko: '상세 정보' },
            { k: 'reviews', ko: `리뷰 ${p.reviewsCount.toLocaleString()}` },
            { k: 'shipping', ko: '배송/결제' },
            { k: 'return', ko: '반품/교환' },
          ].map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              flex: isMobile ? '0 0 auto' : 1,
              padding: isMobile ? '14px 14px 12px' : '18px 10px 14px',
              background: 'transparent', border: 'none',
              borderBottom: tab === t.k ? '2.5px solid #E84141' : '2.5px solid transparent',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
              whiteSpace: 'nowrap',
            }}>
              <div style={{
                fontSize: isMobile ? 13 : 14, fontWeight: 700,
                color: tab === t.k ? '#0B1F3A' : '#6B7A90',
                letterSpacing: '-0.01em',
              }}>{t.ko}</div>
            </button>
          ))}
        </div>
      </section>

      {/* === 공식 상세 HTML 임베드 (HTML_DETAIL_MAP 등록 제품용) ===
          원본 HTML을 그대로 렌더링. 누락된 유틸리티 클래스(txt-sz-*, txt-wt-*, marb-* 등)는
          cqi 단위로 보강해서 컨테이너 폭에 따라 자동 스케일. */}
      {tab === 'info' && hasHtmlDetail(p.id) && (
        <section style={{ background: '#fff' }}>
          <style>{`
            .dc-wrap {
              container-type: inline-size;
              font-family: "Pretendard", "Noto Sans KR", system-ui, sans-serif;
              color: #222;
              word-break: keep-all;
              line-height: 1.4;
            }
            .dc-wrap *, .dc-wrap *::before, .dc-wrap *::after { box-sizing: border-box; }
            .dc-wrap img { max-width: 100%; height: auto; display: block; }
            .dc-wrap p { margin: 0; }
            .dc-wrap ul { margin: 0; padding-left: 1.2em; }
            /* font-size — 900px 디자인 기준: N px → N/9 cqi (컨테이너 폭 대비 %) */
            .dc-wrap .txt-sz-12 { font-size: 1.333cqi; }
            .dc-wrap .txt-sz-15 { font-size: 1.667cqi; }
            .dc-wrap .txt-sz-16 { font-size: 1.778cqi; }
            .dc-wrap .txt-sz-18 { font-size: 2cqi; }
            .dc-wrap .txt-sz-20 { font-size: 2.222cqi; }
            .dc-wrap .txt-sz-22 { font-size: 2.444cqi; }
            .dc-wrap .txt-sz-24 { font-size: 2.667cqi; }
            .dc-wrap .txt-sz-26 { font-size: 2.889cqi; }
            .dc-wrap .txt-sz-28 { font-size: 3.111cqi; }
            .dc-wrap .txt-sz-30 { font-size: 3.333cqi; }
            .dc-wrap .txt-sz-32 { font-size: 3.556cqi; }
            .dc-wrap .txt-sz-34 { font-size: 3.778cqi; }
            .dc-wrap .txt-sz-35 { font-size: 3.889cqi; }
            .dc-wrap .txt-sz-36 { font-size: 4cqi; }
            .dc-wrap .txt-sz-40 { font-size: 4.444cqi; }
            .dc-wrap .txt-sz-42 { font-size: 4.667cqi; }
            .dc-wrap .txt-sz-44 { font-size: 4.889cqi; }
            .dc-wrap .txt-sz-45 { font-size: 5cqi; }
            .dc-wrap .txt-sz-50 { font-size: 5.556cqi; }
            .dc-wrap .txt-sz-54 { font-size: 6cqi; }
            .dc-wrap .txt-sz-55 { font-size: 6.111cqi; }
            .dc-wrap .txt-sz-60 { font-size: 6.667cqi; }
            .dc-wrap .txt-sz-70 { font-size: 7.778cqi; }
            /* font weight (1~9 → 100~900) */
            .dc-wrap .txt-wt-1 { font-weight: 100; }
            .dc-wrap .txt-wt-2 { font-weight: 200; }
            .dc-wrap .txt-wt-3 { font-weight: 300; }
            .dc-wrap .txt-wt-4 { font-weight: 400; }
            .dc-wrap .txt-wt-5 { font-weight: 500; }
            .dc-wrap .txt-wt-6 { font-weight: 600; }
            .dc-wrap .txt-wt-7 { font-weight: 700; }
            .dc-wrap .txt-wt-8 { font-weight: 800; }
            .dc-wrap .txt-wt-9 { font-weight: 900; }
            /* line-height (XX → XX/10) */
            .dc-wrap .txt-lh-11 { line-height: 1.1; }
            .dc-wrap .txt-lh-12 { line-height: 1.2; }
            .dc-wrap .txt-lh-13 { line-height: 1.3; }
            .dc-wrap .txt-lh-15 { line-height: 1.5; }
            .dc-wrap .txt-lh-16 { line-height: 1.6; }
            .dc-wrap .txt-lh-17 { line-height: 1.7; }
            /* align / letter-spacing */
            .dc-wrap .txt-al-c { text-align: center; }
            .dc-wrap .txt-al-l { text-align: left; }
            .dc-wrap .txt-al-r { text-align: right; }
            .dc-wrap .txt-ls-0 { letter-spacing: 0; }
            .dc-wrap .txt-ls-3 { letter-spacing: 0.03em; }
            .dc-wrap .txt-ls-5 { letter-spacing: -0.03em; }
            /* margin-bottom (cqi 기반) */
            .dc-wrap .marb-8 { margin-bottom: 0.889cqi; }
            .dc-wrap .marb-12 { margin-bottom: 1.333cqi; }
            .dc-wrap .marb-16 { margin-bottom: 1.778cqi; }
            .dc-wrap .marb-20 { margin-bottom: 2.222cqi; }
            .dc-wrap .marb-24 { margin-bottom: 2.667cqi; }
            .dc-wrap .marb-28 { margin-bottom: 3.111cqi; }
            .dc-wrap .marb-32 { margin-bottom: 3.556cqi; }
            .dc-wrap .marb-36 { margin-bottom: 4cqi; }
            .dc-wrap .marb-40 { margin-bottom: 4.444cqi; }
            .dc-wrap .marb-48 { margin-bottom: 5.333cqi; }
            .dc-wrap .marb-52 { margin-bottom: 5.778cqi; }
            .dc-wrap .marb-60 { margin-bottom: 6.667cqi; }
            .dc-wrap .marb-64 { margin-bottom: 7.111cqi; }
            .dc-wrap .marb-68 { margin-bottom: 7.556cqi; }
            .dc-wrap .marb-72 { margin-bottom: 8cqi; }
            .dc-wrap .marb-80 { margin-bottom: 8.889cqi; }
            .dc-wrap .marb-92 { margin-bottom: 10.222cqi; }
            .dc-wrap .marb-100 { margin-bottom: 11.111cqi; }
            .dc-wrap .marb-120 { margin-bottom: 13.333cqi; }
            /* dc-alogo 로고 */
            .dc-wrap .dc-alogo { width: 30%; margin-inline: auto; }
            .dc-wrap .dc-alogo img { width: 100%; }
            /* chart-table (BOX 4) */
            .dc-wrap .chart-table { width: 100%; border-collapse: collapse; }
            .dc-wrap .chart-table .chart-th { background: #f5f5f5; padding: 1.5cqi 2cqi; text-align: left; font-weight: 500; vertical-align: top; border-bottom: 1px solid #ddd; font-size: 2.4cqi; line-height: 1.45; }
            .dc-wrap .chart-table .chart-td { padding: 1.5cqi 2cqi; vertical-align: top; border-bottom: 1px solid #ddd; font-size: 2.4cqi; line-height: 1.5; }
            .dc-wrap .chart-table .chart-tr:last-child .chart-th, .dc-wrap .chart-table .chart-tr:last-child .chart-td { border-bottom: none; }
            .dc-wrap .chart-col1 { width: 28%; }
            .dc-wrap .chart-col2 { width: 72%; }
            /* dc-chart-5 wrapper */
            .dc-wrap .dc-chart-5 { background: #fff; border: 1px solid #eee; border-radius: 0.5em; overflow: hidden; }
            /* dc-quality 섹션 컨테이너 */
            .dc-wrap .dc-quality { padding: 12cqi 5cqi; background: #fafafa; }
            .dc-wrap .dc-quality .pane3 { display: flex; gap: 3cqi; align-items: flex-start; margin-top: 4cqi; }
            .dc-wrap .dc-quality .pane3-item1 { flex: 0 0 30%; }
            .dc-wrap .dc-quality .pane3-item1 img { width: 100%; }
            .dc-wrap .dc-quality .pane3-item2 { flex: 1; }
            .dc-wrap .dc-quality .pane3-item2-bit2 { list-style: disc; padding-left: 1.2em; }
            .dc-wrap .dc-quality .pane3-item2-bit2-sub1 { margin-bottom: 1.5cqi; }
            /* dc-box5 pane2-item2-bit1 텍스트 영역 */
            .dc-wrap .dc-box5 .pane2-item2-bit1 { flex: 1; padding-left: 4cqi; }
          `}</style>
          {detailHtml
            ? <div dangerouslySetInnerHTML={{ __html: detailHtml }} />
            : <div style={{
                padding: '40px 16px', textAlign: 'center',
                color: '#8A97AD', fontSize: 13, fontWeight: 600,
              }}>상세 정보를 불러오는 중…</div>
          }
        </section>
      )}

      {/* 박스 개봉 안내 (BOX 16) */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.boxOpenNote && (<section style={{
        padding: isMobile ? '14px 16px 0' : '20px 36px 0',
        background: '#fff',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          background: '#FFF5F3', border: '1px solid rgba(232,65,65,0.18)',
          borderRadius: 10, padding: isMobile ? '10px 12px' : '12px 16px',
          fontSize: isMobile ? 11.5 : 12.5, color: '#8B2D1A', fontWeight: 600,
          lineHeight: 1.55,
        }}>{p.boxOpenNote}</div>
      </section>)}

      {/* 2. 핵심 함량 그리드 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && (<section style={{
        padding: isMobile ? '24px 16px' : '40px 36px',
        background: 'linear-gradient(180deg, #fff 0%, #FFF5F3 100%)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            title="100ml에 담긴 진심"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 16,
          }}>
            {p.highlights.map((h, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14,
                padding: isMobile ? '18px 16px' : '24px 22px',
                border: '1px solid rgba(232,65,65,0.15)',
                position: 'relative',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8,
                }}>
                  <span style={{
                    fontSize: isMobile ? 28 : 38, fontWeight: 900,
                    color: '#E84141', letterSpacing: '-0.03em', lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}>{h.num}</span>
                  <span style={{
                    fontSize: isMobile ? 14 : 18, fontWeight: 800, color: '#0B1F3A',
                  }}>{h.unit}</span>
                </div>
                <div style={{
                  fontSize: isMobile ? 13 : 14, fontWeight: 800,
                  color: '#0B1F3A', letterSpacing: '-0.01em', marginBottom: 4,
                }}>{h.label}</div>
                <div style={{
                  fontSize: isMobile ? 11 : 11.5, color: '#6B7A90', fontWeight: 600,
                  lineHeight: 1.5,
                }}>{h.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* 3. 7가지 포인트 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && (<section style={{
        padding: isMobile ? '32px 16px' : '60px 36px',
        background: '#0B1F3A', color: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: isMobile ? 20 : 28, textAlign: 'center' }}>
            <div style={{
              fontSize: isMobile ? 10 : 11, fontWeight: 800,
              letterSpacing: '0.22em', color: '#FFE45A', marginBottom: 8,
            }}>WHY HEMOHIM SHOT?</div>
            <h2 style={{
              margin: 0, fontSize: isMobile ? 22 : 30, fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.25, textWrap: 'balance',
            }}>
              <span style={{ color: '#FFE45A' }}>활력</span>을 선사하는<br />
              피로 회복 에너지 샷
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 12 : 16,
          }}>
            {p.points.map((pt, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 14,
                padding: isMobile ? '18px 18px' : '22px 22px',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: 'linear-gradient(135deg, #E84141, #FF8A3D)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 12,
                  boxShadow: '0 6px 16px rgba(232,65,65,0.4)',
                }}>
                  <HemoIcon type={pt.icon} size={22} color="#fff" />
                </div>
                <h4 style={{
                  margin: '0 0 6px', fontSize: isMobile ? 14 : 15.5, fontWeight: 800,
                  color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.35,
                }}>{pt.title}</h4>
                <p style={{
                  margin: 0, fontSize: isMobile ? 11.5 : 12.5, lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.78)', fontWeight: 500,
                }}>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* 3-A. 5가지 특별함 (BOX 3) */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.specialFeatures && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="WHAT'S SPECIAL"
            title="애터미 헤모힘 샷의 특별함"
            desc="헤모힘 당귀등 혼합추출물 함유로 건강하게 에너지 충전!"
            isMobile={isMobile}
          />
          <div style={{
            display: 'flex', flexDirection: 'column',
            gap: isMobile ? 10 : 12,
            marginTop: isMobile ? 8 : 12,
          }}>
            {p.specialFeatures.map((f, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'flex-start',
                gap: isMobile ? 12 : 16,
                background: 'linear-gradient(135deg, #FFF5F3 0%, #FFFBFA 100%)',
                border: '1px solid rgba(232,65,65,0.14)',
                borderRadius: 12,
                padding: isMobile ? '14px 14px' : '18px 22px',
              }}>
                <div style={{
                  flex: '0 0 auto',
                  width: isMobile ? 28 : 36, height: isMobile ? 28 : 36,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E84141, #FF8A3D)',
                  color: '#fff', fontWeight: 900,
                  fontSize: isMobile ? 13 : 15,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 10px rgba(232,65,65,0.32)',
                }}>{i + 1}</div>
                <div style={{
                  flex: 1, minWidth: 0,
                  fontSize: isMobile ? 13 : 14.5, fontWeight: 700,
                  color: '#0B1F3A', lineHeight: 1.55, letterSpacing: '-0.01em',
                }}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* POINT 1 보충 — 헤모힘 당귀등 혼합추출물 (당귀/천궁/작약) */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.hemohimHerbs && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#F8FAFD',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="POINT 1 · INGREDIENT"
            title="'헤모힘 당귀등 혼합추출물'을 함유한 에너지 샷"
            desc="헤모힘 당귀등 혼합추출물 6,000mg 함유 (당귀·천궁·백작약 모두 국내산)"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? 8 : 14,
            marginTop: isMobile ? 8 : 12,
          }}>
            {p.hemohimHerbs.map((h, i) => (
              <div key={h.name} style={{
                background: '#fff', borderRadius: 14,
                border: '1px solid rgba(232,65,65,0.16)',
                padding: isMobile ? '16px 10px' : '22px 18px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: isMobile ? 18 : 22, fontWeight: 900,
                  color: '#E84141', letterSpacing: '-0.02em', marginBottom: 6,
                }}>{h.name}</div>
                <div style={{
                  fontSize: isMobile ? 10.5 : 12, fontWeight: 600,
                  color: '#4A5568', lineHeight: 1.5,
                }}>{h.desc}</div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: isMobile ? 10 : 14,
            fontSize: isMobile ? 10 : 11, color: '#8A97AD', fontWeight: 500,
            textAlign: 'center',
          }}>* '헤모힘 당귀등 혼합추출물' 원료에 대한 설명임</div>
        </div>
      </section>)}

      {/* POINT 2 보충 — 타우린 효능 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.taurineEffects && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="POINT 2 · TAURINE 500mg"
            title="타우린의 효능"
            desc="쓸개즙의 주 구성 성분으로, 소를 뜻하는 그리스어에서 유래한 이름"
            isMobile={isMobile}
          />
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: isMobile ? 8 : 10,
            justifyContent: 'center', marginTop: isMobile ? 8 : 12,
          }}>
            {p.taurineEffects.map((e, i) => (
              <span key={e} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: isMobile ? '8px 14px' : '10px 18px',
                borderRadius: 999,
                background: i === 0
                  ? 'linear-gradient(135deg, #E84141, #FF8A3D)'
                  : 'rgba(232,65,65,0.08)',
                border: i === 0 ? 'none' : '1px solid rgba(232,65,65,0.22)',
                color: i === 0 ? '#fff' : '#8B2D1A',
                fontSize: isMobile ? 12 : 13.5, fontWeight: 800,
                letterSpacing: '-0.01em',
                boxShadow: i === 0 ? '0 6px 14px rgba(232,65,65,0.28)' : 'none',
              }}>{e}</span>
            ))}
          </div>
          <div style={{
            marginTop: isMobile ? 12 : 16,
            fontSize: isMobile ? 10 : 11, color: '#8A97AD', fontWeight: 500,
            textAlign: 'center',
          }}>* 제품이 아닌 타우린 원료에 대한 설명임</div>
        </div>
      </section>)}

      {/* POINT 3 보충 — 과라나 효능 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.guaranaEffects && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#F8FAFD',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="POINT 3 · GUARANA"
            title="과라나의 효능"
            desc="브라질 아마존 원산 · 미국 FDA에서 일반적으로 안전하다고 인정(GRAS)"
            isMobile={isMobile}
          />
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: isMobile ? 8 : 10,
            justifyContent: 'center', marginTop: isMobile ? 8 : 12,
          }}>
            {p.guaranaEffects.map((e, i) => (
              <span key={e} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: isMobile ? '8px 14px' : '10px 18px',
                borderRadius: 999,
                background: i === 0
                  ? 'linear-gradient(135deg, #0088B8, #00B6F0)'
                  : 'rgba(0,182,240,0.08)',
                border: i === 0 ? 'none' : '1px solid rgba(0,182,240,0.25)',
                color: i === 0 ? '#fff' : '#005A7A',
                fontSize: isMobile ? 12 : 13.5, fontWeight: 800,
                letterSpacing: '-0.01em',
                boxShadow: i === 0 ? '0 6px 14px rgba(0,182,240,0.28)' : 'none',
              }}>{e}</span>
            ))}
          </div>
          <div style={{
            marginTop: isMobile ? 12 : 16,
            fontSize: isMobile ? 10 : 11, color: '#8A97AD', fontWeight: 500,
            textAlign: 'center',
          }}>* 제품이 아닌 과라나 원료에 대한 설명임</div>
        </div>
      </section>)}

      {/* POINT 4 보충 — 파인애플 부원료 6종 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.flavorIngredients && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="POINT 4 · FLAVOR"
            title="활력을 깨우는 맛"
            desc="달콤 새콤한 맛을 구현하는 다양한 부원료 배합 — 기분 UP, 피로 DOWN!"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(3, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? 8 : 12,
            marginTop: isMobile ? 8 : 12,
          }}>
            {p.flavorIngredients.map((f, i) => (
              <div key={f.name} style={{
                background: 'linear-gradient(180deg, #FFFBFA 0%, #FFF5F3 100%)',
                border: '1px solid rgba(232,65,65,0.14)',
                borderRadius: 12,
                padding: isMobile ? '12px 6px' : '16px 10px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: isMobile ? 11 : 12.5, fontWeight: 800,
                  color: '#0B1F3A', letterSpacing: '-0.01em',
                  lineHeight: 1.3, marginBottom: 4,
                }}>{f.name}</div>
                <div style={{
                  fontSize: isMobile ? 11 : 12, fontWeight: 700,
                  color: '#E84141', fontVariantNumeric: 'tabular-nums',
                }}>{f.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* 4. 추천 대상 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="WHO IS IT FOR?"
            title="이런 분들께 추천합니다"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 14,
          }}>
            {p.recommendFor.map((r, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #FFF5F3 0%, #FFE5DD 100%)',
                border: '1px solid rgba(232,65,65,0.15)',
                borderRadius: 14,
                padding: isMobile ? '18px 14px' : '24px 18px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontSize: isMobile ? 32 : 40,
                  marginBottom: 10, lineHeight: 1,
                }}>{r.emoji}</div>
                <div style={{
                  fontSize: isMobile ? 12 : 13, fontWeight: 700,
                  color: '#0B1F3A', lineHeight: 1.5, textWrap: 'pretty',
                }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* 5. 영양 정보 + 상세 스펙 */}
      {tab === 'info' && !hasHtmlDetail(p.id) && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#F5F7FA',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            title="상세 정보"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 14 : 22,
          }}>
            {/* 좌 — 영양 성분 */}
            <div style={{
              background: '#fff', borderRadius: 14,
              padding: isMobile ? '18px 18px' : '24px 26px',
              border: '1px solid rgba(11,31,58,0.06)',
            }}>
              <div style={{
                fontSize: 12, fontWeight: 800, color: '#0B1F3A',
                letterSpacing: '-0.01em', marginBottom: 12,
              }}>영양 정보 <span style={{ color: '#6B7A90', fontWeight: 600 }}>(1회 100ml 기준)</span></div>
              <div>
                {p.nutrition.map((n, i) => (
                  <div key={n.k} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    padding: '10px 0',
                    borderBottom: i < p.nutrition.length - 1 ? '1px solid rgba(11,31,58,0.06)' : 'none',
                  }}>
                    <span style={{ fontSize: 12.5, color: '#4A5568', fontWeight: 600 }}>{n.k}</span>
                    <span style={{
                      fontSize: 13, fontWeight: 800, color: '#0B1F3A',
                      fontVariantNumeric: 'tabular-nums',
                    }}>
                      {n.v}
                      {n.pct && (
                        <span style={{
                          marginLeft: 6, color: '#0088B8', fontSize: 11, fontWeight: 700,
                        }}>{n.pct}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 우 — 상세 스펙 */}
            <div style={{
              background: '#fff', borderRadius: 14,
              padding: isMobile ? '18px 18px' : '24px 26px',
              border: '1px solid rgba(11,31,58,0.06)',
            }}>
              <div style={{
                fontSize: 12, fontWeight: 800, color: '#0B1F3A',
                letterSpacing: '-0.01em', marginBottom: 12,
              }}>제품 정보</div>
              <div>
                {p.specs.map((s, i) => (
                  <div key={s.k} style={{
                    display: 'grid', gridTemplateColumns: '90px 1fr', gap: 10,
                    padding: '10px 0',
                    borderBottom: i < p.specs.length - 1 ? '1px solid rgba(11,31,58,0.06)' : 'none',
                  }}>
                    <span style={{ fontSize: 11.5, color: '#8A97AD', fontWeight: 700 }}>{s.k}</span>
                    <span style={{ fontSize: 12, color: '#0B1F3A', fontWeight: 600, lineHeight: 1.5 }}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>)}

      {/* 5-A. 기능성 표시 식품 안내 (BOX 13) */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.functionalLabel && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="HEALTH INFO"
            title="건강기능식품, 제대로 알고 섭취해 주세요!"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 12 : 18,
            marginTop: isMobile ? 8 : 12,
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFF5F3 0%, #FFFBFA 100%)',
              border: '1px solid rgba(232,65,65,0.16)',
              borderRadius: 14,
              padding: isMobile ? '18px 18px' : '22px 24px',
            }}>
              <div style={{
                display: 'inline-block', padding: '4px 10px', borderRadius: 999,
                background: '#E84141', color: '#fff',
                fontSize: 10.5, fontWeight: 800, letterSpacing: '0.04em',
                marginBottom: 10,
              }}>{p.functionalLabel.title}</div>
              <div style={{
                fontSize: isMobile ? 12.5 : 13.5, fontWeight: 600,
                color: '#0B1F3A', lineHeight: 1.6, letterSpacing: '-0.01em',
              }}>{p.functionalLabel.desc}</div>
              <div style={{
                marginTop: 12, padding: '8px 10px', borderRadius: 8,
                border: '1px dashed rgba(232,65,65,0.4)',
                fontSize: isMobile ? 10.5 : 11.5, fontWeight: 700,
                color: '#E84141', letterSpacing: '-0.01em',
              }}>본 제품은 건강기능식품이 아닙니다</div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #F0F8FF 0%, #FBFCFF 100%)',
              border: '1px solid rgba(0,182,240,0.18)',
              borderRadius: 14,
              padding: isMobile ? '18px 18px' : '22px 24px',
            }}>
              <div style={{
                display: 'inline-block', padding: '4px 10px', borderRadius: 999,
                background: '#0088B8', color: '#fff',
                fontSize: 10.5, fontWeight: 800, letterSpacing: '0.04em',
                marginBottom: 10,
              }}>{p.functionalLabel.distinguishTitle}</div>
              <div style={{
                fontSize: isMobile ? 12.5 : 13.5, fontWeight: 600,
                color: '#0B1F3A', lineHeight: 1.6, letterSpacing: '-0.01em',
              }}>{p.functionalLabel.distinguishDesc}</div>
            </div>
          </div>
        </div>
      </section>)}

      {/* 5-B. 애터미 품질 보증 (BOX quality) */}
      {tab === 'info' && !hasHtmlDetail(p.id) && p.qualityAssurance && (<section style={{
        padding: isMobile ? '32px 16px 40px' : '50px 36px 70px',
        background: 'linear-gradient(180deg, #0B1F3A 0%, #122B52 100%)',
        color: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 18 : 24 }}>
            <div style={{
              fontSize: isMobile ? 10 : 11, fontWeight: 800,
              letterSpacing: '0.22em', color: '#FFE45A', marginBottom: 10,
            }}>ABSOLUTE ATOMY QUALITY ASSURANCE</div>
            <h2 style={{
              margin: 0, fontSize: isMobile ? 19 : 26, fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.35, textWrap: 'balance',
            }}>
              깐깐한 애터미의 품질보증이<br />
              확인된 제품입니다.
            </h2>
            <p style={{
              margin: isMobile ? '12px 0 0' : '14px 0 0',
              fontSize: isMobile ? 11.5 : 12.5, lineHeight: 1.65,
              color: 'rgba(255,255,255,0.75)', fontWeight: 500,
              textWrap: 'pretty',
            }}>{p.qualityAssurance.intro}</p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 14,
            padding: isMobile ? '18px 16px' : '24px 28px',
          }}>
            <div style={{
              display: 'inline-block', padding: '4px 12px', borderRadius: 999,
              background: '#FFE45A', color: '#0B1F3A',
              fontSize: 11, fontWeight: 900, letterSpacing: '0.08em',
              marginBottom: 14,
            }}>{p.qualityAssurance.badge}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {p.qualityAssurance.items.map((it, i) => (
                <li key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  padding: '8px 0',
                  borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  fontSize: isMobile ? 11.5 : 12.5, fontWeight: 500,
                  color: 'rgba(255,255,255,0.88)', lineHeight: 1.55,
                }}>
                  <span style={{
                    flex: '0 0 auto',
                    width: 16, height: 16, borderRadius: '50%',
                    background: 'rgba(255,228,90,0.18)',
                    color: '#FFE45A', fontWeight: 900, fontSize: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginTop: 2,
                  }}>{i + 1}</span>
                  <span style={{ flex: 1 }}>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{
            marginTop: isMobile ? 14 : 18,
            fontSize: isMobile ? 11 : 12, color: 'rgba(255,255,255,0.65)',
            fontWeight: 500, lineHeight: 1.6, textAlign: 'center',
          }}>{p.qualityAssurance.sub}</div>
        </div>
      </section>)}

      {/* 6. 리뷰 */}
      {tab === 'reviews' && (<section style={{
        padding: isMobile ? '32px 16px' : '50px 36px 60px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* 리뷰 헤더 */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: isMobile ? 16 : 22,
          }}>
            <ShopSectionTitle
              title={`고객 후기 ${p.reviewsCount.toLocaleString()}건`}
              isMobile={isMobile}
            />
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 18px', borderRadius: 12,
              background: 'linear-gradient(135deg, #FFF8E1, #FFE45A22)',
              border: '1px solid rgba(255,184,0,0.35)',
            }}>
              <StarRating rating={p.rating} size={18} />
              <div>
                <div style={{
                  fontSize: 22, fontWeight: 900, color: '#0B1F3A',
                  fontVariantNumeric: 'tabular-nums', lineHeight: 1,
                }}>{p.rating}</div>
                <div style={{ fontSize: 10.5, color: '#6B7A90', fontWeight: 700, marginTop: 2 }}>5점 만점</div>
              </div>
            </div>
          </div>

          {/* 리뷰 카드 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? 12 : 16,
          }}>
            {p.reviews.map(r => (
              <div key={r.id} style={{
                background: '#fff', borderRadius: 12,
                padding: isMobile ? '16px 16px' : '20px 22px',
                border: '1px solid rgba(11,31,58,0.06)',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 999,
                      background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      color: '#0B1F3A', fontSize: 12, fontWeight: 900,
                    }}>{r.author[0]}</div>
                    <div>
                      <div style={{
                        fontSize: 12.5, fontWeight: 800, color: '#0B1F3A',
                        display: 'flex', alignItems: 'center', gap: 5,
                      }}>
                        {r.author}
                        {r.verified && (
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 2,
                            padding: '1px 5px', borderRadius: 3,
                            background: 'rgba(0,182,240,0.12)',
                            color: '#0088B8', fontSize: 9, fontWeight: 800,
                          }}>✓ 구매확인</span>
                        )}
                      </div>
                      <div style={{ fontSize: 10.5, color: '#8A97AD', marginTop: 1, fontWeight: 600 }}>{r.date}</div>
                    </div>
                  </div>
                  <StarRating rating={r.rating} size={13} />
                </div>
                <p style={{
                  margin: 0, fontSize: 12.5, lineHeight: 1.65, color: '#2B3A52',
                  fontWeight: 500, textWrap: 'pretty',
                }}>{r.text}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <button style={{
              padding: '12px 26px', borderRadius: 999,
              background: '#fff', border: '1px solid rgba(11,31,58,0.15)',
              color: '#0B1F3A', fontSize: 13, fontWeight: 800, cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}>
              모든 후기 보기 ({p.reviewsCount.toLocaleString()}) →
            </button>
          </div>
        </div>
      </section>)}

      {/* 7. 배송/결제 */}
      {tab === 'shipping' && (<section style={{
        padding: isMobile ? '24px 16px' : '40px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle title="배송 및 결제 안내" isMobile={isMobile} />
          <div style={{ display: 'grid', gap: isMobile ? 16 : 20, marginTop: isMobile ? 18 : 24 }}>
            {[
              { h: '배송 방법', items: ['택배 (CJ대한통운)', '주문 후 평균 1~3일 이내 출고', '오후 2시 이전 결제 완료 시 당일 출고 (영업일 기준)'] },
              { h: '배송 지역 및 비용', items: ['전국 배송 (제주/도서산간 별도 배송비 추가)', '50,000원 이상 무료배송', '50,000원 미만: 3,000원'] },
              { h: '결제 방법', items: ['신용카드 / 체크카드', '실시간 계좌이체 / 무통장 입금', '카카오페이 / 네이버페이 / 토스'] },
              { h: '영수증/세금계산서', items: ['주문 시 현금영수증 발행 가능', '사업자 세금계산서는 마이페이지 > 영수증 신청'] },
            ].map((b, i) => (
              <div key={i} style={{
                padding: isMobile ? '16px' : '20px 24px',
                background: '#F8FAFC', borderRadius: 12,
                border: '1px solid rgba(11,31,58,0.06)',
              }}>
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: '#0B1F3A', marginBottom: 10 }}>{b.h}</div>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
                  {b.items.map((it, j) => (
                    <li key={j} style={{ fontSize: isMobile ? 12.5 : 13.5, color: '#4A5668', lineHeight: 1.6 }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>)}

      {/* 8. 반품/교환 */}
      {tab === 'return' && (<section style={{
        padding: isMobile ? '24px 16px' : '40px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle title="반품 및 교환 안내" isMobile={isMobile} />
          <div style={{ display: 'grid', gap: isMobile ? 16 : 20, marginTop: isMobile ? 18 : 24 }}>
            {[
              { h: '반품/교환 신청 기간', items: ['상품 수령 후 7일 이내 (단순 변심)', '상품 하자/오배송: 수령 후 30일 이내', '식품 등 변질 우려 상품: 수령 즉시 확인 후 신청'] },
              { h: '반품/교환 불가 사유', items: ['포장 개봉 또는 사용 흔적이 있는 경우', '소비자 부주의로 상품 가치가 훼손된 경우', '시간 경과로 재판매가 어려운 경우', '복제 가능한 상품의 포장을 훼손한 경우'] },
              { h: '반품 배송비', items: ['단순 변심: 왕복 배송비 6,000원 (소비자 부담)', '상품 하자/오배송: 무료 (애터미 부담)', '교환 시: 차액만 결제 또는 환불'] },
              { h: '환불 절차', items: ['반품 상품 회수 → 검수 (영업일 2~3일)', '검수 완료 후 3영업일 이내 환불 처리', '카드 결제: 카드사 사정에 따라 5~7일 소요'] },
            ].map((b, i) => (
              <div key={i} style={{
                padding: isMobile ? '16px' : '20px 24px',
                background: '#F8FAFC', borderRadius: 12,
                border: '1px solid rgba(11,31,58,0.06)',
              }}>
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 800, color: '#0B1F3A', marginBottom: 10 }}>{b.h}</div>
                <ul style={{ margin: 0, paddingLeft: 18, display: 'grid', gap: 6 }}>
                  {b.items.map((it, j) => (
                    <li key={j} style={{ fontSize: isMobile ? 12.5 : 13.5, color: '#4A5668', lineHeight: 1.6 }}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 18, padding: isMobile ? '14px 16px' : '18px 24px',
            background: 'rgba(232,65,65,0.06)', borderRadius: 10,
            border: '1px solid rgba(232,65,65,0.18)',
            fontSize: isMobile ? 12 : 13, color: '#B23838', fontWeight: 600, lineHeight: 1.6,
          }}>
            ※ 반품/교환 문의: 고객센터 1544-0001 (평일 9:00~18:00)
          </div>
        </div>
      </section>)}

      {/* 푸터 */}
      <ShopFooter isMobile={isMobile} />
    </div>
  );
}

function qtyBtnStyle() {
  return {
    width: 36, height: 36, border: 'none', background: 'transparent',
    color: '#0B1F3A', fontSize: 18, fontWeight: 700, cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
}

// =============================================================
// 헤모힘 샷 전용 — 상단 영상 + 스크롤 시트 + PIP
// =============================================================
const HEMOHIM_VIDEO_URL = 'https://www.genspark.ai/api/files/s/mb60FN8q';
const HEMOHIM_VIDEO_POSTER = 'https://image.atomy.com/KR/goods/000017/org/203/250714000044203.jpg?w=480&h=480';

// 모바일 피드형 — 다른 제품 영상으로 이어지는 후속 제품 목록
const NEXT_PRODUCTS_FEED = [
  {
    id: '000605',
    name: '애터미 허벌 샴푸',
    tagline: '두피 본연의 균형을, 한방 6종',
    videoUrl: 'https://www.genspark.ai/api/files/s/mb60FN8q',
    poster: 'https://image.atomy.com/KR/goods/000605/org/206/250714000045206.jpg?w=1080&h=1920',
  },
  {
    id: '000168',
    name: '애터미 더 페임',
    tagline: '하루 한 번, 깊은 영양 안티에이징',
    videoUrl: 'https://www.genspark.ai/api/files/s/mb60FN8q',
    poster: 'https://image.atomy.com/KR/goods/000168/org/204/250714000044204.jpg?w=1080&h=1920',
  },
];

function HemohimShotDetail({ product, isMobile = false, onClose, onPlayVideo, onSelectProduct }) {
  const p = product || HEMOHIM_DETAIL;
  // 제품별 히어로 영상/포스터/제목 (없으면 헤모힘 기본값으로 폴백)
  const heroVideoUrl = p.videoUrl || HEMOHIM_VIDEO_URL;
  const heroVideoPoster = p.videoPoster || HEMOHIM_VIDEO_POSTER;
  const heroVideoTitle = p.videoTitle || '아침 루틴, 헤모힘 한 잔';
  const heroVideoRef = React.useRef(null);
  const pipVideoRef = React.useRef(null);
  const heroWrapRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const [pipVisible, setPipVisible] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  // 모바일: 영상이 화면의 대부분을 차지하고, 시트(섬네일 포함)는 '지금 구매하기' 버튼 근처까지 내려옴
  // S26 Ultra(412×916) 기준: 시트가 보이던 영역(~200px)의 절반(~100px)만큼 더 아래로 내려가도록 heroHeight 확대
  const heroHeight = isMobile ? 780 : 420;

  // 스크롤 컨테이너 찾기 — 가장 가까운 phone-scroll 또는 window
  const findScroller = () => {
    let el = rootRef.current;
    while (el) {
      if (el.classList && el.classList.contains('phone-scroll')) return el;
      const cs = el.parentElement && getComputedStyle(el.parentElement);
      if (cs && (cs.overflowY === 'auto' || cs.overflowY === 'scroll')) return el.parentElement;
      el = el.parentElement;
    }
    return window;
  };

  // 영상 영역이 화면 밖으로 스크롤되면 PIP 노출
  React.useEffect(() => {
    const target = heroWrapRef.current;
    if (!target) return;
    const scroller = findScroller();
    const root = (scroller === window) ? null : scroller;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          setPipVisible(!e.isIntersecting);
        });
      },
      { root, threshold: 0.05 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  // hero ↔ PIP 재생 동기화
  React.useEffect(() => {
    const hero = heroVideoRef.current;
    const pip = pipVideoRef.current;
    if (!hero) return;

    if (pipVisible && pip) {
      try { pip.currentTime = hero.currentTime; } catch (e) {}
      pip.muted = muted;
      pip.play().catch(() => {});
      hero.pause();
    } else {
      if (pip) {
        try { hero.currentTime = pip.currentTime; } catch (e) {}
        pip.pause();
      }
      hero.muted = muted;
      hero.play().catch(() => {});
    }
  }, [pipVisible, muted]);

  // 진행률
  React.useEffect(() => {
    const onTime = () => {
      const v = pipVisible ? pipVideoRef.current : heroVideoRef.current;
      if (v && v.duration) setProgress(v.currentTime / v.duration);
    };
    const hero = heroVideoRef.current;
    const pip = pipVideoRef.current;
    hero && hero.addEventListener('timeupdate', onTime);
    pip && pip.addEventListener('timeupdate', onTime);
    return () => {
      hero && hero.removeEventListener('timeupdate', onTime);
      pip && pip.removeEventListener('timeupdate', onTime);
    };
  }, [pipVisible]);

  const openFullscreen = () => {
    // 전체보기 진입 시 PIP 즉시 숨김
    setPipVisible(false);
    if (onPlayVideo) {
      onPlayVideo({
        videoUrl: heroVideoUrl,
        thumb: heroVideoPoster,
        title: heroVideoTitle,
      });
    }
  };

  const scrollToTop = () => {
    const sc = findScroller();
    if (sc === window) window.scrollTo({ top: 0, behavior: 'smooth' });
    else sc.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div ref={rootRef} style={{
      position: 'relative',
      background: '#fff',
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
    }}>
      {/* 상단 닫기 바 — 영상 위 글래스 (모바일에서만; 데스크톱은 갤러리에 영상이 들어가므로 AtomyProductDetail의 닫기 바를 사용) */}
      {isMobile && (<div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10,
        height: 48,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 14px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
      }}>
        <button onClick={onClose} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.16)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.22)',
          borderRadius: 999, padding: '7px 12px',
          color: '#fff', fontSize: 12, fontWeight: 700, cursor: 'pointer',
          pointerEvents: 'auto',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          제품 목록
        </button>
        <div style={{
          fontSize: 11, fontWeight: 800, color: '#fff', opacity: 0.78,
          letterSpacing: '0.08em',
          pointerEvents: 'auto',
        }}>
          상품번호 {p.id}
        </div>
      </div>)}

      {/* 상단 영상 영역 — 모바일에서만 표시. 데스크톱에서는 갤러리(썸네일 위치)에 영상이 들어감. */}
      {isMobile && (
      <div ref={heroWrapRef} style={{
        position: 'relative',
        width: '100%',
        height: heroHeight,
        background: '#0B1320',
        overflow: 'hidden',
      }}>
        <video
          ref={heroVideoRef}
          src={heroVideoUrl}
          poster={heroVideoPoster}
          autoPlay
          muted={muted}
          loop
          playsInline
          onClick={openFullscreen}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            cursor: 'pointer', display: 'block',
          }}
        />
        <div onClick={openFullscreen} style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0.85,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setMuted(m => !m); }}
          aria-label={muted ? '음소거 해제' : '음소거'}
          style={{
            position: 'absolute', right: 14, bottom: 14,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', zIndex: 5,
          }}
        >
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#fff" stroke="#fff" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#fff" stroke="#fff" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      </div>
      )}

      {/* 모바일 — 시트 형태로 감싸기 */}
      {isMobile && (
      <div style={{
        position: 'relative',
        marginTop: -20,
        background: '#fff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        boxShadow: '0 -10px 30px rgba(0,0,0,0.18)',
        paddingTop: 8,
        zIndex: 2,
      }}>
        <div style={{
          display: 'flex', justifyContent: 'center', padding: '8px 0 4px',
        }}>
          <div style={{
            width: 44, height: 4, borderRadius: 999,
            background: 'rgba(11,31,58,0.18)',
          }} />
        </div>
        <AtomyProductDetail
          product={p}
          isMobile={isMobile}
          onClose={onClose}
          onPlayVideo={onPlayVideo}
          embedded
        />
      </div>
      )}

      {/* 데스크톱 — 갤러리 위치에 영상이 들어감 */}
      {!isMobile && (
      <AtomyProductDetail
        product={p}
        isMobile={isMobile}
        onClose={onClose}
        onPlayVideo={onPlayVideo}
        heroMedia={(
          <div ref={heroWrapRef} style={{
            position: 'absolute', inset: 0,
            background: '#0B1320',
          }}>
            <video
              ref={heroVideoRef}
              src={heroVideoUrl}
              poster={heroVideoPoster}
              autoPlay
              muted={muted}
              loop
              playsInline
              onClick={openFullscreen}
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                cursor: 'pointer', display: 'block',
              }}
            />
            <div onClick={openFullscreen} style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none',
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: 0.85,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </div>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setMuted(m => !m); }}
              aria-label={muted ? '음소거 해제' : '음소거'}
              style={{
                position: 'absolute', right: 14, bottom: 14,
                width: 38, height: 38, borderRadius: '50%',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.18)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', zIndex: 5,
              }}
            >
              {muted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#fff" stroke="#fff" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#fff" stroke="#fff" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
          </div>
        )}
        embedded
      />
      )}

      {/* 모바일 — 피드형 다음 제품 섹션 (스크롤 시 다른 제품 영상으로 자연스럽게 연결) */}
      {isMobile && (
        <NextProductFeed
          products={NEXT_PRODUCTS_FEED}
          onSelectProduct={onSelectProduct}
        />
      )}

      {/* 고정 CTA 바 — 디바이스 화면 하단 고정 (네비 위) */}
      <StickyCtaPortal isMobile={isMobile} rootRef={rootRef} />

      {/* PIP — S26 Ultra/iPhone 17(모바일) 및 데스크톱 모두에서 노출. 영상이 화면 밖으로 스크롤될 때 우측 하단에 세로형 PIP 표시 */}
      <PipPortal pipVisible={pipVisible} muted={muted} progress={progress} isMobile={isMobile} pipVideoRef={pipVideoRef} openFullscreen={openFullscreen} scrollToTop={scrollToTop} rootRef={rootRef} videoUrl={heroVideoUrl} videoPoster={heroVideoPoster} />
    </div>
  );
}

function StickyCtaPortal({ isMobile, rootRef }) {
  const [host, setHost] = React.useState(null);
  React.useEffect(() => {
    const scroller = rootRef.current && rootRef.current.closest('.phone-scroll');
    const h = scroller ? scroller.parentElement : null;
    if (h && getComputedStyle(h).position === 'static') h.style.position = 'relative';
    setHost(h);
  }, [rootRef]);
  if (!host) return null;
  const node = (
    <div style={{
      position: 'absolute', left: 0, right: 0,
      bottom: isMobile ? 56 : 0,
      padding: isMobile ? '10px 12px' : '12px 16px',
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(11,31,58,0.08)',
      boxShadow: '0 -4px 16px rgba(0,0,0,0.06)',
      display: 'grid', gridTemplateColumns: '44px 1fr 1.4fr', gap: 8,
      zIndex: 9998,
    }}>
      <button aria-label="선물하기" style={{
        padding: 0, borderRadius: 8,
        background: '#fff', border: '1.5px solid #00B6F0',
        color: '#00B6F0', cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B6F0"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 12 20 22 4 22 4 12" />
          <rect x="2" y="7" width="20" height="5" />
          <line x1="12" y1="22" x2="12" y2="7" />
          <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
          <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
        </svg>
      </button>
      <button style={{
        padding: '12px', borderRadius: 8,
        background: '#2E3338', border: 'none',
        color: '#fff', fontSize: 13.5, fontWeight: 800,
        cursor: 'pointer',
      }}>
        장바구니
      </button>
      <button className="cta-pulse" style={{
        padding: '12px', borderRadius: 8,
        background: '#00B6F0',
        border: 'none', color: '#fff', fontSize: 14, fontWeight: 800,
        cursor: 'pointer',
        boxShadow: '0 6px 18px rgba(0,182,240,0.32)',
        ['--cta-pulse-color']: 'rgba(0,182,240,0.55)',
      }}>
        바로구매
      </button>
    </div>
  );
  return ReactDOM.createPortal(node, host);
}

function NextProductFeed({ products, onSelectProduct }) {
  const itemRefs = React.useRef([]);
  const [activeIdx, setActiveIdx] = React.useState(-1);

  // 화면 중앙에 들어온 영상만 재생, 나머지는 일시정지
  React.useEffect(() => {
    const observers = [];
    itemRefs.current.forEach((el, idx) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            const v = el.querySelector('video');
            if (!v) return;
            if (e.isIntersecting && e.intersectionRatio > 0.55) {
              setActiveIdx(idx);
              v.play().catch(() => {});
            } else {
              v.pause();
            }
          });
        },
        { threshold: [0, 0.55, 0.9] }
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [products]);

  return (
    <div style={{ background: '#0B1320' }}>
      {/* 섹션 헤더 — '다른 제품 보기' 안내 */}
      <div style={{
        position: 'relative',
        padding: '28px 18px 18px',
        background: 'linear-gradient(180deg, #fff 0%, #fff 50%, #0B1320 100%)',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: 11, fontWeight: 800, letterSpacing: '0.18em',
          color: '#0B1F3A', opacity: 0.55, marginBottom: 8,
        }}>NEXT</div>
        <div style={{
          fontSize: 18, fontWeight: 800, color: '#0B1F3A',
          letterSpacing: '-0.01em', marginBottom: 14,
        }}>
          다른 제품 보기
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '7px 14px', borderRadius: 999,
          background: 'rgba(11,31,58,0.06)',
          color: '#0B1F3A', fontSize: 12, fontWeight: 700,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          아래로 스크롤
        </div>
      </div>

      {/* 다음 제품 피드 — 한 화면씩 풀블리드 영상 */}
      {products.map((np, idx) => (
        <div
          key={np.id}
          ref={(el) => { itemRefs.current[idx] = el; }}
          style={{
            position: 'relative',
            width: '100%',
            height: 680,
            background: '#0B1320',
            overflow: 'hidden',
            borderTop: idx === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <video
            src={np.videoUrl}
            poster={np.poster}
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              display: 'block', cursor: 'pointer',
            }}
            onClick={() => onSelectProduct && onSelectProduct({ id: np.id })}
          />
          {/* 하단 그라데이션 + 정보 */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            padding: '22px 18px 86px',
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.78) 100%)',
            color: '#fff',
            pointerEvents: 'none',
          }}>
            <div style={{
              fontSize: 11, fontWeight: 800, opacity: 0.75,
              letterSpacing: '0.12em', marginBottom: 6,
            }}>
              상품번호 {np.id}
            </div>
            <div style={{
              fontSize: 19, fontWeight: 800, letterSpacing: '-0.01em',
              marginBottom: 4,
            }}>
              {np.name}
            </div>
            <div style={{
              fontSize: 13, fontWeight: 500, opacity: 0.82,
              marginBottom: 14,
            }}>
              {np.tagline}
            </div>
            <button
              onClick={() => onSelectProduct && onSelectProduct({ id: np.id })}
              style={{
                pointerEvents: 'auto',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 16px', borderRadius: 999,
                background: '#fff', color: '#0B1F3A',
                border: 'none', fontSize: 13, fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
              }}
            >
              상세보기
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                   strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
          {/* 우측 사이드 액션 — 틱톡 스타일 미니멀 */}
          <div style={{
            position: 'absolute', right: 12, bottom: 110,
            display: 'flex', flexDirection: 'column', gap: 12,
            color: '#fff', alignItems: 'center',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.22)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
                <path d="M12 21s-7-4.5-9.5-9C.8 8.6 2.7 5 6 5c2 0 3.4 1.2 4 2.4C10.6 6.2 12 5 14 5c3.3 0 5.2 3.6 3.5 7-2.5 4.5-9.5 9-9.5 9z"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* 피드 끝 안내 */}
      <div style={{
        padding: '18px 16px 28px',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.5)',
        fontSize: 12, fontWeight: 600,
        letterSpacing: '0.05em',
      }}>
        — 마지막 제품이에요 —
      </div>
    </div>
  );
}

function PipPortal({ pipVisible, muted, progress, isMobile, pipVideoRef, openFullscreen, scrollToTop, rootRef, videoUrl, videoPoster }) {
  const [host, setHost] = React.useState(null);
  const [pos, setPos] = React.useState(null); // {right, bottom}
  const [ratio, setRatio] = React.useState(9 / 16); // w/h — 기본 세로형 (현 demo 영상)
  const [enlarged, setEnlarged] = React.useState(false); // 더블클릭 시 30% 확대 토글
  const [dismissed, setDismissed] = React.useState(false); // X 버튼으로 닫으면 세션 동안 유지
  const [customSize, setCustomSize] = React.useState(null); // 코너 드래그로 직접 지정한 width (null이면 기본 사이즈)
  const dragRef = React.useRef({ dragging: false, moved: false, startX: 0, startY: 0, startRight: 0, startBottom: 0 });
  const resizeRef = React.useRef({ resizing: false, startX: 0, startY: 0, startWidth: 0 });
  const clickTimerRef = React.useRef(null);

  // 영상 메타데이터로부터 가로/세로 자동 판정
  React.useEffect(() => {
    const v = pipVideoRef.current;
    if (!v) return;
    const onMeta = () => {
      if (v.videoWidth && v.videoHeight) {
        setRatio(v.videoWidth / v.videoHeight);
      }
    };
    if (v.readyState >= 1) onMeta();
    v.addEventListener('loadedmetadata', onMeta);
    return () => v.removeEventListener('loadedmetadata', onMeta);
  }, [pipVideoRef]);

  const portrait = ratio < 1;
  // 가로형: 16:9 / 세로형: 9:16 — width 기준
  // 기본값을 30% 확대한 사이즈로 사용 (96→125, 150→195, 160→208, 240→312)
  const basePipWidth = portrait
    ? (isMobile ? 125 : 195)
    : (isMobile ? 208 : 312);
  const sizeScale = enlarged ? 1.3 : 1;
  // 사용자가 코너로 직접 리사이즈했으면 customSize 우선, 아니면 기본+토글
  const pipWidth = customSize != null ? customSize : basePipWidth * sizeScale;
  const pipHeight = pipWidth / ratio;
  React.useEffect(() => {
    const scroller = rootRef.current && rootRef.current.closest('.phone-scroll');
    const h = scroller ? scroller.parentElement : null;
    if (h && getComputedStyle(h).position === 'static') h.style.position = 'relative';
    setHost(h);
    // default 위치: 장바구니/구매 버튼 위쪽
    const ctaH = isMobile ? 64 : 70;
    const navH = isMobile ? 56 : 0;
    setPos({ right: isMobile ? 12 : 24, bottom: navH + ctaH + 8 });
  }, [rootRef, isMobile]);

  // 사이즈 변경 시 화면 밖으로 나가지 않도록 위치 클램프
  React.useEffect(() => {
    if (!host || !pos) return;
    const hostRect = host.getBoundingClientRect();
    const newRight = Math.max(8, Math.min(hostRect.width - pipWidth - 8, pos.right));
    const newBottom = Math.max(8, Math.min(hostRect.height - pipHeight - 8, pos.bottom));
    if (newRight !== pos.right || newBottom !== pos.bottom) {
      setPos({ right: newRight, bottom: newBottom });
    }
  }, [enlarged, pipWidth, pipHeight, host]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!host || !pos) return null;

  const onPointerDown = (e) => {
    dragRef.current = {
      dragging: true, moved: false,
      startX: e.clientX, startY: e.clientY,
      startRight: pos.right, startBottom: pos.bottom,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) d.moved = true;
    const hostRect = host.getBoundingClientRect();
    const w = pipWidth;
    const pipH = pipHeight;
    let newRight = Math.max(8, Math.min(hostRect.width - w - 8, d.startRight - dx));
    let newBottom = Math.max(8, Math.min(hostRect.height - pipH - 8, d.startBottom - dy));
    setPos({ right: newRight, bottom: newBottom });
  };
  const onPointerUp = (e) => {
    const d = dragRef.current;
    const wasMove = d.moved;
    d.dragging = false;
    if (wasMove) return; // 드래그한 경우 클릭 무시
    // 단일 vs 더블 클릭 구분 — 280ms 이내 두 번째 탭이 오면 더블클릭(사이즈 토글),
    // 아니면 전체화면 열기
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = null;
      setCustomSize(null); // 더블클릭으로 토글하면 코너 리사이즈 값 리셋
      setEnlarged(v => !v);
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickTimerRef.current = null;
        openFullscreen();
      }, 280);
    }
  };
  const node = (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        position: 'absolute',
        right: pos.right,
        bottom: pos.bottom,
        width: pipWidth,
        zIndex: 9999,
        opacity: (pipVisible && !dismissed) ? 1 : 0,
        transform: (pipVisible && !dismissed) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.92)',
        pointerEvents: (pipVisible && !dismissed) ? 'auto' : 'none',
        transition: dragRef.current.dragging
          ? 'opacity 0.28s ease'
          : 'opacity 0.28s ease, transform 0.32s cubic-bezier(.2,.7,.3,1), width 0.28s cubic-bezier(.2,.7,.3,1)',
        touchAction: 'none', cursor: 'grab',
      }}>
      <div style={{
        position: 'relative',
        aspectRatio: `${ratio}`,
        borderRadius: 14, overflow: 'hidden',
        background: '#000', boxShadow: '0 12px 32px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        <video ref={pipVideoRef} src={videoUrl || HEMOHIM_VIDEO_URL} poster={videoPoster || HEMOHIM_VIDEO_POSTER}
          muted={muted} loop playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%)',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: '0 8px 6px', pointerEvents: 'none',
        }}>
          <div style={{ fontSize: 9, fontWeight: 800, color: '#fff', letterSpacing: '0.1em', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>● LIVE</div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#fff', opacity: 0.85, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>탭하여 전체화면</div>
        </div>
        {/* 좌상단 꼭지점 — 리사이즈 핸들 (드래그하면 사이즈 자유 조절) */}
        <div
          onPointerDown={(e) => {
            e.stopPropagation();
            resizeRef.current = {
              resizing: true,
              startX: e.clientX, startY: e.clientY,
              startWidth: pipWidth,
            };
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerMove={(e) => {
            const r = resizeRef.current;
            if (!r.resizing) return;
            e.stopPropagation();
            const dx = e.clientX - r.startX;
            const dy = e.clientY - r.startY;
            // 좌상단을 끌어 멀어지면(왼쪽 또는 위) 폭 증가. 가로/세로 변위를 비율 보정해 결합
            const dwX = -dx;
            const dwY = -dy * ratio;
            // 두 축 모두 같은 방향이면 큰 쪽, 반대 방향이면 평균 — 자연스러운 대각선 리사이즈
            const sameSign = (dwX >= 0 && dwY >= 0) || (dwX <= 0 && dwY <= 0);
            const dw = sameSign
              ? (Math.abs(dwX) > Math.abs(dwY) ? dwX : dwY)
              : (dwX + dwY) / 2;
            const next = Math.max(80, Math.min(420, r.startWidth + dw));
            setCustomSize(next);
          }}
          onPointerUp={(e) => {
            if (resizeRef.current.resizing) {
              resizeRef.current.resizing = false;
              e.stopPropagation();
              try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
            }
          }}
          aria-label="PIP 크기 조절"
          title="드래그해서 크기 조절"
          style={{
            position: 'absolute', top: 0, left: 0, width: 18, height: 18,
            cursor: 'nwse-resize', zIndex: 2,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            touchAction: 'none',
          }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
               style={{ opacity: 0.85, filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.6))' }}>
            <polyline points="3 9 3 3 9 3" />
            <line x1="3" y1="3" x2="10" y2="10" />
          </svg>
        </div>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
          aria-label="PIP 닫기"
          style={{
            position: 'absolute', top: 6, left: 26, width: 22, height: 22, borderRadius: '50%',
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)', padding: 0,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); scrollToTop(); }}
          aria-label="영상으로 이동"
          style={{
            position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%',
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)', padding: 0,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: 'rgba(255,255,255,0.18)' }}>
          <div style={{ height: '100%', width: `${progress * 100}%`, background: '#3D5BFF', transition: 'width 0.2s linear' }} />
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(node, host);
}

// =============================================================
// IPhoneVideoDetail — iPhone 17 전용 영상 피드형 상품 상세
// 제품 설명/탭 없이 풀스크린 세로 영상 + CTA만. 스크롤/스와이프/다른 영상 버튼으로 피드 이동.
// =============================================================

// 영상 피드 — 제품별로 그룹화 (스크롤은 같은 제품 내 영상 순환, '다른 제품' 버튼은 제품 이동)
// 각 product entry: { product, videos: [{ url, poster, title }, ...] }
const VIDEO_FEED_PRODUCTS = [
  {
    product: HEMOHIM_DETAIL,
    videos: [
      {
        url: HEMOHIM_DETAIL.videoUrl,
        poster: HEMOHIM_DETAIL.videoPoster,
        title: HEMOHIM_DETAIL.videoTitle,
      },
      {
        url: HEMOHIM_DETAIL.memberStory.videoUrl,
        poster: HEMOHIM_DETAIL.videoPoster,
        title: HEMOHIM_DETAIL.memberStory.title,
      },
    ],
  },
  {
    product: THEFAME_DETAIL,
    videos: [
      { url: '/assets/thefame-1.mp4', poster: THEFAME_DETAIL.videoPoster, title: '더페임 1' },
      { url: '/assets/thefame-2.mp4', poster: THEFAME_DETAIL.videoPoster, title: '더페임 2' },
      { url: '/assets/thefame-3.mp4', poster: THEFAME_DETAIL.videoPoster, title: '더페임 3' },
      { url: '/assets/thefame-4.mp4', poster: THEFAME_DETAIL.videoPoster, title: '더페임 4' },
      { url: '/assets/thefame-5.mp4', poster: THEFAME_DETAIL.videoPoster, title: '더페임 5' },
    ],
  },
];

function IPhoneVideoDetail({ product, onClose, onPlayVideo }) {
  // 클릭한 제품의 첫 영상 피드 위치를 시작점으로
  const initialProductIdx = Math.max(0, VIDEO_FEED_PRODUCTS.findIndex(p => p.product.id === (product && product.id)));
  const [productIdx, setProductIdx] = React.useState(initialProductIdx);
  const [videoIdx, setVideoIdx] = React.useState(0); // 현재 제품 내 영상 인덱스
  const [started, setStarted] = React.useState(false); // 섬네일 클릭 전엔 영상 정지
  const [muted, setMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0); // 재생 진행률 0..1
  const [isPaused, setIsPaused] = React.useState(true); // 재생/정지 상태
  const [host, setHost] = React.useState(null);
  const seekingRef = React.useRef(false); // 진행 바를 드래그 중인지
  const anchorRef = React.useRef(null); // 빈 div — 호스트(phone-scroll의 부모) 찾기 용
  const rootRef = React.useRef(null);
  const videoRef = React.useRef(null);

  const currentProduct = VIDEO_FEED_PRODUCTS[productIdx];
  const p = currentProduct.product;
  const item = currentProduct.videos[videoIdx];
  const totalVideos = currentProduct.videos.length;
  const fmtKR = (n) => Number(n).toLocaleString('ko-KR');

  // 마운트 시 phone-scroll의 부모(=디바이스 콘텐츠 컨테이너)를 portal host로 지정
  React.useEffect(() => {
    const a = anchorRef.current;
    if (!a) return;
    const scroller = a.closest('.phone-scroll');
    const h = scroller ? scroller.parentElement : null;
    if (h && getComputedStyle(h).position === 'static') h.style.position = 'relative';
    setHost(h);
  }, []);

  // iOS 영상 상세 진입 — body 클래스로 채팅 플로팅 z-index를 IPhoneVideoDetail 위로 올림
  React.useEffect(() => {
    document.body.classList.add('in-ios-video-detail');
    return () => document.body.classList.remove('in-ios-video-detail');
  }, []);

  // 스크롤/스와이프 = 같은 제품 내 다음/이전 영상 (제품 경계는 넘지 않음)
  const goNext = React.useCallback(() => {
    setVideoIdx(i => (i + 1) % totalVideos);
    setStarted(true);
  }, [totalVideos]);
  const goPrev = React.useCallback(() => {
    setVideoIdx(i => (i - 1 + totalVideos) % totalVideos);
    setStarted(true);
  }, [totalVideos]);

  // '다른 제품' 버튼 = 다음 제품으로 이동 (영상 인덱스 리셋)
  const goNextProduct = React.useCallback(() => {
    setProductIdx(i => (i + 1) % VIDEO_FEED_PRODUCTS.length);
    setVideoIdx(0);
    setStarted(true);
  }, []);

  // 인덱스 변경 시 영상 리셋·재생 + progress 0으로
  React.useEffect(() => {
    setProgress(0);
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    if (started) v.play().catch(() => {});
    else v.pause();
  }, [productIdx, videoIdx, started]);

  // 영상 진행률 추적 (timeupdate 이벤트) — 사용자 seek 중이거나 브라우저가 seek 중일 땐 갱신 안 함
  React.useEffect(() => {
    if (!host) return;
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (seekingRef.current) return;           // 사용자가 드래그 중
      if (v.seeking) return;                    // 브라우저가 seek 처리 중 (옛 시간으로 timeupdate 발사 방지)
      if (v.duration) setProgress(v.currentTime / v.duration);
    };
    v.addEventListener('timeupdate', onTime);
    return () => v.removeEventListener('timeupdate', onTime);
  }, [host, productIdx, videoIdx]);

  // 재생/정지 상태 sync (외부 변경에도 대응)
  React.useEffect(() => {
    if (!host) return;
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    setIsPaused(v.paused);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, [host, productIdx, videoIdx]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (!started) setStarted(true);
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  // 휠 스크롤 → 피드 이동 (디바운스) — host 발견 후 portal 마운트되면 attach
  React.useEffect(() => {
    if (!host) return;
    const el = rootRef.current;
    if (!el) return;
    let lock = false;
    const onWheel = (e) => {
      e.preventDefault();
      if (lock) return;
      if (Math.abs(e.deltaY) < 8) return;
      lock = true;
      if (e.deltaY > 0) goNext();
      else goPrev();
      setTimeout(() => { lock = false; }, 380);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [host, goNext, goPrev]);

  // 터치 스와이프 → 피드 이동
  React.useEffect(() => {
    if (!host) return;
    const el = rootRef.current;
    if (!el) return;
    let startY = 0;
    let startT = 0;
    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
      startT = Date.now();
    };
    const onTouchEnd = (e) => {
      const endY = e.changedTouches[0].clientY;
      const dt = Date.now() - startT;
      const dy = startY - endY;
      if (dt > 600) return;
      if (dy > 50) goNext();
      else if (dy < -50) goPrev();
    };
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [host, goNext, goPrev]);

  const node = (
    <div ref={rootRef} style={{
      position: 'absolute', inset: 0, zIndex: 10000,
      background: '#000', overflow: 'hidden',
      fontFamily: '"Noto Sans KR", system-ui, sans-serif',
      color: '#fff',
    }}>
      {/* 영상 — 섬네일 모드일 땐 일시정지 상태, 클릭 시 재생 */}
      <video
        ref={videoRef}
        key={productIdx + '-' + videoIdx}
        src={item.url}
        poster={item.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onClick={() => {
          // 영상 위 클릭 → 재생/정지 토글 (시작 전이면 시작)
          togglePlay();
        }}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          cursor: 'pointer', display: 'block',
        }}
      />

      {/* 영상 위 베이스 그라데이션 (텍스트 가독성용 상·하단) */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.78) 100%)',
      }} />

      {/* 상단 — 닫기 + 페이지 인디케이터 */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5,
        padding: '14px 14px 0', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={onClose} aria-label="닫기" style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.22)',
          color: '#fff', cursor: 'pointer', padding: 0,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 12px', borderRadius: 999,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.18)',
          fontSize: 11, fontWeight: 800, letterSpacing: '0.06em',
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: 999, background: '#FF3B6A',
            animation: 'pulseDot 1.6s ease-in-out infinite',
          }} />
          {videoIdx + 1} / {totalVideos}
        </div>
      </div>

      {/* 섬네일 모드 — 큰 재생 버튼 오버레이 (영상 시작 전) */}
      {!started && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 4,
        }}>
          <div style={{
            width: 76, height: 76, borderRadius: '50%',
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(255,255,255,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
        </div>
      )}

      {/* 음소거 토글 — 항상 표시 */}
      {true && (
        <button
          onClick={(e) => { e.stopPropagation(); setMuted(m => !m); }}
          aria-label={muted ? '음소거 해제' : '음소거'}
          style={{
            position: 'absolute', right: 14, top: 60, zIndex: 20,
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.28)',
            cursor: 'pointer', padding: 0,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
          }}>
          {muted ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#fff" stroke="#fff" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="#fff" stroke="#fff" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
      )}

      {/* 재생/정지 토글 — 항상 표시 (음소거 아래) */}
      <button
        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
        aria-label={isPaused ? '재생' : '정지'}
        style={{
          position: 'absolute', right: 14, top: 108, zIndex: 20,
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.28)',
          cursor: 'pointer', padding: 0,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        }}>
        {isPaused ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        )}
      </button>

      {/* 우측 사이드 — '다른 제품 보기' 버튼 (스크롤과 달리 제품 자체를 전환) */}
      <button
        onClick={goNextProduct}
        aria-label="다른 제품 보기"
        style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          zIndex: 6,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
        }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(135deg, #00B6F0 0%, #5CD3F7 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 22px rgba(0,182,240,0.45), 0 0 0 3px rgba(255,255,255,0.18)',
          animation: 'heroFloat 3.5s ease-in-out infinite',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="7 13 12 18 17 13" />
            <polyline points="7 6 12 11 17 6" />
          </svg>
        </div>
        <span style={{
          fontSize: 10.5, fontWeight: 800, color: '#fff',
          textShadow: '0 1px 3px rgba(0,0,0,0.6)', letterSpacing: '-0.01em',
        }}>다른 제품</span>
      </button>

      {/* 제품 정보 오버레이 (좌하단) — 우측 컬럼(어시스턴트·다른 제품 버튼) 폭 회피 */}
      <div style={{
        position: 'absolute', left: 16, right: 120, bottom: 96, zIndex: 5,
        pointerEvents: 'none',
      }}>
        <div style={{
          fontSize: 10.5, fontWeight: 800, color: 'rgba(255,255,255,0.78)',
          letterSpacing: '0.16em', marginBottom: 6,
          textShadow: '0 1px 3px rgba(0,0,0,0.6)',
        }}>{p.englishName}</div>
        <div style={{
          fontSize: 17, fontWeight: 900, color: '#fff',
          letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: 6,
          textShadow: '0 2px 8px rgba(0,0,0,0.55)',
          textWrap: 'balance',
        }}>{p.name}</div>
        <div style={{
          fontSize: 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.88)',
          lineHeight: 1.5, marginBottom: 10,
          textShadow: '0 1px 4px rgba(0,0,0,0.55)',
        }}>{item.title}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{
            fontSize: 21, fontWeight: 900, color: '#fff',
            fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.025em',
            textShadow: '0 2px 8px rgba(0,0,0,0.55)',
          }}>{fmtKR(p.price)}</span>
          <span style={{ fontSize: 13, fontWeight: 800, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}>원</span>
          <span style={{
            marginLeft: 6, padding: '2px 8px', borderRadius: 4,
            background: 'rgba(0,182,240,0.95)', color: '#fff',
            fontSize: 10.5, fontWeight: 800, fontVariantNumeric: 'tabular-nums',
          }}>PV {fmtKR(p.pv)}</span>
        </div>
      </div>

      {/* 재생 진행률 바 — CTA 바로 위. 터치/마우스로 탭 또는 드래그하면 그 시점부터 재생 (seek) */}
      <div
        onClick={(e) => {
          // 폴백: pointer 이벤트가 일부 환경에서 동작 안 할 때
          if (seekingRef.current) return; // 드래그였으면 무시
          e.stopPropagation();
          const v = videoRef.current;
          if (!v || !v.duration) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          v.currentTime = ratio * v.duration;
          setProgress(ratio);
          if (!started) setStarted(true);
          // 시점 이동 후 항상 재생
          v.play().catch(() => {});
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
          const v = videoRef.current;
          if (!v) return;
          if (!started) setStarted(true);
          seekingRef.current = true;
          try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {}
          const rect = e.currentTarget.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          // 드래그 시작 시점엔 시각적 progress만 — 실제 seek는 pointerUp 한 번에
          setProgress(ratio);
        }}
        onPointerMove={(e) => {
          if (!seekingRef.current) return;
          e.stopPropagation();
          const rect = e.currentTarget.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          // 드래그 중엔 시각 progress만 갱신 — 매번 seek 안 함 (큰 영상에서 디코딩 폭주 방지)
          setProgress(ratio);
        }}
        onPointerUp={(e) => {
          if (!seekingRef.current) return;
          e.stopPropagation();
          try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) {}
          const v = videoRef.current;
          if (!v) {
            seekingRef.current = false;
            return;
          }
          const rect = e.currentTarget.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          setProgress(ratio);

          const doSeekAndPlay = () => {
            try { v.currentTime = ratio * v.duration; } catch (_) {}
            // 같은 사용자 제스처 안에서 즉시 play 호출 (브라우저 정책 통과)
            v.play().catch(() => {});
            // seek 디코딩 끝나면 한 번 더 시도 (큰 영상 대비)
            const onReady = () => {
              v.play().catch(() => {});
              v.removeEventListener('seeked', onReady);
              v.removeEventListener('canplay', onReady);
            };
            v.addEventListener('seeked', onReady, { once: true });
            v.addEventListener('canplay', onReady, { once: true });
          };

          if (v.duration) {
            doSeekAndPlay();
          } else {
            // duration 아직 없으면 metadata 로드 후 seek + play
            const onLoaded = () => {
              v.removeEventListener('loadedmetadata', onLoaded);
              doSeekAndPlay();
            };
            v.addEventListener('loadedmetadata', onLoaded, { once: true });
          }

          // 잠시 후 false — onClick이 드래그 끝 시점 click을 무시할 수 있게
          setTimeout(() => { seekingRef.current = false; }, 50);
        }}
        onPointerCancel={() => { seekingRef.current = false; }}
        // 부모 컨테이너의 스와이프(다음/이전 영상)와 충돌 방지
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        style={{
          position: 'absolute', left: 0, right: 0, bottom: 76, zIndex: 8,
          height: 32, // 터치 영역 32px (시각 바 4px + 위아래 패딩 충분히)
          cursor: 'pointer',
          display: 'flex', alignItems: 'center',
          padding: '0 12px',
          touchAction: 'none', // 브라우저가 스크롤/줌으로 해석하지 않도록
          // 디버그/시각 확인용 살짝 배경 — 빈 영역 클릭도 잘 잡힘
          background: 'transparent',
        }}>
        <div style={{
          width: '100%', height: 4, borderRadius: 99,
          background: 'rgba(255,255,255,0.28)', overflow: 'hidden',
          boxShadow: '0 0 8px rgba(0,0,0,0.4)',
          pointerEvents: 'none', // 시각 바는 이벤트 받지 않고, 부모(32px touch area)가 받음
        }}>
          <div style={{
            height: '100%', width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, #00B6F0 0%, #5CD3F7 100%)',
            transition: seekingRef.current ? 'none' : 'width 0.18s linear',
            borderRadius: 99,
          }} />
        </div>
      </div>

      {/* 하단 CTA — 선물하기 / 장바구니 / 바로구매 (디바이스 화면 하단 고정) */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 7,
        padding: '12px 12px 18px',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0) 100%)',
        display: 'grid', gridTemplateColumns: '44px 1fr 1.4fr', gap: 8,
      }}>
        <button aria-label="선물하기" style={{
          padding: 0, borderRadius: 10,
          background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)',
          border: '1.5px solid #00B6F0',
          color: '#00B6F0', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
          </svg>
        </button>
        <button style={{
          padding: '12px', borderRadius: 10,
          background: 'rgba(255,255,255,0.92)', border: 'none',
          color: '#0B1F3A', fontSize: 13.5, fontWeight: 800,
          letterSpacing: '-0.01em', cursor: 'pointer',
          backdropFilter: 'blur(10px)',
        }}>장바구니</button>
        <button className="cta-pulse" style={{
          padding: '12px', borderRadius: 10,
          background: '#00B6F0', border: 'none',
          color: '#fff', fontSize: 14, fontWeight: 800,
          letterSpacing: '-0.01em', cursor: 'pointer',
          boxShadow: '0 6px 18px rgba(0,182,240,0.4)',
          ['--cta-pulse-color']: 'rgba(0,182,240,0.55)',
        }}>바로구매</button>
      </div>
    </div>
  );
  // 첫 렌더: anchor만 두고 host 찾기 / 이후: portal로만 렌더 (DOM 위치 변경 회피)
  if (!host) return <div ref={anchorRef} style={{ display: 'none' }} />;
  return ReactDOM.createPortal(node, host);
}

Object.assign(window, { AtomyProductDetail, HemohimShotDetail, HEMOHIM_DETAIL, HERBAL_SHAMPOO_DETAIL, THEFAME_DETAIL, IPhoneVideoDetail });
