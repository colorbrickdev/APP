// ShortsThumbnail.jsx — generative placeholder thumbnails for the shorts feed
// Uses CSS gradients + SVG to fake cinematic thumbs without real images.

function ShortsThumb({ short, theme = 'classic', radius = 10 }) {
  const { hue, tone, duration, title, views } = short;

  const bg = (() => {
    if (tone === 'dark') {
      return `radial-gradient(120% 80% at 30% 20%, hsl(${hue} 55% 38%) 0%, hsl(${hue} 60% 14%) 60%, hsl(${hue} 70% 6%) 100%)`;
    }
    if (tone === 'warm') {
      return `radial-gradient(120% 80% at 70% 25%, hsl(${hue} 80% 70%) 0%, hsl(${hue} 60% 45%) 55%, hsl(${hue} 55% 22%) 100%)`;
    }
    return `radial-gradient(120% 80% at 50% 30%, hsl(${hue} 50% 85%) 0%, hsl(${hue} 40% 60%) 60%, hsl(${hue} 45% 35%) 100%)`;
  })();

  const stroke = theme === 'brutalist' ? '1px solid rgba(229,204,135,0.45)' : '1px solid rgba(255,255,255,0.08)';
  const durColor = theme === 'brutalist' ? '#E5CC87' : '#fff';

  return (
    <div style={{
      position: 'relative',
      aspectRatio: '9/14',
      background: bg,
      borderRadius: theme === 'brutalist' ? 0 : radius,
      overflow: 'hidden',
      border: stroke,
      cursor: 'pointer',
    }}>
      {/* soft top light */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 30%, rgba(0,0,0,0.55) 100%)',
      }} />

      {/* abstract silhouette */}
      <svg viewBox="0 0 100 140" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id={`g${short.id}`} cx="50%" cy="35%" r="45%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="45" r="22" fill={`url(#g${short.id})`} />
        <ellipse cx="50" cy="120" rx="38" ry="28" fill="rgba(0,0,0,0.25)" />
        <circle cx="50" cy="52" r="14" fill="rgba(0,0,0,0.2)" />
      </svg>

      {/* duration pill */}
      <div style={{
        position: 'absolute', top: 6, right: 6,
        padding: '2px 6px',
        background: theme === 'brutalist' ? 'rgba(11,31,58,0.85)' : 'rgba(0,0,0,0.6)',
        color: durColor,
        fontSize: 9, fontWeight: 700, letterSpacing: '0.04em',
        borderRadius: theme === 'brutalist' ? 0 : 4,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {duration}
      </div>

      {/* play glyph */}
      <div style={{
        position: 'absolute', top: 8, left: 8,
        width: 18, height: 18, borderRadius: 999,
        background: 'rgba(255,255,255,0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="#0B1F3A" style={{ marginLeft: 1 }}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      {/* bottom caption */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '10px 8px 8px',
        color: '#fff',
      }}>
        <div style={{
          fontSize: 10.5, fontWeight: 700, lineHeight: 1.25,
          letterSpacing: '-0.01em',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', textOverflow: 'ellipsis',
          textShadow: '0 1px 2px rgba(0,0,0,0.5)',
        }}>
          {title}
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4, marginTop: 4,
          fontSize: 9, color: 'rgba(255,255,255,0.85)', fontWeight: 500,
        }}>
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8z" />
          </svg>
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{views}</span>
        </div>
      </div>
    </div>
  );
}

function ShortsFeed({ theme = 'classic', accent = '#0B1F3A', gold = '#C9A961', labelColor = '#0B1F3A', subColor = '#6B7A90', bg = 'transparent' }) {
  const [tab, setTab] = React.useState('recent');
  const tabs = [
    { k: 'recent', label: '최신' },
    { k: 'popular', label: '인기' },
    { k: 'pinned', label: '고정' },
  ];

  const frameStyle = theme === 'brutalist'
    ? { background: 'transparent', padding: '0 14px 20px' }
    : { background: bg, padding: '0 16px 22px' };

  return (
    <div style={frameStyle}>
      {/* section header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        padding: theme === 'brutalist' ? '18px 0 10px' : '22px 0 12px',
        borderBottom: theme === 'brutalist' ? '1px solid rgba(201,169,97,0.3)' : `1px solid ${gold}22`,
      }}>
        <div>
          <div style={{
            fontSize: 10, letterSpacing: '0.2em', color: gold, fontWeight: 700,
          }}>
            SHORTS
          </div>
          <div style={{
            fontSize: 17, fontWeight: 800, color: labelColor, marginTop: 2,
            letterSpacing: '-0.02em',
          }}>
            업로드한 숏폼 <span style={{ color: subColor, fontWeight: 600 }}>· 24</span>
          </div>
        </div>
        <button style={{
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
          color: subColor, fontSize: 11, fontWeight: 600, letterSpacing: '0.02em',
        }}>
          전체보기 →
        </button>
      </div>

      {/* tabs */}
      <div style={{ display: 'flex', gap: 6, padding: '12px 0 14px' }}>
        {tabs.map(t => {
          const active = tab === t.k;
          return (
            <button key={t.k} onClick={() => setTab(t.k)} style={{
              padding: '6px 12px',
              borderRadius: theme === 'brutalist' ? 0 : 999,
              background: active ? accent : 'transparent',
              color: active ? (theme === 'brutalist' ? gold : '#fff') : subColor,
              border: theme === 'brutalist'
                ? `1px solid ${active ? gold : 'rgba(201,169,97,0.3)'}`
                : active ? 'none' : `1px solid ${gold}44`,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.02em',
              cursor: 'pointer',
            }}>
              {t.label}
            </button>
          );
        })}
      </div>

      {/* grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme === 'brutalist' ? 4 : 8,
      }}>
        {SHORTS.map(s => <ShortsThumb key={s.id} short={s} theme={theme} />)}
      </div>
    </div>
  );
}

Object.assign(window, { ShortsThumb, ShortsFeed });
