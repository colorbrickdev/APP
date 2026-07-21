// VariationDesktop.jsx — 데스크톱 마스터 프로필
// 좌측: 프로필 카드(미디어 캐러셀 + 이름 + 직급 + SNS + 소개)
// 우측: 50개 석세스클립 그리드 (5열)
// 상단: 글로벌 헤더(제품구매 / 석세스클립 / 인생시나리오 / 애터미소개 + 검색 + 로그인 등)

function DesktopHeader({ notifOpen = false, onToggleNotif = () => {}, onNavClick = () => {}, currentPage = 'shorts', onOpenSearch = () => {} }) {
  // 알림 미읽음 카운트 — notifStore 구독
  const [notifUnread, setNotifUnread] = React.useState(() => (window.notifStore ? window.notifStore.unreadCount() : 3));
  React.useEffect(() => {
    if (!window.notifStore) return;
    const sync = () => setNotifUnread(window.notifStore.unreadCount());
    sync();
    return window.notifStore.subscribe(sync);
  }, []);
  const navs = [
    { key: 'shop',    label: '제품구매',     render: NavIcon.shop   },
    { key: 'shorts',  label: '석세스클립',    render: NavIcon.shorts },
    { key: 'life',    label: '인생시나리오',  render: NavIcon.dharma },
    { key: 'about',   label: '애터미소개',    render: NavIcon.info   },
  ].map(n => ({ ...n, active: n.key === currentPage }));
  return (
    <header style={{
      background: '#fff',
      borderBottom: '1px solid rgba(11,31,58,0.08)',
      height: 84,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'sticky', top: 0, zIndex: 30,
      overflow: 'visible',
    }}>
    <div style={{
      width: '100%', maxWidth: 1280, margin: '0 auto',
      padding: '0 36px', boxSizing: 'border-box',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* 로고 + 언어 선택 + 네비 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <button
          onClick={() => onNavClick('shop')}
          aria-label="ATOMY · 제품구매로 이동"
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            padding: 0, lineHeight: 0,
          }}
        >
          <AtomyLogo size={40} showCaption={true} />
        </button>
        {/* 언어 선택 — 콤보박스 (한국어 / ENGLISH / 日本語 / 中文) */}
        <LanguageSwitcher size="desktop" />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 28, marginLeft: 12 }}>
          {navs.map(n => (
            <button
              key={n.key}
              onClick={() => onNavClick(n.key)}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '4px 0',
                borderBottom: n.active ? '2px solid #00B6F0' : '2px solid transparent',
                color: n.active ? '#0B1F3A' : '#6B7A90',
                fontSize: 14, fontWeight: n.active ? 800 : 600,
                letterSpacing: '-0.01em',
                transition: 'color 0.15s',
              }}
            >
              {n.render(17, n.active ? '#00B6F0' : '#6B7A90', n.active ? 2 : 1.7)}
              {n.label}
            </button>
          ))}
        </nav>
      </div>

      {/* 검색 + 알림 + 장바구니 (비회원 페이지 — 로그인/마이페이지 없음) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '9px 16px', borderRadius: 999,
          background: '#F5F7FA',
          border: '1px solid rgba(11,31,58,0.08)',
          width: 280,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7A90"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            placeholder="제품, 석세스클립 검색"
            readOnly
            onClick={(e) => onOpenSearch(e.currentTarget)}
            onFocus={(e) => onOpenSearch(e.currentTarget)}
            style={{
              flex: 1, background: 'transparent', border: 'none',
              color: '#0B1F3A', fontSize: 13, outline: 'none',
              fontFamily: 'inherit', cursor: 'pointer',
            }}
          />
        </div>

        {/* 알림 — 카운트 배지 + 클릭 시 부모 토글 호출 */}
        <button
          aria-label="알림"
          onClick={(e) => { e.stopPropagation(); onToggleNotif(); }}
          style={{
            background: notifOpen ? '#F5F7FA' : 'transparent',
            border: 'none', cursor: 'pointer',
            padding: 8, lineHeight: 0, position: 'relative', borderRadius: 999,
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => { if (!notifOpen) e.currentTarget.style.background = '#F5F7FA'; }}
          onMouseLeave={e => { if (!notifOpen) e.currentTarget.style.background = 'transparent'; }}
        >
          <svg className="bell-wobble" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 16v-5a6 6 0 10-12 0v5l-1.5 2.2a.6.6 0 00.5.95h14a.6.6 0 00.5-.95L18 16z" />
            <path d="M10 21a2 2 0 004 0" />
          </svg>
          {notifUnread > 0 && (
            <span style={{
              position: 'absolute', top: 4, right: 2,
              minWidth: 17, height: 17, padding: '0 5px',
              borderRadius: 999, border: '1.5px solid #fff',
              background: '#FF3B6A',
              color: '#fff', fontSize: 10, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
              boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
            }}>{notifUnread}</span>
          )}
        </button>

        {/* 주문내역 */}
        <button aria-label="주문내역" onClick={(e) => window.openOrderHistory && window.openOrderHistory(e.currentTarget)} style={{
          background: '#fff', border: '1px solid rgba(11,31,58,0.14)', cursor: 'pointer',
          padding: '7px 13px', lineHeight: 0, borderRadius: 999,
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7l9-4 9 4-9 4-9-4z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" />
          </svg>
          <span style={{ fontSize: 12.5, fontWeight: 800, color: '#0B1F3A', lineHeight: 1 }}>{(typeof translate==='function')?translate('nav.orders',null,(window.i18nStore&&window.i18nStore.lang)||'ko'):'주문내역'}</span>
        </button>
        {/* 장바구니 — 카운트 배지 */}
        <button aria-label="장바구니 2건" data-cart-icon style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          padding: 8, lineHeight: 0, position: 'relative', borderRadius: 999,
          transition: 'background 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = '#F5F7FA'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
            <path d="M9 11V7a3 3 0 016 0v4" />
          </svg>
          <span style={{
            position: 'absolute', top: 4, right: 2,
            minWidth: 17, height: 17, padding: '0 5px',
            borderRadius: 999, border: '1.5px solid #fff',
            background: '#00B6F0',
            color: '#fff', fontSize: 10, fontWeight: 800,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><span data-cart-count>{(() => { try { return localStorage.getItem('quickMember') ? '2' : '0'; } catch (_) { return '0'; } })()}</span></span>
        </button>
      </div>
    </div>
    </header>
  );
}

function DesktopProfileCard({ onExpand }) {
  const [idx, setIdx] = React.useState(0);
  const total = PROFILE_MEDIA.length;
  const cur = PROFILE_MEDIA[idx];
  const isVideo = cur.type === 'video';
  const go = (d) => setIdx(i => (i + d + total) % total);
  const stop = (fn) => (e) => { e.stopPropagation(); fn(e); };

  return (
    <aside style={{
      width: 380, flexShrink: 0,
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      border: '1px solid rgba(11,31,58,0.08)',
      boxShadow: '0 4px 24px rgba(11,31,58,0.06)',
      position: 'sticky', top: 88,
      alignSelf: 'flex-start',
    }}>
      {/* 미디어 캐러셀 — 클릭 시 전체화면 */}
      <div
        onClick={() => onExpand && onExpand(idx)}
        style={{
          position: 'relative', width: '100%', aspectRatio: '1/1',
          background: '#111', overflow: 'hidden',
          cursor: onExpand ? 'zoom-in' : 'default',
        }}
      >
        {PROFILE_MEDIA.map((m, i) => (
          <div key={m.id} style={{
            position: 'absolute', inset: 0,
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}>
            <img src={m.src} alt={m.caption || ''} style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: m.objectPosition || 'center',
              display: 'block',
            }} />
          </div>
        ))}

        {/* 좌우 비네팅 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, rgba(11,31,58,0.35) 0%, rgba(11,31,58,0) 22%, rgba(11,31,58,0) 78%, rgba(11,31,58,0.35) 100%)',
          pointerEvents: 'none',
        }} />

        {/* 타입 뱃지 */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '5px 10px', borderRadius: 999,
          background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(10px)',
          color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
        }}>
          {isVideo ? (
            <>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#E84141' }} />
              VIDEO · {idx + 1}/{total}
            </>
          ) : (
            <>
              <span style={{ width: 6, height: 6, background: '#5CD3F7', transform: 'rotate(45deg)' }} />
              PHOTO · {idx + 1}/{total}
            </>
          )}
        </div>

        {/* 도트 인디케이터 (10개씩 압축) */}
        <div style={{
          position: 'absolute', top: 16, right: 14, display: 'flex', gap: 3,
        }}>
          {Array.from({ length: Math.min(total, 10) }, (_, i) => {
            const realIdx = Math.floor(i * total / Math.min(total, 10));
            const isCur = realIdx === idx || (i === Math.floor(idx * Math.min(total, 10) / total));
            return (
              <span key={i} style={{
                width: isCur ? 16 : 5, height: 2.5, borderRadius: 2,
                background: isCur ? '#fff' : 'rgba(255,255,255,0.5)',
                transition: 'width 0.2s',
              }} />
            );
          })}
        </div>

        {/* 재생 버튼 */}
        {isVideo && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 999,
              background: 'rgba(11,31,58,0.78)',
              border: '1.5px solid rgba(0,182,240,0.9)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            }}>
              <div style={{ marginLeft: 3 }}>{ProfileIcon.play(28, '#fff')}</div>
            </div>
          </div>
        )}

        {/* 좌/우 화살표 — 캐러셀 내 이동(전체화면 트리거 차단) */}
        <button onClick={stop(() => go(-1))} aria-label="이전" style={arrowBtnDt({ left: 12 })}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button onClick={stop(() => go(1))} aria-label="다음" style={arrowBtnDt({ right: 12 })}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* 우하단 확대 힌트 */}
        {onExpand && (
          <div style={{
            position: 'absolute', bottom: 12, right: 12,
            width: 30, height: 30, borderRadius: 8,
            background: 'rgba(11,31,58,0.55)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
                 strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9" />
              <polyline points="9 21 3 21 3 15" />
              <line x1="21" y1="3" x2="14" y2="10" />
              <line x1="3" y1="21" x2="10" y2="14" />
            </svg>
          </div>
        )}
      </div>

      {/* 정보 영역 */}
      <div style={{ padding: '20px 22px 22px' }}>
        {/* 직급 + SNS */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 8, marginBottom: 14,
        }}>
          <div className="chairman-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 10px 5px 8px', borderRadius: 4,
            background: 'linear-gradient(135deg, #00B6F0 0%, #5CD3F7 50%, #0088B8 100%)',
            color: '#0B1F3A', fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
          }}>
            {ProfileIcon.crown(11, '#0B1F3A')} {PROFILE.rank}
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {SNS.map(s => <SnsIconLink key={s.key} item={s} />)}
          </div>
        </div>

        {/* 이름 */}
        <h1 style={{
          margin: 0, fontSize: 26, lineHeight: 1.15, fontWeight: 800,
          letterSpacing: '-0.02em', color: '#0B1F3A',
        }}>
          {PROFILE.rankKr}<br />
          <span style={{ color: '#00B6F0' }}>{PROFILE.name}</span>
        </h1>

        {/* 시안 디바이더 */}
        <div style={{
          margin: '16px 0 14px', height: 1,
          background: 'linear-gradient(90deg, #00B6F0 0%, rgba(0,182,240,0) 100%)',
        }} />

        {/* 소개글 */}
        <p style={{
          margin: 0, fontSize: 13, lineHeight: 1.65, color: '#2B3A52',
          textWrap: 'pretty',
        }}>
          “{PROFILE.bio}”
        </p>
      </div>
    </aside>
  );
}

