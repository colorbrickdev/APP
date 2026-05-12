// AtomyShop.jsx — 제품구매 메뉴 메인 페이지
// 구조: 히어로 배너 → 카테고리 칩 → 베스트(헤모힘 샷 강조) → 신제품 → 슬림바디 → 가격대별 추천

const HEMOHIM_SHOT_IMG = 'https://www.genspark.ai/api/files/s/jY5Iva2i';

// =============================================================
// 제품 데이터 — atomy.com/main에서 가져온 실제 상품
// =============================================================
const SHOP_PRODUCTS = [
  // ★ 강조 — 헤모힘 샷 (id: 000017) ─ 상세페이지 연결
  {
    id: '000017', name: '애터미 헤모힘 샷',
    sub: '지친 몸을 깨우는 100ml 에너지 샷',
    price: 36000, pv: 18000,
    image: HEMOHIM_SHOT_IMG,
    rating: 4.8, reviews: 421,
    badges: ['BEST', '신제품'],
    category: '건강식품',
    accent: '#E84141',
    detail: true, // 상세페이지 있음
  },
  {
    id: '000168', name: '애터미 헤모힘',
    sub: '면역기능, 피로개선 듀얼 기능성',
    price: 96000, pv: 50000,
    image: 'https://sspark.genspark.ai/cfimages?u1=Jhjz0IURcZDh0l9RVxrz5xQqr3%2FSDUj8E8jH1%2B1ih%2F8l%2FZbZtW%2BIevSEGJcN3cygYdcnKTv8ZsEA4CiuR55cJ304eQanPED1gL4hrukR4xE18jq%2FjnjW5DkeJTztJBAg0sIb%2BfDfWALihsLJjxRKDU9PyFzCmWIgOJ4%3D&u2=9YibfyLhMrnobOkc&width=2560',
    rating: 4.9, reviews: 12480,
    badges: ['BEST'],
    category: '건강식품',
  },
  {
    id: '000570', name: '애터미 더페임 스킨케어 1set',
    sub: '탄탄한 피부 장벽 케어 시스템',
    price: 96800, pv: 48000,
    image: 'https://sspark.genspark.ai/cfimages?u1=fu5EJe3E2%2BSP2bbwl9NPqFp2wlDohSLLwmK02W3o7if%2ByKZrbgwsubitnHMwheo4oFlJni0qIHgYhsysH%2Bcednm%2Bdtl3gEGmcbzXXL5wrAV%2Bwbx4ON%2FWxcM%3D&u2=tZkSO4PBVycGF%2Fpv&width=2560',
    rating: 4.7, reviews: 93,
    badges: ['신제품', '무료배송'],
    category: '뷰티',
  },
  {
    id: '000565', name: '더페임 트리트먼트 토너',
    sub: '180ml · 부드러운 결',
    price: 25800, pv: 13000,
    image: 'https://sspark.genspark.ai/cfimages?u1=i20G9%2FKGucTwB64dMxPytOpoga%2BS9GUbwXyty5AWBdlAIoL6DG%2FYlQTtt4z2eGfTKJBLc2c%2B%2FNsFHfL3TbEtmZTwjHqSBVDPlrf6Myw0mih7gBQq6qlEySM%3D&u2=bmBXFRw%2F0kbpbhs9&width=2560',
    rating: 4.6, reviews: 66,
    badges: ['신제품'],
    category: '뷰티',
  },
  {
    id: '000566', name: '더페임 페이스 앤 아이 세럼',
    sub: '65ml · 집중 안티에이징',
    price: 27800, pv: 14000,
    image: 'https://sspark.genspark.ai/cfimages?u1=Rn2pITM1ciddSI%2BpSOvVizCf1%2BCqwsqH%2Bf65BRWSiGbV4QRpFMwMGFwyQdVbeVqh9UUnPDYFJsBGyWrWQ5RMexvBPQHhzNNeiejPZpwlO%2BEpOxtGAPp9notLtYc%3D&u2=nGqZFgzdWVhXAUkE&width=2560',
    rating: 4.7, reviews: 42,
    badges: ['신제품'],
    category: '뷰티',
  },
  {
    id: '000567', name: '더페임 밸런싱 로션',
    sub: '125ml · 산뜻한 마무리',
    price: 24800, pv: 12500,
    image: 'https://sspark.genspark.ai/cfimages?u1=BJfWJwQ90oRDi%2FH926zjrkgamuia0CZZ8HP78BFgNRvgeWmz%2Fzpf2spvcYuHR4dCfixC013mZqVfzcnKsH8PjxR8VKf4rsgOI%2Fj0S2ZRxhvNyZfUt6pRKU1SPcNEthCngRnelvlwOf%2Fsg%2BsCBLdTdmS8N7R%2B7sLluw%3D%3D&u2=diIhYkrHyReuIReW&width=2560',
    rating: 4.6, reviews: 64,
    badges: ['신제품'],
    category: '뷰티',
  },
  {
    id: '000568', name: '더페임 베리어 크림',
    sub: '55ml · 24시간 보습',
    price: 25800, pv: 13000,
    image: 'https://sspark.genspark.ai/cfimages?u1=enhKpKKP8LaT7DihFOHLGmOqlPB5FfML8wxfxM%2BBGqVfodH%2FZkmqA2ZHRHxEhldK94nkx0gYvzmz5PhS7OLpUgxQhC7edAIAoxrD3%2F2X0rlSLvPv7lM5%2BCn2L2LbYk86OlUbmsxNlb7auDhzaCnR55kE%2FuSWj1eYKg%3D%3D&u2=uJsnTbsspFyn%2BdAu&width=2560',
    rating: 4.5, reviews: 33,
    badges: ['신제품'],
    category: '뷰티',
  },
  {
    id: '005870', name: '[슬림바디] 프로틴 플러스 (3SET)',
    sub: '8주 챌린지 · 단백질 강화',
    price: 140400, pv: 75000, originPv: 69000,
    image: 'https://sspark.genspark.ai/cfimages?u1=NRWpbltpvGqumB7c2FnwHbjYUjQ7cGD6mHBwKowWUVi3JeRVAJxOtA31OgpF28omwY0oV2jzErDpDa9evVGcJm3Ks8Od2GSL2WK2ULurMcl9Mo40I90VPfl1%2BPGpIjXCnC0a3Hmp6q32Eg6Ev%2FmWEEMWVNByNyIYeQ%3D%3D&u2=vRwHHkYe3ul6V12x&width=2560',
    rating: 4.7, reviews: 218,
    badges: ['프로모션'],
    category: '슬림바디',
  },
  {
    id: '005869', name: '[슬림바디] 시너지 업 부스터 (5종)',
    sub: '챌린지 풀 패키지',
    price: 185400, pv: 100000, originPv: 83500,
    image: 'https://sspark.genspark.ai/cfimages?u1=zDP0VccAgutqe2xSuNJTaje5dNzaaXO2Ll8w7gqCb%2B5AJz%2BKjHAmelFMmL%2FekN3QKghON2rG4tav55%2F%2FlNJ6WfOB8PP5RROzzubC%2FyMizX%2FGew%3D%3D&u2=%2BTJBtfsiQzYLJi3R&width=2560',
    rating: 4.8, reviews: 187,
    badges: ['프로모션'],
    category: '슬림바디',
  },
  {
    id: '000605', name: '애터미 허벌 샴푸',
    sub: '500ml · 두피 케어',
    price: 12800, pv: 6500,
    image: 'https://sspark.genspark.ai/cfimages?u1=QvZ9ii2hO0i5lHxvPOIq4OQ16a9gfm3rlTYEjdaOxXJGpMKUNrEeFHqkByDkl8InXXTtiFcgTDdlJt6qZIiv5KEofarp803xdVJhhtGH6vH2gBEgduTMqNY%3D&u2=Vyr4XhK21NGFbsTi&width=2560',
    rating: 4.6, reviews: 8420,
    badges: ['BEST'],
    category: '헤어&바디',
  },
  {
    id: '000460', name: '애터미 립 트리트먼트',
    sub: '촉촉한 입술 케어',
    price: 6800, pv: 3500,
    image: 'https://sspark.genspark.ai/cfimages?u1=SBzeFmPvTbMDjpQRjsQdVnLUNFqaxOt2B6vcATSQuR2jacixRO2NAUn7GitZGD2oO2uhkROY9XH6dbNE5HRDG%2Fl1aH4nwzlb5%2FhHrNliL36WEZbOgGSbN0Yqa68%3D&u2=DrJ%2FrnKZLkeLnpWO&width=2560',
    rating: 4.7, reviews: 1245,
    badges: ['BEST'],
    category: '뷰티',
  },
  {
    id: '000700', name: '애터미 프로폴리스 치약',
    sub: '4팩 · 4년 연속 수출 1위',
    price: 12000, pv: 6000,
    image: 'https://sspark.genspark.ai/cfimages?u1=faW9CjhdNmByAniJC5snrbGLjQkwnXsBINWZCkxdXetpmADDkBpLCok87AyowIOdJ%2BzScZOBQGeBLfpBgkSDtG3OlGqOt8VOF3fS&u2=8saTwypGbkcRjhBR&width=2560',
    rating: 4.8, reviews: 24890,
    badges: ['BEST'],
    category: '헤어&바디',
  },
];

