// AtomyProductDetail.jsx — 헤모힘 샷 상세 페이지
// 구조: 갤러리/구매 영역 → 핵심 포인트 6 → 성분 함량 → 추천 대상 → 상세 정보 → 리뷰

const HEMOHIM_DETAIL = {
  id: '000017',
  name: '애터미 헤모힘 샷',
  englishName: 'ATOMY HEMOHIM SHOT',
  category: '혼합음료 · 기능성표시식품',
  tagline: '지친 몸을 깨우는 100ml 에너지 샷',
  description: '본 제품은 피로개선에 도움을 줄 수 있다고 알려진 헤모힘 당귀등 혼합추출물이 들어있습니다.',
  warning: '※ 본 제품은 건강기능식품이 아닙니다.',

  price: 36000,
  pv: 18000,
  rating: 4.8,
  reviewsCount: 421,

  // 갤러리 이미지 (대표 + 서브)
  images: [
    'https://www.genspark.ai/api/files/s/jY5Iva2i', // 대표 — 보틀
  ],

  // 핵심 함량
  highlights: [
    { num: '6,000', unit: 'mg', label: '헤모힘 당귀등 혼합추출물', sub: '면역 · 피로개선 듀얼 기능성' },
    { num: '500',   unit: 'mg', label: '타우린', sub: '피로 회복 · 활력 강화' },
    { num: '100',   unit: 'ml', label: '액상 타입', sub: '간편 휴대 · 즉시 섭취' },
    { num: '24',    unit: '개월', label: '소비기한', sub: '제조일로부터 안정 보관' },
  ],

  // 7가지 포인트
  points: [
    { icon: 'leaf',     title: '헤모힘 당귀등 혼합추출물 함유',
      desc: '당귀, 천궁, 백작약 등 국내산 약재로 추출한 ‘제2006-17호’ 개별인정형 원료 6,000mg 함유.' },
    { icon: 'bolt',     title: '타우린 500mg + 과라나 추출물',
      desc: '지친 몸에 활력을 주는 타우린과 카페인·테오브로민이 풍부한 과라나 추출물까지 함께.' },
    { icon: 'fruit',    title: '청량한 파인애플 맛',
      desc: '파인애플 농축액 3,999mg + 천연 향료로 달콤 새콤한 맛. 기분 UP, 피로 DOWN!' },
    { icon: 'liquid',   title: '액상 100ml 타입',
      desc: '한 손에 쥐고 어디서나 바로 섭취. 출장·운동·야근 어디든 함께.' },
    { icon: 'glass',    title: '유리 용기 사용',
      desc: '식품과 반응하지 않는 유리병으로 본연의 맛과 향을 가장 잘 보존.' },
    { icon: 'planet',   title: 'BLUE MARINE PROJECT',
      desc: '플라스틱을 줄여 바다 환경을 살리는 친환경 캠페인 동참.' },
  ],

  // 추천 대상
  recommendFor: [
    { emoji: '💼', label: '직장에서 업무 효율을 높이고 싶을 때' },
    { emoji: '🏃', label: '운동 중 효과를 높이고 싶을 때' },
    { emoji: '📚', label: '업무·공부 중 체력이 떨어질 때' },
    { emoji: '🥂', label: '센스 있는 웰컴 드링크가 필요할 때' },
  ],

  // 상세 정보 (테이블)
  specs: [
    { k: '제품명', v: '애터미 헤모힘 샷' },
    { k: '식품의 유형', v: '혼합음료 · 기능성표시식품' },
    { k: '내용량', v: '100 ml × 10병 × 2박스 (총 2,000 ml)' },
    { k: '소비기한', v: '제조일로부터 24개월' },
    { k: '제조원', v: '퓨어플러스(주) · 경상남도 함양군' },
    { k: '연구개발', v: '콜마비앤에이치(주)' },
    { k: '판매원', v: '애터미㈜' },
    { k: '보관방법', v: '직사광선을 피해 서늘한 곳에 실온 보관' },
    { k: '심의번호', v: '심의 필 (2511F082)' },
  ],

  // 영양 성분 (1회 100ml 당)
  nutrition: [
    { k: '열량', v: '45 kcal', pct: null },
    { k: '나트륨', v: '45 mg', pct: '2%' },
    { k: '탄수화물', v: '16 g', pct: '5%' },
    { k: '당류', v: '3 g', pct: '3%' },
    { k: '에리스리톨', v: '5 g', pct: null },
    { k: '지방', v: '0 g', pct: '0%' },
    { k: '단백질', v: '1 g 미만', pct: '0%' },
  ],

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
  return (
    <div style={{ display: 'inline-flex', gap: 1 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
             fill={i <= Math.round(rating) ? '#FFB800' : 'rgba(11,31,58,0.15)'}>
          <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
        </svg>
      ))}
    </div>
  );
}