function arrowBtnDt(pos) {
  return {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    ...pos,
    width: 36, height: 36, borderRadius: 999,
    background: 'rgba(11,31,58,0.55)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.18)',
    cursor: 'pointer', padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(0,0,0,0.28)',
  };
}

// 호버 시 미리보기 영상이 재생되는 카드
const PREVIEW_VIDEOS = [
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
];

function DesktopShortCard({ short, index, onClick }) {
  const [hover, setHover] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  const [videoFailed, setVideoFailed] = React.useState(false);
  const hoverTimer = React.useRef(null);
  const videoRef = React.useRef(null);
  const previewSrc = PREVIEW_VIDEOS[index % PREVIEW_VIDEOS.length];

  const onEnter = () => {
    setHover(true);
    if (videoFailed) return;
    // 250ms 후 영상 시작 — 의도하지 않은 짧은 호버 무시
    hoverTimer.current = setTimeout(() => setShowVideo(true), 250);
  };
  const onLeave = () => {
    setHover(false);
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    setShowVideo(false);
    const v = videoRef.current;
    if (v) { try { v.pause(); v.currentTime = 0; } catch (_) {} }
  };

  React.useEffect(() => {
    return () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); };
  }, []);

  const s = short;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        animation: `cardFadeUp 0.55s cubic-bezier(.2,.7,.3,1) ${Math.min(index, 18) * 50}ms both`,
      }}
    >
      <div style={{
        position: 'relative', width: '100%', aspectRatio: '9/16',
        borderRadius: 10, overflow: 'hidden',
        background: `linear-gradient(145deg, hsl(${s.hue} 38% 28%), hsl(${s.hue} 30% 14%))`,
        boxShadow: hover ? '0 14px 36px rgba(11,31,58,0.18)' : '0 2px 6px rgba(11,31,58,0.06)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform 0.22s cubic-bezier(.2,.7,.3,1), box-shadow 0.22s',
      }}>
        {/* 제품 이미지 */}
        {s.image && (
          <img
            src={s.image}
            alt={s.product || s.title}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              transform: hover ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
            }}
          />
        )}

        {/* 호버 미리보기 영상 — 위에 페이드 인 */}
        {showVideo && !videoFailed && (
          <video
            ref={videoRef}
            src={previewSrc}
            autoPlay muted loop playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              animation: 'previewFadeIn 0.32s ease both',
            }}
          />
        )}

        {/* 컬러 톤 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(160deg, hsla(${s.hue}, 30%, 20%, 0.12) 0%, hsla(${s.hue}, 30%, 10%, 0.18) 100%)`,
          mixBlendMode: 'multiply',
        }} />
        {/* 하단 그라디언트 */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '60%',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0) 100%)',
        }} />

        {/* 중앙 재생 버튼 — 호버 시 페이드 아웃 (영상이 재생되니 가려짐) */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
          opacity: showVideo ? 0 : 1,
          transition: 'opacity 0.25s ease',
        }}>
          <div style={{
            width: hover ? 68 : 58, height: hover ? 68 : 58,
            borderRadius: 999,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(255,255,255,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 18px rgba(0,0,0,0.45)',
            transition: 'width 0.2s, height 0.2s',
          }}>
            <div style={{ marginLeft: 3 }}>{ProfileIcon.play(hover ? 32 : 26, '#fff')}</div>
          </div>
        </div>

        {/* 플래그 — 좌상단 (개인 / 공식, 아이콘 포함) — PREVIEW 노출 중에는 자리 양보 */}
        {!showVideo && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '4px 9px 4px 7px', borderRadius: 4,
            background: s.flag === '공식' ? '#00B6F0' : 'rgba(245,247,250,0.96)',
            color: s.flag === '공식' ? '#fff' : '#4A5568',
            fontSize: 10.5, fontWeight: 700, letterSpacing: '0.03em',
            border: s.flag === '공식' ? 'none' : '1px solid rgba(11,31,58,0.06)',
            boxShadow: '0 2px 6px rgba(0,0,0,0.14)',
          }}>
            {s.flag === '공식'
              ? NavIcon.shield(11, '#fff', 2.2)
              : NavIcon.person(11, '#4A5568', 2.2)}
            {s.flag}
          </div>
        )}

        {/* 라이브 미리보기 인디케이터 — 영상 재생 중일 때 좌상단 */}
        {showVideo && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '4px 8px', borderRadius: 999,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
            color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em',
            animation: 'previewFadeIn 0.32s ease both',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: 999, background: '#FF3B6A',
              animation: 'pulseDot 1.6s ease-in-out infinite',
            }} />
            PREVIEW
          </div>
        )}

        {/* duration */}
        <div style={{
          position: 'absolute', top: 10, right: 10,
          padding: '4px 8px', borderRadius: 5,
          background: 'rgba(0,0,0,0.6)',
          color: '#fff', fontSize: 11.5, fontWeight: 700,
          fontVariantNumeric: 'tabular-nums',
        }}>{s.duration}</div>

        {/* 제목 + 메타 */}
        <div style={{
          position: 'absolute', left: 12, right: 12, bottom: 12,
          color: '#fff',
        }}>
          <div style={{
            fontSize: 14, fontWeight: 700, lineHeight: 1.3,
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
            overflow: 'hidden', textShadow: '0 1px 3px rgba(0,0,0,0.5)',
          }}>{s.title}</div>
          <div style={{
            marginTop: 6, display: 'flex', gap: 8,
            fontSize: 11.5, fontWeight: 600, color: 'rgba(255,255,255,0.88)',
            fontVariantNumeric: 'tabular-nums',
          }}>
            <span>▶ {s.views}</span>
            <span style={{ opacity: 0.45 }}>·</span>
            <span>♥ {s.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopShortsGrid({ onPlay, filteredShorts, tab, setTab, flagFilter, setFlagFilter, clipSort = 'reco', setClipSort = () => {} }) {
  const { t } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k };
  const [hoverId, setHoverId] = React.useState(null);

  const tabs = [
    { key: 'all',      label: t('shorts.tab_all') },
    { key: 'product',  label: t('shorts.tab_routine') },
    { key: 'company',  label: t('shorts.tab_review') },
    { key: 'business', label: t('shorts.tab_business') },
    { key: 'life',     label: t('shorts.tab_life') },
  ];

  return (
    <main style={{ flex: 1 }}>
      {/* 섹션 헤더 */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <div>
          <div style={{
            fontSize: 11, letterSpacing: '0.22em', color: '#2A8AB0', fontWeight: 800,
          }}>SUCCESS CLIPS</div>
          <h2 style={{
            margin: '6px 0 0', fontSize: 26, fontWeight: 800,
            letterSpacing: '-0.02em', color: '#0B1F3A',
          }}>
            {PROFILE.name}의 석세스클립
            <span style={{
              marginLeft: 10, fontSize: 14, color: '#6B7A90', fontWeight: 600,
              fontVariantNumeric: 'tabular-nums',
            }}>· {filteredShorts.length}개</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
          {/* 카테고리 탭 */}
          <div style={{ display: 'flex', gap: 4, padding: 4, background: '#fff', borderRadius: 10, border: '1px solid rgba(11,31,58,0.08)' }}>
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                padding: '7px 14px', borderRadius: 7, border: 'none',
                background: tab === t.key ? '#0B1F3A' : 'transparent',
                color: tab === t.key ? '#fff' : '#6B7A90',
                fontSize: 12.5, fontWeight: tab === t.key ? 800 : 600,
                cursor: 'pointer', letterSpacing: '-0.01em',
              }}>{t.label}</button>
            ))}
          </div>

          {/* 채널 플래그 토글 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              fontSize: 11, color: '#8A97AD', fontWeight: 700,
              letterSpacing: '0.06em', marginRight: 2,
            }}>채널</span>
            {[
              { key: 'all',      label: '전체',   icon: null },
              { key: 'official', label: '공식만', icon: 'shield' },
              { key: 'personal', label: '개인만', icon: 'person' },
            ].map(f => {
              const isActive = flagFilter === f.key;
              const isOfficial = f.key === 'official';
              return (
                <button
                  key={f.key}
                  onClick={() => setFlagFilter(f.key)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '5px 11px 5px 9px', borderRadius: 999,
                    background: isActive
                      ? (isOfficial ? '#00B6F0' : '#0B1F3A')
                      : '#fff',
                    border: isActive ? 'none' : '1px solid rgba(11,31,58,0.1)',
                    color: isActive ? '#fff' : '#4A5568',
                    fontSize: 11.5, fontWeight: 700, letterSpacing: '-0.01em',
                    cursor: 'pointer',
                    transition: 'background 0.15s',
                  }}
                >
                  {f.icon === 'shield' && NavIcon.shield(11, isActive ? '#fff' : '#00B6F0', 2.4)}
                  {f.icon === 'person' && NavIcon.person(11, isActive ? '#fff' : '#4A5568', 2.4)}
                  {f.label}
                </button>
              );
            })}
            {/* 정렬 드롭다운 */}
            <div style={{ position: 'relative', marginLeft: 6 }}>
              <select
                value={clipSort}
                onChange={(e) => setClipSort(e.target.value)}
                aria-label="정렬"
                style={{
                  appearance: 'none', WebkitAppearance: 'none',
                  padding: '6px 24px 6px 12px', borderRadius: 999,
                  border: '1px solid rgba(11,31,58,0.1)', background: '#fff',
                  fontSize: 11.5, fontWeight: 700, color: '#4A5568',
                  fontFamily: 'inherit', cursor: 'pointer', outline: 'none',
                }}
              >
                <option value="reco">{t('sort.reco')}</option>
                <option value="new">{t('sort.new')}</option>
                <option value="views">{t('sort.views')}</option>
                <option value="likes">{t('sort.likes')}</option>
              </select>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#8A97AD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                   style={{ position: 'absolute', right: 9, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 그리드 — 4열 (카드 더 크게, 호버 시 미리보기 영상 재생) */}
      {filteredShorts.length === 0 ? (
        <div style={{
          padding: '80px 24px', textAlign: 'center',
          color: '#8A97AD', fontSize: 14, fontWeight: 600,
          background: '#fff', borderRadius: 16,
          border: '1px solid rgba(11,31,58,0.06)',
        }}>
          이 카테고리의 클립이 아직 없어요
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}>
          {filteredShorts.map((s, i) => (
            <DesktopShortCard
              key={s.id}
              short={s}
              index={i}
              onClick={() => onPlay && onPlay(i)}
            />
          ))}
        </div>
      )}

      {/* 더 불러오기 */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <button style={{
          padding: '12px 28px', borderRadius: 999,
          background: '#fff', border: '1px solid rgba(11,31,58,0.15)',
          color: '#0B1F3A', fontSize: 13, fontWeight: 700, cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(11,31,58,0.04)',
        }}>
          더 불러오기 ↓
        </button>
      </div>
    </main>
  );
}

