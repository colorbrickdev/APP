// AtomyAbout.jsx — 애터미 소개 페이지
// 사용 위치: GNB "애터미소개" 클릭 시 진입하는 페이지
// 구조: 히어로(회원 영상 숏폼) → 글로벌 통계 6 → 헤모힘 → 셀랙티브 → 노니 → 칫솔/치약 → 푸터
// 섹션 사이사이에 관련 영상 카드 삽입

const ABOUT_HERO_VIDEO = 'https://www.genspark.ai/api/files/s/mb60FN8q'; // 회원 추천 숏폼 (헤모힘 영상 placeholder)
const HERO_BG = 'https://qa-image.atomyn.com/editor/702/2511060393702.png';

// 통계 6장 (요청하신 내용 그대로)
const COMPANY_STATS = [
  {
    label: '글로벌 직판기업',
    big: '10', unit: '위',
    info: '* 미국 Direct Selling News 발표, 2025',
    txt: '애터미가 미국의 네트워크마케팅 전문 저널 다이렉트 셀링 뉴스가 발표하는 ‘DSN GLOBAL 100’에서 국내 네트워킹마케팅 기업 최초로 글로벌 직접판매 기업 ‘TOP 10’에 진입했습니다.',
  },
  {
    label: '글로벌 애터미',
    big: '27', unit: '개국',
    info: null,
    txt: '애터미는 2023년 4월 유럽 법인 오픈까지 총 27개 법인을 오픈하였으며, 글로벌 회원은 1,000만명을 돌파하였습니다.',
  },
  {
    label: '글로벌 애터미 누적 세미나 횟수',
    big: '17,758', unit: '회',
    info: '(2025년 기준)',
    txt: '애터미는 언택트 시대라는 파도를 타고 석세스아카데미를 필두로 다양한 온/오프라인 세미나를 선보이고 있습니다.',
  },
  {
    label: '아시아에서 일하기 좋은 200대 기업',
    big: '3', unit: '위',
    info: 'GPTW 2025',
    txt: '애터미가 GPTW가 주관하는 ‘2025년 아시아에서 가장 일하기 좋은 200대 기업\' 중소기업(Small & Medium) 부문\'에서 중국, 필리핀 법인과 함께 공동 3위에 올랐습니다.',
  },
  {
    label: '애터미 누적 기부액',
    big: '1,300', unit: '억원', prefix: '약',
    info: '(2024년 기준)',
    txt: '최근 3년 평균 매출액 대비 기부금 비중은 1.7%로 유통업(0.07%)의 27배. 한국 매출액 상위 유통기업 38개사 중 1위를 기록하였습니다.',
  },
  {
    label: '지속가능경영체계 구축',
    big: '국내 업계', unit: '최초', textBig: true,
    info: 'ESG 보고서 · 산업통상자원부 장관상',
    txt: '애터미는 국내 업계 최초로 ESG 보고서를 발간하며 지속가능경영 체계를 구축한 데 이어, 2023년 산업통상자원부 지속가능경영보고서 장관상을 수상했습니다.',
  },
];

const ABSOLUTE_QUALITY = {
  big: '0', unit: '% 대',
  label: '반품률',
  txt: '동종 업계 상위 30개 업체 대비 1/10 수준',
  info: '* 한국법인 기준, 2022 공정거래위원회 발표 기준',
};

const HEMOHIM_HIGHLIGHTS = [
  { rank: '최초', label: '이중기능성 인정 건기식', desc: '면역기능 개선 및 피로 개선' },
  { rank: '1', unit: '위', label: '건기식 수출액', desc: '국내 건기식 수출액 1위', info: '(식품의약품안전처, 2022)' },
  { rank: '3', unit: '조', label: '누적 판매', desc: '단일품목 글로벌 누적매출 11년간 매년 1,000억 원 이상', info: '(2014년 ~ 2025년)' },
  { rank: '28', unit: '개', label: '국제 특허', desc: '한국, 미국, 러시아, 유럽 등' },
];

const CELLACTIVE_TIMELINE = [
  { year: '2018', txt: '독일 더마테스트 Excellent 등급 획득' },
  { year: '2019', txt: '앱솔루트 셀랙티브 앰플 (단품) 100만 개 판매 돌파' },
  { year: '2020', txt: 'NEP 혁신 기술 인증 6종 전 라인 · 92차 IR52 장영실상 수상' },
  { year: '2021', txt: '한국 특허청 세종대왕상 수상' },
  { year: '2022', txt: '산업통상자원부 ‘차세대 세계일류상품’ 선정' },
  { year: '2024', txt: '누적 매출 1조 돌파' },
];

const NONI_TIMELINE = [
  { year: '2024', txt: '산업통상자원부 ‘차세대 세계일류상품’ 선정' },
  { year: '2026', txt: '과학기술정보통신부 ‘IR52 장영실상’ 수상' },
];

