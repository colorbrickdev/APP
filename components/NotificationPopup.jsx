// NotificationPopup.jsx — 알림 종 아이콘 클릭 시 나타나는 드롭다운
// 비회원 페이지 컨텍스트: 구매 활동 → 사업자 가입 유도형 알림이 핵심

let NOTIFICATIONS = [
  {
    id: 1,
    type: 'milestone',          // 마일스톤 (CTA 강조)
    icon: 'trophy',
    title: '구매 10회 달성! 🎉',
    body: '만약 애터미 사업자로 가입한다면?',
    bullets: [
      '300,000 PV 누적 가능',
      '직급까지 도전시 소비가 소득이 되는 수당 발생',
    ],
    cta: { label: '사업자 가입 알아보기', url: '#' },
    time: '방금 전',
    unread: true,
    accent: '#00B6F0',
  },
  {
    id: 2,
    type: 'order',
    icon: 'package',
    title: '주문하신 헤모힘이 출고됐어요',
    body: '내일 오후 도착 예정 · 운송장 12345-67890',
    time: '2시간 전',
    unread: true,
    accent: '#22C28C',
  },
  {
    id: 3,
    type: 'event',
    icon: 'gift',
    title: '신규 회원 한정 — 첫 구매 5% 적립',
    body: '오늘 가입하면 헤모힘 · 앱솔루트 라인 5% 추가 적립',
    time: '오늘',
    unread: true,
    accent: '#FF8A3D',
  },
  {
    id: 4,
    type: 'news',
    icon: 'megaphone',
    title: '박한길 회장 인터뷰 영상 업로드',
    body: '"몽상의 균형 잡힌 삶" 강연 풀버전이 공개됐어요.',
    time: '어제',
    unread: false,
    accent: '#8A97AD',
  },
  {
    id: 5,
    type: 'review',
    icon: 'heart',
    title: '리뷰 작성 시 1,000원 적립',
    body: '최근 구매하신 제품 4건의 리뷰가 비어있어요.',
    time: '3일 전',
    unread: false,
    accent: '#8A97AD',
  },
];

// 비회원 gating — AI가 접속한 비회원(게스트)에게 보내는 '행동 유도형' 알림
(function () {
  let m = false; try { m = !!localStorage.getItem('quickMember'); } catch (_) {}
  if (!m) {
    NOTIFICATIONS = [
      {
        id: 21, ai: true, type: 'clip', icon: 'megaphone', accent: '#7C5CFF',
        title: '오늘의 석세스클립 3편이 새로 올라왔어요',
        body: '실제 사용 후기 영상이 준비됐어요. 지금 시청하러 이동해볼까요?',
        cta: { label: '클립 보러가기', action: 'shorts' },
        time: '방금 전', unread: true,
      },
      {
        id: 22, ai: true, type: 'reco', icon: 'heart', accent: '#22C28C',
        title: '오늘 컨디션에 맞는 제품을 골라봤어요',
        body: '30초 맞춤 질문이면 딱 맞는 3가지를 추천해드려요. 지금 시작해볼까요?',
        cta: { label: '맞춤 추천 받기', action: 'assistant', question: '오늘 내 컨디션에 맞는 제품을 추천해줘' },
        time: '10분 전', unread: true,
      },
      {
        id: 23, ai: true, type: 'cart', icon: 'gift', accent: '#FF8A3D',
        title: '장바구니에 담아둔 상품이 기다리고 있어요',
        body: '지금 주문하면 오늘의 혜택가 그대로예요. 확인하러 가볼까요?',
        cta: { label: '장바구니 확인하기', action: 'shop' },
        time: '30분 전', unread: true,
      },
      {
        id: 24, ai: true, type: 'signup', icon: 'gift', accent: '#00B6F0',
        title: '간편가입하면 배송·재구매 알림을 받아요',
        body: '휴대폰 번호만으로 3초면 끝나요. 가입 방법을 안내해드릴까요?',
        cta: { label: '가입 방법 물어보기', action: 'assistant', question: '간편가입은 어떻게 하나요?' },
        time: '1시간 전', unread: true,
      },
      {
        id: 25, ai: true, type: 'news', icon: 'megaphone', accent: '#8A97AD',
        title: '이번 주 신제품이 도착했어요',
        body: "'앱솔루트 셀렉티브 스킨케어' 라인이 새로 입고됐어요. 먼저 만나보실래요?",
        cta: { label: '신제품 보러가기', action: 'shop' },
        time: '어제', unread: false,
      },
    ];
  }
})();