function VariationDesktop() {
  const [viewerIdx, setViewerIdx] = React.useState(null);
  const [playerIdx, setPlayerIdx] = React.useState(null);
  const [tab, setTab] = React.useState('all');
  const [flagFilter, setFlagFilter] = React.useState('all');
  const [clipSort, setClipSort] = React.useState('reco');
  const [notifOpen, setNotifOpen] = React.useState(false);

  // 라우팅 — 현재 페이지
  const [currentPage, setCurrentPage] = React.useState('shorts'); // 'shorts' | 'shop' | 'life' | 'about'
  const [shopProduct, setShopProduct] = React.useState(null); // 제품 상세 페이지로 진입했을 때
  const [searchOpen, setSearchOpen] = React.useState(null);
  const [productVideo, setProductVideo] = React.useState(null); // 상품상세에서 영상 풀스크린

  const rootRef = React.useRef(null);

  // 가장 가까운 스크롤 가능한 부모를 찾아 0으로
  const scrollContainerTop = React.useCallback(() => {
    if (!rootRef.current) return;
    let el = rootRef.current;
    while (el) {
      if (el.scrollHeight > el.clientHeight && el.scrollTop > 0) {
        el.scrollTop = 0;
      }
      el = el.parentElement;
    }
  }, []);

  // 페이지 변경/상세 진입·이탈 시 상단으로
  React.useEffect(() => { scrollContainerTop(); }, [currentPage, scrollContainerTop]);
  React.useEffect(() => { scrollContainerTop(); }, [shopProduct, scrollContainerTop]);

  // 상품 상세페이지 진입 시 body 플래그 → 어시스턴트 플로팅 숨김
  React.useEffect(() => {
    const inDetail = currentPage === 'shop' && !!shopProduct;
    document.body.classList.toggle('in-product-detail', inDetail);
    document.body.classList.toggle('atomy-shop-active', currentPage === 'shop');
    return () => document.body.classList.remove('in-product-detail');
  }, [currentPage, shopProduct]);

  // 페이지 변경 시 상단으로 스크롤 + 상세 초기화
  const goPage = (key) => {
    setCurrentPage(key);
    setShopProduct(null);
    // 페이지 이동 시 재생 중인 미디어 정리 — 소리 잔류 방지
    setPlayerIdx(null);
    if (typeof setProductVideo === 'function') setProductVideo(null);
    try {
      document.querySelectorAll('video, audio').forEach(v => { if (!v.muted && !v.paused) { try { v.pause(); } catch (_) {} } });
    } catch (_) {}
    scrollContainerTop();
  };

  // 알림 CTA → 기기별 페이지 이동 (루트에서만 수신)
  React.useEffect(() => {
    const el = rootRef.current; if (!el) return;
    const h = (e) => { const pg = e.detail && e.detail.page; if (pg) goPage(pg); };
    el.addEventListener('atomy-go-page', h);
    return () => el.removeEventListener('atomy-go-page', h);
  }, []);
  const filteredShorts = React.useMemo(() => {
    let r = SHORTS;
    if (tab !== 'all') r = r.filter(s => s.category === tab);
    if (flagFilter === 'official') r = r.filter(s => s.flag === '공식');
    else if (flagFilter === 'personal') r = r.filter(s => s.flag === '개인');
    const num = (v) => { const s = String(v || '0'); return s.endsWith('K') ? parseFloat(s) * 1000 : parseFloat(s) || 0; };
    if (clipSort === 'new') r = r.slice().sort((a, b) => (parseInt(b.id, 10) || 0) - (parseInt(a.id, 10) || 0));
    else if (clipSort === 'views') r = r.slice().sort((a, b) => num(b.views) - num(a.views));
    else if (clipSort === 'likes') r = r.slice().sort((a, b) => num(b.likes) - num(a.likes));
    return r;
  }, [tab, flagFilter, clipSort]);

  return (
    <div ref={rootRef} style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F2EA',
      minHeight: '100%',
      color: '#0B1F3A',
      position: 'relative',
    }}>
      <DesktopHeader
        notifOpen={notifOpen}
        onToggleNotif={() => setNotifOpen(o => !o)}
        onNavClick={goPage}
        currentPage={currentPage}
        onOpenSearch={(el) => setSearchOpen(el)}
      />
      {searchOpen && (() => {
        const GSO = window.GlobalSearchOverlay;
        return GSO ? (
          <GSO
            anchorEl={searchOpen}
            onClose={() => setSearchOpen(null)}
            onProduct={(p) => { setSearchOpen(null); setCurrentPage('shop'); setShopProduct(p); }}
            onClips={() => { setSearchOpen(null); setCurrentPage('shorts'); }}
          />
        ) : null;
      })()}

      {window.ScrollNav && <window.ScrollNav isMobile={false} />}

      {/* 알림 드롭다운 */}
      <NotificationPopup
        open={notifOpen}
        onClose={() => setNotifOpen(false)}
        anchorRight={86}
        anchorTop={88}
        isMobile={false}
      />

      {/* 본문 — 페이지에 따라 전환 */}
      {currentPage === 'shorts' && (
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '32px 36px 60px',
          display: 'flex', gap: 36,
          alignItems: 'flex-start',
        }}>
          <DesktopProfileCard onExpand={(i) => setViewerIdx(i)} />
          <DesktopShortsGrid
            onPlay={(i) => setPlayerIdx(i)}
            filteredShorts={filteredShorts}
            tab={tab}
            setTab={setTab}
            flagFilter={flagFilter}
            setFlagFilter={setFlagFilter}
            clipSort={clipSort}
            setClipSort={setClipSort}
          />
        </div>
      )}

      {currentPage === 'shop' && (
        shopProduct ? (
          shopProduct.id === '000017' ? (
            <HemohimShotDetail
              product={HEMOHIM_DETAIL}
              isMobile={false}
              onClose={() => setShopProduct(null)}
              onPlayVideo={setProductVideo}
            />
          ) : (
            <AtomyProductDetail
              product={shopProduct}
              isMobile={false}
              onClose={() => setShopProduct(null)}
              onPlayVideo={setProductVideo}
            />
          )
        ) : (
          <AtomyShop
            isMobile={false}
            onSelectProduct={(p) => setShopProduct(p)}
          />
        )
      )}

      {/* 상품상세 영상 풀스크린 모달 */}
      {productVideo && (
        <AboutVideoModal
          video={productVideo}
          onClose={() => setProductVideo(null)}
        />
      )}

      {currentPage === 'life' && (
        <AtomyLife isMobile={false} onPlay={setProductVideo} />
      )}

      {currentPage === 'about' && (
        <AtomyAbout isMobile={false} onPlay={setProductVideo} />
      )}

      {/* 전체화면 미디어 뷰어 (석세스클립 페이지에서만) */}
      {currentPage === 'shorts' && viewerIdx !== null && (
        <ProfileMediaViewer
          items={PROFILE_MEDIA}
          startIdx={viewerIdx}
          onClose={() => setViewerIdx(null)}
          fixedToScrollContainer={true}
        />
      )}

      {/* 전체화면 숏폼 플레이어 */}
      {currentPage === 'shorts' && playerIdx !== null && (
        <ShortsPlayer
          shorts={filteredShorts}
          startIdx={playerIdx}
          onClose={() => setPlayerIdx(null)}
          showSidePanels={true}
          fixedToScrollContainer={true}
          onProductClick={(ad) => {
            // 광고 클릭 시 제품구매 페이지의 헤모힘 샷 상세로 이동
            setShopProduct({ id: '000017' });
            setCurrentPage('shop');
          }}
        />
      )}

    </div>
  );
}

