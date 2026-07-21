// AtomyShop.jsx — 제품구매 메뉴 메인 페이지
// 구조: 히어로 배너 → 카테고리 칩 → 베스트(헤모힘 샷 강조) → 신제품 → 슬림바디 → 가격대별 추천

const HEMOHIM_SHOT_IMG = 'https://image.atomy.com/KR/goods/000017/org/911/250902000046911.jpg?w=480&h=480';

// =============================================================
// 제품 데이터 — atomy.com/main에서 가져온 실제 상품
// =============================================================
// 제품 데이터 — kr.atomy.com/category에서 가져온 실제 상품 목록 (이미지/이름/가격/PV/리뷰)
// =============================================================
// 주문완료 + 간편가입 (전체 기기) — window.openOrderComplete(triggerEl)
// =============================================================
(function () {
  function hostFrom(el) {
    const sc = el && el.closest ? el.closest('.phone-scroll') : null;
    let parent = sc ? sc.parentElement : null;
    if (!parent && el) {
      // portal(스티키 바 등)에서 열린 경우 — .phone-scroll을 직접 자식으로 가진 조상 탐색
      let cur = el.parentElement;
      while (cur && cur !== document.body) {
        if (cur.querySelector(':scope > .phone-scroll')) { parent = cur; break; }
        cur = cur.parentElement;
      }
    }
    if (!parent) return null;
    if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
    return parent;
  }
  const overlayBase = 'position:absolute;inset:0;z-index:10001;background:rgba(11,31,58,0.5);display:flex;align-items:flex-end;justify-content:center;animation:shortsFadeIn 0.2s ease both;';
  const sheetBase = 'width:100%;max-width:560px;background:#fff;border-radius:18px 18px 0 0;overflow:hidden;animation:aiBriefUp 0.32s cubic-bezier(.2,.8,.3,1) both;font-family:inherit;';
  // 현재 언어 문자열 선택 (ko/en/ja/zh)
  function TT(map) {
    const l = (window.i18nStore && window.i18nStore.lang) || 'ko';
    return map[l] != null ? map[l] : map.ko;
  }
  // 휴대폰 번호 자동 하이픈 (010-0000-0000)
  function attachPhoneFormat(input) {
    input.addEventListener('input', () => {
      const d = input.value.replace(/\D/g, '').slice(0, 11);
      let v = d;
      if (d.length > 7) v = d.slice(0, 3) + '-' + d.slice(3, 7) + '-' + d.slice(7);
      else if (d.length > 3) v = d.slice(0, 3) + '-' + d.slice(3);
      input.value = v;
    });
  }

  window.openOrderComplete = function (triggerEl) {
    const host = hostFrom(triggerEl);
    if (!host || host.querySelector('.__order_done')) return;
    const orderNo = 'A' + String(Date.now()).slice(-8);
    // 주문 저장 — 주문내역 시트에서 사용
    try {
      const prod = window.__lastOrderProduct || {};
      const orders = JSON.parse(localStorage.getItem('quickOrders') || '[]');
      orders.unshift({ no: orderNo, date: new Date().toISOString().slice(0, 10), status: '배송중', name: prod.name || '애터미 상품', price: prod.price || 0, image: prod.image || '' });
      localStorage.setItem('quickOrders', JSON.stringify(orders.slice(0, 20)));
      // 배송정보(이름·주소) 저장 — 간편가입/사업자 가입에 인계
      if (!localStorage.getItem('quickProfile')) {
        localStorage.setItem('quickProfile', JSON.stringify({ name: '김애터미', addr: '서울특별시 강남구 테헤란로 123, 101동 1001호' }));
      }
    } catch (_) {}
    const isMember = !!localStorage.getItem('quickMember');
    const ov = document.createElement('div');
    ov.className = '__order_done';
    ov.style.cssText = overlayBase;
    ov.innerHTML = `
      <div style="${sheetBase}">
        <div style="padding:26px 20px 18px;text-align:center;">
          <div style="width:52px;height:52px;border-radius:999px;background:rgba(0,182,240,0.12);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div style="font-size:17px;font-weight:900;color:#0B1F3A;">${TT({ko:'주문이 완료됐어요',en:'Order complete',ja:'ご注文が完了しました',zh:'订单已完成'})}</div>
          <div style="margin-top:5px;font-size:12px;font-weight:600;color:#8A97AD;">${TT({ko:'주문번호',en:'Order No.',ja:'注文番号',zh:'订单号'})} <span style="color:#0088B8;font-weight:800;">${orderNo}</span> · ${isMember ? TT({ko:'간편회원 주문',en:'Member order',ja:'簡単会員注文',zh:'快捷会员订单'}) : TT({ko:'비회원 주문',en:'Guest order',ja:'ゲスト注文',zh:'非会员订单'})}</div>
        </div>
        ${isMember ? '' : `
        <div style="margin:0 16px 14px;padding:14px;border-radius:14px;background:linear-gradient(120deg,#0B1F3A,#0E5F86);color:#fff;">
          <div style="font-size:13.5px;font-weight:900;">✦ ${TT({ko:'휴대폰 번호만으로 3초 간편가입',en:'3-sec signup with just your phone number',ja:'携帯番号だけで3秒会員登録',zh:'仅凭手机号3秒注册'})}</div>
          <div style="margin-top:4px;font-size:11.5px;font-weight:600;color:rgba(255,255,255,0.85);line-height:1.5;">${TT({ko:'이번 주문이 계정에 자동 연결돼요.<br/>다음부턴 주문조회가 한 번에 + PV 적립 시작',en:'This order links to your account.<br/>One-tap order tracking + PV rewards',ja:'今回の注文がアカウントに自動連携。<br/>次回から注文照会がワンタップ + PV積立',zh:'本次订单自动关联账户。<br/>下次一键查询订单 + 开始累积PV'})}</div>
          <button class="__go_signup" style="margin-top:11px;width:100%;padding:11px;border:none;border-radius:9px;background:#00B6F0;color:#fff;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit;">${TT({ko:'간편가입 하기',en:'Quick sign up',ja:'簡単登録',zh:'快捷注册'})}</button>
        </div>`}
        <div style="padding:0 16px 16px;display:flex;flex-direction:column;gap:8px;">
          ${isMember ? '<button class="__od_hist" style="width:100%;padding:12px;border:none;border-radius:9px;background:#0B1F3A;color:#5CD3F7;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit;">' + TT({ko:'주문 내역 보기',en:'View orders',ja:'注文履歴を見る',zh:'查看订单'}) + '</button>' : ''}
          <button class="__od_close" style="width:100%;padding:12px;border:1px solid rgba(11,31,58,0.14);border-radius:9px;background:#fff;color:#6B7A90;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">${isMember ? TT({ko:'확인',en:'OK',ja:'確認',zh:'确认'}) : TT({ko:'다음에 할게요',en:'Maybe later',ja:'また今度',zh:'下次再说'})}</button>
        </div>
      </div>`;
    host.appendChild(ov);
    const close = () => ov.remove();
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('.__od_close').addEventListener('click', close);
    const hist = ov.querySelector('.__od_hist');
    if (hist) hist.addEventListener('click', () => { close(); window.openOrderHistory(host); });
    const go = ov.querySelector('.__go_signup');
    if (go) go.addEventListener('click', () => { close(); window.openQuickSignup(host); });
  };

  window.openQuickSignup = function (hostOrEl) {
    const host = hostOrEl && hostOrEl.classList && hostOrEl.querySelector ? hostOrEl : hostFrom(hostOrEl);
    if (!host || host.querySelector('.__quick_signup')) return;
    const ov = document.createElement('div');
    ov.className = '__quick_signup';
    ov.style.cssText = overlayBase;
    ov.innerHTML = `
      <div style="${sheetBase}">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;border-bottom:1px solid rgba(11,31,58,0.07);">
          <div style="font-size:15px;font-weight:900;color:#0B1F3A;">✦ ${TT({ko:'3초 간편가입',en:'3-sec Quick Signup',ja:'3秒簡単登録',zh:'3秒快捷注册'})}</div>
          <button class="__qs_x" style="width:28px;height:28px;border-radius:999px;border:none;background:rgba(11,31,58,0.06);cursor:pointer;color:#4A5568;font-size:13px;">✕</button>
        </div>
        <div class="__qs_body" style="padding:18px;"></div>
      </div>`;
    host.appendChild(ov);
    const body = ov.querySelector('.__qs_body');
    const close = () => ov.remove();
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('.__qs_x').addEventListener('click', close);

    function step1() {
      body.innerHTML = `
        <div style="font-size:12px;font-weight:700;color:#6B7A90;margin-bottom:7px;">${TT({ko:'이름',en:'Name',ja:'お名前',zh:'姓名'})}</div>
        <input class="__qs_name" type="text" placeholder="${TT({ko:'이름',en:'Name',ja:'お名前',zh:'姓名'})}" style="width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:15px;font-weight:700;color:#0B1F3A;font-family:inherit;outline:none;" />
        <div style="font-size:12px;font-weight:700;color:#6B7A90;margin:12px 0 7px;">${TT({ko:'휴대폰 번호',en:'Phone number',ja:'携帯番号',zh:'手机号'})}</div>
        <input class="__qs_phone" type="tel" placeholder="010-0000-0000" style="width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:15px;font-weight:700;color:#0B1F3A;font-family:inherit;outline:none;" />
        <div style="margin-top:8px;font-size:11px;font-weight:600;color:#A0AABA;line-height:1.5;">${TT({ko:'비밀번호 없이 번호 인증으로 로그인해요. 주소는 방금 주문 정보에서 자동으로 연결됩니다.',en:'Log in via phone verification. Your address links automatically from your recent order.',ja:'番号認証でログイン。住所は注文情報から自動連携されます。',zh:'通过号码验证登录。地址将从订单信息自动关联。'})}</div>
        <button class="__qs_send" style="margin-top:14px;width:100%;padding:13px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">${TT({ko:'인증번호 받기',en:'Send code',ja:'認証番号を受け取る',zh:'获取验证码'})}</button>`;
      const nameEl = body.querySelector('.__qs_name');
      const phone = body.querySelector('.__qs_phone');
      attachPhoneFormat(phone);
      // 기존 프로필 이름 프리필
      try { const pf = JSON.parse(localStorage.getItem('quickProfile') || '{}'); if (pf.name && pf.name !== '김애터미') nameEl.value = pf.name; } catch (_) {}
      nameEl.focus();
      body.querySelector('.__qs_send').addEventListener('click', () => {
        let ok = true;
        if (!(nameEl.value || '').trim()) { nameEl.style.borderColor = '#FF3B6A'; ok = false; }
        if ((phone.value || '').replace(/\D/g, '').length < 10) { phone.style.borderColor = '#FF3B6A'; ok = false; }
        if (!ok) return;
        step2(phone.value, nameEl.value.trim());
      });
    }
    function step2(phone, name) {
      body.innerHTML = `
        <div style="font-size:12px;font-weight:700;color:#6B7A90;margin-bottom:7px;">${phone}  ${TT({ko:'로 보낸 인증번호 4자리',en:'— enter the 4-digit code we sent',ja:'に送信した4桁の認証番号',zh:'收到的4位验证码'})}</div>
        <input class="__qs_code" type="tel" maxlength="4" placeholder="0000" style="width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:20px;font-weight:900;letter-spacing:0.4em;text-align:center;color:#0B1F3A;font-family:inherit;outline:none;" />
        <button class="__qs_ok" style="margin-top:14px;width:100%;padding:13px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">확인</button>`;
      const code = body.querySelector('.__qs_code');
      code.focus();
      const done = () => { if ((code.value || '').length === 4) stepPw(phone, name); else code.style.borderColor = '#FF3B6A'; };
      body.querySelector('.__qs_ok').addEventListener('click', done);
      code.addEventListener('input', () => { if (code.value.length === 4) done(); });
    }
    function stepPw(phone, name) {
      body.innerHTML = `
        <div style="font-size:12px;font-weight:700;color:#6B7A90;margin-bottom:7px;">${TT({ko:'로그인 비밀번호 설정',en:'Set login password',ja:'ログインパスワード設定',zh:'设置登录密码'})} <span style="color:#A0AABA;font-weight:600;">${TT({ko:'(숫자 4자리 이상)',en:'(4+ digits)',ja:'（数字4桁以上）',zh:'（4位以上数字）'})}</span></div>
        <input class="__qs_pw" type="password" inputmode="numeric" placeholder="${TT({ko:'비밀번호',en:'Password',ja:'パスワード',zh:'密码'})}" style="width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:16px;font-weight:800;letter-spacing:0.2em;color:#0B1F3A;font-family:inherit;outline:none;" />
        <div style="margin-top:8px;font-size:11px;font-weight:600;color:#A0AABA;line-height:1.5;">${TT({ko:'다음부터는 휴대폰 번호 + 비밀번호로 로그인해요. 매번 인증번호를 받지 않아도 돼요.',en:'From now on, log in with phone + password. No more codes every time.',ja:'次回から携帯番号＋パスワードでログイン。毎回の認証は不要です。',zh:'今后使用手机号+密码登录，无需每次验证。'})}</div>
        <button class="__qs_setpw" style="margin-top:14px;width:100%;padding:13px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">${TT({ko:'설정 완료',en:'Done',ja:'設定完了',zh:'完成设置'})}</button>`;
      const pw = body.querySelector('.__qs_pw');
      pw.focus();
      body.querySelector('.__qs_setpw').addEventListener('click', () => {
        if ((pw.value || '').length < 4) { pw.style.borderColor = '#FF3B6A'; return; }
        try {
          localStorage.setItem('quickAccount', JSON.stringify({ phone, pw: pw.value }));
          localStorage.setItem('quickMember', phone);
          // 이름 저장 — 사업자 가입 등에 인계
          const pf = JSON.parse(localStorage.getItem('quickProfile') || '{}');
          localStorage.setItem('quickProfile', JSON.stringify({ ...pf, name: name || pf.name || '' }));
        } catch (_) {}
        step3();
      });
    }
    function step3() {
      body.innerHTML = `
        <div style="text-align:center;padding:6px 0 2px;">
          <div style="width:52px;height:52px;border-radius:999px;background:rgba(0,182,240,0.12);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div style="font-size:16px;font-weight:900;color:#0B1F3A;">${TT({ko:'가입 완료!',en:'Signed up!',ja:'登録完了！',zh:'注册完成！'})}</div>
          <div style="margin-top:6px;font-size:12.5px;font-weight:600;color:#6B7A90;line-height:1.6;">${TT({ko:'지난 주문 1건이 계정에 연결됐어요.<br/>다음부터는 휴대폰 번호 + 비밀번호로 로그인하세요.',en:'Your recent order is now linked.<br/>Log in with phone + password next time.',ja:'直近の注文1件がアカウントに連携されました。<br/>次回から番号＋パスワードでログイン。',zh:'最近1笔订单已关联账户。<br/>下次请用手机号+密码登录。'})}</div>
          <button class="__qs_done" style="margin-top:16px;width:100%;padding:13px;border:none;border-radius:10px;background:#0B1F3A;color:#5CD3F7;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">주문 내역 보기</button>
        </div>`;
      body.querySelector('.__qs_done').addEventListener('click', () => { close(); window.openOrderHistory(host); });
    }
    step1();
  };

  // 주문내역 시트 — 헤더 아이콘/가입완료에서 진입
  window.openOrderHistory = function (hostOrEl) {
    const host = hostOrEl && hostOrEl.querySelector && hostOrEl.querySelector(':scope > .phone-scroll') ? hostOrEl : hostFrom(hostOrEl);
    if (!host || host.querySelector('.__order_hist')) return;
    const member = localStorage.getItem('quickMember');
    let orders = [];
    try { orders = JSON.parse(localStorage.getItem('quickOrders') || '[]'); } catch (_) {}
    const ov = document.createElement('div');
    ov.className = '__order_hist';
    ov.style.cssText = overlayBase;
    const krw = n => (n || 0).toLocaleString('ko-KR');
    const rows = orders.length ? orders.map(o => `
      <div style="display:flex;gap:11px;align-items:center;padding:12px 0;border-bottom:1px solid rgba(11,31,58,0.06);">
        <div style="flex:0 0 auto;width:48px;height:48px;border-radius:10px;background:#F1F4F9;overflow:hidden;">${o.image ? `<img src="${o.image}" style="width:100%;height:100%;object-fit:cover;display:block;"/>` : ''}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:12.5px;font-weight:700;color:#0B1F3A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${o.name}</div>
          <div style="margin-top:2px;font-size:11px;font-weight:600;color:#8A97AD;">${o.date} · ${o.no}${o.price ? ' · ' + krw(o.price) + '원' : ''}</div>
        </div>
        <span style="flex:0 0 auto;padding:4px 9px;border-radius:999px;background:rgba(0,182,240,0.1);color:#0088B8;font-size:10.5px;font-weight:800;">${o.status}</span>
      </div>`).join('') : `
      <div style="text-align:center;padding:28px 0;color:#8A97AD;font-size:12.5px;font-weight:600;line-height:1.6;">${TT({ko:'아직 주문 내역이 없어요.<br/>첫 주문을 하면 여기에 모입니다.',en:'No orders yet.<br/>Your orders will appear here.',ja:'まだ注文履歴がありません。<br/>注文するとここに表示されます。',zh:'暂无订单记录。<br/>下单后将显示在这里。'})}</div>`;
    ov.innerHTML = `
      <div style="${sheetBase}max-height:78%;display:flex;flex-direction:column;">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;border-bottom:1px solid rgba(11,31,58,0.07);flex-shrink:0;">
          <div>
            <div style="font-size:15px;font-weight:900;color:#0B1F3A;">${TT({ko:'주문 내역',en:'Order History',ja:'注文履歴',zh:'订单记录'})}</div>
            ${member ? `<div style="margin-top:2px;font-size:11px;font-weight:700;color:#0088B8;">${TT({ko:'간편회원',en:'Member',ja:'簡単会員',zh:'快捷会员'})} · ${member}</div>` : ''}
          </div>
          <button class="__oh_x" style="width:28px;height:28px;border-radius:999px;border:none;background:rgba(11,31,58,0.06);cursor:pointer;color:#4A5568;font-size:13px;">✕</button>
        </div>
        <div class="filter-scroll" style="flex:1;overflow-y:auto;padding:4px 18px 14px;">
          ${member ? (localStorage.getItem('quickBiz') ? `
            <div style="margin:12px 0 2px;padding:12px 14px;border-radius:12px;background:linear-gradient(120deg,#0B1F3A,#0E5F86);color:#fff;display:flex;align-items:center;gap:10px;">
              <span style="font-size:18px;">🏅</span>
              <div style="flex:1;min-width:0;">
                <div style="font-size:12.5px;font-weight:900;">${TT({ko:'애터미 사업자 회원',en:'Atomy Business Member',ja:'アトミ事業者会員',zh:'艾多美事业会员'})}</div>
                <div style="margin-top:2px;font-size:10.5px;font-weight:600;color:rgba(255,255,255,0.8);">${TT({ko:'회원번호',en:'Member no.',ja:'会員番号',zh:'会员号'})} ${(JSON.parse(localStorage.getItem('quickBiz')||'{}').no)||''} · ${TT({ko:'구매 PV가 수당으로 적립돼요',en:'Purchase PV counts toward commissions',ja:'購入PVが報酬に積み立てられます',zh:'购买PV计入奖金'})}</div>
              </div>
            </div>` + rows : `
            <button class="__oh_biz" style="width:100%;margin:12px 0 2px;padding:0;border:none;border-radius:12px;background:linear-gradient(120deg,#0B1F3A,#0E5F86);color:#fff;cursor:pointer;font-family:inherit;text-align:left;overflow:hidden;">
              <div style="display:flex;align-items:center;gap:10px;padding:13px 14px;">
                <span style="font-size:18px;">💼</span>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:13px;font-weight:900;">${TT({ko:'소비가 소득이 되는 애터미 사업자',en:'Atomy Business — spending becomes income',ja:'消費が所得になるアトミ事業者',zh:'消费变收入的艾多美事业者'})}</div>
                  <div style="margin-top:2px;font-size:10.5px;font-weight:600;color:rgba(255,255,255,0.82);">${TT({ko:'간편회원 정보 그대로 1분 가입 · 구매 PV가 수당으로',en:'1-min signup with your member info · PV becomes commissions',ja:'会員情報そのまま1分登録・購入PVが報酬に',zh:'会员信息直接使用，1分钟注册 · PV变奖金'})}</div>
                </div>
                <span style="flex:0 0 auto;padding:6px 11px;border-radius:999px;background:#00B6F0;font-size:11px;font-weight:800;">${TT({ko:'가입하기',en:'Join',ja:'登録する',zh:'注册'})}</span>
              </div>
            </button>` + rows) + `
            <button class="__oh_logout" style="width:100%;margin:14px 0 16px;padding:12px;border:1.5px solid rgba(255,59,106,0.4);border-radius:10px;background:#fff;color:#FF3B6A;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>${TT({ko:'간편회원 연동 해제 (로그아웃)',en:'Unlink account (log out)',ja:'会員連携を解除（ログアウト）',zh:'解除会员关联（退出登录）'})}</button>` : `
            <div style="text-align:center;padding:22px 0 6px;color:#6B7A90;font-size:12.5px;font-weight:600;line-height:1.6;">${TT({ko:'주문 내역은 간편회원만 볼 수 있어요.<br/>휴대폰 번호만으로 3초면 끝!',en:'Order history is for members.<br/>Sign up in 3 seconds with your phone!',ja:'注文履歴は会員のみ閲覧できます。<br/>携帯番号だけで3秒！',zh:'订单记录仅会员可见。<br/>手机号3秒搞定！'})}</div>
            ${localStorage.getItem('quickAccount') ? '<button class="__oh_login" style="width:100%;margin:10px 0 0;padding:13px;border:none;border-radius:10px;background:#0B1F3A;color:#5CD3F7;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">' + TT({ko:'로그인',en:'Log in',ja:'ログイン',zh:'登录'}) + '</button>' : ''}
            <button class="__oh_signup" style="width:100%;margin:10px 0 6px;padding:13px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">✦ ${TT({ko:'간편가입 하기',en:'Quick sign up',ja:'簡単登録',zh:'快捷注册'})}</button>
            <div style="margin:14px 0 4px;padding-top:12px;border-top:1px solid rgba(11,31,58,0.07);">
              <div style="font-size:12px;font-weight:800;color:#0B1F3A;margin-bottom:8px;">${TT({ko:'비회원 주문조회',en:'Guest order lookup',ja:'非会員注文照会',zh:'非会员订单查询'})}</div>
              <input class="__oh_gno" type="text" placeholder="${TT({ko:'주문번호 (예: 7123451234512345)',en:'Order no. (e.g. 7123451234512345)',ja:'注文番号（例: 7123451234512345）',zh:'订单号（例: 7123451234512345）'})}" style="width:100%;box-sizing:border-box;padding:11px 13px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:13px;font-weight:700;color:#0B1F3A;font-family:inherit;outline:none;" />
              <input class="__oh_gph" type="tel" placeholder="${TT({ko:'주문자 휴대폰 번호',en:'Phone number on order',ja:'注文者の携帯番号',zh:'下单人手机号'})}" style="width:100%;box-sizing:border-box;margin-top:7px;padding:11px 13px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:13px;font-weight:700;color:#0B1F3A;font-family:inherit;outline:none;" />
              <button class="__oh_gfind" style="width:100%;margin:9px 0 4px;padding:12px;border:1px solid rgba(0,182,240,0.5);border-radius:10px;background:#fff;color:#0088B8;font-size:13px;font-weight:800;cursor:pointer;font-family:inherit;">${TT({ko:'주문 조회',en:'Find order',ja:'注文を照会',zh:'查询订单'})}</button>
              <div class="__oh_gres" style="padding-bottom:10px;"></div>
            </div>`}
        </div>
      </div>`;
    host.appendChild(ov);
    const close = () => ov.remove();
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('.__oh_x').addEventListener('click', close);
    const su = ov.querySelector('.__oh_signup');
    if (su) su.addEventListener('click', () => { close(); window.openQuickSignup(host); });
    // 비회원 주문조회 — 주문번호 + 휴대폰 번호
    const gfind = ov.querySelector('.__oh_gfind');
    if (gfind) {
      const gph = ov.querySelector('.__oh_gph');
      if (gph && typeof attachPhoneFormat === 'function') attachPhoneFormat(gph);
      gfind.addEventListener('click', () => {
        const no = (ov.querySelector('.__oh_gno').value || '').trim().toUpperCase();
        const ph = (gph.value || '').replace(/\D/g, '');
        const res = ov.querySelector('.__oh_gres');
        if (!no || ph.length < 10) {
          res.innerHTML = '<div style="padding:8px 2px;font-size:11.5px;font-weight:700;color:#FF3B6A;">' + TT({ko:'주문번호와 휴대폰 번호를 모두 입력해주세요.',en:'Enter both order number and phone.',ja:'注文番号と携帯番号を入力してください。',zh:'请输入订单号和手机号。'}) + '</div>';
          return;
        }
        const found = orders.find(o => String(o.no).toUpperCase() === no);
        if (!found) {
          res.innerHTML = '<div style="padding:8px 2px;font-size:11.5px;font-weight:700;color:#FF3B6A;">' + TT({ko:'일치하는 주문을 찾지 못했어요. 주문번호를 확인해주세요.',en:'No matching order found. Check the number.',ja:'一致する注文が見つかりません。番号をご確認ください。',zh:'未找到匹配订单，请核对订单号。'}) + '</div>';
          return;
        }
        res.innerHTML = `
          <div style="display:flex;gap:11px;align-items:center;padding:12px;margin-top:4px;border:1px solid rgba(0,182,240,0.3);border-radius:12px;background:rgba(0,182,240,0.04);">
            <div style="flex:0 0 auto;width:44px;height:44px;border-radius:9px;background:#F1F4F9;overflow:hidden;">${found.image ? `<img src="${found.image}" style="width:100%;height:100%;object-fit:cover;display:block;"/>` : ''}</div>
            <div style="flex:1;min-width:0;">
              <div style="font-size:12px;font-weight:700;color:#0B1F3A;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${found.name}</div>
              <div style="margin-top:2px;font-size:10.5px;font-weight:600;color:#8A97AD;">${found.date} · ${found.no}</div>
            </div>
            <span style="flex:0 0 auto;padding:4px 9px;border-radius:999px;background:rgba(0,182,240,0.1);color:#0088B8;font-size:10px;font-weight:800;">${found.status}</span>
          </div>`;
      });
    }
    const li = ov.querySelector('.__oh_login');
    if (li) li.addEventListener('click', () => { close(); window.openQuickLogin(host); });
    const lo = ov.querySelector('.__oh_logout');
    if (lo) lo.addEventListener('click', () => {
      try { localStorage.removeItem('quickMember'); } catch (_) {}
      close();
      if (window.showToast) window.showToast(TT({ko:'간편회원 연동이 해제됐어요',en:'Account unlinked',ja:'会員連携を解除しました',zh:'已解除会员关联'}));
      window.openOrderHistory(host); // 비회원 상태로 재오픈
    });
    const biz = ov.querySelector('.__oh_biz');
    if (biz) biz.addEventListener('click', () => { close(); window.openBizHandoff(host); });
  };
  // 간편 로그인 — 휴대폰 번호 + 비밀번호
  window.openQuickLogin = function (hostOrEl) {
    const host = hostOrEl && hostOrEl.querySelector && hostOrEl.querySelector(':scope > .phone-scroll') ? hostOrEl : hostFrom(hostOrEl);
    if (!host || host.querySelector('.__quick_login')) return;
    let acc = null;
    try { acc = JSON.parse(localStorage.getItem('quickAccount') || 'null'); } catch (_) {}
    const ov = document.createElement('div');
    ov.className = '__quick_login';
    ov.style.cssText = overlayBase;
    ov.innerHTML = `
      <div style="${sheetBase}">
        <div style="display:flex;align-items:center;justify-content:space-between;padding:16px 18px 12px;border-bottom:1px solid rgba(11,31,58,0.07);">
          <div style="font-size:15px;font-weight:900;color:#0B1F3A;">${TT({ko:'로그인',en:'Log in',ja:'ログイン',zh:'登录'})}</div>
          <button class="__ql_x" style="width:28px;height:28px;border-radius:999px;border:none;background:rgba(11,31,58,0.06);cursor:pointer;color:#4A5568;font-size:13px;">✕</button>
        </div>
        <div style="padding:18px;">
          <div style="font-size:12px;font-weight:700;color:#6B7A90;margin-bottom:7px;">${TT({ko:'휴대폰 번호',en:'Phone number',ja:'携帯番号',zh:'手机号'})}</div>
          <input class="__ql_phone" type="tel" placeholder="010-0000-0000" value="${acc ? acc.phone : ''}" style="width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:15px;font-weight:700;color:#0B1F3A;font-family:inherit;outline:none;" />
          <div style="font-size:12px;font-weight:700;color:#6B7A90;margin:12px 0 7px;">${TT({ko:'비밀번호',en:'Password',ja:'パスワード',zh:'密码'})}</div>
          <input class="__ql_pw" type="password" inputmode="numeric" placeholder="${TT({ko:'비밀번호',en:'Password',ja:'パスワード',zh:'密码'})}" style="width:100%;box-sizing:border-box;padding:13px 14px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:16px;font-weight:800;letter-spacing:0.2em;color:#0B1F3A;font-family:inherit;outline:none;" />
          <div class="__ql_err" style="display:none;margin-top:8px;font-size:11.5px;font-weight:700;color:#FF3B6A;">${TT({ko:'번호 또는 비밀번호가 맞지 않아요.',en:'Phone or password is incorrect.',ja:'番号またはパスワードが違います。',zh:'号码或密码不正确。'})}</div>
          <button class="__ql_go" style="margin-top:14px;width:100%;padding:13px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">${TT({ko:'로그인',en:'Log in',ja:'ログイン',zh:'登录'})}</button>
        </div>
      </div>`;
    host.appendChild(ov);
    const close = () => ov.remove();
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('.__ql_x').addEventListener('click', close);
    attachPhoneFormat(ov.querySelector('.__ql_phone'));
    ov.querySelector('.__ql_go').addEventListener('click', () => {
      const ph = ov.querySelector('.__ql_phone').value.replace(/\D/g, '');
      const pw = ov.querySelector('.__ql_pw').value;
      if (acc && ph === String(acc.phone).replace(/\D/g, '') && pw === acc.pw) {
        try { localStorage.setItem('quickMember', acc.phone); } catch (_) {}
        close();
        if (window.showToast) window.showToast(TT({ko:'로그인됐어요',en:'Logged in',ja:'ログインしました',zh:'已登录'}));
        window.openOrderHistory(host);
      } else {
        ov.querySelector('.__ql_err').style.display = 'block';
      }
    });
  };
  // 사업자 가입 핸드오프 — 간편회원 정보 전달 동의
  window.openBizHandoff = function (hostOrEl) {
    const host = hostOrEl && hostOrEl.querySelector && hostOrEl.querySelector(':scope > .phone-scroll') ? hostOrEl : hostFrom(hostOrEl);
    if (!host || host.querySelector('.__biz_handoff')) return;
    const member = localStorage.getItem('quickMember') || '';
    let prof = {};
    try { prof = JSON.parse(localStorage.getItem('quickProfile') || '{}'); } catch (_) {}
    const fmtPhone = (p) => { const d = String(p).replace(/\D/g, ''); return d.length === 11 ? d.slice(0,3)+'-'+d.slice(3,7)+'-'+d.slice(7) : p; };
    const ov = document.createElement('div');
    ov.className = '__biz_handoff';
    ov.style.cssText = overlayBase;
    const row = (label, val) => `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 0;border-bottom:1px solid rgba(11,31,58,0.06);">
        <span style="flex:0 0 auto;font-size:12px;font-weight:700;color:#8A97AD;">${label}</span>
        <span style="min-width:0;font-size:13px;font-weight:800;color:#0B1F3A;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${val}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
      </div>`;
    ov.innerHTML = `
      <div style="${sheetBase}">
        <div style="padding:18px 18px 6px;">
          <div style="font-size:15.5px;font-weight:900;color:#0B1F3A;">💼 ${TT({ko:'애터미 사업자 가입으로 이동',en:'Continue to Atomy Business signup',ja:'アトミ事業者登録へ移動',zh:'前往艾多美事业者注册'})}</div>
          <div style="margin-top:4px;font-size:12px;font-weight:600;color:#6B7A90;line-height:1.5;">${TT({ko:'아래 간편회원 정보를 가입 양식에 그대로 전달해요.<br/>다시 입력할 필요가 없습니다.',en:'We pass your member info to the signup form.<br/>No need to re-enter it.',ja:'会員情報を登録フォームへそのまま引き継ぎます。<br/>再入力は不要です。',zh:'会员信息将直接传入注册表单。<br/>无需重新输入。'})}</div>
        </div>
        <div style="padding:4px 18px 2px;">
          ${row(TT({ko:'이름',en:'Name',ja:'お名前',zh:'姓名'}), prof.name || TT({ko:'주문 배송정보에서 인계',en:'From order shipping info',ja:'注文配送情報から引継',zh:'从订单配送信息导入'}))}
          ${row(TT({ko:'휴대폰 번호',en:'Phone',ja:'携帯番号',zh:'手机号'}), fmtPhone(member) + ' <span style="color:#00B6F0;font-size:10.5px;">' + TT({ko:'인증완료',en:'Verified',ja:'認証済み',zh:'已验证'}) + '</span>')}
          ${row(TT({ko:'배송지 주소',en:'Address',ja:'配送先住所',zh:'收货地址'}), prof.addr || TT({ko:'주문 배송정보에서 인계',en:'From order shipping info',ja:'注文配送情報から引継',zh:'从订单配送信息导入'}))}
        </div>
        <div style="padding:12px 18px 18px;display:flex;flex-direction:column;gap:8px;">
          <button class="__bh_go" style="width:100%;padding:14px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14.5px;font-weight:800;cursor:pointer;font-family:inherit;">${TT({ko:'동의하고 가입 계속하기',en:'Agree & continue',ja:'同意して続行',zh:'同意并继续'})}</button>
          <button class="__bh_x" style="width:100%;padding:12px;border:1px solid rgba(11,31,58,0.14);border-radius:10px;background:#fff;color:#6B7A90;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">${TT({ko:'취소',en:'Cancel',ja:'キャンセル',zh:'取消'})}</button>
        </div>
      </div>`;
    host.appendChild(ov);
    const close = () => ov.remove();
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('.__bh_x').addEventListener('click', close);
    ov.querySelector('.__bh_go').addEventListener('click', () => { close(); window.open('https://atomy.page/EPrb8oCZ', '_blank'); });
  };

  // 애터미 사업자 가입 — 간편회원 정보 자동 인계
  window.openBizSignup = function (hostOrEl) {
    const host = hostOrEl && hostOrEl.querySelector && hostOrEl.querySelector(':scope > .phone-scroll') ? hostOrEl : hostFrom(hostOrEl);
    if (!host || host.querySelector('.__biz_signup')) return;
    const member = localStorage.getItem('quickMember') || '';
    let prof = {};
    try { prof = JSON.parse(localStorage.getItem('quickProfile') || '{}'); } catch (_) {}
    const fmtPhone = (p) => { const d = String(p).replace(/\D/g, ''); return d.length === 11 ? d.slice(0,3)+'-'+d.slice(3,7)+'-'+d.slice(7) : p; };
    const ov = document.createElement('div');
    ov.className = '__biz_signup';
    ov.style.cssText = overlayBase;
    const inputCss = 'width:100%;box-sizing:border-box;padding:12px 13px;border:1.5px solid rgba(11,31,58,0.12);border-radius:10px;font-size:14px;font-weight:700;color:#0B1F3A;font-family:inherit;outline:none;';
    const labelCss = 'font-size:12px;font-weight:700;color:#6B7A90;margin:12px 0 6px;';
    ov.innerHTML = `
      <div style="${sheetBase}max-height:82%;display:flex;flex-direction:column;">
        <div style="flex-shrink:0;padding:16px 18px 13px;background:linear-gradient(120deg,#0B1F3A,#0E5F86);color:#fff;position:relative;">
          <div style="font-size:15.5px;font-weight:900;">💼 애터미 사업자 가입</div>
          <div style="margin-top:3px;font-size:11.5px;font-weight:600;color:rgba(255,255,255,0.85);">간편회원 정보가 자동으로 채워졌어요 — 확인만 하면 됩니다</div>
          <button class="__bz_x" style="position:absolute;top:14px;right:14px;width:28px;height:28px;border-radius:999px;border:none;background:rgba(255,255,255,0.15);cursor:pointer;color:#fff;font-size:13px;">✕</button>
        </div>
        <div class="__bz_body filter-scroll" style="flex:1;overflow-y:auto;padding:6px 18px 18px;">
          <div style="${labelCss}">${TT({ko:'이름',en:'Name',ja:'お名前',zh:'姓名'})}</div>
          <input class="__bz_name" type="text" placeholder="${TT({ko:'이름',en:'Name',ja:'お名前',zh:'姓名'})}" value="${prof.name || ''}" style="${inputCss}" />
          <div style="${labelCss}">휴대폰 번호 <span style="color:#00B6F0;">· 간편회원 인증 완료</span></div>
          <input class="__bz_phone" type="tel" value="${fmtPhone(member)}" readonly style="${inputCss}background:#F5F7FA;color:#6B7A90;" />
          <div style="${labelCss}">주소</div>
          <input class="__bz_addr" type="text" placeholder="배송지 주소" value="${prof.addr || ''}" style="${inputCss}" />
          <div style="${labelCss}">추천인 회원번호 <span style="color:#A0AABA;font-weight:600;">(선택)</span></div>
          <input class="__bz_ref" type="text" placeholder="예: 12345678" style="${inputCss}" />
          <div style="margin-top:12px;padding:11px 13px;border-radius:10px;background:rgba(0,182,240,0.07);font-size:11.5px;font-weight:600;color:#0088B8;line-height:1.55;">가입 즉시 지금까지의 주문 PV가 계정에 연결되고, 이후 구매 PV는 수당 산정에 반영됩니다.</div>
          <button class="__bz_go" style="margin-top:14px;width:100%;padding:14px;border:none;border-radius:10px;background:#00B6F0;color:#fff;font-size:14.5px;font-weight:800;cursor:pointer;font-family:inherit;">사업자 가입 신청</button>
        </div>
      </div>`;
    host.appendChild(ov);
    const close = () => ov.remove();
    ov.addEventListener('click', (e) => { if (e.target === ov) close(); });
    ov.querySelector('.__bz_x').addEventListener('click', close);
    ov.querySelector('.__bz_go').addEventListener('click', () => {
      const name = ov.querySelector('.__bz_name').value.trim();
      const addr = ov.querySelector('.__bz_addr').value.trim();
      if (!name) { ov.querySelector('.__bz_name').style.borderColor = '#FF3B6A'; return; }
      if (!addr) { ov.querySelector('.__bz_addr').style.borderColor = '#FF3B6A'; return; }
      const no = String(10000000 + Math.floor(Math.random() * 89999999));
      try {
        localStorage.setItem('quickProfile', JSON.stringify({ name, addr }));
        localStorage.setItem('quickBiz', JSON.stringify({ no, name, date: new Date().toISOString().slice(0, 10) }));
      } catch (_) {}
      const body = ov.querySelector('.__bz_body');
      body.innerHTML = `
        <div style="text-align:center;padding:26px 0 18px;">
          <div style="width:52px;height:52px;border-radius:999px;background:rgba(0,182,240,0.12);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:24px;">🏅</div>
          <div style="font-size:16.5px;font-weight:900;color:#0B1F3A;">${name}님, 사업자 가입 완료!</div>
          <div style="margin-top:6px;font-size:12.5px;font-weight:600;color:#6B7A90;line-height:1.6;">회원번호 <b style="color:#0088B8;">${no}</b><br/>이제 모든 구매 PV가 수당으로 이어집니다.</div>
          <button class="__bz_done" style="margin-top:16px;width:100%;padding:13px;border:none;border-radius:10px;background:#0B1F3A;color:#5CD3F7;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;">확인</button>
        </div>`;
      body.querySelector('.__bz_done').addEventListener('click', () => { close(); if (window.showToast) window.showToast('🏅 애터미 사업자 가입을 축하합니다!'); if (window.fireConfetti) window.fireConfetti(host); });
    });
  };
})();