// 섹션별 영상 카드 — 모두 같은 mp4를 사용 (실제 운영 시 애터미 공식 영상으로 교체)
const _ABOUT_VIDEO = 'assets/member-story.mp4';
const SECTION_VIDEOS = {
  hemohim: {
    thumb: 'https://sspark.genspark.ai/cfimages?u1=Jhjz0IURcZDh0l9RVxrz5xQqr3%2FSDUj8E8jH1%2B1ih%2F8l%2FZbZtW%2BIevSEGJcN3cygYdcnKTv8ZsEA4CiuR55cJ304eQanPED1gL4hrukR4xE18jq%2FjnjW5DkeJTztJBAg0sIb%2BfDfWALihsLJjxRKDU9PyFzCmWIgOJ4%3D&u2=9YibfyLhMrnobOkc&width=2560',
    title: '면역의 시작, 헤모힘 이야기',
    duration: '2:14',
    videoUrl: _ABOUT_VIDEO,
  },
  cellactive: {
    thumb: 'https://sspark.genspark.ai/cfimages?u1=fu5EJe3E2%2BSP2bbwl9NPqFp2wlDohSLLwmK02W3o7if%2ByKZrbgwsubitnHMwheo4oFlJni0qIHgYhsysH%2Bcednm%2Bdtl3gEGmcbzXXL5wrAV%2Bwbx4ON%2FWxcM%3D&u2=tZkSO4PBVycGF%2Fpv&width=2560',
    title: '세종대왕상의 비결, 셀랙티브',
    duration: '3:08',
    videoUrl: _ABOUT_VIDEO,
  },
  noni: {
    thumb: 'https://sspark.genspark.ai/cfimages?u1=l33DQPLemDmNKB7Btz1IrLWuUmRL9M%2Ba%2FOAnIWzVpRdXWpTF4xsmTkmcZkgQVCU7HmUlwquTuX9Jx3ZRMxrCiYgrXa947ez1kLiG7sbV%2FsFAPl%2FW&u2=Ha%2BiUka5VRi0%2FSC7&width=2560',
    title: '1,440시간 발효, 노니의 진화',
    duration: '1:42',
    videoUrl: _ABOUT_VIDEO,
  },
  oral: {
    thumb: 'https://sspark.genspark.ai/cfimages?u1=KvIpjIwbL4c%2FMobmJqByD%2BaWocQ5aivntWn%2BX94c9ZUt%2FBicTfBIwUw%2F8HcZFFyHu%2BjpzXY3EZnfmO3c5vgF%2BQpzRnzn84JkUBs%3D&u2=pL5kVvTHIrnT7skL&width=2560',
    title: '1초 칫솔과 4년 1위 치약',
    duration: '1:55',
    videoUrl: _ABOUT_VIDEO,
  },
};

// 사업자 소개 — 히어로 영역에 들어가는 인물 카드
const MEMBER_INTRO = {
  imageUrl: 'https://sspark.genspark.ai/cfimages?u1=zDP0VccAgutqe2xSuNJTaje5dNzaaXO2Ll8w7gqCb%2B5AJz%2BKjHAmelFMmL%2FekN3QKghON2rG4tav55%2F%2FlNJ6WfOB8PP5RROzzubC%2FyMizX%2FGew%3D%3D&u2=%2BTJBtfsiQzYLJi3R&width=2560',
  memberName: '박한길',
  memberRank: '대한민국 가장 존경받는 CEO',
  caption: '"소비자가 100세까지 행복해야, 회사도 행복합니다"',
};

// =============================================================
// 공용 컴포넌트들
// =============================================================

// 화면 진입 시 자동 재생 / 벗어나면 정지하는 영상 미니 플레이어
// IntersectionObserver로 가시 영역 50% 이상일 때 재생
function AutoPlayVideo({ src, poster, style, onClick }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // IntersectionObserver는 viewport 기준 — 우리가 모달 안 스크롤 컨테이너에 있으니
    // root를 가장 가까운 scrollable 부모로 잡아야 정확하지만, 일반 viewport도 동작은 함
    let scrollRoot = el.parentElement;
    while (scrollRoot && scrollRoot !== document.body) {
      const cs = getComputedStyle(scrollRoot);
      if (cs.overflowY === 'auto' || cs.overflowY === 'scroll') break;
      scrollRoot = scrollRoot.parentElement;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      });
    }, {
      root: scrollRoot && scrollRoot !== document.body ? scrollRoot : null,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      onClick={onClick}
      style={{
        width: '100%', height: '100%',
        objectFit: 'cover', display: 'block',
        background: '#000',
        ...style,
      }}
    />
  );
}