// 작은 SVG 아이콘 풀
function NotifIcon({ type, color = '#fff', size = 18 }) {
  const props = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: color, strokeWidth: 2,
    strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (type) {
    case 'trophy':
      return (
        <svg {...props}>
          <path d="M8 4h8v4a4 4 0 11-8 0V4z" />
          <path d="M8 6H5a3 3 0 003 3M16 6h3a3 3 0 01-3 3" />
          <path d="M10 14h4l1 6H9l1-6z" />
        </svg>
      );
    case 'package':
      return (
        <svg {...props}>
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 7v10l9 4 9-4V7" />
          <path d="M12 11v10" />
        </svg>
      );
    case 'gift':
      return (
        <svg {...props}>
          <rect x="3" y="8" width="18" height="4" rx="1" />
          <path d="M5 12v9h14v-9M12 8v13" />
          <path d="M12 8C9 8 7.5 5 9 4s4 1 3 4M12 8c3 0 4.5-3 3-4s-4 1-3 4" />
        </svg>
      );
    case 'megaphone':
      return (
        <svg {...props}>
          <path d="M3 11v2a1 1 0 001 1h3l5 4V6L7 10H4a1 1 0 00-1 1z" />
          <path d="M16 8a5 5 0 010 8" />
        </svg>
      );
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />
        </svg>
      );
    default: return null;
  }
}

function NotificationPopup({ open, onClose, anchorRight = 12, anchorTop = 56, isMobile = false }) {
  // 외부 클릭 시 닫기 — 토글 버튼은 무시
  const popupRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      // 1) 팝업 내부 클릭이면 무시
      if (popupRef.current && popupRef.current.contains(e.target)) return;
      // 2) 알림 토글 버튼(또는 그 안의 SVG/스팬)이면 무시 — 버튼 자체가 토글 처리
      const tgt = e.target.closest && e.target.closest('[aria-label="알림"]');
      if (tgt) return;
      onClose();
    };
    // 다음 프레임에 등록해 현재 클릭이 외부 감지로 처리되지 않게
    let raf = requestAnimationFrame(() => {
      document.addEventListener('mousedown', onDoc);
    });
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousedown', onDoc);
    };
  }, [open, onClose]);

  // ESC 닫기
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // 스토어 구독 — markAllRead / 외부 변경 시 리렌더
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    if (!window.notifStore) return;
    return window.notifStore.subscribe(() => force());
  }, []);

  if (!open) return null;

  const unreadCount = NOTIFICATIONS.filter(n => n.unread).length;
  const width = isMobile ? 320 : 380;

  return (
    <div
      ref={popupRef}
      style={{
        position: 'absolute',
        top: anchorTop,
        right: anchorRight,
        width,
        maxWidth: 'calc(100% - 16px)',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 20px 50px rgba(11,31,58,0.2), 0 0 0 1px rgba(11,31,58,0.06)',
        overflow: 'hidden',
        zIndex: 40,
        animation: 'notifSlideDown 0.25s cubic-bezier(.2,.7,.3,1) both',
      }}
    >
      {/* 헤더 */}
      <div style={{
        padding: '14px 18px 12px',
        borderBottom: '1px solid rgba(11,31,58,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{
          fontSize: 14.5, fontWeight: 800, color: '#0B1F3A', letterSpacing: '-0.01em',
        }}>
          알림
          {unreadCount > 0 && (
            <span style={{
              marginLeft: 8, padding: '2px 7px', borderRadius: 999,
              background: '#FF3B6A', color: '#fff',
              fontSize: 10, fontWeight: 800, fontVariantNumeric: 'tabular-nums',
            }}>{unreadCount}</span>
          )}
        </div>
        <button
          onClick={() => {
            if (window.notifStore) window.notifStore.markAllRead();
            if (window.showToast) {
              const msg = (window.translate ? window.translate('toast.all_read') : null) || '모두 읽음 처리했습니다';
              window.showToast(msg, 'info');
            }
          }}
          disabled={unreadCount === 0}
          style={{
            background: 'transparent', border: 'none',
            cursor: unreadCount === 0 ? 'default' : 'pointer',
            color: unreadCount === 0 ? '#C0C8D4' : '#6B7A90',
            fontSize: 11.5, fontWeight: 700,
            padding: '4px 6px',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => { if (unreadCount > 0) e.currentTarget.style.color = '#0088B8'; }}
          onMouseLeave={e => { if (unreadCount > 0) e.currentTarget.style.color = '#6B7A90'; }}
        >{(window.translate && window.translate('notif.mark_all_read')) || '모두 읽음'}</button>
      </div>

      {/* 알림 리스트 */}
      <div className="phone-scroll" style={{
        maxHeight: 460,
        overflowY: 'auto',
      }}>
        {NOTIFICATIONS.map((n, i) => (
          <NotificationItem key={n.id} notif={n} isFirst={i === 0} onClose={onClose} />
        ))}
      </div>

      {/* 풋터 */}
      <div style={{
        padding: '10px 18px', borderTop: '1px solid rgba(11,31,58,0.06)',
        textAlign: 'center', background: '#FAFBFC',
      }}>
        <button style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#0088B8', fontSize: 12.5, fontWeight: 700,
          letterSpacing: '-0.01em', padding: '4px 8px',
        }}>전체 알림 보기 →</button>
      </div>
    </div>
  );
}