// 사이트 전역 허용 플래그 — 신제품·무료배송·수량한정·개별배송·추가혜택·시즌한정
const FLAG_COLORS = {
  '신제품': '#00B6F0',
  '무료배송': '#0B1F3A',
  '수량한정': '#FF3B6A',
  '개별배송': '#7B8597',
  '추가혜택': '#FF8A3D',
  '시즌한정': '#16A34A',
};

const SHOP_PRODUCTS = [
  // ★ 강조 — 헤모힘 샷 (id: 000017) ─ 상세페이지 연결 (히어로/네비용 유지)
  {
    id: '000017', name: '애터미 헤모힘 샷 (100ml*10병, 2box)',
    sub: '지친 몸을 깨우는 샷, 애터미 헤모힘 샷!',
    price: 59800, pv: 30000,
    image: HEMOHIM_SHOT_IMG,
    rating: 4.6, reviews: 41,
    badges: ['BEST', '신제품'],
    category: '건강식품',
    accent: '#E84141',
    detail: true,
  },
  // — kr.atomy.com/category 노출 순서 그대로 —
  { id: '000510', name: '애터미 칫솔 (1팩/8개입)',
    sub: '8개입 · 부드러운 솔', price: 9600, pv: 4800,
    image: 'https://image.atomy.com/KR/goods/000510/c60c6d4f-f293-4273-b77d-9c7e20bf47a5.jpg?w=480&h=480',
    rating: 4.7, reviews: 660, badges: ['BEST'], category: '헤어&바디' },
  { id: '000484', name: '애터미 클렌징 티슈 *1ea(20매)',
    sub: '20매 · 데일리 클렌징', price: 2000, pv: 700,
    image: 'https://image.atomy.com/KR/goods/000484/1c2ecdde-a667-4be4-9dbe-566b2fd6377a.jpg?w=480&h=480',
    rating: 4.6, reviews: 264, category: '뷰티' },
  { id: '001846', name: '애터미 화장지 4D(35M x 15롤) x 4팩',
    sub: '4D 엠보싱 · 15롤 x 4팩', price: 42800, pv: 5600,
    image: 'https://image.atomy.com/KR/goods/001846/ef8e5882-df4e-429e-a5fe-86931ddb140c.jpg?w=480&h=480',
    rating: 4.8, reviews: 1045, badges: ['BEST'], category: '리빙&홈데코' },
  { id: '000872', name: '애터미 물티슈(70매 x 8개)',
    sub: '70매 x 8개입', price: 17800, pv: 3300,
    image: 'https://image.atomy.com/KR/goods/000872/7594449c-af64-4bf6-aa11-46570f4caac9.jpg?w=480&h=480',
    rating: 4.7, reviews: 689, badges: ['BEST', '무료배송'], category: '리빙&홈데코' },
  { id: '000939', name: '애터미 자일리톨 껌 (1ea)',
    sub: '자일리톨 100% · 1개입', price: 2800, pv: 300,
    image: 'https://image.atomy.com/KR/goods/000939/b64acaf5-c271-45a6-b4e9-6c7388ef8c94.jpg?w=480&h=480',
    rating: 4.5, reviews: 258, category: '식품' },
  { id: '000877', name: '애터미 미용티슈(250매 x 4개)',
    sub: '250매 x 4개입', price: 6400, pv: 900,
    image: 'https://image.atomy.com/KR/goods/000877/eff14707-7a64-4581-98c0-4dd09a01e1e5.jpg?w=480&h=480',
    rating: 4.6, reviews: 302, category: '리빙&홈데코' },
  { id: '000878', name: '애터미 키친타월(180매 x 6개)',
    sub: '180매 x 6개입', price: 5900, pv: 800,
    image: 'https://image.atomy.com/KR/goods/000878/1082887a-296a-4f2e-88cc-3ae910cd8be5.jpg?w=480&h=480',
    rating: 4.5, reviews: 244, category: '리빙&홈데코' },
  { id: '002314', name: '애터미 주방세제 레드사과향',
    sub: '주방세제 · 레드사과향', price: 7800, pv: 2800,
    image: 'https://image.atomy.com/KR/goods/002314/org/811/251021000047811.jpg?w=480&h=480',
    rating: 4.6, reviews: 496, category: '리빙&홈데코' },
  { id: '000873', name: '애터미 물티슈 휴대용(20매 x 3개)',
    sub: '20매 x 3개 · 휴대용', price: 2000, pv: 500,
    image: 'https://image.atomy.com/KR/goods/000873/aa82f586-3057-450c-b0bd-893ce91c22da.jpg?w=480&h=480',
    rating: 4.5, reviews: 147, category: '리빙&홈데코' },
  { id: '000505', name: '애터미 치약 플러스 200g*1set(5ea)',
    sub: '200g x 5개입', price: 16800, pv: 3000,
    image: 'https://image.atomy.com/KR/goods/000505/ebd42f7f-f930-41f7-967f-a24840e1b837.jpg?w=480&h=480',
    rating: 4.8, reviews: 586, badges: ['BEST'], category: '헤어&바디' },
  { id: '000276', name: '앱솔루트 에센스 선 *1ea (40ml)',
    sub: '40ml · 톤업 선케어', price: 10800, pv: 3800,
    image: 'https://image.atomy.com/KR/goods/000276/6219cf73-3282-4294-bf45-c8976ca11b41.jpg?w=480&h=480',
    rating: 4.6, reviews: 142, category: '뷰티' },
  { id: '000284', name: '애터미 선크림 베이지 *4ea',
    sub: '60ml x 4개입', price: 30600, pv: 10000,
    image: 'https://image.atomy.com/KR/goods/000284/d535011b-c986-41b4-a057-7d2ae9aa4174_236x236.png?w=480&h=480',
    rating: 4.7, reviews: 95, badges: ['무료배송'], category: '뷰티' },
  { id: '000280', name: '애터미 선크림 베이지 *1ea (60ml)',
    sub: '60ml · 데일리 선크림', price: 8000, pv: 2500,
    image: 'https://image.atomy.com/KR/goods/000280/550b4ab4-4b94-4dc5-a340-c81578dff149_236x236.png?w=480&h=480',
    rating: 4.6, reviews: 177, category: '뷰티' },
  { id: '000164', name: '애터미 친생유산균 (120포, 4개월분)',
    sub: '120포 · 4개월분', price: 56800, pv: 21500,
    image: 'https://image.atomy.com/KR/goods/000164/62babc72-656f-41a5-8654-2ae0dae2b4dd.jpg?w=480&h=480',
    rating: 4.8, reviews: 386, badges: ['무료배송'], category: '건강식품' },
  { id: '002301', name: '애터미 액상세탁 리필 (2.1kg)',
    sub: '액상세탁 · 2.1kg 리필', price: 8900, pv: 3100,
    image: 'https://image.atomy.com/KR/goods/002301/d25dab45-deab-40a8-bfac-e39c8dc35bf2.jpg?w=480&h=480',
    rating: 4.5, reviews: 111, category: '리빙&홈데코' },
  { id: '000300', name: '애터미 이브닝케어 폼클렌저 *1ea(150ml)',
    sub: '150ml · 폼클렌저', price: 8800, pv: 3000,
    image: 'https://image.atomy.com/KR/goods/000300/6cf76d2d-ebb4-4d67-b56a-9e0eb0b34cd0.jpg?w=480&h=480',
    rating: 4.6, reviews: 177, category: '뷰티' },
  { id: '000129', name: '애터미 파인자임 (30포, 1개월분)',
    sub: '30포 · 1개월분', price: 17800, pv: 7500,
    image: 'https://image.atomy.com/KR/goods/000129/773f540b-50a9-4bc6-a670-73b1d963522b.jpg?w=480&h=480',
    rating: 4.6, reviews: 156, category: '건강식품' },
  { id: '000645', name: '애터미 바디로션 *1ea (300ml)',
    sub: '300ml · 데일리 바디', price: 8500, pv: 2500,
    image: 'https://image.atomy.com/KR/goods/000645/b0045bbb-9a64-482b-b754-26e2bdd6a061.jpg?w=480&h=480',
    rating: 4.7, reviews: 230, category: '헤어&바디' },
  { id: '000111', name: '애터미 알래스카 이-오메가3 (180캡슐)',
    sub: '180캡슐 · 3개월분', price: 21200, pv: 7000,
    image: 'https://image.atomy.com/KR/goods/000111/7652b4a8-35b5-4a89-b091-4f3a41bc98f0.jpg?w=480&h=480',
    rating: 4.6, reviews: 101, category: '건강식품' },
  { id: '002302', name: '애터미 섬유린스 리필 (2.1kg)',
    sub: '섬유린스 · 2.1kg 리필', price: 7900, pv: 2400,
    image: 'https://image.atomy.com/KR/goods/002302/3b17c0cc-f365-4bd6-b131-6c8b654ffba9.jpg?w=480&h=480',
    rating: 4.5, reviews: 102, category: '리빙&홈데코' },
  { id: '000185', name: '애터미 터마신MSM (128정, 32일분)',
    sub: '128정 · 32일분', price: 39800, pv: 16000,
    image: 'https://image.atomy.com/KR/goods/000185/org/210/260624000053210.jpg?w=480&h=480',
    rating: 4.7, reviews: 181, badges: ['무료배송'], category: '건강식품' },
  { id: '000979', name: '애터미 해양심층수 500ml (20ea)',
    sub: '500ml x 20병', price: 12800, pv: 3000,
    image: 'https://image.atomy.com/KR/goods/000979/a4a647b2-f1ef-4876-bb2d-19e24b764eec.jpg?w=480&h=480',
    rating: 4.7, reviews: 199, badges: ['무료배송'], category: '식품' },
  { id: '001959', name: '애터미 간 고등어 (1kg)',
    sub: '1kg · 간편 조리', price: 34800, pv: 1600,
    image: 'https://image.atomy.com/KR/goods/001959/org/957/251219000048957.jpg?w=480&h=480',
    rating: 4.6, reviews: 242, badges: ['무료배송'], category: '식품' },
  { id: '000565', name: '애터미 더페임 트리트먼트 토너 (180ml)',
    sub: '180ml · 부드러운 결', price: 25800, pv: 13000,
    image: 'https://image.atomy.com/KR/goods/000565/org/753/260315000050753.png?w=480&h=480',
    rating: 4.6, reviews: 49, badges: ['신제품'], category: '뷰티' },
  { id: '004041', name: '애터미 알티지 오메가3 (180캡슐)',
    sub: '180캡슐 · 3개월분', price: 34800, pv: 14000,
    image: 'https://image.atomy.com/KR/goods/004041/a0c152bd-0da4-4701-b41b-be57be3048c9.jpg?w=480&h=480',
    rating: 4.7, reviews: 199, badges: ['무료배송'], category: '건강식품' },
  { id: '000991', name: '애터미 다시마간장 (1,000ml)',
    sub: '1L · 다시마 간장', price: 9500, pv: 1500,
    image: 'https://image.atomy.com/KR/goods/000991/ba8ea94f-171f-40db-81dc-9b29e7f051d8.jpg?w=480&h=480',
    rating: 4.6, reviews: 144, category: '식품' },
  { id: '000182', name: '애터미 징코앤낫토 (60정, 2개월분)',
    sub: '60정 · 2개월분', price: 25800, pv: 9500,
    image: 'https://image.atomy.com/KR/goods/000182/e388c5c2-8b18-4bcf-b30d-8a809408adbf.jpg?w=480&h=480',
    rating: 4.5, reviews: 94, category: '건강식품' },
  { id: '000523', name: '애터미 치약 플러스 50g*1set',
    sub: '50g · 휴대용', price: 4600, pv: 1000,
    image: 'https://image.atomy.com/KR/goods/000523/e872165c-8daf-4cb7-98f7-799ef479f523.jpg?w=480&h=480',
    rating: 4.6, reviews: 90, category: '헤어&바디' },
  { id: '001883', name: '애터미 무흠집 수세미(4개)',
    sub: '4개입 · 무흠집', price: 3800, pv: 900,
    image: 'https://image.atomy.com/KR/goods/001883/b26814b9-261b-4b4b-a3a1-a0a1f838200a.jpg?w=480&h=480',
    rating: 4.5, reviews: 56, category: '리빙&홈데코' },
  { id: '000121', name: '애터미 바이탈컬러 비타민C (90포)',
    sub: '90포 · 3개월분', price: 20800, pv: 7500,
    image: 'https://image.atomy.com/KR/goods/000121/3447f772-e540-4618-8706-ea6d454265aa.jpg?w=480&h=480',
    rating: 4.7, reviews: 165, category: '건강식품' },
  { id: '004030', name: '애터미 바이탈 메가비타민C 2000 (90포)',
    sub: '90포 · 3개월분', price: 29000, pv: 13000,
    image: 'https://image.atomy.com/KR/goods/004030/org/264/260105000049264.jpg?w=480&h=480',
    rating: 4.7, reviews: 142, category: '건강식품' },
  { id: '000174', name: '애터미 홍경천 밀크씨슬 (120정)',
    sub: '120정 · 2개월분', price: 31800, pv: 11500,
    image: 'https://image.atomy.com/KR/goods/000174/org/206/260624000053206.jpg?w=480&h=480',
    rating: 4.7, reviews: 126, badges: ['무료배송'], category: '건강식품' },
  { id: '004007', name: '애터미 아이헬스 루아잔틴 (90캡슐)',
    sub: '90캡슐 · 3개월분', price: 38800, pv: 19500,
    image: 'https://image.atomy.com/KR/goods/004007/d1a23fc8-71ba-4691-8623-f4d66c0d4650.jpg?w=480&h=480',
    rating: 4.7, reviews: 159, badges: ['무료배송'], category: '건강식품' },
  { id: '000227', name: '애터미 앱솔루트 셀랙티브 앰플 (40ml)',
    sub: '40ml · 집중 케어', price: 39600, pv: 20000,
    image: 'https://image.atomy.com/KR/goods/000227/df32df5a-f072-4919-baf3-8132e79672ed.jpg?w=480&h=480',
    rating: 4.7, reviews: 152, badges: ['무료배송'], category: '뷰티' },
  { id: '000574', name: '애터미 허브데이 팬티라이너(20개 x 4팩)',
    sub: '20개 x 4팩', price: 12900, pv: 3400,
    image: 'https://image.atomy.com/KR/goods/000554/b69f4c4e-37d5-4ecb-a5d6-611975fe3dbd.jpg?w=480&h=480',
    rating: 4.6, reviews: 131, category: '헤어&바디' },
  { id: '000506', name: '애터미 치약 플러스 200g*4set(20ea)',
    sub: '200g x 20개입', price: 64200, pv: 12000,
    image: 'https://image.atomy.com/KR/goods/000505/ebd42f7f-f930-41f7-967f-a24840e1b837.jpg?w=480&h=480',
    rating: 4.8, reviews: 87, badges: ['무료배송'], category: '헤어&바디' },
  { id: '004008', name: '애터미 이너콜라겐 (14병, 14일분)',
    sub: '14병 · 14일분', price: 34800, pv: 17000,
    image: 'https://image.atomy.com/KR/goods/004008/a4543a06-de1f-4ecd-ad23-eb7aa523024c.jpg?w=480&h=480',
    rating: 4.7, reviews: 116, badges: ['무료배송'], category: '건강식품' },
  { id: '000567', name: '애터미 더페임 밸런싱 로션 (125ml)',
    sub: '125ml · 산뜻한 마무리', price: 24800, pv: 12500,
    image: 'https://image.atomy.com/KR/goods/000567/org/757/260315000050757.png?w=480&h=480',
    rating: 4.6, reviews: 42, badges: ['신제품'], category: '뷰티' },
  { id: '000304', name: '애터미 이브닝케어 폼클렌저 *4ea',
    sub: '150ml x 4개입', price: 33600, pv: 12000,
    image: 'https://image.atomy.com/KR/goods/000300/6cf76d2d-ebb4-4d67-b56a-9e0eb0b34cd0.jpg?w=480&h=480',
    rating: 4.7, reviews: 95, badges: ['무료배송'], category: '뷰티' },
  { id: '004001', name: '애터미 트리액티브 칼마디 (180정)',
    sub: '180정 · 2개월분', price: 22800, pv: 11500,
    image: 'https://image.atomy.com/KR/goods/004001/e04c1980-3a94-421a-9c4a-8d3ae1d6ac94.jpg?w=480&h=480',
    rating: 4.6, reviews: 84, category: '건강식품' },
];