// 섹션 영상 카드 — 자동 재생 + 클릭 시 풀스크린
function SectionVideoCard({ video, accent = '#00B6F0', isMobile = false, onPlay }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      gap: isMobile ? 12 : 18,
      padding: isMobile ? 12 : 16,
      borderRadius: 14,
      background: 'linear-gradient(135deg, rgba(0,182,240,0.06) 0%, rgba(92,211,247,0.10) 100%)',
      border: `1px solid ${accent}25`,
    }}>
      {/* 영상 (9:16 미니, 자동재생) */}
      <div
        onClick={() => onPlay && onPlay(video)}
        style={{
          position: 'relative', flexShrink: 0,
          width: isMobile ? 80 : 110,
          height: isMobile ? 110 : 150,
          borderRadius: 10, overflow: 'hidden',
          background: '#0B1F3A',
          boxShadow: '0 6px 16px rgba(11,31,58,0.22)',
          cursor: 'pointer',
        }}
      >
        <AutoPlayVideo src={video.videoUrl} poster={video.thumb} />
        {/* 어두운 비네팅 */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.45), rgba(0,0,0,0.05))',
          pointerEvents: 'none',
        }} />
        {/* 재생 아이콘 */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: isMobile ? 32 : 42, height: isMobile ? 32 : 42, borderRadius: 999,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
            border: '1.5px solid rgba(255,255,255,0.5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ marginLeft: 2 }}>{ProfileIcon.play(isMobile ? 14 : 20, '#fff')}</div>
          </div>
        </div>
        {/* duration */}
        <div style={{
          position: 'absolute', bottom: 6, right: 6,
          padding: '2px 5px', borderRadius: 3,
          background: 'rgba(0,0,0,0.65)',
          color: '#fff', fontSize: 9.5, fontWeight: 700,
          fontVariantNumeric: 'tabular-nums',
        }}>{video.duration}</div>
      </div>

      {/* 본문 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 10, fontWeight: 800, letterSpacing: '0.18em',
          color: accent, marginBottom: 4,
        }}>RELATED CLIP</div>
        <div style={{
          fontSize: isMobile ? 13 : 15, fontWeight: 800,
          color: '#0B1F3A', letterSpacing: '-0.01em', lineHeight: 1.35,
          textWrap: 'balance', marginBottom: 4,
        }}>{video.title}</div>
        <button
          onClick={() => onPlay && onPlay(video)}
          style={{
            marginTop: 4,
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
            color: accent, fontSize: 11.5, fontWeight: 700,
            display: 'inline-flex', alignItems: 'center', gap: 3,
          }}
        >
          전체화면으로 보기 <span style={{ fontSize: 14 }}>›</span>
        </button>
      </div>
    </div>
  );
}

// 섹션 타이틀 (영문 라벨 + 한글 타이틀)
function SectionTitle({ kicker, title, isMobile = false }) {
  return (
    <div style={{ marginBottom: isMobile ? 16 : 22 }}>
      <div style={{
        fontSize: isMobile ? 10 : 11, fontWeight: 800,
        letterSpacing: '0.22em', color: '#00B6F0', marginBottom: 6,
      }}>{kicker}</div>
      <h3 style={{
        margin: 0, fontSize: isMobile ? 22 : 30, fontWeight: 800,
        color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.2,
      }}>{title}</h3>
    </div>
  );
}

// 숫자 카운트업 — IntersectionObserver로 화면 진입 시 0→target까지 easeOut 애니메이션
// "1,300" 같이 콤마 포함된 문자열, "국내 업계" 같이 텍스트(textBig)도 안전하게 처리
function CountUp({ value, duration = 1600 }) {
  const ref = React.useRef(null);
  const [display, setDisplay] = React.useState(value);
  const startedRef = React.useRef(false);

  // 숫자만 분리 (콤마 제거)
  const numeric = React.useMemo(() => {
    if (typeof value !== 'string') return null;
    const cleaned = value.replace(/,/g, '');
    if (!/^\d+(\.\d+)?$/.test(cleaned)) return null;
    return parseFloat(cleaned);
  }, [value]);
  const hasComma = typeof value === 'string' && value.includes(',');

  React.useEffect(() => {
    if (numeric === null) { setDisplay(value); return; }
    setDisplay('0');

    const el = ref.current;
    if (!el) return;

    let scrollRoot = el.parentElement;
    while (scrollRoot && scrollRoot !== document.body) {
      const cs = getComputedStyle(scrollRoot);
      if (cs.overflowY === 'auto' || cs.overflowY === 'scroll') break;
      scrollRoot = scrollRoot.parentElement;
    }

    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const current = numeric * eased;
        // 정수냐 소수냐 판별
        const v = Number.isInteger(numeric) ? Math.round(current) : current.toFixed(1);
        const formatted = hasComma ? Number(v).toLocaleString('ko-KR') : String(v);
        setDisplay(formatted);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4 && !startedRef.current) {
          startedRef.current = true;
          run();
        }
      });
    }, {
      root: scrollRoot && scrollRoot !== document.body ? scrollRoot : null,
      threshold: [0, 0.4, 0.8],
    });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [numeric, value, duration, hasComma]);

  return <span ref={ref}>{display}</span>;
}

// 통계 카드 (글로벌 애터미 6개 통계)
function StatCard({ stat, isMobile = false, full = false }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(11,31,58,0.06)',
      borderRadius: 14,
      padding: isMobile ? '18px 16px' : '24px 22px',
      boxShadow: '0 2px 8px rgba(11,31,58,0.04)',
      gridColumn: full ? '1 / -1' : 'auto',
    }}>
      <div style={{
        fontSize: isMobile ? 11 : 12, fontWeight: 700,
        color: '#6B7A90', letterSpacing: '0.04em', marginBottom: 12,
      }}>{stat.label}</div>

      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 6, flexWrap: 'wrap',
        marginBottom: 10,
      }}>
        {stat.prefix && (
          <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 600, color: '#0B1F3A' }}>{stat.prefix}</span>
        )}
        <span style={{
          fontSize: stat.textBig ? (isMobile ? 26 : 38) : (isMobile ? 38 : 56),
          fontWeight: 900, color: '#00B6F0',
          letterSpacing: '-0.03em', lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}>
          <CountUp value={stat.big} />
        </span>
        <span style={{
          fontSize: isMobile ? 18 : 22, fontWeight: 700, color: '#0B1F3A',
        }}>{stat.unit}</span>
      </div>

      {stat.info && (
        <div style={{
          fontSize: isMobile ? 10.5 : 11, color: '#6B7A90', fontWeight: 600,
          marginBottom: 10,
        }}>{stat.info}</div>
      )}

      <div style={{
        fontSize: isMobile ? 12 : 13, lineHeight: 1.6, color: '#2B3A52',
        textWrap: 'pretty',
      }}>{stat.txt}</div>
    </div>
  );
}

// 헤모힘 하이라이트 4종
function HemoHighlight({ item, isMobile = false }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 12,
      padding: isMobile ? '14px 14px' : '18px 18px',
      border: '1px solid rgba(0,182,240,0.15)',
      display: 'flex', flexDirection: 'column', gap: 8,
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: 4,
      }}>
        <span style={{
          fontSize: isMobile ? 28 : 36, fontWeight: 900,
          color: '#00B6F0', letterSpacing: '-0.03em', lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}>{item.rank}</span>
        {item.unit && (
          <span style={{
            fontSize: isMobile ? 14 : 16, fontWeight: 700, color: '#0B1F3A',
          }}>{item.unit}</span>
        )}
      </div>
      <div style={{
        fontSize: isMobile ? 13 : 14, fontWeight: 800, color: '#0B1F3A',
        letterSpacing: '-0.01em',
      }}>{item.label}</div>
      <div style={{
        fontSize: isMobile ? 11.5 : 12, color: '#4A5568', lineHeight: 1.5,
      }}>{item.desc}</div>
      {item.info && (
        <div style={{ fontSize: 10, color: '#8A97AD', fontWeight: 600 }}>{item.info}</div>
      )}
    </div>
  );
}

// 타임라인 한 줄
function TimelineRow({ items, isMobile = false }) {
  return (
    <ol style={{
      listStyle: 'none', margin: 0, padding: 0,
      display: 'flex', flexWrap: 'wrap',
      gap: isMobile ? 12 : 18,
    }}>
      {items.map((it, i) => (
        <li key={i} style={{
          flex: isMobile ? '1 0 calc(50% - 6px)' : '1 0 calc(33.3% - 12px)',
          minWidth: isMobile ? 130 : 160,
          background: '#fff',
          borderRadius: 10,
          padding: isMobile ? '12px 14px' : '14px 16px',
          border: '1px solid rgba(11,31,58,0.06)',
          borderLeft: '3px solid #00B6F0',
        }}>
          <div style={{
            fontSize: isMobile ? 13 : 14, fontWeight: 900,
            color: '#00B6F0', marginBottom: 4,
            fontVariantNumeric: 'tabular-nums',
          }}>{it.year}</div>
          <div style={{
            fontSize: isMobile ? 11.5 : 12.5, color: '#0B1F3A', fontWeight: 600,
            lineHeight: 1.45, textWrap: 'pretty',
          }}>{it.txt}</div>
        </li>
      ))}
    </ol>
  );
}

// 풀스크린 영상 모달 — 클릭한 영상 재생
function AboutVideoModal({ video, onClose, isMobile = false }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute', inset: 0, zIndex: 70,
        background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: isMobile ? 0 : 20,
        animation: 'shortsFadeIn 0.22s ease both',
      }}
    >
      {/* 닫기 */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="닫기"
        style={{
          position: 'absolute', top: 16, right: 16, zIndex: 5,
          width: 38, height: 38, borderRadius: 999, border: 'none',
          background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
          cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* 미디어 — 9:16 stage (영상 또는 이미지) */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={isMobile ? {
          position: 'absolute', inset: 0,
          background: '#000', overflow: 'hidden',
        } : {
          position: 'relative',
          height: '100%', maxHeight: 720,
          aspectRatio: '9 / 16',
          maxWidth: '100%',
          background: '#000',
          borderRadius: 14, overflow: 'hidden',
          boxShadow: '0 20px 80px rgba(0,0,0,0.6)',
        }}
      >
        {video.imageUrl ? (
          // 이미지 모드 (창업자 인물 카드 등)
          <>
            {/* 블러 배경 */}
            <img
              src={video.imageUrl}
              alt=""
              aria-hidden="true"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'blur(28px) brightness(0.55) saturate(1.2)',
                transform: 'scale(1.15)',
                pointerEvents: 'none',
              }}
            />
            {/* 메인 이미지 */}
            <img
              src={video.imageUrl}
              alt={video.memberName || video.title || ''}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'contain',
                zIndex: 1,
                background: 'transparent',
              }}
            />
          </>
        ) : (
          <>
            {/* 블러 배경 */}
            <video
              src={video.videoUrl}
              poster={video.thumb}
              autoPlay loop muted playsInline
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
                filter: 'blur(28px) brightness(0.55) saturate(1.2)',
                transform: 'scale(1.15)',
                pointerEvents: 'none',
              }}
            />
            {/* 메인 영상 */}
            <video
              src={video.videoUrl}
              poster={video.thumb}
              autoPlay loop playsInline controls
              controlsList="nodownload"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'contain',
                background: 'transparent',
                zIndex: 1,
              }}
            />
          </>
        )}

        {/* 캡션 */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '40px 16px 18px',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0))',
          color: '#fff', zIndex: 2,
          pointerEvents: 'none',
        }}>
          <div style={{
            fontSize: 11, fontWeight: 800,
            letterSpacing: video.imageUrl ? '-0.01em' : '0.18em',
            color: '#5CD3F7', marginBottom: 6,
          }}>{video.imageUrl ? '사업자가 소개하는 애터미' : 'RELATED CLIP'}</div>
          <div style={{
            fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em',
            textShadow: '0 1px 6px rgba(0,0,0,0.6)',
          }}>{video.title}</div>
          {video.memberName && (
            <div style={{
              marginTop: 4, fontSize: 11.5,
              color: 'rgba(255,255,255,0.8)', fontWeight: 600,
            }}>— {video.memberName} · {video.memberRank}</div>
          )}
        </div>
      </div>
    </div>
  );
}

