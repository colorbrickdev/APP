// AtomyLife.jsx — 인생 시나리오 페이지
// 사업자가 back-office에서 입력한 8개 인생 목표 + 달성률을
// AI 자동 생성 영상 + 8각형 인생 수레바퀴로 시각화
//
// 구조:
// 1) 히어로 타이틀
// 2) AI 자동 생성 영상 (모든 목표 100% 달성한 미래 시나리오)
// 3) 인생 수레바퀴 (8각형 레이더 + 항목 카드 8개)
// 4) 항목별 디테일 (가장 낮은 항목 강조)
// 5) 다음 1년 액션 플랜
// 6) CTA — back-office 진입

// =============================================================
// 데이터 — 사업자가 back-office에서 입력했다는 가정
// =============================================================

const _LG_I18N = {
  car: {
    ko: { label: '차',  desc: '현재 1억 2000만원 2020년형 페라리를 타고 다님. 2026년 1월까지 월 수입 1억 6천만원이 되어 2026년형 페라리로 업그레이드.' },
    en: { label: 'Car', desc: 'Currently driving a 2020 Ferrari worth ₩120M. By Jan 2026, monthly income of ₩160M to upgrade to a 2026 Ferrari.' },
    ja: { label: '車',  desc: '現在1億2000万ウォンの2020年型フェラーリに乗っている。2026年1月までに月収1億6千万ウォンになり2026年型フェラーリへ。' },
    zh: { label: '车',  desc: '目前驾驶价值1.2亿韩元的2020款法拉利。到2026年1月月收入达1.6亿韩元，升级2026款法拉利。' },
  },
  house: {
    ko: { label: '집',    desc: '현재 15억 50평 빌라에 살고 있음. 2027년 10월까지 월 수입 2억원이 되어 100평 아파트로 이사.' },
    en: { label: 'House', desc: 'Living in a ₩1.5B 165㎡ villa. By Oct 2027, monthly income of ₩200M to move into a 330㎡ apartment.' },
    ja: { label: '家',    desc: '現在15億ウォン50坪のヴィラに住んでいる。2027年10月までに月収2億ウォンで100坪マンションへ引越し。' },
    zh: { label: '家',    desc: '目前居住15亿韩元165平别墅。到2027年10月月收入达2亿韩元，搬入330平公寓。' },
  },
  hobby: {
    ko: { label: '취미',   desc: '바쁜 사업으로 취미 생활을 많이 못해왔음. 2026년까지 그동안 못해본 취미 생활 5개 해본다.' },
    en: { label: 'Hobby',  desc: "Busy with business, hobbies have been on hold. By 2026, try 5 new hobbies I've been postponing." },
    ja: { label: '趣味',   desc: '忙しい事業で趣味生活ができなかった。2026年までにできなかった趣味5つに挑戦。' },
    zh: { label: '爱好',   desc: '因事业繁忙未能享受爱好。到2026年尝试5个一直想做的爱好。' },
  },
  travel: {
    ko: { label: '여행',   desc: '웬만한 세계 여행은 다 다녀왔으나, 아직 중동을 정복하지 못함.' },
    en: { label: 'Travel', desc: "Traveled most of the world, but the Middle East remains unconquered." },
    ja: { label: '旅行',   desc: '世界中を旅したが、中東はまだ制覇していない。' },
    zh: { label: '旅行',   desc: '世界各地几乎都已游历，但尚未征服中东。' },
  },
  family: {
    ko: { label: '가족',   desc: '토끼같은 자식들이 잘 살 수 있도록 매년 용돈을 준다. 아이들 나이에 00만원 붙여서 매년 늘려간다.' },
    en: { label: 'Family', desc: "Give my children annual allowances to help them thrive — increasing each year based on their age." },
    ja: { label: '家族',   desc: '子供たちが豊かに暮らせるよう毎年お小遣いをあげる。年齢に応じて毎年増やす。' },
    zh: { label: '家庭',   desc: '每年给孩子零用钱让他们生活无忧，按年龄递增。' },
  },
  faith: {
    ko: { label: '신앙',   desc: '하나님께 순종하며, 욕심없는 삶을 산다. 주변에 하나님을 알지 못하는 사업자들과 매월 사경회에 참석한다.' },
    en: { label: 'Faith',  desc: "Live obediently to God, free of greed. Attend monthly Bible study with partners who don't yet know God." },
    ja: { label: '信仰',   desc: '神に従順に、欲のない人生を送る。神を知らない事業者たちと毎月査経会に参加。' },
    zh: { label: '信仰',   desc: '顺服上帝，过无贪欲的生活。每月与未识主的伙伴们一起参加查经会。' },
  },
  donate: {
    ko: { label: '기부',    desc: '현재 하고 있는 십일조를 평생 한다.' },
    en: { label: 'Donate',  desc: "Continue my current tithing for life." },
    ja: { label: '寄付',    desc: '現在行っている十分の一献金を生涯続ける。' },
    zh: { label: '捐赠',    desc: '终身坚持目前的十一奉献。' },
  },
  service: {
    ko: { label: '봉사',    desc: '지난 번처럼 다문화 가정에게 장학금을 주는데, 앞으로 매년 1회씩 준다.' },
    en: { label: 'Service', desc: "Provide scholarships to multicultural families annually, as I did before." },
    ja: { label: '奉仕',    desc: '前回のように多文化家庭に奨学金を、これから毎年1回ずつ贈る。' },
    zh: { label: '服务',    desc: '像之前一样为多文化家庭提供奖学金，今后每年一次。' },
  },
};

