// app-intro.js — 첫 접속 인트로 영상 (하루 1회, 서서히 등장/종료, SKIP 지원)
// 폰(iPhone17·S26): 화면 컨테이너에 풀블리드 / 큰 화면(Fold·PC): 모달 레이어 + 원본 비율
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
    '.app-intro{position:absolute;inset:0;z-index:9999;background:#000;display:flex;align-items:center;justify-content:center;overflow:hidden;opacity:0;transition:opacity 1s ease;}',
    '.app-intro.show{opacity:1;}',
    '.app-intro.fade{opacity:0;pointer-events:none;}',
    '.app-intro video{width:100%;height:100%;object-fit:cover;display:block;}',
    '.app-intro .skip{position:absolute;top:7%;right:5%;z-index:10;background:rgba(0,0,0,0.45);color:#fff;font-size:13px;font-weight:700;letter-spacing:0.08em;padding:8px 18px;border-radius:999px;border:1px solid rgba(255,255,255,0.35);cursor:pointer;font-family:inherit;backdrop-filter:blur(6px);}',
    '.app-intro .skip:hover{background:rgba(0,0,0,0.65);}',
    /* 모달 모드 — 딤 배경 + 원본 비율 비디오 */
    '.app-intro.modal{background:rgba(4,10,20,0.82);backdrop-filter:blur(8px);}',
    '.app-intro.modal video{width:min(72vw,1080px);height:auto;max-height:80vh;object-fit:contain;border-radius:18px;box-shadow:0 40px 120px rgba(0,0,0,0.6);}',
    '.app-intro.modal .skip{top:auto;bottom:6%;right:50%;transform:translateX(50%);}'
  ].join('\n');

  function mount(container, isModal) {
    var styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    var root = document.createElement('div');
    root.className = 'app-intro' + (isModal ? ' modal' : '');
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

  // 기기별 마운트 대상 — [selector, 모달 여부]
  // 폰: 화면 컨테이너 안에 풀블리드 / Fold·PC: 화면 컨테이너 위 모달 레이어 (원본 비율)
  var TARGETS = [
    // 통합 프리뷰 (Master) — iPhone17 화면
    ['.iphone-noto .phone-scroll', false],
    // 단독 페이지
    ['[data-screen-label="iPhone 17"] .phone-scroll', false],
    ['[data-screen-label="S26 Ultra"] .phone-scroll', false],
    ['[data-screen-label="Fold7"] .phone-scroll', true],
    ['[data-screen-label="PC"] .phone-scroll', true],
  ];

  var mounted = false;
  function tryMount() {
    if (mounted) return false;
    for (var i = 0; i < TARGETS.length; i++) {
      var el = document.querySelector(TARGETS[i][0]);
      if (el) {
        var container = el.classList.contains('phone-scroll') ? el.parentElement : el;
        if (container) {
          mounted = true;
          mount(container, TARGETS[i][1]);
          return true;
        }
      }
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
