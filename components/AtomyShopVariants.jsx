// AtomyShopVariants.jsx — 디바이스별 제품 리스트 변형 3종
// (1) AtomyShopTikTok    — 풀스크린 세로 스와이프 + 자동재생 영상 (iPhone 17)
// (2) AtomyShopMagazine  — 1열 에디토리얼 매거진 (Fold7)
// (3) AtomyShopAI        — AI 큐레이션 가로 띠 다열 (S26 Ultra)

const _getShopProducts = () => window.SHOP_PRODUCTS || [];
const _VID_POOL = [
  'https://www.genspark.ai/api/files/s/jY5Iva2i',
  'https://www.genspark.ai/api/files/s/mb60FN8q',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
];
const _vidFor = (p) => {
  const n = parseInt(String(p.id).replace(/\D/g, ''), 10) || 0;
  return _VID_POOL[n % _VID_POOL.length];
};
const _krw = (n) => n.toLocaleString('ko-KR');

// ============================================================================
// (1) TikTok 스타일 — 풀스크린 세로 스와이프
// ============================================================================
function AtomyShopTikTok({ isMobile = true, onSelectProduct = () => {} }) {
  // 베스트 + 신제품 위주 큐레이션
  const feed = React.useMemo(() => {
    const ranked = [..._getShopProducts()].sort((a, b) => {
      const score = (p) => (p.badges?.includes('BEST') ? 3 : 0)
        + (p.badges?.includes('신제품') ? 2 : 0)
        + (p.badges?.includes('프로모션') ? 1 : 0);
      return score(b) - score(a);
    });
    return ranked;
  }, []);

  const [idx, setIdx] = React.useState(0);
  const [liked, setLiked] = React.useState({});
  const [muted, setMuted] = React.useState(true);
  const containerRef = React.useRef(null);
  const startY = React.useRef(null);

  const onTouchStart = (e) => { startY.current = e.touches[0].clientY; };
  const onTouchEnd = (e) => {
    if (startY.current == null) return;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dy) > 40) {
      setIdx((i) => Math.max(0, Math.min(feed.length - 1, i + (dy < 0 ? 1 : -1))));
    }
    startY.current = null;
  };
  const onWheel = (e) => {
    if (Math.abs(e.deltaY) < 8) return;
    setIdx((i) => Math.max(0, Math.min(feed.length - 1, i + (e.deltaY > 0 ? 1 : -1))));
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onWheel={onWheel}
      style={{
        position: 'relative', width: '100%',
        height: '100%', minHeight: 'calc(100vh - 56px)',
        background: '#000', overflow: 'hidden',
        fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
        color: '#fff',
        touchAction: 'none',
      }}
    >
      {feed.map((p, i) => {
        const visible = i === idx;
        return (
          <div key={p.id} style={{
            position: 'absolute', inset: 0,
            transform: `translateY(${(i - idx) * 100}%)`,
            transition: 'transform 0.45s cubic-bezier(.2,.7,.3,1)',
            willChange: 'transform',
          }}>
            <TikTokCard
              product={p}
              active={visible}
              muted={muted}
              setMuted={setMuted}
              liked={!!liked[p.id]}
              setLiked={() => setLiked((s) => ({ ...s, [p.id]: !s[p.id] }))}
              onSelect={() => onSelectProduct(p)}
            />
          </div>
        );
      })}

      {/* 페이지 인디케이터 */}
      <div style={{
        position: 'absolute', top: 12, right: 12, zIndex: 30,
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        {feed.slice(0, 12).map((_, i) => (
          <div key={i} style={{
            width: 2, height: i === idx ? 18 : 6,
            background: i === idx ? '#fff' : 'rgba(255,255,255,0.45)',
            borderRadius: 2, transition: 'all 0.2s',
          }} />
        ))}
      </div>

      {/* 가이드 (1번째에만) */}
      {idx === 0 && (
        <div style={{
          position: 'absolute', bottom: 100, left: '50%',
          transform: 'translateX(-50%)', zIndex: 30,
          fontSize: 10.5, fontWeight: 600, letterSpacing: '0.04em',
          color: 'rgba(255,255,255,0.7)',
          textShadow: '0 1px 4px rgba(0,0,0,0.6)',
          animation: 'tikGuide 1.6s ease-in-out infinite',
        }}>
          ↑ 위로 스와이프
        </div>
      )}
      <style>{`@keyframes tikGuide { 0%,100% { opacity: 0.6; transform: translateX(-50%) translateY(0); } 50% { opacity: 1; transform: translateX(-50%) translateY(-4px); } }`}</style>
    </div>
  );
}

function TikTokCard({ product, active, muted, setMuted, liked, setLiked, onSelect }) {
  const p = product;
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const v = videoRef.current; if (!v) return;
    if (active) v.play().catch(() => {}); else v.pause();
  }, [active]);

  const accent = p.accent || '#00B6F0';

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      {/* 배경 영상 */}
      <video
        ref={videoRef}
        src={_vidFor(p)}
        poster={p.image}
        loop muted={muted} playsInline
        preload="metadata"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* 그라디언트 — 텍스트 가독성 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* 음소거 토글 */}
      <button
        onClick={(e) => { e.stopPropagation(); setMuted(!muted); }}
        style={{
          position: 'absolute', top: 12, left: 12, zIndex: 25,
          width: 32, height: 32, borderRadius: 999,
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
          border: 'none', color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        aria-label={muted ? '음소거 해제' : '음소거'}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff">
          {muted ? (
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          ) : (
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77S18.01 4.14 14 3.23z" />
          )}
        </svg>
      </button>

      {/* 좌하단 — 제품 정보 */}
      <div
        onClick={onSelect}
        style={{
          position: 'absolute', left: 14, bottom: 18, right: 64, zIndex: 20,
          cursor: 'pointer',
        }}
      >
        {/* 뱃지 */}
        {p.badges?.length > 0 && (
          <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
            {p.badges.slice(0, 2).map((b) => (
              <span key={b} style={{
                padding: '3px 8px', borderRadius: 4,
                background: b === 'BEST' ? '#FF3B6A' : b === '신제품' ? '#00B6F0' : '#FF8A3D',
                color: '#fff', fontSize: 9.5, fontWeight: 800, letterSpacing: '-0.01em',
              }}>{b}</span>
            ))}
          </div>
        )}
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase',
          marginBottom: 4,
        }}>{p.category}</div>
        <div style={{
          fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em',
          lineHeight: 1.25, marginBottom: 4,
          textShadow: '0 1px 6px rgba(0,0,0,0.5)',
        }}>{p.name}</div>
        <div style={{
          fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.85)',
          marginBottom: 10, textShadow: '0 1px 4px rgba(0,0,0,0.5)',
        }}>{p.sub}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'baseline', gap: 6,
          padding: '6px 12px', background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(8px)', borderRadius: 999,
        }}>
          <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: '-0.02em' }}>
            {_krw(p.price)}원
          </span>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: 'rgba(255,255,255,0.75)' }}>
            PV {_krw(p.pv)}
          </span>
        </div>
      </div>

      {/* 우측 — 액션 스택 */}
      <div style={{
        position: 'absolute', right: 12, bottom: 22, zIndex: 25,
        display: 'flex', flexDirection: 'column', gap: 14,
        alignItems: 'center',
      }}>
        <TikAction
          icon={(
            <svg width="22" height="22" viewBox="0 0 24 24" fill={liked ? '#FF3B6A' : 'none'} stroke={liked ? '#FF3B6A' : '#fff'} strokeWidth="2.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          )}
          label={liked ? '1.2K' : '1.2K'}
          onClick={(e) => { e.stopPropagation(); setLiked(); }}
        />
        <TikAction
          icon={(
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
          label="42"
        />
        <TikAction
          icon={(
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2">
              <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          )}
          label="공유"
        />
        {/* 장바구니 CTA */}
        <button
          onClick={(e) => { e.stopPropagation(); onSelect(); }}
          style={{
            width: 52, height: 52, borderRadius: 999,
            background: accent, border: 'none', cursor: 'pointer',
            color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: '-0.02em',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            fontFamily: 'inherit', gap: 1,
          }}
          aria-label="구매하기"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          BUY
        </button>
      </div>

      {/* 별점·리뷰 — 좌상단 (음소거 옆) */}
      <div style={{
        position: 'absolute', top: 14, left: 54, zIndex: 25,
        display: 'inline-flex', alignItems: 'center', gap: 4,
        padding: '5px 9px', borderRadius: 999,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
        color: '#fff', fontSize: 11, fontWeight: 700,
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFC83D">
          <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
        </svg>
        {p.rating} <span style={{ opacity: 0.7 }}>({_krw(p.reviews)})</span>
      </div>
    </div>
  );
}

function TikAction({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        color: '#fff', padding: 0, fontFamily: 'inherit',
      }}
    >
      <div style={{
        width: 42, height: 42, borderRadius: 999,
        background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>{icon}</div>
      <span style={{ fontSize: 10, fontWeight: 700, textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>{label}</span>
    </button>
  );
}

// ============================================================================
// (2) Magazine 스타일 — 1열 풀와이드 에디토리얼 (Fold7)
// ============================================================================
function AtomyShopMagazine({ isMobile = false, onSelectProduct = () => {} }) {
  // 베스트 4 + 신제품 4 + 슬림 2 등 큐레이션
  const featured = _getShopProducts().filter(p => p.badges?.includes('BEST')).slice(0, 1);
  const editorials = React.useMemo(() => {
    const list = [..._getShopProducts()];
    // featured 첫 제품 제외
    return list.filter(p => p.id !== (featured[0]?.id));
  }, []);

  const QUOTES = [
    '"3주 만에 아침이 가벼워졌어요" — 김○○님',
    '"하루 한 알, 가족 모두의 루틴" — 박○○님',
    '"피부가 안정되고 결이 살아났어요" — 이○○님',
    '"향이 은은해서 매일 손이 가요" — 정○○님',
    '"챌린지 후 -4kg, 진짜 됐다" — 최○○님',
    '"치약 하나 바꿨을 뿐인데 다르네요" — 한○○님',
    '"트리트먼트 토너로 결정" — 윤○○님',
    '"운동 전 한 병이면 충분" — 강○○님',
    '"립밤 떨어지면 큰일나요" — 송○○님',
    '"에이징 케어 입문템" — 조○○님',
    '"챔피언 패키지 가성비 갑" — 임○○님',
    '"베리어 크림이 진리" — 황○○님',
  ];
  const WHY_THIS = [
    '천연 성분과 임상 데이터로 설계된 정통 한방 면역 케어',
    '아침 루틴을 바꿀 100ml 한 잔 — 빠른 흡수 & 가벼운 풍미',
    '24시간 보습을 책임지는 베리어 시스템',
    '피부 결을 잡아주는 데일리 토너의 정석',
    '단백질과 영양을 한 끼에, 8주 챌린지 패키지',
    '두피 밸런스를 회복시키는 한방 처방',
    '아토피·민감성 가족을 위한 부드러운 처방',
    '유분과 수분의 균형을 잡아주는 가벼운 마무리',
    '눈가·입가·이마, 한 병으로 안티에이징',
    '수출 1위가 증명한 매일의 구강 케어',
    '회복 영양과 단백질 함량을 동시에',
    '입술이 자주 건조한 분들을 위한 매일 케어',
  ];

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#FAF8F4',
      color: '#1A1A1A',
      minHeight: '100%',
    }}>
      {/* 매거진 마스트헤드 */}
      <header style={{
        padding: '36px 32px 26px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(11,31,58,0.12)',
      }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.32em',
          color: '#0B1F3A', marginBottom: 8,
        }}>VOL.07 · WINTER 2025</div>
        <h1 style={{
          fontFamily: '"Playfair Display", "Times New Roman", serif',
          fontSize: 44, fontWeight: 700, letterSpacing: '-0.02em',
          margin: 0, lineHeight: 1.05,
        }}>The Atomy Edit</h1>
        <div style={{
          fontSize: 12, fontWeight: 500, color: 'rgba(11,31,58,0.7)',
          marginTop: 10, fontStyle: 'italic',
        }}>Curated stories of skin, body, and balance</div>
      </header>

      {/* 표지 — 풀블리드 에디토리얼 */}
      {featured[0] && (
        <CoverFeature
          product={featured[0]}
          onSelect={() => onSelectProduct(featured[0])}
          quote={QUOTES[0]}
          whyThis={WHY_THIS[0]}
        />
      )}

      {/* 매거진 인덱스 */}
      <div style={{
        padding: '40px 40px 16px',
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 30,
        borderBottom: '1px solid rgba(11,31,58,0.12)',
      }}>
        <div>
          <div style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.28em',
            color: '#7B8597', marginBottom: 14,
          }}>IN THIS ISSUE</div>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginBottom: 6 }}>
            매일의 의식, <em style={{ fontStyle: 'italic' }}>새로운 균형</em>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(11,31,58,0.75)' }}>
            우리는 매일 같은 루틴을 반복합니다. 그 안에 작은 변화가 있을 때, 일상은 다른 방향으로 흘러가기 시작합니다. 이번 호는 그 작은 변화에 관한 이야기입니다.
          </div>
        </div>
        <div>
          <div style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.28em',
            color: '#7B8597', marginBottom: 14,
          }}>EDITOR'S NOTE</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.7, color: 'rgba(11,31,58,0.85)', fontStyle: 'italic' }}>
            "사치는 비싼 것이 아니라, 매일을 다르게 만드는 작은 선택입니다. 이번 호의 모든 제품은 그 선택의 기준에서 출발했습니다."
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, marginTop: 10, color: '#0B1F3A' }}>— ATOMY EDITORIAL</div>
        </div>
      </div>

      {/* 본문 — 1열 풀와이드 에디토리얼 카드들 */}
      <main style={{ padding: '0 40px 60px' }}>
        {editorials.slice(0, 11).map((p, i) => (
          <EditorialCard
            key={p.id}
            product={p}
            onSelect={() => onSelectProduct(p)}
            quote={QUOTES[(i + 1) % QUOTES.length]}
            whyThis={WHY_THIS[(i + 1) % WHY_THIS.length]}
            number={i + 2}
            flip={i % 2 === 1}
          />
        ))}
      </main>

      <footer style={{
        padding: '40px 40px',
        textAlign: 'center',
        borderTop: '1px solid rgba(11,31,58,0.12)',
        fontSize: 10.5, fontWeight: 700, letterSpacing: '0.32em',
        color: 'rgba(11,31,58,0.6)',
      }}>FIN — THE ATOMY EDIT VOL.07</footer>
    </div>
  );
}

