
// AndroidFrame.jsx — Material 3 Android device frame
// Exports: AndroidDevice, AndroidStatusBar, AndroidNavBar

function AndroidStatusBar({ dark = false, time = '9:41' }) {
  const c = dark ? '#fff' : '#1C1B1F';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 16px 8px 24px', boxSizing: 'border-box',
      position: 'relative', zIndex: 20, width: '100%', height: 40,
    }}>
      <span style={{
        fontFamily: '"Google Sans", "Roboto", system-ui', fontWeight: 500,
        fontSize: 14, lineHeight: '20px', color: c,
      }}>{time}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill={c}>
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
        </svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill={c}>
          <path d="M2 22h20V2z" opacity="0.3"/><path d="M2 22h20V2L2 22zm18-2H6.83L20 6.83V20z"/>
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12">
          <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="17" height="8" rx="1.5" fill={c}/>
          <rect x="22" y="3" width="2" height="6" rx="1" fill={c} fillOpacity="0.4"/>
        </svg>
      </div>
    </div>
  );
}

function AndroidNavBar({ dark = false }) {
  const c = dark ? '#ffffff' : '#1C1B1F';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '8px 0 6px', width: '100%', position: 'relative', zIndex: 20,
    }}>
      <div style={{
        width: 134, height: 5, borderRadius: 100, background: c, opacity: 0.4,
      }} />
    </div>
  );
}

function AndroidDevice({
  children,
  dark = false,
  width = 393,
  height = 852,
  showStatusBar = true,
  showNavBar = true,
  time,
  style = {},
}) {
  const bg = dark ? '#1C1B1F' : '#FFFBFE';
  return (
    <div style={{
      width, height,
      borderRadius: 40,
      border: '8px solid #2C2C2E',
      background: bg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      ...style,
    }}>
      {showStatusBar && <AndroidStatusBar dark={dark} time={time} />}
      <div style={{
        flex: 1, overflow: 'auto', position: 'relative',
        display: 'flex', flexDirection: 'column',
      }}>
        {children}
      </div>
      {showNavBar && <AndroidNavBar dark={dark} />}
    </div>
  );
}

Object.assign(window, { AndroidDevice, AndroidStatusBar, AndroidNavBar });
