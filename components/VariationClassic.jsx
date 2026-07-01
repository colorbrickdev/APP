// VariationClassic.jsx — 애터미 정통 네이비 + 골드 (신뢰감)
// 업데이트: 상단 미디어를 영상/이미지 혼합 캐러셀(좌우 스와이프)로 확장

function ProfileMediaCarousel({ items, onExpand }) {
  const [idx, setIdx] = React.useState(0);
  const total = items.length;

  const go = (dir) => {
    setIdx(i => (i + dir + total) % total);
  };

  const cur = items[idx];
  const isVideo = cur.type === 'video';

  // 컨트롤 버튼 클릭이 상위 onExpand로 전파되지 않도록
  const stop = (fn) => (e) => { e.stopPropagation(); fn(e); };

  // 화살표 버튼 공통 스타일
  const arrowBtn = {
    width: 36, height: 36, borderRadius: 999,
    background: 'rgba(11,31,58,0.55)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.18)',
    cursor: 'pointer', padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(0,0,0,0.28)',
    transition: 'background 0.15s, transform 0.15s',
  };

  return (
    <div
      onClick={() => onExpand && onExpand(idx)}
      style={{
        position: 'relative', width: '100%', aspectRatio: '1/1',
        background: '#111', overflow: 'hidden',
        cursor: onExpand ? 'zoom-in' : 'default',
      }}
    >
      {/* 현재 슬라이드 — crossfade */}
      {items.map((m, i) => (
        <div key={m.id} style={{
          position: 'absolute', inset: 0,
          opacity: i === idx ? 1 : 0,
          transition: 'opacity 0.35s ease',
          pointerEvents: i === idx ? 'auto' : 'none',
        }}>
          <img src={m.src} alt={m.caption || ''}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: m.objectPosition || 'center',
              display: 'block',
            }} />
        </div>
      ))}

      {/* 좌우 비네팅 */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(11,31,58,0.42) 0%, rgba(11,31,58,0) 22%, rgba(11,31,58,0) 78%, rgba(11,31,58,0.42) 100%)',
        pointerEvents: 'none',
      }} />
      {/* 상단 그라디언트 */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 80,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0))',
        pointerEvents: 'none',
      }} />

      {/* 타입 뱃지 — 좌상단 */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '5px 10px', borderRadius: 999,
        background: 'rgba(11,31,58,0.6)',
        backdropFilter: 'blur(10px)',
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

      {/* 페이지네이션 — 우상단 */}
      <div style={{
        position: 'absolute', top: 14, right: 12, display: 'flex', gap: 4,
      }}>
        {items.map((_, i) => (
          <button key={i} onClick={stop(() => setIdx(i))} style={{
            width: i === idx ? 20 : 6, height: 3, borderRadius: 2, border: 'none',
            background: i === idx ? '#fff' : 'rgba(255,255,255,0.5)',
            padding: 0, cursor: 'pointer', transition: 'width 0.2s',
          }} />
        ))}
      </div>

      {/* 재생 버튼 — 영상일 때만 */}
      {isVideo && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 60, height: 60, borderRadius: 999,
            background: 'rgba(11,31,58,0.78)',
            border: '1.5px solid rgba(201,169,97,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          }}>
            <div style={{ marginLeft: 3 }}>{ProfileIcon.play(26, '#fff')}</div>
          </div>
        </div>
      )}

      {/* 좌/우 화살표 */}
      <button
        onClick={stop(() => go(-1))}
        aria-label="이전"
        style={{
          ...arrowBtn,
          position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={stop(() => go(1))}
        aria-label="다음"
        style={{
          ...arrowBtn,
          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* 우하단 확대 힌트 아이콘 */}
      {onExpand && (
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          width: 28, height: 28, borderRadius: 8,
          background: 'rgba(11,31,58,0.55)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 3 21 3 21 9" />
            <polyline points="9 21 3 21 3 15" />
            <line x1="21" y1="3" x2="14" y2="10" />
            <line x1="3" y1="21" x2="10" y2="14" />
          </svg>
        </div>
      )}
    </div>
  );
}

// 핀치줌/더블탭 줌/팬 지원 이미지 — 활성 슬라이드에서만 활성화
function ZoomableImage({ src, caption, active }) {
  const [scale, setScale] = React.useState(1);
  const [tx, setTx] = React.useState(0);
  const [ty, setTy] = React.useState(0);
  const containerRef = React.useRef(null);

  // 제스처 상태
  const gesture = React.useRef({
    mode: null, // 'pan' | 'pinch'
    startDist: 0,
    startScale: 1,
    startCx: 0, startCy: 0,
    startTx: 0, startTy: 0,
    startX: 0, startY: 0,
    lastTap: 0,
  });

  // 슬라이드 비활성 시 줌 리셋
  React.useEffect(() => {
    if (!active) { setScale(1); setTx(0); setTy(0); }
  }, [active]);

  const clampTranslate = (nx, ny, s) => {
    const el = containerRef.current;
    if (!el) return [nx, ny];
    const w = el.clientWidth, h = el.clientHeight;
    const maxX = Math.max(0, (w * (s - 1)) / 2);
    const maxY = Math.max(0, (h * (s - 1)) / 2);
    return [Math.max(-maxX, Math.min(maxX, nx)), Math.max(-maxY, Math.min(maxY, ny))];
  };

  const dist = (a, b) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  const mid  = (a, b) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });

  const onTouchStart = (e) => {
    if (e.touches.length === 2) {
      e.stopPropagation();
      const [a, b] = [e.touches[0], e.touches[1]];
      const m = mid(a, b);
      gesture.current = {
        ...gesture.current,
        mode: 'pinch',
        startDist: dist(a, b),
        startScale: scale,
        startCx: m.x, startCy: m.y,
        startTx: tx, startTy: ty,
      };
    } else if (e.touches.length === 1) {
      // 더블탭 감지
      const now = Date.now();
      const isDouble = now - gesture.current.lastTap < 280;
      gesture.current.lastTap = now;

      if (isDouble) {
        e.stopPropagation();
        // 2배 ↔ 1배 토글
        if (scale > 1.1) {
          setScale(1); setTx(0); setTy(0);
        } else {
          setScale(2.2);
        }
        return;
      }

      if (scale > 1) {
        // 확대 상태에서는 팬
        e.stopPropagation();
        gesture.current = {
          ...gesture.current,
          mode: 'pan',
          startX: e.touches[0].clientX,
          startY: e.touches[0].clientY,
          startTx: tx, startTy: ty,
        };
      } else {
        gesture.current.mode = null;
      }
    }
  };

  const onTouchMove = (e) => {
    if (gesture.current.mode === 'pinch' && e.touches.length === 2) {
      e.stopPropagation();
      const [a, b] = [e.touches[0], e.touches[1]];
      const d = dist(a, b);
      const newScale = Math.max(1, Math.min(4, gesture.current.startScale * (d / gesture.current.startDist)));
      const [cx, cy] = clampTranslate(gesture.current.startTx, gesture.current.startTy, newScale);
      setScale(newScale);
      setTx(cx); setTy(cy);
    } else if (gesture.current.mode === 'pan' && e.touches.length === 1) {
      e.stopPropagation();
      const dx = e.touches[0].clientX - gesture.current.startX;
      const dy = e.touches[0].clientY - gesture.current.startY;
      const [nx, ny] = clampTranslate(gesture.current.startTx + dx, gesture.current.startTy + dy, scale);
      setTx(nx); setTy(ny);
    }
  };

  const onTouchEnd = (e) => {
    if (gesture.current.mode) {
      e.stopPropagation();
      gesture.current.mode = null;
      if (scale < 1.05) { setScale(1); setTx(0); setTy(0); }
    }
  };

  // 데스크톱 더블클릭 줌
  const onDoubleClick = (e) => {
    e.stopPropagation();
    if (scale > 1.1) { setScale(1); setTx(0); setTy(0); }
    else setScale(2.2);
  };

  // 데스크톱 Ctrl+휠 줌
  const onWheel = (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    e.stopPropagation();
    const next = Math.max(1, Math.min(4, scale - e.deltaY * 0.01));
    const [cx, cy] = clampTranslate(tx, ty, next);
    setScale(next); setTx(cx); setTy(cy);
  };

  return (
    <div
      ref={containerRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onDoubleClick={onDoubleClick}
      onWheel={onWheel}
      style={{
        width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#000', overflow: 'hidden',
        touchAction: 'none',
      }}
    >
      <img
        src={src}
        alt={caption || ''}
        draggable={false}
        style={{
          maxWidth: '100%', maxHeight: '100%',
          objectFit: 'contain', display: 'block',
          transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
          transformOrigin: 'center center',
          transition: gesture.current.mode ? 'none' : 'transform 0.24s cubic-bezier(.2,.7,.3,1)',
          userSelect: 'none',
          cursor: scale > 1 ? 'grab' : 'zoom-in',
        }}
      />
      {scale > 1 && (
        <div style={{
          position: 'absolute', top: 68, left: '50%', transform: 'translateX(-50%)',
          padding: '4px 10px', borderRadius: 999,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          color: '#fff', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em',
          pointerEvents: 'none',
        }}>
          {scale.toFixed(1)}× · 더블탭으로 원래 크기
        </div>
      )}
    </div>
  );
}

