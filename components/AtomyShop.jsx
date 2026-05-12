// AtomyShop.jsx — 제품구매 메뉴 메인 페이지
// 구조: 히어로 배너 → 카테고리 칩 → 베스트(헤모힘 샷 강조) → 신제품 → 슬림바디 → 가격대별 추천

const HEMOHIM_SHOT_IMG = 'https://image.atomy.com/KR/goods/000017/org/911/250902000046911.jpg?w=480&h=480';

// =============================================================
// 제품 데이터 — atomy.com/main에서 가져온 실제 상품
// =============================================================
// 제품 데이터 — kr.atomy.com/category에서 가져온 실제 상품 목록 (이미지/이름/가격/PV/리뷰)
const SHOP_PRODUCTS = [
  // ★ 강조 — 헤모힘 샷 (id: 000017) ─ 상세페이지 연결 (히어로/네비용 유지)
  {
    id: '000017', name: '애터미 헤모힘 샷 (100ml*10병, 2box)',
    sub: '지친 몸을 깨우는 샷, 애터미 헤모힘 샷!',
    price: 59800, pv: 30000,
    image: HEMOHIM_SHOT_IMG,
    rating: 4.6, reviews: 41,
    badges: ['BEST', '신제품'],
    category: '건강식품',
    accent: '#E84141',
    detail: true,
  },
  // — kr.atomy.com/category 노출 순서 그대로 —
  { id: '000510', name: '애터미 칫솔 (1팩/8개입)',
    sub: '8개입 · 부드러운 솔', price: 9600, pv: 4800,
    image: 'https://image.atomy.com/KR/goods/000510/c60c6d4f-f293-4273-b77d-9c7e20bf47a5.jpg?w=480&h=480',
    rating: 4.7, reviews: 660, badges: ['BEST'], category: '헤어&바디' },
  { id: '000484', name: '애터미 클렌징 티슈 *1ea(20매)',
    sub: '20매 · 데일리 클렌징', price: 2000, pv: 700,
    image: 'https://image.atomy.com/KR/goods/000484/1c2ecdde-a667-4be4-9dbe-566b2fd6377a.jpg?w=480&h=480',
    rating: 4.6, reviews: 264, category: '뷰티' },
  { id: '001846', name: '애터미 화장지 4D(35M x 15롤) x 4팩',
    sub: '4D 엠보싱 · 15롤 x 4팩', price: 42800, pv: 5600,
    image: 'https://image.atomy.com/KR/goods/001846/ef8e5882-df4e-429e-a5fe-86931ddb140c.jpg?w=480&h=480',
    rating: 4.8, reviews: 1045, badges: ['BEST'], category: '리빙&홈데코' },
  { id: '000872', name: '애터미 물티슈(70매 x 8개)',
    sub: '70매 x 8개입', price: 17800, pv: 3300,
    image: 'https://image.atomy.com/KR/goods/000872/7594449c-af64-4bf6-aa11-46570f4caac9.jpg?w=480&h=480',
    rating: 4.7, reviews: 689, badges: ['BEST', '무료배송'], category: '리빙&홈데코' },
  { id: '000939', name: '애터미 자일리톨 껌 (1ea)',
    sub: '자일리톨 100% · 1개입', price: 2800, pv: 300,
    image: 'https://image.atomy.com/KR/goods/000939/b64acaf5-c271-45a6-b4e9-6c7388ef8c94.jpg?w=480&h=480',
    rating: 4.5, reviews: 258, category: '식품' },
  { id: '000877', name: '애터미 미용티슈(250매 x 4개)',
    sub: '250매 x 4개입', price: 6400, pv: 900,
    image: 'https://image.atomy.com/KR/goods/000877/eff14707-7a64-4581-98c0-4dd09a01e1e5.jpg?w=480&h=480',
    rating: 4.6, reviews: 302, category: '리빙&홈데코' },
  { id: '000878', name: '애터미 키친타월(180매 x 6개)',
    sub: '180매 x 6개입', price: 5900, pv: 800,
    image: 'https://image.atomy.com/KR/goods/000878/1082887a-296a-4f2e-88cc-3ae910cd8be5.jpg?w=480&h=480',
    rating: 4.5, reviews: 244, category: '리빙&홈데코' },
  { id: '002314', name: '애터미 주방세제 레드사과향',
    sub: '주방세제 · 레드사과향', price: 7800, pv: 2800,
    image: 'https://image.atomy.com/KR/goods/002314/org/811/251021000047811.jpg?w=480&h=480',
    rating: 4.6, reviews: 496, category: '리빙&홈데코' },
  { id: '000873', name: '애터미 물티슈 휴대용(20매 x 3개)',
    sub: '20매 x 3개 · 휴대용', price: 2000, pv: 500,
    image: 'https://image.atomy.com/KR/goods/000873/aa82f586-3057-450c-b0bd-893ce91c22da.jpg?w=480&h=480',
    rating: 4.5, reviews: 147, category: '리빙&홈데코' },
  { id: '000505', name: '애터미 치약 플러스 200g*1set(5ea)',
    sub: '200g x 5개입', price: 16800, pv: 3000,
    image: 'https://image.atomy.com/KR/goods/000505/ebd42f7f-f930-41f7-967f-a24840e1b837.jpg?w=480&h=480',
    rating: 4.8, reviews: 586, badges: ['BEST'], category: '헤어&바디' },
  { id: '000276', name: '앱솔루트 에센스 선 *1ea (40ml)',
    sub: '40ml · 톤업 선케어', price: 10800, pv: 3800,
    image: 'https://image.atomy.com/KR/goods/000276/6219cf73-3282-4294-bf45-c8976ca11b41.jpg?w=480&h=480',
    rating: 4.6, reviews: 142, category: '뷰티' },
  { id: '000284', name: '애터미 선크림 베이지 *4ea',
    sub: '60ml x 4개입', price: 30600, pv: 10000,
    image: 'https://image.atomy.com/KR/goods/000284/d535011b-c986-41b4-a057-7d2ae9aa4174_236x236.png?w=480&h=480',
    rating: 4.7, reviews: 95, badges: ['무료배송'], category: '뷰티' },
  { id: '000280', name: '애터미 선크림 베이지 *1ea (60ml)',
    sub: '60ml · 데일리 선크림', price: 8000, pv: 2500,
    image: 'https://image.atomy.com/KR/goods/000280/550b4ab4-4b94-4dc5-a340-c81578dff149_236x236.png?w=480&h=480',
    rating: 4.6, reviews: 177, category: '뷰티' },
  { id: '000164', name: '애터미 친생유산균 (120포, 4개월분)',
    sub: '120포 · 4개월분', price: 56800, pv: 21500,
    image: 'https://image.atomy.com/KR/goods/000164/62babc72-656f-41a5-8654-2ae0dae2b4dd.jpg?w=480&h=480',
    rating: 4.8, reviews: 386, badges: ['무료배송'], category: '건강식품' },
  { id: '002301', name: '애터미 액상세탁 리필 (2.1kg)',
    sub: '액상세탁 · 2.1kg 리필', price: 8900, pv: 3100,
    image: 'https://image.atomy.com/KR/goods/002301/d25dab45-deab-40a8-bfac-e39c8dc35bf2.jpg?w=480&h=480',
    rating: 4.5, reviews: 111, category: '리빙&홈데코' },
  { id: '000300', name: '애터미 이브닝케어 폼클렌저 *1ea(150ml)',
    sub: '150ml · 폼클렌저', price: 8800, pv: 3000,
    image: 'https://image.atomy.com/KR/goods/000300/6cf76d2d-ebb4-4d67-b56a-9e0eb0b34cd0.jpg?w=480&h=480',
    rating: 4.6, reviews: 177, category: '뷰티' },
  { id: '000129', name: '애터미 파인자임 (30포, 1개월분)',
    sub: '30포 · 1개월분', price: 17800, pv: 7500,
    image: 'https://image.atomy.com/KR/goods/000129/773f540b-50a9-4bc6-a670-73b1d963522b.jpg?w=480&h=480',
    rating: 4.6, reviews: 156, category: '건강식품' },
  { id: '000645', name: '애터미 바디로션 *1ea (300ml)',
    sub: '300ml · 데일리 바디', price: 8500, pv: 2500,
    image: 'https://image.atomy.com/KR/goods/000645/b0045bbb-9a64-482b-b754-26e2bdd6a061.jpg?w=480&h=480',
    rating: 4.7, reviews: 230, category: '헤어&바디' },
  { id: '000111', name: '애터미 알래스카 이-오메가3 (180캡슐)',
    sub: '180캡슐 · 3개월분', price: 21200, pv: 7000,
    image: 'https://image.atomy.com/KR/goods/000111/7652b4a8-35b5-4a89-b091-4f3a41bc98f0.jpg?w=480&h=480',
    rating: 4.6, reviews: 101, category: '건강식품' },
  { id: '002302', name: '애터미 섬유린스 리필 (2.1kg)',
    sub: '섬유린스 · 2.1kg 리필', price: 7900, pv: 2400,
    image: 'https://image.atomy.com/KR/goods/002302/3b17c0cc-f365-4bd6-b131-6c8b654ffba9.jpg?w=480&h=480',
    rating: 4.5, reviews: 102, category: '리빙&홈데코' },
  { id: '000185', name: '애터미 터마신MSM (128정, 32일분)',
    sub: '128정 · 32일분', price: 39800, pv: 16000,
    image: 'https://image.atomy.com/KR/goods/000185/e5f1d8de-e013-48fb-8d95-c8705f06ac3d.jpg?w=480&h=480',
    rating: 4.7, reviews: 181, badges: ['무료배송'], category: '건강식품' },
  { id: '000979', name: '애터미 해양심층수 500ml (20ea)',
    sub: '500ml x 20병', price: 12800, pv: 3000,
    image: 'https://image.atomy.com/KR/goods/000979/a4a647b2-f1ef-4876-bb2d-19e24b764eec.jpg?w=480&h=480',
    rating: 4.7, reviews: 199, badges: ['무료배송'], category: '식품' },
  { id: '001959', name: '애터미 간 고등어 (1kg)',
    sub: '1kg · 간편 조리', price: 34800, pv: 1600,
    image: 'https://image.atomy.com/KR/goods/001959/org/957/251219000048957.jpg?w=480&h=480',
    rating: 4.6, reviews: 242, badges: ['무료배송'], category: '식품' },
  { id: '000565', name: '애터미 더페임 트리트먼트 토너 (180ml)',
    sub: '180ml · 부드러운 결', price: 25800, pv: 13000,
    image: 'https://image.atomy.com/KR/goods/000565/org/753/260315000050753.png?w=480&h=480',
    rating: 4.6, reviews: 49, badges: ['신제품'], category: '뷰티' },
  { id: '000570', name: '애터미 스킨케어 시스템 더페임 *1set',
    sub: '토너·로션·세럼·아이크림·크림 5종 1세트', price: 99800, pv: 42000,
    image: 'https://image.atomy.com/KR/goods/000570/org/787/260315000050787.jpg?w=480&h=480',
    rating: 4.7, reviews: 32, badges: ['신제품'], category: '뷰티',
    detail: true },
  { id: '004041', name: '애터미 알티지 오메가3 (180캡슐)',
    sub: '180캡슐 · 3개월분', price: 34800, pv: 14000,
    image: 'https://image.atomy.com/KR/goods/004041/a0c152bd-0da4-4701-b41b-be57be3048c9.jpg?w=480&h=480',
    rating: 4.7, reviews: 199, badges: ['무료배송'], category: '건강식품' },
  { id: '000991', name: '애터미 다시마간장 (1,000ml)',
    sub: '1L · 다시마 간장', price: 9500, pv: 1500,
    image: 'https://image.atomy.com/KR/goods/000991/ba8ea94f-171f-40db-81dc-9b29e7f051d8.jpg?w=480&h=480',
    rating: 4.6, reviews: 144, category: '식품' },
  { id: '000182', name: '애터미 징코앤낫토 (60정, 2개월분)',
    sub: '60정 · 2개월분', price: 25800, pv: 9500,
    image: 'https://image.atomy.com/KR/goods/000182/e388c5c2-8b18-4bcf-b30d-8a809408adbf.jpg?w=480&h=480',
    rating: 4.5, reviews: 94, category: '건강식품' },
  { id: '000523', name: '애터미 치약 플러스 50g*1set',
    sub: '50g · 휴대용', price: 4600, pv: 1000,
    image: 'https://image.atomy.com/KR/goods/000523/e872165c-8daf-4cb7-98f7-799ef479f523.jpg?w=480&h=480',
    rating: 4.6, reviews: 90, category: '헤어&바디' },
  { id: '001883', name: '애터미 무흠집 수세미(4개)',
    sub: '4개입 · 무흠집', price: 3800, pv: 900,
    image: 'https://image.atomy.com/KR/goods/001883/b26814b9-261b-4b4b-a3a1-a0a1f838200a.jpg?w=480&h=480',
    rating: 4.5, reviews: 56, category: '리빙&홈데코' },
  { id: '000121', name: '애터미 바이탈컬러 비타민C (90포)',
    sub: '90포 · 3개월분', price: 20800, pv: 7500,
    image: 'https://image.atomy.com/KR/goods/000121/3447f772-e540-4618-8706-ea6d454265aa.jpg?w=480&h=480',
    rating: 4.7, reviews: 165, category: '건강식품' },
  { id: '004030', name: '애터미 바이탈 메가비타민C 2000 (90포)',
    sub: '90포 · 3개월분', price: 29000, pv: 13000,
    image: 'https://image.atomy.com/KR/goods/004030/img1_480.jpg',
    rating: 4.7, reviews: 142, category: '건강식품' },
  { id: '000174', name: '애터미 홍경천 밀크씨슬 (120정)',
    sub: '120정 · 2개월분', price: 31800, pv: 11500,
    image: 'https://image.atomy.com/KR/goods/000174/img1_480.jpg',
    rating: 4.7, reviews: 126, badges: ['무료배송'], category: '건강식품' },
  { id: '004007', name: '애터미 아이헬스 루아잔틴 (90캡슐)',
    sub: '90캡슐 · 3개월분', price: 38800, pv: 19500,
    image: 'https://image.atomy.com/KR/goods/004007/img1_480.jpg',
    rating: 4.7, reviews: 159, badges: ['무료배송'], category: '건강식품' },
  { id: '000227', name: '애터미 앱솔루트 셀랙티브 앰플 (40ml)',
    sub: '40ml · 집중 케어', price: 39600, pv: 20000,
    image: 'https://image.atomy.com/KR/goods/000227/img1_480.jpg',
    rating: 4.7, reviews: 152, badges: ['무료배송'], category: '뷰티' },
  { id: '000574', name: '애터미 허브데이 팬티라이너(20개 x 4팩)',
    sub: '20개 x 4팩', price: 12900, pv: 3400,
    image: 'https://image.atomy.com/KR/goods/000574/img1_480.jpg',
    rating: 4.6, reviews: 131, category: '헤어&바디' },
  { id: '000506', name: '애터미 치약 플러스 200g*4set(20ea)',
    sub: '200g x 20개입', price: 64200, pv: 12000,
    image: 'https://image.atomy.com/KR/goods/000506/img1_480.jpg',
    rating: 4.8, reviews: 87, badges: ['무료배송'], category: '헤어&바디' },
  { id: '004008', name: '애터미 이너콜라겐 (14병, 14일분)',
    sub: '14병 · 14일분', price: 34800, pv: 17000,
    image: 'https://image.atomy.com/KR/goods/004008/img1_480.jpg',
    rating: 4.7, reviews: 116, badges: ['무료배송'], category: '건강식품' },
  { id: '000567', name: '애터미 더페임 밸런싱 로션 (125ml)',
    sub: '125ml · 산뜻한 마무리', price: 24800, pv: 12500,
    image: 'https://image.atomy.com/KR/goods/000567/org/757/260315000050757.png?w=480&h=480',
    rating: 4.6, reviews: 42, badges: ['신제품'], category: '뷰티' },
  { id: '000304', name: '애터미 이브닝케어 폼클렌저 *4ea',
    sub: '150ml x 4개입', price: 33600, pv: 12000,
    image: 'https://image.atomy.com/KR/goods/000304/img1_480.jpg',
    rating: 4.7, reviews: 95, badges: ['무료배송'], category: '뷰티' },
  { id: '004001', name: '애터미 트리액티브 칼마디 (180정)',
    sub: '180정 · 2개월분', price: 22800, pv: 11500,
    image: 'https://image.atomy.com/KR/goods/004001/img1_480.jpg',
    rating: 4.6, reviews: 84, category: '건강식품' },
];

