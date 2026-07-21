// Icons.jsx — shared SVG icons for the profile variations

const ProfileIcon = {
  play: (size = 24, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M8 5v14l11-7z" />
    </svg>
  ),
  pause: (size = 16, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  ),
  instagram: (size = 20, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
    </svg>
  ),
  youtube: (size = 20, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M21.6 7.2a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 001.76-1.77A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z" />
    </svg>
  ),
  kakao: (size = 20, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 3C6.48 3 2 6.58 2 11c0 2.8 1.83 5.26 4.6 6.68-.2.7-.72 2.58-.82 2.98-.13.5.18.5.38.36.16-.1 2.52-1.7 3.53-2.4.76.11 1.53.18 2.31.18 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
    </svg>
  ),
  facebook: (size = 20, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.93.26-1.56 1.6-1.56H16.7V3.27C16.4 3.23 15.4 3.13 14.2 3.13c-2.5 0-4.2 1.52-4.2 4.3v2.37H7.3V13h2.7v8h3.5z" />
    </svg>
  ),
  blog: (size = 20, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  ),
  tiktok: (size = 20, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M19 8.5a6.5 6.5 0 01-4-1.37V15a5.5 5.5 0 11-5.5-5.5c.17 0 .34 0 .5.03v2.8a2.7 2.7 0 102 2.62V2h2.7a4.5 4.5 0 004.3 3.8v2.7z" />
    </svg>
  ),
  diamond: (size = 14, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M6 3h12l3 5-9 13L3 8l3-5zm2 2l-2 3 6 9 6-9-2-3H8z" />
    </svg>
  ),
  crown: (size = 14, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M2 8l4 3 6-7 6 7 4-3-2 11H4L2 8zm3.2 9h13.6l1.1-5.9-2.2 1.6L12 4.8 6.3 12.7 4.1 11.1 5.2 17z" />
    </svg>
  ),
  heart: (size = 12, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  ),
  eye: (size = 12, color = '#fff') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 5c-5 0-9 4.5-10 7 1 2.5 5 7 10 7s9-4.5 10-7c-1-2.5-5-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  ),
};

// 푸터 네비게이션 아이콘들 (라인 스타일)
const NavIcon = {
  // 홈 — 집 아웃라인
  home: (size = 22, color = '#0B1F3A', stroke = 1.8) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11.2L12 4l9 7.2V20a1.5 1.5 0 01-1.5 1.5H15v-6.2h-6v6.2H4.5A1.5 1.5 0 013 20v-8.8z" />
    </svg>
  ),
  // 제품구매 — 쇼핑백
  shop: (size = 22, color = '#0B1F3A', stroke = 1.8) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
      <path d="M9 11V7a3 3 0 016 0v4" />
    </svg>
  ),
  // 언어 변경 — 지구본 (위도/경도 라인)
  globe: (size = 22, color = '#0B1F3A', stroke = 1.8) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 010 18a14 14 0 010 -18" />
    </svg>
  ),
  // 공식 플래그 — 방패 (체크 마크 포함)
  shield: (size = 12, color = '#fff', stroke = 2) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 4.5-3.4 8.5-8 9.5C7.4 20.5 4 16.5 4 12V6l8-3z" />
      <polyline points="9 12 11.5 14.5 16 10" />
    </svg>
  ),
  // 개인 플래그 — 사람 실루엣
  person: (size = 12, color = '#0B1F3A', stroke = 2) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21c1.5-4 4-6 7-6s5.5 2 7 6" />
    </svg>
  ),
  // 쇼츠 — 플레이 인 스퀘어
  shorts: (size = 22, color = '#0B1F3A', stroke = 1.8) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M10.5 9.2v5.6a.5.5 0 00.77.42l4.2-2.8a.5.5 0 000-.84l-4.2-2.8a.5.5 0 00-.77.42z" fill={color} stroke="none" />
    </svg>
  ),
  // 애터미란 — 세 줄 정보 아이콘 (info doc)
  info: (size = 22, color = '#0B1F3A', stroke = 1.8) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8.2h.01" />
      <path d="M11 12h1v4.2h1" />
    </svg>
  ),
  // 인생시나리오 — 8각형 수레바퀴 (다르마차크라 풍)
  dharma: (size = 22, color = '#0B1F3A', stroke = 1.6) => {
    // 외곽 8각형 포인트
    const cx = 12, cy = 12, r = 8.4;
    const pts = [];
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI * 2 * i) / 8 - Math.PI / 2; // -90° start (top)
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    const poly = pts.map(p => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ');
    // 8개의 스포크 (중심 -> 각 꼭짓점)
    const spokes = pts.map((p, i) => (
      <line key={i} x1={cx} y1={cy} x2={p[0]} y2={p[1]} />
    ));
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        <polygon points={poly} />
        {spokes}
        <circle cx={cx} cy={cy} r="1.7" fill={color} stroke="none" />
      </svg>
    );
  },
};

const iconByKey = (key, size, color) => {
  switch (key) {
    case 'ig': return ProfileIcon.instagram(size, color);
    case 'yt': return ProfileIcon.youtube(size, color);
    case 'kk': return ProfileIcon.kakao(size, color);
    case 'fb': return ProfileIcon.facebook(size, color);
    case 'bl': return (
      <img src="assets/naver-blog.png" alt="Blog"
        style={{ width: size, height: size, objectFit: 'contain', display: 'block', borderRadius: 4,
          filter: color === '#03C75A' ? 'none' : 'grayscale(1) brightness(0)',
          transition: 'filter 0.18s ease' }} />
    );
    case 'tt': return ProfileIcon.tiktok(size, color);
    default: return null;
  }
};

Object.assign(window, { ProfileIcon, NavIcon, iconByKey });