// 카테고리
const SHOP_CATEGORIES = [
  { key: 'all',     label: '전체' },
  { key: 'best',    label: '베스트' },
  { key: 'new',     label: '신제품' },
  { key: 'health',  label: '건강식품',   match: '건강식품' },
  { key: 'beauty',  label: '뷰티',        match: '뷰티' },
  { key: 'body',    label: '헤어&바디',   match: '헤어&바디' },
  { key: 'food',    label: '식품',        match: '식품' },
  { key: 'living',  label: '리빙&홈데코', match: '리빙&홈데코' },
];

// =============================================================
// 가격 포맷
// =============================================================
const fmtKRW = (n) => n.toLocaleString('ko-KR');

// =============================================================
// 제품 카드
// =============================================================
// 아이폰17 변형에서 일부 썸네일을 숏폼 영상으로 대체하기 위한 풀
const _PRODUCT_THUMB_VIDEOS = [
  'https://www.genspark.ai/api/files/s/mb60FN8q',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
];

function ProductCard({ product, isMobile = false, onSelect, large = false }) {
  const p = product;
  const [hover, setHover] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);
  const rootRef = React.useRef(null);
  const [isIphone, setIsIphone] = React.useState(false);
  const [isS26, setIsS26] = React.useState(false);

  React.useEffect(() => {
    if (rootRef.current && rootRef.current.closest('.iphone-noto')) {
      setIsIphone(true);
    } else if (isMobile) {
      setIsS26(true); // 안드로이드 모바일(S26 등) — 켄번즈 모션 적용
    }
  }, [isMobile]);

  // id 해시 기반 — 아이폰17에서만 ~1/3 카드를 숏폼 영상으로
  const _idNum = parseInt(String(p.id).replace(/\D/g, ''), 10) || 0;
  const showVideo = isIphone && (_idNum % 3 === 1);
  const _videoSrc = _PRODUCT_THUMB_VIDEOS[_idNum % _PRODUCT_THUMB_VIDEOS.length];

  return (
    <button
      ref={rootRef}
      onClick={(e) => {
        if (e.currentTarget.dataset.pulling) return;
        e.currentTarget.dataset.pulling = '1';
        window.productPullToScreen(e.currentTarget, () => onSelect && onSelect(p));
      }}
      onMouseEnter={() => setHover(true)}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;   // -0.5 ~ 0.5
        const py = (e.clientY - r.top) / r.height - 0.5;
        const ry = px * 15;   // 좌우 기울기
        const rx = -py * 15;  // 상하 기울기
        el.style.transform = `perspective(620px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-5px)`;
      }}
      onMouseLeave={(e) => {
        setHover(false);
        e.currentTarget.style.transform = '';
      }}
      style={{
        position: 'relative',
        background: '#fff',
        border: '1px solid rgba(11,31,58,0.06)',
        borderRadius: 14,
        padding: 0,
        textAlign: 'left',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 0.12s ease-out, box-shadow 0.2s, border-color 0.2s',
        transformStyle: 'preserve-3d',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hover ? '0 18px 40px rgba(11,31,58,0.18)' : '0 2px 6px rgba(11,31,58,0.04)',
        borderColor: hover ? 'rgba(0,182,240,0.3)' : 'rgba(11,31,58,0.06)',
        fontFamily: 'inherit',
        width: '100%',
      }}
    >
      {/* 이미지 영역 */}
      <div style={{
        position: 'relative', width: '100%',
        aspectRatio: '1/1',
        background: '#F5F7FA',
        overflow: 'hidden',
        transition: 'transform 0.28s cubic-bezier(.2,.7,.3,1)',
        transform: hover ? 'translateZ(18px)' : 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}>
        {showVideo ? (
          <video
            src={_videoSrc}
            poster={p.image}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transform: hover ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
            }}
          />
        ) : (
          <img
            src={p.image}
            alt={p.name}
            onError={(e) => {
              const el = e.currentTarget;
              if (el.dataset.fallback) return;
              el.dataset.fallback = '1';
              // 폴백 — 제품명 첫 글자로 SVG 플레이스홀더 생성
              const initial = (p.name || '').replace(/^애터미\s*/, '').slice(0, 1) || 'A';
              const hue = (parseInt((p.id || '0').replace(/\D/g, '').slice(-3) || '0', 10) * 47) % 360;
              const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${hue},65%,92%)'/><stop offset='1' stop-color='hsl(${hue},55%,82%)'/></linearGradient></defs><rect width='200' height='200' fill='url(%23g)'/><text x='100' y='118' text-anchor='middle' font-family='Pretendard,sans-serif' font-size='80' font-weight='800' fill='hsl(${hue},45%,40%)'>${initial}</text></svg>`;
              el.src = 'data:image/svg+xml;utf8,' + svg.replace(/#/g, '%23');
            }}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transform: (isS26 || hover) ? undefined : 'scale(1)',
              animation: (isS26 && hover)
                ? `${['gsKB_n','gsKB_ne','gsKB_e','gsKB_se','gsKB_s','gsKB_sw','gsKB_w','gsKB_nw'][_idNum % 8]} ${(9 + (_idNum % 5) * 1.7).toFixed(1)}s ease-in-out -${((_idNum % 9) * 2.4).toFixed(1)}s infinite alternate`
                : 'none',
              transition: isS26 ? 'none' : 'transform 0.4s cubic-bezier(.2,.7,.3,1)',
              ...(!isS26 && { transform: hover ? 'scale(1.05)' : 'scale(1)' }),
            }}
          />
        )}

        {/* 숏폼 표시 — 좌하단 */}
        {showVideo && (
          <div style={{
            position: 'absolute', bottom: 10, left: 10,
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '4px 8px 4px 7px', borderRadius: 999,
            background: 'rgba(11,31,58,0.78)', backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '-0.01em',
            boxShadow: '0 2px 8px rgba(11,31,58,0.25)',
          }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
            숏폼
          </div>
        )}

        {/* 좌상단 뱃지들 — 허용 플래그만 노출 (신제품·무료배송·수량한정·개별배송·추가혜택·시즌한정) */}
        {p.badges && p.badges.filter(b => FLAG_COLORS[b]).length > 0 && (
          <div style={{
            position: 'absolute', top: 10, left: 10,
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            {p.badges.filter(b => FLAG_COLORS[b]).map(b => (
              <span key={b} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '3px 8px', borderRadius: 4,
                background: FLAG_COLORS[b],
                color: '#fff', fontSize: 9.5, fontWeight: 800, letterSpacing: '-0.01em',
                width: 'fit-content',
              }}>{b}</span>
            ))}
          </div>
        )}

        {/* 장바구니 담기 — 우상단 (라운드 사각형, 애터미 시안) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const card = e.currentTarget.parentElement && e.currentTarget.parentElement.closest('button');
            const img = card && card.querySelector('img');
            if (img && window.flyToCart) {
              window.flyToCart(img.src, img.getBoundingClientRect());
            }
            setCartCount(c => {
              const next = c + 1;
              if (window.showToast) window.showToast((window.translate ? window.translate('toast.cart_added', { n: next }) : `장바구니에 ${next}개 담았습니다.`));
              if (window.atomyCartBump) window.atomyCartBump();
              return next;
            });
          }}
          aria-label="장바구니 담기"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00B6F0';
            e.currentTarget.style.transform = 'scale(1.12)';
            const svg = e.currentTarget.querySelector('svg'); if (svg) svg.style.stroke = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
            e.currentTarget.style.transform = 'scale(1)';
            const svg = e.currentTarget.querySelector('svg'); if (svg) svg.style.stroke = '#1A1A1A';
          }}
          style={{
            position: 'absolute', bottom: 10, right: 10,
            width: 38, height: 38, borderRadius: 10, border: 'none',
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)',
            cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(11,31,58,0.18)',
            transition: 'background 0.18s, transform 0.18s',
          }}
        >
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
               stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
               style={{ transition: 'stroke 0.18s' }}>
            <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
            <path d="M9 11V7a3 3 0 016 0v4" />
          </svg>
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -6,
              minWidth: 18, height: 18, padding: '0 5px',
              borderRadius: 999, border: '1.5px solid #fff',
              background: '#00B6F0', color: '#fff',
              fontSize: 10, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
              boxShadow: '0 2px 6px rgba(0,182,240,0.4)',
            }}>{cartCount}</span>
          )}
        </button>

        {/* 상세보기 가능 표시 — 헤모힘 샷처럼 detail이 있는 제품 */}
        {p.detail && (
          <div style={{
            position: 'absolute', bottom: 10, right: 10,
            display: 'inline-flex', alignItems: 'center', gap: 4,
            padding: '4px 9px', borderRadius: 999,
            background: 'rgba(0,182,240,0.95)',
            color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '-0.01em',
            boxShadow: '0 4px 10px rgba(0,182,240,0.35)',
          }}>
            상세보기 ›
          </div>
        )}
      </div>

      {/* 텍스트 영역 */}
      <div style={{ padding: isMobile ? '12px 12px 14px' : '14px 16px 16px' }}>
        {/* 카테고리 */}
        <div style={{
          fontSize: 10, fontWeight: 700, color: '#8A97AD',
          letterSpacing: '0.04em', marginBottom: 4,
        }}>{p.category}</div>

        {/* 이름 */}
        <div style={{
          fontSize: isMobile ? 13 : 14, fontWeight: 800,
          color: '#0B1F3A', letterSpacing: '-0.01em', lineHeight: 1.35,
          marginBottom: 4,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{p.name}</div>

        {/* 서브 카피 */}
        {p.sub && (
          <div style={{
            fontSize: 11, color: '#6B7A90', fontWeight: 500,
            marginBottom: 8, lineHeight: 1.4,
            display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>{p.sub}</div>
        )}

        {/* 가격 */}
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 4,
          marginBottom: 6,
        }}>
          <span style={{
            fontSize: isMobile ? 16 : 18, fontWeight: 900,
            color: '#0B1F3A', letterSpacing: '-0.02em',
            fontVariantNumeric: 'tabular-nums',
          }}>{fmtKRW(p.price)}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#0B1F3A' }}>원</span>
        </div>

        {/* PV */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 4,
          padding: '2px 7px', borderRadius: 4,
          background: 'rgba(0,182,240,0.08)',
          color: '#0088B8', fontSize: 10.5, fontWeight: 800,
          fontVariantNumeric: 'tabular-nums',
          marginBottom: 8,
        }}>
          PV {fmtKRW(p.pv)}
          {p.originPv && p.originPv !== p.pv && (
            <span style={{
              marginLeft: 3, color: '#FF3B6A', fontSize: 10, fontWeight: 800,
            }}>→ {fmtKRW(p.originPv)}</span>
          )}
        </div>

        {/* 별점 + 리뷰 */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          fontSize: 11, fontWeight: 700, color: '#4A5568',
          fontVariantNumeric: 'tabular-nums',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#FFB800">
            <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
          </svg>
          <span>{p.rating}</span>
          <span style={{ color: '#8A97AD', fontWeight: 500 }}>({p.reviews.toLocaleString()})</span>
        </div>
      </div>
    </button>
  );
}

// =============================================================
// 메인 페이지
// =============================================================

function AtomyShop({ isMobile = false, shopVariant = 'default', searchQuery = '', onClearSearch = () => {}, onClips = () => {}, onSelectProduct = () => {} }) {
  // 변형 라우팅 — TikTok / Magazine / AI 큐레이션
  if (shopVariant === 'tiktok' && typeof window.AtomyShopTikTok === 'function') {
    return <window.AtomyShopTikTok isMobile={isMobile} onSelectProduct={onSelectProduct} />;
  }
  if (shopVariant === 'magazine' && typeof window.AtomyShopMagazine === 'function') {
    return <window.AtomyShopMagazine isMobile={isMobile} onSelectProduct={onSelectProduct} />;
  }
  if (shopVariant === 'ai' && typeof window.AtomyShopAI === 'function') {
    return <window.AtomyShopAI isMobile={isMobile} onSelectProduct={onSelectProduct} />;
  }
  return <AtomyShopDefault isMobile={isMobile} searchQuery={searchQuery} onClearSearch={onClearSearch} onClips={onClips} onSelectProduct={onSelectProduct} />;
}

// 필터 드로어 — 우→좌 슬라이드 (kr.atomy.com 스타일)
const FILTER_FUNCTIONS = ['안티에이징','수분보습','브라이트닝','각질/모공/세정','진정','자외선 차단','클렌징','면역','종합건강','여드름','뼈/관절 건강','피부건강','혈관 건강/혈당/항산화','눈 건강','전립선/갱년기 건강','간/위 건강','다이어트','여성 이너케어','건강','보습','세정','수면/두뇌 건강','근육 건강','장 건강'];
const FILTER_PLACES = ['주방','세탁기/다용도실','선물추천','거실','야외/반려 동물','욕실','침실'];
const FILTER_TARGETS = ['여성','남성','온가족','임산부/영유아'];

function FilterChip({ label }) {
  const [on, setOn] = React.useState(false);
  return (
    <button onClick={() => setOn(v => !v)} style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '7px 12px', borderRadius: 999,
      border: on ? '1px solid #00B6F0' : '1px solid rgba(11,31,58,0.18)',
      background: on ? 'rgba(0,182,240,0.08)' : '#fff',
      color: on ? '#0088B8' : '#4A5568',
      fontSize: 12, fontWeight: on ? 800 : 600, cursor: 'pointer',
      fontFamily: 'inherit', letterSpacing: '-0.01em',
    }}>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      {label}
    </button>
  );
}

function FilterSection({ title, children }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={{ borderTop: '1px solid rgba(11,31,58,0.08)', padding: '18px 0' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        fontSize: 15, fontWeight: 800, color: '#0B1F3A', fontFamily: 'inherit', marginBottom: open ? 14 : 0,
      }}>
        {title}
        <span style={{ fontSize: 18, color: '#8A97AD' }}>{open ? '—' : '+'}</span>
      </button>
      {open && <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{children}</div>}
    </div>
  );
}

function ShopFilterDrawer({ onClose, maxPv = 700000, maxPrice = 1480000 }) {
  const [price, setPrice] = React.useState([0, maxPrice]);
  const [pv, setPv] = React.useState([0, maxPv]);
  const fmt = (n) => (n || 0).toLocaleString('ko-KR');
  const parseNum = (s) => Math.max(0, parseInt(String(s).replace(/[^\d]/g, ''), 10) || 0);
  const numInput = (val, onCommit) => ({
    value: fmt(val),
    inputMode: 'numeric',
    onChange: (e) => onCommit(parseNum(e.target.value)),
    style: {
      flex: 1, minWidth: 0, textAlign: 'right', border: 'none', outline: 'none',
      background: 'transparent', fontSize: 13, fontWeight: 700, color: '#0B1F3A',
      fontFamily: 'inherit',
    },
  });
  const rangeWrap = { position: 'relative', height: 22, marginTop: 8 };
  const rangeInput = (z) => ({
    position: 'absolute', left: 0, top: 0, width: '100%', height: 22, margin: 0,
    background: 'transparent', accentColor: '#00B6F0', zIndex: z,
    pointerEvents: 'none',
  });
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 50,
      background: 'rgba(11,31,58,0.4)', animation: 'shortsFadeIn 0.2s ease both',
      display: 'flex', justifyContent: 'flex-end',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: '92%', maxWidth: 380, height: '100%', background: '#fff',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-12px 0 40px rgba(11,31,58,0.25)',
        animation: 'filterSlideIn 0.3s cubic-bezier(.2,.7,.3,1) both',
        fontFamily: '"Pretendard","Noto Sans KR",system-ui,sans-serif',
      }}>
        {/* 헤더 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 18px', borderBottom: '1px solid rgba(11,31,58,0.08)', flexShrink: 0,
        }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 20, fontWeight: 900, color: '#0B1F3A' }}>필터</span>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '5px 10px', borderRadius: 999, border: '1px solid rgba(11,31,58,0.15)',
              background: '#fff', color: '#4A5568', fontSize: 11.5, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 7" /><polyline points="21 3 21 7 17 7" /></svg>
              모두 지우기
            </button>
          </div>
          <button onClick={onClose} aria-label="닫기" style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#0B1F3A',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>

        {/* 본문 스크롤 */}
        <div className="filter-scroll" style={{ flex: 1, overflowY: 'auto', padding: '4px 18px 16px' }}>
          {/* 빠른 토글 */}
          <div style={{ display: 'flex', gap: 16, padding: '16px 0', flexWrap: 'wrap' }}>
            {['신제품','품절제외','추가혜택'].map(l => <FilterCheck key={l} label={l} />)}
          </div>

          {/* 가격 */}
          <div style={{ borderTop: '1px solid rgba(11,31,58,0.08)', padding: '18px 0' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0B1F3A', marginBottom: 14 }}>가격</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, border: '1px solid rgba(11,31,58,0.15)', borderRadius: 8, padding: '10px 10px' }}>
                <input {...numInput(price[0], (v) => setPrice([Math.min(v, price[1]), price[1]]))} />
                <span style={{ fontSize: 12, color: '#8A97AD' }}>원</span>
              </div>
              <span style={{ color: '#8A97AD' }}>~</span>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, border: '1px solid rgba(11,31,58,0.15)', borderRadius: 8, padding: '10px 10px' }}>
                <input {...numInput(price[1], (v) => setPrice([price[0], Math.min(Math.max(v, price[0]), maxPrice)]))} />
                <span style={{ fontSize: 12, color: '#8A97AD' }}>원</span>
              </div>
            </div>
            <div style={rangeWrap}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 9, height: 4, borderRadius: 4, background: 'rgba(11,31,58,0.12)' }} />
              <div style={{ position: 'absolute', top: 9, height: 4, borderRadius: 4, background: '#00B6F0',
                left: (price[0] / maxPrice * 100) + '%', right: (100 - price[1] / maxPrice * 100) + '%' }} />
              <input className="dual-range" type="range" min="0" max={maxPrice} step="10000" value={price[0]}
                onChange={(e) => setPrice([Math.min(+e.target.value, price[1]), price[1]])} style={rangeInput(3)} />
              <input className="dual-range" type="range" min="0" max={maxPrice} step="10000" value={price[1]}
                onChange={(e) => setPrice([price[0], Math.max(+e.target.value, price[0])])} style={rangeInput(4)} />
            </div>
          </div>

          {/* PV */}
          <div style={{ borderTop: '1px solid rgba(11,31,58,0.08)', padding: '18px 0' }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#0B1F3A', marginBottom: 14 }}>PV</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, border: '1px solid rgba(11,31,58,0.15)', borderRadius: 8, padding: '10px 10px' }}>
                <input {...numInput(pv[0], (v) => setPv([Math.min(v, pv[1]), pv[1]]))} />
                <span style={{ fontSize: 12, color: '#8A97AD' }}>PV</span>
              </div>
              <span style={{ color: '#8A97AD' }}>~</span>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, border: '1px solid rgba(11,31,58,0.15)', borderRadius: 8, padding: '10px 10px' }}>
                <input {...numInput(pv[1], (v) => setPv([pv[0], Math.min(Math.max(v, pv[0]), maxPv)]))} />
                <span style={{ fontSize: 12, color: '#8A97AD' }}>PV</span>
              </div>
            </div>
            <div style={rangeWrap}>
              <div style={{ position: 'absolute', left: 0, right: 0, top: 9, height: 4, borderRadius: 4, background: 'rgba(11,31,58,0.12)' }} />
              <div style={{ position: 'absolute', top: 9, height: 4, borderRadius: 4, background: '#00B6F0',
                left: (pv[0] / maxPv * 100) + '%', right: (100 - pv[1] / maxPv * 100) + '%' }} />
              <input className="dual-range" type="range" min="0" max={maxPv} step="5000" value={pv[0]}
                onChange={(e) => setPv([Math.min(+e.target.value, pv[1]), pv[1]])} style={rangeInput(3)} />
              <input className="dual-range" type="range" min="0" max={maxPv} step="5000" value={pv[1]}
                onChange={(e) => setPv([pv[0], Math.max(+e.target.value, pv[0])])} style={rangeInput(4)} />
            </div>
          </div>

          <FilterSection title="기능별">
            {FILTER_FUNCTIONS.map(l => <FilterChip key={l} label={l} />)}
          </FilterSection>
          <FilterSection title="용도/장소">
            {FILTER_PLACES.map(l => <FilterChip key={l} label={l} />)}
          </FilterSection>
          <FilterSection title="대상별">
            {FILTER_TARGETS.map(l => <FilterChip key={l} label={l} />)}
          </FilterSection>
        </div>

        {/* 적용 버튼 */}
        <button onClick={onClose} style={{
          flexShrink: 0, padding: '16px', border: 'none',
          background: '#00B6F0', color: '#fff', fontSize: 15, fontWeight: 800,
          cursor: 'pointer', fontFamily: 'inherit',
        }}>적용</button>
      </div>
    </div>
  );
}