function _getLifeGoal(key) {
  const lang = (window.i18nStore && window.i18nStore.lang) || 'ko';
  return (_LG_I18N[key] && _LG_I18N[key][lang]) || _LG_I18N[key].ko;
}

const LIFE_GOALS = [
  { key: 'car',     get label() { return _getLifeGoal('car').label; },     get desc() { return _getLifeGoal('car').desc; },     pct: 90,  angle: 270 },
  { key: 'house',   get label() { return _getLifeGoal('house').label; },   get desc() { return _getLifeGoal('house').desc; },   pct: 90,  angle: 315 },
  { key: 'hobby',   get label() { return _getLifeGoal('hobby').label; },   get desc() { return _getLifeGoal('hobby').desc; },   pct: 50,  angle: 0   },
  { key: 'travel',  get label() { return _getLifeGoal('travel').label; },  get desc() { return _getLifeGoal('travel').desc; },  pct: 90,  angle: 45  },
  { key: 'family',  get label() { return _getLifeGoal('family').label; },  get desc() { return _getLifeGoal('family').desc; },  pct: 70,  angle: 90  },
  { key: 'faith',   get label() { return _getLifeGoal('faith').label; },   get desc() { return _getLifeGoal('faith').desc; },   pct: 90,  angle: 135 },
  { key: 'donate',  get label() { return _getLifeGoal('donate').label; },  get desc() { return _getLifeGoal('donate').desc; },  pct: 100, angle: 180 },
  { key: 'service', get label() { return _getLifeGoal('service').label; }, get desc() { return _getLifeGoal('service').desc; }, pct: 80,  angle: 225 },
];

// 자동 생성 영상 메타 — 사용자 제공 mp4
const LIFE_VIDEO = {
  videoUrl: 'https://www.genspark.ai/api/files/s/mjHhhZuO',
  poster: 'https://sspark.genspark.ai/cfimages?u1=zDP0VccAgutqe2xSuNJTaje5dNzaaXO2Ll8w7gqCb%2B5AJz%2BKjHAmelFMmL%2FekN3QKghON2rG4tav55%2F%2FlNJ6WfOB8PP5RROzzubC%2FyMizX%2FGew%3D%3D&u2=%2BTJBtfsiQzYLJi3R&width=2560',
  duration: '1:42',
  title: '모든 목표가 100% 달성된 미래의 나',
  subtitle: 'AI가 인생 시나리오 8개 항목을 종합해 만든 미래 영상',
};

// 평균 달성률 (전체 마스터 평균 대비, 모티베이션 게이지)
const PEER_AVG = {
  myAvg: Math.round(LIFE_GOALS.reduce((a, b) => a + b.pct, 0) / LIFE_GOALS.length),
  peerAvg: 62, // 다이아몬드 마스터 평균
};

// =============================================================
// 8각형 인생 수레바퀴 — SVG 레이더 차트
// =============================================================

