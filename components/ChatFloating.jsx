// ChatFloating.jsx — 우측 하단 백조 캐릭터 + "무엇이든 물어보세요" + 챗 패널
// 기능: idle 부유 / 알림 도트 / 자동 등장 / 챗 패널 슬라이드 / 백조 아이콘이 들어간 버튼

const ATOMY_SWAN_URL = 'https://www.genspark.ai/api/files/s/7dKEOpJs';

// 버튼 안에 들어가는 작은 백조 아이콘 (SVG, 단색)
function SwanIconMini({ size = 18, color = '#fff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill={color}
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* 작은 왕관 */}
      <path d="M28 8l3 4 3-3 3 3 3-4-1 7H29z" />
      {/* 머리 */}
      <circle cx="34" cy="20" r="4" />
      {/* 목 — S자 */}
      <path d="M34 24c-1 4-5 6-5 11s3 8 7 8" stroke={color} strokeWidth="3.5"
            strokeLinecap="round" fill="none"/>
      {/* 몸통 */}
      <path d="M14 46c0-9 8-15 18-15s18 6 18 15c0 4-3 7-7 7H21c-4 0-7-3-7-7z" />
      {/* 날개 라인 */}
      <path d="M22 46c-2-3-2-7 0-10M42 46c2-3 2-7 0-10"
            stroke={color === '#fff' ? '#0B1F3A' : '#fff'} strokeWidth="1.4"
            fill="none" strokeLinecap="round" opacity="0.45"/>
    </svg>
  );
}