function FilterCheck({ label }) {
  const [on, setOn] = React.useState(false);
  return (
    <button onClick={() => setOn(v => !v)} style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      background: 'none', border: 'none', cursor: 'pointer', padding: 0,
      fontFamily: 'inherit', fontSize: 13, fontWeight: 600, color: '#0B1F3A',
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: 5,
        border: on ? 'none' : '1.5px solid rgba(11,31,58,0.25)',
        background: on ? '#00B6F0' : '#fff',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {on && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
      </span>
      {label}
    </button>
  );
}

// 그리드 페이징 — 무한 스크롤 센티넬 + 더보기 버튼
function GridLoadMore({ total, shown, onMore, isMobile }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const scroller = el.closest('.phone-scroll') || null;
    const io = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting) onMore();
    }, { root: scroller, rootMargin: '240px' });
    io.observe(el);
    return () => io.disconnect();
  }, [onMore, shown]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: isMobile ? 24 : 32 }}>
      <button onClick={onMore} style={{ padding: '12px 28px', borderRadius: 999, background: '#fff', border: '1px solid rgba(11,31,58,0.15)', color: '#0B1F3A', fontSize: 13, fontWeight: 800, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '-0.01em' }}>
        더보기 ({(total - shown).toLocaleString()})
      </button>
      <div ref={ref} aria-hidden="true" style={{ height: 1, width: '100%' }} />
    </div>
  );
}