// 활성 슬라이드에서 mp4를 재생하는 영상 플레이어 (실패 시 포스터 fallback)
function ActiveVideo({ item, active }) {
  const videoRef = React.useRef(null);
  const [playing, setPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [dur, setDur] = React.useState(0);
  const [cur, setCur] = React.useState(0);
  const [failed, setFailed] = React.useState(false);

  // 활성 슬라이드에서만 자동 재생, 벗어나면 정지
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || failed) return;
    if (active) {
      try { v.currentTime = 0; } catch(_) {}
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
    }
  }, [active, failed]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (failed) return;
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  const fmt = (s) => {
    if (!isFinite(s)) return '00:00';
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    return `${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
  };

  // 영상 로드 실패 → 포스터 이미지로 fallback
  if (failed) {
    return (
      <div style={{
        width: '100%', height: '100%', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#000',
      }}>
        <img
          src={item.src}
          alt={item.caption || ''}
          style={{
            maxWidth: '100%', maxHeight: '100%',
            objectFit: 'contain', display: 'block',
          }}
        />
        {/* 중앙 재생 아이콘 (fallback 표시) */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 82, height: 82, borderRadius: 999,
            background: 'rgba(11,31,58,0.68)',
            border: '1.5px solid rgba(201,169,97,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 14px 40px rgba(0,0,0,0.5)',
          }}>
            <div style={{ marginLeft: 4 }}>{ProfileIcon.play(36, '#fff')}</div>
          </div>
        </div>
        {/* 하단 안내 칩 */}
        <div style={{
          position: 'absolute', left: '50%', bottom: 68,
          transform: 'translateX(-50%)',
          padding: '5px 12px', borderRadius: 999,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          color: 'rgba(255,255,255,0.85)', fontSize: 10.5, fontWeight: 700,
          letterSpacing: '0.08em', pointerEvents: 'none',
        }}>
          영상을 불러올 수 없어 미리보기를 표시합니다
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#000', position: 'relative',
    }} onClick={togglePlay}>
      <video
        ref={videoRef}
        src={item.video}
        poster={item.src}
        playsInline
        muted
        loop={false}
        preload="metadata"
        onTimeUpdate={(e) => {
          const t = e.currentTarget.currentTime;
          const d = e.currentTarget.duration || 0;
          setCur(t); setDur(d);
          setProgress(d ? t / d : 0);
        }}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration || 0)}
        onEnded={() => setPlaying(false)}
        onError={() => setFailed(true)}
        onStalled={() => { /* 짧은 지연은 무시 */ }}
        style={{
          maxWidth: '100%', maxHeight: '100%',
          objectFit: 'contain', display: 'block',
        }}
      >
        {/* source 레벨 에러 감지용 */}
        <source src={item.video} type="video/mp4" onError={() => setFailed(true)} />
      </video>

      {/* 일시정지 상태에서 큰 재생 버튼 */}
      {!playing && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            width: 82, height: 82, borderRadius: 999,
            background: 'rgba(11,31,58,0.68)',
            border: '1.5px solid rgba(201,169,97,0.9)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 14px 40px rgba(0,0,0,0.5)',
            animation: 'shortsFadeIn 0.2s ease',
          }}>
            <div style={{ marginLeft: 4 }}>{ProfileIcon.play(36, '#fff')}</div>
          </div>
        </div>
      )}

      {/* 프로그레스바 + 시간 */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute', left: 16, right: 16, bottom: 64,
          pointerEvents: 'auto',
        }}
      >
        <div style={{
          height: 3, background: 'rgba(255,255,255,0.28)', borderRadius: 2,
          position: 'relative', cursor: 'pointer',
        }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const p = (e.clientX - rect.left) / rect.width;
          const v = videoRef.current;
          if (v && v.duration) v.currentTime = p * v.duration;
        }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: `${progress * 100}%`, background: '#00B6F0',
            borderRadius: 2, transition: 'width 0.1s linear',
          }} />
          <div style={{
            position: 'absolute', left: `${progress * 100}%`, top: '50%',
            width: 11, height: 11, borderRadius: 999, background: '#fff',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 1px 4px rgba(0,0,0,0.4)',
          }} />
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: 6,
          color: '#fff', fontSize: 11, fontWeight: 500,
          fontVariantNumeric: 'tabular-nums',
        }}>
          <span>{fmt(cur)}</span>
          <span style={{ opacity: 0.75 }}>{fmt(dur)}</span>
        </div>
      </div>
    </div>
  );
}

// 상단 프로필 미디어 전체화면 뷰어 — 영상/이미지 혼합 + 방향성 슬라이드 전환
function ProfileMediaViewer({ items, startIdx, onClose, fixedToScrollContainer = false }) {
  const [idx, setIdx] = React.useState(startIdx);
  const [dir, setDir] = React.useState(0); // -1: prev, +1: next, 0: none
  const total = items.length;
  const cur = items[idx];
  const isVideo = cur.type === 'video';

  const go = (d) => {
    setDir(d);
    setIdx(i => (i + d + total) % total);
  };

  // 키보드 조작
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
      else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, total]);

  // 터치 스와이프 (가로) — 핀치 중일 때는 상위에서 stopPropagation되어 여기 안 닿음
  const touchX = React.useRef(null);
  const onTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx < -50) go(1);
    else if (dx > 50) go(-1);
    touchX.current = null;
  };

  // 휠 스크롤로 이동
  const wheelLock = React.useRef(false);
  const wheelAccum = React.useRef(0);
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const handler = (e) => {
      if (e.ctrlKey || e.metaKey) return; // 줌 휠은 여기서 패스
      e.preventDefault();
      if (wheelLock.current) return;
      wheelAccum.current += e.deltaY;
      const T = 40;
      if (wheelAccum.current > T) {
        go(1);
        wheelLock.current = true; wheelAccum.current = 0;
        setTimeout(() => { wheelLock.current = false; }, 420);
      } else if (wheelAccum.current < -T) {
        go(-1);
        wheelLock.current = true; wheelAccum.current = 0;
        setTimeout(() => { wheelLock.current = false; }, 420);
      }
    };
    el.addEventListener('wheel', handler, { passive: false });

    // 부모 스크롤 컨테이너 잠금
    let cleanupScroll = null;
    if (fixedToScrollContainer) {
      let scroller = el.parentElement;
      while (scroller && scroller !== document.body) {
        const cs = getComputedStyle(scroller);
        if (cs.overflowY === 'auto' || cs.overflowY === 'scroll') break;
        scroller = scroller.parentElement;
      }
      if (scroller && scroller !== document.body) {
        const savedScrollTop = scroller.scrollTop;
        const savedOverflow = scroller.style.overflow;
        scroller.scrollTop = 0;
        scroller.style.overflow = 'hidden';
        cleanupScroll = () => {
          scroller.style.overflow = savedOverflow;
          scroller.scrollTop = savedScrollTop;
        };
      }
    }

    return () => {
      el.removeEventListener('wheel', handler);
      if (cleanupScroll) cleanupScroll();
    };
  }, [total, fixedToScrollContainer]);

  // 부모 스크롤 컨테이너 viewport 높이 측정
  const [scrollerHeight, setScrollerHeight] = React.useState(null);
  React.useEffect(() => {
    if (!fixedToScrollContainer) return;
    const el = rootRef.current;
    if (!el) return;
    let scroller = el.parentElement;
    while (scroller && scroller !== document.body) {
      const cs = getComputedStyle(scroller);
      if (cs.overflowY === 'auto' || cs.overflowY === 'scroll') break;
      scroller = scroller.parentElement;
    }
    if (scroller && scroller !== document.body) {
      setScrollerHeight(scroller.clientHeight);
    }
  }, [fixedToScrollContainer]);

  return (
    <div
      ref={rootRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: fixedToScrollContainer && scrollerHeight ? scrollerHeight : undefined,
        bottom: fixedToScrollContainer && scrollerHeight ? undefined : 0,
        zIndex: 50,
        background: '#000', overflow: 'hidden',
        animation: 'shortsFadeIn 0.22s ease',
        touchAction: 'none', overscrollBehavior: 'contain',
      }}
    >
      {/* 슬라이드 — 좌우 방향성 전환 */}
      {items.map((m, i) => {
        const offset = i - idx;
        // 활성 + 인접 슬라이드만 렌더
        if (Math.abs(offset) > 1) return null;
        const isActive = i === idx;
        return (
          <div
            key={m.id}
            style={{
              position: 'absolute', inset: 0,
              transform: `translateX(${offset * 100}%)`,
              transition: 'transform 0.38s cubic-bezier(.3,.7,.3,1)',
              willChange: 'transform',
            }}
          >
            {m.type === 'video' && m.video ? (
              <ActiveVideo item={m} active={isActive} />
            ) : (
              <ZoomableImage src={m.src} caption={m.caption} active={isActive} />
            )}
          </div>
        );
      })}

      {/* 상단 바 */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '14px 14px 20px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0))',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        zIndex: 5,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: '0.02em',
        }}>
          <div style={{
            width: 30, height: 30, borderRadius: 999,
            background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#0B1F3A', fontSize: 12, fontWeight: 900,
          }}>{PROFILE.name[0]}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{PROFILE.name}</div>
            <div style={{ fontSize: 10, opacity: 0.7, letterSpacing: '0.08em', fontWeight: 600 }}>
              {isVideo ? 'VIDEO' : 'PHOTO'} · {idx + 1} / {total}
            </div>
          </div>
        </div>

        <button onClick={onClose} aria-label="닫기" style={{
          width: 34, height: 34, borderRadius: 999, border: 'none',
          background: 'rgba(255,255,255,0.15)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
               strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* 좌/우 화살표 */}
      <button onClick={() => go(-1)} aria-label="이전" style={{
        position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
        width: 40, height: 40, borderRadius: 999, border: 'none',
        background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
        cursor: 'pointer', padding: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 5,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button onClick={() => go(1)} aria-label="다음" style={{
        position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
        width: 40, height: 40, borderRadius: 999, border: 'none',
        background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
        cursor: 'pointer', padding: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 5,
      }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* 하단 — 도트 인디케이터 + 캡션 */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '28px 16px 20px',
        background: 'linear-gradient(0deg, rgba(0,0,0,0.75), rgba(0,0,0,0))',
        zIndex: 5,
      }}>
        {cur.caption && !isVideo && (
          <div style={{
            color: '#fff', fontSize: 13, fontWeight: 600, letterSpacing: '0.01em',
            textShadow: '0 1px 4px rgba(0,0,0,0.5)', marginBottom: 10,
          }}>{cur.caption}</div>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
              style={{
                width: i === idx ? 22 : 6, height: 4, borderRadius: 2, border: 'none',
                background: i === idx ? '#fff' : 'rgba(255,255,255,0.45)',
                padding: 0, cursor: 'pointer', transition: 'width 0.2s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// SNS 아이콘 — 박스 없이, 호버 시 브랜드 컬러로 전환
const SNS_BRAND_COLOR = {
  ig: '#E1306C',  // Instagram pink/magenta
  yt: '#FF0000',  // YouTube red
  fb: '#1877F2',  // Facebook blue
  kk: '#FEE500',  // Kakao yellow
  bl: '#03C75A',  // Naver Blog green
  tt: '#000000',  // TikTok
};

// SNS 링크 URL — 실제 연결 주소
const SNS_URL = {
  ig: 'https://www.instagram.com/atomy_official/',
  yt: 'https://m.youtube.com/@%EC%95%A0%ED%84%B0%EB%AF%B8ATOMY_PRODUCT/',
  fb: 'https://www.facebook.com/atomy.inc/',
  kk: 'https://pf.kakao.com/',
  bl: 'https://blog.naver.com/atomy_official',
  tt: 'https://www.tiktok.com/',
};

function SnsIconLink({ item }) {
  const [hover, setHover] = React.useState(false);
  const brand = SNS_BRAND_COLOR[item.key] || '#0B1F3A';
  const color = hover ? brand : '#0B1F3A';
  const href = SNS_URL[item.key] || '#';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'transparent', border: 'none', cursor: 'pointer',
        padding: 0, lineHeight: 0,
        textDecoration: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transform: hover ? 'translateY(-1px) scale(1.08)' : 'none',
        transition: 'transform 0.18s ease',
      }}
    >
      {iconByKey(item.key, 20, color)}
    </a>
  );
}

function BottomNav({ activeKey = 'home', onNavClick = () => {} }) {
  const { t } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k };
  const tabs = [
    { key: 'shop',    label: t('nav.shop'),    render: NavIcon.shop   },
    { key: 'shorts',  label: t('nav.shorts'),  render: NavIcon.shorts },
    { key: 'life',    label: t('nav.life'),    render: NavIcon.dharma },
    { key: 'about',   label: t('nav.about'),   render: NavIcon.info   },
  ];

  return (
    <nav style={{
      position: 'sticky', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(14px)',
      borderTop: '1px solid rgba(11,31,58,0.08)',
      boxShadow: '0 -4px 16px rgba(11,31,58,0.06)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      padding: '8px 4px 10px',
      zIndex: 20,
    }}>
      {tabs.map(t => {
        const isActive = t.key === activeKey;
        const color = isActive ? '#0B1F3A' : '#8A97AD';
        const stroke = isActive ? 2 : 1.7;
        return (
          <button
            key={t.key}
            onClick={() => onNavClick(t.key)}
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '6px 0 4px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 4,
            }}>
            {/* 활성 탭 상단 포인트 */}
            <span style={{
              width: 18, height: 2, borderRadius: 2, marginBottom: 2,
              background: isActive ? '#00B6F0' : 'transparent',
            }} />
            {t.render(22, color, stroke)}
            <span style={{
              fontSize: 10.5, fontWeight: isActive ? 800 : 600,
              color, letterSpacing: '-0.01em',
            }}>{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// 전체화면 숏폼 플레이어 모달
function ShortsPlayer({ shorts, startIdx, onClose, showSidePanels = false, fixedToScrollContainer = false, onProductClick }) {
  const [idx, setIdx] = React.useState(startIdx);
  const [playing, setPlaying] = React.useState(true);
  const [liked, setLiked] = React.useState(false);
  const total = shorts.length;
  const cur = shorts[idx];

  const go = (dir) => setIdx(i => (i + dir + total) % total);

  // ESC 키로 닫기, 상하 방향키로 이동
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') go(-1);
      else if (e.key === ' ') { e.preventDefault(); setPlaying(p => !p); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, total]);

  // 가짜 프로그레스 애니메이션
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    setProgress(0);
    if (!playing) return;
    const t0 = Date.now();
    const totalMs = parseFloat(cur.duration.replace(':', '.')) * 60 * 1000; // 대략
    const id = setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / Math.max(totalMs, 3000));
      setProgress(p);
      if (p >= 1) { clearInterval(id); go(1); }
    }, 80);
    return () => clearInterval(id);
  }, [idx, playing]);

  // 터치 스와이프 (세로)
  const touchY = React.useRef(null);
  const onTouchStart = (e) => { touchY.current = e.touches[0].clientY; };
  const onTouchEnd = (e) => {
    if (touchY.current == null) return;
    const dy = e.changedTouches[0].clientY - touchY.current;
    if (dy < -40) go(1);
    else if (dy > 40) go(-1);
    touchY.current = null;
  };

  // 휠(스크롤)로 다음/이전 — 디바운스로 연속 휠 이벤트 병합
  const wheelLock = React.useRef(false);
  const wheelAccum = React.useRef(0);
  const onWheel = (e) => {
    e.preventDefault();
    if (wheelLock.current) return;

    wheelAccum.current += e.deltaY;
    const THRESHOLD = 40;

    if (wheelAccum.current > THRESHOLD) {
      go(1);
      wheelLock.current = true;
      wheelAccum.current = 0;
      setTimeout(() => { wheelLock.current = false; }, 360);
    } else if (wheelAccum.current < -THRESHOLD) {
      go(-1);
      wheelLock.current = true;
      wheelAccum.current = 0;
      setTimeout(() => { wheelLock.current = false; }, 360);
    }
  };

  // 컨테이너에 passive:false로 wheel 리스너 부착 (preventDefault 필요)
  // + fixedToScrollContainer일 때 부모 스크롤러 잠그기
  const rootRef = React.useRef(null);
  React.useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const handler = (e) => onWheel(e);
    el.addEventListener('wheel', handler, { passive: false });

    // 부모 스크롤 컨테이너 찾기 + 잠금
    let cleanupScroll = null;
    if (fixedToScrollContainer) {
      let scroller = el.parentElement;
      while (scroller && scroller !== document.body) {
        const cs = getComputedStyle(scroller);
        if ((cs.overflowY === 'auto' || cs.overflowY === 'scroll')) {
          break;
        }
        scroller = scroller.parentElement;
      }
      if (scroller && scroller !== document.body) {
        const savedScrollTop = scroller.scrollTop;
        const savedOverflow = scroller.style.overflow;
        scroller.scrollTop = 0;
        scroller.style.overflow = 'hidden';
        cleanupScroll = () => {
          scroller.style.overflow = savedOverflow;
          scroller.scrollTop = savedScrollTop;
        };
      }
    }

    return () => {
      el.removeEventListener('wheel', handler);
      if (cleanupScroll) cleanupScroll();
    };
  }, [total, fixedToScrollContainer]);

  // 부모 스크롤 컨테이너의 clientHeight(=viewport 높이)
  const [scrollerHeight, setScrollerHeight] = React.useState(null);
  React.useEffect(() => {
    if (!fixedToScrollContainer) return;
    const el = rootRef.current;
    if (!el) return;
    let scroller = el.parentElement;
    while (scroller && scroller !== document.body) {
      const cs = getComputedStyle(scroller);
      if (cs.overflowY === 'auto' || cs.overflowY === 'scroll') break;
      scroller = scroller.parentElement;
    }
    if (scroller && scroller !== document.body) {
      setScrollerHeight(scroller.clientHeight);
    }
  }, [fixedToScrollContainer]);

  // 더블탭 큰 하트 (#3)
  const [bigHearts, setBigHearts] = React.useState([]);
  const lastTapRef = React.useRef(0);
  const handleStageClick = (e) => {
    const now = Date.now();
    if (now - lastTapRef.current < 320) {
      // 더블탭: 좋아요 ON + 큰 하트 펑
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = now + Math.random();
      setBigHearts(hs => [...hs, { id, x, y }]);
      setTimeout(() => setBigHearts(hs => hs.filter(h => h.id !== id)), 900);
      if (!liked) setLiked(true);
      lastTapRef.current = 0;
    } else {
      lastTapRef.current = now;
      setTimeout(() => {
        if (lastTapRef.current === now) setPlaying(p => !p);
      }, 280);
    }
  };

  return (
    <div
      ref={rootRef}
      onClick={handleStageClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      style={{
        // 모바일: absolute inset:0 (부모가 작은 phone-scroll 컨테이너)
        // PC: top:0 + 부모 스크롤러 viewport 높이로 고정 (scrollTop이 잠긴 상태)
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: fixedToScrollContainer && scrollerHeight ? scrollerHeight : undefined,
        bottom: fixedToScrollContainer && scrollerHeight ? undefined : 0,
        zIndex: 50,
        background: '#000',
        overflow: 'hidden',
        animation: 'shortsFadeIn 0.22s ease',
        touchAction: 'none',
        overscrollBehavior: 'contain',
      }}
    >
      {/* 인접 슬라이드를 살짝 렌더(세로 전환 느낌) */}
      {shorts.map((s, i) => {
        const offset = i - idx;
        if (Math.abs(offset) > 1) return null;
        const isActive = i === idx;
        return (
          <div key={s.id} style={{
            position: 'absolute', inset: 0,
            transform: `translateY(${offset * 100}%)`,
            transition: 'transform 0.32s cubic-bezier(.3,.7,.3,1)',
            background: `linear-gradient(160deg, hsl(${s.hue} 35% 18%) 0%, hsl(${s.hue} 25% 8%) 55%, #000 100%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: showSidePanels ? 24 : 0,
            padding: showSidePanels ? '70px 24px 100px' : 0,
            overflow: 'hidden',
          }}>
            {/* PC 좌측 패널 — 마스터 프로필 정보 */}
            {showSidePanels && isActive && (
              <ShortsLeftPanel onClose={onClose} />
            )}

            {/* 9:16 세로 스테이지 — 컨테이너 높이에 맞춰 폭 자동 계산 */}
            <div style={{
              position: 'relative',
              height: showSidePanels ? 600 : '100%',  // PC: 명시적 600px (높이 우선)
              width: showSidePanels ? 338 : 'auto',   // PC: 600 × 9/16 = 337.5
              aspectRatio: showSidePanels ? undefined : '9 / 16',
              maxHeight: '100%',
              maxWidth: '100%',
              background: '#0B1F3A',
              borderRadius: showSidePanels ? 14 : 0,
              boxShadow: '0 10px 60px rgba(0,0,0,0.6)',
              overflow: 'hidden',
              alignSelf: 'center',
              flexShrink: 0,
            }}>
              {/* 실제 영상이 있는 슬라이드 — 활성 슬라이드에서만 재생 */}
              {isActive && (s.videoUrl || s.youtubeId) ? (
                <>
                  {s.youtubeId ? (
                    <iframe
                      key={`yt-${s.id}-${idx}`}
                      src={`https://www.youtube.com/embed/${s.youtubeId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`}
                      title={s.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        border: 'none', display: 'block',
                      }}
                    />
                  ) : (
                    <>
                      {/* 블러 배경 — 같은 영상을 뒤에 cover + blur로 깔아 여백 자연스럽게 채움 */}
                      <video
                        key={`vid-bg-${s.id}-${idx}`}
                        src={s.videoUrl}
                        poster={s.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{
                          position: 'absolute', inset: 0,
                          width: '100%', height: '100%',
                          objectFit: 'cover',
                          filter: 'blur(28px) brightness(0.55) saturate(1.2)',
                          transform: 'scale(1.15)',  // blur 가장자리 잘림 방지
                          pointerEvents: 'none',
                        }}
                      />
                      {/* 메인 영상 — 잘리지 않게 contain */}
                      <video
                        key={`vid-${s.id}-${idx}`}
                        src={s.videoUrl}
                        poster={s.image}
                        autoPlay
                        loop
                        playsInline
                        controls
                        controlsList="nodownload"
                        onClick={(e) => e.stopPropagation()}
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
                  {/* 영상 슬라이드 위 떠다니는 제품 광고 — stage 내부 좌측 상단 */}
                  {s.productAd && (
                    <FloatingProductAd
                      ad={s.productAd}
                      onProductClick={(ad) => {
                        onClose && onClose();
                        onProductClick && onProductClick(ad);
                      }}
                    />
                  )}
                </>
              ) : (
                <>
                  {/* 제품 이미지 (있으면) — 영상 없을 때, 살짝 어둡게 깔고 위에 제목 노출 */}
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.product || s.title}
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        opacity: 0.7,
                      }}
                    />
                  )}
                  {/* 어두운 그라디언트 — 텍스트 가독성 */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 100%)',
                  }} />
                  {/* 제목 — 큰 워터마크가 아닌 적당한 사이즈로 중앙 노출 */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: 26, fontWeight: 900,
                    letterSpacing: '-0.03em', padding: '0 28px', textAlign: 'center',
                    textWrap: 'balance', pointerEvents: 'none',
                    textShadow: '0 4px 22px rgba(0,0,0,0.6)',
                    lineHeight: 1.3,
                  }}>{s.title}</div>
                  {/* 하단 — 제품명 라벨 */}
                  {s.product && (
                    <div style={{
                      position: 'absolute', left: 0, right: 0, bottom: 14,
                      textAlign: 'center', pointerEvents: 'none',
                    }}>
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        padding: '4px 10px', borderRadius: 999,
                        background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                        color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}>
                        # {s.product}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* PC 우측 패널 — 추천 클립 리스트 */}
            {showSidePanels && isActive && (
              <ShortsRightPanel
                shorts={shorts}
                currentIdx={idx}
                onSelect={(newIdx) => setIdx(newIdx)}
              />
            )}
          </div>
        );
      })}

      {/* 탑바 — 진행 바 + 닫기 */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        padding: '14px 14px 0',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0))',
        zIndex: 3,
      }} onClick={(e) => e.stopPropagation()}>
        {/* 프로그레스 세그먼트 */}
        <div style={{ display: 'flex', gap: 3 }}>
          {shorts.map((_, i) => (
            <div key={i} style={{
              flex: 1, height: 2.5, borderRadius: 2,
              background: 'rgba(255,255,255,0.28)', overflow: 'hidden',
            }}>
              <div style={{
                width: `${i < idx ? 100 : i === idx ? progress * 100 : 0}%`,
                height: '100%', background: '#fff',
                transition: i === idx ? 'width 0.08s linear' : 'none',
              }} />
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 12,
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
          }}>
            <span className="chairman-badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '3px 8px', borderRadius: 4,
              background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
              color: '#0B1F3A', fontSize: 9, fontWeight: 800, letterSpacing: '0.12em',
            }}>
              {ProfileIcon.crown(9, '#0B1F3A')} CHAIRMAN
            </span>
            <span>{PROFILE.name.toUpperCase()}</span>
          </div>
          <button onClick={onClose} aria-label="닫기" style={{
            width: 32, height: 32, borderRadius: 999, border: 'none',
            background: 'rgba(255,255,255,0.15)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
                 strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>

      {/* 중앙 큰 재생/일시정지 아이콘 — 탭할 때마다 잠깐 노출 */}
      {!playing && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none', zIndex: 2,
        }}>
          <div style={{
            width: 76, height: 76, borderRadius: 999,
            background: 'rgba(0,0,0,0.5)',
            border: '1.5px solid rgba(255,255,255,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{ marginLeft: 4 }}>{ProfileIcon.play(36, '#fff')}</div>
          </div>
        </div>
      )}

      {/* #3 더블탭 큰 하트 오버레이 */}
      {bigHearts.map(h => (
        <div key={h.id} style={{
          position: 'absolute', left: h.x, top: h.y,
          width: 0, height: 0,
          pointerEvents: 'none', zIndex: 4,
        }}>
          <svg width="160" height="160" viewBox="0 0 24 24"
               style={{
                 position: 'absolute', left: 0, top: 0,
                 transform: 'translate(-50%,-50%)',
                 animation: 'bigHeartPop 0.85s cubic-bezier(.2,.7,.3,1.2) forwards',
                 filter: 'drop-shadow(0 8px 22px rgba(255,59,106,0.5))',
               }}
               fill="#FF3B6A">
            <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
        </div>
      ))}

      {/* 우측 액션 스택 (좋아요 · 댓글 · 공유 · 더보기) */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          right: showSidePanels ? 296 : 10,  // PC: 우측 패널(260) + gap(18) + 18 여백
          bottom: 120,
          display: 'flex', flexDirection: 'column', gap: 18,
          alignItems: 'center', zIndex: 3,
        }}
      >
        <ActionButton
          onClick={() => setLiked(l => !l)}
          color={liked ? '#FF3B6A' : '#fff'}
          label={liked ? (parseInt(cur.likes) + 1) + 'K' : cur.likes}
          filled={liked}
          type="heart"
        />
        <ActionButton color="#fff" label={Math.round(parseInt(cur.views) * 0.08) + ''} type="comment" />
        <ActionButton color="#fff" label="공유" type="share" />
        <ActionButton color="#fff" label="" type="more" />
      </div>

      {/* 하단 캡션 + 메타 */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          left: showSidePanels ? 296 : 0,    // PC: 좌측 패널 폭만큼 안쪽
          right: showSidePanels ? 360 : 60,  // PC: 우측 패널 + 액션스택
          bottom: 22,
          padding: '0 16px', color: '#fff', zIndex: 3,
        }}
      >
        <div style={{
          fontSize: 13.5, fontWeight: 600, lineHeight: 1.4,
          textShadow: '0 1px 3px rgba(0,0,0,0.4)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{cur.title}</div>
        <div style={{
          marginTop: 6, fontSize: 11, color: 'rgba(255,255,255,0.7)',
          fontVariantNumeric: 'tabular-nums',
        }}>조회 {cur.views} · ♥ {cur.likes} · {cur.duration}</div>
      </div>

      {/* 상하 이동 버튼 (데스크톱용 힌트) */}
      <button
        onClick={(e) => { e.stopPropagation(); go(-1); }}
        aria-label="이전"
        style={navArrowStyle({ top: 12 }, showSidePanels)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); go(1); }}
        aria-label="다음"
        style={navArrowStyle({ bottom: 12 }, showSidePanels)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* 페이지 인덱스 */}
      <div style={{
        position: 'absolute',
        left: showSidePanels ? 312 : 16,  // PC: 좌측 패널 안쪽
        bottom: 92,
        color: 'rgba(255,255,255,0.7)', fontSize: 10, fontWeight: 700,
        letterSpacing: '0.14em', zIndex: 3,
      }}>
        {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      <style>{`
        @keyframes shortsFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function navArrowStyle(pos, withSidePanel = false) {
  return {
    position: 'absolute', right: withSidePanel ? 296 : 14, ...pos,
    width: 30, height: 30, borderRadius: 999, border: 'none',
    background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)',
    cursor: 'pointer', padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 4,
  };
}

// PC 풀스크린 숏폼 플레이어 — 좌측 패널 (마스터 프로필 정보)
function ShortsLeftPanel({ onClose }) {
  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      style={{
        flexShrink: 0,
        width: 260, maxWidth: '24%',
        height: '100%',
        display: 'flex', flexDirection: 'column',
        gap: 14,
        animation: 'shortsFadeIn 0.4s ease both',
      }}
    >
      {/* 프로필 카드 */}
      <div style={{
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        padding: '18px 16px 16px',
        color: '#fff',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 52, height: 52, borderRadius: 999, overflow: 'hidden',
            border: '2px solid rgba(0,182,240,0.6)',
            background: '#fff',
            flexShrink: 0,
          }}>
            <img
              src={PROFILE.videoPoster}
              alt={PROFILE.name}
              style={{
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center 25%',
                display: 'block',
              }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className="chairman-badge" style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '2px 7px', borderRadius: 4,
              background: 'linear-gradient(135deg, #00B6F0, #5CD3F7)',
              color: '#0B1F3A', fontSize: 9, fontWeight: 800, letterSpacing: '0.1em',
              marginBottom: 4,
            }}>
              {ProfileIcon.crown(8, '#0B1F3A')} {PROFILE.rank}
            </div>
            <div style={{
              fontSize: 15, fontWeight: 800, letterSpacing: '-0.01em',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{PROFILE.name}</div>
            <div style={{
              fontSize: 10.5, color: 'rgba(255,255,255,0.65)',
              fontWeight: 600, letterSpacing: '0.06em',
            }}>{PROFILE.location}</div>
          </div>
        </div>

        <div style={{
          margin: '14px 0 12px', height: 1,
          background: 'linear-gradient(90deg, rgba(0,182,240,0.5) 0%, rgba(0,182,240,0) 100%)',
        }} />

        <p style={{
          margin: 0, fontSize: 11.5, lineHeight: 1.55,
          color: 'rgba(255,255,255,0.85)', fontWeight: 500,
          textWrap: 'pretty',
          display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          “{PROFILE.bio}”
        </p>

        {/* SNS 라인 */}
        <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
          {SNS.map(s => (
            <a
              key={s.key}
              href={SNS_URL[s.key] || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: 30, height: 30, borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,182,240,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              {iconByKey(s.key, 14, '#fff')}
            </a>
          ))}
        </div>
      </div>

      {/* 프로필로 이동 CTA */}
      <button
        onClick={onClose}
        style={{
          padding: '10px 14px', borderRadius: 10,
          background: '#fff', border: 'none', cursor: 'pointer',
          color: '#0B1F3A', fontSize: 12, fontWeight: 800, letterSpacing: '-0.01em',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}
      >
        프로필 전체 보기
        <span>→</span>
      </button>
    </aside>
  );
}

// PC 풀스크린 숏폼 플레이어 — 우측 패널 (추천 클립 리스트)
function ShortsRightPanel({ shorts, currentIdx, onSelect }) {
  // 현재 영상 제외하고 다음 ~9개 표시
  const recommended = React.useMemo(() => {
    const arr = [];
    for (let k = 1; k <= 9; k++) {
      const i = (currentIdx + k) % shorts.length;
      arr.push({ idx: i, item: shorts[i] });
    }
    return arr;
  }, [shorts, currentIdx]);

  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      style={{
        flexShrink: 0,
        width: 260, maxWidth: '24%',
        height: '100%',
        display: 'flex', flexDirection: 'column',
        gap: 12,
        color: '#fff',
        animation: 'shortsFadeIn 0.4s ease both',
      }}
    >
      <div style={{
        fontSize: 11, fontWeight: 800, letterSpacing: '0.18em',
        color: 'rgba(255,255,255,0.7)',
        padding: '0 4px',
      }}>다음 클립</div>

      <div className="phone-scroll" style={{
        flex: 1, overflowY: 'auto', overflowX: 'hidden',
        display: 'flex', flexDirection: 'column', gap: 10,
        paddingRight: 4,
      }}>
        {recommended.map(({ idx, item }) => (
          <button
            key={`rec-${idx}-${item.id}`}
            onClick={() => onSelect(idx)}
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: 8, borderRadius: 10, border: 'none',
              background: 'rgba(255,255,255,0.06)',
              cursor: 'pointer', textAlign: 'left',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,182,240,0.18)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >
            {/* 썸네일 */}
            <div style={{
              flexShrink: 0,
              width: 56, height: 84, borderRadius: 6, overflow: 'hidden',
              background: `linear-gradient(145deg, hsl(${item.hue} 38% 28%), hsl(${item.hue} 30% 14%))`,
              position: 'relative',
            }}>
              {item.image && (
                <img
                  src={item.image}
                  alt=""
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                  }}
                />
              )}
              <div style={{
                position: 'absolute', left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)',
                padding: '12px 4px 3px',
                color: '#fff', fontSize: 8.5, fontWeight: 700,
                fontVariantNumeric: 'tabular-nums', textAlign: 'right',
                paddingRight: 5,
              }}>{item.duration}</div>
              {/* 플래그 */}
              <div style={{
                position: 'absolute', top: 3, left: 3,
                padding: '1px 4px', borderRadius: 2,
                background: item.flag === '공식' ? '#00B6F0' : 'rgba(245,247,250,0.95)',
                color: item.flag === '공식' ? '#fff' : '#4A5568',
                fontSize: 7.5, fontWeight: 800, letterSpacing: '0.02em',
              }}>{item.flag}</div>
            </div>
            {/* 정보 */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 11.5, fontWeight: 700, lineHeight: 1.3,
                color: '#fff',
                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 4,
              }}>{item.title}</div>
              <div style={{
                fontSize: 10, color: 'rgba(255,255,255,0.6)', fontWeight: 600,
                fontVariantNumeric: 'tabular-nums',
                display: 'flex', alignItems: 'center', gap: 5,
              }}>
                <span>▶ {item.views}</span>
                <span style={{ opacity: 0.5 }}>·</span>
                <span>♥ {item.likes}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

// 영상 위 떠다니는 제품 광고 — 좌측 상단에 부유, 클릭하면 제품 페이지로 이동
function FloatingProductAd({ ad, onProductClick }) {
  const [hover, setHover] = React.useState(false);
  const [closed, setClosed] = React.useState(false);

  if (closed) return null;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        position: 'absolute',
        top: 86,           // 상단바 + 여백
        left: 14,          // 좌측 — 우측 액션 스택과 겹치지 않게
        zIndex: 4,
        animation: 'adSlideIn 0.55s cubic-bezier(.2,.7,.3,1.2) both',
        pointerEvents: 'auto',
      }}
    >
      {/* 닫기 버튼 — 우상단 작게 */}
      <button
        onClick={(e) => { e.stopPropagation(); setClosed(true); }}
        aria-label="광고 닫기"
        style={{
          position: 'absolute', top: -6, right: -6, zIndex: 2,
          width: 20, height: 20, borderRadius: 999, border: 'none',
          background: 'rgba(11,31,58,0.7)', backdropFilter: 'blur(8px)',
          cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        }}
      >
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff"
             strokeWidth="3" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* 부유 컨테이너 — 보틀이 둥실둥실 */}
      <div style={{
        animation: 'adFloat 4.5s ease-in-out infinite',
        filter: hover
          ? 'drop-shadow(0 16px 30px rgba(255, 70, 50, 0.55))'
          : 'drop-shadow(0 10px 20px rgba(255, 70, 50, 0.35))',
        transition: 'filter 0.25s',
        display: 'flex', justifyContent: 'center',
      }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onProductClick && onProductClick(ad);
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-label={ad.name}
          style={{
            background: 'transparent', border: 'none', padding: 0,
            display: 'inline-block', cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          <img
            src={ad.image}
            alt={ad.name}
            style={{
              width: 88, height: 110,
              objectFit: 'contain', display: 'block',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.3s cubic-bezier(.2,.7,.3,1)',
            }}
          />
        </button>
      </div>

      {/* 라벨 칩 — 부유와 별개로 고정 위치 (가독성) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onProductClick && onProductClick(ad);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          marginTop: 6,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '7px 12px 7px 10px', borderRadius: 999,
          background: 'linear-gradient(135deg, #00B6F0 0%, #5CD3F7 100%)',
          border: 'none',
          color: '#fff',
          textDecoration: 'none',
          fontSize: 11.5, fontWeight: 800, letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          animation: 'adLabelPulse 2.4s ease-in-out infinite',
          cursor: 'pointer',
          transform: hover ? 'translateY(-1px) scale(1.03)' : 'none',
          transition: 'transform 0.18s ease',
          fontFamily: 'inherit',
        }}
      >
        <span style={{
          width: 16, height: 16, borderRadius: 999,
          background: 'rgba(255,255,255,0.25)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 9, fontWeight: 900,
        }}>?</span>
        {ad.label}
        <span style={{ fontSize: 13, marginLeft: -2 }}>›</span>
      </button>

      {/* 제품명 + 가격 — 라벨 아래 미세 정보 */}
      <div style={{
        marginTop: 6, textAlign: 'center',
        fontSize: 10.5, fontWeight: 700,
        color: 'rgba(255,255,255,0.95)',
        textShadow: '0 1px 4px rgba(0,0,0,0.5)',
        letterSpacing: '-0.01em',
      }}>
        {ad.name}
        {ad.price && (
          <div style={{
            marginTop: 2,
            fontSize: 11.5, fontWeight: 800, color: '#FFE45A',
            fontVariantNumeric: 'tabular-nums',
          }}>{ad.price}</div>
        )}
      </div>
    </div>
  );
}

function ActionButton({ type, color = '#fff', label = '', filled = false, onClick }) {
  const renderIcon = () => {
    switch (type) {
      case 'heart':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24"
               fill={filled ? color : 'none'} stroke={color}
               strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
        );
      case 'comment':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color}
               strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H8l-5 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        );
      case 'share':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color}
               strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        );
      case 'more':
        return (
          <svg width="26" height="26" viewBox="0 0 24 24" fill={color}>
            <circle cx="5" cy="12" r="1.6" />
            <circle cx="12" cy="12" r="1.6" />
            <circle cx="19" cy="12" r="1.6" />
          </svg>
        );
      default: return null;
    }
  };

  // 하트 폭발 — 타입이 heart이고 클릭 시 한번 발동
  const [bursts, setBursts] = React.useState([]);
  const [pulse, setPulse] = React.useState(false);
  const handleClick = (e) => {
    if (type === 'heart' && !filled) {
      // 좋아요로 채워질 때만 폭발 (취소 시엔 안함)
      const burstId = Date.now();
      const particles = Array.from({ length: 8 }, (_, idx) => ({
        id: burstId + idx,
        dx: (Math.random() - 0.5) * 80,        // -40 ~ +40
        dy: -50 - Math.random() * 40,          // -50 ~ -90
        rot: (Math.random() - 0.5) * 90,
        delay: idx * 20,
      }));
      setBursts(prev => [...prev, ...particles]);
      setTimeout(() => {
        setBursts(prev => prev.filter(b => b.id < burstId || b.id >= burstId + 8 + 1));
      }, 900);
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
    onClick && onClick(e);
  };

  return (
    <button onClick={handleClick} style={{
      background: 'transparent', border: 'none', cursor: 'pointer',
      padding: 0, position: 'relative',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
    }}>
      <div style={{
        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.45))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: pulse ? 'heartPulse 0.6s cubic-bezier(.2,.7,.3,1.4)' : 'none',
        position: 'relative',
      }}>
        {renderIcon()}
        {/* 하트 폭발 파티클 */}
        {type === 'heart' && bursts.map(b => (
          <span
            key={b.id}
            style={{
              position: 'absolute', left: '50%', top: '50%',
              width: 14, height: 14,
              marginLeft: -7, marginTop: -7,
              pointerEvents: 'none',
              animation: `heartBurst 0.85s cubic-bezier(.2,.7,.3,1) ${b.delay}ms both`,
              '--dx': `${b.dx}px`,
              '--dy': `${b.dy}px`,
              '--rot': `${b.rot}deg`,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF3B6A">
              <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 5a5.5 5.5 0 019.5 7c-2.5 4.5-9.5 9-9.5 9z" />
            </svg>
          </span>
        ))}
      </div>
      {label && (
        <span style={{
          fontSize: 10.5, fontWeight: 700, color: '#fff',
          textShadow: '0 1px 3px rgba(0,0,0,0.5)',
          fontVariantNumeric: 'tabular-nums',
        }}>{label}</span>
      )}
    </button>
  );
}

function VariationClassic({ shopVariant = 'default', onPageChange } = {}) {
  const _onPageChangeRef = React.useRef(onPageChange);
  React.useEffect(() => { _onPageChangeRef.current = onPageChange; });
  const { t } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k };
  // 카테고리 탭 + 플래그 토글에 따라 숏폼 필터링
  const filterShorts = (list, tabKey, flagKey) => {
    let r = list;
    if (tabKey === 'company') r = r.filter(s => s.flag === '공식');
    else if (tabKey !== 'all') r = r.filter(s => s.category === tabKey);
    if (flagKey === 'official') r = r.filter(s => s.flag === '공식');
    else if (flagKey === 'personal') r = r.filter(s => s.flag === '개인');
    return r;
  };
  const [playerIdx, setPlayerIdx] = React.useState(null);
  const [viewerIdx, setViewerIdx] = React.useState(null);
  const [clipTab, setClipTab] = React.useState('all');
  const [notifOpen, setNotifOpen] = React.useState(false);
  const [flagFilter, setFlagFilter] = React.useState('all'); // 'all' | 'official' | 'personal'

  // 알림 미읽음 카운트 — notifStore 구독
  const [notifUnread, setNotifUnread] = React.useState(() => (window.notifStore ? window.notifStore.unreadCount() : 3));
  React.useEffect(() => {
    if (!window.notifStore) return;
    const sync = () => setNotifUnread(window.notifStore.unreadCount());
    sync();
    return window.notifStore.subscribe(sync);
  }, []);

  // 라우팅 — 현재 페이지
  const [currentPage, setCurrentPage] = React.useState('shorts');
  const [shopProduct, setShopProduct] = React.useState(null);
  const [productVideo, setProductVideo] = React.useState(null);
  const contentRef = React.useRef(null);

  // 스크롤 컨테이너를 항상 최상단으로
  const scrollContentTop = React.useCallback(() => {
    if (contentRef.current) contentRef.current.scrollTop = 0;
    // 모바일 디바이스 프레임의 phone-scroll 부모를 찾아 함께 0으로
    let el = contentRef.current;
    while (el) {
      if (el.scrollHeight > el.clientHeight && el.scrollTop > 0) el.scrollTop = 0;
      el = el.parentElement;
    }
  }, []);

  // 페이지 변경/상세 진입·이탈 시 상단으로
  React.useEffect(() => { scrollContentTop(); }, [currentPage, scrollContentTop]);
  // 호스트에 페이지 변경 알림
  React.useEffect(() => {
    if (typeof _onPageChangeRef.current === 'function') _onPageChangeRef.current(currentPage);
  }, [currentPage]);
  // 제품 상세 진입/이탈 시 상단으로
  React.useEffect(() => { scrollContentTop(); }, [shopProduct, scrollContentTop]);

  // 상품 상세페이지 진입 시 body 플래그 → 어시스턴트 플로팅 숨김
  React.useEffect(() => {
    const inDetail = currentPage === 'shop' && !!shopProduct;
    document.body.classList.toggle('in-product-detail', inDetail);
    document.body.classList.toggle('atomy-shop-active', currentPage === 'shop');
    return () => document.body.classList.remove('in-product-detail');
  }, [currentPage, shopProduct]);

  // 영상 재생(전체화면 숏폼 / 상품 상세 영상 모달) 중 어시스턴트 숨김
  React.useEffect(() => {
    const playing = playerIdx !== null || !!productVideo;
    document.body.classList.toggle('in-video-playback', playing);
    return () => document.body.classList.remove('in-video-playback');
  }, [playerIdx, productVideo]);

  const goPage = (key) => {
    setCurrentPage(key);
    setShopProduct(null);
    scrollContentTop();
  };
  const clipTabs = [
    { key: 'all',      label: t('shorts.tab_all') },
    { key: 'product',  label: t('shorts.tab_routine') },
    { key: 'company',  label: t('shorts.tab_review') },
    { key: 'business', label: '비즈니스' },
    { key: 'life',     label: '라이프' },
  ];
  const filteredShorts = filterShorts(SHORTS, clipTab, flagFilter);

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F7F5F0',
      minHeight: '100%',
      color: '#0B1F3A',
      paddingBottom: 0,
    }}>
      {/* 모바일 상단 로고 헤더 */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid rgba(11,31,58,0.06)',
        padding: '12px 14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'relative',
        zIndex: 20,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => goPage('shop')}
            aria-label="ATOMY · 제품구매로 이동"
            style={{
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: 0, lineHeight: 0,
            }}
          >
            <AtomyLogo size={28} showCaption={true} />
          </button>
          <LanguageSwitcher size="mobile" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <button aria-label="검색" style={{
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          {/* 알림 — 미확인 카운트 배지 + 클릭 시 팝업 */}
          <button
            aria-label="알림"
            onClick={(e) => { e.stopPropagation(); setNotifOpen(o => !o); }}
            style={{
              background: notifOpen ? '#F5F7FA' : 'transparent',
              border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0,
              position: 'relative', borderRadius: 999,
              transition: 'background 0.15s',
            }}
          >
            <svg className="bell-wobble" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 16v-5a6 6 0 10-12 0v5l-1.5 2.2a.6.6 0 00.5.95h14a.6.6 0 00.5-.95L18 16z" />
              <path d="M10 21a2 2 0 004 0" />
            </svg>
            {notifUnread > 0 && (
              <span style={{
                position: 'absolute', top: -2, right: -4,
                minWidth: 16, height: 16, padding: '0 4px',
                borderRadius: 999, border: '1.5px solid #fff',
                background: '#FF3B6A',
                color: '#fff', fontSize: 9.5, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
              }}>{notifUnread}</span>
            )}
          </button>
          <button aria-label="장바구니" data-cart-icon style={{
            background: 'transparent', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0,
            position: 'relative',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
              <path d="M9 11V7a3 3 0 016 0v4" />
            </svg>
            <span style={{
              position: 'absolute', top: -2, right: -4,
              minWidth: 16, height: 16, padding: '0 4px',
              borderRadius: 999, border: '1.5px solid #fff',
              background: '#00B6F0', color: '#fff',
              fontSize: 9.5, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontVariantNumeric: 'tabular-nums',
            }}><span data-cart-count>2</span></span>
          </button>
        </div>

        {/* 알림 드롭다운 팝업 */}
        <NotificationPopup
          open={notifOpen}
          onClose={() => setNotifOpen(false)}
          anchorRight={10}
          anchorTop={52}
          isMobile={true}
        />
      </div>

      {/* 라우팅된 콘텐츠 — currentPage가 shorts가 아니면 다른 페이지 렌더 후 종료 */}
      {currentPage !== 'shorts' && (
        <div ref={contentRef} style={{ flex: 1 }}>
          {currentPage === 'shop' && (
            shopProduct ? (
              shopProduct.id === '000017' ? (
                <HemohimShotDetail
                  product={HEMOHIM_DETAIL}
                  isMobile={true}
                  onClose={() => setShopProduct(null)}
                  onPlayVideo={setProductVideo}
                  onSelectProduct={(np) => setShopProduct(np)}
                />
              ) : shopProduct.id === '000168' ? (
                <HemohimDetail product={shopProduct} isMobile={true} onClose={() => setShopProduct(null)} />
              ) : shopProduct.id === '000605' ? (
                <AtomyProductDetail product={HERBAL_SHAMPOO_DETAIL} isMobile={true} onClose={() => setShopProduct(null)} />
              ) : shopProduct.id === '000460' ? (
                <LipTreatmentDetail product={shopProduct} isMobile={true} onClose={() => setShopProduct(null)} />
              ) : (
                <AtomyProductDetail
                  product={shopProduct}
                  isMobile={true}
                  onClose={() => setShopProduct(null)}
                  onPlayVideo={setProductVideo}
                />
              )
            ) : (
              <AtomyShop
                isMobile={true}
                shopVariant={shopVariant}
                onSelectProduct={(p) => setShopProduct(p)}
              />
            )
          )}
          {currentPage === 'life' && (
            <AtomyLife isMobile={true} onPlay={() => {}} />
          )}
          {currentPage === 'about' && (
            <AtomyAbout isMobile={true} onPlay={() => {}} />
          )}
        </div>
      )}

      {/* 석세스클립 페이지 콘텐츠 — currentPage === 'shorts'일 때만 노출 */}
      {currentPage === 'shorts' && (<>

      {/* Media — 좌우 스와이프 캐러셀 (영상 + 이미지 혼합), 클릭 시 전체화면 */}
      <ProfileMediaCarousel
        items={PROFILE_MEDIA}
        onExpand={(i) => setViewerIdx(i)}
      />

      {/* Info card */}
      <div style={{ padding: '20px 20px 8px', position: 'relative' }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 8, marginBottom: 12,
        }}>
          <div className="chairman-badge" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 10px 5px 8px', borderRadius: 4,
            background: 'linear-gradient(135deg, #00B6F0 0%, #5CD3F7 50%, #0088B8 100%)',
            color: '#0B1F3A', fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
          }}>
            {ProfileIcon.crown(11, '#0B1F3A')} {PROFILE.rank}
          </div>
          {/* SEOUL, KR 자리에 SNS 아이콘 — 박스 없이 아이콘만, 호버 시 브랜드 컬러 */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            {SNS.map(s => <SnsIconLink key={s.key} item={s} />)}
          </div>
        </div>

        <h1 style={{
          margin: 0, fontSize: 24, lineHeight: 1.15, fontWeight: 800,
          letterSpacing: '-0.02em', color: '#0B1F3A',
        }}>
          {t('profile.respected_ceo')}<br />
          <span style={{ color: '#00B6F0' }}>{PROFILE.name}</span>
        </h1>

        <div style={{
          margin: '14px 0 12px', height: 1,
          background: 'linear-gradient(90deg, #00B6F0 0%, rgba(0,182,240,0) 100%)',
        }} />

        <p style={{
          margin: 0, fontSize: 13, lineHeight: 1.6, color: '#2B3A52',
          fontWeight: 400, textWrap: 'pretty',
        }}>
          “{PROFILE.bio}”
        </p>
      </div>

      {/* 석세스클립 섹션 헤더 + 카테고리 탭 — PC 데스크톱 동일 구조 */}
      <div style={{
        marginTop: 18,
        background: '#fff',
        padding: '14px 14px 12px',
        position: 'sticky', top: 0, zIndex: 10,
        borderBottom: '1px solid rgba(11,31,58,0.06)',
      }}>
        {/* 섹션 헤더 */}
        <div style={{ marginBottom: 12 }}>
          <div style={{
            fontSize: 10, letterSpacing: '0.22em', color: '#2A8AB0', fontWeight: 800,
          }}>SUCCESS CLIPS</div>
          <h2 style={{
            margin: '4px 0 0', fontSize: 17, fontWeight: 800,
            letterSpacing: '-0.02em', color: '#0B1F3A', lineHeight: 1.25,
          }}>
            {PROFILE.name}의 석세스클립
            <span style={{
              marginLeft: 8, fontSize: 12, color: '#6B7A90', fontWeight: 600,
              fontVariantNumeric: 'tabular-nums',
            }}>· {filteredShorts.length}개</span>
          </h2>
        </div>

        {/* 카테고리 탭 — PC와 동일한 라운드 필 컨테이너 */}
        <div
          className="phone-scroll"
          style={{
            display: 'flex', gap: 4, padding: 4,
            background: '#fff',
            borderRadius: 10, border: '1px solid rgba(11,31,58,0.08)',
            overflowX: 'auto', WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
          }}
        >
          {clipTabs.map(t => {
            const isActive = clipTab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setClipTab(t.key)}
                style={{
                  flex: '1 0 auto',
                  padding: '7px 14px', borderRadius: 7, border: 'none',
                  background: isActive ? '#0B1F3A' : 'transparent',
                  color: isActive ? '#fff' : '#6B7A90',
                  fontSize: 12.5, fontWeight: isActive ? 800 : 600,
                  letterSpacing: '-0.01em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.15s, color 0.15s',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* 채널 플래그 토글 — PC 데스크톱과 동일 */}
        <div style={{
          marginTop: 10,
          display: 'flex', alignItems: 'center', gap: 6,
        }}>
        <span style={{
          fontSize: 10.5, color: '#8A97AD', fontWeight: 700,
          letterSpacing: '0.06em', marginRight: 2,
        }}>{t('shorts.tab_all') === 'All' ? 'Channel' : '채널'}</span>
        {[
          { key: 'all',      label: t('shorts.tab_all'),   icon: null },
          { key: 'official', label: t('shorts.tab_business'), icon: 'shield' },
          { key: 'personal', label: t('shorts.tab_routine'), icon: 'person' },
        ].map(f => {
          const isActive = flagFilter === f.key;
          const isOfficial = f.key === 'official';
          const isPersonal = f.key === 'personal';
          return (
            <button
              key={f.key}
              onClick={() => setFlagFilter(f.key)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '4px 9px 4px 8px', borderRadius: 999,
                background: isActive
                  ? (isOfficial ? '#00B6F0' : isPersonal ? '#0B1F3A' : '#0B1F3A')
                  : 'transparent',
                border: isActive ? 'none' : '1px solid rgba(11,31,58,0.12)',
                color: isActive ? '#fff' : '#4A5568',
                fontSize: 11, fontWeight: 700, letterSpacing: '-0.01em',
                cursor: 'pointer',
              }}
            >
              {f.icon === 'shield' && NavIcon.shield(10, isActive ? '#fff' : '#00B6F0', 2.4)}
              {f.icon === 'person' && NavIcon.person(10, isActive ? '#fff' : '#4A5568', 2.4)}
              {f.label}
            </button>
          );
        })}
        </div>
      </div>

      {/* Shorts — 3열 세로 그리드, 테두리 없이 꽉 채움 */}
      <div style={{ padding: 0, position: 'relative' }}>
        {filteredShorts.length === 0 ? (
          <div style={{
            padding: '60px 24px', textAlign: 'center',
            color: '#8A97AD', fontSize: 13, fontWeight: 600,
          }}>
            {t('shorts.tab_all') === 'All' ? 'No clips in this category yet' : '이 카테고리의 클립이 아직 없어요'}
          </div>
        ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
        }}>
          {filteredShorts.map((s, i) => (
            <div
              key={s.id}
              onClick={() => setPlayerIdx(i)}
              className="shorts-cell"
              style={{
                cursor: 'pointer',
                animation: `cardFadeUp 0.55s cubic-bezier(.2,.7,.3,1) ${Math.min(i, 18) * 60}ms both`,
              }}
            >
              <div style={{
                position: 'relative', width: '100%', aspectRatio: '1/1',
                borderRadius: 0, overflow: 'hidden',
                background: `linear-gradient(145deg, hsl(${s.hue} 38% 28%), hsl(${s.hue} 30% 14%))`,
                border: 'none',
                boxShadow: 'none',
              }}>
                {/* 제품 이미지 — 호버 시 확대 */}
                {s.image && (
                  <img
                    src={s.image}
                    alt={s.product || s.title}
                    className="shorts-img"
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
                      willChange: 'transform',
                    }}
                  />
                )}
                {/* 컬러 톤 오버레이 — 브랜드 톤 유지 */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(160deg, hsla(${s.hue}, 30%, 20%, 0.12) 0%, hsla(${s.hue}, 30%, 10%, 0.18) 100%)`,
                  mixBlendMode: 'multiply',
                }} />
                {/* 대각 하이라이트 */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 45%)',
                }} />
                {/* 하단 그라디언트 — 텍스트 가독성 */}
                <div style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0, height: '58%',
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 100%)',
                }} />
                {/* 재생 아이콘 — 카드 중앙 정렬, 크게 */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  pointerEvents: 'none',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 999,
                    background: 'rgba(0,0,0,0.48)',
                    backdropFilter: 'blur(8px)',
                    border: '1.5px solid rgba(255,255,255,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
                  }}>
                    <div style={{ marginLeft: 3 }}>{ProfileIcon.play(22, '#fff')}</div>
                  </div>
                </div>
                {/* 플래그 — 좌상단 (개인 / 공식), 아이콘 포함 */}
                <div style={{
                  position: 'absolute', top: 6, left: 6,
                  display: 'inline-flex', alignItems: 'center', gap: 3,
                  padding: '2px 6px 2px 5px', borderRadius: 3,
                  background: s.flag === '공식' ? '#00B6F0' : 'rgba(245,247,250,0.95)',
                  color: s.flag === '공식' ? '#fff' : '#4A5568',
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.02em',
                  border: s.flag === '공식' ? 'none' : '1px solid rgba(11,31,58,0.06)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
                }}>
                  {s.flag === '공식'
                    ? NavIcon.shield(9, '#fff', 2.4)
                    : NavIcon.person(9, '#4A5568', 2.4)}
                  {s.flag}
                </div>
                {/* duration */}
                <div style={{
                  position: 'absolute', top: 6, right: 6,
                  padding: '2px 5px', borderRadius: 4,
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '0.02em',
                  fontVariantNumeric: 'tabular-nums',
                }}>{s.duration}</div>
                {/* 제목 + 조회수 (카드 내부 하단 오버레이) */}
                <div style={{
                  position: 'absolute', left: 8, right: 8, bottom: 6,
                  color: '#fff',
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                }}>
                  <div style={{
                    fontSize: 10.5, fontWeight: 700, lineHeight: 1.25,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                    overflow: 'hidden', textWrap: 'pretty',
                  }}>{s.title}</div>
                  <div style={{
                    marginTop: 3, display: 'flex', alignItems: 'center', gap: 4,
                    fontSize: 9.5, fontWeight: 600, color: 'rgba(255,255,255,0.85)',
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    <span>▶ {s.views}</span>
                    <span style={{ opacity: 0.45 }}>·</span>
                    <span>♥ {s.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      </>)}{/* 석세스클립 콘텐츠 끝 */}

      {/* 하단 네비게이션 — 모든 페이지에서 항상 노출 */}
      <BottomNav
        activeKey={currentPage}
        onNavClick={goPage}
      />

      {/* 전체화면 숏폼 플레이어 */}
      {currentPage === 'shorts' && playerIdx !== null && (
        <ShortsPlayer
          shorts={filteredShorts}
          startIdx={playerIdx}
          onClose={() => setPlayerIdx(null)}
          onProductClick={(ad) => {
            // 광고 클릭 시 제품구매 페이지의 헤모힘 샷 상세로 이동
            setShopProduct({ id: '000017' });
            setCurrentPage('shop');
          }}
        />
      )}

      {/* 전체화면 프로필 미디어 뷰어 — 석세스클립 페이지에서만 */}
      {currentPage === 'shorts' && viewerIdx !== null && (
        <ProfileMediaViewer
          items={PROFILE_MEDIA}
          startIdx={viewerIdx}
          onClose={() => setViewerIdx(null)}
        />
      )}

      {/* 상품상세 영상 풀스크린 모달 */}
      {productVideo && (
        <AboutVideoModal
          video={productVideo}
          onClose={() => setProductVideo(null)}
        />
      )}
    </div>
  );
}

Object.assign(window, { VariationClassic, BottomNav, ShortsPlayer, ProfileMediaViewer });