function CoverFeature({ product, onSelect, quote, whyThis }) {
  const p = product;
  return (
    <div style={{
      position: 'relative',
      background: '#0B1F3A',
      color: '#fff',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative', aspectRatio: '16/10',
        backgroundImage: `linear-gradient(180deg, rgba(11,31,58,0.15) 0%, rgba(11,31,58,0.65) 100%), url(${p.image})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        <div style={{
          position: 'absolute', top: 24, left: 32,
          fontSize: 10.5, fontWeight: 700, letterSpacing: '0.32em',
          color: 'rgba(255,255,255,0.85)',
        }}>COVER STORY · NO.01</div>
        <div style={{
          position: 'absolute', bottom: 32, left: 32, right: 32,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.24em',
            color: 'rgba(255,255,255,0.85)', marginBottom: 12,
          }}>{p.category} · BEST PICK</div>
          <h2 style={{
            fontFamily: '"Playfair Display", "Times New Roman", serif',
            fontSize: 56, fontWeight: 700, letterSpacing: '-0.02em',
            margin: 0, lineHeight: 1, marginBottom: 12,
          }}>{p.name}</h2>
          <div style={{
            fontSize: 15, fontWeight: 500, fontStyle: 'italic',
            color: 'rgba(255,255,255,0.92)', maxWidth: 540,
            lineHeight: 1.5,
          }}>{whyThis}</div>
        </div>
      </div>

      <div style={{
        padding: '32px 40px',
        display: 'grid', gridTemplateColumns: '1fr auto', gap: 32,
        alignItems: 'center', background: '#fff', color: '#1A1A1A',
      }}>
        <div>
          <div style={{
            fontSize: 14, fontWeight: 600, lineHeight: 1.7,
            color: 'rgba(11,31,58,0.85)',
            fontStyle: 'italic',
            paddingLeft: 16, borderLeft: '3px solid #0B1F3A',
          }}>{quote}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em',
          }}>{_krw(p.price)}<span style={{ fontSize: 16, fontWeight: 500 }}>원</span></div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', color: '#7B8597', marginBottom: 12 }}>
            PV {_krw(p.pv)}
          </div>
          <button onClick={onSelect} style={{
            padding: '12px 28px',
            background: '#0B1F3A', color: '#fff',
            border: 'none', borderRadius: 0, cursor: 'pointer',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
            fontFamily: 'inherit',
          }}>READ MORE  →</button>
        </div>
      </div>
    </div>
  );
}

function EditorialCard({ product, onSelect, quote, whyThis, number, flip }) {
  const p = product;
  const [hover, setHover] = React.useState(false);
  const num = String(number).padStart(2, '0');

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: flip ? '1fr 1.2fr' : '1.2fr 1fr',
        gap: 36,
        padding: '60px 0',
        borderBottom: '1px solid rgba(11,31,58,0.12)',
        alignItems: 'center',
      }}
    >
      <div
        onClick={onSelect}
        style={{
          order: flip ? 2 : 1,
          aspectRatio: '4/5',
          backgroundImage: `url(${p.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          cursor: 'pointer',
          transform: hover ? 'scale(1.01)' : 'scale(1)',
          transition: 'transform 0.5s ease',
          borderRadius: 0,
        }}
      />
      <div style={{ order: flip ? 1 : 2 }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 16,
        }}>
          <div style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 64, fontWeight: 700, color: '#E84141',
            letterSpacing: '-0.04em', lineHeight: 0.9, fontStyle: 'italic',
          }}>{num}</div>
          <div style={{
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.28em',
            color: '#7B8597', textTransform: 'uppercase',
          }}>{p.category} · {p.badges?.[0] || 'EDIT'}</div>
        </div>
        <h3 style={{
          fontFamily: '"Playfair Display", "Times New Roman", serif',
          fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em',
          margin: '0 0 10px', lineHeight: 1.15,
        }}>{p.name}</h3>
        <div style={{
          fontSize: 13, fontWeight: 500, color: 'rgba(11,31,58,0.7)',
          marginBottom: 18, fontStyle: 'italic',
        }}>{p.sub}</div>
        <div style={{
          fontSize: 14, fontWeight: 500, lineHeight: 1.7,
          color: 'rgba(11,31,58,0.85)', marginBottom: 22,
        }}>{whyThis}</div>
        <div style={{
          padding: '14px 0',
          borderTop: '1px solid rgba(11,31,58,0.12)',
          borderBottom: '1px solid rgba(11,31,58,0.12)',
          fontSize: 12.5, lineHeight: 1.6,
          color: 'rgba(11,31,58,0.7)', fontStyle: 'italic',
          marginBottom: 22,
        }}>{quote}</div>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
        }}>
          <div>
            <div style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em',
            }}>{_krw(p.price)}<span style={{ fontSize: 13, fontWeight: 500 }}>원</span></div>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.12em', color: '#7B8597' }}>
              PV {_krw(p.pv)} · ★ {p.rating} ({_krw(p.reviews)})
            </div>
          </div>
          <button onClick={onSelect} style={{
            padding: '10px 20px', background: 'transparent',
            border: '1px solid #0B1F3A', color: '#0B1F3A',
            cursor: 'pointer', fontSize: 10.5, fontWeight: 700,
            letterSpacing: '0.16em', fontFamily: 'inherit',
          }}>VIEW PRODUCT  →</button>
        </div>
      </div>
    </article>
  );
}

