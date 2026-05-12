// LanguageSwitcher.jsx — 지구본 + 언어명 + 드롭다운으로 언어 선택
// 모바일·PC 공용

const LANGUAGES = [
  { code: 'ko', label: '한국어',  english: 'Korean'   },
  { code: 'en', label: 'ENGLISH', english: 'English'  },
  { code: 'ja', label: '日本語',   english: 'Japanese' },
  { code: 'zh', label: '中文',     english: 'Chinese'  },
];

function LanguageSwitcher({ size = 'desktop' }) {
  const { lang, setLang } = (typeof useTranslation === 'function')
    ? useTranslation()
    : { lang: 'ko', setLang: () => {} };
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef(null);
  const isMobile = size === 'mobile';

  const cur = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  // 외부 클릭 닫기
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    let raf = requestAnimationFrame(() => document.addEventListener('mousedown', onDoc));
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousedown', onDoc);
    };
  }, [open]);

  // ESC 닫기
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // 사이즈 셋
  const triggerFontSize = isMobile ? 10.5 : 12;
  const iconSize = isMobile ? 12 : 15;
  const triggerPadding = isMobile ? '4px 8px' : '6px 10px';
  const dropdownWidth = isMobile ? 140 : 160;

  return (
    <div ref={wrapRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger */}
      <button
        aria-label="언어 변경"
        aria-expanded={open}
        onClick={(e) => { e.stopPropagation(); setOpen(o => !o); }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: isMobile ? 4 : 6,
          padding: triggerPadding, borderRadius: 999,
          background: open ? '#F5F7FA' : 'transparent',
          border: '1px solid rgba(11,31,58,0.12)',
          color: '#0B1F3A', fontSize: triggerFontSize, fontWeight: 700,
          cursor: 'pointer', letterSpacing: '-0.01em',
          transition: 'background 0.15s',
        }}
      >
        {NavIcon.globe(iconSize, '#0B1F3A', isMobile ? 2 : 1.8)}
        <span>{cur.label}</span>
        <svg width={isMobile ? 8 : 10} height={isMobile ? 8 : 10}
             viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
             style={{
               transform: open ? 'rotate(180deg)' : 'rotate(0)',
               transition: 'transform 0.18s',
             }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* 드롭다운 */}
      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: 0,
          width: dropdownWidth,
          background: '#fff',
          borderRadius: 10,
          boxShadow: '0 12px 28px rgba(11,31,58,0.18), 0 0 0 1px rgba(11,31,58,0.06)',
          overflow: 'hidden',
          zIndex: 50,
          animation: 'notifSlideDown 0.18s cubic-bezier(.2,.7,.3,1) both',
        }}>
          {LANGUAGES.map(l => {
            const isActive = l.code === lang;
            return (
              <button
                key={l.code}
                onClick={(e) => {
                  e.stopPropagation();
                  setLang(l.code);
                  setOpen(false);
                  // 언어 변경 토스트
                  try {
                    if (typeof window.showToast === 'function') {
                      const msgs = { ko: '언어가 변경되었습니다', en: 'Language changed', ja: '言語が変更されました', zh: '语言已更改' };
                      window.showToast(msgs[l.code] || msgs.en, 'info');
                    }
                  } catch {}
                }}
                style={{
                  width: '100%', padding: '10px 14px',
                  background: isActive ? 'rgba(0,182,240,0.08)' : 'transparent',
                  border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  fontSize: isMobile ? 12 : 13,
                  fontWeight: isActive ? 800 : 600,
                  color: isActive ? '#0088B8' : '#0B1F3A',
                  letterSpacing: '-0.01em',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = '#F5F7FA';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span>{l.label}</span>
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                       stroke="#00B6F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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

Object.assign(window, { LanguageSwitcher, LANGUAGES });