// 애터미소개 페이지 풀스크린 오버레이 — 닫기 버튼 + 자체 스크롤
function AboutOverlay({ isMobile, onClose }) {
  const [playingVideo, setPlayingVideo] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (playingVideo) setPlayingVideo(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, playingVideo]);

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 60,
      background: '#fff',
      animation: 'aboutSlideIn 0.32s cubic-bezier(.2,.7,.3,1) both',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* 상단 닫기 바 */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        height: isMobile ? 48 : 56,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(11,31,58,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 14px' : '0 24px',
        flexShrink: 0,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: isMobile ? 12 : 13.5, fontWeight: 800,
          color: '#0B1F3A', letterSpacing: '-0.01em',
        }}>
          {NavIcon.info(isMobile ? 16 : 18, '#00B6F0', 2)}
          애터미소개
        </div>
        <button onClick={onClose} aria-label="닫기" style={{
          width: isMobile ? 30 : 34, height: isMobile ? 30 : 34, borderRadius: 999,
          border: 'none', background: 'rgba(11,31,58,0.06)',
          cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(11,31,58,0.12)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(11,31,58,0.06)'}>
          <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16}
               viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* 본문 — 자체 스크롤, 콘텐츠가 짧으면 AtomyAbout가 빈 공간을 채움 */}
      <div className="phone-scroll" style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          minHeight: '100%',
          display: 'flex', flexDirection: 'column',
        }}>
          <AtomyAbout isMobile={isMobile} onPlay={setPlayingVideo} />
        </div>
      </div>

      {/* 우측 하단 플로팅 백조 — 영상 모달이 안 떠있을 때만 노출 */}
      {!playingVideo && (
        <ChatFloating
          size={isMobile ? 'mobile' : 'desktop'}
          bottom={isMobile ? 24 : 36}
          right={isMobile ? 12 : 28}
        />
      )}

      {/* 영상 풀스크린 모달 — AboutOverlay 레벨 (보이는 영역 전체 덮음) */}
      {playingVideo && (
        <AboutVideoModal
          video={playingVideo}
          onClose={() => setPlayingVideo(null)}
        />
      )}
    </div>
  );
}