// 카테고리
const SHOP_CATEGORIES = [
  { key: 'all',     label: '전체' },
  { key: 'best',    label: '베스트' },
  { key: 'new',     label: '신제품' },
  { key: 'health',  label: '건강식품',   match: '건강식품' },
  { key: 'beauty',  label: '뷰티',        match: '뷰티' },
  { key: 'body',    label: '헤어&바디',   match: '헤어&바디' },
  { key: 'food',    label: '식품',        match: '식품' },
  { key: 'living',  label: '리빙&홈데코', match: '리빙&홈데코' },
];

// =============================================================
// 가격 포맷
// =============================================================
const fmtKRW = (n) => n.toLocaleString('ko-KR');

// =============================================================
// 제품 카드
// =============================================================
// 아이폰17 변형에서 일부 썸네일을 숏폼 영상으로 대체하기 위한 풀
const _PRODUCT_THUMB_VIDEOS = [
  'https://www.genspark.ai/api/files/s/mb60FN8q',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
];

function ProductCard({ product, isMobile = false, onSelect, large = false }) {
  const p = product;
  const [hover, setHover] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);
  const rootRef = React.useRef(null);
  const [isIphone, setIsIphone] = React.useState(false);

  React.useEffect(() => {
    if (rootRef.current && rootRef.current.closest('.iphone-noto')) {
      setIsIphone(true);
    }
  }, []);

  // id 해시 기반 — 아이폰17에서만 ~1/3 카드를 숏폼 영상으로
  const _idNum = parseInt(String(p.id).replace(/\D/g, ''), 10) || 0;
  const showVideo = isIphone && (_idNum % 3 === 1);
  const _videoSrc = _PRODUCT_THUMB_VIDEOS[_idNum % _PRODUCT_THUMB_VIDEOS.length];

  return (
    <button
      ref={rootRef}
      onClick={() => onSelect && onSelect(p)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: '#fff',
        border: '1px solid rgba(11,31,58,0.06)',
        borderRadius: 14,
        padding: 0,
        textAlign: 'left',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hover ? '0 14px 36px rgba(11,31,58,0.12)' : '0 2px 6px rgba(11,31,58,0.04)',
        borderColor: hover ? 'rgba(0,182,240,0.3)' : 'rgba(11,31,58,0.06)',
        fontFamily: 'inherit',
        width: '100%',
      }}
    >
      {/* 이미지 영역 */}
      <div style={{
        position: 'relative', width: '100%',
        aspectRatio: '1/1',
        background: '#F5F7FA',
        overflow: 'hidden',
      }}>
        {showVideo ? (
          <video
            src={_videoSrc}
            poster={p.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
            }}
          />
        ) : (
          <img
            src={p.image}
            alt={p.name}
            onError={(e) => {
              const el = e.currentTarget;
              if (el.dataset.fallback) return;
              el.dataset.fallback = '1';
              // 폴백 — 제품명 첫 글자로 SVG 플레이스홀더 생성
              const initial = (p.name || '').replace(/^애터미\s*/, '').slice(0, 1) || 'A';
              const hue = (parseInt((p.id || '0').replace(/\D/g, '').slice(-3) || '0', 10) * 47) % 360;
              const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${hue},65%,92%)'/><stop offset='1' stop-color='hsl(${hue},55%,82%)'/></linearGradient></defs><rect width='200' height='200' fill='url(%23g)'/><text x='100' y='118' text-anchor='middle' font-family='Pretendard,sans-serif' font-size='80' font-weight='800' fill='hsl(${hue},45%,40%)'>${initial}</text></svg>`;
              el.src = 'data:image/svg+xml;utf8,' + svg.replace(/#/g, '%23');
            }}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
            }}
          />
        )}

        {/* 숏폼 표시 — 좌하단 */}
        {showVideo && (
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '4px 8px 4px 7px', borderRadius: 999,
            background: 'rgba(11,31,58,0.78)', backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '-0.01em',
            boxShadow: '0 2px 8px rgba(11,31,58,0.25)',
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
            숏폼
          </div>
        )}

        {/* 좌상단 뱃지들 */}
        {p.badges && p.badges.length > 0 && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {p.badges.map(b => (
              <span key={b} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '3px 8px', borderRadius: 4,
                background: b === 'BEST' ? '#FF3B6A'
                  : b === '신제품' ? '#00B6F0'
                  : b === '프로모션' ? '#FF8A3D'
                  : 'rgba(11,31,58,0.85)',
                color: '#fff', fontSize: 9.5, fontWeight: 800, letterSpacing: '-0.01em',
                width: 'fit-content',
              }}>{b}</span>
            ))}
          </div>
        )}

        {/* 장바구니 담기 — 우상단 (라운드 사각형, 애터미 시안) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const card = e.currentTarget.parentElement && e.currentTarget.parentElement.closest('button');
            const img = card && card.querySelector('img');
            if (img && window.flyToCart) {
              window.flyToCart(img.src, img.getBoundingClientRect());
            }
            setCartCount(c => {
              const next = c + 1;
              if (window.showToast) window.showToast((window.translate ? window.translate('toast.cart_added', { n: next }) : `장바구니에 ${next}개 담았습니다.`));
              return next;
            });
          }}
          aria-label="장바구니 담기"
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 32, height: 32, borderRadius: 8, border: 'none',
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)',
            cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(11,31,58,0.14)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="#00B6F0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
            <path d="M9 11V7a3 3 0 016 0v4" />
          </svg>
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -6,
              minWidth: 18, height: 18, padding: '0 5px',
              borderRadius: 999, border: '1.5px solid #fff',
              background: '#00B6F0', color: '#fff',
              fontSize: 10, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
              boxShadow: '0 2px 6px rgba(0,182,240,0.4)',
            }}>{cartCount}</span>
          )}
        </button>

        {/* 상세보기 가능 표시 — 헤모힘 샷처럼 detail이 있는 제품 */}
        {p.detail && (
          <div style={{
            position: 'absolute', bottom: 10, right: 10,
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '4px 9px', borderRadius: 999,
            background: 'rgba(0,182,240,0.95)',
            color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '-0.01em',
            boxShadow: '0 4px 10px rgba(0,182,240,0.35)',
          }}>
            상세보기 ›
          </div>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div style={{ padding: isMobile ? '12px 12px 14px' : '14px 16px 16px' }}>
        {/* 카테고리 */}
        <div style={{
          fontSize: 10, fontWeight: 700, color: '#8A97AD',
          letterSpacing: '0.04em', marginBottom: 4,
        }}>{p.category}</div>

        {/* 이름 */}
        <div style={{
          fontSize: isMobile ? 13 : 14, fontWeight: 800,
          color: '#0B1F3A', letterSpacing: '-0.01em', lineHeight: 1.35,
          marginBottom: 4,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{p.name}</div>

        {/* 서브 카피 */}
        {p.sub && (
          <div style={{
            fontSize: 11, color: '#6B7A90', fontWeight: 500,
            marginBottom: 8, lineHeight: 1.4,
            display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>{p.sub}</div>
        )}

        {/* 가격 */}
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 4,
          marginBottom: 6,
        }}>
          <span style={{
            fontSize: isMobile ? 16 : 18, fontWeight: 900,
            color: '#0B1F3A', letterSpacing: '-0.02em',
            fontVariantNumeric: 'tabular-nums',
          }}>{fmtKRW(p.price)}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#0B1F3A' }}>원</span>
        </div>

        {/* PV */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '2px 7px', borderRadius: 4,
          background: 'rgba(0,182,240,0.08)',
          color: '#0088B8', fontSize: 10.5, fontWeight: 800,
          fontVariantNumeric: 'tabular-nums',
          marginBottom: 8,
        }}>
          PV {fmtKRW(p.pv)}
          {p.originPv && p.originPv !== p.pv && (
            <span style={{
              marginLeft: 3, color: '#FF3B6A', fontSize: 10, fontWeight: 800,
            }}>→ {fmtKRW(p.originPv)}</span>
          )}
        </div>

        {/* 별점 + 리뷰 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 11, fontWeight: 700, color: '#4A5568',
          fontVariantNumeric: 'tabular-nums',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFB800">
            <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
          </svg>
          <span>{p.rating}</span>
          <span style={{ color: '#8A97AD', fontWeight: 500 }}>({p.reviews.toLocaleString()})</span>
        </div>
      </div>
    </button>
  );
}

// =============================================================
// 메인 페이지
// =============================================================

function AtomyShop({ isMobile = false, shopVariant = 'default', onSelectProduct = () => {} }) {
  // 변형 라우팅 — TikTok / Magazine / AI 큐레이션
  if (shopVariant === 'tiktok' && typeof window.AtomyShopTikTok === 'function') {
    return <window.AtomyShopTikTok isMobile={isMobile} onSelectProduct={onSelectProduct} />;
  }
  if (shopVariant === 'magazine' && typeof window.AtomyShopMagazine === 'function') {
    return <window.AtomyShopMagazine isMobile={isMobile} onSelectProduct={onSelectProduct} />;
  }
  if (shopVariant === 'ai' && typeof window.AtomyShopAI === 'function') {
    return <window.AtomyShopAI isMobile={isMobile} onSelectProduct={onSelectProduct} />;
  }
  return <AtomyShopDefault isMobile={isMobile} onSelectProduct={onSelectProduct} />;
}

function AtomyShopDefault({ isMobile = false, onSelectProduct = () => {} }) {
  const { t } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k };
  const [category, setCategory] = React.useState(null); // null = 메인 / 'all' | 'health' | ... = 카테고리 화면
  const [sortKey, setSortKey] = React.useState('popular');
  const [viewMode, setViewMode] = React.useState('grid'); // grid | list

  // 카테고리 화면용 필터링 + 정렬
  const categoryProducts = React.useMemo(() => {
    if (!category) return [];
    let list = category === 'all'
      ? SHOP_PRODUCTS
      : SHOP_PRODUCTS.filter(p => {
          const c = CATEGORY_ICONS.find(c => c.key === category);
          return c && p.category === (c.match || c.label);
        });
    list = [...list];
    if (sortKey === 'popular') list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    else if (sortKey === 'low')  list.sort((a, b) => a.price - b.price);
    else if (sortKey === 'high') list.sort((a, b) => b.price - a.price);
    else if (sortKey === 'new')  list.sort((a, b) => (b.badges?.includes('신제품') ? 1 : 0) - (a.badges?.includes('신제품') ? 1 : 0));
    return list;
  }, [category, sortKey]);

  const promoProducts = SHOP_PRODUCTS.filter(p => (p.badges || []).includes('프로모션'));
  const bestProducts = SHOP_PRODUCTS.filter(p => (p.badges || []).includes('BEST')).slice(0, 4);

  // ====== 카테고리 화면 ======
  if (category) {
    const catLabel = category === 'all' ? '전체상품' : (CATEGORY_ICONS.find(c => c.key === category)?.label || '카테고리');
    return (
      <div style={{
        fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
        background: '#fff', color: '#0B1F3A', minHeight: '100%',
      }}>
        {/* 헤더 — 카테고리명 + 뒤로가기 */}
        <header style={{
          display: 'flex', alignItems: 'center',
          padding: isMobile ? '14px 16px' : '20px 36px',
          borderBottom: '1px solid rgba(11,31,58,0.06)',
          background: '#fff', position: 'sticky', top: 0, zIndex: 5,
        }}>
          <button
            onClick={() => setCategory(null)}
            aria-label="뒤로"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 6, display: 'flex', alignItems: 'center',
              color: '#1A1A1A',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <CategorySwitcher
            currentKey={category}
            currentLabel={catLabel}
            isMobile={isMobile}
            onSelect={(key) => setCategory(key)}
          />
          <div style={{ width: 34 }} />
        </header>

        {/* 정렬/뷰/필터 바 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '12px 16px 10px' : '18px 36px 14px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          <div style={{
            fontSize: isMobile ? 12.5 : 13.5, fontWeight: 700, color: '#0B1F3A',
            fontVariantNumeric: 'tabular-nums',
          }}>
            전체 <span style={{ color: '#0B1F3A' }}>{categoryProducts.length}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 6 : 8 }}>
            {/* 정렬 */}
            <div style={{ position: 'relative' }}>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                style={{
                  appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                  padding: isMobile ? '7px 26px 7px 11px' : '8px 30px 8px 14px',
                  border: '1px solid rgba(11,31,58,0.15)', borderRadius: 6,
                  background: '#fff', color: '#0B1F3A',
                  fontSize: isMobile ? 11.5 : 12.5, fontWeight: 600,
                  fontFamily: 'inherit', cursor: 'pointer', letterSpacing: '-0.01em',
                }}
              >
                <option value="popular">판매 인기순</option>
                <option value="new">신제품순</option>
                <option value="low">낮은 가격순</option>
                <option value="high">높은 가격순</option>
              </select>
              <svg
                width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                style={{ position: 'absolute', right: isMobile ? 9 : 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#4A5568' }}
              ><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            {/* 보기 형식 토글 */}
            <button
              onClick={() => setViewMode(m => m === 'grid' ? 'list' : 'grid')}
              aria-label="보기 형식"
              style={{
                width: isMobile ? 32 : 36, height: isMobile ? 32 : 36,
                border: '1px solid rgba(11,31,58,0.15)', borderRadius: 6,
                background: '#fff', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: '#0B1F3A',
              }}
            >
              {viewMode === 'grid' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="3" rx="1" /><rect x="3" y="10.5" width="18" height="3" rx="1" /><rect x="3" y="17" width="18" height="3" rx="1" /></svg>
              )}
            </button>
            {/* 필터 */}
            <button
              aria-label="필터"
              style={{
                padding: isMobile ? '7px 11px' : '8px 14px',
                border: '1px solid rgba(11,31,58,0.15)', borderRadius: 6,
                background: '#fff', cursor: 'pointer',
                fontSize: isMobile ? 11.5 : 12.5, fontWeight: 600,
                color: '#0B1F3A',
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontFamily: 'inherit',
              }}
            >
              필터
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="3 4 21 4 14 13 14 20 10 20 10 13" /></svg>
            </button>
          </div>
        </div>

        {/* 제품 리스트 */}
        <section style={{
          padding: isMobile ? '6px 16px 40px' : '8px 36px 60px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          {categoryProducts.length === 0 ? (
            <div style={{
              padding: '60px 24px', textAlign: 'center',
              background: '#F5F7FA', borderRadius: 14,
              color: '#8A97AD', fontSize: 13, fontWeight: 600,
            }}>이 카테고리의 제품이 아직 없어요</div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: viewMode === 'list'
                ? '1fr'
                : (isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)'),
              gap: isMobile ? 10 : 14,
            }}>
              {categoryProducts.map(p => (
                <ProductCard key={p.id} product={p} isMobile={isMobile} onSelect={onSelectProduct} />
              ))}
            </div>
          )}
        </section>

        <ShopFooter isMobile={isMobile} />
      </div>
    );
  }

  // ====== 메인 화면 ======
  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F7FA',
      color: '#0B1F3A',
    }}>
      {/* 1. 히어로 — 헤모힘 샷 강조 */}
      <ShopHero isMobile={isMobile} onSelectProduct={onSelectProduct} />

      {/* 1.5 카테고리 아이콘 — kr.atomy.com 메인 스타일 */}
      <ShopCategoryIcons isMobile={isMobile} onSelectCategory={(key) => setCategory(key)} />

      {/* AI 큐레이션 — 데스크탑/모바일 동일 구성, 사이즈에 맞춰 그리드 자동 적응 */}
      <ShopAICurationDesktop
        isMobile={isMobile}
        allProducts={SHOP_PRODUCTS}
        bestProducts={bestProducts}
        promoProducts={promoProducts}
        onSelectProduct={onSelectProduct}
        onSeeAll={() => setCategory('all')}
      />
    </div>
  );
}