function ChatFloating({
  size = 'desktop',          // 'mobile' | 'desktop'
  bottom,
  right,
  message = '무엇이든 물어보세요',
  notificationCount = 1,     // 새 답변 카운트
  autoOpenDelay = 1800,      // 페이지 로드 후 N ms 뒤 메시지 등장
}) {
  const [hover, setHover] = React.useState(false);
  const [showMessage, setShowMessage] = React.useState(false);
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [unread, setUnread] = React.useState(notificationCount);
  const isMobile = size === 'mobile';

  // 자동 등장
  React.useEffect(() => {
    const t = setTimeout(() => setShowMessage(true), autoOpenDelay);
    return () => clearTimeout(t);
  }, [autoOpenDelay]);

  // 사이즈 셋 — 원형 컨테이너이므로 정사각형
  const characterSize = isMobile ? 96 : 130;
  const characterHeight = characterSize; // 정원형으로 통일
  const buttonHeight  = isMobile ? 44 : 52;
  const fontSize      = isMobile ? 12.5 : 14;
  const defaultBottom = isMobile ? 84 : 28;
  const defaultRight  = isMobile ? 12 : 28;

  // 챗 패널 사이즈
  const panelW = isMobile ? 320 : 360;
  const panelH = isMobile ? 600 : 540;

  const openPanel = () => {
    setPanelOpen(true);
    setUnread(0); // 패널 열면 알림 소거
  };

  return (
    <>
      <div className="chat-floating-host" style={{
        position: 'absolute',
        bottom: bottom != null ? bottom : defaultBottom,
        right:  right  != null ? right  : defaultRight,
        zIndex: 25,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end',
        gap: 8,
        pointerEvents: 'none',
      }}>
        {/* 백조 캐릭터 — idle 애니메이션 + 알림 도트 */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={openPanel}
          style={{
            position: 'relative',
            width: characterSize,
            height: characterHeight,
            pointerEvents: 'auto',
            cursor: 'pointer',
          }}
        >
          {/* 부유(idle) 컨테이너 — 원형 흰 배경 + 백조 캐릭터 */}
          <div style={{
            width: '100%', height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ffffff 0%, #E8F8FE 100%)',
            border: '2px solid rgba(0,182,240,0.18)',
            overflow: 'hidden',
            position: 'relative',
            animation: hover ? 'none' : 'swanIdle 3s ease-in-out infinite',
            transition: 'transform 0.25s cubic-bezier(.2,.7,.3,1), box-shadow 0.25s',
            transform: hover ? 'translateY(-6px) scale(1.04)' : 'none',
            boxShadow: hover
              ? '0 18px 40px rgba(0, 182, 240, 0.45), 0 0 0 6px rgba(0,182,240,0.08)'
              : '0 8px 22px rgba(0, 182, 240, 0.28), 0 0 0 4px rgba(0,182,240,0.06)',
          }}>
            <img
              src={ATOMY_SWAN_URL}
              alt="atomy assistant"
              style={{
                width: '120%', height: '120%',
                position: 'absolute',
                left: '-10%', top: '-2%',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                opacity: hover ? 1 : 0.95,
                mixBlendMode: 'multiply',
                transition: 'opacity 0.2s ease',
                display: 'block',
              }}
            />
          </div>

          {/* 알림 도트 — 원형 컨테이너 우상단 (시계 1시 방향), 펄스 링 포함 */}
          {unread > 0 && (
            <div style={{
              position: 'absolute',
              top: characterHeight * 0.05,
              right: characterSize * 0.05,
              width: isMobile ? 22 : 26,
              height: isMobile ? 22 : 26,
              pointerEvents: 'none',
              zIndex: 2,
            }}>
              {/* 펄스 링 */}
              <span style={{
                position: 'absolute', inset: 0, borderRadius: 999,
                background: '#FF3B6A',
                animation: 'notifPulse 1.4s ease-out infinite',
              }} />
              {/* 본체 */}
              <span style={{
                position: 'absolute', inset: 0, borderRadius: 999,
                background: '#FF3B6A', border: '2px solid #fff',
                color: '#fff', fontSize: isMobile ? 11 : 13, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              }}>{unread}</span>
            </div>
          )}

          {/* 호버 시 작은 말풍선 — 백조가 인사 */}
          {hover && !panelOpen && (
            <div style={{
              position: 'absolute',
              top: characterHeight * 0.4,
              right: characterSize + 10,
              padding: '6px 11px', borderRadius: 12,
              background: '#0B1F3A',
              color: '#fff', fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap',
              boxShadow: '0 6px 18px rgba(11,31,58,0.25)',
              animation: 'shortsFadeIn 0.18s ease both',
              pointerEvents: 'none',
            }}>
              안녕하세요! 🦢
              {/* 말풍선 꼬리 */}
              <span style={{
                position: 'absolute', right: -6, top: '50%', transform: 'translateY(-50%)',
                width: 0, height: 0,
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: '6px solid #0B1F3A',
              }} />
            </div>
          )}
        </div>

        {/* 메시지 버튼 + 닫기 — 자동 등장 */}
        {showMessage && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            pointerEvents: 'auto',
            animation: 'chatPopIn 0.5s cubic-bezier(.2,.9,.3,1.4) both',
          }}>
            {/* 메인 메시지 버튼 — 백조 아이콘 + 시안 그라디언트 톤 */}
            <button
              onClick={openPanel}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                height: buttonHeight,
                padding: `0 ${isMobile ? 16 : 20}px 0 ${isMobile ? 10 : 12}px`,
                borderRadius: 999, border: 'none',
                background: 'linear-gradient(135deg, #00B6F0 0%, #1FC5F8 50%, #5CD3F7 100%)',
                color: '#fff',
                fontSize, fontWeight: 800, letterSpacing: '-0.01em',
                cursor: 'pointer',
                boxShadow: hover
                  ? '0 12px 30px rgba(0,182,240,0.55)'
                  : '0 8px 22px rgba(0,182,240,0.4)',
                whiteSpace: 'nowrap',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                transform: hover ? 'translateY(-1px)' : 'none',
              }}
            >
              {/* 백조 아이콘 — 완전한 원형, 흰 배경에 시안 백조 캐릭터 */}
              <span style={{
                width: isMobile ? 30 : 34, height: isMobile ? 30 : 34,
                borderRadius: '50%',
                background: '#fff',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'inset 0 0 0 1.5px rgba(0,182,240,0.2)',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img
                  src={ATOMY_SWAN_URL}
                  alt="atomy"
                  style={{
                    width: '130%', height: '130%',
                    objectFit: 'cover', objectPosition: 'center 30%',
                    mixBlendMode: 'multiply',
                    display: 'block',
                  }}
                />
              </span>
              {message}
              <span style={{ fontSize: isMobile ? 14 : 16, opacity: 0.85 }}>›</span>
            </button>

            {/* 닫기 버튼 */}
            <button
              onClick={(e) => { e.stopPropagation(); setShowMessage(false); }}
              aria-label="닫기"
              style={{
                width: isMobile ? 22 : 26, height: isMobile ? 22 : 26,
                borderRadius: 999, border: 'none',
                background: 'rgba(11,31,58,0.55)', backdropFilter: 'blur(8px)',
                cursor: 'pointer', padding: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              }}
            >
              <svg width={isMobile ? 11 : 12} height={isMobile ? 11 : 12}
                   viewBox="0 0 24 24" fill="none" stroke="#fff"
                   strokeWidth="2.6" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* 챗 패널 — 우측 하단에서 슬라이드 인 */}
      {panelOpen && (
        <ChatPanel
          isMobile={isMobile}
          width={panelW}
          height={panelH}
          bottom={bottom != null ? bottom : defaultBottom}
          right={right != null ? right : defaultRight}
          onClose={() => setPanelOpen(false)}
        />
      )}
    </>
  );
}

