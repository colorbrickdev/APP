
// BrowserWindow.jsx — Chrome-style browser window frame
// Exports: BrowserWindow

function BrowserWindow({
  children,
  url = 'https://example.com',
  title = '',
  dark = false,
  width = 1280,
  height = 800,
  showTabs = true,
  style = {},
}) {
  const chrome = dark ? '#292929' : '#DEE1E6';
  const tab = dark ? '#1F1F1F' : '#fff';
  const text = dark ? '#E8EAED' : '#202124';
  const border = dark ? '#3C4043' : '#DADCE0';
  const urlBar = dark ? '#35363A' : '#F1F3F4';

  return (
    <div style={{
      width, height, borderRadius: 12, overflow: 'hidden',
      boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
      border: `1px solid ${border}`,
      display: 'flex', flexDirection: 'column',
      ...style,
    }}>
      {/* Title bar with traffic lights */}
      <div style={{
        background: chrome, padding: '8px 12px',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFBD2E' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28C840' }} />
        </div>
        {showTabs && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 2, marginLeft: 12, flex: 1,
          }}>
            <div style={{
              background: tab, padding: '6px 16px', borderRadius: '8px 8px 0 0',
              fontSize: 12, color: text, fontFamily: 'system-ui',
              maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {title || url.replace(/^https?:\/\//, '').split('/')[0]}
            </div>
            <div style={{
              padding: '6px 10px', fontSize: 18, color: text, opacity: 0.5,
              cursor: 'pointer', lineHeight: 1,
            }}>+</div>
          </div>
        )}
      </div>

      {/* URL bar */}
      <div style={{
        background: tab, padding: '4px 12px 8px',
        display: 'flex', alignItems: 'center', gap: 8,
        borderBottom: `1px solid ${border}`,
      }}>
        <div style={{ display: 'flex', gap: 8, opacity: 0.5 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={text}><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={text}><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={text}><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
        </div>
        <div style={{
          flex: 1, background: urlBar, borderRadius: 20,
          padding: '6px 12px', fontSize: 13, color: text,
          fontFamily: 'system-ui', overflow: 'hidden',
          textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={text} opacity="0.5"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
          {url}
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1, minHeight: 0, overflow: 'auto', background: dark ? '#1F1F1F' : '#fff',
        position: 'relative',
      }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { BrowserWindow });