// ============================================================================
// (3) AI Curation 스타일 — 큐레이션 가로 띠 다열 (S26 Ultra)
// ============================================================================
function AtomyShopAI({ isMobile = true, onSelectProduct = () => {} }) {
  const all = _getShopProducts();
  const best = all.filter(p => p.badges?.includes('BEST'));
  const isNew = all.filter(p => p.badges?.includes('신제품'));
  const promo = all.filter(p => p.badges?.includes('프로모션'));

  // 큐레이션 띠 (라벨 + reasoning + 제품 ids)
  const ROWS = [
    {
      kind: 'today',
      kicker: '오늘의 추천 · FOR YOU',
      title: '오늘의 컨디션을 위한 한 가지',
      reason: '전날 활동 패턴과 비슷한 회원의 선호를 반영했어요',
      items: [best[0], all.find(p => p.id === '000570'), best[1], best[3]].filter(Boolean),
      badge: 'AI 큐레이션',
      tone: '#00B6F0',
    },
    {
      kind: 'similar',
      kicker: '비슷한 회원이 좋아한',
      title: '같은 등급의 회장님들이 자주 구매',
      reason: 'CHAIRMAN 등급 회원 1,248명의 최근 30일 구매 데이터',
      items: Array.from(new Map([...best, ...isNew].map(p => [p.id, p])).values()).slice(0, 6),
      badge: '회원 인사이트',
      tone: '#FFC83D',
    },
    {
      kind: 'rebuy',
      kicker: '재구매 추천',
      title: '곧 떨어질 제품을 미리 챙기세요',
      reason: '평균 32일 사용 기준 · 마지막 구매로부터 28일 경과',
      items: [best[3], best[1], best[0]].filter(Boolean),
      badge: '리오더',
      tone: '#16A34A',
    },
    {
      kind: 'chairman',
      kicker: 'CHAIRMAN PICK',
      title: '박한길 회장이 추천하는 5가지',
      reason: '창립자가 직접 큐레이션한 일상 루틴 패키지',
      items: best.slice(0, 5),
      badge: '✦ EDITOR\'S CHOICE',
      tone: '#0B1F3A',
    },
    {
      kind: 'trend',
      kicker: '지금 뜨는',
      title: '24시간 안에 가장 많이 본 제품',
      reason: '실시간 조회 데이터 기반 · 매시간 업데이트',
      items: Array.from(new Map([...isNew, ...promo].map(p => [p.id, p])).values()).slice(0, 6),
      badge: '🔥 LIVE',
      tone: '#FF3B6A',
    },
    {
      kind: 'budget',
      kicker: '가성비 픽',
      title: '2만원 이하로 시작하는 케어',
      reason: '기존 구매 패턴과 가격대를 분석',
      items: all.filter(p => p.price <= 30000).slice(0, 6),
      badge: 'VALUE',
      tone: '#7B8597',
    },
  ];

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F7FA',
      color: '#0B1F3A',
      minHeight: '100%',
      width: '100%',
      maxWidth: '100%',
      overflowX: 'hidden',
      boxSizing: 'border-box',
    }}>
      {/* AI 헤더 */}
      <div style={{
        padding: '20px 16px 16px',
        background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3760 100%)',
        color: '#fff',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 180, height: 180, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,182,240,0.25) 0%, transparent 70%)',
        }} />
        <div style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.2em',
          color: '#00B6F0', marginBottom: 8,
        }}>✦ ATOMY AI · POWERED BY YOUR DATA</div>
        <div style={{
          fontSize: 21, fontWeight: 800, letterSpacing: '-0.02em',
          lineHeight: 1.2, marginBottom: 6,
        }}>안녕하세요 김애터미님,<br />오늘은 이 제품들이 잘 맞을 것 같아요</div>
        <div style={{
          fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.7)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: '#16A34A', boxShadow: '0 0 0 3px rgba(22,163,74,0.25)',
          }} />
          실시간 추천 · 방금 업데이트
        </div>
      </div>

      {/* 큐레이션 띠들 */}
      {ROWS.map((row, i) => (
        <CurationRow
          key={row.kind}
          row={row}
          isMobile={isMobile}
          onSelect={onSelectProduct}
        />
      ))}

      <div style={{ padding: '28px 16px 40px', textAlign: 'center' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.16em',
          color: '#7B8597', marginBottom: 8,
        }}>✦ ATOMY AI</div>
        <div style={{ fontSize: 12, color: 'rgba(11,31,58,0.7)', lineHeight: 1.6 }}>
          추천은 회원님의 구매 이력, 등급, 선호 카테고리,<br />같은 등급 회원의 인기 제품을 종합해 만들어집니다.
        </div>
      </div>
    </div>
  );
}