function AtomyShopDefault({ isMobile = false, searchQuery = '', onClearSearch = () => {}, onClips = () => {}, onSelectProduct = () => {} }) {
  const { t } = (typeof useTranslation === 'function') ? useTranslation() : { t: (k) => k };
  React.useEffect(() => { window.__atomyOpenProduct = onSelectProduct; }, [onSelectProduct]);
  const [category, setCategory] = React.useState(() => {
    // 브레드크럼 네비게이션 — 상세에서 카테고리 클릭 시 진입
    const nav = window.__shopNavCategory;
    if (nav) {
      window.__shopNavCategory = null;
      const hit = (typeof CATEGORY_ICONS !== 'undefined' ? CATEGORY_ICONS : []).find(c => c.label === nav);
      return hit ? hit.key : 'all';
    }
    return null;
  }); // null = 메인 / 'all' | 'health' | ... = 카테고리 화면
  const [sortKey, setSortKey] = React.useState('popular');
  const [gridLimit, setGridLimit] = React.useState(12);
  React.useEffect(() => { setGridLimit(12); }, [category, subCat, sortKey]);
  const [viewMode, setViewMode] = React.useState('grid'); // grid | list
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [subCat, setSubCat] = React.useState(0); // 서브카테고리 탭 인덱스 (0 = 전체)
  React.useEffect(() => {
    const s = window.__shopNavSub;
    if (s != null) { setSubCat(s); window.__shopNavSub = null; }
    else setSubCat(0);
  }, [category]);

  // 카테고리 화면용 필터링 + 정렬
  const categoryProducts = React.useMemo(() => {
    if (!category) return [];
    let list = category === 'all'
      ? SHOP_PRODUCTS
      : SHOP_PRODUCTS.filter(p => {
          const c = CATEGORY_ICONS.find(c => c.key === category);
          return c && p.category === (c.match || c.label);
        });
    // 서브카테고리 필터 (0 = 전체)
    const subs = (typeof SUB_CATEGORIES !== 'undefined') ? SUB_CATEGORIES[category] : null;
    if (subs && subCat > 0 && subs[subCat] && subs[subCat].rx) {
      const rx = subs[subCat].rx;
      list = list.filter(p => rx.test(p.name || ''));
    }
    list = [...list];
    if (sortKey === 'popular') list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    else if (sortKey === 'eval') list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    else if (sortKey === 'new')  list.sort((a, b) => (b.badges?.includes('신제품') ? 1 : 0) - (a.badges?.includes('신제품') ? 1 : 0));
    else if (sortKey === 'high_pv') list.sort((a, b) => (b.pv || 0) - (a.pv || 0));
    else if (sortKey === 'low_pv')  list.sort((a, b) => (a.pv || 0) - (b.pv || 0));
    else if (sortKey === 'high') list.sort((a, b) => b.price - a.price);
    else if (sortKey === 'low')  list.sort((a, b) => a.price - b.price);
    else if (sortKey === 'pv_by_price') list.sort((a, b) => ((b.pv || 0) / b.price) - ((a.pv || 0) / a.price));
    else if (sortKey === 'atomy') list.sort((a, b) => ((b.badges?.includes('BEST') ? 2 : 0) + (b.badges?.includes('신제품') ? 1 : 0) + (b.reviews || 0) / 10000) - ((a.badges?.includes('BEST') ? 2 : 0) + (a.badges?.includes('신제품') ? 1 : 0) + (a.reviews || 0) / 10000));
    return list;
  }, [category, sortKey, subCat]);

  const promoProducts = SHOP_PRODUCTS.filter(p => (p.badges || []).includes('프로모션'));
  const bestProducts = SHOP_PRODUCTS.filter(p => (p.badges || []).includes('BEST')).slice(0, 4);

  // ====== 검색 결과 화면 ======
  const searchResults = React.useMemo(() => {
    const kw = (searchQuery || '').trim().toLowerCase();
    if (!kw) return [];
    return SHOP_PRODUCTS.filter(p => {
      const hay = ((p.name || '') + ' ' + (p.category || '') + ' ' + (p.tagline || '') + ' ' + (p.badges || []).join(' ')).toLowerCase();
      return kw.split(/\s+/).every(tok => hay.includes(tok));
    });
  }, [searchQuery]);

  const clipResults = React.useMemo(() => {
    const kw = (searchQuery || '').trim().toLowerCase();
    if (!kw) return [];
    return (window.SHORTS || []).filter(s => {
      const hay = ((s.title || '') + ' ' + (s.product || '')).toLowerCase();
      return kw.split(/\s+/).some(tok => hay.includes(tok));
    }).slice(0, 8);
  }, [searchQuery]);

  if ((searchQuery || '').trim()) {
    return (
      <div style={{
        fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
        background: '#fff', color: '#0B1F3A', minHeight: '100%',
      }}>
        <header style={{
          display: 'flex', alignItems: 'center', gap: 4,
          padding: isMobile ? '14px 16px' : '20px 36px',
          borderBottom: '1px solid rgba(11,31,58,0.06)',
          background: '#fff', position: 'sticky', top: 0, zIndex: 5,
        }}>
          <button onClick={onClearSearch} aria-label="뒤로" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 6, display: 'flex', alignItems: 'center', color: '#1A1A1A' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#8A97AD', letterSpacing: '0.04em' }}>검색 결과</div>
            <div style={{ fontSize: isMobile ? 16 : 19, fontWeight: 900, color: '#0B1F3A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              “{searchQuery.trim()}”
            </div>
          </div>
        </header>

        <div style={{
          padding: isMobile ? '12px 16px 10px' : '18px 36px 14px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
          fontSize: isMobile ? 12.5 : 13.5, fontWeight: 700, color: '#0B1F3A', fontVariantNumeric: 'tabular-nums',
        }}>
          상품 <span style={{ color: '#00A3D9' }}>{searchResults.length}</span>건
          {clipResults.length > 0 && <span style={{ color: '#8A97AD', fontWeight: 600 }}>  ·  석세스클립 <span style={{ color: '#00A3D9', fontWeight: 700 }}>{clipResults.length}</span></span>}
        </div>

        <section style={{ padding: isMobile ? '6px 16px 40px' : '8px 36px 60px', maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          {searchResults.length === 0 && clipResults.length === 0 ? (
            <div style={{ padding: '54px 24px', textAlign: 'center', background: '#F5F7FA', borderRadius: 14 }}>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: '#0B1F3A', marginBottom: 6 }}>“{searchQuery.trim()}” 검색 결과가 없어요</div>
              <div style={{ fontSize: 12, color: '#8A97AD', lineHeight: 1.6 }}>철자를 확인하거나 다른 검색어로 찾아보세요.<br />예: 헤모힘, 유산균, 칫솔</div>
            </div>
          ) : (<>
            {searchResults.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)', gap: isMobile ? 10 : 14 }}>
                {searchResults.map(p => (
                  <ProductCard key={p.id} product={p} isMobile={isMobile} onSelect={onSelectProduct} />
                ))}
              </div>
            )}
            {clipResults.length > 0 && (
              <div style={{ marginTop: searchResults.length ? 30 : 4 }}>
                <div style={{ fontSize: isMobile ? 14 : 16, fontWeight: 900, color: '#0B1F3A', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 7 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00A3D9"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                  관련 석세스클립
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? 10 : 14 }}>
                  {clipResults.map(s => (
                    <button key={s.id} onClick={() => onClips(searchQuery.trim())} style={{
                      display: 'block', padding: 0, border: 'none', background: 'none', cursor: 'pointer',
                      textAlign: 'left', fontFamily: 'inherit',
                    }}>
                      <div style={{ position: 'relative', aspectRatio: '9 / 14', borderRadius: 12, overflow: 'hidden', background: '#E9EDF3' }}>
                        {s.image && <img src={s.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)' }} />
                        <div style={{ position: 'absolute', left: 8, right: 8, bottom: 7, color: '#fff', fontSize: 11.5, fontWeight: 700, lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{s.title}</div>
                        <div style={{ position: 'absolute', top: 7, right: 7, background: 'rgba(11,31,58,0.7)', color: '#fff', fontSize: 9.5, fontWeight: 700, padding: '2px 6px', borderRadius: 4 }}>{s.duration}</div>
                      </div>
                      <div style={{ marginTop: 5, fontSize: 10.5, color: '#8A97AD', fontWeight: 600 }}>조회 {s.views} · ♥ {s.likes}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>)}
        </section>

        <ShopFooter isMobile={isMobile} />
      </div>
    );
  }

  // ====== 카테고리 화면 ======
  if (category) {
    const catLabel = category === 'all' ? '전체상품' : (CATEGORY_ICONS.find(c => c.key === category)?.label || '카테고리');
    return (
      <div style={{
        fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
        background: '#fff', color: '#0B1F3A', minHeight: '100%',
      }}>
        {/* 헤더 — 카테고리명 + 뒤로가기 */}
        <header style={{
          display: 'flex', alignItems: 'center',
          padding: isMobile ? '14px 16px' : '20px 36px',
          borderBottom: '1px solid rgba(11,31,58,0.06)',
          background: '#fff', position: 'sticky', top: 0, zIndex: 5,
        }}>
          <button
            onClick={() => setCategory(null)}
            aria-label="뒤로"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 6, display: 'flex', alignItems: 'center',
              color: '#1A1A1A',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <CategorySwitcher
            currentKey={category}
            currentLabel={catLabel}
            isMobile={isMobile}
            onSelect={(key) => setCategory(key)}
          />
          <div style={{ width: 34 }} />
        </header>

        {/* 서브카테고리 탭 — kr.atomy.com 카테고리 진입 시 하위 분류 */}
        {category !== 'all' && typeof SUB_CATEGORIES !== 'undefined' && SUB_CATEGORIES[category] && (
          <div
            className="subcat-scroll"
            style={{
              display: 'flex', gap: isMobile ? 4 : 6, alignItems: 'stretch',
              padding: isMobile ? '2px 12px 0' : '4px 30px 0',
              maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
              overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
              borderBottom: '1px solid rgba(11,31,58,0.08)', background: '#fff',
            }}
          >
            <style>{'.subcat-scroll::-webkit-scrollbar{display:none}'}</style>
            {SUB_CATEGORIES[category].map((s, i) => {
              const active = subCat === i;
              return (
                <button
                  key={s.label}
                  onClick={() => setSubCat(i)}
                  style={{
                    flex: '0 0 auto', border: 'none', background: 'none', cursor: 'pointer',
                    fontFamily: 'inherit', padding: isMobile ? '10px 9px 11px' : '12px 12px 13px',
                    fontSize: isMobile ? 13 : 14, fontWeight: active ? 800 : 600,
                    color: active ? '#00A3D9' : '#5A6577', whiteSpace: 'nowrap',
                    borderBottom: active ? '2.5px solid #00A3D9' : '2.5px solid transparent',
                    marginBottom: -1, letterSpacing: '-0.01em', transition: 'color 0.15s',
                  }}
                >{s.label}</button>
              );
            })}
          </div>
        )}

        {/* 정렬/뷰/필터 바 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '12px 16px 10px' : '18px 36px 14px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          <div style={{
            fontSize: isMobile ? 12.5 : 13.5, fontWeight: 700, color: '#0B1F3A',
            fontVariantNumeric: 'tabular-nums',
          }}>
            전체 <span style={{ color: '#0B1F3A' }}>{categoryProducts.length}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 6 : 8 }}>
            {/* 정렬 */}
            <div style={{ position: 'relative' }}>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                style={{
                  appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                  padding: isMobile ? '7px 26px 7px 11px' : '8px 30px 8px 14px',
                  border: '1px solid rgba(11,31,58,0.15)', borderRadius: 6,
                  background: '#fff', color: '#0B1F3A',
                  fontSize: isMobile ? 11.5 : 12.5, fontWeight: 600,
                  fontFamily: 'inherit', cursor: 'pointer', letterSpacing: '-0.01em',
                }}
              >
                <option value="popular">판매 인기순</option>
                <option value="eval">리뷰 많은순</option>
                <option value="new">최신 상품순</option>
                <option value="high_pv">PV 높은순</option>
                <option value="low_pv">PV 낮은순</option>
                <option value="high">가격 높은순</option>
                <option value="low">가격 낮은순</option>
                <option value="pv_by_price">가격 대비 PV 높은순</option>
                <option value="atomy">애터미 추천순</option>
              </select>
              <svg
                width="11" height="11" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                style={{ position: 'absolute', right: isMobile ? 9 : 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#4A5568' }}
              ><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            {/* 보기 형식 토글 */}
            <button
              onClick={() => setViewMode(m => m === 'grid' ? 'list' : 'grid')}
              aria-label="보기 형식"
              style={{
                width: isMobile ? 32 : 36, height: isMobile ? 32 : 36,
                border: '1px solid rgba(11,31,58,0.15)', borderRadius: 6,
                background: '#fff', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                color: '#0B1F3A',
              }}
            >
              {viewMode === 'grid' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="3" rx="1" /><rect x="3" y="10.5" width="18" height="3" rx="1" /><rect x="3" y="17" width="18" height="3" rx="1" /></svg>
              )}
            </button>
            {/* 필터 */}
            <button
              aria-label="필터"
              onClick={() => setFilterOpen(true)}
              style={{
                padding: isMobile ? '7px 11px' : '8px 14px',
                border: '1px solid rgba(11,31,58,0.15)', borderRadius: 6,
                background: '#fff', cursor: 'pointer',
                fontSize: isMobile ? 11.5 : 12.5, fontWeight: 600,
                color: '#0B1F3A',
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontFamily: 'inherit',
              }}
            >
              필터
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="3 4 21 4 14 13 14 20 10 20 10 13" /></svg>
            </button>
          </div>
        </div>

        {filterOpen && <ShopFilterDrawer onClose={() => setFilterOpen(false)} maxPv={700000} maxPrice={1480000} />}

        {/* 제품 리스트 */}
        <section style={{
          padding: isMobile ? '6px 16px 40px' : '8px 36px 60px',
          maxWidth: 1280, margin: '0 auto', width: '100%', boxSizing: 'border-box',
        }}>
          {categoryProducts.length === 0 ? (
            <div style={{
              padding: '60px 24px', textAlign: 'center',
              background: '#F5F7FA', borderRadius: 14,
              color: '#8A97AD', fontSize: 13, fontWeight: 600,
            }}>{subCat > 0 ? '이 분류의 제품을 준비 중이에요' : '이 카테고리의 제품이 아직 없어요'}</div>
          ) : (
            <React.Fragment>
            <div style={{
              display: 'grid',
              gridTemplateColumns: viewMode === 'list'
                ? '1fr'
                : (isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)'),
              gap: isMobile ? 10 : 14,
            }}>
              {categoryProducts.slice(0, gridLimit).map(p => (
                <ProductCard key={p.id} product={p} isMobile={isMobile} onSelect={onSelectProduct} />
              ))}
            </div>
            {categoryProducts.length > gridLimit && (
              <GridLoadMore total={categoryProducts.length} shown={gridLimit} onMore={() => setGridLimit(n => n + 12)} isMobile={isMobile} />
            )}
            </React.Fragment>
          )}
        </section>

        <ShopFooter isMobile={isMobile} />
      </div>
    );
  }

  // ====== 메인 화면 ======
  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#F5F7FA',
      color: '#0B1F3A',
    }}>
      {/* 1. 히어로 — 헤모힘 샷 강조 */}
      <ShopHero isMobile={isMobile} onSelectProduct={onSelectProduct} />

      {/* 1.5 카테고리 아이콘 — kr.atomy.com 메인 스타일 */}
      <ShopCategoryIcons isMobile={isMobile} onSelectCategory={(key) => setCategory(key)} />

      {/* AI 맞춤 진열 CTA — 첫 화면 노출 */}
      <AIShelfCta isMobile={isMobile} />

      {/* AI 큐레이션 — 데스크탑/모바일 동일 구성, 사이즈에 맞춰 그리드 자동 적응 */}
      <ShopAICurationDesktop
        isMobile={isMobile}
        allProducts={SHOP_PRODUCTS}
        bestProducts={bestProducts}
        promoProducts={promoProducts}
        onSelectProduct={onSelectProduct}
        onSeeAll={() => setCategory('all')}
      />
    </div>
  );
}

// =============================================================
// 카테고리 스위처 — 헤더 카테고리명을 클릭해서 다른 카테고리로 이동
// =============================================================
function CategorySwitcher({ currentKey, currentLabel, isMobile, onSelect }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  return (
    <div ref={ref} style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: isMobile ? 16 : 19, fontWeight: 800, letterSpacing: '-0.02em',
          color: '#0B1F3A', fontFamily: 'inherit', padding: '4px 8px',
        }}
        aria-expanded={open}
      >
        {currentLabel}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          minWidth: 200, background: '#fff', borderRadius: 12,
          boxShadow: '0 12px 32px rgba(11,31,58,0.18), 0 0 0 1px rgba(11,31,58,0.08)',
          padding: 6, zIndex: 20,
          maxHeight: '60vh', overflowY: 'auto',
        }}>
          {CATEGORY_ICONS.map(cat => {
            const active = cat.key === currentKey;
            return (
              <button
                key={cat.key}
                onClick={() => { onSelect(cat.key); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', padding: '10px 12px', borderRadius: 8,
                  background: active ? '#F0F4FA' : 'transparent',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                  fontSize: 13.5, fontWeight: active ? 800 : 600,
                  color: '#0B1F3A', fontFamily: 'inherit',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#F5F7FA'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
              >
                <img src={cat.img} alt="" style={{ width: 24, height: 24, objectFit: 'contain', flexShrink: 0 }} />
                {cat.label}
                {active && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00B6F0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// =============================================================
// S26 전용 — AI 쇼핑 브리핑 + AI 맞춤 진열 (퀴즈 → 재배열)
// =============================================================
const AI_QUIZ_CATEGORY = [
  { key: 'health', emoji: '💊', label: { ko: '건강 고민이 있어요', en: 'Health concern', ja: '健康の悩み', zh: '健康困扰' }, short: { ko: '건강', en: 'Health', ja: '健康', zh: '健康' } },
  { key: 'beauty', emoji: '✨', label: { ko: '피부 · 뷰티가 고민이에요', en: 'Skin · Beauty', ja: '肌・ビューティーの悩み', zh: '皮肤 · 美容困扰' }, short: { ko: '피부·뷰티', en: 'Beauty', ja: '美容', zh: '美容' } },
  { key: 'living', emoji: '🧺', label: { ko: '생활용품을 찾고 있어요', en: 'Household goods', ja: '生活用品を探している', zh: '寻找生活用品' }, short: { ko: '생활용품', en: 'Living', ja: '生活用品', zh: '生活用品' } },
  { key: 'food', emoji: '🍲', label: { ko: '식품 · 먹거리를 찾고 있어요', en: 'Food · Groceries', ja: '食品・食べ物を探している', zh: '寻找食品' }, short: { ko: '식품', en: 'Food', ja: '食品', zh: '食品' } },
];
// 건강 — 고민 부위/증상 (12종)
const AI_QUIZ_HEALTH = [
  { key: 'energy',      emoji: '⚡', label: { ko: '피로 · 활력', en: 'Fatigue · Energy', ja: '疲労・活力', zh: '疲劳 · 活力' }, short: { ko: '피로·활력', en: 'Energy', ja: '活力', zh: '活力' }, rx: /헤모힘|홍삼|비타민B|아르기닌|활력/ },
  { key: 'immune',      emoji: '🛡️', label: { ko: '면역력', en: 'Immunity', ja: '免疫力', zh: '免疫力' }, short: { ko: '면역', en: 'Immunity', ja: '免疫', zh: '免疫' }, rx: /헤모힘|프로폴리스|아연|비타민C|비타민D|홍삼/ },
  { key: 'gut',         emoji: '🌱', label: { ko: '장 건강 · 소화', en: 'Gut · Digestion', ja: '腸・消化', zh: '肠道 · 消化' }, short: { ko: '장·소화', en: 'Gut', ja: '腸', zh: '肠道' }, rx: /유산균|프로바이오|장|소화|효소/ },
  { key: 'eye',         emoji: '👁️', label: { ko: '눈 건강', en: 'Eye health', ja: '目の健康', zh: '眼部健康' }, short: { ko: '눈', en: 'Eyes', ja: '目', zh: '眼部' }, rx: /루테인|눈|아스타잔틴|오메가/ },
  { key: 'joint',       emoji: '🦴', label: { ko: '관절 · 뼈', en: 'Joints · Bones', ja: '関節・骨', zh: '关节 · 骨骼' }, short: { ko: '관절·뼈', en: 'Joints', ja: '関節', zh: '关节' }, rx: /칼슘|MSM|관절|콘드로|마그네슘|비타민D/ },
  { key: 'blood',       emoji: '🩸', label: { ko: '혈행 · 혈압', en: 'Circulation · BP', ja: '血行・血圧', zh: '血液循环 · 血压' }, short: { ko: '혈행', en: 'Circulation', ja: '血行', zh: '循环' }, rx: /오메가|EPA|DHA|혈행|홍삼|코엔자임/ },
  { key: 'liver',       emoji: '🌿', label: { ko: '간 건강 · 회식', en: 'Liver · After drinks', ja: '肝臓・飲み会', zh: '肝脏 · 应酬' }, short: { ko: '간', en: 'Liver', ja: '肝臓', zh: '肝脏' }, rx: /밀크씨슬|간|헛겜나무|유산균/ },
  { key: 'sleep',       emoji: '😴', label: { ko: '수면 · 스트레스', en: 'Sleep · Stress', ja: '睡眠・ストレス', zh: '睡眠 · 压力' }, short: { ko: '수면', en: 'Sleep', ja: '睡眠', zh: '睡眠' }, rx: /테아닌|수면|마그네슘|홍삼/ },
  { key: 'sugar',       emoji: '🩺', label: { ko: '혈당 관리', en: 'Blood sugar', ja: '血糖管理', zh: '血糖管理' }, short: { ko: '혈당', en: 'Blood sugar', ja: '血糖', zh: '血糖' }, rx: /바나바|혈당|윗씨암/ },
  { key: 'cholesterol', emoji: '🧭', label: { ko: '콜레스테롤', en: 'Cholesterol', ja: 'コレステロール', zh: '胆固醇' }, short: { ko: '콜레스테롤', en: 'Cholesterol', ja: 'コレステロール', zh: '胆固醇' }, rx: /오메가|폴리코사놀|홍국/ },
  { key: 'diet',        emoji: '⚖️', label: { ko: '체중 관리', en: 'Weight', ja: '体重管理', zh: '体重管理' }, short: { ko: '체중', en: 'Weight', ja: '体重', zh: '体重' }, rx: /다이어트|슬림|가르시니아|단백|쉐이크/ },
  { key: 'brain',       emoji: '🧠', label: { ko: '두뇌 · 기억력', en: 'Brain · Memory', ja: '脳・記憶力', zh: '大脑 · 记忆力' }, short: { ko: '두뇌·기억', en: 'Brain', ja: '脳', zh: '大脑' }, rx: /오메가|DHA|포스파티딘|기억|은행잎/ },
];
// 피부 — 타입 4종
const AI_QUIZ_SKINTYPE = [
  { key: 'dry',       emoji: '🌵', label: { ko: '건성 — 당김·건조감', en: 'Dry — tight, flaky', ja: '乾性 — つっぱり感', zh: '干性 — 紧绷干燥' }, short: { ko: '건성', en: 'Dry', ja: '乾性', zh: '干性' } },
  { key: 'oily',      emoji: '💧', label: { ko: '지성 — 번들거림·모공', en: 'Oily — shine, pores', ja: '脂性 — テカり・毛穴', zh: '油性 — 泛油毛孔' }, short: { ko: '지성', en: 'Oily', ja: '脂性', zh: '油性' } },
  { key: 'combo',     emoji: '🌗', label: { ko: '복합성 — T존만 번들', en: 'Combination', ja: '混合肌', zh: '混合性' }, short: { ko: '복합성', en: 'Combo', ja: '混合', zh: '混合' } },
  { key: 'sensitive', emoji: '🌸', label: { ko: '민감성 — 트러블·자극', en: 'Sensitive', ja: '敏感肌', zh: '敏感性' }, short: { ko: '민감성', en: 'Sensitive', ja: '敏感', zh: '敏感' } },
];
// 피부 — 사용 부위
const AI_QUIZ_SKINAREA = [
  { key: 'face', emoji: '🙋', label: { ko: '얼굴 — 기초 스킨케어', en: 'Face — skincare', ja: '顔 — 基礎ケア', zh: '面部 — 基础护肤' }, short: { ko: '얼굴', en: 'Face', ja: '顔', zh: '面部' }, rx: /스킵|토너|세럼|크림|앱솔루트|앞크림|젤|로션/ },
  { key: 'makeup', emoji: '💄', label: { ko: '메이크업', en: 'Makeup', ja: 'メイク', zh: '彩妆' }, short: { ko: '메이크업', en: 'Makeup', ja: 'メイク', zh: '彩妆' }, rx: /쿠션|파운데|립|아이|비비/ },
  { key: 'body', emoji: '🧴', label: { ko: '바디 · 핸드', en: 'Body · Hands', ja: 'ボディ・ハンド', zh: '身体 · 手部' }, short: { ko: '바디', en: 'Body', ja: 'ボディ', zh: '身体' }, rx: /바디|핸드|로션|바디워시|비누/ },
  { key: 'hair', emoji: '💇', label: { ko: '헤어 · 두피', en: 'Hair · Scalp', ja: 'ヘア・頭皮', zh: '头发 · 头皮' }, short: { ko: '헤어', en: 'Hair', ja: 'ヘア', zh: '头发' }, rx: /샴푸|트리트먼트|헤어|두피/ },
];
// 생활용품 — 용도
const AI_QUIZ_LIVING = [
  { key: 'hygiene', emoji: '🧻', label: { ko: '위생용품 — 화장지·물티슘', en: 'Hygiene — tissue, wipes', ja: '衛生用品', zh: '卫生用品' }, short: { ko: '위생용품', en: 'Hygiene', ja: '衛生用品', zh: '卫生用品' }, rx: /화장지|물티슘|키친타오|마스크|생리/ },
  { key: 'clean', emoji: '🧹', label: { ko: '세탁 · 청소', en: 'Laundry · Cleaning', ja: '洗濯・掃除', zh: '洗涤 · 清洁' }, short: { ko: '세탁·청소', en: 'Cleaning', ja: '掃除', zh: '清洁' }, rx: /세탁|세제|섬유|유연제|청소|클리너/ },
  { key: 'kitchen', emoji: '🍽️', label: { ko: '주방 · 설거지', en: 'Kitchen · Dishes', ja: 'キッチン', zh: '厨房' }, short: { ko: '주방', en: 'Kitchen', ja: 'キッチン', zh: '厨房' }, rx: /주방|설거지|수세미|주방세제|띱/ },
  { key: 'oral', emoji: '🪥', label: { ko: '구강케어 — 치약·칫솔', en: 'Oral care', ja: 'オーラルケア', zh: '口腔护理' }, short: { ko: '구강케어', en: 'Oral', ja: 'オーラル', zh: '口腔' }, rx: /치약|칫솔|가글|구강/ },
];
// 건강 — 섭취 형태 선호
const AI_QUIZ_FORM = [
  { key: 'pill',   emoji: '💊', label: { ko: '알약 · 캡슐', en: 'Pills · Capsules', ja: '錠剤・カプセル', zh: '药片 · 胶囊' }, short: { ko: '알약', en: 'Pills', ja: '錠剤', zh: '药片' }, rx: /캐프슐|캐킔|정|타블릿/ },
  { key: 'shot',   emoji: '🥤', label: { ko: '액상 · 샷 · 분말', en: 'Liquid · Shot · Powder', ja: '液体・ショット・粉末', zh: '液体 · 冲剂' }, short: { ko: '액상·샷', en: 'Liquid', ja: '液体', zh: '液体' }, rx: /샷|액|스틱|분말|앣/ },
  { key: 'chew',   emoji: '🍬', label: { ko: '젤리 · 추어미니', en: 'Gummy · Chewable', ja: 'グミ・チュアブル', zh: '软糖 · 咀嚼片' }, short: { ko: '젤리', en: 'Gummy', ja: 'グミ', zh: '软糖' }, rx: /젤리|추어|구미/ },
  { key: 'anyform', emoji: '🤷', label: { ko: '형태는 상관없어요', en: 'No preference', ja: 'こだわらない', zh: '无所谓' }, short: { ko: '', en: '', ja: '', zh: '' }, rx: null },
];
// 뷰티 — 원하는 효과
const AI_QUIZ_EFFECT = [
  { key: 'moisture', emoji: '💦', label: { ko: '보습 · 수분 충전', en: 'Hydration', ja: '保湿', zh: '保湿补水' }, short: { ko: '보습', en: 'Hydration', ja: '保湿', zh: '保湿' }, rx: /보습|수분|히알루론|아쿠아/ },
  { key: 'firm',     emoji: '🏗️', label: { ko: '주름 · 탄력', en: 'Anti-aging · Firming', ja: 'シワ・ハリ', zh: '抗皱 · 紧致' }, short: { ko: '주름·탄력', en: 'Firming', ja: 'ハリ', zh: '紧致' }, rx: /주름|탄력|안티에이징|리프팅|콜라졄/ },
  { key: 'bright',   emoji: '🌟', label: { ko: '미백 · 톤업', en: 'Brightening', ja: '美白・トーンアップ', zh: '美白 · 提亮' }, short: { ko: '미백·톤업', en: 'Brightening', ja: '美白', zh: '美白' }, rx: /미백|톤업|비타민C|브라이트|화이트/ },
  { key: 'calm',     emoji: '🌿', label: { ko: '진정 · 트러블 케어', en: 'Calming · Trouble', ja: '鎮静・トラブル', zh: '舒缓 · 祛痘' }, short: { ko: '진정', en: 'Calming', ja: '鎮静', zh: '舒缓' }, rx: /진정|시카|티트리|알로에|수딩/ },
];
// 생활용품 — 중요 포인트
const AI_QUIZ_POINT = [
  { key: 'safe',  emoji: '🌿', label: { ko: '성분 안전성 우선', en: 'Safe ingredients', ja: '成分の安全性', zh: '成分安全' }, short: { ko: '안전성', en: 'Safety', ja: '安全性', zh: '安全' } },
  { key: 'value', emoji: '💰', label: { ko: '대용량 가성비', en: 'Value for money', ja: '大容量コスパ', zh: '大容量性价比' }, short: { ko: '가성비', en: 'Value', ja: 'コスパ', zh: '性价比' } },
  { key: 'scent', emoji: '🌸', label: { ko: '향 · 사용감', en: 'Scent · Feel', ja: '香り・使用感', zh: '香味 · 使用感' }, short: { ko: '향·사용감', en: 'Scent', ja: '香り', zh: '香味' } },
  { key: 'eco',   emoji: '♻️', label: { ko: '친환경 · 저자극', en: 'Eco · Mild', ja: 'エコ・低刺激', zh: '环保 · 低刺激' }, short: { ko: '친환경', en: 'Eco', ja: 'エコ', zh: '环保' } },
];
// 식품 — 종류
const AI_QUIZ_FOOD = [
  { key: 'meal',  emoji: '🍚', label: { ko: '간편식 · 한 끼 대용', en: 'Ready meals', ja: '簡単食・食事代用', zh: '方便餐 · 代餐' }, short: { ko: '간편식', en: 'Meals', ja: '簡単食', zh: '方便餐' }, rx: /밥|죽|국|탕|찜|면|누룽지|카레|돈까스|베이컨|볶음|식사/ },
  { key: 'drink', emoji: '🍵', label: { ko: '음료 · 차 · 커피', en: 'Drinks · Tea · Coffee', ja: '飲み物・お茶・コーヒー', zh: '饮料 · 茶 · 咖啡' }, short: { ko: '음료·차', en: 'Drinks', ja: '飲み物', zh: '饮料' }, rx: /커피|차|음료|주스|홍삼정|앣|리티|아메리카노/ },
  { key: 'cook',  emoji: '🧂', label: { ko: '요리 재료 · 양념', en: 'Cooking · Seasoning', ja: '料理材料・調味料', zh: '食材 · 调味料' }, short: { ko: '요리재료', en: 'Cooking', ja: '材料', zh: '食材' }, rx: /오일|간장|소금|설탕|양념|잡곡|쌀|김|멸치|다시마/ },
  { key: 'snack', emoji: '🍪', label: { ko: '간식 · 영양 간식', en: 'Snacks', ja: 'おやつ・栄養おやつ', zh: '零食 · 营养零食' }, short: { ko: '간식', en: 'Snacks', ja: 'おやつ', zh: '零食' }, rx: /과자|젤리|바(?![닥])|견과|아몬드|초콜|옥수수|스낙/ },
];
// 식품 — 중요 포인트
const AI_QUIZ_FOODPICK = [
  { key: 'healthy', emoji: '🥗', label: { ko: '건강함 — 저당 · 저칼로리', en: 'Healthy — low sugar/cal', ja: 'ヘルシー — 低糖・低カロリー', zh: '健康 — 低糖低卡' }, short: { ko: '건강함', en: 'Healthy', ja: 'ヘルシー', zh: '健康' } },
  { key: 'easy',    emoji: '⏱️', label: { ko: '간편함 — 바로 먹기 · 데우기만', en: 'Quick — ready to eat', ja: '手軽さ — 温めるだけ', zh: '方便 — 即食即热' }, short: { ko: '간편함', en: 'Quick', ja: '手軽', zh: '方便' } },
  { key: 'taste',   emoji: '😋', label: { ko: '맛 우선 — 온 가족 입맛', en: 'Taste first', ja: '味重視', zh: '口味优先' }, short: { ko: '맛우선', en: 'Tasty', ja: '味重視', zh: '口味' } },
  { key: 'bulk',    emoji: '📦', label: { ko: '대용량 · 장보기용', en: 'Bulk · Stock up', ja: '大容量・まとめ買い', zh: '大容量 · 囤货' }, short: { ko: '대용량', en: 'Bulk', ja: '大容量', zh: '大容量' } },
];
const AI_QUIZ_BUDGET = [
  { key: 'under2', emoji: '💸', label: { ko: '2만원 이하', en: 'Under ₩20k', ja: '2万W以下', zh: '2万韩元以下' }, short: { ko: '~2만원', en: '<₩20k', ja: '~2万W', zh: '~2万' } },
  { key: 'to5',    emoji: '💳', label: { ko: '2만 ~ 5만원', en: '₩20–50k', ja: '2~5万W', zh: '2~5万韩元' }, short: { ko: '2~5만', en: '₩20–50k', ja: '2~5万W', zh: '2~5万' } },
  { key: 'to10',   emoji: '💼', label: { ko: '5만 ~ 10만원', en: '₩50–100k', ja: '5~10万W', zh: '5~10万韩元' }, short: { ko: '5~10만', en: '₩50–100k', ja: '5~10万W', zh: '5~10万' } },
  { key: 'any',    emoji: '💎', label: { ko: '상관없어요', en: 'No limit', ja: '指定なし', zh: '不限' }, short: { ko: '예산무관', en: 'Any budget', ja: '予算自由', zh: '不限预算' } },
];
// 분기형 스텝 구성 — 카테고리 답변에 따라 다음 질문이 바뀜
function aiQuizSteps(answers) {
  const steps = [{
    title: { ko: '지금 어떤 제품을 찾고 계세요?', en: 'What are you looking for today?', ja: 'どんな製品をお探しですか？', zh: '您在找什么产品？' },
    opts: AI_QUIZ_CATEGORY, field: 'category',
  }];
  if (answers.category === 'health') {
    steps.push({
      title: { ko: '어느 부분이 가장 신경 쓰이세요?', en: 'Which area concerns you most?', ja: '最も気になる部分は？', zh: '最关心哪方面？' },
      opts: AI_QUIZ_HEALTH, field: 'concern', grid: true,
    });
    steps.push({
      title: { ko: '어떤 형태가 먹기 편하세요?', en: 'Which form do you prefer?', ja: 'どの形状が飲みやすいですか？', zh: '哪种形态更方便？' },
      opts: AI_QUIZ_FORM, field: 'form',
    });
  } else if (answers.category === 'beauty') {
    steps.push({
      title: { ko: '피부 타입은 어떻게 되세요?', en: 'What is your skin type?', ja: '肌タイプは？', zh: '您的肤质是？' },
      opts: AI_QUIZ_SKINTYPE, field: 'skinType',
    });
    steps.push({
      title: { ko: '주로 어느 부위에 사용하세요?', en: 'Where will you use it?', ja: '主にどこに使いますか？', zh: '主要用在哪里？' },
      opts: AI_QUIZ_SKINAREA, field: 'area', grid: true,
    });
    steps.push({
      title: { ko: '가장 원하는 효과는 무엇인가요?', en: 'What effect do you want most?', ja: '最も求める効果は？', zh: '最想要什么效果？' },
      opts: AI_QUIZ_EFFECT, field: 'effect', grid: true,
    });
  } else if (answers.category === 'living') {
    steps.push({
      title: { ko: '어떤 용도의 생활용품이 필요하세요?', en: 'What kind of household goods?', ja: 'どんな用途ですか？', zh: '需要哪种用途？' },
      opts: AI_QUIZ_LIVING, field: 'living', grid: true,
    });
    steps.push({
      title: { ko: '고를 때 가장 중요하게 보는 것은?', en: 'What matters most to you?', ja: '選ぶとき最も重視するのは？', zh: '挑选时最看重什么？' },
      opts: AI_QUIZ_POINT, field: 'point', grid: true,
    });
  } else if (answers.category === 'food') {
    steps.push({
      title: { ko: '어떤 종류의 먹거리를 찾으세요?', en: 'What kind of food?', ja: 'どんな食べ物をお探しですか？', zh: '想找哪类食品？' },
      opts: AI_QUIZ_FOOD, field: 'food', grid: true,
    });
    steps.push({
      title: { ko: '고를 때 가장 중요한 것은?', en: 'What matters most?', ja: '選ぶとき最も重視するのは？', zh: '挑选时最看重什么？' },
      opts: AI_QUIZ_FOODPICK, field: 'foodPick', grid: true,
    });
  }
  steps.push({
    title: { ko: '어느 정도의 예산을 생각하세요?', en: 'What is your budget?', ja: 'ご予算はどのくらいですか？', zh: '您的预算大概是多少？' },
    opts: AI_QUIZ_BUDGET, field: 'budget',
  });
  return steps;
}
function aiAnswerLabel(a) {
  const pick = (arr, k) => { const o = arr.find(x => x.key === k); return o ? _ttl(o.short) : ''; };
  return [
    pick(AI_QUIZ_CATEGORY, a.category),
    pick(AI_QUIZ_HEALTH, a.concern),
    pick(AI_QUIZ_FORM, a.form),
    pick(AI_QUIZ_SKINTYPE, a.skinType),
    pick(AI_QUIZ_SKINAREA, a.area),
    pick(AI_QUIZ_EFFECT, a.effect),
    pick(AI_QUIZ_LIVING, a.living),
    pick(AI_QUIZ_POINT, a.point),
    pick(AI_QUIZ_FOOD, a.food),
    pick(AI_QUIZ_FOODPICK, a.foodPick),
    pick(AI_QUIZ_BUDGET, a.budget),
  ].filter(Boolean).join(' · ');
}

// 답변 기반으로 큐레이션 칸 자체를 재구성
function buildPersonalRows(a, all, best) {
  const uniq = arr => Array.from(new Map(arr.filter(Boolean).map(p => [p.id, p])).values());
  const { category, concern, skinType, area, living, budget, form, effect, point, food, foodPick } = a;
  const BUDGET_DEF = {
    under2: { label: '2만원 이하',   test: p => p.price <= 20000 },
    to5:    { label: '2만~5만원',    test: p => p.price > 20000 && p.price <= 50000 },
    to10:   { label: '5만~10만원',   test: p => p.price > 50000 && p.price <= 100000 },
    any:    { label: '',            test: () => true },
  };
  const b = BUDGET_DEF[budget] || BUDGET_DEF.any;

  // 1) 카테고리 + 세부 답변으로 메인 후보 필터
  let detail = null, poolTest = () => true, mainTitle = '', mainReason = '';
  let subRx = null; // 보조 필터 (섭취 형태 · 원하는 효과)
  if (category === 'health') {
    detail = AI_QUIZ_HEALTH.find(o => o.key === concern);
    const fm = AI_QUIZ_FORM.find(o => o.key === form);
    subRx = fm && fm.rx ? fm.rx : null;
    poolTest = p => p.category === '건강식품';
    mainTitle = `${detail ? _ttl(detail.label) : '건강'} 케어 추천`;
    mainReason = `'${detail ? _ttl(detail.short) : ''}' 고민${fm && fm.key !== 'anyform' ? ` · ${_ttl(fm.short)} 선호` : ''}에 맞는 성분 중심으로 골랐어요`;
  } else if (category === 'beauty') {
    detail = AI_QUIZ_SKINAREA.find(o => o.key === area);
    const st = AI_QUIZ_SKINTYPE.find(o => o.key === skinType);
    const ef = AI_QUIZ_EFFECT.find(o => o.key === effect);
    subRx = ef && ef.rx ? ef.rx : null;
    poolTest = p => p.category === '뷰티' || p.category === '헤어&바디';
    mainTitle = `${st ? _ttl(st.short) : ''} 피부 · ${ef ? _ttl(ef.short) : ''} 케어`;
    mainReason = `${detail ? _ttl(detail.short) : ''} 사용 · '${ef ? _ttl(ef.short) : ''}' 효과 중심 추천이에요`;
  } else if (category === 'living') {
    detail = AI_QUIZ_LIVING.find(o => o.key === living);
    const pt = AI_QUIZ_POINT.find(o => o.key === point);
    poolTest = p => p.category === '생활용품' || p.category === '리빙&홈데코' || p.category === '식품';
    mainTitle = `${detail ? _ttl(detail.short) : '생활용품'} 추천`;
    mainReason = `'${detail ? _ttl(detail.short) : ''}' 용도${pt ? ` · ${_ttl(pt.short)} 중심` : ''}으로 모았어요`;
  } else if (category === 'food') {
    detail = AI_QUIZ_FOOD.find(o => o.key === food);
    const fp = AI_QUIZ_FOODPICK.find(o => o.key === foodPick);
    poolTest = p => p.category === '식품';
    mainTitle = `${detail ? _ttl(detail.short) : '먹거리'} 추천`;
    mainReason = `'${detail ? _ttl(detail.short) : ''}'${fp ? ` · ${_ttl(fp.short)} 중심` : ''}으로 골랐어요`;
  }
  const pool = uniq(all.filter(poolTest));
  // 세부 키워드(rx) 우선 → 보조 필터 → 카테고리 보충
  const hit = detail && detail.rx ? pool.filter(p => detail.rx.test(p.name)) : [];
  const subHit = subRx ? pool.filter(p => subRx.test(p.name)) : [];
  const mainItems = uniq([...hit.filter(b.test), ...subHit.filter(b.test), ...hit, ...subHit, ...pool.filter(b.test), ...pool]).slice(0, 6);
  const budgetItems = uniq(all.filter(b.test).slice().sort((x, y) => (y.reviews || 0) - (x.reviews || 0))).slice(0, 6);
  const bestItems = uniq(all.filter(p => p.badges && p.badges.includes('BEST'))).slice(0, 6);

  const rows = [
    {
      kind: 'p-main',
      kicker: '✦ 당신을 위한 맞춤',
      title: mainTitle,
      reason: mainReason,
      badge: 'AI 맞춤', tone: '#00B6F0',
      items: mainItems,
    },
  ];
  if (budget !== 'any') {
    rows.push({
      kind: 'p-budget',
      kicker: '예산 맞춤',
      title: `${b.label} 예산으로 준비하는 알뜰 픽`,
      reason: '설정하신 예산 안에서 리뷰가 많은 순서예요',
      badge: 'VALUE', tone: '#7B8597',
      items: budgetItems,
    });
  }
  rows.push({
    kind: 'p-best',
    kicker: '함께 많이 찾는',
    title: '지금 가장 많이 담는 베스트',
    reason: '비슷한 답변을 한 회원들이 가장 많이 선택했어요',
    badge: 'BEST', tone: '#FF8A3D',
    items: bestItems,
  });
  return rows;
}

// 현재 언어 텍스트 선택 (React 컴포넌트용)
const _ttl = (map) => { const l = (window.i18nStore && window.i18nStore.lang) || 'ko'; return map[l] != null ? map[l] : map.ko; };
function useI18nLang() {
  const [lang, setLang] = React.useState((window.i18nStore && window.i18nStore.lang) || 'ko');
  React.useEffect(() => (window.i18nStore ? window.i18nStore.subscribe(setLang) : undefined), []);
  return lang;
}

const aiKeyframesCss = `
  @keyframes aiBriefUp { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes aiFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes aiSpin { to { transform: rotate(360deg); } }
  @keyframes aiCardIn { from { opacity: 0; transform: translateY(14px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }
  @keyframes aiCtaShine {
    0%   { transform: translateX(-130%) skewX(-18deg); }
    55%  { transform: translateX(260%) skewX(-18deg); }
    100% { transform: translateX(260%) skewX(-18deg); }
  }
  @keyframes aiCtaGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(0,136,184,0.3), 0 0 0 0 rgba(0,182,240,0.4); }
    50%      { box-shadow: 0 0 26px rgba(0,136,184,0.45), 0 0 0 6px rgba(0,182,240,0); }
  }
`;

// 오늘의 쇼핑 브리핑 카드 — 하단 플로팅
function AIBriefCard({ onStartQuiz, onClose }) {
  const _lang = useI18nLang();
  const _m = (() => { try { return !!localStorage.getItem('quickMember'); } catch (_) { return false; } })();
  const LINES = _m ? [
    { ic: '🆕', tone: '#00B6F0', head: '신제품', body: "'앱솔루트 셀렉티브 스킨케어' 새로 입고됐어요" },
    { ic: '⏰', tone: '#16A34A', head: '재구매', body: '헤모힘 소진 예상 D-3 · 지금 담아두면 맞춤' },
    { ic: '🎁', tone: '#FF8A3D', head: '혜택', body: '오늘 전 상품 PV 5% 추가 적립 중' },
  ] : [
    { ic: '🆕', tone: '#00B6F0', head: '신제품', body: "'앱솔루트 셀렉티브 스킨케어' 새로 입고됐어요" },
    { ic: '✦', tone: '#16A34A', head: '간편가입', body: '가입하면 재구매 시기·배송 알림을 받아요' },
    { ic: '🎁', tone: '#FF8A3D', head: '혜택', body: '신규 가입 시 첫 구매 5% 적립' },
  ];
  return (
    <div style={{
      position: 'absolute', left: 12, right: 12, bottom: 84,
      pointerEvents: 'auto',
      background: '#fff', borderRadius: 16,
      boxShadow: '0 18px 44px rgba(11,31,58,0.28), 0 0 0 1px rgba(0,182,240,0.18)',
      animation: 'aiBriefUp 0.4s cubic-bezier(.2,.8,.3,1) both',
      overflow: 'hidden', fontFamily: 'inherit',
    }}>
      <style>{aiKeyframesCss}</style>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 14px 10px', borderBottom: '1px solid rgba(11,31,58,0.06)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{
            width: 24, height: 24, borderRadius: 8, background: 'linear-gradient(135deg,#00B6F0,#0088B8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12,
          }}>✦</span>
          <span style={{ fontSize: 13.5, fontWeight: 900, color: '#0B1F3A' }}>{_ttl({ko:'오늘의 쇼핑 브리핑',en:'Today’s Shopping Brief',ja:'本日のショッピングブリーフ',zh:'今日购物简报'})}</span>
        </div>
        <button onClick={onClose} aria-label="닫기" style={{
          width: 26, height: 26, borderRadius: 999, border: 'none', background: 'rgba(11,31,58,0.06)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A5568',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <div style={{ padding: '10px 14px 4px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {LINES.map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, animation: `aiFadeIn 0.4s ease ${200 + i * 160}ms both` }}>
            <span style={{ fontSize: 14, lineHeight: '19px' }}>{l.ic}</span>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: '#2B3A52', lineHeight: 1.45 }}>
              <span style={{ fontWeight: 900, color: l.tone, marginRight: 5 }}>{l.head}</span>{l.body}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, padding: '12px 14px 14px' }}>
        <button onClick={onStartQuiz} style={{
          flex: 1, padding: '11px 0', borderRadius: 10, border: 'none', cursor: 'pointer',
          background: '#00B6F0', color: '#fff', fontSize: 13, fontWeight: 800, fontFamily: 'inherit',
        }}>✦ {_ttl({ko:'AI 맞춤 진열 시작',en:'Start AI Custom Shelf',ja:'AIカスタム陳列を開始',zh:'开始AI定制陈列'})}</button>
        <button onClick={onClose} style={{
          flex: '0 0 auto', padding: '11px 16px', borderRadius: 10, cursor: 'pointer',
          border: '1px solid rgba(11,31,58,0.14)', background: '#fff', color: '#6B7A90',
          fontSize: 13, fontWeight: 700, fontFamily: 'inherit',
        }}>{_ttl({ko:'닫기',en:'Close',ja:'閉じる',zh:'关闭'})}</button>
      </div>
    </div>
  );
}

// AI 맞춤 진열 퀴즈 오버레이 — 질문 3개 → 재배열
function AIQuizOverlay({ onDone, onClose }) {
  const _lang = useI18nLang();
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const steps = aiQuizSteps(answers);
  const loading = step >= steps.length;

  const pick = (key) => {
    const next = { ...answers, [steps[step].field]: key };
    setAnswers(next);
    const nextSteps = aiQuizSteps(next);
    if (step < nextSteps.length - 1) setStep(step + 1);
    else {
      setStep(nextSteps.length);
      setTimeout(() => onDone(next), 1100);
    }
  };
  const q = steps[Math.min(step, steps.length - 1)];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'auto',
        background: 'rgba(11,31,58,0.5)', backdropFilter: 'blur(3px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 22,
        animation: 'aiFadeIn 0.22s ease both', fontFamily: 'inherit',
      }}
    >
      <style>{aiKeyframesCss}</style>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: '100%', maxWidth: 340, background: '#fff', borderRadius: 18,
        padding: '20px 18px 18px', boxShadow: '0 24px 60px rgba(11,31,58,0.35)',
        animation: 'aiCardIn 0.32s cubic-bezier(.2,.8,.3,1) both',
        maxHeight: '94%', overflowY: 'auto',
      }}>
        {!loading ? (
          <React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
              <span style={{
                width: 22, height: 22, borderRadius: 7, background: 'linear-gradient(135deg,#00B6F0,#0088B8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11,
              }}>✦</span>
              <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '0.1em', color: '#0088B8' }}>{_ttl({ko:'AI 맞춤 진열',en:'AI Custom Shelf',ja:'AIカスタム陳列',zh:'AI定制陈列'})} · {step + 1}/{answers.category ? steps.length : 4}</span>
            </div>
            <div key={step} style={{ animation: 'aiCardIn 0.3s ease both' }}>
              <div style={{ fontSize: 17, fontWeight: 900, color: '#0B1F3A', margin: '8px 0 14px', letterSpacing: '-0.01em' }}>{_ttl(q.title)}</div>
              <div style={q.grid ? {
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7,
              } : { display: 'flex', flexDirection: 'column', gap: 8 }}>
                {q.opts.map(o => (
                  <button key={o.key} onClick={() => pick(o.key)} style={{
                    display: 'flex', alignItems: 'center', gap: q.grid ? 7 : 10,
                    padding: q.grid ? '11px 10px' : '13px 14px', borderRadius: 12, cursor: 'pointer',
                    border: '1.5px solid rgba(11,31,58,0.1)', background: '#F8FAFC',
                    fontSize: q.grid ? 12.5 : 14, fontWeight: 700, color: '#0B1F3A', fontFamily: 'inherit',
                    textAlign: 'left', transition: 'border-color 0.15s, background 0.15s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#00B6F0'; e.currentTarget.style.background = 'rgba(0,182,240,0.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(11,31,58,0.1)'; e.currentTarget.style.background = '#F8FAFC'; }}
                  >
                    <span style={{ fontSize: q.grid ? 15 : 18 }}>{o.emoji}</span><span style={{ flex: 1, lineHeight: 1.3 }}>{_ttl(o.label)}</span>
                  </button>
                ))}
              </div>
            </div>
            <button onClick={onClose} style={{
              marginTop: 12, width: '100%', padding: '9px 0', borderRadius: 9, border: 'none',
              background: 'transparent', color: '#8A97AD', fontSize: 12, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>{_ttl({ko:'다음에 할게요',en:'Maybe later',ja:'また今度',zh:'下次再说'})}</button>
          </React.Fragment>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '18px 0 14px' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 999, border: '3px solid rgba(0,182,240,0.2)',
              borderTopColor: '#00B6F0', animation: 'aiSpin 0.8s linear infinite',
            }} />
            <div style={{ marginTop: 14, fontSize: 14, fontWeight: 800, color: '#0B1F3A' }}>{_ttl({ko:'진열장을 다시 정리하고 있어요…',en:'Rearranging your shelf…',ja:'陳列棚を並べ替えています…',zh:'正在重新整理货架…'})}</div>
            <div style={{ marginTop: 4, fontSize: 11.5, fontWeight: 600, color: '#8A97AD' }}>{_ttl({ko:'답변에 맞춰 추천 순서를 바꾸는 중',en:'Reordering picks to match your answers',ja:'回答に合わせて順序を変更中',zh:'正根据回答调整推荐顺序'})}</div>
          </div>
        )}
      </div>
    </div>
  );
}

// =============================================================
// 데스크탑용 AI 큐레이션 섹션
// =============================================================
function ShopAICurationDesktop({ isMobile = false, allProducts, bestProducts, promoProducts, onSelectProduct, onSeeAll }) {
  const _lang = useI18nLang();
  const all = allProducts;
  const _qm = (() => { try { return !!localStorage.getItem('quickMember'); } catch (_) { return false; } })();
  const isNewList = all.filter(p => p.badges?.includes('신제품'));
  const best = bestProducts.length ? bestProducts : all.filter(p => p.badges?.includes('BEST'));

  // ===== S26 전용 — AI 브리핑 + 맞춤 진열 상태 =====
  const curationRootRef = React.useRef(null);
  const [s26AI, setS26AI] = React.useState(false);
  const [portalHost, setPortalHost] = React.useState(null);
  const [briefVisible, setBriefVisible] = React.useState(false);
  const [quizOpen, setQuizOpen] = React.useState(false);
  const [aiAnswers, setAiAnswers] = React.useState(null);
  const [aiLabel, setAiLabel] = React.useState('');
  const [orderVer, setOrderVer] = React.useState(0);

  React.useEffect(() => {
    const el = curationRootRef.current;
    if (!el) return;
    const scroll = el.closest('.phone-scroll');
    // CTA(카테고리 아래)에서 보내는 퀴즈 오픈 이벤트 — 같은 기기 스코프
    const onOpen = () => setQuizOpen(true);
    if (scroll) scroll.addEventListener('ai-quiz-open', onOpen);
    const parent = scroll ? scroll.parentElement : null;
    // 포털 호스트 — 모든 기기 (퀴즈 오버레이용)
    if (parent) {
      if (getComputedStyle(parent).position === 'static') parent.style.position = 'relative';
      let host = parent.querySelector(':scope > .__ai_brief_host');
      if (!host) {
        host = document.createElement('div');
        host.className = '__ai_brief_host';
        Object.assign(host.style, { position: 'absolute', inset: '0', zIndex: 80, pointerEvents: 'none' });
        parent.appendChild(host);
      }
      setPortalHost(host);
    }
    // S26 감지 — 브리핑 자동 노출은 S26에만
    if (!isMobile) return;
    if (el.closest('.iphone-noto')) return;
    if (!scroll || scroll.clientWidth >= 520) return () => { if (scroll) scroll.removeEventListener('ai-quiz-open', onOpen); };
    setS26AI(true);
    if (!window.__aiBriefShown) {
      window.__aiBriefShown = true;
      const t = setTimeout(() => setBriefVisible(true), 1400);
      return () => clearTimeout(t);
    }
  }, [isMobile]);

  const applyAiResult = (answers) => {
    setAiAnswers(answers);
    setAiLabel(aiAnswerLabel(answers));
    setOrderVer(v => v + 1);
    setQuizOpen(false);
    setBriefVisible(false);
    if (window.showToast) window.showToast(_ttl({ko:'✦ 맞춤 기준으로 진열을 정리했어요',en:'✦ Shelf rearranged for you',ja:'✦ カスタム基準で陳列を整理しました',zh:'✦ 已按您的偏好整理货架'}));
    // 큐레이션 영역으로 부드럽게 스크롤
    try {
      const el = curationRootRef.current;
      const scroll = el && el.closest('.phone-scroll');
      if (el && scroll) {
        const er = el.getBoundingClientRect(), sr = scroll.getBoundingClientRect();
        scroll.scrollTo({ top: scroll.scrollTop + (er.top - sr.top) - 52, behavior: 'smooth' });
      }
    } catch (_) {}
  };

  const ROWS = [
    {
      kind: 'today',
      kicker: '오늘의 추천 · FOR YOU',
      title: '오늘의 컨디션을 위한 한 가지',
      reason: _qm ? '전날 활동 패턴과 비슷한 회원의 선호를 반영했어요' : '요즘 가장 사랑받는 제품을 모았어요',
      badge: 'AI 큐레이션', tone: '#00B6F0',
      items: Array.from(new Map([best[0], best[2], best[1], best[3], all[5], all[6]].filter(Boolean).map(p => [p.id, p])).values()).slice(0, 6),
    },
    {
      kind: 'similar',
      kicker: '비슷한 회원이 좋아한',
      title: '지금 가장 많이 담고 있는 조합',
      reason: 'CHAIRMAN 등급 회원 1,248명의 최근 30일 구매 데이터',
      badge: '회원 인사이트', tone: '#FFC83D',
      items: Array.from(new Map([...best, ...isNewList].map(p => [p.id, p])).values()).slice(0, 6),
    },
    {
      kind: 'rebuy',
      kicker: '재구매 추천',
      title: _qm ? '곧 떨어질 제품을 미리 챙기세요' : '꾸준히 재구매되는 스테디셀러',
      reason: _qm ? '평균 32일 사용 기준 · 마지막 구매로부터 28일 경과' : '회원들이 반복 구매하는 제품이에요',
      badge: '리오더', tone: '#16A34A',
      items: Array.from(new Map([best[3], best[1], best[0], all[2], all[4], all[8]].filter(Boolean).map(p => [p.id, p])).values()).slice(0, 6),
    },
    {
      kind: 'chairman',
      kicker: 'CHAIRMAN PICK',
      title: `박한길 회장이 추천하는 ${best.slice(0, 5).length}가지`,
      reason: '창립자가 직접 큐레이션한 일상 루틴 패키지',
      badge: "✦ EDITOR'S CHOICE", tone: '#0B1F3A',
      items: best.slice(0, 5),
    },
    {
      kind: 'trend',
      kicker: '지금 뜨는',
      title: '24시간 안에 가장 많이 본 제품',
      reason: '실시간 조회 데이터 기반 · 매시간 업데이트',
      badge: '🔥 LIVE', tone: '#FF3B6A',
      items: Array.from(new Map([...isNewList, ...promoProducts, ...all.slice(10, 16)].map(p => [p.id, p])).values()).slice(0, 6),
    },
    {
      kind: 'budget',
      kicker: '가성비 픽',
      title: '2만원 이하로 시작하는 케어',
      reason: _qm ? '기존 구매 패턴과 가격대를 분석' : '부담 없는 가격대의 베스트',
      badge: 'VALUE', tone: '#7B8597',
      items: all.filter(p => p.price <= 20000).slice(0, 6),
    },
  ];

  const orderedRows = aiAnswers
    ? buildPersonalRows(aiAnswers, all, best)
        .concat(ROWS.filter(r => r.kind === 'chairman' || r.kind === 'trend'))
    : ROWS;

  return (
    <div ref={curationRootRef} className="shop-curation-body" style={{ width: '100%', background: '#F5F7FA' }}>
      {/* AI 헤더 배너 */}
      <div style={{
        maxWidth: 1280, margin: '0 auto', width: '100%',
        padding: isMobile ? '24px 16px 22px' : '36px 36px 28px', boxSizing: 'border-box',
        background: 'linear-gradient(135deg, #0B1F3A 0%, #1A3760 100%)',
        color: '#fff', position: 'relative', overflow: 'hidden',
        borderRadius: 0,
      }}>
        <div style={{
          position: 'absolute', top: -80, right: -60,
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,182,240,0.25) 0%, transparent 70%)',
        }} />
        <div style={{
          fontSize: isMobile ? 10 : 11, fontWeight: 800, letterSpacing: '0.22em',
          color: '#00B6F0', marginBottom: isMobile ? 8 : 10,
        }}>✦ ATOMY AI · POWERED BY YOUR DATA</div>
        <div style={{
          fontSize: isMobile ? 19 : 28, fontWeight: 800, letterSpacing: '-0.02em',
          lineHeight: 1.25, marginBottom: isMobile ? 6 : 8,
        }}>애터미에 오신 것을 환영해요,<br />오늘은 이 제품들이 인기예요</div>
        <div style={{
          fontSize: isMobile ? 11 : 12.5, fontWeight: 500, color: 'rgba(255,255,255,0.75)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: 999,
            background: '#16A34A', boxShadow: '0 0 0 3px rgba(22,163,74,0.25)',
          }} />
          실시간 추천 · 방금 업데이트
        </div>
      </div>

      {/* 큐레이션 행 */}
      <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', padding: isMobile ? '4px 16px 24px' : '12px 36px 40px', boxSizing: 'border-box' }}>
        {/* AI 맞춤 진열 — 상태 칩 (설정 후 재설정용) */}
        <style>{aiKeyframesCss}</style>
        {aiAnswers && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, margin: '14px 0 4px', flexWrap: 'wrap' }}>
            <button onClick={() => setQuizOpen(true)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: isMobile ? '9px 16px' : '10px 20px', borderRadius: 999, cursor: 'pointer',
              border: 'none', background: 'linear-gradient(120deg, #0088B8, #00B6F0)',
              color: '#fff', fontSize: isMobile ? 12 : 13, fontWeight: 800, fontFamily: 'inherit',
              boxShadow: '0 6px 18px rgba(0,136,184,0.35)',
            }}>✦ {aiLabel} {_ttl({ko:'맞춤 진열 중 · 다시 설정',en:'custom shelf on · Edit',ja:'カスタム陳列中・再設定',zh:'定制陈列中 · 重新设置'})}</button>
            <button onClick={() => { setAiAnswers(null); setAiLabel(''); setOrderVer(v => v + 1); if (window.showToast) window.showToast(_ttl({ko:'기본 진열로 돌아왔어요',en:'Back to default shelf',ja:'基本陳列に戻りました',zh:'已恢复默认陈列'})); }} style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: isMobile ? '9px 14px' : '10px 18px', borderRadius: 999, cursor: 'pointer',
              border: '1px solid rgba(11,31,58,0.16)', background: '#fff',
              color: '#6B7A90', fontSize: isMobile ? 12 : 13, fontWeight: 800, fontFamily: 'inherit',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              {_ttl({ko:'맞춤 해제',en:'Reset',ja:'解除',zh:'取消定制'})}
            </button>
          </div>
        )}
        {orderedRows.map((row, i) => (
          <div key={row.kind + '-v' + orderVer} style={orderVer > 0 ? { animation: `cardFadeUp 0.55s cubic-bezier(.2,.7,.3,1) ${i * 90}ms both` } : undefined}>
            <DesktopCurationRow
              row={row}
              isMobile={isMobile}
              isChairman={row.kind === 'chairman'}
              onSelect={onSelectProduct}
            />
          </div>
        ))}

        {/* 전체상품 보기 CTA */}
        <div style={{ textAlign: 'center', margin: '20px 0 8px' }}>
          <button onClick={onSeeAll} style={{
            padding: '14px 36px', borderRadius: 999, background: '#fff',
            border: '1px solid rgba(11,31,58,0.15)', color: '#0B1F3A',
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
            fontFamily: 'inherit', letterSpacing: '-0.01em',
          }}>전체상품 보기 →</button>
        </div>

      </div>

      <ShopFooter isMobile={isMobile} />

      {/* AI 브리핑(S26)/맞춤 진열 퀴즈(전체 기기) 포털 */}
      {portalHost && ReactDOM.createPortal(
        <React.Fragment>
          {briefVisible && !quizOpen && (
            <AIBriefCard
              onStartQuiz={() => setQuizOpen(true)}
              onClose={() => setBriefVisible(false)}
            />
          )}
          {quizOpen && (
            <AIQuizOverlay onDone={applyAiResult} onClose={() => setQuizOpen(false)} />
          )}
        </React.Fragment>,
        portalHost
      )}
    </div>
  );
}