// 인생시나리오 페이지 풀스크린 오버레이 — AboutOverlay와 동일 구조
function LifeOverlay({ isMobile, onClose }) {
  const [playingVideo, setPlayingVideo] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (playingVideo) setPlayingVideo(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, playingVideo]);

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 60,
      background: '#fff',
      animation: 'aboutSlideIn 0.32s cubic-bezier(.2,.7,.3,1) both',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* 상단 닫기 바 */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        height: isMobile ? 48 : 56,
        background: 'rgba(255,255,255,0.96)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(11,31,58,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: isMobile ? '0 14px' : '0 24px',
        flexShrink: 0,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: isMobile ? 12 : 13.5, fontWeight: 800,
          color: '#0B1F3A', letterSpacing: '-0.01em',
        }}>
          {NavIcon.dharma(isMobile ? 16 : 18, '#00B6F0', 1.6)}
          인생시나리오
        </div>
        <button onClick={onClose} aria-label="닫기" style={{
          width: isMobile ? 30 : 34, height: isMobile ? 30 : 34, borderRadius: 999,
          border: 'none', background: 'rgba(11,31,58,0.06)',
          cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(11,31,58,0.12)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(11,31,58,0.06)'}>
          <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16}
               viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* 본문 — 자체 스크롤 */}
      <div className="phone-scroll" style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          minHeight: '100%',
          display: 'flex', flexDirection: 'column',
        }}>
          <AtomyLife
            isMobile={isMobile}
            onPlay={setPlayingVideo}
          />
        </div>
      </div>

      {/* 우측 하단 플로팅 백조 */}
      {!playingVideo && (
        <ChatFloating
          size={isMobile ? 'mobile' : 'desktop'}
          bottom={isMobile ? 24 : 36}
          right={isMobile ? 12 : 28}
        />
      )}

      {/* 영상 풀스크린 모달 (AI 자동 생성 영상 클릭 시) */}
      {playingVideo && (
        <AboutVideoModal
          video={playingVideo}
          onClose={() => setPlayingVideo(null)}
        />
      )}

    </div>
  );
}