function CurationRow({ row, isMobile, onSelect }) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section style={{
      padding: '22px 0 6px',
      borderBottom: '1px solid rgba(11,31,58,0.06)',
    }}>
      {/* 섹션 헤더 */}
      <div style={{ padding: '0 16px', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '3px 8px', borderRadius: 4,
            background: row.tone, color: '#fff',
            fontSize: 9.5, fontWeight: 800, letterSpacing: '-0.01em',
          }}>{row.badge}</span>
          <div style={{
            fontSize: 10.5, fontWeight: 800, letterSpacing: '0.12em',
            color: row.tone, textTransform: 'uppercase',
          }}>{row.kicker}</div>
        </div>
        <div style={{
          fontSize: 16, fontWeight: 800, letterSpacing: '-0.02em',
          marginBottom: 4, lineHeight: 1.25,
        }}>{row.title}</div>
        <div style={{
          fontSize: 11.5, fontWeight: 500, color: 'rgba(11,31,58,0.6)',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(11,31,58,0.5)" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
          </svg>
          {row.reason}
        </div>
      </div>

      {/* 가로 스크롤 트랙 */}
      <div
        className="phone-scroll drag-scroll-x"
        style={{
          display: 'flex', gap: 10, padding: '4px 16px 16px',
          overflowX: 'auto', WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none', scrollSnapType: 'x mandatory',
          cursor: 'grab',
        }}
      >
        {row.items.map((p) => (
          <AICard
            key={`${row.kind}-${p.id}`}
            product={p}
            row={row}
            onSelect={() => onSelect(p)}
          />
        ))}
        {/* 더보기 카드 */}
        <button
          onClick={() => setExpanded(true)}
          style={{
            flexShrink: 0, width: 130,
            scrollSnapAlign: 'start',
            background: 'transparent',
            border: '1px dashed rgba(11,31,58,0.25)',
            borderRadius: 14,
            cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: 10, gap: 8,
            color: 'rgba(11,31,58,0.6)',
            fontFamily: 'inherit',
          }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: 999,
            background: 'rgba(11,31,58,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(11,31,58,0.6)" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" /><line x1="12" y1="5" x2="12" y2="19" />
            </svg>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700 }}>더보기</div>
          <div style={{ fontSize: 9.5, fontWeight: 500, opacity: 0.7 }}>이 카테고리</div>
        </button>
      </div>
    </section>
  );
}