// =============================================================
// 카테고리 스위처 — 헤더 카테고리명을 클릭해서 다른 카테고리로 이동
// =============================================================
function CategorySwitcher({ currentKey, currentLabel, isMobile, onSelect }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div ref={ref} style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: isMobile ? 16 : 19, fontWeight: 800, letterSpacing: '-0.02em',
          color: '#0B1F3A', fontFamily: 'inherit', padding: '4px 8px',
        }}
        aria-expanded={open}
      >
        {currentLabel}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          minWidth: 200, background: '#fff', borderRadius: 12,
          boxShadow: '0 12px 32px rgba(11,31,58,0.18), 0 0 0 1px rgba(11,31,58,0.08)',
          padding: 6, zIndex: 20,
          maxHeight: '60vh', overflowY: 'auto',
        }}>
          {CATEGORY_ICONS.map(cat => {
            const active = cat.key === currentKey;
            return (
              <button
                key={cat.key}
                onClick={() => { onSelect(cat.key); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', padding: '10px 12px', borderRadius: 8,
                  background: active ? '#F0F4FA' : 'transparent',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  fontSize: 13.5, fontWeight: active ? 800 : 600,
                  color: '#0B1F3A', fontFamily: 'inherit',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#F5F7FA'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
              >
                <img src={cat.img} alt="" style={{ width: 24, height: 24, objectFit: 'contain', flexShrink: 0 }} />
                {cat.label}
                {active && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// =============================================================
// 데스크탑용 AI 큐레이션 섹션
// =============================================================
function ShopAICurationDesktop({ isMobile = false, allProducts, bestProducts, promoProducts, onSelectProduct, onSeeAll }) {
  const all = allProducts;
  const isNewList = all.filter(p => p.badges?.includes('신제품'));
  const best = bestProducts.length ? bestProducts : all.filter(p => p.badges?.includes('BEST'));

  const ROWS = [
    {
      kind: 'today',
      kicker: '오늘의 추천 · FOR YOU',
      title: '오늘의 컨디션을 위한 한 가지',
      reason: '전날 활동 패턴과 비슷한 회원의 선호를 반영했어요',
      badge: 'AI 큐레이션', tone: '#00B6F0',
      items: [best[0], all.find(p => p.id === '000570'), best[1], best[3], all[5], all[6]].filter(Boolean).slice(0, 6),
    },
    {
      kind: 'similar',
      kicker: '비슷한 회원이 좋아한',
      title: '지금 가장 많이 담고 있는 조합',
      reason: 'CHAIRMAN 등급 회원 1,248명의 최근 30일 구매 데이터',
      badge: '회원 인사이트', tone: '#FFC83D',
      items: Array.from(new Map([...best, ...isNewList].map(p => [p.id, p])).values()).slice(0, 6),
    },
    {
      kind: 'rebuy',
      kicker: '재구매 추천',
      title: '곧 떨어질 제품을 미리 챙기세요',
      reason: '평균 32일 사용 기준 · 마지막 구매로부터 28일 경과',
      badge: '리오더', tone: '#16A34A',
      items: [best[3], best[1], best[0], all[2], all[4], all[8]].filter(Boolean).slice(0, 6),
    },
    {
      kind: 'chairman',
      kicker: 'CHAIRMAN PICK',
      title: `박한길 회장이 추천하는 ${best.slice(0, 5).length}가지`,
      reason: '창립자가 직접 큐레이션한 일상 루틴 패키지',
      badge: "✦ EDITOR'S CHOICE", tone: '#0B1F3A',
      items: best.slice(0, 5),
    },
    {
      kind: 'trend',
      kicker: '지금 뜨는',
      title: '24시간 안에 가장 많이 본 제품',
      reason: '실시간 조회 데이터 기반 · 매시간 업데이트',
      badge: '🔥 LIVE', tone: '#FF3B6A',
      items: Array.from(new Map([...isNewList, ...promoProducts, ...all.slice(10, 16)].map(p => [p.id, p])).values()).slice(0, 6),
    },
    {
      kind: 'budget',
      kicker: '가성비 픽',
      title: '2만원 이하로 시작하는 케어',
      reason: '기존 구매 패턴과 가격대를 분석',
      badge: 'VALUE', tone: '#7B8597',
      items: all.filter(p => p.price <= 20000).slice(0, 6),
    },
  ];

  return (
    <div style={{ width: '100%', background: '#F5F7FA' }}>
      {/* AI 헤더 배너 */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: isMobile ? '24px 16px 22px' : '36px 36px 28px', boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3760 100%)',
        color: '#fff', position: 'relative', overflow: 'hidden',
        borderRadius: 0,
      }}>
        <div style={{
          position: 'absolute', top: -80, right: -60,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,182,240,0.25) 0%, transparent 70%)',
        }} />
        <div style={{
          fontSize: isMobile ? 10 : 11, fontWeight: 800, letterSpacing: '0.22em',
          color: '#00B6F0', marginBottom: isMobile ? 8 : 10,
        }}>✦ ATOMY AI · POWERED BY YOUR DATA</div>
        <div style={{
          fontSize: isMobile ? 19 : 28, fontWeight: 800, letterSpacing: '-0.02em',
          lineHeight: 1.25, marginBottom: isMobile ? 6 : 8,
        }}>애터미에 오신 것을 환영해요,<br />오늘은 이 제품들이 인기예요</div>
        <div style={{
          fontSize: isMobile ? 11 : 12.5, fontWeight: 500, color: 'rgba(255,255,255,0.75)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: '#16A34A', boxShadow: '0 0 0 3px rgba(22,163,74,0.25)',
          }} />
          실시간 추천 · 방금 업데이트
        </div>
      </div>

      {/* 큐레이션 행 */}
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', padding: isMobile ? '4px 16px 24px' : '12px 36px 40px', boxSizing: 'border-box' }}>
        {ROWS.map((row) => (
          <DesktopCurationRow
            key={row.kind}
            row={row}
            isMobile={isMobile}
            isChairman={row.kind === 'chairman'}
            onSelect={onSelectProduct}
          />
        ))}

        {/* 전체상품 보기 CTA */}
        <div style={{ textAlign: 'center', margin: '20px 0 8px' }}>
          <button onClick={onSeeAll} style={{
            padding: '14px 36px', borderRadius: 999, background: '#fff',
            border: '1px solid rgba(11,31,58,0.15)', color: '#0B1F3A',
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
            fontFamily: 'inherit', letterSpacing: '-0.01em',
          }}>전체상품 보기 →</button>
        </div>

        {/* AI 디스크레이머 */}
        <div style={{ padding: '24px 16px 8px', textAlign: 'center' }}>
          <div style={{
            fontSize: 11.5, fontWeight: 700, letterSpacing: '0.18em',
            color: '#7B8597', marginBottom: 10,
          }}>✦ ATOMY AI</div>
          <div style={{
            fontSize: 12.5, color: 'rgba(11,31,58,0.7)', lineHeight: 1.7,
            maxWidth: 640, margin: '0 auto',
          }}>
            ATOMY AI 추천은 회원님의 구매 이력, 등급, 선호 카테고리,<br />
            같은 등급 회원의 인기 제품을 종합해 만들어집니다.
          </div>
        </div>
      </div>

      <ShopFooter isMobile={isMobile} />
    </div>
  );
}

function DesktopCurationRow({ row, isMobile = false, isChairman, onSelect }) {
  const INSIGHT = {
    today: ['🌥 오늘 흐림', '☕ 카페인 줄이기', '🌙 잠 부족', '💧 수분 부족'],
    similar: ['👑 89% 구매', '👥 1,248명', '⭐ 4.9평점', '🔁 재구매 67%'],
    rebuy: ['📅 28일 경과', '⏰ 곧 떨어짐', '🔁 평균 32일'],
    chairman: ['✦ 매일 사용', '✦ 50년 노하우', '✦ 추천 1순위', '✦ 회장님 픽', '✦ 데일리 루틴'],
    trend: ['🔥 +312% 조회', '📈 어제 1위', '👀 24h 핫'],
    budget: ['💰 -28% 가성비', '🎁 2만원 이하', '✓ 첫 구매 추천'],
  };
  const insights = INSIGHT[row.kind] || [];

  return (
    <section style={{
      padding: isMobile ? '20px 0 6px' : '28px 0 8px',
      borderBottom: '1px solid rgba(11,31,58,0.06)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: isMobile ? 12 : 16, gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: isMobile ? 6 : 8, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '4px 10px', borderRadius: 5,
              background: row.tone, color: '#fff',
              fontSize: isMobile ? 9.5 : 10.5, fontWeight: 800, letterSpacing: '-0.01em',
            }}>{row.badge}</span>
            <div style={{
              fontSize: isMobile ? 10 : 11.5, fontWeight: 800, letterSpacing: '0.14em',
              color: row.tone, textTransform: 'uppercase',
            }}>{row.kicker}</div>
          </div>
          <div style={{
            fontSize: isMobile ? 17 : 22, fontWeight: 800, letterSpacing: '-0.02em',
            lineHeight: 1.25, marginBottom: 6, color: '#0B1F3A',
          }}>{row.title}</div>
          <div style={{
            fontSize: isMobile ? 11 : 12.5, fontWeight: 500, color: 'rgba(11,31,58,0.6)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(11,31,58,0.5)" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            {row.reason}
          </div>
        </div>
      </div>

      {isMobile ? (
        // 모바일 — 가로 스크롤 (카드 폭 고정)
        <div className="drag-scroll-x" style={{
          display: 'flex', gap: 10, overflowX: 'auto', overflowY: 'hidden',
          padding: '2px 0 8px', marginLeft: -16, marginRight: -16, paddingLeft: 16, paddingRight: 16,
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
        }}>
          {row.items.map((p) => {
            if (!p) return null;
            const insight = insights[(parseInt(String(p.id).replace(/\D/g, ''), 10) || 0) % (insights.length || 1)];
            return (
              <div key={`${row.kind}-${p.id}`} style={{
                flex: '0 0 46%', minWidth: 0, scrollSnapAlign: 'start',
              }}>
                <DesktopAICard product={p} insight={insight} onSelect={() => onSelect(p)} />
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isChairman ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)',
          gap: 14,
        }}>
          {row.items.map((p) => {
            if (!p) return null;
            const insight = insights[(parseInt(String(p.id).replace(/\D/g, ''), 10) || 0) % (insights.length || 1)];
            return (
              <DesktopAICard key={`${row.kind}-${p.id}`} product={p} insight={insight} onSelect={() => onSelect(p)} />
            );
          })}
        </div>
      )}
    </section>
  );
}

function DesktopAICard({ product, insight, onSelect }) {
  const p = product;
  return (
    <button
      onClick={onSelect}
      style={{
        background: '#fff',
        border: '1px solid rgba(11,31,58,0.06)',
        borderRadius: 14,
        padding: 0, textAlign: 'left',
        cursor: 'pointer', overflow: 'hidden',
        fontFamily: 'inherit',
        transition: 'transform 0.2s, box-shadow 0.2s',
        boxShadow: '0 2px 6px rgba(11,31,58,0.04)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(11,31,58,0.10)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(11,31,58,0.04)';
      }}
    >
      <div style={{
        position: 'relative', width: '100%',
        aspectRatio: '1/1', background: '#F5F7FA', overflow: 'hidden',
      }}>
        <img src={p.image} alt={p.name} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        }} />
        {insight && (
          <div style={{
            position: 'absolute', top: 8, left: 8,
            padding: '4px 9px', borderRadius: 999,
            background: 'rgba(11,31,58,0.85)', backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 10, fontWeight: 700,
            letterSpacing: '-0.01em',
          }}>{insight}</div>
        )}
      </div>
      <div style={{ padding: '10px 12px 12px' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: '#7B8597',
          marginBottom: 4, letterSpacing: '-0.01em',
        }}>{p.category}</div>
        <div style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.35, color: '#0B1F3A',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', minHeight: 36, marginBottom: 6,
        }}>{p.name}</div>
        <div style={{
          fontSize: 14, fontWeight: 800, letterSpacing: '-0.02em',
          color: '#0B1F3A',
        }}>{p.price.toLocaleString()}<span style={{ fontSize: 10.5, fontWeight: 600, color: '#7B8597', marginLeft: 2 }}>원</span></div>
        <div style={{
          fontSize: 10.5, fontWeight: 700, color: '#7B8597',
          letterSpacing: '0.04em', marginTop: 2,
        }}>★ {p.rating} · {(p.reviews || 0).toLocaleString()}</div>
      </div>
    </button>
  );
}

// =============================================================
// 히어로 — 다중 프로모션 배너 캐러셀 (kr.atomy.com 스타일)
// =============================================================
const HERO_SLIDES = [
  {
    id: '000017',
    bg: 'linear-gradient(135deg, #FFD1CB 0%, #FF9A8B 100%)',
    chips: ['NEW', '신제품 출시'],
    chipColor: '#C73120',
    title: ['지친 몸을 깨우는', '애터미 헤모힘 샷'],
    sub: '청량한 파인애플 맛 액상 100ml 에너지 샷',
  },
  {
    id: '000164',
    bg: 'linear-gradient(135deg, #DCEEFF 0%, #93C7FF 100%)',
    chips: ['BEST', '무료배송'],
    chipColor: '#1F5FAB',
    title: ['장 건강을 챙기는', '친생유산균 4개월분'],
    sub: '120포 대용량 · 매일 한 포 간편 섭취',
  },
  {
    id: '001846',
    bg: 'linear-gradient(135deg, #FFE5F0 0%, #FFA8C8 100%)',
    chips: ['10% 쿠폰', '사은품 증정'],
    chipColor: '#C2185B',
    title: ['하루 한 번 손이 가는', '애터미 화장지 4D'],
    sub: '4D 엠보싱 · 35M × 15롤 × 4팩 대용량',
  },
  {
    id: '000276',
    bg: 'linear-gradient(135deg, #FFF8DC 0%, #F7C873 100%)',
    chips: ['프로모션', '~30% 할인'],
    chipColor: '#A6711B',
    title: ['톤업과 자외선 차단을 동시에', '앱솔루트 에센스 선'],
    sub: '40ml · 산뜻한 마무리감, 데일리 선케어',
  },
  {
    id: '000523',
    bg: 'linear-gradient(135deg, #D9F4E4 0%, #6FCF97 100%)',
    chips: ['앱전용 쿠폰', '쇼핑지원금'],
    chipColor: '#1F7A47',
    title: ['휴대용 사이즈로 챙겨가는', '애터미 치약 플러스'],
    sub: '50g 휴대용 · 외출/여행 필수템',
  },
];

function HeroBannerCard({ slide, isMobile, onSelectProduct, animKey }) {
  const product = SHOP_PRODUCTS.find(p => p.id === slide.id) || SHOP_PRODUCTS[0];
  return (
    <div
      key={animKey}
      onClick={() => onSelectProduct && onSelectProduct(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectProduct && onSelectProduct(product); } }}
      style={{
        flex: 1, minWidth: 0,
        background: slide.bg,
        borderRadius: isMobile ? 14 : 18,
        padding: isMobile ? '22px 22px 20px' : '34px 34px 32px',
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'row',
        gap: isMobile ? 12 : 22, alignItems: 'center',
        minHeight: isMobile ? 204 : 288,
        cursor: 'pointer',
      }}
    >
      {/* 좌측 카피 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* 칩 */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: isMobile ? 12 : 17 }}>
          {slide.chips.map(chip => (
            <span key={chip} style={{
              padding: isMobile ? '4px 8px' : '5px 11px', borderRadius: 4,
              background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
              color: slide.chipColor, fontSize: isMobile ? 11.5 : 12.5, fontWeight: 800,
              letterSpacing: '-0.01em',
            }}>{chip}</span>
          ))}
        </div>

        <h1 style={{
          margin: 0, fontSize: isMobile ? 17 : 24, fontWeight: 900,
          letterSpacing: '-0.025em', lineHeight: 1.25, textWrap: 'balance',
          color: '#1A1A1A',
        }}>
          {slide.title[0]}<br />
          {slide.title[1]}
        </h1>

        <p style={{
          margin: isMobile ? '10px 0 0' : '12px 0 0',
          fontSize: isMobile ? 12 : 14, lineHeight: 1.5,
          color: 'rgba(26,26,26,0.7)', fontWeight: 500,
          textWrap: 'pretty', maxWidth: 336,
        }}>{slide.sub}</p>

        {!isMobile && (
          <button
            onClick={() => onSelectProduct(product)}
            style={{
              marginTop: 17, padding: '10px 19px', borderRadius: 999,
              background: '#1A1A1A', border: 'none', cursor: 'pointer',
              color: '#fff', fontSize: 13, fontWeight: 800,
              letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}
          >
            상세보기
            <span style={{ fontSize: 14, fontWeight: 900 }}>→</span>
          </button>
        )}
      </div>

      {/* 우측 — 제품 이미지 */}
      <div
        onClick={() => onSelectProduct(product)}
        style={{
          flexShrink: 0,
          width: isMobile ? 120 : 204,
          height: isMobile ? 144 : 240,
          position: 'relative', cursor: 'pointer',
          filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.18))',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain', display: 'block',
          }}
        />
      </div>
    </div>
  );
}