// 카테고리
const SHOP_CATEGORIES = [
  { key: 'all',     label: '전체' },
  { key: 'best',    label: '베스트' },
  { key: 'new',     label: '신제품' },
  { key: 'health',  label: '건강식품', match: '건강식품' },
  { key: 'beauty',  label: '뷰티',     match: '뷰티' },
  { key: 'body',    label: '헤어&바디', match: '헤어&바디' },
  { key: 'slim',    label: '슬림바디', match: '슬림바디' },
];

// =============================================================
// 가격 포맷
// =============================================================
const fmtKRW = (n) => n.toLocaleString('ko-KR');

// =============================================================
// 제품 카드
// =============================================================
function ProductCard({ product, isMobile = false, onSelect, large = false }) {
  const p = product;
  const [hover, setHover] = React.useState(false);

  return (
    <button
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
        <img
          src={p.image}
          alt={p.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
          }}
        />

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

        {/* 좋아요 (찜) 버튼 — 우상단 */}
        <button
          onClick={(e) => { e.stopPropagation(); }}
          aria-label="찜하기"
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 30, height: 30, borderRadius: 999, border: 'none',
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(6px)',
            cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(11,31,58,0.12)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
               stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
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

function AtomyShop({ isMobile = false, onSelectProduct = () => {} }) {
  const [tab, setTab] = React.useState('all');

  const filtered = React.useMemo(() => {
    if (tab === 'all') return SHOP_PRODUCTS;
    if (tab === 'best') return SHOP_PRODUCTS.filter(p => (p.badges || []).includes('BEST'));
    if (tab === 'new')  return SHOP_PRODUCTS.filter(p => (p.badges || []).includes('신제품'));
    const c = SHOP_CATEGORIES.find(c => c.key === tab);
    if (!c) return SHOP_PRODUCTS;
    return SHOP_PRODUCTS.filter(p => p.category === c.match);
  }, [tab]);

  const promoProducts = SHOP_PRODUCTS.filter(p => (p.badges || []).includes('프로모션'));
  const bestProducts = SHOP_PRODUCTS.filter(p => (p.badges || []).includes('BEST')).slice(0, 4);

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F7FA',
      color: '#0B1F3A',
    }}>
      {/* 1. 히어로 — 헤모힘 샷 강조 */}
      <ShopHero isMobile={isMobile} onSelectProduct={onSelectProduct} />

      {/* 2. 카테고리 칩 — sticky */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        background: 'rgba(245,247,250,0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(11,31,58,0.06)',
      }}>
        <div
          className="phone-scroll"
          style={{
            maxWidth: 1280, margin: '0 auto',
            padding: isMobile ? '12px 16px' : '14px 36px',
            display: 'flex', gap: 8,
            overflowX: 'auto', WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {SHOP_CATEGORIES.map(c => {
            const isActive = tab === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setTab(c.key)}
                style={{
                  flexShrink: 0,
                  padding: isMobile ? '8px 14px' : '9px 16px',
                  borderRadius: 999,
                  background: isActive ? '#0B1F3A' : '#fff',
                  color: isActive ? '#fff' : '#4A5568',
                  border: isActive ? 'none' : '1px solid rgba(11,31,58,0.1)',
                  fontSize: isMobile ? 12 : 13,
                  fontWeight: isActive ? 800 : 600,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.15s',
                }}
              >{c.label}</button>
            );
          })}
        </div>
      </div>

      {/* 3. 베스트 섹션 (전체 탭일 때만) */}
      {tab === 'all' && (
        <section style={{
          padding: isMobile ? '24px 16px 8px' : '40px 36px 16px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          <ShopSectionTitle
            kicker="BEST PICKS"
            title="🔥 지금 가장 많이 찾는 제품"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 14,
          }}>
            {bestProducts.map(p => (
              <ProductCard key={p.id} product={p} isMobile={isMobile} onSelect={onSelectProduct} />
            ))}
          </div>
        </section>
      )}

      {/* 4. 슬림바디 프로모션 (전체 탭일 때만) */}
      {tab === 'all' && promoProducts.length > 0 && (
        <section style={{
          padding: isMobile ? '20px 16px 8px' : '32px 36px 16px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          <ShopSectionTitle
            kicker="LIMITED PROMOTION"
            title="🏃 슬림바디 8주 챌린지"
            desc="프로모션 기간 동안 PV 할인이 적용돼요"
            isMobile={isMobile}
          />
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? 12 : 16,
          }}>
            {promoProducts.map(p => (
              <ProductCard key={p.id} product={p} isMobile={isMobile} onSelect={onSelectProduct} />
            ))}
          </div>
        </section>
      )}

      {/* 5. 전체 / 필터 결과 */}
      <section style={{
        padding: isMobile ? '20px 16px 32px' : '32px 36px 60px',
        maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}>
        <ShopSectionTitle
          kicker={tab === 'all' ? 'ALL PRODUCTS' : SHOP_CATEGORIES.find(c => c.key === tab)?.label.toUpperCase()}
          title={tab === 'all' ? '전체 상품' : `${SHOP_CATEGORIES.find(c => c.key === tab)?.label} 상품`}
          desc={`${filtered.length}개의 제품`}
          isMobile={isMobile}
        />
        {filtered.length === 0 ? (
          <div style={{
            padding: '60px 24px', textAlign: 'center',
            background: '#fff', borderRadius: 14,
            border: '1px solid rgba(11,31,58,0.06)',
            color: '#8A97AD', fontSize: 13, fontWeight: 600,
          }}>
            이 카테고리의 제품이 아직 없어요
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? 10 : 14,
          }}>
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} isMobile={isMobile} onSelect={onSelectProduct} />
            ))}
          </div>
        )}
      </section>

      {/* 푸터 */}
      <ShopFooter isMobile={isMobile} />
    </div>
  );
}