// 챗 패널 — 우측 하단에서 슬라이드 인하는 대화창
// 애터미 가입문의 폼 — 채팅 패널 안에 시트처럼 떠있음
function JoinInquiryForm({ onClose, onSubmit }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [memo, setMemo] = React.useState('');
  const [agree, setAgree] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  // 휴대폰 번호 자동 포맷
  const formatPhone = (v) => {
    const digits = v.replace(/\D/g, '').slice(0, 11);
    if (digits.length < 4) return digits;
    if (digits.length < 8) return `${digits.slice(0,3)}-${digits.slice(3)}`;
    return `${digits.slice(0,3)}-${digits.slice(3,7)}-${digits.slice(7)}`;
  };

  const phoneValid = /^01[0-9]-\d{3,4}-\d{4}$/.test(phone);
  const canSubmit = name.trim().length >= 2 && phoneValid && agree;

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setTimeout(() => {
      onSubmit && onSubmit({ name: name.trim(), phone, memo: memo.trim() });
      setSubmitting(false);
    }, 350);
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 5,
      background: 'rgba(11,31,58,0.45)', backdropFilter: 'blur(4px)',
      animation: 'shortsFadeIn 0.18s ease both',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    }}
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderTopLeftRadius: 18, borderTopRightRadius: 18,
          padding: '20px 18px 16px',
          maxHeight: '92%',
          overflowY: 'auto',
          animation: 'goalSlideLeft 0.28s cubic-bezier(.2,.7,.3,1) both',
          // 모바일 sheet에서 위에서 슬라이드업하는 느낌이 더 좋으니 transform 변경
          transform: 'translateY(0)',
          boxShadow: '0 -16px 40px rgba(11,31,58,0.18)',
        }}
      >
        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: 10, marginBottom: 14,
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 8px', borderRadius: 999,
              background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
              color: '#fff', fontSize: 9.5, fontWeight: 800, letterSpacing: '-0.01em',
              marginBottom: 8,
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff"
                   strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              JOIN INQUIRY
            </div>
            <h3 style={{
              margin: 0, fontSize: 17, fontWeight: 900,
              color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.3,
            }}>애터미 가입문의</h3>
            <p style={{
              margin: '4px 0 0', fontSize: 11.5, color: '#6B7A90',
              fontWeight: 600, lineHeight: 1.5,
            }}>연락처를 남겨주시면 담당자가 1:1로 안내드립니다.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="닫기"
            style={{
              flexShrink: 0,
              width: 28, height: 28, borderRadius: 999, border: 'none',
              background: 'rgba(11,31,58,0.06)', cursor: 'pointer', padding: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                 strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* 이름 */}
        <label style={fieldLabelStyle()}>
          이름 <span style={{ color: '#E84141' }}>*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="홍길동"
          maxLength={20}
          style={fieldInputStyle()}
        />

        {/* 전화번호 */}
        <label style={{ ...fieldLabelStyle(), marginTop: 12 }}>
          전화번호 <span style={{ color: '#E84141' }}>*</span>
        </label>
        <input
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          placeholder="010-0000-0000"
          maxLength={13}
          style={{
            ...fieldInputStyle(),
            borderColor: phone && !phoneValid ? '#FFB199' : 'rgba(11,31,58,0.12)',
          }}
        />
        {phone && !phoneValid && (
          <div style={{
            marginTop: 4, fontSize: 10.5, color: '#E84141', fontWeight: 700,
          }}>휴대폰 번호 형식을 확인해주세요</div>
        )}

        {/* 메모 */}
        <label style={{ ...fieldLabelStyle(), marginTop: 12 }}>
          메모 <span style={{ color: '#8A97AD', fontWeight: 600 }}>(선택)</span>
        </label>
        <textarea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="궁금한 점이나 연락 가능한 시간을 적어주세요"
          rows={3}
          maxLength={200}
          style={{
            ...fieldInputStyle(),
            minHeight: 72, resize: 'vertical', padding: '10px 12px',
            lineHeight: 1.5,
          }}
        />
        <div style={{
          textAlign: 'right', marginTop: 3,
          fontSize: 10, color: '#8A97AD', fontWeight: 600,
          fontVariantNumeric: 'tabular-nums',
        }}>{memo.length}/200</div>

        {/* 동의 체크 */}
        <label style={{
          display: 'flex', alignItems: 'flex-start', gap: 8,
          marginTop: 14, padding: '10px 12px', borderRadius: 8,
          background: '#F5F7FA', cursor: 'pointer',
        }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            style={{
              flexShrink: 0, marginTop: 2,
              width: 16, height: 16, accentColor: '#00B6F0',
              cursor: 'pointer',
            }}
          />
          <span style={{
            fontSize: 11.5, color: '#4A5568', fontWeight: 600, lineHeight: 1.55,
          }}>
            <span style={{ color: '#0B1F3A', fontWeight: 800 }}>(필수)</span> 개인정보 수집 및 이용에 동의합니다.
            <span style={{ color: '#8A97AD', display: 'block', marginTop: 2, fontSize: 10.5 }}>
              수집 항목: 이름, 전화번호, 메모 · 보유: 1년
            </span>
          </span>
        </label>

        {/* CTA */}
        <button
          type="submit"
          disabled={!canSubmit || submitting}
          style={{
            marginTop: 14, width: '100%',
            padding: '14px 14px', borderRadius: 12, border: 'none',
            background: canSubmit
              ? 'linear-gradient(135deg, #0B1F3A 0%, #00B6F0 130%)'
              : '#CBD3DD',
            color: '#fff', fontSize: 14, fontWeight: 900, letterSpacing: '-0.01em',
            cursor: canSubmit ? 'pointer' : 'default',
            boxShadow: canSubmit ? '0 8px 22px rgba(0,182,240,0.35)' : 'none',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            fontFamily: 'inherit',
            transition: 'background 0.15s, box-shadow 0.15s',
          }}
        >
          {submitting ? '신청 중…' : (
            <>
              가입문의 신청하기
              <span style={{ fontSize: 16 }}>→</span>
            </>
          )}
        </button>

        {/* 보조 안내 */}
        <div style={{
          marginTop: 8, fontSize: 10.5, color: '#8A97AD', fontWeight: 600,
          textAlign: 'center', lineHeight: 1.5,
        }}>
          평일 09:00 ~ 18:00 영업시간에 빠르게 연락드립니다
        </div>
      </form>
    </div>
  );
}