// =============================================================
// 카테고리 아이콘 — kr.atomy.com 메인 스타일
// =============================================================
const CATEGORY_ICONS = [
  { key: 'all',       label: '전체상품',   img: 'https://image.atomy.com/KR/banner/90/483/241200000011483102033.svg' },
  { key: 'health',    label: '건강식품',   img: 'https://image.atomy.com/KR/banner/90/493/24120000001149310162.svg' },
  { key: 'beauty',    label: '뷰티',       img: 'https://image.atomy.com/KR/banner/90/495/241200000011495101712.svg' },
  { key: 'body',      label: '헤어&바디',  img: 'https://image.atomy.com/KR/banner/90/482/241200000011482101740.svg' },
  { key: 'living',    label: '리빙&홈데코', img: 'https://image.atomy.com/KR/banner/90/496/24120000001149610184.svg' },
  { key: 'appliance', label: '가전',       img: 'https://image.atomy.com/KR/banner/90/497/241200000011497101830.svg' },
  { key: 'food',      label: '식품',       img: 'https://image.atomy.com/KR/banner/90/498/24120000001149810193.svg' },
  { key: 'fashion',   label: '패션',       img: 'https://image.atomy.com/KR/banner/90/499/241200000011499101929.svg' },
  { key: 'goods',     label: '굿즈&발행물', img: 'https://image.atomy.com/KR/banner/90/500/24120000001150010200.svg' },
];