// 히어로 — 회원 소개 영상 (9:16 숏폼) + 텍스트
function AboutHero({ isMobile = false, onPlay }) {
  const { t } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k };
  return (
    <section style={{
      position: 'relative',
      background: `linear-gradient(135deg, #0B1F3A 0%, #0B2D58 60%, #00B6F0 130%)`,
      color: '#fff',
      overflow: 'hidden',
    }}>
      {/* 배경 이미지 (페이드) */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `url("${HERO_BG}") center/cover no-repeat`,
        opacity: 0.18,
        mixBlendMode: 'screen',
      }} />

      <div style={{
        position: 'relative',
        maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '40px 20px 36px' : '70px 36px 60px',
        display: 'flex', flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 28 : 48, alignItems: 'center',
      }}>
        {/* 좌측 — 카피 */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 12px', borderRadius: 999,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            color: '#5CD3F7', fontSize: 10, fontWeight: 800, letterSpacing: '0.22em',
            marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, background: '#00B6F0', transform: 'rotate(45deg)' }} />
            ATOMY AT A GLANCE
            <span style={{ width: 6, height: 6, background: '#00B6F0', transform: 'rotate(45deg)' }} />
          </div>
          <h1 style={{
            margin: 0, fontSize: isMobile ? 28 : 44, fontWeight: 900,
            letterSpacing: '-0.025em', lineHeight: 1.15,
            textWrap: 'balance',
          }}>
            {t('about.title')}<br />
            <span style={{ color: '#5CD3F7' }}>Global Atomy</span>
          </h1>
          <p style={{
            margin: '14px 0 0', fontSize: isMobile ? 13 : 15, lineHeight: 1.65,
            color: 'rgba(255,255,255,0.85)', fontWeight: 500,
            textWrap: 'pretty', maxWidth: 520,
          }}>
            절대품질 절대가격으로 27개국 1,000만 회원과 함께하는 글로벌 직판기업.
            애터미가 걸어온 길을 회원의 시선으로 만나보세요.
          </p>

          {/* 회원 소개 캡션 */}
          {!isMobile && (
            <div style={{
              marginTop: 28,
              display: 'inline-flex', alignItems: 'center', gap: 12,
              padding: '10px 16px 10px 10px', borderRadius: 999,
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}>
              <span style={{
                width: 32, height: 32, borderRadius: 999,
                background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: '#0B1F3A', fontWeight: 900, fontSize: 12,
              }}>{MEMBER_INTRO.memberName[0]}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 800 }}>
                  {MEMBER_INTRO.memberName} <span style={{ color: '#5CD3F7', fontWeight: 700 }}>· {MEMBER_INTRO.memberRank}</span>
                </div>
                <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.7)' }}>회원이 직접 말하는 애터미</div>
              </div>
            </div>
          )}
        </div>

        {/* 우측 — 창업자 인물 카드 (9:16) — 클릭 시 풀스크린 확대 */}
        <div
          onClick={() => onPlay && onPlay({
            imageUrl: MEMBER_INTRO.imageUrl,
            title: MEMBER_INTRO.caption,
            memberName: MEMBER_INTRO.memberName,
            memberRank: MEMBER_INTRO.memberRank,
          })}
          style={{
            flexShrink: 0,
            width: isMobile ? '100%' : 264,
            maxWidth: isMobile ? 240 : 264,
            aspectRatio: '9 / 16',
            borderRadius: 18, overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
            border: '2px solid rgba(255,255,255,0.18)',
            background: '#000',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          <img
            src={MEMBER_INTRO.imageUrl}
            alt={MEMBER_INTRO.memberName}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center 25%',
              display: 'block',
            }}
          />
          {/* 하단 그라디언트 + 캡션 */}
          <div style={{
            position: 'absolute', left: 0, right: 0, bottom: 0,
            padding: '40px 14px 14px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.85), rgba(0,0,0,0))',
            color: '#fff',
          }}>
            <div className="chairman-badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 8px', borderRadius: 4,
              background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
              color: '#0B1F3A', fontSize: 9, fontWeight: 800, letterSpacing: '0.1em',
              marginBottom: 8,
            }}>
              {ProfileIcon.crown(8, '#0B1F3A')} {MEMBER_INTRO.memberRank}
            </div>
            <div style={{
              fontSize: 12.5, fontWeight: 700, lineHeight: 1.4,
              textShadow: '0 1px 4px rgba(0,0,0,0.6)',
            }}>{MEMBER_INTRO.caption}</div>
            <div style={{
              fontSize: 10.5, color: 'rgba(255,255,255,0.75)', marginTop: 4, fontWeight: 600,
            }}>— {MEMBER_INTRO.memberName}</div>
          </div>
          {/* 상단 라벨 */}
          <div style={{
            position: 'absolute', top: 10, left: 10,
            display: 'inline-flex', alignItems: 'center', gap: 5,
            padding: '4px 9px', borderRadius: 999,
            background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '-0.01em',
          }}>
            <span style={{ width: 5, height: 5, background: '#5CD3F7', transform: 'rotate(45deg)' }} />
            사업자가 소개하는 애터미
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// 메인 페이지
// =============================================================