// 제품구매 메뉴 풀스크린 오버레이 — 메인 + 상세 페이지 전환
function ShopOverlay({ isMobile, onClose, onPlayVideo }) {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const scrollRef = React.useRef(null);

  // 상세 진입/이탈 시 스크롤 최상단으로
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [selectedProduct]);

  // 상세 진입 시 어시스턴트 숨김
  React.useEffect(() => {
    document.body.classList.toggle('in-product-detail', !!selectedProduct);
    return () => document.body.classList.remove('in-product-detail');
  }, [selectedProduct]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (selectedProduct) setSelectedProduct(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, selectedProduct]);

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 60,
      background: '#fff',
      animation: 'aboutSlideIn 0.32s cubic-bezier(.2,.7,.3,1) both',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* 상단 닫기 바 — 메인 페이지일 때만 (상세는 자체 닫기 바를 가짐) */}
      {!selectedProduct && (
        <div style={{
          position: 'sticky', top: 0, zIndex: 5,
          height: isMobile ? 48 : 56,
          background: 'rgba(255,255,255,0.96)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(11,31,58,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '0 14px' : '0 24px',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: isMobile ? 12 : 13.5, fontWeight: 800,
            color: '#0B1F3A', letterSpacing: '-0.01em',
          }}>
            {NavIcon.shop(isMobile ? 16 : 18, '#00B6F0', 1.8)}
            제품구매
          </div>
          <button onClick={onClose} aria-label="닫기" style={{
            width: isMobile ? 30 : 34, height: isMobile ? 30 : 34, borderRadius: 999,
            border: 'none', background: 'rgba(11,31,58,0.06)',
            cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width={isMobile ? 14 : 16} height={isMobile ? 14 : 16}
                 viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                 strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}

      {/* 본문 — 메인 또는 상세 페이지 */}
      <div ref={scrollRef} className="phone-scroll" style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        position: 'relative',
      }}>
        {selectedProduct ? (
          selectedProduct.id === '000017' ? (
            <HemohimShotDetail product={HEMOHIM_DETAIL} isMobile={isMobile} onClose={() => setSelectedProduct(null)} onPlayVideo={onPlayVideo} />
          ) : selectedProduct.id === '000168' ? (
            <HemohimDetail product={selectedProduct} isMobile={isMobile} onClose={() => setSelectedProduct(null)} />
          ) : selectedProduct.id === '000605' ? (
            <AtomyProductDetail product={HERBAL_SHAMPOO_DETAIL} isMobile={isMobile} onClose={() => setSelectedProduct(null)} />
          ) : selectedProduct.id === '000460' ? (
            <LipTreatmentDetail product={selectedProduct} isMobile={isMobile} onClose={() => setSelectedProduct(null)} />
          ) : (
            <AtomyProductDetail product={selectedProduct} isMobile={isMobile} onClose={() => setSelectedProduct(null)} />
          )
        ) : (
          <AtomyShop
            isMobile={isMobile}
            onSelectProduct={(p) => {
              // 헤모힘 샷만 상세 페이지로 (다른 제품은 alert 등으로 대체)
              if (p.detail || p.id === '000017') {
                setSelectedProduct(p);
              } else {
                // 상세 없는 제품은 일단 클릭 무반응 또는 동일 모달로 대체 가능
                // 여기서는 모든 제품 클릭 시 상세 모달 열기 (헤모힘 샷 데이터 표시)
                setSelectedProduct(p);
              }
            }}
          />
        )}
      </div>

      {/* 우측 하단 플로팅 백조 */}
      <ChatFloating
        size={isMobile ? 'mobile' : 'desktop'}
        bottom={isMobile ? 24 : 36}
        right={isMobile ? 12 : 28}
      />
    </div>
  );
}

Object.assign(window, { VariationDesktop, AboutOverlay, LifeOverlay, ShopOverlay });