function ShopCategoryIcons({ isMobile, onSelectCategory }) {
  const iconSize = isMobile ? 48 : 64;
  const [hoverKey, setHoverKey] = React.useState(null);
  return (
    <section style={{
      background: '#fff',
      padding: isMobile ? '22px 12px 22px' : '32px 36px 30px',
      borderBottom: '1px solid rgba(11,31,58,0.05)',
    }}>
      <div
        className="phone-scroll drag-scroll-x"
        style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', gap: isMobile ? 4 : 16,
          overflowX: 'auto', WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          justifyContent: isMobile ? 'flex-start' : 'space-between',
          cursor: isMobile ? 'grab' : 'default',
        }}
      >
        {CATEGORY_ICONS.map((cat) => {
          const active = hoverKey === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory && onSelectCategory(cat.key)}
              onMouseEnter={() => setHoverKey(cat.key)}
              onMouseLeave={() => setHoverKey(null)}
              style={{
                flexShrink: 0,
                width: isMobile ? 70 : 100,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 8, padding: '6px 4px',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <div style={{
                width: iconSize + (isMobile ? 8 : 12),
                height: iconSize + (isMobile ? 8 : 12),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: active ? '#F0F4FA' : 'transparent',
                transform: active ? 'translateY(-3px) scale(1.06)' : 'translateY(0) scale(1)',
                boxShadow: active ? '0 8px 20px rgba(11,31,58,0.12)' : 'none',
                transition: 'transform 0.22s cubic-bezier(.2,.7,.3,1), background 0.18s, box-shadow 0.22s',
              }}>
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{
                    width: iconSize, height: iconSize,
                    objectFit: 'contain', display: 'block',
                    transition: 'filter 0.18s',
                    filter: active ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))' : 'none',
                  }}
                />
              </div>
              <span style={{
                fontSize: isMobile ? 11 : 12.5,
                fontWeight: active ? 800 : 600,
                color: active ? '#0B1F3A' : '#1A1A1A',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                transition: 'color 0.18s, font-weight 0.18s',
              }}>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function ShopHero({ isMobile, onSelectProduct }) {
  const total = HERO_SLIDES.length;
  // 실제 컨테이너 폭을 관찰해 넓은 면(Fold7 등)은 2개씩 노출
  const wrapRef = React.useRef(null);
  const [wideMobile, setWideMobile] = React.useState(false);
  React.useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = e.contentRect.width;
        setWideMobile(w >= 640);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const visibleCount = (!isMobile || wideMobile) ? 2 : 1;
  const [idx, setIdx] = React.useState(0);
  const [animOn, setAnimOn] = React.useState(true);
  const [paused, setPaused] = React.useState(false);

  // 무한 루프용 — 앞쪽에 visibleCount만큼 복제 추가
  const extended = React.useMemo(
    () => [...HERO_SLIDES, ...HERO_SLIDES.slice(0, visibleCount)],
    [visibleCount]
  );

  // idx === total 도달 시 transition 끝나면 0으로 점프 (무애니메이션)
  React.useEffect(() => {
    if (idx >= total) {
      const t = setTimeout(() => {
        setAnimOn(false);
        setIdx(0);
      }, 620);
      return () => clearTimeout(t);
    }
  }, [idx, total]);

  // animOn 꺼진 직후 다음 프레임에 다시 켜기
  React.useEffect(() => {
    if (!animOn) {
      const r = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimOn(true));
      });
      return () => cancelAnimationFrame(r);
    }
  }, [animOn]);

  // 자동 슬라이드 (5초마다 1개씩)
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => i + 1), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir) => {
    if (dir > 0) {
      setIdx(i => i + 1);
    } else {
      // 뒤로 — 0이면 일단 total로 점프(무애니메이션) 후 total-1로 이동
      if (idx === 0) {
        setAnimOn(false);
        setIdx(total);
        // 다음 프레임에 애니메이션 켜고 한 칸 뒤로
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimOn(true);
            setIdx(total - 1);
          });
        });
      } else {
        setIdx(i => i - 1);
      }
    }
  };

  // 페이지네이션 표시용 (0 ~ total-1)
  const displayIdx = ((idx % total) + total) % total;

  const gapPx = isMobile ? 4 : 6;

  return (
    <section
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        background: '#F4F6F8',
        padding: 0,
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'relative', maxWidth: 1280, margin: '0 auto',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          gap: gapPx,
          // 각 슬라이드 = (100% - gap*(vc-1)) / vc
          // translateX = -idx * (slideWidth + gap)
          transform: `translateX(calc(${-idx} * ((100% - ${gapPx * (visibleCount - 1)}px) / ${visibleCount} + ${gapPx}px)))`,
          transition: animOn ? 'transform 0.6s cubic-bezier(.4,.0,.2,1)' : 'none',
          willChange: 'transform',
        }}>
          {extended.map((slide, i) => (
            <div
              key={`${slide.id}-${i}`}
              style={{
                flex: `0 0 calc((100% - ${gapPx * (visibleCount - 1)}px) / ${visibleCount})`,
                minWidth: 0,
              }}
            >
              <HeroBannerCard slide={slide} isMobile={isMobile} onSelectProduct={onSelectProduct} animKey={null} />
            </div>
          ))}
        </div>
      </div>

      {/* 페이지네이션 + 좌우 네비 */}
      <div style={{
        position: 'absolute', bottom: isMobile ? 10 : 16, right: isMobile ? 16 : 36,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: isMobile ? '4px 8px' : '5px 10px', borderRadius: 999,
        background: 'rgba(0,0,0,0.45)', color: '#fff',
        fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: '0.03em',
        fontVariantNumeric: 'tabular-nums',
      }}>
        <button onClick={() => go(-1)} aria-label="이전" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: '#fff', display: 'flex', alignItems: 'center',
          opacity: 0.75,
        }}>
          <svg width={isMobile ? 11 : 12} height={isMobile ? 11 : 12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <span>{String(displayIdx + 1).padStart(2, '0')}</span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span style={{ opacity: 0.7 }}>{String(total).padStart(2, '0')}</span>
        <button onClick={() => go(1)} aria-label="다음" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: '#fff', display: 'flex', alignItems: 'center',
          opacity: 0.75,
        }}>
          <svg width={isMobile ? 11 : 12} height={isMobile ? 11 : 12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <button onClick={() => setPaused(p => !p)} aria-label={paused ? '재생' : '일시정지'} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: '#fff', display: 'flex', alignItems: 'center',
          opacity: 0.75, marginLeft: 2,
        }}>
          {paused ? (
            <svg width={isMobile ? 10 : 11} height={isMobile ? 10 : 11} viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
          ) : (
            <svg width={isMobile ? 10 : 11} height={isMobile ? 10 : 11} viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
          )}
        </button>
      </div>
    </section>
  );
}

