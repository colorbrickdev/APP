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
  reviewsCount: 41,

  // 넛지 (kr.atomy.com 공식)
  nudges: {
    likes: 606,
    orders: 10151,
    carts: 14930,
  },

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

// 메인 상세 페이지
// =============================================================
function AtomyProductDetail({ product, isMobile = false, onClose, onPlayVideo, embedded = false, heroMedia = null }) {
  const _raw = product || HEMOHIM_DETAIL;
  // 상세 전용 필드가 없는 일반 상품도 안전하게 렌더되도록 기본값 보강
  const p = React.useMemo(() => ({
    ..._raw,
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
