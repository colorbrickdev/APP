// app-intro.js — 첫 접속 인트로 영상 (하루 1회, 서서히 등장/종료, SKIP 지원)
(function () {
  var VIDEO_SRC = 'uploads/intro.mp4';
  var LS_KEY = 'appIntroVideoDate';

  // 하루 1회 — 오늘 이미 봤으면 표시하지 않음
  var today = new Date();
  var stamp = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  try {
    if (localStorage.getItem(LS_KEY) === stamp) return;
  } catch (_) {}

  var css = [
    '#appIntro{position:absolute;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;overflow:hidden;opacity:0;transition:opacity 1s ease;}',
    '#appIntro.show{opacity:1;}',
    '#appIntro.fade{opacity:0;pointer-events:none;}',
    '#appIntro video{width:100%;height:100%;object-fit:cover;display:block;}',
    '#appIntro .skip{position:absolute;top:7%;right:5%;z-index:10;background:rgba(0,0,0,0.45);color:#fff;font-size:13px;font-weight:700;letter-spacing:0.08em;padding:8px 18px;border-radius:999px;border:1px solid rgba(255,255,255,0.35);cursor:pointer;font-family:inherit;backdrop-filter:blur(6px);}',
    '#appIntro .skip:hover{background:rgba(0,0,0,0.65);}'
  ].join('\n');

  function mount(container) {
    var styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    var root = document.createElement('div');
    root.id = 'appIntro';
    root.innerHTML =
      '<video src="' + VIDEO_SRC + '" autoplay muted playsinline preload="auto"></video>' +
      '<button class="skip" type="button">SKIP</button>';
    container.appendChild(root);

    var video = root.querySelector('video');
    var done = false;

    function markSeen() {
      try { localStorage.setItem(LS_KEY, stamp); } catch (_) {}
    }

    // 서서히 나타남
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { root.classList.add('show'); });
    });

    // 재생 끝 → 서서히 사라짐
    function fadeOut() {
      if (done) return;
      done = true;
      markSeen();
      root.classList.add('fade');
      setTimeout(function () { root.remove(); styleEl.remove(); }, 1050);
    }

    // SKIP → 즉시 사라짐
    root.querySelector('.skip').addEventListener('click', function (e) {
      e.stopPropagation();
      if (done) return;
      done = true;
      markSeen();
      root.remove();
      styleEl.remove();
    });

    video.addEventListener('ended', fadeOut);
    // 영상 로드 실패 시 인트로 없이 진행
    video.addEventListener('error', function () {
      if (!done) { done = true; root.remove(); styleEl.remove(); }
    });
  }

  // iPhone 17 화면 컨테이너(React 렌더 완료)를 기다렸다가 그 안에 마운트
  var mounted = false;
  function tryMount() {
    if (mounted) return false;
    var scroll = document.querySelector('.iphone-noto .phone-scroll');
    var container = scroll ? scroll.parentElement : null;
    if (container) {
      mounted = true;
      mount(container);
      return true;
    }
    return false;
  }
  if (!tryMount()) {
    var mo = new MutationObserver(function () {
      if (tryMount()) mo.disconnect();
    });
    mo.observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 180000);
  }
})();