// =============================================================
// 메인 상세 페이지
// =============================================================
function AtomyProductDetail({ product, isMobile = false, onClose, onPlayVideo }) {
  const p = product || HEMOHIM_DETAIL;
  const [qty, setQty] = React.useState(1);

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
      <div style={{
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
      </div>

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
          {/* 좌 — 이미지 */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #FFF5F3 0%, #FFE5DD 100%)',
            borderRadius: 18,
            aspectRatio: isMobile ? '1/1' : '4/5',
            overflow: 'hidden',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
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
            <div style={{
              position: 'absolute', top: 18, left: 18,
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

            {/* CTA 버튼 */}
            <div style={{
              marginTop: 16, display: 'grid',
              gridTemplateColumns: '1fr 2fr', gap: 10,
            }}>
              <button style={{
                padding: '14px', borderRadius: 10,
                background: '#fff', border: '1.5px solid rgba(11,31,58,0.18)',
                color: '#0B1F3A', fontSize: 13.5, fontWeight: 800,
                letterSpacing: '-0.01em', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
                  <path d="M9 11V7a3 3 0 016 0v4" />
                </svg>
                장바구니
              </button>
              <button style={{
                padding: '14px', borderRadius: 10,
                background: 'linear-gradient(135deg, #E84141 0%, #FF6B5C 100%)',
                border: 'none', color: '#fff', fontSize: 14, fontWeight: 900,
                letterSpacing: '-0.01em', cursor: 'pointer',
                boxShadow: '0 8px 22px rgba(232,65,65,0.35)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(232,65,65,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(232,65,65,0.35)';
                }}
              >
                지금 구매하기 →
              </button>
            </div>

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

      {/* 1.5. 회원 소개 영상 — 스크롤 시 자동 재생 / 화면 벗어나면 자동 정지 / 클릭 시 전체화면 */}
      <section style={{
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
                videoUrl: 'https://www.genspark.ai/api/files/s/mb60FN8q',
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
                src="https://www.genspark.ai/api/files/s/mb60FN8q"
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
      </section>

      {/* 2. 핵심 함량 그리드 */}
      <section style={{
        padding: isMobile ? '24px 16px' : '40px 36px',
        background: 'linear-gradient(180deg, #fff 0%, #FFF5F3 100%)',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="KEY INGREDIENTS"
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
      </section>

      {/* 3. 7가지 포인트 */}
      <section style={{
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
      </section>

      {/* 4. 추천 대상 */}
      <section style={{
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
      </section>

      {/* 5. 영양 정보 + 상세 스펙 */}
      <section style={{
        padding: isMobile ? '32px 16px' : '50px 36px',
        background: '#F5F7FA',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <ShopSectionTitle
            kicker="PRODUCT INFO"
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
      </section>

      {/* 6. 리뷰 */}
      <section style={{
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
              kicker="CUSTOMER REVIEWS"
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
      </section>

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

Object.assign(window, { AtomyProductDetail, HEMOHIM_DETAIL });