// =============================================================
// 섹션 타이틀
// =============================================================
function ShopSectionTitle({ kicker, title, desc, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? 14 : 20 }}>
      <div style={{
        fontSize: isMobile ? 10 : 11, fontWeight: 800,
        letterSpacing: '0.18em', color: '#00B6F0', marginBottom: 6,
      }}>{kicker}</div>
      <h2 style={{
        margin: 0, fontSize: isMobile ? 20 : 26, fontWeight: 900,
        color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.25,
      }}>{title}</h2>
      {desc && (
        <p style={{
          margin: '4px 0 0', fontSize: isMobile ? 12 : 13,
          color: '#6B7A90', fontWeight: 500,
        }}>{desc}</p>
      )}
    </div>
  );
}

// =============================================================
// 푸터
// =============================================================
function ShopFooter({ isMobile }) {
  return (
    <footer style={{
      background: '#0B1F3A', color: '#fff',
      padding: isMobile ? '32px 20px' : '40px 36px',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 18 : 24, alignItems: isMobile ? 'flex-start' : 'center',
      }}>
        <div style={{
          display: 'inline-flex', padding: '10px 14px', borderRadius: 8,
          background: '#fff',
        }}>
          <AtomyLogo size={isMobile ? 24 : 28} showCaption={true} />
        </div>
        <div style={{ flex: 1, fontSize: isMobile ? 11 : 12, lineHeight: 1.7 }}>
          <div style={{ fontWeight: 800, marginBottom: 4 }}>
            애터미㈜ <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginLeft: 8 }}>대표이사 박한길, 윤용순</span>
          </div>
          <div style={{ color: 'rgba(255,255,255,0.65)' }}>
            본사 : (32543) 충청남도 공주시 백제문화로 2148-21
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', marginTop: 6, fontSize: isMobile ? 10 : 11 }}>
            고객행복센터 1544-8580 · 운영시간 평일 09:00 ~ 18:00
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { AtomyShop, ProductCard, SHOP_PRODUCTS });
