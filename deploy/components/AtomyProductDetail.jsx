// AtomyProductDetail.jsx — 헤모힘 샷 상세 페이지
// 구조: 갤러리/구매 영역 → 핵심 포인트 6 → 성분 함량 → 추천 대상 → 상세 정보 → 리뷰

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
  reviewsCount: 43,

  // 넛지 (kr.atomy.com 공식)
  nudges: {
    likes: 672,
    orders: 6093,
    carts: 9613,
  },
  // 브레드크럼 (kr.atomy.com)
  breadcrumb: ['홈', '건강식품', '헤모힘', '헤모힘'],
  // 배송/브랜드 태그
  brand: '헤모힘',
  shipTags: ['무료배송', '개별배송'],
  // 상세 정보 행
  infoRows: [
    { h: '제조년월일', v: '2025-09-25 이후' },
    { h: '총 중량 및 크기', v: '2,400g / 245*200*150*2mm' },
    { h: '결제혜택', v: '애터미 하나카드 1.7% 청구할인', accent: true },
    { h: '배송정보', v: '무료 개별 배송 (합포 불가)' },
  ],

  // 갤러리 이미지 — kr.atomy.com 공식 CDN
  images: [
    'https://image.atomy.com/KR/goods/000017/org/911/250902000046911.jpg?w=1360&h=1360',
    'https://image.atomy.com/KR/goods/000017/org/203/250714000044203.jpg?w=1360&h=1360',
    'https://image.atomy.com/KR/goods/000017/org/202/250714000044202.jpg?w=1360&h=1360',
    'https://image.atomy.com/KR/goods/000017/org/201/250714000044201.jpg?w=1360&h=1360',
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

  // 성분 및 필수 고시정보 — kr.atomy.com 상품고시 원문
  notice: [
    { tit: '원재료명 및 함량(농수산물의 원산지 표시에 관한 법률에 따른 원산지 표시 포함)', cont: '정제수, 헤모힘 당귀등 혼합추출물(제2006-17호)(당귀/국내산, 천궁/국내산, 백작약/국내산), 에리스리톨(감미료), 파인애플농축액(인도네시아산), 자일리톨(감미료), 시클로덱스트린시럽, 파인애플향(천연향료), γ-시클로덱스트린, 타우린, 구연산, 구연산삼나트륨, 레몬향(천연향료), 과라나추출물분말(미국산), 효소처리스테비아(감미료), DL-사과산' },
    { tit: '제조연월일, 유통기간 또는 품질 유지기한', cont: '제조일로부터 24개월' },
    { tit: '영양성분(식품등의 표시 광고에 관한 법률에 따른 영양성분 표시대상 식품에 한함)', cont: '1회 제공량 (100 mL) 열량 45kcal 나트륨 45mg 2%, 탄수화물 16g 5%, 당류 3g 3%, 에리스리톨 5g, 지방 0g 0%, 트랜스지방 0g, 포화지방0g 0%, 콜레스테롤 0mg 0%, 단백질 1g 미만 0%\n기능성 성분 함량 (100 mL 당) : 헤모힘 당귀등 혼합추출물로서 6g (Chlorogenic acid 2.1mg, Nodakenin 6.6mg, Paeoniflorin 18mg )\n1일 섭취기준량 : 헤모힘 당귀등혼합추출물로서 20g' },
    { tit: '포장단위별 내용물의 용량(중량), 수량', cont: '{1,000 mL (100 mL X 10병)} X 2박스' },
    { tit: '유전자변형식품에 해당하는 경우의 표시', cont: '해당사항 없음' },
    { tit: '소비자안전을 위한 주의사항', cont: '제품 별도 표기 또는 제품 내 설명서 참고' },
    { tit: '생산자 및 소재지(수입품의 경우 생산자, 수입자 및 제조국)', cont: '제조원 : 퓨어플러스(주) 경상남도 함양군 수동면 수동농공길 11 연구개발 / 기술제공 : 콜마비앤에이치(주)' },
    { tit: '판매원 및 소재지', cont: '판매원 : 애터미㈜ 충청남도 공주시 백제문화로 2148-21 (웅진동)' },
    { tit: '식품의 유형', cont: '혼합음료 / 기능성표시식품' },
    { tit: '수입식품에 해당하는 경우 "수입식품안전관리특별법에 따른 수입신고를 필함"의 문구', cont: '해당사항 없음' },
    { tit: '표시광고 사전심의필', cont: '심의 필(심의번호 : 2511F082)' },
    { tit: '소비자상담 관련 전화번호', cont: '애터미㈜ 고객행복센터 : 1544-8580' },
  ],

  // 가짜 리뷰 (실제로는 백엔드에서)
  reviews: [
    { id: 1, maskedId: '467***94', rating: 5, date: '2026-06-02', like: 0,
      text: '나이가 들어 일상에서 쉽게 피로를 느끼는 생활에 살다가 애터미 헤모힘 샷을 구입하여 마셨더니 효과 만점입니다. 생활에 활력을 주고 피곤한 줄로 모르고 지내게 됩니다. 흡수가 빠르고 기력을 높이는데 좋은 샷입니다. 추천합니다.' },
    { id: 2, maskedId: '479***02', rating: 5, date: '2026-05-12', like: 0,
      text: '요즘 일이 바쁘고 피곤해서 헤모힘 샷을 마셨어요. 아침에 일어날때 부담이 없고 피로감이 덜해 기분이 좋았어요. 힘이납니다' },
    { id: 3, maskedId: '462***88', rating: 5, date: '2026-01-05', like: 0,
      text: '여행중에 휴대하다가 오실오실 춥고 몸살 걸리려고 할때 마시면 필요한 영양분을 공급해 감기나 몸살을 멈추게 합니다. 소화불량인 내가 이럴 정도이면 밥 잘 먹는 사람은 바로 효과이니 저는 부러울 뿐 입니다' },
    { id: 4, maskedId: '457***89', rating: 5, date: '2025-12-18', like: 1,
      text: '헤모힘은 한약향기가 나서 먹기에 불편하다는 분. 헤모힘샷은 향기에 부담없이 먹을 수 있어서 좋다고 하네요^^' },
    { id: 5, maskedId: '466***32', rating: 5, date: '2025-12-17', like: 1,
      text: '역시 헤모힘입니다. 요근래 너무 피곤해서 주문하고 일주일 섭취했는데 확실히 덜 피곤합니다. 꾸준히 먹으면 피로가 뭐야 하겠죠 ㅋㅋㅋ' },
    { id: 6, maskedId: '467***35', rating: 5, date: '2025-12-13', like: 4,
      text: '박스가 터져서 땅에 떨어지면서 발 다쳤어요. 빨간 박스 튼튼히 만들어 주세요' },
    { id: 7, maskedId: 'S12***01', rating: 5, date: '2025-12-06', like: 0,
      text: '헤모힘 샷 먹기 참 좋아요 선물하기에 더욱더 좋아요 감사합니다' },
    { id: 8, maskedId: '461***72', rating: 5, date: '2025-11-30', like: 2,
      text: '헤모힘 샷!! 헤모힘보다 맛이 훨씬 덜 써서 먹기가 생각보다 진짜 수월하더라구요. 마시고 나면 입안이 깔끔해지고, 뭔가 몸이 정리되는 느낌? 그런 건강한 뒷맛이 있어요. 우리 집은 가족들도 다 같이 먹고 있는데, 쓴맛이 약하니까 아이도 거부감 없이 먹는 것 같아요. 에너지 올릴 때 부담 없이 먹을 수 있는 건강한 샷이라 추천합니다.' },
    { id: 9, maskedId: '442***46', rating: 5, date: '2025-11-27', like: 5,
      text: '7년전 남편이 뇌출혈로 쓰러져 왼쪽편마비 환자입니다. 저녁식사후 갑자기 식은땀이 나고 컨디션이 안좋다해서 헤모힘샷을 줬는데 거짓말처럼 10분정도후 괜찮아졌다고 하네요. 그뒤로 남편은 컨디션 안좋을때 저한테 헤모힘샷을 달라고 합니다. 정말 대단합니다!!!' },
    { id: 10, maskedId: '431***60', rating: 5, date: '2025-11-13', like: 2,
      text: '50대 입니다. 헤모힘샷을 지인으로부터 소개받고 주문해서 먹게 되었어요. 과라나추출물이라는 천연 카페인 성분이 들어 있어서 목넘김은 좋았어요. 20대 아들에게 주었는데 맛이 나쁘지 않다고 했어요. 남편이 술 먹기전과 다음날 먹더니 숙취 해소에 도움이 된다고 하더라구요. 피로회복에도 도움이 되는 것 같아요' },
    { id: 11, maskedId: '461***05', rating: 5, date: '2025-11-08', like: 0,
      text: '회사 잔업이 많아서 피곤했는데 요거 꾸준히 먹으니깐 덜 피곤해요. 많이 피곤할때는 아침저녁 2번 먹으니깐 좋네요' },
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
// 유사 360° 뷰어 — iPhone 17에서만 드래그로 제품을 돌려보는 느낌 (rotateY + 반사광 스윕)
function Pseudo360Image({ src, alt }) {
  const wrapRef = React.useRef(null);
  const [isIphone, setIsIphone] = React.useState(false);
  const [rotY, setRotY] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [hinted, setHinted] = React.useState(false);
  const drag = React.useRef({ active: false, startX: 0, startRot: 0 });

  React.useEffect(() => {
    if (wrapRef.current && wrapRef.current.closest('.iphone-noto')) setIsIphone(true);
  }, []);

  const clamp = (v) => Math.max(-45, Math.min(45, v));
  const onDown = (e) => {
    if (!isIphone) return;
    drag.current = { active: true, startX: e.clientX, startRot: rotY };
    setDragging(true); setHinted(true);
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.current.active) return;
    setRotY(clamp(drag.current.startRot + (e.clientX - drag.current.startX) * 0.4));
  };
  const onUp = () => { drag.current.active = false; setDragging(false); };

  // 반사광 위치 — 회전각에 따라 좌우로 이동
  const shinePct = 50 + (rotY / 45) * 40;

  return (
    <div
      ref={wrapRef}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      style={{
        position: 'relative', width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: isIphone ? (dragging ? 'grabbing' : 'grab') : 'default',
        touchAction: 'none',
        perspective: 900,
      }}
    >
      <div style={{
        position: 'relative', width: '72%', height: '86%',
        transformStyle: 'preserve-3d',
        transform: `rotateY(${rotY}deg)`,
        transition: dragging ? 'none' : 'transform 0.5s cubic-bezier(.2,.7,.3,1)',
        animation: dragging ? 'none' : 'heroFloat 3.5s ease-in-out infinite',
      }}>
        <img src={src} alt={alt} draggable={false} style={{
          width: '100%', height: '100%', objectFit: 'contain', display: 'block',
          filter: 'drop-shadow(0 30px 60px rgba(232,65,65,0.25))',
          pointerEvents: 'none', userSelect: 'none',
        }} />
        {/* 반사광 스윕 */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `linear-gradient(105deg, rgba(255,255,255,0) ${shinePct - 22}%, rgba(255,255,255,0.42) ${shinePct}%, rgba(255,255,255,0) ${shinePct + 22}%)`,
          mixBlendMode: 'overlay',
          borderRadius: 12,
        }} />
      </div>
      {/* 힌트 */}
      {isIphone && !hinted && (
        <div style={{
          position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 12px', borderRadius: 999,
          background: 'rgba(11,31,58,0.72)', backdropFilter: 'blur(6px)',
          color: '#fff', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap',
          pointerEvents: 'none', zIndex: 6,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 7 4 12 9 17" /><polyline points="15 7 20 12 15 17" />
          </svg>
          드래그하여 360° 돌려보기
        </div>
      )}
    </div>
  );
}

// 연관상품 캐러셀 — 함께 보면 좋은
function RelatedProductsCarousel({ isMobile, onSelectProduct, currentId }) {
  const all = (typeof window !== 'undefined' && window.SHOP_PRODUCTS) ? window.SHOP_PRODUCTS : [];
  const items = all.filter(p => p.id !== currentId).slice(0, 10);
  if (!items.length) return null;
  const cardW = isMobile ? 150 : 200;
  const krw = (n) => (n || 0).toLocaleString('ko-KR');
  return (
    <section style={{ padding: isMobile ? '24px 0 8px' : '40px 0 16px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: isMobile ? '0 16px' : '0 36px' }}>
        <div style={{ marginBottom: isMobile ? 14 : 18 }}>
          <div style={{ fontSize: isMobile ? 17 : 22, fontWeight: 900, color: '#0B1F3A', letterSpacing: '-0.02em' }}>함께 보면 좋은 연관상품이에요</div>
          <div style={{ fontSize: isMobile ? 12 : 13, color: '#8A97AD', fontWeight: 500, marginTop: 4 }}>함께 사용하면 더 좋은 제품들을 추천드려요</div>
        </div>
      </div>
      <div className="drag-scroll-x" style={{
        display: 'flex', gap: isMobile ? 10 : 14,
        overflowX: 'auto', WebkitOverflowScrolling: 'touch',
        padding: isMobile ? '2px 16px 8px' : '2px 36px 8px',
        cursor: 'grab',
      }}>
        {items.map(p => (
          <div key={p.id} style={{ flex: `0 0 ${cardW}px`, minWidth: 0 }}>
            <button
              onClick={() => onSelectProduct && onSelectProduct(p)}
              style={{
                width: '100%', background: '#fff', border: '1px solid rgba(11,31,58,0.08)',
                borderRadius: 12, overflow: 'hidden', padding: 0, textAlign: 'left',
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: '#F5F7FA' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <span
                  role="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const img = e.currentTarget.parentElement.querySelector('img');
                    if (img && window.flyToCart) window.flyToCart(img.src, img.getBoundingClientRect());
                    if (window.showToast) window.showToast('장바구니에 담았습니다.');
                  }}
                  aria-label="장바구니 담기"
                  style={{
                    position: 'absolute', bottom: 8, right: 8,
                    width: 30, height: 30, borderRadius: 8,
                    background: 'rgba(255,255,255,0.95)', boxShadow: '0 2px 8px rgba(11,31,58,0.14)',
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" /><path d="M9 11V7a3 3 0 016 0v4" />
                  </svg>
                </span>
              </div>
              <div style={{ padding: '10px 11px 12px' }}>
                <div style={{
                  fontSize: 12.5, fontWeight: 700, color: '#0B1F3A', lineHeight: 1.35,
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  minHeight: 34, marginBottom: 6,
                }}>{p.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 15, fontWeight: 900, color: '#0B1F3A' }}>{krw(p.price)}</span>
                  <span style={{ fontSize: 11, fontWeight: 700 }}>원</span>
                </div>
                <div style={{ fontSize: 10.5, fontWeight: 800, color: '#0088B8', marginTop: 2 }}>PV {krw(p.pv)}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// 상품 도구 — 프린트 / 찜 / 공유
function ProductTools({ productId }) {
  const [wished, setWished] = React.useState(false);
  const btn = {
    width: 38, height: 38, borderRadius: 999,
    border: '1px solid rgba(11,31,58,0.12)', background: '#fff',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    padding: 0, flexShrink: 0,
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <button aria-label="프린트하기" title="프린트" style={btn} onClick={() => window.print && window.print()}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 6 2 18 2 18 9" /><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" /><rect x="6" y="14" width="12" height="8" />
        </svg>
      </button>
      <button aria-label="찜하기" aria-pressed={wished} title="찜하기"
        onClick={() => {
          setWished(w => !w);
          if (window.showToast) window.showToast(wished ? '찜을 해제했습니다.' : '찜한 상품에 추가되었습니다.');
        }}
        style={{ ...btn, borderColor: wished ? '#FF3B6A' : 'rgba(11,31,58,0.12)', background: wished ? 'rgba(255,59,106,0.08)' : '#fff' }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill={wished ? '#FF3B6A' : 'none'} stroke={wished ? '#FF3B6A' : '#4A5568'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>
      <button aria-label="공유하기" title="공유"
        onClick={() => { if (window.showToast) window.showToast('상품 링크가 복사되었습니다.'); }}
        style={btn}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </button>
    </div>
  );
}

// 메인 상세 페이지
// =============================================================
function AtomyProductDetail({ product, isMobile = false, onClose, onPlayVideo, embedded = false, heroMedia = null, onSelectProduct }) {
  const _raw = product || HEMOHIM_DETAIL;
  window.__lastOrderProduct = { id: _raw.id, name: _raw.name, price: _raw.price, image: (_raw.images && _raw.images[0]) || _raw.image };
  // 상세 전용 필드가 없는 일반 상품도 안전하게 렌더되도록 기본값 보강
  const p = React.useMemo(() => ({
    ..._raw,
    breadcrumb: (_raw.breadcrumb && _raw.breadcrumb.length) ? _raw.breadcrumb : ['홈', _raw.category || '전체상품', _raw.name],
    englishName: _raw.englishName || '',
    tagline: _raw.tagline || _raw.sub || '',
    description: _raw.description || '',
    warning: _raw.warning || '',
    reviewsCount: _raw.reviewsCount != null ? _raw.reviewsCount : (_raw.reviews || 0),
    rating: _raw.rating != null ? _raw.rating : 0,
    images: (_raw.images && _raw.images.length) ? _raw.images : (_raw.image ? [_raw.image] : []),
    highlights: _raw.highlights || [],
    points: _raw.points || [],
    recommendFor: _raw.recommendFor || [],
    specs: _raw.specs || [],
    nutrition: _raw.nutrition || [],
    notice: _raw.notice || [],
    reviews: _raw.reviews && Array.isArray(_raw.reviews) ? _raw.reviews : [],
  }), [_raw]);
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('info'); // 'info' | 'ingredients' | 'reviews'

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

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
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', height: '100%',
          padding: isMobile ? '0 14px' : '0 36px', boxSizing: 'border-box',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
        <button onClick={(e) => {
          const src = (p.images && p.images[0]) || '';
          if (window.productShrinkToList) window.productShrinkToList(e.currentTarget, src, onClose);
          else onClose && onClose();
        }} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#0B1F3A', fontSize: isMobile ? 12.5 : 13.5, fontWeight: 700,
          letterSpacing: '-0.01em', padding: '6px 0', borderRadius: 6,
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
        </div>
      </div>)}

      {/* 브레드크럼 — kr.atomy.com */}
      {p.breadcrumb && (
        <nav style={{
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
          padding: isMobile ? '10px 16px 0' : '16px 36px 0',
          display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap',
          fontSize: isMobile ? 11 : 12, color: '#8A97AD', fontWeight: 600,
        }}>
          {p.breadcrumb.map((c, i) => {
            const isLast = i === p.breadcrumb.length - 1;
            return (
            <React.Fragment key={i}>
              {i > 0 && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#C3CBD6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              )}
              {isLast ? (
                <span style={{ color: '#0B1F3A' }}>{c}</span>
              ) : (
                <button
                  onClick={() => {
                    // 홈(i=0) → 제품구매 메인 / 1·2depth → 해당 카테고리 화면
                    window.__shopNavCategory = i === 0 ? null : c;
                    onClose && onClose();
                  }}
                  style={{
                    background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                    fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit',
                    color: '#8A97AD', textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0088B8'; e.currentTarget.style.textDecoration = 'underline'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#8A97AD'; e.currentTarget.style.textDecoration = 'none'; }}
                >{c}</button>
              )}
            </React.Fragment>
            );
          })}
        </nav>
      )}

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
              <Pseudo360Image
                src={p.images[0]}
                alt={p.name}
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
            {/* 평점 · 리뷰 + 도구(프린트/찜/공유) */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
              marginBottom: 12,
            }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 15, fontWeight: 900, color: '#0B1F3A', fontVariantNumeric: 'tabular-nums' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#0B1F3A"><polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" /></svg>
                  {p.rating}
                </span>
                <span style={{ color: '#D2D8E0' }}>|</span>
                <button
                  onClick={() => { setTab('reviews'); }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                    fontSize: 13, fontWeight: 600, color: '#6B7A90', fontFamily: 'inherit',
                    textDecoration: 'underline', textUnderlineOffset: 2,
                  }}>{p.reviewsCount.toLocaleString()}건 리뷰보기</button>
              </div>
              <ProductTools productId={p.id} />
            </div>

            {/* 브랜드 + 배송 태그 */}
            {(p.brand || (p.shipTags && p.shipTags.length)) && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
                {p.brand && (
                  <span style={{
                    fontSize: 12, fontWeight: 800, color: '#fff',
                    padding: '4px 10px', borderRadius: 4, background: '#2E3338',
                  }}>{p.brand}</span>
                )}
                {(p.shipTags || []).map(t => (
                  <span key={t} style={{
                    fontSize: 11.5, fontWeight: 600, letterSpacing: '-0.01em',
                    padding: '3px 9px', borderRadius: 4,
                    color: '#8A97AD', background: '#fff',
                    border: '1px solid rgba(11,31,58,0.15)',
                  }}>{t}</span>
                ))}
              </div>
            )}

            {/* 이름 */}
            <h1 style={{
              margin: 0, fontSize: isMobile ? 23 : 30, fontWeight: 800,
              color: '#0B1F3A', letterSpacing: '-0.025em', lineHeight: 1.25,
            }}>{p.name}</h1>

            {/* 가격 + PV */}
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>
                <span style={{
                  fontSize: isMobile ? 30 : 38, fontWeight: 900, color: '#0B1F3A',
                  letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', lineHeight: 1,
                }}>{fmt(p.price)}</span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#0B1F3A' }}>원</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800, color: '#00B6F0', fontVariantNumeric: 'tabular-nums' }}>{fmt(p.pv)}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#00B6F0' }}>PV</span>
                <span aria-hidden="true" style={{
                  width: 15, height: 15, borderRadius: 999, background: '#C3CBD6', color: '#fff',
                  fontSize: 10, fontWeight: 800, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                }}>i</span>
              </span>
            </div>

            {/* 상품번호 */}
            <div style={{ marginTop: 12, fontSize: 12.5, color: '#6B7A90', fontWeight: 600 }}>
              상품번호 <span style={{ color: '#2B3A52', fontWeight: 700, marginLeft: 4 }}>{p.id}</span>
            </div>

            {/* 구분선 */}
            <div style={{ margin: '18px 0', height: 1, background: 'rgba(11,31,58,0.08)' }} />

            {/* 넛지 — 찜/주문/장바구니 */}
            {p.nudges && (
              <div style={{
                display: 'flex', flexDirection: 'column', gap: 10,
                fontSize: 13, color: '#4A5568', fontWeight: 600,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                  <span><b style={{ color: '#0B1F3A', fontWeight: 800 }}>{fmt(p.nudges.likes)}</b>명이 찜한 상품입니다.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" /></svg>
                  <span>최근 <b style={{ color: '#0B1F3A', fontWeight: 800 }}>{fmt(p.nudges.orders)}</b>건의 주문이 발생했어요.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" /><path d="M9 11V7a3 3 0 016 0v4" /></svg>
                  <span>현재 <b style={{ color: '#0B1F3A', fontWeight: 800 }}>{fmt(p.nudges.carts)}</b>명의 장바구니에 담겨 있는 제품이에요.</span>
                </div>
              </div>
            )}

            {/* 상세 정보 행 — 제조년월일/총중량/결제혜택/배송정보 */}
            {p.infoRows && p.infoRows.length > 0 && (
              <div style={{ marginTop: 18, borderTop: '1px solid rgba(11,31,58,0.08)' }}>
                {p.infoRows.map((r, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '16px 2px',
                    borderBottom: '1px solid rgba(11,31,58,0.08)',
                    fontSize: 13,
                  }}>
                    <div style={{ flex: '0 0 84px', color: '#0B1F3A', fontWeight: 700 }}>{r.h}</div>
                    <div style={{ flex: 1, color: '#6B7A90', fontWeight: 600, lineHeight: 1.5 }}>
                      {r.h === '배송정보' ? (
                        <span><span style={{ color: '#8A97AD', marginRight: 10 }}>배송비</span><b style={{ color: '#0B1F3A', fontWeight: 800 }}>무료 개별 배송</b> <span style={{ color: '#8A97AD', fontWeight: 600 }}>(합포 불가)</span></span>
                      ) : r.accent ? (
                        <span>애터미 하나카드 <b style={{ color: '#00B6F0', fontWeight: 800 }}>1.7% 청구할인</b></span>
                      ) : r.v}
                    </div>
                    {r.h === '결제혜택' && (
                      <button style={{
                        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
                        fontSize: 12.5, color: '#6B7A90', fontWeight: 600, fontFamily: 'inherit',
                        textDecoration: 'underline', textUnderlineOffset: 2, flexShrink: 0, whiteSpace: 'nowrap',
                      }}>혜택보기</button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 수량 */}
            <div style={{ marginTop: 22, fontSize: 15, fontWeight: 800, color: '#0B1F3A', marginBottom: 10 }}>수량</div>
            <div style={{
              padding: '14px 16px', borderRadius: 10, background: '#F5F7FA',
              border: '1px solid rgba(11,31,58,0.06)',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#4A5568', marginBottom: 12, lineHeight: 1.4 }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  border: '1px solid rgba(11,31,58,0.15)', borderRadius: 8, background: '#fff',
                }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} style={qtyBtnStyle()}>−</button>
                  <span style={{
                    minWidth: 40, textAlign: 'center', fontSize: 14, fontWeight: 800, color: '#0B1F3A',
                    fontVariantNumeric: 'tabular-nums',
                  }}>{qty}</span>
                  <button onClick={() => setQty(q => Math.min(99, q + 1))} style={qtyBtnStyle()}>+</button>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6 }}>
                  <span style={{ fontSize: 16, fontWeight: 900, color: '#0B1F3A', fontVariantNumeric: 'tabular-nums' }}>{fmt(totalPrice)}<span style={{ fontSize: 12, fontWeight: 700, marginLeft: 1 }}>원</span></span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#00B6F0', fontVariantNumeric: 'tabular-nums' }}>{fmt(totalPv)}<span style={{ fontSize: 11, marginLeft: 1 }}>PV</span></span>
                </div>
              </div>
            </div>

            {/* 총 상품금액 / 적립예상 PV */}
            <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(11,31,58,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 13.5, color: '#6B7A90', fontWeight: 600 }}>총 상품금액</span>
                <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ fontSize: 13, color: '#8A97AD', fontWeight: 600 }}>{qty}개</span>
                  <span style={{ color: '#D2D8E0' }}>|</span>
                  <span style={{ fontSize: 22, fontWeight: 900, color: '#0B1F3A', fontVariantNumeric: 'tabular-nums' }}>{fmt(totalPrice)}<span style={{ fontSize: 14, fontWeight: 700, marginLeft: 1 }}>원</span></span>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13.5, color: '#6B7A90', fontWeight: 600 }}>적립예상 PV</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#00B6F0', fontVariantNumeric: 'tabular-nums' }}>{fmt(totalPv)}<span style={{ fontSize: 12, marginLeft: 1 }}>PV</span></span>
              </div>
            </div>

            {/* CTA 버튼 — embedded 모드에서는 sticky bar로 이동되므로 숨김 */}
            {!embedded && (
            <div style={{
              marginTop: 18, display: 'grid',
              gridTemplateColumns: '52px 1fr 1.4fr', gap: 8,
            }}>
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
              <button style={{
                padding: '15px', borderRadius: 8,
                background: '#2E3338', border: 'none',
                color: '#fff', fontSize: 15, fontWeight: 800,
                letterSpacing: '-0.01em', cursor: 'pointer',
              }}>장바구니</button>
              <button className="cta-pulse" onClick={(e) => window.openOrderComplete && window.openOrderComplete(e.currentTarget)} style={{
                padding: '15px', borderRadius: 8,
                background: '#00B6F0',
                border: 'none', color: '#fff', fontSize: 15, fontWeight: 800,
                letterSpacing: '-0.01em', cursor: 'pointer',
                boxShadow: '0 6px 18px rgba(0,182,240,0.32)',
                ['--cta-pulse-color']: 'rgba(0,182,240,0.55)',
              }}>바로구매</button>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* 1.5. 회원 소개 영상 — 상세 정보 탭 가장 상단 (embedded이면 info 탭일 때만) */}
      {(!embedded || tab === 'info') && (<section style={{
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
                videoUrl: 'assets/member-story.mp4',
                thumb: p.images[0],
                title: '아침 루틴, 헤모힘 한 잔',
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
                src="assets/member-story.mp4"
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
                }}>아침 루틴, 헤모힘 한 잔</div>
                <div style={{
                  marginTop: 4, fontSize: 10.5, fontWeight: 600,
                  color: 'rgba(255,255,255,0.78)',
                  fontVariantNumeric: 'tabular-nums',
                }}>▶ 12.4K · ♥ 1.2K · 0:45</div>
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
                BEST 석세스클립
              </div>
              <h4 style={{
                margin: '0 0 8px', fontSize: isMobile ? 17 : 22, fontWeight: 900,
                color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.3,
                textWrap: 'balance',
              }}>
                회원이 직접 들려주는<br />
                헤모힘 샷 사용 후기
              </h4>
              <p style={{
                margin: 0, fontSize: isMobile ? 12.5 : 13.5, lineHeight: 1.7,
                color: '#4A5568', fontWeight: 500, textWrap: 'pretty',
              }}>
                매일 헤모힘 샷을 즐기는 회원의 솔직한 일상 영상.
                음소거 상태로 자동 재생되며, 영상을 클릭하면 소리와 함께
                전체화면으로 감상할 수 있어요.
              </p>

              {/* 작은 메타 정보 */}
              <div style={{
                marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8,
              }}>
                {[
                  { icon: '⏱', label: '0:45 짧은 영상' },
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
      </section>)}

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
            { k: 'info', ko: '상품정보' },
            { k: 'reviews', ko: `리뷰(${p.reviewsCount.toLocaleString()})` },
            { k: 'shipping', ko: '배송/결제' },
            { k: 'return', ko: '반품/교환' },
          ].map(t => (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              flex: isMobile ? '0 0 auto' : 1,
              padding: isMobile ? '14px 14px 12px' : '18px 10px 14px',
              background: 'transparent', border: 'none',
              borderBottom: tab === t.k ? '2.5px solid #00B6F0' : '2.5px solid transparent',
              cursor: 'pointer',
              transition: 'border-color 0.2s',
              whiteSpace: 'nowrap',
            }}>
              <div style={{
                fontSize: isMobile ? 13 : 14, fontWeight: 700,
                color: tab === t.k ? '#00B6F0' : '#6B7A90',
                letterSpacing: '-0.01em',
              }}>{t.ko}</div>
            </button>
          ))}
        </div>
      </section>

      {/* 2. 핵심 함량 그리드 */}
      {tab === 'info' && (<section style={{
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
      {tab === 'info' && (<section style={{
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

      {/* 4. 추천 대상 */}
      {tab === 'info' && (<section style={{
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
      {tab === 'info' && (<section style={{
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

      {/* 5.5 성분 및 필수 고시정보 — kr.atomy.com 상품고시 */}
      {tab === 'info' && p.notice.length > 0 && (<section style={{
        padding: isMobile ? '4px 16px 32px' : '4px 36px 50px',
        background: '#F5F7FA',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <NoticeAccordion notice={p.notice} isMobile={isMobile} />
        </div>
      </section>)}

      {/* 6. 리뷰 */}
      {tab === 'reviews' && (<section style={{
        padding: isMobile ? '28px 16px' : '44px 36px 60px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* 상품 만족도 + 평점 비율 차트 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '260px 1fr',
            gap: isMobile ? 20 : 40,
            alignItems: 'center',
            padding: isMobile ? '20px' : '28px 32px',
            background: '#F8FAFC', borderRadius: 16,
            border: '1px solid rgba(11,31,58,0.06)',
            marginBottom: isMobile ? 28 : 36,
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#6B7A90', marginBottom: 6 }}>상품 만족도</div>
              <div style={{ fontSize: isMobile ? 46 : 56, fontWeight: 900, color: '#0B1F3A', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{p.rating}</div>
              <div style={{ marginTop: 8 }}><StarRating rating={p.rating} size={18} /></div>
              <div style={{ fontSize: 11.5, color: '#8A97AD', fontWeight: 600, marginTop: 6 }}>총 {p.reviewsCount.toLocaleString()}건의 후기</div>
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: '#6B7A90', marginBottom: 14, textAlign: isMobile ? 'center' : 'left' }}>평점 비율</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: isMobile ? 10 : 16, height: 128 }}>
                {[{ s: 5, n: 37 }, { s: 4, n: 2 }, { s: 3, n: 0 }, { s: 2, n: 2 }, { s: 1, n: 2 }].map(row => {
                  const max = 37;
                  return (
                    <div key={row.s} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#0B1F3A', fontVariantNumeric: 'tabular-nums', marginBottom: 6 }}>{row.n}</span>
                      <div style={{ flex: 1, width: isMobile ? 22 : 30, borderRadius: 6, background: 'rgba(11,31,58,0.06)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
                        <div style={{ width: '100%', height: `${(row.n / max) * 100}%`, minHeight: row.n > 0 ? 4 : 0, background: row.s === 5 ? '#00B6F0' : 'rgba(0,182,240,0.4)', borderRadius: 6 }} />
                      </div>
                      <span style={{ fontSize: 11.5, fontWeight: 600, color: '#8A97AD', marginTop: 8 }}>{row.s}점</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 사진·영상 리뷰 */}
          <div style={{ marginBottom: isMobile ? 24 : 32 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: isMobile ? 15 : 16, fontWeight: 800, color: '#0B1F3A' }}>사진·영상 리뷰</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#00B6F0' }}>15건</span>
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
              {[p.images[0], p.images[1], p.images[2], p.images[0], p.images[1]].map((src, i) => (
                <div key={i} style={{
                  position: 'relative', flex: '0 0 auto',
                  width: isMobile ? 92 : 116, height: isMobile ? 92 : 116,
                  borderRadius: 10, overflow: 'hidden', cursor: 'pointer',
                  border: '1px solid rgba(11,31,58,0.06)',
                }}>
                  <img src={src} alt={`리뷰 사진 ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                       onError={(e) => { e.currentTarget.style.background = '#E8EDF3'; e.currentTarget.style.opacity = 0; }} />
                  {i === 4 && (
                    <div style={{
                      position: 'absolute', inset: 0, background: 'rgba(11,31,58,0.55)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontSize: 13, fontWeight: 800,
                    }}>+11</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 정렬 · 필터 바 */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            padding: '14px 0', borderTop: '1px solid rgba(11,31,58,0.1)', borderBottom: '1px solid rgba(11,31,58,0.1)',
            marginBottom: 20, flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0B1F3A' }}>전체 <span style={{ color: '#00B6F0' }}>{p.reviewsCount}</span>건</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '7px 12px', borderRadius: 8, background: '#fff',
                border: '1px solid rgba(11,31,58,0.15)', cursor: 'pointer', fontFamily: 'inherit',
                fontSize: 12, fontWeight: 700, color: '#6B7A90',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></svg>
                번역
              </button>
              <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                <select style={{
                  appearance: 'none', WebkitAppearance: 'none',
                  padding: '7px 30px 7px 12px', borderRadius: 8, background: '#fff',
                  border: '1px solid rgba(11,31,58,0.15)', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 12, fontWeight: 700, color: '#0B1F3A',
                }}>
                  <option>AI 추천순</option>
                  <option>평점 높은순</option>
                  <option>추천순</option>
                  <option>최신순</option>
                </select>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A97AD" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: 10, pointerEvents: 'none' }}><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <button aria-label="필터" style={{
                width: 34, height: 34, borderRadius: 8, background: '#fff',
                border: '1px solid rgba(11,31,58,0.15)', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#6B7A90',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="7" y1="12" x2="17" y2="12" /><line x1="10" y1="18" x2="14" y2="18" /></svg>
              </button>
            </div>
          </div>

          {/* 리뷰 카드 */}
          <div style={{ display: 'grid', gap: isMobile ? 0 : 0 }}>
            {p.reviews.map((r, ri) => {
              const maskedId = r.maskedId || `${400 + r.id * 17}***${(10 + r.id * 7) % 100}`;
              const helpful = r.like != null ? r.like : (12 - r.id * 2 > 0 ? 12 - r.id * 2 : r.id);
              return (
                <div key={r.id} style={{
                  padding: isMobile ? '18px 2px' : '22px 4px',
                  borderBottom: '1px solid rgba(11,31,58,0.08)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, gap: 10 }}>
                    <StarRating rating={r.rating} size={14} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, color: '#8A97AD', fontWeight: 600 }}>
                      <span style={{ color: '#4A5568', fontWeight: 700 }}>{maskedId}</span>
                      <span style={{ color: '#D2D8E0' }}>|</span>
                      <span>{r.date}</span>
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: isMobile ? 13 : 13.5, lineHeight: 1.7, color: '#2B3A52', fontWeight: 500, textWrap: 'pretty' }}>{r.text}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginTop: 12 }}>
                    <button style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit',
                      fontSize: 12, fontWeight: 600, color: '#8A97AD', textDecoration: 'underline', textUnderlineOffset: 2,
                    }}>상세리뷰 보기</button>
                    <HelpfulButton count={helpful} />
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
            <button style={{
              padding: '12px 26px', borderRadius: 999,
              background: '#fff', border: '1px solid rgba(11,31,58,0.15)',
              color: '#0B1F3A', fontSize: 13, fontWeight: 800, cursor: 'pointer',
              letterSpacing: '-0.01em',
            }}>
              후기 더보기 ({p.reviewsCount.toLocaleString()}) →
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
          <InfoAccordion isMobile={isMobile} items={[
            { title: '주문취소', defaultOpen: true, faq: true, blocks: [
              { head: '주문취소 신청', lines: [
                { t: '- 인터넷 : "쇼핑몰 > 마이애터미 > 주문/배송" 에서 신청' },
                { t: '(애터미 회원)', i: true },
                { t: '- 상담원 : 고객행복센터(1544-8580)번으로 신청' },
                { t: '(애터미 회원/간편구매 사용자)', i: true },
                { t: '- 주문완료/입금대기 중 상태에만 주문취소가 가능합니다.' },
                { t: '- 상품의 부분취소는 불가능합니다.' },
                { t: '(카드결제 시 주문취소 처리 결과는 카드사의 사정에 의해 다소 차이가 발생할 수 있습니다.)', i: true },
              ] },
            ] },
            { title: '배송 가이드', faq: true, blocks: [
              { head: '배송기간', lines: [
                { t: '- 국내배송 : 결제일로부터 1 ~ 3일 소요됩니다.' },
                { t: '배송지역에 따라 다소 지연될 수 있습니다.', i: true },
                { t: '- 주말 / 공휴일은 배송기간에서 제외됩니다.' },
                { t: '* 도서, 산간 등 지역에 따라 배송이 다소 지연될 수 있으며 자연재해, 불가항력(일시품절, 수취인불명, 우편번호 오입력)등 사유로 배송이 지연되는 경우도 있음을 양해해 주시길 바랍니다.', i: true },
              ] },
              { head: '배송가능 지역', lines: [
                { t: '- 전국' },
              ] },
              { head: '배송비', lines: [
                { t: '- 총 결제금액이 5만원 미만인 경우 : 배송비 2,900원 (도서산간지역(제주도포함)의 경우 착불비가 상이할 수 있습니다.)' },
                { t: '- 총 결제금액이 5만원 이상인 경우 : 무료배송' },
                { t: '(합포 불가 개별 배송 상품 금액 제외)', i: true },
                { t: '- 배송지를 본인이 소속된 교육센터로 지정하는 경우 : 무료배송' },
                { t: '* 개별 배송 되는 상품은 무료 배송으로 애터미 홈페이지 쇼핑몰 상품 상세에서 확인 가능 합니다.', i: true },
                { t: '* 센터로 배송되는 경우 다른 상품과 함께 포장되어 배송되므로 방문수령 전까지 분실에 유의하시기 바랍니다.', i: true },
              ] },
              { head: '배송조회', lines: [
                { t: '- 회원 : "쇼핑몰 > 마이애터미 > 배송조회" 에서 확인 가능합니다.' },
                { t: '- 간편구매 사용자 : 간편구매 URL로 접근 시 확인 가능합니다.' },
              ] },
              { head: '배송지 변경', lines: [
                { t: '- 상품포장 단계 이전' },
                { t: '* 애터미 회원 : "쇼핑몰 > 마이애터미 > 주문/배송" 에서 변경. 애터미㈜ 고객행복센터(1544-8580)으로 신청', i: true },
                { t: '* 간편구매 사용자 : 애터미㈜ 고객행복센터(1544-8580) 신청', i: true },
                { t: '- 상품포장 단계 이후 : 변경불가' },
              ] },
            ] },
            { title: '결제', faq: true, blocks: [
              { head: '결제수단', lines: [
                { t: '- 실시간 계좌이체, 가상계좌, 무통장 입금 / 신용카드, ARS결제(1644-8732), ARS결제 + 무통장 입금입니다.' },
                { t: '* 간편구매의 경우 신용카드 결제만 가능합니다.', i: true },
              ] },
            ] },
          ]} />
        </div>
      </section>)}

      {/* 8. 반품/교환 */}
      {tab === 'return' && (<section style={{
        padding: isMobile ? '24px 16px' : '40px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <InfoAccordion isMobile={isMobile} items={[
            { title: '반품/교환요청', defaultOpen: true, faq: true, blocks: [
              { head: '반품/교환 요청', lines: [
                { t: '- 애터미 쇼핑몰, 고객행복센터(1544-8580)' },
              ] },
              { head: '반품/교환이 불가능한 경우', lines: [
                { t: '- 재고를 과다하게 보유한 경우' },
                { t: '- 판매원의 책임 있는 사유로 상품이 멸실 또는 훼손된 경우' },
                { t: '- 상품 택(TAG)제거 또는 상품 개봉으로 인한 상품 가치가 훼손된 경우' },
                { t: '- 신선식품(냉장/냉동 포함)을 단순변심/주문착오로 교환/반품 신청하는 경우' },
                { t: '- 고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우' },
                { t: '- 시간 경과에 따라 상품 등의 가치가 현저히 감소하여 재판매가 불가능한 경우' },
                { t: '- 복제가 가능한 상품 등의 포장을 훼손한 경우' },
                { t: '- 고객님이 이상 여부를 확인한 후 설치가 완료된 상품의 경우' },
                { t: '(가전, 가구, 헬스기구 등)', i: true },
                { t: '- 고객님의 요청에 따라 개별적으로 주문제작 되는 상품으로 재판매가' },
                { t: '불가능한 경우 (이니셜 표시 상품, 사이즈 맞춤 상품 등)', i: true },
                { t: '- 구매한 상품의 구성품이 누락된 경우' },
                { t: '(화장품 세트, 의류부착 악세서리, 가전제품 부속품, 사은품 등)', i: true },
                { t: '- 기타, 상품의 교환, 환불 및 상품 결함 등의 보상은 소비자분쟁해결기준 (공정거래위원회 고시)에 의함' },
              ] },
              { head: '신청기간', lines: [
                { t: '- 소비자는 14일, 등록된 판매원은 출고 후 3개월 이내' },
              ] },
            ] },
            { title: '반품/교환완료', faq: true, blocks: [
              { head: '교환', lines: [
                { t: '- 선회수 후 교환' },
              ] },
              { head: '반품', lines: [
                { t: '- 반품 신청 시 상품 회수 후 환불' },
              ] },
              { head: '환불', lines: [
                { t: '- 현금 구매 시 청약 철회 후 1~3일 이내에 회원의 등록 계좌로 송금하여 드립니다.' },
                { t: '- 카드구매 시 청약 철회 접수 후 1 ~ 3일 이내에 구매인의 카드사로 승인 취소하여 드립니다.' },
                { t: '- 부분 반품 시 카드 부분 승인 취소가 불가 한 경우, 반품하지 않은 상품은 다시 카드 결제 후 기존 결제 금액에 대해 승인 취소됩니다.' },
                { t: '(ex 홍길동님의 원주문 - 30만원, 부분반품금액 -10만원 : 카드결제 금액은 20만원 입니다.)', i: true },
                { t: '- 기간경과에 따른 수수료 공제' },
                { t: '· 공급일로부터 1개월 이내 청약철회 등을 한 경우에는 대금 전액 환불', i: true },
                { t: '· 공급일로부터 1개월 경과 후 2개월이내에 청약철회등을 한 경우에는 대금의 5% 공제한 금액', i: true },
                { t: '· 공급일로부터 2개월 경과 후 3개월이내에 청약철회등을 한 경우에는 대금의 7% 공제한 금액', i: true },
              ] },
              { lines: [
                { t: '반품 금액 환불 시, 기 지급된 수당 및 기 인정 직급도 재조정 됩니다.' },
              ] },
            ] },
          ]} />
        </div>
      </section>)}

      {/* 연관상품 — 함께 보면 좋은 */}
      <RelatedProductsCarousel isMobile={isMobile} onSelectProduct={onSelectProduct} currentId={p.id} />
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

// 리뷰 "도움돼요" 추천 버튼
function HelpfulButton({ count }) {
  const [on, setOn] = React.useState(false);
  return (
    <button
      onClick={() => setOn(v => !v)}
      aria-pressed={on}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 12px', borderRadius: 999, cursor: 'pointer', fontFamily: 'inherit',
        fontSize: 12, fontWeight: 700,
        background: on ? 'rgba(0,182,240,0.1)' : '#fff',
        border: `1px solid ${on ? '#00B6F0' : 'rgba(11,31,58,0.15)'}`,
        color: on ? '#0088B8' : '#6B7A90',
        transition: 'all 0.15s',
      }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill={on ? '#0088B8' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
      도움돼요 <span style={{ fontVariantNumeric: 'tabular-nums' }}>{count + (on ? 1 : 0)}</span>
    </button>
  );
}

// 성분 및 필수 고시정보 — 단일 접이식 (tit/cont 목록)
function NoticeAccordion({ notice, isMobile }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: '1px solid rgba(11,31,58,0.14)', borderBottom: '1px solid rgba(11,31,58,0.14)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 12, padding: isMobile ? '18px 4px' : '22px 6px',
          background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
        }}>
        <span style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: '#0B1F3A', letterSpacing: '-0.01em' }}>성분 및 필수 고시정보</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A97AD" strokeWidth="2.2"
             strokeLinecap="round" strokeLinejoin="round"
             style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{ padding: isMobile ? '2px 4px 24px' : '2px 6px 28px' }}>
          <dl style={{ margin: 0, display: 'grid', gap: 0 }}>
            {notice.map((n, i) => (
              <div key={i} style={{
                padding: isMobile ? '13px 0' : '15px 0',
                borderTop: i === 0 ? 'none' : '1px solid rgba(11,31,58,0.06)',
                display: 'grid', gap: 5,
              }}>
                <dt style={{ fontSize: isMobile ? 12 : 12.5, fontWeight: 700, color: '#8A97AD', lineHeight: 1.5, textWrap: 'pretty' }}>{n.tit}</dt>
                <dd style={{ margin: 0, fontSize: isMobile ? 12.5 : 13.5, fontWeight: 500, color: '#2B3A52', lineHeight: 1.7, textWrap: 'pretty', whiteSpace: 'pre-line' }}>{n.cont}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}

// 아코디언 — 배송/결제 · 반품/교환 탭 공용
function InfoAccordion({ items, isMobile }) {
  const [open, setOpen] = React.useState(() => items.map(it => !!it.defaultOpen));
  const faqBtnStyle = {
    background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit',
    fontSize: 13, color: '#6B7A90', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2,
  };
  return (
    <div style={{ borderTop: '1px solid rgba(11,31,58,0.14)' }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom: '1px solid rgba(11,31,58,0.14)' }}>
          <button
            onClick={() => setOpen(o => o.map((v, j) => (j === i ? !v : v)))}
            aria-expanded={open[i]}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: 12, padding: isMobile ? '18px 4px' : '22px 6px',
              background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
            }}>
            <span style={{ fontSize: isMobile ? 15 : 16, fontWeight: 700, color: '#0B1F3A', letterSpacing: '-0.01em' }}>{it.title}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A97AD" strokeWidth="2.2"
                 strokeLinecap="round" strokeLinejoin="round"
                 style={{ flexShrink: 0, transform: open[i] ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {open[i] && (
            <div style={{ padding: isMobile ? '0 4px 26px' : '0 6px 30px' }}>
              {it.faq && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 18 }}>
                  <button style={faqBtnStyle}>FAQ 보기</button>
                </div>
              )}
              {it.blocks.map((b, k) => (
                <div key={k} style={{ marginBottom: k < it.blocks.length - 1 ? 24 : 0 }}>
                  {b.head && (
                    <div style={{ fontSize: isMobile ? 13.5 : 14.5, fontWeight: 800, color: '#00B6F0', marginBottom: 9, letterSpacing: '-0.01em' }}>{b.head}</div>
                  )}
                  <div style={{ display: 'grid', gap: 6 }}>
                    {b.lines.map((ln, m) => (
                      <div key={m} style={{
                        fontSize: isMobile ? 12.5 : 13.5, color: '#4A5568', fontWeight: 500, lineHeight: 1.7,
                        paddingLeft: ln.i ? 14 : 0, textWrap: 'pretty',
                      }}>{ln.t}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// =============================================================
// 헤모힘 샷 전용 — 상단 영상 + 스크롤 시트 + PIP
// =============================================================
const HEMOHIM_VIDEO_URL = 'https://www.genspark.ai/api/files/s/mb60FN8q';
const HEMOHIM_VIDEO_POSTER = 'https://image.atomy.com/KR/goods/000017/org/203/250714000044203.jpg?w=1360&h=1360';

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
  window.__lastOrderProduct = { id: p.id, name: p.name, price: p.price, image: (p.images && p.images[0]) || p.image };
  const heroVideoRef = React.useRef(null);
  const pipVideoRef = React.useRef(null);
  const heroWrapRef = React.useRef(null);
  const rootRef = React.useRef(null);
  const [pipVisible, setPipVisible] = React.useState(false);
  const [ctaSticky, setCtaSticky] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  // 모바일: 영상이 화면의 대부분을 차지하고, 시트(섬네일 포함)는 '지금 구매하기' 버튼 근처까지 내려옴
  const heroHeight = isMobile ? 680 : 420;

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

  // 데스크톱 — 인라인 CTA가 스크롤로 사라지면 하단 스티키 바 노출
  React.useEffect(() => {
    if (isMobile) return;
    const scroller = rootRef.current && rootRef.current.closest('.phone-scroll');
    if (!scroller) return;
    const onScroll = () => setCtaSticky(scroller.scrollTop > 360);
    onScroll();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => scroller.removeEventListener('scroll', onScroll);
  }, [isMobile]);

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
        videoUrl: HEMOHIM_VIDEO_URL,
        thumb: HEMOHIM_VIDEO_POSTER,
        title: '아침 루틴, 헤모힘 한 잔',
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
        <button onClick={(e) => {
          const src = (p.images && p.images[0]) || '';
          if (window.productShrinkToList) window.productShrinkToList(e.currentTarget, src, onClose);
          else onClose && onClose();
        }} style={{
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
          src={HEMOHIM_VIDEO_URL}
          poster={HEMOHIM_VIDEO_POSTER}
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
          onSelectProduct={onSelectProduct}
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
        onSelectProduct={onSelectProduct}
        heroMedia={(
          <div ref={heroWrapRef} style={{
            position: 'absolute', inset: 0,
            background: '#0B1320',
          }}>
            <video
              ref={heroVideoRef}
              src={HEMOHIM_VIDEO_URL}
              poster={HEMOHIM_VIDEO_POSTER}
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
        embedded={false}
      />
      )}

      {/* 모바일 — 피드형 다음 제품 섹션 (스크롤 시 다른 제품 영상으로 자연스럽게 연결) */}
      {isMobile && (
        <NextProductFeed
          products={NEXT_PRODUCTS_FEED}
          onSelectProduct={onSelectProduct}
        />
      )}

      {/* 고정 CTA 바 — 모바일은 항상, 데스크톱은 인라인 CTA가 스크롤로 사라지면 노출 */}
      {isMobile && <StickyCtaPortal isMobile={isMobile} rootRef={rootRef} visible={true} />}
      {!isMobile && <StickyCtaPortal isMobile={isMobile} rootRef={rootRef} visible={ctaSticky} />}
      {!isMobile && (
        <PipPortal pipVisible={pipVisible} muted={muted} progress={progress} isMobile={isMobile} pipVideoRef={pipVideoRef} openFullscreen={openFullscreen} scrollToTop={scrollToTop} rootRef={rootRef} />
      )}
    </div>
  );
}

function StickyCtaPortal({ isMobile, rootRef, visible = true }) {
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
      transform: visible ? 'translateY(0)' : 'translateY(110%)',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'transform 0.3s cubic-bezier(.2,.7,.3,1), opacity 0.3s ease',
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
      <button className="cta-pulse" onClick={(e) => window.openOrderComplete && window.openOrderComplete(e.currentTarget)} style={{
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
  const clips = (typeof window !== 'undefined' && Array.isArray(window.SHORTS))
    ? window.SHORTS.slice(0, 9)
    : [];
  if (clips.length === 0) return null;
  return (
    <div style={{ background: '#fff', padding: '28px 16px 32px', borderTop: '1px solid rgba(11,31,58,0.08)' }}>
      {/* 섹션 헤더 */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 16 }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: '#0B1F3A', letterSpacing: '-0.01em' }}>관심 상품 알아보기</span>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: '#8A97AD' }}>석세스클립</span>
      </div>

      {/* 석세스클립 영상 섬네일 — 가로 스크롤 (자동재생 없음) */}
      <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6, WebkitOverflowScrolling: 'touch' }}>
        {clips.map((s) => (
          <div
            key={s.id}
            style={{
              flex: '0 0 auto', width: 128, cursor: 'pointer',
            }}
          >
            <div style={{
              position: 'relative', width: '100%', aspectRatio: '9 / 16',
              borderRadius: 12, overflow: 'hidden', background: '#E8EDF3',
              border: '1px solid rgba(11,31,58,0.06)',
            }}>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => { e.currentTarget.style.opacity = 0; }}
              />
              {/* 재생 아이콘 오버레이 */}
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)',
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" style={{ marginLeft: 2 }}>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* 재생시간 */}
              <span style={{
                position: 'absolute', right: 6, bottom: 6,
                padding: '2px 6px', borderRadius: 5, background: 'rgba(0,0,0,0.6)',
                color: '#fff', fontSize: 10, fontWeight: 700, fontVariantNumeric: 'tabular-nums',
              }}>{s.duration}</span>
            </div>
            {/* 제목 + 조회수 */}
            <div style={{
              fontSize: 12, fontWeight: 700, color: '#0B1F3A', lineHeight: 1.35, marginTop: 8,
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textWrap: 'pretty',
            }}>{s.title}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#8A97AD', marginTop: 3 }}>조회 {s.views}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipPortal({ pipVisible, muted, progress, isMobile, pipVideoRef, openFullscreen, scrollToTop, rootRef }) {
  const [host, setHost] = React.useState(null);
  const [pos, setPos] = React.useState(null); // {right, bottom}
  const [ratio, setRatio] = React.useState(9 / 16); // w/h — 기본 세로형 (현 demo 영상)
  const dragRef = React.useRef({ dragging: false, moved: false, startX: 0, startY: 0, startRight: 0, startBottom: 0 });

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
  const pipWidth = portrait
    ? (isMobile ? 96 : 150)
    : (isMobile ? 160 : 240);
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
    if (!wasMove) openFullscreen();
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
        opacity: pipVisible ? 1 : 0,
        transform: pipVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.92)',
        pointerEvents: pipVisible ? 'auto' : 'none',
        transition: dragRef.current.dragging ? 'opacity 0.28s ease' : 'opacity 0.28s ease, transform 0.32s cubic-bezier(.2,.7,.3,1)',
        touchAction: 'none', cursor: 'grab',
      }}>
      <div style={{
        position: 'relative',
        aspectRatio: `${ratio}`,
        borderRadius: 14, overflow: 'hidden',
        background: '#000', boxShadow: '0 12px 32px rgba(0,0,0,0.35), 0 2px 6px rgba(0,0,0,0.25)',
        border: '1px solid rgba(255,255,255,0.15)',
      }}>
        <video ref={pipVideoRef} src={HEMOHIM_VIDEO_URL} poster={HEMOHIM_VIDEO_POSTER}
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
        <button onClick={(e) => { e.stopPropagation(); scrollToTop(); }} aria-label="영상으로 이동" style={{
          position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%',
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
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

Object.assign(window, { AtomyProductDetail, HemohimShotDetail, HEMOHIM_DETAIL, HERBAL_SHAMPOO_DETAIL });