function DesktopCurationRow({ row, isMobile = false, isChairman, onSelect }) {
  const INSIGHT = {
    today: ['🌥 오늘 흐림', '☕ 카페인 줄이기', '🌙 잠 부족', '💧 수분 부족'],
    similar: ['👑 89% 구매', '👥 1,248명', '⭐ 4.9평점', '🔁 재구매 67%'],
    rebuy: ['📅 28일 경과', '⏰ 곧 떨어짐', '🔁 평균 32일'],
    chairman: ['✦ 매일 사용', '✦ 50년 노하우', '✦ 추천 1순위', '✦ 회장님 픽', '✦ 데일리 루틴'],
    trend: ['🔥 +312% 조회', '📈 어제 1위', '👀 24h 핫'],
    budget: ['💰 -28% 가성비', '🎁 2만원 이하', '✓ 첫 구매 추천'],
  };
  const insights = INSIGHT[row.kind] || [];
  const scrollRef = React.useRef(null);
  const [canLeft, setCanLeft] = React.useState(false);
  const [canRight, setCanRight] = React.useState(false);
  const updateArrows = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);
  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', updateArrows); ro.disconnect(); };
  }, [updateArrows]);
  const scrollByDir = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };
  const rowArrowStyle = (side) => ({
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: 4, zIndex: 6,
    width: 30, height: 30, borderRadius: 999,
    background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255,255,255,0.5)',
    boxShadow: '0 2px 8px rgba(11,31,58,0.18)', cursor: 'pointer', padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B1F3A',
    opacity: 0.55, transition: 'opacity 0.18s, background 0.18s',
  });

  return (
    <section className="shop-curation-row" style={{
      padding: isMobile ? '20px 0 6px' : '28px 0 8px',
      borderBottom: '1px solid rgba(11,31,58,0.06)',
    }}>
      {/* iPhone 진열장 — 칸 상단 조명 (다른 기기에서는 숨김) */}
      <div className="case-lamp" aria-hidden="true">
        <span className="case-lamp-fixture" />
        <span className="case-lamp-glow" />
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: isMobile ? 12 : 16, gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: isMobile ? 6 : 8, flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '4px 10px', borderRadius: 5,
              background: row.tone, color: '#fff',
              fontSize: isMobile ? 9.5 : 10.5, fontWeight: 800, letterSpacing: '-0.01em',
            }}>{row.badge}</span>
            <div style={{
              fontSize: isMobile ? 10 : 11.5, fontWeight: 800, letterSpacing: '0.14em',
              color: row.tone, textTransform: 'uppercase',
            }}>{row.kicker}</div>
          </div>
          <div className="cr-title" style={{
            fontSize: isMobile ? 17 : 22, fontWeight: 800, letterSpacing: '-0.02em',
            lineHeight: 1.25, marginBottom: 6, color: '#0B1F3A',
          }}>{row.title}</div>
          <div className="cr-reason" style={{
            fontSize: isMobile ? 11 : 12.5, fontWeight: 500, color: 'rgba(11,31,58,0.6)',
            display: 'flex', alignItems: 'center', gap: 6,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(11,31,58,0.5)" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
            </svg>
            {row.reason}
          </div>
        </div>
      </div>

      {isMobile ? (
        // 모바일 — 가로 스크롤 (카드 폭 고정) + 좌우 화살표
        <div style={{ position: 'relative' }}>
        <div ref={scrollRef} className="drag-scroll-x" style={{
          display: 'flex', gap: 10, overflowX: 'auto', overflowY: 'hidden',
          padding: '2px 0 8px', marginLeft: -16, marginRight: -16, paddingLeft: 16, paddingRight: 16,
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
        }}>
          {row.items.map((p, _ix) => {
            if (!p) return null;
            const insight = insights[(parseInt(String(p.id).replace(/\D/g, ''), 10) || 0) % (insights.length || 1)];
            return (
              <div key={`${row.kind}-${p.id}`} style={{
                flex: '0 0 46%', minWidth: 0, scrollSnapAlign: 'start',
              }}>
                <DesktopAICard product={p} insight={insight} onSelect={() => onSelect(p)} kb={_ix} />
              </div>
            );
          })}
        </div>
        {canLeft && (
          <button aria-label="이전" onClick={() => scrollByDir(-1)} style={rowArrowStyle('left')}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'rgba(255,255,255,0.95)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.55'; e.currentTarget.style.background = 'rgba(255,255,255,0.55)'; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
        )}
        {canRight && (
          <button aria-label="다음" onClick={() => scrollByDir(1)} style={rowArrowStyle('right')}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'rgba(255,255,255,0.95)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.55'; e.currentTarget.style.background = 'rgba(255,255,255,0.55)'; }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        )}
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: isChairman ? 'repeat(5, 1fr)' : 'repeat(6, 1fr)',
          gap: 14,
        }}>
          {row.items.map((p, _ix) => {
            if (!p) return null;
            const insight = insights[(parseInt(String(p.id).replace(/\D/g, ''), 10) || 0) % (insights.length || 1)];
            return (
              <DesktopAICard key={`${row.kind}-${p.id}`} product={p} insight={insight} onSelect={() => onSelect(p)} kb={_ix} />
            );
          })}
        </div>
      )}
    </section>
  );
}

