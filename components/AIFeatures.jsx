// AIFeatures.jsx — 한중 조사 반영 신규 AI 기능 모음
// ① 리뷰 AI 요약 ② 상품 한눈에 보기 ⑥ 가격 추적 ⑨ 가상 시착 ⑤ 이미지 검색 패널

// ── ① 리뷰 AI 요약 카드 ─────────────────────────────
function AIReviewSummary({ productName, isMobile }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={{
      borderRadius: 14, border: '1.5px solid rgba(0,182,240,0.35)',
      background: 'linear-gradient(135deg, #F3FBFF 0%, #FDFEFF 100%)',
      padding: isMobile ? '14px 15px' : '18px 22px', marginBottom: isMobile ? 20 : 26,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 22, height: 22, borderRadius: 7, background: '#00B6F0', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✦</span>
        <span style={{ fontSize: 13, fontWeight: 900, color: '#0B1F3A' }}>AI가 리뷰 43건을 요약했어요</span>
        <button onClick={() => setOpen(o => !o)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#8A97AD', fontSize: 11.5, fontWeight: 700, fontFamily: 'inherit' }}>{open ? '접기' : '펼치기'}</button>
      </div>
      {open && (<>
        <div style={{ fontSize: isMobile ? 13 : 13.5, color: '#3A4657', lineHeight: 1.65, margin: '10px 0 12px', textWrap: 'pretty' }}>
          구매자들은 <b style={{ color: '#0B1F3A' }}>휴대 간편한 스틱 형태</b>와 <b style={{ color: '#0B1F3A' }}>부담 없는 맛</b>을 가장 많이 언급했어요. 아침 출근길·운동 전 섭취 후 <b style={{ color: '#0B1F3A' }}>활력이 좋아졌다</b>는 후기가 다수예요. 일부는 정기 구매 시 가격 혜택을 아쉬워했어요.
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {[['맛·섭취 편의 👍', 31], ['활력 개선 체감', 24], ['선물용 만족', 9], ['가격 아쉬움', 4]].map(([label, n]) => (
            <span key={label} style={{ fontSize: 11.5, fontWeight: 700, color: '#0088B8', background: 'rgba(0,182,240,0.1)', border: '1px solid rgba(0,182,240,0.25)', borderRadius: 999, padding: '4px 10px' }}>{label} {n}</span>
          ))}
        </div>
        <div style={{ fontSize: 10.5, color: '#A0AABA', marginTop: 10 }}>✦ ATOMY AI가 실제 구매 리뷰를 분석해 자동 생성한 요약입니다.</div>
      </>)}
    </div>
  );
}

// ── ② 상품 한눈에 보기 (AI 요약) ─────────────────────
function AIProductGlance({ isMobile }) {
  const rows = [
    ['무엇이', '헤모힘 당귀 등 혼합추출물 — 면역 기능 개선 개별인정형 원료'],
    ['어떻게', '하루 1포, 물 없이 바로 섭취하는 20mL 액상 스틱'],
    ['누구에게', '피로 회복·면역 관리가 필요한 성인 (임산부·수유부는 섭취 전 상담)'],
    ['왜 애터미', '한국원자력연구원 기술 출자 콜마BNH 생산 · 개별인정 1호 원료'],
  ];
  return (
    <section style={{ padding: isMobile ? '20px 16px 4px' : '28px 36px 8px', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ borderRadius: 14, border: '1px solid rgba(11,31,58,0.08)', background: '#F8FAFC', padding: isMobile ? '14px 15px' : '18px 22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 22, height: 22, borderRadius: 7, background: '#0B1F3A', color: '#5CD3F7', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✦</span>
            <span style={{ fontSize: 13, fontWeight: 900, color: '#0B1F3A' }}>상품 한눈에 보기</span>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: '#8A97AD' }}>AI 요약</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 8 : '10px 24px' }}>
            {rows.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span style={{ flexShrink: 0, fontSize: 11.5, fontWeight: 800, color: '#00A3D9', width: 52 }}>{k}</span>
                <span style={{ fontSize: isMobile ? 12.5 : 13, color: '#3A4657', lineHeight: 1.55, textWrap: 'pretty' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ⑥ 가격 추적 (30일 최저가) ────────────────────────
function PriceTracker({ price, isMobile }) {
  const [open, setOpen] = React.useState(false);
  // 데모용 30일 가격 시계열 — 현재가 기준 소폭 변동
  const days = 30;
  const points = React.useMemo(() => {
    const arr = [];
    let v = price * 1.06;
    for (let i = 0; i < days; i++) {
      v = Math.max(price * 0.97, Math.min(price * 1.08, v + (Math.sin(i * 1.7) * 0.012 - 0.003) * price));
      arr.push(Math.round(v / 100) * 100);
    }
    arr[days - 1] = price;
    return arr;
  }, [price]);
  const min = Math.min(...points), max = Math.max(...points);
  const isLowest = price <= min;
  const W = 260, H = 56;
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${(i / (days - 1)) * W},${H - ((p - min) / (max - min || 1)) * (H - 8) - 4}`).join(' ');
  return (
    <div style={{ marginTop: 10 }}>
      <button onClick={() => setOpen(o => !o)} style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer',
        background: isLowest ? 'rgba(22,163,74,0.08)' : 'rgba(11,31,58,0.05)',
        border: `1px solid ${isLowest ? 'rgba(22,163,74,0.35)' : 'rgba(11,31,58,0.12)'}`,
        borderRadius: 999, padding: '5px 12px', fontFamily: 'inherit',
      }}>
        <span style={{ fontSize: 11.5, fontWeight: 800, color: isLowest ? '#16A34A' : '#3A4657' }}>
          {isLowest ? '✓ 최근 30일 최저가' : '30일 가격 추이'}
        </span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: '#8A97AD', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><path d="M6 9l6 6 6-6" /></svg>
      </button>
      {open && (
        <div style={{ marginTop: 8, padding: '12px 14px', borderRadius: 12, background: '#F8FAFC', border: '1px solid rgba(11,31,58,0.07)', maxWidth: 320 }}>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: 'block' }}>
            <path d={path} fill="none" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round" />
            <circle cx={W} cy={H - ((price - min) / (max - min || 1)) * (H - 8) - 4} r="3.5" fill="#00B6F0" />
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10.5, fontWeight: 700, color: '#8A97AD' }}>
            <span>30일 전</span>
            <span>최저 {min.toLocaleString()}원 · 최고 {max.toLocaleString()}원</span>
            <span>오늘</span>
          </div>
          <div style={{ fontSize: 10.5, color: '#A0AABA', marginTop: 6 }}>✦ AI 가격 추적 — 가격 변동 시 알림으로 알려드려요 (데모)</div>
        </div>
      )}
    </div>
  );
}

// ── ⑨ AI 가상 시착 (뷰티) ────────────────────────────
function VirtualTryOn({ productName, image, onClose }) {
  const TONES = [
    { key: 'fair', label: '밝은 톤', color: '#F4D9C6' },
    { key: 'natural', label: '자연 톤', color: '#E8C4A8' },
    { key: 'tan', label: '웜 톤', color: '#D9A985' },
    { key: 'deep', label: '딥 톤', color: '#B98963' },
  ];
  const [tone, setTone] = React.useState('natural');
  const [state, setState] = React.useState('select'); // select | processing | done
  const run = () => { setState('processing'); setTimeout(() => setState('done'), 1400); };
  const t = TONES.find(x => x.key === tone);
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, zIndex: 10005, background: 'rgba(11,31,58,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'shortsFadeIn 0.2s ease both' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '88%', maxWidth: 360, background: '#fff', borderRadius: 18, padding: '18px 18px 16px', boxShadow: '0 24px 60px rgba(11,31,58,0.35)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 22, height: 22, borderRadius: 7, background: '#00B6F0', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>✦</span>
          <span style={{ fontSize: 13.5, fontWeight: 900, color: '#0B1F3A' }}>AI 가상 시착</span>
          <button onClick={onClose} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#8A97AD', padding: 2, lineHeight: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        {state === 'select' && (<>
          <div style={{ fontSize: 12.5, color: '#6B7A90', margin: '10px 0 12px', lineHeight: 1.6 }}>피부 톤을 선택하면 <b style={{ color: '#0B1F3A' }}>{productName}</b> 발색을 시뮬레이션해 드려요.</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {TONES.map(o => (
              <button key={o.key} onClick={() => setTone(o.key)} style={{
                display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit',
                border: tone === o.key ? '2px solid #00B6F0' : '1.5px solid rgba(11,31,58,0.1)', background: tone === o.key ? 'rgba(0,182,240,0.06)' : '#F8FAFC',
              }}>
                <span style={{ width: 22, height: 22, borderRadius: 999, background: o.color, border: '1px solid rgba(0,0,0,0.08)' }}></span>
                <span style={{ fontSize: 12.5, fontWeight: 700, color: '#0B1F3A' }}>{o.label}</span>
              </button>
            ))}
          </div>
          <button onClick={run} style={{ width: '100%', marginTop: 12, padding: 13, border: 'none', borderRadius: 12, background: '#0B1F3A', color: '#5CD3F7', fontSize: 13.5, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit' }}>시착 결과 보기</button>
        </>)}
        {state === 'processing' && (
          <div style={{ padding: '34px 0 26px', textAlign: 'center' }}>
            <div style={{ width: 34, height: 34, margin: '0 auto 12px', borderRadius: 999, border: '3px solid rgba(0,182,240,0.2)', borderTopColor: '#00B6F0', animation: 'spin 0.8s linear infinite' }}></div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: '#6B7A90' }}>AI가 발색을 시뮬레이션하고 있어요…</div>
          </div>
        )}
        {state === 'done' && (<>
          <div style={{ position: 'relative', marginTop: 12, borderRadius: 14, overflow: 'hidden', background: t.color, height: 150, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={image} alt="" style={{ width: 92, height: 92, objectFit: 'contain', borderRadius: 12, background: 'rgba(255,255,255,0.85)', padding: 6 }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 44, background: `linear-gradient(180deg, transparent, rgba(0,0,0,0.28))` }}></div>
            <span style={{ position: 'absolute', bottom: 8, left: 12, fontSize: 11, fontWeight: 800, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{t.label} × {productName}</span>
            <span style={{ position: 'absolute', top: 8, right: 10, fontSize: 9.5, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', background: 'rgba(0,0,0,0.4)', borderRadius: 999, padding: '3px 8px' }}>AI 생성 이미지</span>
          </div>
          <div style={{ fontSize: 11.5, color: '#6B7A90', lineHeight: 1.6, marginTop: 10 }}>{t.label} 피부에서 자연스럽게 발색돼요. 실제 제품 색상과 다를 수 있습니다.</div>
          <button onClick={() => setState('select')} style={{ width: '100%', marginTop: 10, padding: 11, borderRadius: 12, border: '1.5px solid rgba(11,31,58,0.12)', background: '#fff', color: '#0B1F3A', fontSize: 12.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>다른 톤 보기</button>
        </>)}
      </div>
    </div>
  );
}

// ── ⑤ 이미지로 상품 찾기 ─────────────────────────────
function ImageSearchPanel({ allProducts, onPick, onClose }) {
  const [state, setState] = React.useState('idle'); // idle | scanning | done
  const [results, setResults] = React.useState([]);
  const fileRef = React.useRef(null);
  const [preview, setPreview] = React.useState(null);
  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    setPreview(URL.createObjectURL(f));
    setState('scanning');
    setTimeout(() => {
      // 데모 — 인기 제품 상위 4개를 유사 상품으로 제시
      const pool = (allProducts || []).slice().sort((a, b) => (b.reviews || 0) - (a.reviews || 0)).slice(0, 4);
      setResults(pool);
      setState('done');
    }, 1500);
  };
  return (
    <div style={{ padding: '10px 2px 4px' }}>
      <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '0.08em', color: '#8A97AD', marginBottom: 8 }}>이미지로 찾기</div>
      {state === 'idle' && (
        <button onClick={() => fileRef.current && fileRef.current.click()} style={{
          width: '100%', padding: '18px 14px', borderRadius: 12, cursor: 'pointer', fontFamily: 'inherit',
          border: '1.5px dashed rgba(0,182,240,0.5)', background: 'rgba(0,182,240,0.04)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00A3D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          <span style={{ fontSize: 12.5, fontWeight: 800, color: '#0088B8' }}>사진을 올리면 비슷한 제품을 찾아드려요</span>
          <span style={{ fontSize: 10.5, color: '#8A97AD' }}>제품 사진·포장·사용 장면 무엇이든 OK</span>
        </button>
      )}
      <input ref={fileRef} type="file" accept="image/*" onChange={onFile} style={{ display: 'none' }} />
      {state === 'scanning' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 4px' }}>
          {preview && <img src={preview} alt="" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 10 }} />}
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: '#0B1F3A' }}>✦ AI가 이미지를 분석 중이에요…</div>
            <div style={{ fontSize: 11, color: '#8A97AD', marginTop: 3 }}>형태·색상·패키지를 인식하고 있어요</div>
          </div>
        </div>
      )}
      {state === 'done' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            {preview && <img src={preview} alt="" style={{ width: 34, height: 34, objectFit: 'cover', borderRadius: 8 }} />}
            <span style={{ fontSize: 12, fontWeight: 800, color: '#0B1F3A' }}>비슷한 제품 {results.length}개를 찾았어요</span>
            <button onClick={() => { setState('idle'); setPreview(null); }} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#00A3D9', fontSize: 11, fontWeight: 700, fontFamily: 'inherit' }}>다시 찾기</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {results.map(p => (
              <button key={p.id} onClick={() => onPick(p)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 6px', borderRadius: 10, border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,182,240,0.06)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <img src={p.image} alt="" style={{ width: 40, height: 40, objectFit: 'contain', borderRadius: 8, background: '#F4F6FA' }} />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: 'block', fontSize: 12.5, fontWeight: 700, color: '#0B1F3A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
                  <span style={{ fontSize: 11.5, fontWeight: 800, color: '#00A3D9' }}>{p.price.toLocaleString()}원</span>
                </span>
                <span style={{ fontSize: 10, fontWeight: 800, color: '#16A34A', background: 'rgba(22,163,74,0.08)', borderRadius: 999, padding: '3px 8px' }}>유사 {96 - results.indexOf(p) * 7}%</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { AIReviewSummary, AIProductGlance, PriceTracker, VirtualTryOn, ImageSearchPanel });