function AtomyAbout({ isMobile = false, onPlay = () => {} }) {
  const handlePlay = (video) => onPlay(video);

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F7FA',
      color: '#0B1F3A',
      flex: 1,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* 1. HERO */}
      <AboutHero isMobile={isMobile} onPlay={handlePlay} />

      {/* 2. WE'RE GLOBAL ATOMY — 통계 6 + 절대품질 */}
      <section style={{
        padding: isMobile ? '40px 20px' : '70px 36px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <SectionTitle
          kicker="WE'RE GLOBAL ATOMY!"
          title="우리는 글로벌 애터미입니다"
          isMobile={isMobile}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 12 : 16,
          marginBottom: isMobile ? 16 : 20,
        }}>
          {COMPANY_STATS.map((s, i) => <StatCard key={i} stat={s} isMobile={isMobile} />)}

          {/* 절대품질 절대가격 — 풀폭 */}
          <div style={{
            gridColumn: isMobile ? '1 / -1' : '1 / -1',
            background: 'linear-gradient(135deg, #0B1F3A 0%, #0B2D58 100%)',
            color: '#fff', borderRadius: 14,
            padding: isMobile ? '24px 20px' : '32px 36px',
            display: 'flex', flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: isMobile ? 18 : 32,
          }}>
            <div>
              <div style={{
                fontSize: isMobile ? 11 : 12, fontWeight: 800,
                letterSpacing: '0.22em', color: '#5CD3F7', marginBottom: 8,
              }}>ABSOLUTE QUALITY · ABSOLUTE PRICE</div>
              <div style={{
                fontSize: isMobile ? 20 : 28, fontWeight: 900,
                letterSpacing: '-0.02em', lineHeight: 1.25,
              }}>애터미의 절대품질 절대가격</div>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'flex-start' : 'flex-end',
            }}>
              <div style={{
                display: 'flex', alignItems: 'baseline', gap: 8,
              }}>
                <span style={{
                  fontSize: isMobile ? 13 : 14, fontWeight: 700,
                  color: 'rgba(255,255,255,0.7)',
                }}>{ABSOLUTE_QUALITY.label}</span>
                <span style={{
                  fontSize: isMobile ? 44 : 64, fontWeight: 900,
                  color: '#5CD3F7', letterSpacing: '-0.03em', lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums',
                }}>{ABSOLUTE_QUALITY.big}</span>
                <span style={{ fontSize: isMobile ? 18 : 22, fontWeight: 800 }}>{ABSOLUTE_QUALITY.unit}</span>
              </div>
              <div style={{
                fontSize: isMobile ? 11.5 : 12.5, color: 'rgba(255,255,255,0.85)',
                marginTop: 6, fontWeight: 600,
              }}>{ABSOLUTE_QUALITY.txt}</div>
              <div style={{
                fontSize: 10, color: 'rgba(255,255,255,0.55)', marginTop: 3,
              }}>{ABSOLUTE_QUALITY.info}</div>
            </div>
          </div>
        </div>

        {/* 섹션 영상 카드 — 헤모힘 */}
        <div style={{ marginTop: isMobile ? 20 : 28 }}>
          <SectionVideoCard video={SECTION_VIDEOS.hemohim} isMobile={isMobile} onPlay={handlePlay} />
        </div>
      </section>

      {/* 3. 헤모힘 */}
      <section style={{
        padding: isMobile ? '0 20px 40px' : '0 36px 70px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <SectionTitle kicker="HEMOHIM" title="애터미 헤모힘" isMobile={isMobile} />

        <p style={{
          margin: '0 0 18px', fontSize: isMobile ? 12.5 : 14, lineHeight: 1.7,
          color: '#2B3A52', textWrap: 'pretty', maxWidth: 920,
        }}>
          헤모힘 당귀등 혼합추출물은 국내에서 재배한 당귀, 천궁, 백작약 등으로 개발한 개별 인정형 기능성 원료입니다.
          식품의약품안전처(MFDS)로부터 개별인정형 원료로는 ‘처음으로’ 면역기능 개선에 도움을 줄 수 있는
          건강기능식품 기능성 원료로 인정받았습니다.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 10 : 14,
        }}>
          {HEMOHIM_HIGHLIGHTS.map((h, i) => (
            <HemoHighlight key={i} item={h} isMobile={isMobile} />
          ))}
        </div>
      </section>

      {/* 4. 셀랙티브 */}
      <section style={{
        padding: isMobile ? '0 20px 40px' : '0 36px 70px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <SectionTitle
          kicker="ABSOLUTE CELLACTIVE"
          title="앱솔루트 셀랙티브 스킨케어"
          isMobile={isMobile}
        />
        <div style={{
          background: '#fff', borderRadius: 16,
          padding: isMobile ? '20px 18px' : '32px 32px',
          border: '1px solid rgba(11,31,58,0.06)',
          display: 'flex', flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 16 : 28,
          alignItems: 'flex-start',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: isMobile ? 16 : 20, fontWeight: 800,
              color: '#0B1F3A', marginBottom: 6,
            }}>화장품 업계 최초 <span style={{ color: '#00B6F0' }}>세종대왕상 수상</span></div>
            <p style={{
              margin: 0, fontSize: isMobile ? 12.5 : 13.5, lineHeight: 1.65,
              color: '#2B3A52', textWrap: 'pretty',
            }}>
              앱솔루트 셀랙티브 스킨케어가 특허기술상인 IR52와 NEP 인증에 이어 화장품 업계 최초로
              대한민국 특허청 세종대왕상을 수상했습니다. 독일의 피부과학연구소 ‘더마 테스트사’에서도
              Excellent 등급을 획득하며 독자적 피부 기술의 우수성을 인증받았습니다.
            </p>
          </div>
        </div>

        {/* 타임라인 */}
        <div style={{ marginTop: isMobile ? 16 : 22 }}>
          <TimelineRow items={CELLACTIVE_TIMELINE} isMobile={isMobile} />
        </div>

        {/* 영상 카드 */}
        <div style={{ marginTop: isMobile ? 16 : 22 }}>
          <SectionVideoCard video={SECTION_VIDEOS.cellactive} isMobile={isMobile} onPlay={handlePlay} />
        </div>
      </section>

      {/* 5. 노니 */}
      <section style={{
        padding: isMobile ? '0 20px 40px' : '0 36px 70px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <SectionTitle
          kicker="ATOMY NONI"
          title="애터미 노니 — 1,440시간 발효"
          isMobile={isMobile}
        />
        <p style={{
          margin: '0 0 18px', fontSize: isMobile ? 12.5 : 14, lineHeight: 1.7,
          color: '#2B3A52', maxWidth: 920, textWrap: 'pretty',
        }}>
          애터미 오롯이 담은 유기농 발효 노니는 2024년 차세대 세계 일류 상품으로 선정되고,
          2026년 IR52 장영실상을 수상했습니다. 7종 복합 유산균을 투입해 특허 발효기술
          ‘바이오컨버전’으로 약 1,440시간 발효하여, 유효 성분의 흡수율은 물론 맛과 효능을 획기적으로 개선했습니다.
        </p>
        <TimelineRow items={NONI_TIMELINE} isMobile={isMobile} />

        <div style={{ marginTop: isMobile ? 16 : 22 }}>
          <SectionVideoCard video={SECTION_VIDEOS.noni} isMobile={isMobile} onPlay={handlePlay} />
        </div>
      </section>

      {/* 6. 칫솔 + 치약 (가로 2분할) */}
      <section style={{
        padding: isMobile ? '0 20px 40px' : '0 36px 70px',
        maxWidth: 1280, margin: '0 auto',
      }}>
        <SectionTitle
          kicker="ORAL CARE"
          title="국민 구강용품, 1초의 신화"
          isMobile={isMobile}
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 14 : 20,
        }}>
          {/* 칫솔 */}
          <div style={{
            background: '#fff', borderRadius: 14,
            padding: isMobile ? '20px 18px' : '24px 22px',
            border: '1px solid rgba(11,31,58,0.06)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8,
            }}>
              <span style={{
                fontSize: isMobile ? 38 : 50, fontWeight: 900, color: '#00B6F0',
                letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
              }}>1</span>
              <span style={{ fontSize: isMobile ? 16 : 20, fontWeight: 800 }}>초</span>
            </div>
            <h4 style={{
              margin: 0, fontSize: isMobile ? 16 : 18, fontWeight: 800,
              color: '#0B1F3A', letterSpacing: '-0.01em',
            }}>1초에 1개씩 팔리는 <span style={{ color: '#00B6F0' }}>애터미 칫솔</span></h4>
            <p style={{
              margin: '8px 0 0', fontSize: isMobile ? 12 : 13, color: '#2B3A52',
              lineHeight: 1.6, textWrap: 'pretty',
            }}>
              누적 판매 3억 개 돌파. 1초에 한 개씩 팔리는 ‘1초 칫솔’로 합리적 가격과 우수한 품질로
              국민 구강용품 시장을 선도합니다.
            </p>
          </div>

          {/* 치약 */}
          <div style={{
            background: '#fff', borderRadius: 14,
            padding: isMobile ? '20px 18px' : '24px 22px',
            border: '1px solid rgba(11,31,58,0.06)',
          }}>
            <div style={{
              display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8,
            }}>
              <span style={{
                fontSize: isMobile ? 38 : 50, fontWeight: 900, color: '#00B6F0',
                letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums',
              }}>1</span>
              <span style={{ fontSize: isMobile ? 16 : 20, fontWeight: 800 }}>위</span>
            </div>
            <h4 style={{
              margin: 0, fontSize: isMobile ? 16 : 18, fontWeight: 800,
              color: '#0B1F3A', letterSpacing: '-0.01em',
            }}>4년 연속 수출 <span style={{ color: '#00B6F0' }}>애터미 치약</span></h4>
            <p style={{
              margin: '8px 0 0', fontSize: isMobile ? 12 : 13, color: '#2B3A52',
              lineHeight: 1.6, textWrap: 'pretty',
            }}>
              브라질산 그린 프로폴리스 추출물과 매스틱 오일 함유. 의약외품 수출 부문 4년 연속 1위.
              미국, 일본, 독일, 중국, 러시아 등 26개국에 수출되고 있습니다.
            </p>
          </div>
        </div>

        <div style={{ marginTop: isMobile ? 16 : 22 }}>
          <SectionVideoCard video={SECTION_VIDEOS.oral} isMobile={isMobile} onPlay={handlePlay} />
        </div>
      </section>

      {/* 7. 푸터 */}
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
            <div style={{ color: 'rgba(255,255,255,0.4)', marginTop: 4, fontSize: isMobile ? 10 : 11 }}>
              © 2023 ATOMY CO., LTD. ALL RIGHTS RESERVED
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

Object.assign(window, { AtomyAbout, AboutVideoModal, AutoPlayVideo });