function LifeWheel({ goals, isMobile = false, onSelect, highlightKey = null, wide = false }) {
  const [hoverIdx, setHoverIdx] = React.useState(null);
  // 입장 애니메이션 — 0에서 실제 pct로 늘어남
  const [animPct, setAnimPct] = React.useState(0);
  React.useEffect(() => {
    // 다음 프레임부터 시작
    const t1 = requestAnimationFrame(() => {
      const t2 = setTimeout(() => setAnimPct(1), 150);
      return () => clearTimeout(t2);
    });
    return () => cancelAnimationFrame(t1);
  }, []);
  const size = wide ? 560 : (isMobile ? 380 : 420);
  const cx = size / 2, cy = size / 2;
  const maxR = (size / 2) * 0.78;

  // 8각형 grid (10단계)
  const gridLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  // 각 항목의 (각도, 거리)에서 좌표 계산
  const pointFor = (angleDeg, pct) => {
    const r = maxR * (pct / 100);
    const rad = angleDeg * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };

  // 8각형의 각 꼭짓점 (100% 위치)
  const vertices = goals.map(g => pointFor(g.angle, 100));
  // 사용자 데이터 다각형
  // animPct(0~1)에 따라 도트가 중심 → 자기 위치로 자라남
  const userPoints = goals.map(g => pointFor(g.angle, g.pct * animPct));

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: 'block', overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="wheelGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#5CD3F7" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#00B6F0" stopOpacity="0.20" />
        </radialGradient>
      </defs>

      {/* 그리드 8각형 — 10/20/30...100 */}
      {gridLevels.map((lv, i) => {
        const pts = goals.map(g => pointFor(g.angle, lv));
        const path = pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
        const isMajor = lv % 50 === 0;
        return (
          <polygon
            key={lv}
            points={path}
            fill="none"
            stroke={isMajor ? 'rgba(11,31,58,0.18)' : 'rgba(11,31,58,0.08)'}
            strokeWidth={isMajor ? 1.2 : 1}
          />
        );
      })}

      {/* 중심에서 각 꼭짓점까지의 축선 */}
      {vertices.map((v, i) => (
        <line
          key={`spoke-${i}`}
          x1={cx} y1={cy} x2={v[0]} y2={v[1]}
          stroke="rgba(11,31,58,0.10)" strokeWidth="1"
        />
      ))}

      {/* 그리드 레이블 (10/20/...100) — 12시 방향에만 */}
      {gridLevels.map((lv) => {
        const [, y] = pointFor(270, lv);
        return (
          <text
            key={`lb-${lv}`}
            x={cx + 4} y={y + 3}
            fontSize={isMobile ? 8 : 10} fill="#8A97AD"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
          >{lv}</text>
        );
      })}

      {/* 사용자 데이터 다각형 — 시안 그라디언트, 입장 시 0→pct로 펼쳐짐 */}
      <polygon
        points={userPoints.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')}
        fill="url(#wheelGrad)"
        stroke="#00B6F0"
        strokeWidth="2.4"
        strokeLinejoin="round"
        style={{
          pointerEvents: 'none',
          transition: 'all 1.2s cubic-bezier(.2,.7,.3,1.1)',
          opacity: animPct,
        }}
      />

      {/* 외곽 라벨 — 각 꼭짓점 100% 위치 바깥쪽에 항목명 + % 표시 */}
      {goals.map((g, i) => {
        const labelR = maxR + (isMobile ? 16 : 22);
        const rad = g.angle * Math.PI / 180;
        const lx = cx + labelR * Math.cos(rad);
        const ly = cy + labelR * Math.sin(rad);
        // 좌/우 정렬 자동
        let textAnchor = 'middle';
        if (Math.cos(rad) > 0.3) textAnchor = 'start';
        else if (Math.cos(rad) < -0.3) textAnchor = 'end';
        return (
          <g key={`label-${i}`} style={{ pointerEvents: 'none' }}>
            <text
              x={lx} y={ly - 2}
              fontSize={isMobile ? 11 : 13}
              fontWeight="800"
              fill="#0B1F3A"
              textAnchor={textAnchor}
              fontFamily="system-ui, -apple-system, sans-serif"
              style={{ letterSpacing: '-0.01em' }}
            >{g.label}</text>
            <text
              x={lx} y={ly + (isMobile ? 11 : 13)}
              fontSize={isMobile ? 10 : 12}
              fontWeight="900"
              fill="#00B6F0"
              textAnchor={textAnchor}
              fontFamily="system-ui, -apple-system, sans-serif"
              style={{
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.02em',
              }}
            >{g.pct}%</text>
          </g>
        );
      })}

      {/* 각 꼭짓점 도트 — 클릭/호버 가능 */}
      {userPoints.map((p, i) => {
        const isHover = hoverIdx === i;
        const isHighlighted = highlightKey === goals[i].key;
        const isActive = isHover || isHighlighted;
        const r = isActive ? 8 : 5.5;
        return (
          <g key={`dot-${i}`}>
            {/* 강조/호버 시 외곽 글로우 링 */}
            {isActive && (
              <circle
                cx={p[0]} cy={p[1]} r={isHighlighted ? 16 : 13}
                fill={isHighlighted ? 'rgba(0,182,240,0.28)' : 'rgba(0,182,240,0.18)'}
                style={{ pointerEvents: 'none' }}
              >
                {isHighlighted && (
                  <animate attributeName="r" from="10" to="20" dur="1.2s" repeatCount="indefinite" />
                )}
                {isHighlighted && (
                  <animate attributeName="opacity" from="0.4" to="0" dur="1.2s" repeatCount="indefinite" />
                )}
              </circle>
            )}
            {/* 메인 도트 — 큰 hit area를 위해 투명 원 + 그 위에 시각 도트 */}
            <circle
              cx={p[0]} cy={p[1]} r="16"
              fill="transparent"
              style={{ cursor: 'pointer' }}
              onClick={() => onSelect && onSelect(goals[i])}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            />
            <circle
              cx={p[0]} cy={p[1]} r={r}
              fill={isHighlighted ? '#00B6F0' : '#fff'}
              stroke="#00B6F0"
              strokeWidth={isActive ? 3 : 2.5}
              style={{
                pointerEvents: 'none',
                transition: 'cx 1.2s cubic-bezier(.2,.7,.3,1.1), cy 1.2s cubic-bezier(.2,.7,.3,1.1), r 0.18s, stroke-width 0.18s, fill 0.18s',
                opacity: animPct,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}

// =============================================================
// 항목 카드 (수레바퀴 주변에 배치)
// =============================================================

const GoalCard = React.forwardRef(function GoalCard({ goal, isMobile = false, onSelect, highlighted = false }, ref) {
  const isHigh = goal.pct >= 80;
  // 강조 상태일 때 보더/그림자 색상 강화
  const baseBorder = isHigh ? 'rgba(0,182,240,0.35)' : 'rgba(11,31,58,0.08)';
  const baseShadow = isHigh ? '0 4px 14px rgba(0,182,240,0.12)' : '0 2px 6px rgba(11,31,58,0.04)';
  const hlBorder = '#00B6F0';
  const hlShadow = '0 14px 36px rgba(0,182,240,0.35), 0 0 0 3px rgba(0,182,240,0.18)';
  return (
    <button
      ref={ref}
      onClick={() => onSelect && onSelect(goal)}
      style={{
        background: highlighted ? 'linear-gradient(135deg, #ffffff 0%, #E8F8FE 100%)' : '#fff',
        border: `${highlighted ? 2 : 1}px solid ${highlighted ? hlBorder : baseBorder}`,
        borderRadius: 12,
        padding: isMobile ? '10px 12px' : '12px 14px',
        textAlign: 'left',
        cursor: 'pointer',
        boxShadow: highlighted ? hlShadow : baseShadow,
        transform: highlighted ? 'translateY(-3px) scale(1.02)' : 'translateY(0)',
        transition: 'transform 0.25s cubic-bezier(.2,.7,.3,1.3), box-shadow 0.25s, border-color 0.2s, background 0.2s',
        width: '100%',
        fontFamily: 'inherit',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        if (highlighted) return;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 22px rgba(0,182,240,0.18)';
      }}
      onMouseLeave={(e) => {
        if (highlighted) return;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = baseShadow;
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6,
      }}>
        <span style={{
          fontSize: isMobile ? 13 : 14, fontWeight: 800,
          color: '#0B1F3A', letterSpacing: '-0.01em',
        }}>{goal.label}</span>
        <span style={{
          fontSize: isMobile ? 14 : 16, fontWeight: 900,
          color: '#00B6F0', letterSpacing: '-0.02em',
          fontVariantNumeric: 'tabular-nums',
        }}>{goal.pct}<span style={{ fontSize: 10 }}> %</span></span>
      </div>

      {/* 진행 바 */}
      <div style={{
        height: 4, borderRadius: 2,
        background: 'rgba(11,31,58,0.06)',
        overflow: 'hidden', marginBottom: 6,
      }}>
        <div style={{
          width: `${goal.pct}%`, height: '100%',
          background: 'linear-gradient(90deg, #00B6F0, #5CD3F7)',
          borderRadius: 2,
          transition: 'width 0.6s cubic-bezier(.2,.7,.3,1)',
        }} />
      </div>

      <div style={{
        fontSize: isMobile ? 11 : 11.5, lineHeight: 1.5,
        color: '#4A5568', fontWeight: 500,
        textWrap: 'pretty',
      }}>{goal.desc}</div>
    </button>
  );
});

// =============================================================
// 자동 생성 영상 카드
// =============================================================

function AILifeVideo({ video, isMobile = false, onPlay }) {
  return (
    <div style={{
      position: 'relative',
      borderRadius: isMobile ? 14 : 18, overflow: 'hidden',
      background: '#000',
      boxShadow: '0 16px 50px rgba(11,31,58,0.18)',
      cursor: 'pointer',
    }}
      onClick={() => onPlay && onPlay(video)}
    >
      <div style={{
        position: 'relative',
        aspectRatio: isMobile ? '16/9' : '16/9',
        width: '100%',
        background: '#0B1F3A',
      }}>
        {/* 자동재생 영상 (소리 OFF) */}
        <AutoPlayVideo src={video.videoUrl} poster={video.poster} />

        {/* 좌측 상단 — AI 생성 라벨 */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '6px 11px 6px 9px', borderRadius: 999,
          background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
          color: '#0B1F3A', fontSize: 11, fontWeight: 800, letterSpacing: '-0.01em',
          boxShadow: '0 4px 12px rgba(0,182,240,0.4)',
          zIndex: 2,
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
          </svg>
          AI 자동 생성 영상
        </div>

        {/* 우측 상단 — duration */}
        <div style={{
          position: 'absolute', top: 14, right: 14,
          padding: '4px 8px', borderRadius: 4,
          background: 'rgba(0,0,0,0.65)',
          color: '#fff', fontSize: 11, fontWeight: 700,
          fontVariantNumeric: 'tabular-nums', zIndex: 2,
        }}>{video.duration}</div>

        {/* 중앙 재생 버튼 */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 2,
        }}>
          <div style={{
            width: isMobile ? 56 : 76, height: isMobile ? 56 : 76, borderRadius: 999,
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(10px)',
            border: '1.5px solid rgba(255,255,255,0.45)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.45)',
          }}>
            <div style={{ marginLeft: 3 }}>{ProfileIcon.play(isMobile ? 24 : 32, '#fff')}</div>
          </div>
        </div>

        {/* 하단 그라디언트 + 캡션 */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: isMobile ? '40px 14px 14px' : '60px 22px 20px',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0))',
          zIndex: 2, pointerEvents: 'none',
        }}>
          <div style={{
            color: '#fff', fontSize: isMobile ? 14 : 18, fontWeight: 800,
            letterSpacing: '-0.02em', lineHeight: 1.3,
            textShadow: '0 2px 6px rgba(0,0,0,0.5)',
          }}>{video.title}</div>
          <div style={{
            marginTop: 4, color: 'rgba(255,255,255,0.85)',
            fontSize: isMobile ? 11 : 12.5, fontWeight: 600,
          }}>{video.subtitle}</div>
        </div>
      </div>
    </div>
  );
}

// =============================================================
// 항목 디테일 패널 — 클릭 시 우측에서 슬라이드
// =============================================================

function GoalDetailPanel({ goal, onClose, isMobile = false }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!goal) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute', inset: 0, zIndex: 65,
        background: 'rgba(11,31,58,0.55)', backdropFilter: 'blur(4px)',
        animation: 'shortsFadeIn 0.22s ease both',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          right: 0, top: 0, bottom: 0,
          width: isMobile ? '88%' : 420,
          background: '#fff',
          boxShadow: '-20px 0 60px rgba(11,31,58,0.25)',
          padding: isMobile ? '20px 18px' : '28px 26px',
          overflowY: 'auto',
          animation: 'goalSlideLeft 0.32s cubic-bezier(.2,.7,.3,1) both',
        }}
      >
        {/* 닫기 */}
        <button
          onClick={onClose}
          aria-label="닫기"
          style={{
            position: 'absolute', top: 14, right: 14,
            width: 32, height: 32, borderRadius: 999, border: 'none',
            background: 'rgba(11,31,58,0.06)', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
               strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* 카테고리 라벨 */}
        <div style={{
          fontSize: 11, letterSpacing: '0.18em', color: '#00B6F0', fontWeight: 800,
          marginBottom: 8,
        }}>LIFE SCENARIO</div>

        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 14,
        }}>
          <h3 style={{
            margin: 0, fontSize: 26, fontWeight: 900, letterSpacing: '-0.02em',
            color: '#0B1F3A',
          }}>{goal.label}</h3>
          <span style={{
            fontSize: 32, fontWeight: 900, color: '#00B6F0',
            fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em',
          }}>{goal.pct}<span style={{ fontSize: 16, color: '#0B1F3A' }}> %</span></span>
        </div>

        {/* 거대 진행 바 */}
        <div style={{
          height: 10, borderRadius: 999, marginBottom: 18,
          background: 'rgba(11,31,58,0.08)', overflow: 'hidden',
        }}>
          <div style={{
            width: `${goal.pct}%`, height: '100%',
            background: 'linear-gradient(90deg, #00B6F0, #5CD3F7)',
            borderRadius: 999,
            transition: 'width 0.8s cubic-bezier(.2,.7,.3,1)',
          }} />
        </div>

        {/* 본문 */}
        <p style={{
          margin: 0, fontSize: 14, lineHeight: 1.7, color: '#2B3A52',
          textWrap: 'pretty', fontWeight: 500,
        }}>{goal.desc}</p>

        {/* 100% 달성 시 미래 시나리오 카드 */}
        <div style={{
          marginTop: 24,
          padding: '14px 16px', borderRadius: 12,
          background: 'linear-gradient(135deg, rgba(0,182,240,0.06), rgba(92,211,247,0.10))',
          border: '1px solid rgba(0,182,240,0.2)',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            fontSize: 10.5, color: '#0088B8', fontWeight: 800,
            letterSpacing: '0.12em', marginBottom: 6,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00B6F0">
              <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
            </svg>
            100% 달성 시
          </div>
          <div style={{
            fontSize: 13, lineHeight: 1.55, color: '#0B1F3A', fontWeight: 600,
          }}>
            남은 <strong style={{ color: '#00B6F0' }}>{100 - goal.pct}%</strong>를 채우면
            이 목표가 완성된 미래의 모습이 영상으로 자동 생성됩니다.
          </div>
        </div>

        {/* 액션 버튼 */}
        <button style={{
          marginTop: 20, width: '100%',
          padding: '12px 16px', borderRadius: 10,
          background: '#0B1F3A', border: 'none', cursor: 'pointer',
          color: '#fff', fontSize: 13, fontWeight: 800, letterSpacing: '-0.01em',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>
          이 목표 수정하기
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

// =============================================================
// 메인 페이지
// =============================================================

function AtomyLife({ isMobile = false, onPlay = () => {} }) {
  const { t, lang } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k, lang: 'ko' };
  // 강조 표시할 항목의 key
  const [selectedKey, setSelectedKey] = React.useState(null);
  // 카드의 ref들 — 클릭 시 스크롤 포커스
  const cardRefs = React.useRef({});
  // 폴드7 등 와이드 모바일 감지 — 컨테이너 폭 ≥ 800px이면 수레바퀴 풀와이드
  const rootRef = React.useRef(null);
  const [wideMobile, setWideMobile] = React.useState(false);
  React.useEffect(() => {
    if (!isMobile || !rootRef.current) return;
    const ro = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width;
      setWideMobile(w >= 800);
    });
    ro.observe(rootRef.current);
    return () => ro.disconnect();
  }, [isMobile]);

  const handleSelect = (goal) => {
    setSelectedKey(goal.key);
    // 100% 항목이면 콘페티 폭발
    if (goal.pct === 100 && window.fireConfetti) {
      const el = cardRefs.current[goal.key];
      window.fireConfetti(el || null);
    }
    // (스크롤 이동 없음 — 선택 하이라이트만)
    // 3초 후 자동 해제
    if (handleSelect._t) clearTimeout(handleSelect._t);
    handleSelect._t = setTimeout(() => setSelectedKey(null), 3500);
  };

  // 가장 낮은 항목 (액션 플랜용)
  const sortedByPct = [...LIFE_GOALS].sort((a, b) => a.pct - b.pct);
  const focusGoals = sortedByPct.slice(0, 3);
  // 가장 높은 항목 3개 — 라이프 하이라이트(비회원에게 보여줄 자랑거리)
  const topGoals = [...LIFE_GOALS].sort((a, b) => b.pct - a.pct).slice(0, 3);

  return (
    <div ref={rootRef} style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F7FA',
      color: '#0B1F3A',
      flex: 1,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* 1. 히어로 타이틀 */}
      <section style={{
        background: 'linear-gradient(135deg, #0B1F3A 0%, #0B2D58 60%, #00B6F0 130%)',
        color: '#fff',
        padding: isMobile ? '36px 20px 32px' : '60px 36px 50px',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* 배경 8각형 워터마크 */}
        <div style={{
          position: 'absolute', right: -60, top: -40,
          opacity: 0.06, pointerEvents: 'none',
        }}>
          {NavIcon.dharma(isMobile ? 240 : 380, '#fff', 1.4)}
        </div>

        <div style={{
          maxWidth: 1280, margin: '0 auto', position: 'relative',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 12px', borderRadius: 999,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            color: '#5CD3F7', fontSize: 10, fontWeight: 800, letterSpacing: '0.22em',
            marginBottom: 14,
          }}>
            <span style={{ width: 6, height: 6, background: '#00B6F0', transform: 'rotate(45deg)' }} />
            LIFE SCENARIO
          </div>
          <h1 style={{
            margin: 0, fontSize: isMobile ? 24 : 38, fontWeight: 900,
            letterSpacing: '-0.025em', lineHeight: 1.2,
            textWrap: 'balance',
          }}>
            <span style={{ color: '#5CD3F7' }}>{PROFILE.name}</span>{lang === 'ko' ? '의' : ''}<br />
            {t('life.title_main')}
          </h1>
          <p style={{
            margin: '12px 0 0', fontSize: isMobile ? 12.5 : 14, lineHeight: 1.65,
            color: 'rgba(255,255,255,0.8)', fontWeight: 500,
            textWrap: 'pretty', maxWidth: 560,
          }}>
            {t('life.subtitle')}
          </p>
        </div>
      </section>

      {/* 2. AI 자동 생성 영상 */}
      <section style={{
        padding: isMobile ? '32px 20px 28px' : '50px 36px 40px',
        maxWidth: 1280, margin: '0 auto', width: '100%',
        boxSizing: 'border-box',
      }}>
        <SectionHeader
          kicker="AI GENERATED FUTURE"
          title="모든 목표가 완성된 미래"
          desc="입력한 8개 인생 목표가 100% 달성됐을 때의 모습을 감상해보세요."
          isMobile={isMobile}
        />
        <AILifeVideo video={LIFE_VIDEO} isMobile={isMobile} onPlay={onPlay} />
      </section>

      {/* 3. 인생 수레바퀴 + 항목 카드 8개 */}
      <section style={{
        padding: isMobile ? '12px 20px 28px' : '24px 36px 50px',
        maxWidth: 1280, margin: '0 auto', width: '100%',
        boxSizing: 'border-box',
      }}>
        <SectionHeader
          kicker="LIFE WHEEL"
          title={t('life.title_main')}
          desc={t('life.subtitle')}
          isMobile={isMobile}
        />

        {isMobile ? (
          // 모바일 — 수레바퀴 위 / 카드 2열 그리드 아래
          <>
            <div style={{
              display: 'flex', justifyContent: 'center',
              padding: '16px 0 24px',
            }}>
              <LifeWheel goals={LIFE_GOALS} isMobile={isMobile} onSelect={handleSelect} highlightKey={selectedKey} wide={wideMobile} />
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 10,
            }}>
              {LIFE_GOALS.map(g => (
                <GoalCard
                  key={g.key}
                  ref={(el) => { cardRefs.current[g.key] = el; }}
                  goal={g}
                  isMobile={isMobile}
                  onSelect={handleSelect}
                  highlighted={selectedKey === g.key}
                />
              ))}
            </div>
          </>
        ) : (
          // PC — 좌 카드 4 / 중앙 수레바퀴 / 우 카드 4
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 260px) 1fr minmax(220px, 260px)',
            gap: 28,
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[LIFE_GOALS[5], LIFE_GOALS[6], LIFE_GOALS[7], LIFE_GOALS[0]].map((g) => (
                <GoalCard
                  key={g.key}
                  ref={(el) => { cardRefs.current[g.key] = el; }}
                  goal={g}
                  isMobile={false}
                  onSelect={handleSelect}
                  highlighted={selectedKey === g.key}
                />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <LifeWheel goals={LIFE_GOALS} isMobile={false} onSelect={handleSelect} highlightKey={selectedKey} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[LIFE_GOALS[1], LIFE_GOALS[2], LIFE_GOALS[3], LIFE_GOALS[4]].map((g) => (
                <GoalCard
                  key={g.key}
                  ref={(el) => { cardRefs.current[g.key] = el; }}
                  goal={g}
                  isMobile={false}
                  onSelect={handleSelect}
                  highlighted={selectedKey === g.key}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 4. 라이프 하이라이트 — 가장 자랑스러운 항목 3개 (비회원에게 감동 포인트) */}
      <section style={{
        padding: isMobile ? '12px 20px 32px' : '24px 36px 60px',
        maxWidth: 1280, margin: '0 auto', width: '100%',
        boxSizing: 'border-box',
      }}>
        <SectionHeader
          kicker="LIFE HIGHLIGHTS"
          title="이런 인생을 살고 있어요"
          desc={`${PROFILE.name} 마스터가 가장 자랑스럽게 채워가고 있는 인생의 한 조각`}
          isMobile={isMobile}
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 12 : 16,
        }}>
          {topGoals.map((g, i) => (
            <button
              key={g.key}
              onClick={() => handleSelect(g)}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #F4FBFE 100%)',
                borderRadius: 14,
                padding: isMobile ? '20px 20px' : '26px 26px',
                border: '1px solid rgba(0,182,240,0.18)',
                position: 'relative',
                cursor: 'pointer', textAlign: 'left',
                fontFamily: 'inherit',
                boxShadow: '0 4px 14px rgba(0,182,240,0.08)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,182,240,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,182,240,0.08)';
              }}
            >
              {/* 배경 거대 숫자 */}
              <div style={{
                position: 'absolute', right: -12, top: -20,
                fontSize: isMobile ? 110 : 150, fontWeight: 900,
                color: 'rgba(0,182,240,0.06)', lineHeight: 1,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.05em',
                pointerEvents: 'none', userSelect: 'none',
              }}>{g.pct}</div>

              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '4px 10px', borderRadius: 999,
                background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
                color: '#fff', fontSize: 10.5, fontWeight: 800, letterSpacing: '-0.01em',
                marginBottom: 14,
                boxShadow: '0 4px 10px rgba(0,182,240,0.25)',
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff">
                  <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
                </svg>
                TOP {i + 1}
              </div>

              <h4 style={{
                margin: '0 0 8px', fontSize: isMobile ? 22 : 28, fontWeight: 900,
                color: '#0B1F3A', letterSpacing: '-0.02em', position: 'relative',
              }}>
                {g.label}
                <span style={{
                  marginLeft: 8, fontSize: isMobile ? 16 : 20, fontWeight: 800,
                  color: '#00B6F0', fontVariantNumeric: 'tabular-nums',
                }}>{g.pct}%</span>
              </h4>

              <p style={{
                margin: 0, fontSize: isMobile ? 12.5 : 13, lineHeight: 1.6, color: '#2B3A52',
                fontWeight: 500, textWrap: 'pretty', position: 'relative',
              }}>{g.desc}</p>

              <div style={{
                marginTop: 14, fontSize: 11.5, fontWeight: 800, color: '#0088B8',
                display: 'inline-flex', alignItems: 'center', gap: 4,
                position: 'relative',
              }}>
                자세히 보기 <span style={{ fontSize: 13 }}>›</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 5. 사업자 되기 CTA */}
      <section style={{
        padding: isMobile ? '0 20px 36px' : '0 36px 60px',
        maxWidth: 1280, margin: '0 auto', width: '100%',
        boxSizing: 'border-box',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #0B1F3A 0%, #0B2D58 65%, #0088B8 130%)',
          color: '#fff',
          borderRadius: isMobile ? 14 : 18,
          padding: isMobile ? '28px 22px' : '40px 44px',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between', gap: isMobile ? 22 : 32,
          position: 'relative', overflow: 'hidden',
        }}>
          {/* 배경 8각형 워터마크 */}
          <div style={{
            position: 'absolute', right: -40, top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.08, pointerEvents: 'none',
          }}>
            {NavIcon.dharma(isMobile ? 200 : 280, '#fff', 1.4)}
          </div>

          <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: isMobile ? 10.5 : 11.5, fontWeight: 800,
              letterSpacing: '0.22em', color: '#5CD3F7', marginBottom: 10,
            }}>BECOME AN ATOMY PARTNER</div>
            <div style={{
              fontSize: isMobile ? 17 : 22, fontWeight: 900,
              letterSpacing: '-0.02em', lineHeight: 1.45, textWrap: 'balance',
            }}>
              애터미 사업자가 되어<br />
              인생의 수레바퀴를 완성해보세요.
            </div>
            <div style={{
              marginTop: 10, fontSize: isMobile ? 12.5 : 14, lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)', fontWeight: 500,
              textWrap: 'pretty', maxWidth: 480,
            }}>
              멋진 인생을 살기 위해서 애터미는 <strong style={{ color: '#5CD3F7' }}>선택이 아닌 필수</strong>입니다.
            </div>
          </div>

          <button
            className="cta-pulse"
            onClick={() => window.open('https://atomy.page/EPrb8oCZ', '_blank')}
            style={{
            position: 'relative', flexShrink: 0,
            padding: isMobile ? '13px 22px' : '15px 28px', borderRadius: 999,
            background: '#fff', border: 'none', cursor: 'pointer',
            color: '#0B1F3A', fontSize: isMobile ? 13 : 14, fontWeight: 800,
            letterSpacing: '-0.01em',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            boxShadow: '0 10px 28px rgba(0,182,240,0.35)',
            transition: 'transform 0.18s, box-shadow 0.18s',
            whiteSpace: 'nowrap',
            ['--cta-pulse-color']: 'rgba(0,182,240,0.6)',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 14px 36px rgba(0,182,240,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,182,240,0.35)';
            }}
          >
            애터미 사업자 되기
            <span style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 22, height: 22, borderRadius: 999,
              background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
              color: '#0B1F3A', fontSize: 14, fontWeight: 900,
            }}>→</span>
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer style={{
        background: '#0B1F3A', color: '#fff',
        padding: isMobile ? '32px 20px' : '40px 36px',
        marginTop: 'auto',
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
          </div>
        </div>
      </footer>

    </div>
  );
}

// 섹션 헤더 (kicker + title + desc)
function SectionHeader({ kicker, title, desc, isMobile = false }) {
  return (
    <div style={{ marginBottom: isMobile ? 16 : 22 }}>
      <div style={{
        fontSize: isMobile ? 10 : 11, fontWeight: 800,
        letterSpacing: '0.22em', color: '#00B6F0', marginBottom: 6,
      }}>{kicker}</div>
      <h3 style={{
        margin: '0 0 6px', fontSize: isMobile ? 22 : 28, fontWeight: 900,
        color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.25,
      }}>{title}</h3>
      {desc && (
        <p style={{
          margin: 0, fontSize: isMobile ? 12 : 13.5, lineHeight: 1.55,
          color: '#4A5568', fontWeight: 500,
        }}>{desc}</p>
      )}
    </div>
  );
}

Object.assign(window, { AtomyLife, LifeWheel });