function AICard({ product, row, onSelect }) {
  const p = product;
  // 카드별 마이크로 인사이트
  const INSIGHT = {
    today: ['🌥 오늘 흐림', '☕ 카페인 줄이기', '🌙 잠 부족', '💧 수분 부족'],
    similar: ['👑 89% 구매', '👥 1,248명', '⭐ 4.9평점', '🔁 재구매 67%'],
    rebuy: ['📅 28일 경과', '⏰ 곧 떨어짐', '🔁 평균 32일'],
    chairman: ['✦ 매일 사용', '✦ 50년 노하우', '✦ 추천 1순위', '✦ 회장님 픽'],
    trend: ['🔥 +312% 조회', '📈 어제 1위', '👀 24h 핫'],
    budget: ['💰 -28% 가성비', '🎁 2만원 이하', '✓ 첫 구매 추천'],
  };
  const list = INSIGHT[row.kind] || [];
  const insight = list[(parseInt(String(p.id).replace(/\D/g, ''), 10) || 0) % list.length];

  return (
    <button
      onClick={onSelect}
      style={{
        flexShrink: 0, width: 144,
        scrollSnapAlign: 'start',
        background: '#fff',
        border: '1px solid rgba(11,31,58,0.06)',
        borderRadius: 14,
        padding: 0, textAlign: 'left',
        cursor: 'pointer',
        overflow: 'hidden',
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
        aspectRatio: '1/1',
        background: '#F5F7FA',
        overflow: 'hidden',
      }}>
        <img src={p.image} alt={p.name} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
        }} />
        {/* 인사이트 칩 */}
        {insight && (
          <div style={{
            position: 'absolute', top: 6, left: 6,
            padding: '3px 7px', borderRadius: 999,
            background: 'rgba(11,31,58,0.85)',
            backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 9, fontWeight: 700,
            letterSpacing: '-0.01em',
          }}>{insight}</div>
        )}
      </div>
      <div style={{ padding: '8px 10px 10px' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: '#7B8597',
          marginBottom: 2, letterSpacing: '-0.01em',
        }}>{p.category}</div>
        <div style={{
          fontSize: 12.5, fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.3, color: '#0B1F3A',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', minHeight: 32, marginBottom: 6,
        }}>{p.name}</div>
        <div style={{
          fontSize: 13, fontWeight: 800, letterSpacing: '-0.02em',
          color: '#0B1F3A',
        }}>{_krw(p.price)}<span style={{ fontSize: 10, fontWeight: 600, color: '#7B8597', marginLeft: 2 }}>원</span></div>
        <div style={{
          fontSize: 9.5, fontWeight: 700, color: '#7B8597',
          letterSpacing: '0.04em', marginTop: 1,
        }}>★ {p.rating} · {_krw(p.reviews)}</div>
      </div>
    </button>
  );
}

// 전역 노출
Object.assign(window, { AtomyShopTikTok, AtomyShopMagazine, AtomyShopAI });