// =============================================================
// 히어로 — 헤모힘 샷 강조
// =============================================================
function ShopHero({ isMobile, onSelectProduct }) {
  const featured = SHOP_PRODUCTS.find(p => p.id === '000017');
  return (
    <section style={{
      background: 'linear-gradient(135deg, #FF6B5C 0%, #E84141 60%, #C73120 130%)',
      color: '#fff',
      padding: isMobile ? '32px 20px 36px' : '54px 36px 60px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* 배경 패턴 */}
      <div style={{
        position: 'absolute', right: '-10%', top: '-30%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)', filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '40%', bottom: '-40%',
        width: 320, height: 320, borderRadius: '50%',
        background: 'rgba(255,200,100,0.18)', filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', maxWidth: 1280, margin: '0 auto',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 24 : 40, alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* 좌측 카피 */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 12px', borderRadius: 999,
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
            color: '#FFE45A', fontSize: 10, fontWeight: 800, letterSpacing: '0.18em',
            marginBottom: 14,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#FFE45A' }} />
            NEW · 출시 기념 프로모션
          </div>
          <h1 style={{
            margin: 0, fontSize: isMobile ? 26 : 42, fontWeight: 900,
            letterSpacing: '-0.025em', lineHeight: 1.15, textWrap: 'balance',
          }}>
            지친 몸을 깨우는<br />
            <span style={{ color: '#FFE45A' }}>애터미 헤모힘 샷</span>
          </h1>
          <p style={{
            margin: '12px 0 0', fontSize: isMobile ? 13 : 15, lineHeight: 1.65,
            color: 'rgba(255,255,255,0.92)', fontWeight: 500,
            textWrap: 'pretty', maxWidth: 480,
          }}>
            헤모힘 당귀등 혼합추출물 6,000mg + 타우린 500mg + 과라나 추출물.
            청량한 파인애플 맛으로 활력을 깨우는 액상 100ml 에너지 샷.
          </p>

          {/* 가격 + CTA */}
          <div style={{
            marginTop: 22, display: 'flex', alignItems: 'center', gap: isMobile ? 12 : 16,
            flexWrap: 'wrap',
          }}>
            <div style={{
              padding: isMobile ? '10px 14px' : '12px 18px', borderRadius: 12,
              background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.22)',
            }}>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', fontWeight: 700, letterSpacing: '0.06em' }}>가격</div>
              <div style={{
                fontSize: isMobile ? 22 : 28, fontWeight: 900,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em', lineHeight: 1.1,
              }}>{fmtKRW(featured.price)}<span style={{ fontSize: 14, fontWeight: 700, marginLeft: 2 }}>원</span></div>
              <div style={{
                marginTop: 2, fontSize: 10.5, color: '#FFE45A', fontWeight: 800,
                fontVariantNumeric: 'tabular-nums',
              }}>PV {fmtKRW(featured.pv)}</div>
            </div>
            <button
              onClick={() => onSelectProduct(featured)}
              style={{
                padding: isMobile ? '14px 22px' : '16px 28px', borderRadius: 999,
                background: '#fff', border: 'none', cursor: 'pointer',
                color: '#E84141', fontSize: isMobile ? 13 : 15, fontWeight: 900,
                letterSpacing: '-0.01em',
                display: 'inline-flex', alignItems: 'center', gap: 8,
                boxShadow: '0 12px 30px rgba(232,65,65,0.4)',
                transition: 'transform 0.18s, box-shadow 0.18s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(232,65,65,0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(232,65,65,0.4)';
              }}
            >
              상세보기
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: 999,
                background: '#E84141', color: '#fff', fontSize: 13, fontWeight: 900,
              }}>→</span>
            </button>
          </div>

          {/* 별점 표시 */}
          <div style={{
            marginTop: 16, display: 'flex', alignItems: 'center', gap: 4,
            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.92)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFE45A">
              <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
            </svg>
            <span style={{ fontWeight: 800, color: '#FFE45A', fontSize: 13 }}>{featured.rating}</span>
            <span>· 후기 {featured.reviews.toLocaleString()}건</span>
          </div>
        </div>

        {/* 우측 — 헤모힘 샷 보틀 */}
        <div
          onClick={() => onSelectProduct(featured)}
          style={{
            flexShrink: 0,
            width: isMobile ? 180 : 260,
            height: isMobile ? 220 : 320,
            position: 'relative', cursor: 'pointer',
            filter: 'drop-shadow(0 24px 50px rgba(0,0,0,0.3))',
            animation: 'heroFloat 3.5s ease-in-out infinite',
          }}
        >
          <img
            src={HEMOHIM_SHOT_IMG}
            alt="애터미 헤모힘 샷"
            style={{
              width: '100%', height: '100%',
              objectFit: 'contain', display: 'block',
            }}
          />
        </div>
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