function fieldLabelStyle() {
  return {
    display: 'block',
    fontSize: 11.5, fontWeight: 800, color: '#0B1F3A',
    letterSpacing: '-0.01em', marginBottom: 6,
  };
}
function fieldInputStyle() {
  return {
    width: '100%', height: 40, padding: '0 14px',
    borderRadius: 8, border: '1px solid rgba(11,31,58,0.12)',
    background: '#fff',
    fontSize: 13, color: '#0B1F3A',
    fontFamily: 'inherit', outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s, box-shadow 0.15s',
  };
}

// 음성 대화 패널 — 마이크 시각화 + 자동 텍스트 변환 데모
function VoiceChatPanel({ onClose, onTranscript }) {
  const [state, setState] = React.useState('listening'); // 'listening' | 'transcribing' | 'done'
  const [seconds, setSeconds] = React.useState(0);
  const [transcript, setTranscript] = React.useState('');

  // 데모 — 4초 간 듣고, 1.5초 텍스트 변환 후 자동 전송
  // 실제로는 SpeechRecognition API 연결 가능
  React.useEffect(() => {
    let mounted = true;
    let timer;
    if (state === 'listening') {
      timer = setInterval(() => {
        if (!mounted) return;
        setSeconds(s => {
          if (s >= 4) {
            setState('transcribing');
            return s;
          }
          return s + 1;
        });
      }, 1000);
    } else if (state === 'transcribing') {
      // 1.5초 후 가짜 텍스트 표시
      const t = setTimeout(() => {
        if (!mounted) return;
        const samples = [
          '헤모힘 샷에 대해 알려주세요',
          '애터미 사업자 가입은 어떻게 하나요',
          '제가 사는 곳 근처에 센터가 있나요',
          '제품 추천해주세요',
        ];
        setTranscript(samples[Math.floor(Math.random() * samples.length)]);
        setState('done');
      }, 1500);
      return () => clearTimeout(t);
    }
    return () => {
      mounted = false;
      clearInterval(timer);
    };
  }, [state]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSend = () => {
    if (transcript) onTranscript && onTranscript(transcript);
  };

  // 파형 막대 — 8개 (CSS 애니메이션으로 들썩임)
  const bars = [0,1,2,3,4,5,6,7];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute', inset: 0, zIndex: 10,
        background: 'rgba(11,31,58,0.55)', backdropFilter: 'blur(8px)',
        animation: 'shortsFadeIn 0.22s ease both',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(180deg, #0B1F3A 0%, #0B2D58 100%)',
          color: '#fff',
          borderTopLeftRadius: 18, borderTopRightRadius: 18,
          padding: '24px 22px 20px',
          animation: 'goalSlideLeft 0.32s cubic-bezier(.2,.7,.3,1) both',
          boxShadow: '0 -16px 40px rgba(11,31,58,0.4)',
          position: 'relative',
        }}
      >
        {/* 닫기 */}
        <button
          onClick={onClose}
          aria-label="닫기"
          style={{
            position: 'absolute', top: 14, right: 14,
            width: 30, height: 30, borderRadius: 999, border: 'none',
            background: 'rgba(255,255,255,0.1)', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        {/* 상태 라벨 */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          padding: '4px 10px', borderRadius: 999,
          background: state === 'listening'
            ? 'rgba(0,182,240,0.18)'
            : state === 'transcribing' ? 'rgba(255,184,0,0.2)'
            : 'rgba(34,221,136,0.2)',
          color: state === 'listening' ? '#5CD3F7'
            : state === 'transcribing' ? '#FFB800'
            : '#22DD88',
          fontSize: 9.5, fontWeight: 800, letterSpacing: '0.14em',
          marginBottom: 14,
        }}>
          <span style={{
            width: 5, height: 5, borderRadius: 999,
            background: 'currentColor',
            animation: 'pulseDot 1.4s ease-in-out infinite',
          }} />
          {state === 'listening' ? 'LISTENING' : state === 'transcribing' ? 'TRANSCRIBING' : 'READY'}
        </div>

        {/* 큰 마이크 + 파형 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: 120, position: 'relative',
        }}>
          {/* 외곽 펄스 링 */}
          {state === 'listening' && (
            <span style={{
              position: 'absolute', width: 100, height: 100, borderRadius: 999,
              background: 'rgba(0,182,240,0.15)',
              animation: 'notifPulse 1.6s ease-out infinite',
            }} />
          )}
          {/* 마이크 원 */}
          <div style={{
            width: 80, height: 80, borderRadius: 999,
            background: state === 'done'
              ? 'linear-gradient(135deg, #22DD88, #5CD3F7)'
              : 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 28px rgba(0,182,240,0.45)',
            position: 'relative', zIndex: 2,
          }}>
            {state === 'done' ? (
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                   strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" stroke="#fff"
                   strokeWidth="0.5" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="12" rx="3" />
                <path d="M5 11a7 7 0 0014 0" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="12" y1="18" x2="12" y2="22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                <line x1="9" y1="22" x2="15" y2="22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>

        {/* 파형 — listening 상태에서만 활성 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 4, height: 32, marginTop: 14,
        }}>
          {bars.map(i => (
            <span key={i} style={{
              width: 4,
              height: state === 'listening' ? '100%' : '40%',
              borderRadius: 4,
              background: state === 'done' ? '#22DD88' : '#5CD3F7',
              opacity: state === 'listening' ? 0.9 : 0.4,
              animation: state === 'listening'
                ? `voiceBar 0.8s ease-in-out ${i * 80}ms infinite`
                : 'none',
              transformOrigin: 'center',
            }} />
          ))}
        </div>

        {/* 메시지 / 변환된 텍스트 */}
        <div style={{
          marginTop: 16, minHeight: 60, padding: '12px 14px', borderRadius: 12,
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
        }}>
          {state === 'listening' && (
            <>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                듣고 있어요...
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>
                자유롭게 말씀해주세요 · {seconds}초 / 5초
              </div>
            </>
          )}
          {state === 'transcribing' && (
            <>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: '#fff', marginBottom: 4 }}>
                텍스트로 변환 중...
              </div>
              <div style={{
                display: 'inline-flex', gap: 4, marginTop: 4,
              }}>
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    width: 6, height: 6, borderRadius: 999,
                    background: '#FFB800',
                    animation: `voiceBar 1s ease-in-out ${i * 150}ms infinite`,
                  }} />
                ))}
              </div>
            </>
          )}
          {state === 'done' && (
            <>
              <div style={{
                fontSize: 9.5, fontWeight: 800, color: '#22DD88',
                letterSpacing: '0.14em', marginBottom: 6,
              }}>변환 완료</div>
              <div style={{
                fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.5,
              }}>"{transcript}"</div>
            </>
          )}
        </div>

        {/* 버튼 영역 */}
        {state === 'done' ? (
          <div style={{
            marginTop: 14, display: 'grid',
            gridTemplateColumns: '1fr 1.5fr', gap: 8,
          }}>
            <button
              onClick={() => { setTranscript(''); setSeconds(0); setState('listening'); }}
              style={{
                padding: '12px', borderRadius: 10,
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff', fontSize: 12.5, fontWeight: 800,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              다시 말하기
            </button>
            <button
              onClick={handleSend}
              style={{
                padding: '12px', borderRadius: 10, border: 'none',
                background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
                color: '#0B1F3A', fontSize: 13, fontWeight: 900,
                cursor: 'pointer', fontFamily: 'inherit',
                boxShadow: '0 6px 18px rgba(0,182,240,0.4)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              메시지 보내기 →
            </button>
          </div>
        ) : (
          <button
            onClick={() => state === 'listening' && setState('transcribing')}
            disabled={state === 'transcribing'}
            style={{
              marginTop: 14, width: '100%',
              padding: '12px', borderRadius: 10, border: 'none',
              background: state === 'listening'
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(255,255,255,0.05)',
              color: state === 'listening' ? '#fff' : 'rgba(255,255,255,0.5)',
              fontSize: 12.5, fontWeight: 800,
              cursor: state === 'listening' ? 'pointer' : 'default',
              fontFamily: 'inherit',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            {state === 'listening' ? '🔇 말하기 종료' : '잠시만 기다려주세요...'}
          </button>
        )}
      </div>
    </div>
  );
}

function ChatPanel({ isMobile, width, height, bottom, right, onClose }) {
  const [input, setInput] = React.useState('');
  const [joinFormOpen, setJoinFormOpen] = React.useState(false);
  const [voiceOpen, setVoiceOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      role: 'bot',
      text: '안녕하세요! 애터미입니다 🦢\n무엇이든 물어보세요. 제품, 회원가입, 비즈니스 모두 답해드려요.',
    },
  ]);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages(m => [...m, { role: 'user', text }]);
    setInput('');
    // 가짜 응답 — 실제 연결 시 API 호출로 교체
    setTimeout(() => {
      setMessages(m => [...m, {
        role: 'bot',
        text: '문의 감사합니다. 담당자가 곧 답변드릴게요. 빠른 답변이 필요하시면 1:1 상담을 신청해주세요.',
      }]);
    }, 700);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div style={{
      position: 'absolute',
      bottom,
      right,
      width, height,
      maxWidth: 'calc(100% - 16px)',
      maxHeight: 'calc(100% - 70px)',
      background: '#fff',
      borderRadius: 18,
      boxShadow: '0 24px 64px rgba(11,31,58,0.22), 0 0 0 1px rgba(11,31,58,0.06)',
      overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      zIndex: 28,
      animation: 'chatPanelIn 0.32s cubic-bezier(.2,.7,.3,1) both',
    }}>
      {/* 헤더 */}
      <div style={{
        padding: '14px 16px',
        background: 'linear-gradient(135deg, #00B6F0 0%, #5CD3F7 100%)',
        color: '#fff',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        {/* 백조 캐릭터 이미지 — 우측 하단 캐릭터와 통일 */}
        <span style={{
          width: 42, height: 42, borderRadius: 999,
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, overflow: 'hidden',
          boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
        }}>
          <img
            src={ATOMY_SWAN_URL}
            alt="atomy"
            style={{
              width: '120%', height: '120%',
              objectFit: 'cover', objectPosition: 'center 35%',
              mixBlendMode: 'multiply',
              display: 'block',
            }}
          />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13.5, fontWeight: 800, letterSpacing: '-0.01em' }}>
            애터미 어시스턴트
          </div>
          <div style={{ fontSize: 10.5, opacity: 0.92, fontWeight: 600, marginTop: 2 }}>
            <span style={{
              display: 'inline-block', width: 6, height: 6, borderRadius: 999,
              background: '#22DD88', marginRight: 5, verticalAlign: 'middle',
            }} />
            온라인 · 평균 응답 1분
          </div>
        </div>
        <button onClick={onClose} aria-label="닫기" style={{
          width: 30, height: 30, borderRadius: 999, border: 'none',
          background: 'rgba(255,255,255,0.2)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.6" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* 가입문의 폼 — 채팅 패널 위에 슬라이드인 */}
      {joinFormOpen && (
        <JoinInquiryForm
          onClose={() => setJoinFormOpen(false)}
          onSubmit={(data) => {
            setSubmitted(true);
            setJoinFormOpen(false);
            // 챗 메시지에 신청 완료 메시지 추가
            setMessages(m => [
              ...m,
              { role: 'user', text: `[가입문의] ${data.name} · ${data.phone}\n${data.memo || '메모 없음'}` },
              { role: 'bot', text: `${data.name}님, 가입문의 감사합니다 🦢\n곧 ${data.phone}으로 연락드릴게요.` },
            ]);
          }}
        />
      )}

      {/* 메시지 영역 */}
      <div
        ref={scrollRef}
        className="phone-scroll"
        style={{
          flex: 1, overflowY: 'auto', padding: '14px 14px 8px',
          background: '#F5F7FA',
          display: 'flex', flexDirection: 'column', gap: 8,
        }}
      >
        {messages.map((m, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
          }}>
            <div style={{
              maxWidth: '78%',
              padding: '9px 12px', borderRadius: 14,
              borderBottomLeftRadius: m.role === 'user' ? 14 : 4,
              borderBottomRightRadius: m.role === 'user' ? 4 : 14,
              background: m.role === 'user' ? '#0B1F3A' : '#fff',
              color: m.role === 'user' ? '#fff' : '#0B1F3A',
              fontSize: 12.5, lineHeight: 1.5, fontWeight: 500,
              whiteSpace: 'pre-line',
              boxShadow: m.role === 'user' ? 'none' : '0 1px 2px rgba(11,31,58,0.06)',
              border: m.role === 'user' ? 'none' : '1px solid rgba(11,31,58,0.04)',
            }}>{m.text}</div>
          </div>
        ))}
      </div>

      {/* 애터미 가입문의 CTA — 강조 버튼 */}
      <div style={{
        padding: '10px 14px 6px', background: '#F5F7FA',
        borderTop: '1px solid rgba(11,31,58,0.05)',
      }}>
        <button
          onClick={() => setJoinFormOpen(true)}
          style={{
            width: '100%', padding: '12px 14px', borderRadius: 12, border: 'none',
            background: 'linear-gradient(135deg, #0B1F3A 0%, #0B2D58 60%, #00B6F0 130%)',
            color: '#fff', fontSize: 13.5, fontWeight: 900, letterSpacing: '-0.01em',
            cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: '0 8px 22px rgba(0,182,240,0.32)',
            fontFamily: 'inherit',
            transition: 'transform 0.18s, box-shadow 0.18s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,182,240,0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 22px rgba(0,182,240,0.32)';
          }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 24, height: 24, borderRadius: 999,
            background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
            color: '#0B1F3A', fontSize: 13, fontWeight: 900,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                 strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
          애터미 가입문의
          <span style={{
            fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.7)',
            marginLeft: 2,
          }}>1분이면 끝!</span>
        </button>
      </div>

      {/* 빠른 질문 칩 */}
      <div style={{
        padding: '6px 14px 10px', background: '#F5F7FA',
        display: 'flex', gap: 6, flexWrap: 'wrap',
      }}>
        {['제품 추천', '회원가입', '배송 문의', '반품/교환'].map(q => (
          <button key={q} onClick={() => { setInput(q); }} style={{
            padding: '5px 10px', borderRadius: 999,
            border: '1px solid rgba(0,182,240,0.3)',
            background: '#fff',
            color: '#0088B8', fontSize: 11, fontWeight: 700,
            cursor: 'pointer',
          }}>{q}</button>
        ))}
      </div>

      {/* 입력 영역 */}
      <div style={{
        padding: '10px 12px 12px', background: '#fff',
        borderTop: '1px solid rgba(11,31,58,0.06)',
        display: 'flex', gap: 8, alignItems: 'center',
      }}>
        {/* 음성 대화 시작 */}
        <button
          onClick={() => setVoiceOpen(true)}
          aria-label="음성으로 대화하기"
          title="음성으로 대화하기"
          style={{
            width: 38, height: 38, borderRadius: 999, border: '1px solid rgba(0,182,240,0.3)',
            background: '#fff', cursor: 'pointer', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#00B6F0',
            transition: 'background 0.15s, transform 0.15s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0,182,240,0.08)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B6F0"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 11a7 7 0 0014 0" />
            <line x1="12" y1="18" x2="12" y2="22" />
            <line x1="9" y1="22" x2="15" y2="22" />
          </svg>
        </button>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="메시지를 입력하세요"
          style={{
            flex: 1, height: 38, padding: '0 14px',
            borderRadius: 999, border: '1px solid rgba(11,31,58,0.12)',
            background: '#F5F7FA',
            fontSize: 12.5, color: '#0B1F3A',
            fontFamily: 'inherit', outline: 'none',
          }}
        />
        <button onClick={send} aria-label="보내기" style={{
          width: 38, height: 38, borderRadius: 999, border: 'none',
          background: input.trim() ? 'linear-gradient(135deg, #00B6F0, #5CD3F7)' : '#CBD3DD',
          cursor: input.trim() ? 'pointer' : 'default',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.15s',
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

      {/* 음성 대화 모달 */}
      {voiceOpen && (
        <VoiceChatPanel
          onClose={() => setVoiceOpen(false)}
          onTranscript={(text) => {
            // 음성을 텍스트로 변환해서 메시지에 추가
            setMessages(m => [...m, { role: 'user', text }]);
            setVoiceOpen(false);
            // 봇 응답
            setTimeout(() => {
              setMessages(m => [...m, {
                role: 'bot',
                text: '음성 메시지 잘 들었습니다! 더 궁금하신 점이 있으면 언제든 말씀해주세요 🦢',
              }]);
            }, 800);
          }}
        />
      )}
    </div>
  );
}

Object.assign(window, { ChatFloating, ChatPanel, JoinInquiryForm, VoiceChatPanel, SwanIconMini, ATOMY_SWAN_URL });