function DesktopAICard({ product, insight, onSelect, kb }) {
  const p = product;
  const _kbName = ['gsKB_n','gsKB_ne','gsKB_e','gsKB_se','gsKB_s','gsKB_sw','gsKB_w','gsKB_nw'][(kb || 0) % 8];
  const _kbDur = `${(9 + ((kb || 0) % 5) * 1.7).toFixed(1)}s`;
  const _kbDelay = `-${((kb || 0) * 2.4).toFixed(1)}s`;
  const [kbHover, setKbHover] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);
  const [pulling, setPulling] = React.useState(false);
  const wrapRef = React.useRef(null);
  const [isS26, setIsS26] = React.useState(false);
  React.useEffect(() => {
    if (wrapRef.current && !wrapRef.current.closest('.iphone-noto')) {
      const w = wrapRef.current.closest('.phone-scroll');
      if (w && w.clientWidth < 520) setIsS26(true);
    }
  }, []);
  const handleOpen = (e) => {
    if (pulling) return;
    setPulling(true);
    const card = e && e.currentTarget;
    if (card && window.productPullToScreen) {
      window.productPullToScreen(card, () => onSelect && onSelect());
    } else {
      setTimeout(() => onSelect && onSelect(), 420);
    }
  };
  const addToCart = (e) => {
    e.stopPropagation();
    const card = e.currentTarget.closest('button');
    const img = card && card.querySelector('img');
    if (img && window.flyToCart) window.flyToCart(img.src, img.getBoundingClientRect());
    setCartCount(c => {
      const next = c + 1;
      if (window.showToast) window.showToast((window.translate ? window.translate('toast.cart_added', { n: next }) : `장바구니에 ${next}개 담았습니다.`));
      if (window.atomyCartBump) window.atomyCartBump();
      return next;
    });
  };
  return (
    <div ref={wrapRef} data-parallax={isS26 ? '1' : undefined} className={"aicard-wrap" + (pulling ? " is-pulling" : "")} style={{ position: 'relative' }}>
    <span className="aicard-oval-shadow" aria-hidden="true" />
    <button
      onClick={handleOpen}
      className={pulling ? "" : ""}
      style={{
        position: 'relative', zIndex: 1,
        background: '#fff',
        border: '1px solid rgba(11,31,58,0.06)',
        borderRadius: 14,
        padding: 0, textAlign: 'left',
        cursor: 'pointer', overflow: 'hidden',
        fontFamily: 'inherit',
        width: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.12s ease-out, box-shadow 0.2s',
        boxShadow: '0 2px 6px rgba(11,31,58,0.04)',
      }}
      onMouseEnter={(e) => {
        setKbHover(true);
        e.currentTarget.style.boxShadow = '0 18px 40px rgba(11,31,58,0.18)';
      }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(600px) rotateX(${(-py * 15).toFixed(2)}deg) rotateY(${(px * 15).toFixed(2)}deg) translateY(-5px)`;
      }}
      onMouseLeave={(e) => {
        setKbHover(false);
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(11,31,58,0.04)';
      }}
    >
      <div style={{
        position: 'relative', width: '100%',
        aspectRatio: '1/1', background: '#F5F7FA', overflow: 'hidden',
        transition: 'transform 0.28s cubic-bezier(.2,.7,.3,1)',
        transform: kbHover ? 'translateZ(18px)' : 'translateZ(0)',
        backfaceVisibility: 'hidden',
      }}>
        <img src={p.image} alt={p.name} style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          animation: (isS26 && kbHover) ? `${_kbName} ${_kbDur} ease-in-out ${_kbDelay} infinite alternate` : 'none',
        }} />
        {insight && (
          <div style={{
            position: 'absolute', top: 8, left: 8,
            padding: '4px 9px', borderRadius: 999,
            background: 'rgba(11,31,58,0.85)', backdropFilter: 'blur(6px)',
            color: '#fff', fontSize: 10, fontWeight: 700,
            letterSpacing: '-0.01em',
          }}>{insight}</div>
        )}
        {/* 장바구니 담기 — 우상단 */}
        <span
          role="button"
          aria-label="장바구니 담기"
          onClick={addToCart}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00B6F0';
            e.currentTarget.style.transform = 'scale(1.12)';
            const svg = e.currentTarget.querySelector('svg'); if (svg) svg.style.stroke = '#fff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.95)';
            e.currentTarget.style.transform = 'scale(1)';
            const svg = e.currentTarget.querySelector('svg'); if (svg) svg.style.stroke = '#1A1A1A';
          }}
          style={{
            position: 'absolute', bottom: 8, right: 8,
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(6px)',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(11,31,58,0.18)',
            transition: 'background 0.18s, transform 0.18s',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
               style={{ transition: 'stroke 0.18s' }}>
            <path d="M5 8h14l-1 12.2a1.5 1.5 0 01-1.5 1.3h-9A1.5 1.5 0 016 20.2L5 8z" />
            <path d="M9 11V7a3 3 0 016 0v4" />
          </svg>
          {cartCount > 0 && (
            <span style={{
              position: 'absolute', top: -6, right: -6,
              minWidth: 17, height: 17, padding: '0 5px',
              borderRadius: 999, border: '1.5px solid #fff',
              background: '#00B6F0', color: '#fff', fontSize: 9.5, fontWeight: 800,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontVariantNumeric: 'tabular-nums',
            }}>{cartCount}</span>
          )}
        </span>
      </div>
      <div style={{ padding: '10px 12px 12px' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: '#7B8597',
          marginBottom: 4, letterSpacing: '-0.01em',
        }}>{p.category}</div>
        <div style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.35, color: '#0B1F3A',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden', minHeight: 36, marginBottom: 6,
        }}>{p.name}</div>
        <div style={{
          fontSize: 14, fontWeight: 800, letterSpacing: '-0.02em',
          color: '#0B1F3A',
        }}>{p.price.toLocaleString()}<span style={{ fontSize: 10.5, fontWeight: 600, color: '#7B8597', marginLeft: 2 }}>원</span></div>
        <div style={{
          fontSize: 10.5, fontWeight: 700, color: '#7B8597',
          letterSpacing: '0.04em', marginTop: 2,
        }}>★ {p.rating} · {(p.reviews || 0).toLocaleString()}</div>
      </div>
    </button>
    </div>
  );
}

// =============================================================
// 히어로 — 다중 프로모션 배너 캐러셀 (kr.atomy.com 스타일)
// =============================================================
const HERO_SLIDES = [
  {
    id: '000017',
    bg: 'linear-gradient(135deg, #FFD1CB 0%, #FF9A8B 100%)',
    chips: ['신제품'],
    chipColor: '#00B6F0',
    title: ['지친 몸을 깨우는', '애터미 헤모힘 샷'],
    sub: '청량한 파인애플 맛 액상 100ml 에너지 샷',
  },
  {
    id: '000164',
    bg: 'linear-gradient(135deg, #DCEEFF 0%, #93C7FF 100%)',
    chips: ['무료배송'],
    chipColor: '#1F5FAB',
    title: ['장 건강을 챙기는', '친생유산균 4개월분'],
    sub: '120포 대용량 · 매일 한 포 간편 섭취',
  },
  {
    id: '001846',
    bg: 'linear-gradient(135deg, #FFE5F0 0%, #FFA8C8 100%)',
    chips: ['추가혜택'],
    chipColor: '#C2185B',
    title: ['하루 한 번 손이 가는', '애터미 화장지 4D'],
    sub: '4D 엠보싱 · 35M × 15롤 × 4팩 대용량',
  },
  {
    id: '000276',
    bg: 'linear-gradient(135deg, #FFF8DC 0%, #F7C873 100%)',
    chips: ['시즌한정'],
    chipColor: '#A6711B',
    title: ['톤업과 자외선 차단을 동시에', '앱솔루트 에센스 선'],
    sub: '40ml · 산뜻한 마무리감, 데일리 선케어',
  },
  {
    id: '000523',
    bg: 'linear-gradient(135deg, #D9F4E4 0%, #6FCF97 100%)',
    chips: ['개별배송'],
    chipColor: '#1F7A47',
    title: ['휴대용 사이즈로 챙겨가는', '애터미 치약 플러스'],
    sub: '50g 휴대용 · 외출/여행 필수템',
  },
];

function HeroBannerCard({ slide, isMobile, onSelectProduct, animKey, gs, active, aspect }) {
  const product = SHOP_PRODUCTS.find(p => p.id === slide.id) || SHOP_PRODUCTS[0];
  if (gs) {
    // GS Shop 스타일 — 풀블리드 배너 (배경 미디어 + 하단 텍스트 오버레이 + 투명 클릭 레이어)
    return (
      <div
        onClick={() => onSelectProduct && onSelectProduct(product)}
        role="button" tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectProduct && onSelectProduct(product); } }}
        style={{
          flex: 1, minWidth: 0,
          position: 'relative', overflow: 'hidden',
          aspectRatio: aspect || '1 / 1', background: slide.bg,
          cursor: 'pointer',
        }}
      >
        {/* 배경 미디어 (제품 이미지) — 풀사이즈 + 켄번즈 */}
        <img
          src={product.image}
          alt=""
          aria-hidden="true"
          draggable={false}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            userSelect: 'none', pointerEvents: 'none',
            transformOrigin: 'center',
            animation: active ? 'gsKenBurns 7s ease-out both' : 'none',
            transform: active ? undefined : 'scale(1.08)',
          }}
        />
        {/* 하단 가독성 그라디언트 */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(0deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.12) 28%, rgba(0,0,0,0) 52%)',
        }} />
        {/* 텍스트 오버레이 — 하단 정렬 */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '32px 24px 62px',
          color: '#fff', letterSpacing: '-0.4px',
          textShadow: '0 1px 3px rgba(0,0,0,0.28)',
          pointerEvents: 'none',
        }}>
          {slide.chips && slide.chips[0] && (
            <span style={{
              alignSelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center', height: 26,
              padding: '0 10px', marginBottom: 12,
              background: '#00B6F0', color: '#fff',
              fontSize: 13.5, fontWeight: 600, borderRadius: 20,
              letterSpacing: '-0.01em',
            }}>{slide.chips[0]}</span>
          )}
          <strong style={{
            fontSize: 25, fontWeight: 700, lineHeight: 1.28,
            color: '#fff', maxWidth: 300, wordBreak: 'keep-all',
          }}>
            {slide.sub}<br />{slide.title[1]}
          </strong>
        </div>
      </div>
    );
  }
  return (
    <div
      key={animKey}
      onClick={() => onSelectProduct && onSelectProduct(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelectProduct && onSelectProduct(product); } }}
      style={{
        flex: 1, minWidth: 0,
        background: slide.bg,
        borderRadius: gs ? 0 : (isMobile ? 14 : 18),
        padding: gs ? '26px 24px' : (isMobile ? '22px 22px 20px' : '34px 34px 32px'),
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'row',
        gap: gs ? 14 : (isMobile ? 12 : 22), alignItems: 'center',
        minHeight: gs ? 260 : (isMobile ? 204 : 288),
        cursor: 'pointer',
      }}
    >
      {/* 좌측 카피 */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* 칩 */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: isMobile ? 12 : 17 }}>
          {slide.chips.map(chip => (
            <span key={chip} style={{
              padding: isMobile ? '4px 8px' : '5px 11px', borderRadius: 4,
              background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
              color: slide.chipColor, fontSize: isMobile ? 11.5 : 12.5, fontWeight: 800,
              letterSpacing: '-0.01em',
            }}>{chip}</span>
          ))}
        </div>

        <h1 style={{
          margin: 0, fontSize: isMobile ? 17 : 24, fontWeight: 900,
          letterSpacing: '-0.025em', lineHeight: 1.25, textWrap: 'balance',
          color: '#1A1A1A',
        }}>
          {slide.title[0]}<br />
          {slide.title[1]}
        </h1>

        <p style={{
          margin: isMobile ? '10px 0 0' : '12px 0 0',
          fontSize: isMobile ? 12 : 14, lineHeight: 1.5,
          color: 'rgba(26,26,26,0.7)', fontWeight: 500,
          textWrap: 'pretty', maxWidth: 336,
        }}>{slide.sub}</p>

        {!isMobile && (
          <button
            onClick={() => onSelectProduct(product)}
            style={{
              marginTop: 17, padding: '10px 19px', borderRadius: 999,
              background: '#1A1A1A', border: 'none', cursor: 'pointer',
              color: '#fff', fontSize: 13, fontWeight: 800,
              letterSpacing: '-0.01em',
              display: 'inline-flex', alignItems: 'center', gap: 7,
            }}
          >
            상세보기
            <span style={{ fontSize: 14, fontWeight: 900 }}>→</span>
          </button>
        )}
      </div>

      {/* 우측 — 제품 이미지 */}
      <div
        onClick={() => onSelectProduct(product)}
        style={{
          flexShrink: 0,
          width: gs ? 150 : (isMobile ? 120 : 204),
          height: gs ? 180 : (isMobile ? 144 : 240),
          position: 'relative', cursor: 'pointer',
          filter: 'drop-shadow(0 10px 22px rgba(0,0,0,0.18))',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'contain', display: 'block',
          }}
        />
      </div>
    </div>
  );
}

// 카테고리 아래 AI 맞춤 진열 CTA — 클릭 시 큐레이션 섹션의 퀴즈 오픈 (같은 기기 스코프)
function AIShelfCta({ isMobile }) {
  const _lang = useI18nLang();
  const open = (e) => {
    const sc = e.currentTarget.closest('.phone-scroll');
    if (sc) sc.dispatchEvent(new CustomEvent('ai-quiz-open'));
  };
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', padding: isMobile ? '8px 16px' : '11px 36px', boxSizing: 'border-box' }}>
      <style>{aiKeyframesCss}</style>
      <button onClick={open} style={{
        display: 'flex', alignItems: 'center', gap: 12, width: '100%',
        padding: isMobile ? '15px 16px' : '17px 22px',
        borderRadius: 16, border: 'none', cursor: 'pointer', textAlign: 'left',
        background: 'linear-gradient(120deg, #0B1F3A 0%, #0E5F86 55%, #00B6F0 130%)',
        color: '#fff', fontFamily: 'inherit', position: 'relative', overflow: 'hidden',
        animation: 'aiCtaGlow 2.6s ease-in-out infinite',
      }}>
        <span aria-hidden="true" style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: '34%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 100%)',
          animation: 'aiCtaShine 3.2s ease-in-out 1s infinite', pointerEvents: 'none',
        }} />
        <span style={{
          flex: '0 0 auto', width: isMobile ? 40 : 46, height: isMobile ? 40 : 46, borderRadius: 13,
          background: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isMobile ? 18 : 21,
        }}>✦</span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: isMobile ? 15 : 17, fontWeight: 900, letterSpacing: '-0.01em' }}>{_ttl({ko:'AI 맞춤 진열 시작하기',en:'Start AI Custom Shelf',ja:'AIカスタム陳列を開始',zh:'开始AI定制陈列'})}</span>
          <span style={{ display: 'block', marginTop: 3, fontSize: isMobile ? 11.5 : 12.5, fontWeight: 600, color: 'rgba(255,255,255,0.82)' }}>{_ttl({ko:'소중한 당신만을 위한 진열장을 준비할게요. 여기를 클릭해보세요.',en:'A shelf curated just for you — tap to begin.',ja:'あなただけの陳列棚をご用意します。タップしてみてください。',zh:'为您专属打造的货架，点击开始。'})}</span>
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
      </button>
    </div>
  );
}

// =============================================================
// 카테고리 아이콘 — kr.atomy.com 메인 스타일
// =============================================================
const CATEGORY_ICONS = [
  { key: 'health',    label: '건강식품',   img: 'https://image.atomy.com/KR/banner/90/493/24120000001149310162.svg' },
  { key: 'beauty',    label: '뷰티',       img: 'https://image.atomy.com/KR/banner/90/495/241200000011495101712.svg' },
  { key: 'body',      label: '헤어&바디',  img: 'https://image.atomy.com/KR/banner/90/482/241200000011482101740.svg' },
  { key: 'living',    label: '리빙&홈데코', img: 'https://image.atomy.com/KR/banner/90/496/24120000001149610184.svg' },
  { key: 'appliance', label: '가전',       img: 'https://image.atomy.com/KR/banner/90/497/241200000011497101830.svg' },
  { key: 'food',      label: '식품',       img: 'https://image.atomy.com/KR/banner/90/498/24120000001149810193.svg' },
  { key: 'fashion',   label: '패션',       img: 'https://image.atomy.com/KR/banner/90/499/241200000011499101929.svg' },
  { key: 'goods',     label: '굿즈&발행물', img: 'https://image.atomy.com/KR/banner/90/500/24120000001150010200.svg' },
  { key: 'all',       label: '전체상품',   img: 'https://image.atomy.com/KR/banner/90/483/241200000011483102033.svg' },
];

// 서브카테고리 — kr.atomy.com 각 카테고리 하위 분류 (0번 전체, 이후 rx로 상품명 필터)
const SUB_CATEGORIES = {
  health: [
    { label: '전체' },
    { label: '헤모힘', rx: /헤모힘/ },
    { label: '기초영양', rx: /홍삼|비타민|미네랄|프로틴|칼슘|철분|비오틴/ },
    { label: '성분', rx: /유산균|오메가|루테인|루아잔틴|밀크씨슬|쏘팔메토|비수리|MSM|보이차|식이섬유|풋사과|위건강|프로폴리스|락티움|콜라겐|스피루리나|소포라퀸|루바브|여주|징코|낫토|바이오틱스|마이크로바이옴/ },
    { label: '키즈', rx: /키즈|어린이|키성장/ },
    { label: '자연지향', rx: /노니|누룽지|곡밥|죽염|자연|슬림바디/ },
  ],
  beauty: [
    { label: '전체' },
    { label: '스킨케어', rx: /토너|로션|크림|세럼|앰플|에센스|스킨|클렌|필링|팩|패치|미스트|선|마스크/ },
    { label: '메이크업', rx: /BB|쿠션|립|아이|베이스|글로우|헬시글로우/ },
    { label: '미용기기·소품', rx: /기기|디바이스|코튼|퍼프|브러시/ },
  ],
  body: [
    { label: '전체' },
    { label: '헤어케어', rx: /샴푸|컨디셔너|트리트먼트|헤어|두피|앰플|에센스|컬러|염색|모단수|스칼프|컬링/ },
    { label: '바디케어', rx: /바디|핸드|워시|클렌저|로션|솝|페미닌|테라피/ },
    { label: '오랄케어', rx: /치약|칫솔|치간|구강|오랄|덴탈/ },
    { label: '키즈&맘케어', rx: /베베|키즈|어린이|맘/ },
    { label: '헤어·바디 소품', rx: /코튼|브러시|타월/ },
  ],
  living: [
    { label: '전체' },
    { label: '세제', rx: /세제|세탁|버블|얼룩|한장세제|울앤다운|파워/ },
    { label: '주방용품', rx: /수세미|프라이팬|주방|장갑|메디쿡/ },
    { label: '위생용품·화장지', rx: /화장지|티슈|물티슈|키친|생리대|허브데이|순한데이|마스크|종이컵|위생백|지퍼백/ },
    { label: '욕실용품', rx: /욕실|비데물티슈|비데 물티슈/ },
    { label: '생활용품', rx: /탈취|크리너|테이프|필터/ },
    { label: '홈데코·침구', rx: /디퓨저|침구|퍼퓸/ },
    { label: '반려동물', rx: /헤이 독|헤이 캣|반려|펫/ },
  ],
  appliance: [
    { label: '전체' },
    { label: '생활가전', rx: /비데|정수기|온열|매트/ },
    { label: '환경가전', rx: /공기청정기|가습기/ },
    { label: '뷰티가전', rx: /드라이어|스타일러|스킨부스터|덴탈소닉|헤어롤/ },
    { label: '필터·소모품', rx: /필터|칫솔 머리|건전지|리필/ },
  ],
  food: [
    { label: '전체' },
    { label: '농수산물', rx: /고등어|미역|김|견과|밤/ },
    { label: '간편식', rx: /간편국|삼계탕|갈비탕|곰탕|카레|라면|비빔면|만두|곡밥|누룽지|햄/ },
    { label: '양념', rx: /간장|고추장|죽염|원당시럽|아보카도|조미/ },
    { label: '음료', rx: /두유|커피|아라비카|심층수|생수|캔디|껌|양갱|콘칩|칩|두부과자/ },
  ],
  fashion: [
    { label: '전체' },
    { label: '의류', rx: /팬츠|원피스|티셔츠|맨투맨|셔츠|이지웨어/ },
    { label: '언더·이너웨어', rx: /팬티|거들|보정|쉐이퍼|언더|이너/ },
    { label: '슈즈', rx: /정장화|로퍼|구두|스니커즈|슈즈/ },
    { label: '굿즈', rx: /쇼핑백|노트|리플렛|굿즈/ },
  ],
  goods: [
    { label: '전체' },
    { label: '발행물', rx: /노트|학습|도서|캠프/ },
    { label: '판촉물', rx: /쇼핑백|리플렛|종이컵/ },
    { label: '문구', rx: /펜|다이어리|스티커|문구/ },
  ],
};

// =============================================================
// 전체 카테고리 시트 — 8개 대분류 + 서브카테고리를 한 번에 펼침
// =============================================================
function CategorySheet({ open, onClose, onSelect, isMobile, hostEl }) {
  const [host, setHost] = React.useState(null);
  React.useEffect(() => {
    if (!open) return;
    const scroller = hostEl && hostEl.closest && hostEl.closest('.phone-scroll');
    const h = scroller ? scroller.parentElement : null;
    if (h && getComputedStyle(h).position === 'static') h.style.position = 'relative';
    setHost(h || null);
  }, [open, hostEl]);
  if (!open) return null;
  const cats = CATEGORY_ICONS.filter(c => c.key !== 'all');
  const node = (
    <div
      onClick={onClose}
      style={{
        position: host ? 'absolute' : 'fixed', inset: 0, zIndex: 60,
        background: 'rgba(11,31,58,0.45)', backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        animation: 'catSheetFade 0.2s ease',
      }}
    >
      <style>{'@keyframes catSheetFade{from{opacity:0}to{opacity:1}}@keyframes catSheetUp{from{transform:translateY(100%)}to{transform:translateY(0)}}.catsheet-scroll::-webkit-scrollbar{width:0}'}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        className="catsheet-scroll"
        style={{
          width: '100%', maxWidth: 560, maxHeight: '86%', background: '#fff',
          borderRadius: '20px 20px 0 0', overflowY: 'auto', scrollbarWidth: 'none',
          animation: 'catSheetUp 0.28s cubic-bezier(.2,.7,.3,1)',
          fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif', color: '#0B1F3A',
        }}
      >
        <div style={{
          position: 'sticky', top: 0, background: '#fff', zIndex: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: isMobile ? '16px 18px 12px' : '20px 24px 14px',
          borderBottom: '1px solid rgba(11,31,58,0.07)',
        }}>
          <div style={{ fontSize: isMobile ? 17 : 19, fontWeight: 900, letterSpacing: '-0.02em' }}>전체 카테고리</div>
          <button onClick={onClose} aria-label="닫기" style={{
            width: 32, height: 32, border: 'none', background: '#F0F4FA', borderRadius: 10,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B1F3A',
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div style={{ padding: isMobile ? '6px 14px 26px' : '10px 20px 32px' }}>
          {cats.map((cat) => {
            const subs = SUB_CATEGORIES[cat.key] || [];
            return (
              <div key={cat.key} style={{ padding: isMobile ? '13px 4px' : '15px 6px', borderBottom: '1px solid rgba(11,31,58,0.05)' }}>
                <button
                  onClick={() => onSelect(cat.key, 0)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 11, width: '100%',
                    border: 'none', background: 'none', cursor: 'pointer', padding: 0,
                    fontFamily: 'inherit', textAlign: 'left', marginBottom: subs.length > 1 ? 11 : 0,
                  }}
                >
                  <img src={cat.img} alt="" style={{ width: 34, height: 34, objectFit: 'contain', flexShrink: 0 }} />
                  <span style={{ fontSize: isMobile ? 15 : 16, fontWeight: 800, color: '#0B1F3A', letterSpacing: '-0.02em' }}>{cat.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B4BECC" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto' }}><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                {subs.length > 1 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, paddingLeft: 45 }}>
                    {subs.slice(1).map((s, i) => (
                      <button
                        key={s.label}
                        onClick={() => onSelect(cat.key, i + 1)}
                        style={{
                          border: '1px solid rgba(11,31,58,0.12)', background: '#F7F9FC',
                          borderRadius: 999, padding: isMobile ? '6px 12px' : '7px 14px',
                          fontSize: isMobile ? 12.5 : 13, fontWeight: 600, color: '#3A4657',
                          cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
                        }}
                      >{s.label}</button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  return host ? ReactDOM.createPortal(node, host) : node;
}

function ShopCategoryIcons({ isMobile, onSelectCategory }) {
  const iconSize = isMobile ? 48 : 64;
  const [hoverKey, setHoverKey] = React.useState(null);
  const [stuck, setStuck] = React.useState(false);
  const [sheetOpen, setSheetOpen] = React.useState(false);
  const sentinelRef = React.useRef(null);
  const sectionRef = React.useRef(null);

  // 상단 sticky 상태 감지 — 센티넬이 뷰포트 위로 사라지면 stuck
  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setStuck(!e.isIntersecting),
      { threshold: [0, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <React.Fragment>
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />
    <section ref={sectionRef} style={{
      background: '#fff',
      padding: isMobile ? (stuck ? '10px 12px' : '22px 12px 22px') : '32px 36px 30px',
      borderBottom: '1px solid rgba(11,31,58,0.05)',
      position: 'sticky', top: 0, zIndex: 15,
      boxShadow: stuck ? '0 6px 16px rgba(11,31,58,0.08)' : 'none',
      transition: 'padding 0.2s ease, box-shadow 0.2s ease',
    }}>
      <div
        className="phone-scroll drag-scroll-x"
        style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', gap: isMobile ? 4 : 16,
          overflowX: 'auto', WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          justifyContent: isMobile ? 'flex-start' : 'space-between',
          cursor: isMobile ? 'grab' : 'default',
        }}
      >
        {/* 전체 카테고리 트리거 — 좌측 */}
        <button
          onClick={() => setSheetOpen(true)}
          style={{
            flexShrink: 0, width: isMobile ? 70 : 100,
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 8, padding: '6px 4px',
            background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          <div style={{
            width: iconSize + (isMobile ? 8 : 12), height: iconSize + (isMobile ? 8 : 12),
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', background: '#F0F4FA',
          }}>
            <svg width={isMobile ? 24 : 30} height={isMobile ? 24 : 30} viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <span style={{
            fontSize: isMobile ? 11 : 12.5, fontWeight: 600, color: '#1A1A1A',
            letterSpacing: '-0.02em', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 2,
          }}>전체 <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
        </button>
        {CATEGORY_ICONS.map((cat) => {
          const active = hoverKey === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => onSelectCategory && onSelectCategory(cat.key)}
              onMouseEnter={() => setHoverKey(cat.key)}
              onMouseLeave={() => setHoverKey(null)}
              style={{
                flexShrink: 0,
                width: isMobile ? 70 : 100,
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 8, padding: '6px 4px',
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <div style={{
                width: iconSize + (isMobile ? 8 : 12),
                height: iconSize + (isMobile ? 8 : 12),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                background: active ? '#F0F4FA' : 'transparent',
                transform: active ? 'translateY(-3px) scale(1.06)' : 'translateY(0) scale(1)',
                boxShadow: active ? '0 8px 20px rgba(11,31,58,0.12)' : 'none',
                transition: 'transform 0.22s cubic-bezier(.2,.7,.3,1), background 0.18s, box-shadow 0.22s',
              }}>
                <img
                  src={cat.img}
                  alt={cat.label}
                  style={{
                    width: iconSize, height: iconSize,
                    objectFit: 'contain', display: 'block',
                    transition: 'filter 0.18s',
                    filter: active ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.12))' : 'none',
                  }}
                />
              </div>
              <span style={{
                fontSize: isMobile ? 11 : 12.5,
                fontWeight: active ? 800 : 600,
                color: active ? '#0B1F3A' : '#1A1A1A',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                transition: 'color 0.18s, font-weight 0.18s',
              }}>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </section>
    <CategorySheet
      open={sheetOpen}
      onClose={() => setSheetOpen(false)}
      isMobile={isMobile}
      hostEl={sectionRef.current}
      onSelect={(key, sub) => { window.__shopNavSub = sub || 0; setSheetOpen(false); onSelectCategory && onSelectCategory(key); }}
    />
    </React.Fragment>
  );
}

function ShopHero({ isMobile, onSelectProduct }) {
  const total = HERO_SLIDES.length;
  // 실제 컨테이너 폭을 관찰해 넓은 면(Fold7 등)은 2개씩 노출
  const wrapRef = React.useRef(null);
  const [wideMobile, setWideMobile] = React.useState(false);
  const [isIphone, setIsIphone] = React.useState(false);
  React.useEffect(() => {
    if (wrapRef.current && wrapRef.current.closest('.iphone-noto')) setIsIphone(true);
  }, []);
  React.useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = e.contentRect.width;
        setWideMobile(w >= 640);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const visibleCount = 1;
  // GS Shop 스타일 풀블리드 히어로 — 전체 기기 적용
  const gsMode = true;
  // Fold7·데스크톱(넓은 화면)은 배너 높이를 절반으로 (2:1), 좁은 모바일은 1:1
  const bannerAspect = (!isMobile || wideMobile) ? '2 / 1' : '1 / 1';
  const [idx, setIdx] = React.useState(0);
  const [listOpen, setListOpen] = React.useState(false);
  const [animOn, setAnimOn] = React.useState(true);
  const [paused, setPaused] = React.useState(false);
  const [dragPx, setDragPx] = React.useState(0);

  // 무한 루프용 — 앞쪽에 visibleCount만큼 복제 추가
  const extended = React.useMemo(
    () => [...HERO_SLIDES, ...HERO_SLIDES.slice(0, visibleCount)],
    [visibleCount]
  );

  // idx === total 도달 시 transition 끝나면 0으로 점프 (무애니메이션)
  React.useEffect(() => {
    if (idx >= total) {
      const t = setTimeout(() => {
        setAnimOn(false);
        setIdx(0);
      }, 620);
      return () => clearTimeout(t);
    }
  }, [idx, total]);

  // animOn 꺼진 직후 다음 프레임에 다시 켜기
  React.useEffect(() => {
    if (!animOn) {
      const r = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimOn(true));
      });
      return () => cancelAnimationFrame(r);
    }
  }, [animOn]);

  // 자동 슬라이드 (5초마다 1개씩)
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx(i => i + 1), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir) => {
    if (dir > 0) {
      setIdx(i => i + 1);
    } else {
      // 뒤로 — 0이면 일단 total로 점프(무애니메이션) 후 total-1로 이동
      if (idx === 0) {
        setAnimOn(false);
        setIdx(total);
        // 다음 프레임에 애니메이션 켜고 한 칸 뒤로
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimOn(true);
            setIdx(total - 1);
          });
        });
      } else {
        setIdx(i => i - 1);
      }
    }
  };

  // 페이지네이션 표시용 (0 ~ total-1)
  const displayIdx = ((idx % total) + total) % total;

  const gapPx = isMobile ? 4 : 6;

  // 마우스/터치 스와이프 (window 레벨 리스너로 안정적으로 추적)
  const dragRef = React.useRef({ down: false, startX: 0, moved: false });
  const beginDrag = (clientX) => {
    dragRef.current = { down: true, startX: clientX, moved: false };
    setPaused(true);
  };
  const endDrag = (clientX) => {
    const d = dragRef.current;
    if (!d.down) return;
    const dx = clientX - d.startX;
    d.down = false;
    setPaused(false);
    setDragPx(0);
    if (Math.abs(dx) > 40) {
      go(dx < 0 ? 1 : -1);
      if (d.moved) {
        const blocker = (ev) => { ev.stopPropagation(); ev.preventDefault(); };
        window.addEventListener('click', blocker, { capture: true, once: true });
      }
    }
  };
  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    beginDrag(e.clientX);
    const onMove = (ev) => {
      if (!dragRef.current.down) return;
      const dx = ev.clientX - dragRef.current.startX;
      if (Math.abs(dx) > 6) dragRef.current.moved = true;
      setDragPx(dx);
    };
    const onUp = (ev) => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      endDrag(ev.clientX);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };
  const onTouchStart = (e) => { beginDrag(e.touches[0].clientX); };
  const onTouchMove = (e) => {
    if (!dragRef.current.down) return;
    const dx = e.touches[0].clientX - dragRef.current.startX;
    if (Math.abs(dx) > 6) dragRef.current.moved = true;
    setDragPx(dx);
  };
  const onTouchEnd = (e) => {
    const x = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : dragRef.current.startX;
    endDrag(x);
  };

  const heroCtrlBtn = {
    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
    background: 'rgba(25,25,35,0.38)', backdropFilter: 'blur(4px)',
    border: 'none', cursor: 'pointer', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
  };
  const navBtnStyle = (side) => ({
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: isMobile ? 8 : 14, zIndex: 6,
    width: isMobile ? 30 : 40, height: isMobile ? 30 : 40, borderRadius: 999,
    background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
    border: '1px solid rgba(11,31,58,0.1)', cursor: 'pointer', padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(11,31,58,0.15)', color: '#0B1F3A',
  });

  return (
    <section
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        background: '#F4F6F8',
        padding: 0,
        position: 'relative', overflow: 'hidden',
        touchAction: 'pan-y', cursor: 'grab',
      }}
    >
      <div style={{
        position: 'relative', maxWidth: 1280, margin: '0 auto',
        overflow: 'hidden',
      }}>
        {gsMode ? (
          // GS 페이드 + 켄번즈 스택 — 활성 슬라이드만 노출, 이미지가 천천히 움직임
          <div style={{ position: 'relative', width: '100%', aspectRatio: bannerAspect }}>
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                style={{
                  position: 'absolute', inset: 0,
                  opacity: i === displayIdx ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                  pointerEvents: i === displayIdx ? 'auto' : 'none',
                  zIndex: i === displayIdx ? 1 : 0,
                }}
              >
                <HeroBannerCard slide={slide} isMobile={isMobile} onSelectProduct={onSelectProduct} gs={true} active={i === displayIdx} aspect={bannerAspect} />
              </div>
            ))}
          </div>
        ) : (
        <div style={{
          display: 'flex',
          gap: gapPx,
          // 각 슬라이드 = (100% - gap*(vc-1)) / vc
          // translateX = -idx * (slideWidth + gap)
          transform: `translateX(calc(${-idx} * ((100% - ${gapPx * (visibleCount - 1)}px) / ${visibleCount} + ${gapPx}px) + ${dragPx}px))`,
          transition: (animOn && dragPx === 0) ? 'transform 0.6s cubic-bezier(.4,.0,.2,1)' : 'none',
          willChange: 'transform',
        }}>
          {extended.map((slide, i) => (
            <div
              key={`${slide.id}-${i}`}
              style={{
                flex: `0 0 calc((100% - ${gapPx * (visibleCount - 1)}px) / ${visibleCount})`,
                minWidth: 0,
              }}
            >
              <HeroBannerCard slide={slide} isMobile={isMobile} onSelectProduct={onSelectProduct} animKey={null} gs={gsMode} />
            </div>
          ))}
        </div>
        )}
      </div>

      {/* 좌·우 화살표 네비 (GS 모드에서는 숨김 — 스와이프만) */}
      {!gsMode && (<button onClick={() => go(-1)} aria-label="이전 배너" style={navBtnStyle('left')}>
        <svg width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>)}
      {!gsMode && (<button onClick={() => go(1)} aria-label="다음 배너" style={navBtnStyle('right')}>
        <svg width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>)}

      {/* GS 스타일 하단 컨트롤 바 — 프로그레스 + 카운터 + 전체보기(+) */}
      {gsMode && (
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 18, zIndex: 3,
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '0 12px 0 16px', boxSizing: 'border-box',
        }}>
          {/* 이전 배너 */}
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="이전 배너" style={heroCtrlBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div style={{
            flex: 1, height: 2, borderRadius: 10,
            background: 'rgba(255,255,255,0.3)', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, bottom: 0, left: 0,
              width: `${((displayIdx + 1) / total) * 100}%`,
              background: '#fff', borderRadius: 10,
              transition: 'width 0.4s cubic-bezier(.4,0,.2,1)',
            }} />
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 5, height: 32,
            fontSize: 13, fontWeight: 700, color: '#fff',
            fontVariantNumeric: 'tabular-nums', textShadow: '0 1px 3px rgba(0,0,0,0.35)',
          }}>
            <strong style={{ fontWeight: 800 }}>{displayIdx + 1}</strong>
            <span style={{ opacity: 0.5 }}>|</span>
            <span style={{ opacity: 0.7 }}>{total}</span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setPaused(p => !p); }}
            aria-label={paused ? '재생' : '일시정지'}
            style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              background: 'rgba(25,25,35,0.38)', backdropFilter: 'blur(4px)',
              border: 'none', cursor: 'pointer', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0,
            }}
          >
            {paused
              ? <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
              : <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>}
          </button>
          {/* 다음 배너 */}
          <button onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="다음 배너" style={heroCtrlBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
          {/* 배너 목록 보기 */}
          <button onClick={(e) => { e.stopPropagation(); setPaused(true); setListOpen(true); }} aria-label="배너 목록 보기" style={heroCtrlBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
          </button>
        </div>
      )}

      {/* 배너 목록 오버레이 */}
      {gsMode && listOpen && (
        <div onClick={(e) => { e.stopPropagation(); setListOpen(false); }} style={{
          position: 'absolute', inset: 0, zIndex: 8,
          background: 'rgba(11,31,58,0.6)', backdropFilter: 'blur(3px)',
          display: 'flex', flexDirection: 'column', animation: 'shortsFadeIn 0.2s ease both',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            margin: 'auto', width: '90%', maxWidth: 560, maxHeight: '86%', overflowY: 'auto',
            background: '#fff', borderRadius: 16, padding: isMobile ? '14px 14px 16px' : '18px 20px 20px',
            boxShadow: '0 24px 60px rgba(11,31,58,0.4)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
              <span style={{ fontSize: isMobile ? 14 : 15, fontWeight: 900, color: '#0B1F3A' }}>진행 중인 배너 <span style={{ color: '#00A3D9' }}>{total}</span></span>
              <button onClick={() => setListOpen(false)} aria-label="닫기" style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#8A97AD', padding: 4, lineHeight: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 10 }}>
              {HERO_SLIDES.map((slide, i) => {
                const prod = SHOP_PRODUCTS.find(p => p.id === slide.id) || {};
                const isCur = i === displayIdx;
                return (
                  <button key={slide.id} onClick={() => { setAnimOn(true); setIdx(i); setListOpen(false); }} style={{
                    display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                    padding: 8, borderRadius: 12, background: isCur ? 'rgba(0,182,240,0.08)' : '#F6F8FB',
                    border: isCur ? '1.5px solid #00B6F0' : '1.5px solid transparent',
                  }}>
                    <span style={{ position: 'relative', flexShrink: 0, width: 74, height: 48, borderRadius: 8, overflow: 'hidden', background: slide.bg }}>
                      {prod.image && <img src={prod.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                      <span style={{ position: 'absolute', top: 3, left: 4, fontSize: 9, fontWeight: 800, color: '#fff', background: 'rgba(0,0,0,0.45)', borderRadius: 3, padding: '1px 5px' }}>{String(i + 1).padStart(2, '0')}</span>
                    </span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ display: 'flex', gap: 4, marginBottom: 3 }}>
                        {slide.chips.slice(0, 1).map(c => (
                          <span key={c} style={{ fontSize: 9.5, fontWeight: 800, color: '#fff', background: slide.chipColor, borderRadius: 4, padding: '1px 6px' }}>{c}</span>
                        ))}
                        {isCur && <span style={{ fontSize: 9.5, fontWeight: 800, color: '#00A3D9' }}>현재 보는 중</span>}
                      </span>
                      <span style={{ display: 'block', fontSize: 12.5, fontWeight: 800, color: '#0B1F3A', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{slide.title[slide.title.length - 1]}</span>
                      <span style={{ display: 'block', fontSize: 11, color: '#6B7A90', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{slide.sub}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 페이지네이션 + 좌우 네비 (기본 모드) */}
      {!gsMode && (<div style={{
        position: 'absolute', bottom: isMobile ? 10 : 16, right: isMobile ? 16 : 36,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: isMobile ? '4px 8px' : '5px 10px', borderRadius: 999,
        background: 'rgba(0,0,0,0.45)', color: '#fff',
        fontSize: isMobile ? 10 : 11, fontWeight: 700, letterSpacing: '0.03em',
        fontVariantNumeric: 'tabular-nums',
      }}>
        <button onClick={() => go(-1)} aria-label="이전" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: '#fff', display: 'flex', alignItems: 'center',
          opacity: 0.75,
        }}>
          <svg width={isMobile ? 11 : 12} height={isMobile ? 11 : 12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <span>{String(displayIdx + 1).padStart(2, '0')}</span>
        <span style={{ opacity: 0.4 }}>|</span>
        <span style={{ opacity: 0.7 }}>{String(total).padStart(2, '0')}</span>
        <button onClick={() => go(1)} aria-label="다음" style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: '#fff', display: 'flex', alignItems: 'center',
          opacity: 0.75,
        }}>
          <svg width={isMobile ? 11 : 12} height={isMobile ? 11 : 12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <button onClick={() => setPaused(p => !p)} aria-label={paused ? '재생' : '일시정지'} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          padding: 0, color: '#fff', display: 'flex', alignItems: 'center',
          opacity: 0.75, marginLeft: 2,
        }}>
          {paused ? (
            <svg width={isMobile ? 10 : 11} height={isMobile ? 10 : 11} viewBox="0 0 24 24" fill="currentColor"><polygon points="6 4 20 12 6 20 6 4" /></svg>
          ) : (
            <svg width={isMobile ? 10 : 11} height={isMobile ? 10 : 11} viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
          )}
        </button>
      </div>)}
    </section>
  );
}

// =============================================================
// 섹션 타이틀
// =============================================================
function ShopSectionTitle({ kicker, title, desc, isMobile }) {
  return (
    <div style={{ marginBottom: isMobile ? 14 : 20 }}>
      <div style={{
        fontSize: isMobile ? 10 : 11, fontWeight: 800,
        letterSpacing: '0.18em', color: '#00B6F0', marginBottom: 6,
      }}>{kicker}</div>
      <h2 style={{
        margin: 0, fontSize: isMobile ? 20 : 26, fontWeight: 900,
        color: '#0B1F3A', letterSpacing: '-0.02em', lineHeight: 1.25,
      }}>{title}</h2>
      {desc && (
        <p style={{
          margin: '4px 0 0', fontSize: isMobile ? 12 : 13,
          color: '#6B7A90', fontWeight: 500,
        }}>{desc}</p>
      )}
    </div>
  );
}

// =============================================================
// 푸터
// =============================================================
// 최근 본 상품 — 우측 슬라이드 패널 + 트리거
function RecentViewedPanel({ isMobile }) {
  const [open, setOpen] = React.useState(false);
  const [entries, setEntries] = React.useState([]);
  const [host, setHost] = React.useState(null);
  const anchorRef = React.useRef(null);
  React.useEffect(() => {
    const scroller = anchorRef.current && anchorRef.current.closest && anchorRef.current.closest('.phone-scroll');
    const h = scroller ? scroller.parentElement : null;
    if (h && getComputedStyle(h).position === 'static') h.style.position = 'relative';
    setHost(h || null);
  }, []);
  React.useEffect(() => {
    const read = () => { try {
      const raw = JSON.parse(localStorage.getItem('atomy_recent_viewed') || '[]');
      setEntries(raw.map(x => (typeof x === 'object' && x) ? x : { id: x, d: '' }));
    } catch (e) { setEntries([]); } };
    read();
    window.addEventListener('atomy-recent-updated', read);
    window.addEventListener('storage', read);
    return () => { window.removeEventListener('atomy-recent-updated', read); window.removeEventListener('storage', read); };
  }, []);
  const openProduct = (prod) => { setOpen(false); if (typeof window.__atomyOpenProduct === 'function') window.__atomyOpenProduct(prod); };
  const removeId = (id) => {
    try {
      const raw = JSON.parse(localStorage.getItem('atomy_recent_viewed') || '[]');
      const next = raw.filter(x => (typeof x === 'object' ? x.id : x) !== id);
      localStorage.setItem('atomy_recent_viewed', JSON.stringify(next));
      window.dispatchEvent(new Event('atomy-recent-updated'));
    } catch (e) {}
  };
  const clearAll = () => { try { localStorage.removeItem('atomy_recent_viewed'); window.dispatchEvent(new Event('atomy-recent-updated')); } catch (e) {} };

  const groups = [];
  entries.forEach(e => {
    const prod = SHOP_PRODUCTS.find(p => p.id === e.id);
    if (!prod) return;
    const key = e.d || '이전';
    let g = groups.find(x => x.d === key);
    if (!g) { g = { d: key, items: [] }; groups.push(g); }
    g.items.push(prod);
  });
  const count = groups.reduce((n, g) => n + g.items.length, 0);

  const trigger = (
    <button onClick={() => setOpen(true)} aria-label="최근 본 상품" style={{
      position: host ? 'absolute' : 'fixed', right: 0, top: '42%', zIndex: 58,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
      padding: '10px 8px', background: '#fff', cursor: 'pointer', fontFamily: 'inherit',
      border: '1px solid rgba(11,31,58,0.1)', borderRight: 'none', borderRadius: '12px 0 0 12px',
      boxShadow: '-5px 4px 16px rgba(11,31,58,0.14)', color: '#0B1F3A',
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></svg>
      <span style={{ writingMode: 'vertical-rl', fontSize: 11, fontWeight: 800, letterSpacing: '0.06em' }}>최근 본</span>
      {count > 0 && <span style={{ minWidth: 16, height: 16, padding: '0 4px', borderRadius: 999, background: '#00B6F0', color: '#fff', fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>{count}</span>}
    </button>
  );

  const panel = (
    <div onClick={() => setOpen(false)} style={{ position: host ? 'absolute' : 'fixed', inset: 0, zIndex: 90, background: 'rgba(11,31,58,0.45)', display: 'flex', justifyContent: 'flex-end', animation: 'rvFade 0.2s ease' }}>
      <style>{'@keyframes rvFade{from{opacity:0}to{opacity:1}}@keyframes rvSlide{from{transform:translateX(100%)}to{transform:translateX(0)}}.rv-scroll::-webkit-scrollbar{width:0}'}</style>
      <div onClick={(e) => e.stopPropagation()} style={{ width: isMobile ? '86%' : 360, maxWidth: 360, height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', animation: 'rvSlide 0.3s cubic-bezier(.2,.7,.3,1)', fontFamily: '"Pretendard","Noto Sans KR",system-ui,sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '1px solid rgba(11,31,58,0.08)' }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 900, color: '#0B1F3A', letterSpacing: '-0.02em' }}>최근 본</h3>
          <button onClick={() => setOpen(false)} aria-label="닫기" style={{ width: 32, height: 32, border: 'none', background: '#F0F4FA', borderRadius: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0B1F3A' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
        <div className="rv-scroll" style={{ flex: 1, overflowY: 'auto', padding: count ? '6px 0 20px' : 0 }}>
          {count === 0 && (
            <div style={{ height: '100%', minHeight: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, color: '#8A97AD' }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 16 14" /></svg>
              <span style={{ fontSize: 13, fontWeight: 600 }}>최근 본 상품이 없습니다.</span>
            </div>
          )}
          {groups.map(g => (
            <div key={g.d}>
              <div style={{ padding: '14px 18px 8px', fontSize: 12, fontWeight: 800, color: '#8A97AD' }}>{g.d}</div>
              {g.items.map(prod => {
                const img = (prod.images && prod.images[0]) || prod.image;
                return (
                  <div key={prod.id} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 18px' }}>
                    <button onClick={() => openProduct(prod)} style={{ flex: '0 0 auto', width: 64, height: 64, borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(11,31,58,0.08)', background: '#F4F6FA', padding: 0, cursor: 'pointer' }}>
                      <img src={img} alt={prod.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={(e) => { e.currentTarget.style.opacity = 0; }} />
                    </button>
                    <button onClick={() => openProduct(prod)} style={{ flex: 1, minWidth: 0, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                      <div style={{ fontSize: 12.5, fontWeight: 600, color: '#2B3A52', lineHeight: 1.35, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{prod.name}</div>
                      <div style={{ marginTop: 4, display: 'flex', alignItems: 'baseline', gap: 6 }}>
                        <span style={{ fontSize: 14, fontWeight: 900, color: '#0B1F3A' }}>{prod.price ? prod.price.toLocaleString() : ''}<span style={{ fontSize: 11, fontWeight: 700 }}>원</span></span>
                        {prod.pv ? <span style={{ fontSize: 11.5, fontWeight: 700, color: '#00A0D2' }}>{prod.pv.toLocaleString()}PV</span> : null}
                      </div>
                    </button>
                    <button onClick={() => removeId(prod.id)} aria-label="삭제" style={{ flex: '0 0 auto', width: 26, height: 26, border: 'none', background: 'none', cursor: 'pointer', color: '#B4BECC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        {count > 0 && (
          <div style={{ padding: '12px 18px', borderTop: '1px solid rgba(11,31,58,0.08)' }}>
            <button onClick={clearAll} style={{ width: '100%', padding: '11px 0', borderRadius: 10, border: '1px solid rgba(11,31,58,0.15)', background: '#fff', color: '#6B7A90', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>전체 삭제</button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <span ref={anchorRef} aria-hidden="true" style={{ display: 'none' }} />
      {host ? ReactDOM.createPortal(trigger, host) : trigger}
      {open && (host ? ReactDOM.createPortal(panel, host) : panel)}
    </React.Fragment>
  );
}

function ShopFooter({ isMobile }) {
  return (
    <React.Fragment>
    <RecentViewedPanel isMobile={isMobile} />
    <footer style={{
      background: '#0B1F3A', color: '#fff',
      padding: isMobile ? '32px 20px' : '40px 36px',
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
          <div style={{ color: 'rgba(255,255,255,0.45)', marginTop: 6, fontSize: isMobile ? 10 : 11 }}>
            고객행복센터 1544-8580 · 운영시간 평일 09:00 ~ 18:00
          </div>
        </div>
      </div>
    </footer>
    </React.Fragment>
  );
}

Object.assign(window, { AtomyShop, ProductCard, SHOP_PRODUCTS });