// 알림 CTA 행동 실행 — 클릭 시 실제 페이지 이동 / 어시스턴트 호출
function runNotifAction(cta, id, onClose, node) {
  try { if (window.notifStore) window.notifStore.markRead(id); } catch (_) {}
  if (cta) {
    const a = cta.action;
    if (a === 'assistant') {
      try { window.dispatchEvent(new CustomEvent('atomy-assistant-ask', { detail: { question: cta.question || '' } })); } catch (_) {}
    } else if (a === 'shop' || a === 'shorts') {
      try { (node || window).dispatchEvent(new CustomEvent('atomy-go-page', { detail: { page: a }, bubbles: true })); } catch (_) {}
    }
  }
  if (onClose) onClose();
}

function NotificationItem({ notif: n, isFirst, onClose }) {
  const isMilestone = n.type === 'milestone';

  return (
    <div style={{
      padding: isMilestone ? '16px 18px 14px' : '13px 18px',
      background: isMilestone
        ? `linear-gradient(135deg, rgba(0,182,240,0.05) 0%, rgba(92,211,247,0.08) 100%)`
        : (n.unread ? '#fff' : '#FAFBFC'),
      borderBottom: '1px solid rgba(11,31,58,0.05)',
      display: 'flex', gap: 12,
      cursor: 'pointer',
      position: 'relative',
      transition: 'background 0.15s',
    }}
    onMouseEnter={e => {
      if (!isMilestone) e.currentTarget.style.background = '#F5F7FA';
    }}
    onMouseLeave={e => {
      if (!isMilestone) e.currentTarget.style.background = n.unread ? '#fff' : '#FAFBFC';
    }}>
      {/* 좌측 — 미확인 표시 점 */}
      {n.unread && !isMilestone && (
        <span style={{
          position: 'absolute', left: 7, top: 22,
          width: 6, height: 6, borderRadius: 999,
          background: '#FF3B6A',
        }} />
      )}

      {/* 아이콘 */}
      <span style={{
        flexShrink: 0,
        width: isMilestone ? 40 : 34, height: isMilestone ? 40 : 34,
        borderRadius: isMilestone ? 12 : 10,
        background: isMilestone
          ? 'linear-gradient(135deg, #00B6F0, #5CD3F7)'
          : `${n.accent}15`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: isMilestone ? '0 4px 12px rgba(0,182,240,0.3)' : 'none',
      }}>
        <NotifIcon
          type={n.icon}
          color={isMilestone ? '#fff' : n.accent}
          size={isMilestone ? 22 : 18}
        />
      </span>

      {/* 본문 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {n.ai && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <span style={{ width: 16, height: 16, borderRadius: 5, background: 'linear-gradient(135deg,#00B6F0,#5CD3F7)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, flexShrink: 0 }}>✦</span>
            <span style={{ fontSize: 10.5, fontWeight: 800, color: '#0088B8', letterSpacing: '-0.01em' }}>몽상 로봇</span>
          </div>
        )}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 8, justifyContent: 'space-between',
        }}>
          <div style={{
            fontSize: isMilestone ? 14 : 13, fontWeight: 800,
            color: '#0B1F3A', lineHeight: 1.35, letterSpacing: '-0.01em',
            textWrap: 'balance',
          }}>{n.title}</div>
          <span style={{
            fontSize: 10.5, color: '#8A97AD', fontWeight: 600,
            flexShrink: 0, marginTop: 2,
          }}>{n.time}</span>
        </div>

        <div style={{
          marginTop: 4, fontSize: 12, color: '#4A5568', lineHeight: 1.45,
          fontWeight: isMilestone ? 600 : 500,
        }}>{n.body}</div>

        {/* 마일스톤 — 불릿 리스트 + CTA */}
        {isMilestone && n.bullets && (
          <ul style={{
            margin: '10px 0 0', padding: 0, listStyle: 'none',
            display: 'flex', flexDirection: 'column', gap: 5,
          }}>
            {n.bullets.map((b, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: 6,
                fontSize: 12, color: '#0B1F3A', fontWeight: 600, lineHeight: 1.4,
              }}>
                <span style={{
                  flexShrink: 0, marginTop: 6,
                  width: 4, height: 4, borderRadius: 999, background: '#00B6F0',
                }} />
                <span style={{ flex: 1, textWrap: 'pretty' }}>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {isMilestone && n.cta && (
          <button onClick={(e) => { e.stopPropagation(); runNotifAction(n.cta, n.id, onClose, e.currentTarget); }} style={{
            marginTop: 12, width: '100%',
            padding: '9px 14px', borderRadius: 8,
            background: '#0B1F3A', border: 'none', cursor: 'pointer',
            color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '-0.01em',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            boxShadow: '0 4px 12px rgba(11,31,58,0.18)',
          }}>
            {n.cta.label}
            <span style={{ fontSize: 13 }}>→</span>
          </button>
        )}
        {!isMilestone && n.cta && (
          <button onClick={(e) => { e.stopPropagation(); runNotifAction(n.cta, n.id, onClose, e.currentTarget); }} style={{
            marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 14px', borderRadius: 999,
            background: `${n.accent}14`, border: `1px solid ${n.accent}55`,
            color: '#0B1F3A', fontSize: 12, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit',
          }}>
            {n.cta.label}<span style={{ color: n.accent }}>→</span>
          </button>
        )}
      </div>
    </div>
  );
}

// =============================================================
// 글로벌 스토어 — 알림 읽음/미읽음 상태 관리
// 사용:
//   window.notifStore.markAllRead()           — 전체 읽음 처리
//   window.notifStore.markRead(id)            — 단건 읽음 처리
//   window.notifStore.isUnread(id) → boolean  — 미읽음 여부
//   window.notifStore.unreadCount() → number  — 미읽음 건수
//   window.notifStore.subscribe(fn) → unsub   — 변경 구독
// =============================================================
const _notifStore = {
  listeners: new Set(),
  subscribe(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); },
  _emit() { this.listeners.forEach(fn => { try { fn(); } catch {} }); },
  markAllRead() {
    NOTIFICATIONS = NOTIFICATIONS.map(n => ({ ...n, unread: false }));
    window.NOTIFICATIONS = NOTIFICATIONS;
    this._emit();
  },
  markRead(id) {
    NOTIFICATIONS = NOTIFICATIONS.map(n => n.id === id ? { ...n, unread: false } : n);
    window.NOTIFICATIONS = NOTIFICATIONS;
    this._emit();
  },
  isUnread(id) {
    const n = NOTIFICATIONS.find(x => x.id === id);
    return !!(n && n.unread);
  },
  unreadCount() { return NOTIFICATIONS.filter(n => n.unread).length; },
  list() { return NOTIFICATIONS; },
};

Object.assign(window, { NotificationPopup, NOTIFICATIONS, notifStore: _notifStore });
