// Data.jsx — shared content for the profile + shorts feed

const PROFILE = {
  name: '몽상 박한길',
  nameEn: 'Park Han-gil',
  rank: 'CHAIRMAN',
  rankKr: '대한민국 가장 존경받는 CEO',
  location: 'GONGJU, KR',
  bio: '소비자가 주인이 되는 네트워크 마케팅. 절대품질 절대가격으로, 소비자가 100세까지 행복해야 회사도 행복합니다.',
  videoPoster: 'https://sspark.genspark.ai/cfimages?u1=zDP0VccAgutqe2xSuNJTaje5dNzaaXO2Ll8w7gqCb%2B5AJz%2BKjHAmelFMmL%2FekN3QKghON2rG4tav55%2F%2FlNJ6WfOB8PP5RROzzubC%2FyMizX%2FGew%3D%3D&u2=%2BTJBtfsiQzYLJi3R&width=2560',
  duration: { cur: '01:24', total: '04:15' },
  progress: 0.32,
};

// 상단 프로필 배너 — 영상 / 이미지 혼합 슬라이드 (좌우 스와이프)
// 영상은 thumb(포스터)와 video(재생용 mp4) 두 개를 가짐

// 풀(pool) — 박한길 회장(몽상) 포트레이트 4장 + 샘플 mp4 2개
const _mediaPool = {
  portraits: [
    // 1. 회장님 정면 포트레이트 (Global Atomy 공식 자료 ─ 창업자 소개)
    'https://sspark.genspark.ai/cfimages?u1=zDP0VccAgutqe2xSuNJTaje5dNzaaXO2Ll8w7gqCb%2B5AJz%2BKjHAmelFMmL%2FekN3QKghON2rG4tav55%2F%2FlNJ6WfOB8PP5RROzzubC%2FyMizX%2FGew%3D%3D&u2=%2BTJBtfsiQzYLJi3R&width=2560',
    // 2. 강연 무대 (Chairman Park Balanced Life Lecture)
    'https://sspark.genspark.ai/cfimages?u1=oQW7ruhl1H0z9nakG6rwu1ZvnMmsq0N3gvwDQx3glS%2FwBkCUiKcpFJKf5djcCwzB6lqiZj9BU%2FbSiooO0YAioMh8PWA%3D&u2=dOGqx2TtOzUnT4NF&width=2560',
    // 3. 인터뷰 컷 (포춘 코리아 커버 / Forbes Au)
    'https://sspark.genspark.ai/cfimages?u1=AxEENfXELIzk1unniTwIhUFyAisxnmQOIFsf0Kf%2BeyPvsN%2FmBN67aWZUb2Xk7vveBCsgp9TYd08HvMiTayEeK1%2B7yfr6%2F%2Fz0YmZvRJ%2BanzyqqEhE&u2=ZaA33%2FrQcmRan0xm&width=2560',
    // 4. 한국경제 인터뷰 / 기부 활동
    'https://sspark.genspark.ai/cfimages?u1=xNOe9qIQIt2FaUap984oSSI4eZcqTzbV2sjQrsTDvrckP1adL1JfjW8Vwc4o0pLfIRFQtR7btM1UnMwXRZR43HaJtpBu3Es%3D&u2=FCt9TaQxHwheAd1H&width=2560',
  ],
  videos: [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  ],
  positions: ['center 20%', 'center 25%', 'center 22%', 'center 25%'],
  captions: [
    '회장 메시지 — 절대품질 절대가격', '몽상의 강연 · 균형 잡힌 삶', '포춘코리아 커버 인터뷰', '나눔 경영 — 한국경제 인터뷰',
    '글로벌 비전 발표', '본사 사옥 투어', '직원과의 만남', '신제품 발표회',
    '브랜드 스토리 — 창업기', '국제 마스터 컨벤션', '박한길의 한 마디', '아침 회의 풍경',
  ],
  videoDurations: [
    { duration: '04:15', cur: '01:24', progress: 0.32 },
    { duration: '02:48', cur: '00:32', progress: 0.19 },
    { duration: '03:02', cur: '01:05', progress: 0.35 },
    { duration: '01:34', cur: '00:42', progress: 0.44 },
    { duration: '05:20', cur: '02:10', progress: 0.40 },
  ],
};

// 20개 슬라이드 — 영상 40% · 이미지 60% 비율로 자연스럽게 섞기
const PROFILE_MEDIA = Array.from({ length: 20 }, (_, i) => {
  const isVideo = i % 3 === 0; // 0,3,6,9,12,15,18 → 7개 영상
  const pIdx = i % _mediaPool.portraits.length;
  const posIdx = i % _mediaPool.positions.length;
  const capIdx = i % _mediaPool.captions.length;
  const base = {
    id: `m${i + 1}`,
    src: _mediaPool.portraits[pIdx],
    objectPosition: _mediaPool.positions[posIdx],
    caption: _mediaPool.captions[capIdx],
  };
  if (isVideo) {
    const vIdx = Math.floor(i / 3) % _mediaPool.videos.length;
    const dIdx = Math.floor(i / 3) % _mediaPool.videoDurations.length;
    return {
      ...base,
      type: 'video',
      video: _mediaPool.videos[vIdx],
      ..._mediaPool.videoDurations[dIdx],
    };
  }
  return { ...base, type: 'image' };
});

const SNS = [
  { key: 'ig', label: 'Instagram' },
  { key: 'yt', label: 'YouTube' },
  { key: 'fb', label: 'Facebook' },
  { key: 'bl', label: 'Blog' },
];

// 애터미 제품 이미지 풀 — 각 숏폼의 시각 기반
const _productPool = [
  { image: 'https://sspark.genspark.ai/cfimages?u1=Jhjz0IURcZDh0l9RVxrz5xQqr3%2FSDUj8E8jH1%2B1ih%2F8l%2FZbZtW%2BIevSEGJcN3cygYdcnKTv8ZsEA4CiuR55cJ304eQanPED1gL4hrukR4xE18jq%2FjnjW5DkeJTztJBAg0sIb%2BfDfWALihsLJjxRKDU9PyFzCmWIgOJ4%3D&u2=9YibfyLhMrnobOkc&width=2560', product: '헤모힘', hue: 212, tone: 'dark' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=IQjkAa5se9agxZBBx7OVOoRcth6V%2FJuNyVypZsFCwPiU2g2M0cezTjkFN5eTrUsMs5EheusuU%2BV63YjnlkAWcdAclWkzDh%2BjZrl0&u2=lxhAaJQeBn2UNFE4&width=2560', product: '아델리카 립 루즈', hue: 28, tone: 'warm' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=Rn2pITM1ciddSI%2BpSOvVizCf1%2BCqwsqH%2Bf65BRWSiGbV4QRpFMwMGFwyQdVbeVqh9UUnPDYFJsBGyWrWQ5RMexvBPQHhzNNeiejPZpwlO%2BEpOxtGAPp9notLtYc%3D&u2=nGqZFgzdWVhXAUkE&width=2560', product: '앱솔루트 스킨케어', hue: 220, tone: 'dark' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=fu5EJe3E2%2BSP2bbwl9NPqFp2wlDohSLLwmK02W3o7if%2ByKZrbgwsubitnHMwheo4oFlJni0qIHgYhsysH%2Bcednm%2Bdtl3gEGmcbzXXL5wrAV%2Bwbx4ON%2FWxcM%3D&u2=tZkSO4PBVycGF%2Fpv&width=2560', product: '앱솔루트 셀액티브', hue: 340, tone: 'light' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=QvZ9ii2hO0i5lHxvPOIq4OQ16a9gfm3rlTYEjdaOxXJGpMKUNrEeFHqkByDkl8InXXTtiFcgTDdlJt6qZIiv5KEofarp803xdVJhhtGH6vH2gBEgduTMqNY%3D&u2=Vyr4XhK21NGFbsTi&width=2560', product: '허벌 샴푸', hue: 200, tone: 'dark' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=i20G9%2FKGucTwB64dMxPytOpoga%2BS9GUbwXyty5AWBdlAIoL6DG%2FYlQTtt4z2eGfTKJBLc2c%2B%2FNsFHfL3TbEtmZTwjHqSBVDPlrf6Myw0mih7gBQq6qlEySM%3D&u2=bmBXFRw%2F0kbpbhs9&width=2560', product: '앱솔루트 앰플', hue: 160, tone: 'warm' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=SBzeFmPvTbMDjpQRjsQdVnLUNFqaxOt2B6vcATSQuR2jacixRO2NAUn7GitZGD2oO2uhkROY9XH6dbNE5HRDG%2Fl1aH4nwzlb5%2FhHrNliL36WEZbOgGSbN0Yqa68%3D&u2=DrJ%2FrnKZLkeLnpWO&width=2560', product: '립 트리트먼트', hue: 250, tone: 'dark' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=faW9CjhdNmByAniJC5snrbGLjQkwnXsBINWZCkxdXetpmADDkBpLCok87AyowIOdJ%2BzScZOBQGeBLfpBgkSDtG3OlGqOt8VOF3fS&u2=8saTwypGbkcRjhBR&width=2560', product: '프로폴리스 치약', hue: 12, tone: 'warm' },
  { image: 'https://sspark.genspark.ai/cfimages?u1=UUBF5bFcidwNEXywSwjkHsC%2Br3Cnf96nyxr8U7a1Vdby33vJAcLXNU%2F2YHc02fq2cbzastoeQfNVLRRdqPMkikJIPtxq7Sg9DSlMyi3ODpTwZN%2F9l1L4&u2=HCNE5uuS6fKLgl4C&width=2560', product: '앱솔루트 리셋 밤', hue: 290, tone: 'dark' },
];

// 50개 숏폼 제목 풀 — 순환 배치
const _shortsTitles = [
  '아침 루틴, 헤모힘 한 잔',       '가을 메이크업 튜토리얼',        '다이아몬드 마스터 인터뷰',
  '앱솔루트 셀 크림 언박싱',       '주말 세미나 하이라이트',        '신제품 리뷰 — 스킨케어',
  '내 고객님 이야기',              '라이브 방송 다시보기',          '뷰티 Q&A Ep.03',
  '애터미 데일리 스킨케어',        '뷰티 팁 · 5분 메이크업',        '성공 스토리 인터뷰',
  '립 메이크업 완벽 가이드',       '건강한 아침 만들기',            '치약 사용 후기',
  '3단계 세안 루틴',               '샴푸 10일 챌린지',              '앰플 집중 관리법',
  '저녁 스킨케어 루틴',            '제품 활용 꿀팁',                '파트너 미팅 브이로그',
  '다이아몬드 승급 비결',          '20대 추천 스킨케어',            '30대 안티에이징',
  '40대 관리 포인트',              '민감성 피부 케어',              '남자 피부 관리',
  '데일리 립 컬러 추천',           '실내 보습 관리',                '면역력 챙기는 법',
  '고객 후기 모음 Ep.01',          '고객 후기 모음 Ep.02',          '제품 비교 리뷰',
  '정품 구매 가이드',              '부작용 없는 제품 고르기',       '성분 파헤치기',
  '촉촉한 겨울 피부 만들기',       '환절기 피부 관리',              '여름 산뜻 케어',
  '봄 꽃가루 대비법',              '건조한 두피 관리',              '탈모 예방 루틴',
  '영업 노하우 공유',              '오프라인 미팅 팁',              '온라인 마케팅 전략',
  '초보 파트너를 위한 가이드',     '월 매출 1000만원 돌파',         '마스터십 준비 과정',
  '팀 빌딩 워크숍',                '연말 어워즈 현장',
];

// 제목 키워드 기반 플래그 분류
// 공식: 신제품·언박싱·정품·성분·세미나·어워즈·기업 콘텐츠 등 본사·브랜드 관점
// 개인: 개인 루틴·후기·노하우·일상·고객 사연 등 마스터 개인 관점
const _officialKeywords = [
  '신제품', '리뷰', '언박싱', '정품', '성분', '비교', '세미나',
  '하이라이트', '인터뷰', '어워즈', '워크숍', '브랜드', '마스터십',
];
const _flagFor = (title) => {
  return _officialKeywords.some(k => title.includes(k)) ? '공식' : '개인';
};

// 카테고리 분류 — 탭 필터(전체/제품/기업/비즈니스/라이프)와 매칭
const _categoryFor = (title) => {
  // 기업: 본사·세미나·어워즈·인터뷰·브랜드 관련
  if (/세미나|어워즈|인터뷰|브랜드|워크숍|연말|승급|마스터십/.test(title)) return 'company';
  // 비즈니스: 영업·매출·파트너·마케팅·미팅·팀 관련
  if (/영업|매출|파트너|마케팅|미팅|팀|초보|가이드(?!.*립)|꿀팁|노하우|비결|온라인|오프라인/.test(title)) return 'business';
  // 제품: 제품 리뷰·언박싱·성분·비교·구매 관련
  if (/제품|리뷰|언박싱|성분|비교|정품|부작용|크림|샴푸|치약|앰플|립|메이크업|스킨케어|뷰티|면역|헤모힘|관리|루틴|세안|보습|두피|탈모|피부/.test(title)) return 'product';
  // 라이프: 일상·계절·후기·고객 사연·라이프스타일
  return 'life';
};

// 특정 숏폼에 실제 영상 매핑 (id → youtubeId 또는 videoUrl)
// 사용자가 실제 애터미 공식 영상으로 교체 가능
const _shortsVideoMap = {
  // id: 1 — '아침 루틴, 헤모힘 한 잔' → 사용자 제공 mp4 + 헤모힘 샷 광고
  1: {
    videoUrl: 'https://www.genspark.ai/api/files/s/mb60FN8q',
    productAd: {
      image: 'https://www.genspark.ai/api/files/s/jY5Iva2i',
      name: '애터미 헤모힘 샷',
      label: '이 제품이 궁금하시다면?',
      price: '24,900원',
      url: '#',
    },
  },
};

// 50개 숏폼 — 제품 이미지 순환 + 다양한 통계값 + 플래그
const SHORTS = Array.from({ length: 50 }, (_, i) => {
  const product = _productPool[i % _productPool.length];
  const title = _shortsTitles[i % _shortsTitles.length];
  // views / likes는 분포를 다양하게 보이도록 의사난수로 계산
  const viewsBase = [12.4, 48.1, 22.0, 7.8, 31.5, 18.2, 9.1, 54.7, 14.6, 26.3, 41.8, 6.2, 73.5, 19.4, 38.2];
  const likesBase = [1.2, 5.8, 2.9, 0.92, 3.4, 2.1, 0.88, 6.3, 1.7, 2.7, 4.9, 0.7, 8.1, 2.0, 4.3];
  const durations = ['0:45', '1:12', '3:20', '0:58', '2:04', '1:30', '2:45', '5:10', '1:48', '0:52', '1:35', '2:22', '4:08', '1:05', '3:42'];
  const v = viewsBase[i % viewsBase.length];
  const l = likesBase[i % likesBase.length];
  const id = i + 1;
  const videoMap = _shortsVideoMap[id] || {};
  return {
    id,
    title,
    views: v >= 1 ? `${v.toFixed(1)}K` : `${Math.round(v * 1000)}`,
    likes: l >= 1 ? `${l.toFixed(1)}K` : `${Math.round(l * 1000)}`,
    duration: durations[i % durations.length],
    hue: product.hue,
    tone: product.tone,
    image: product.image,
    product: product.product,
    flag: _flagFor(title),       // '개인' or '공식'
    category: _categoryFor(title), // 'product' | 'company' | 'business' | 'life'
    ...videoMap,                 // youtubeId 또는 videoUrl
  };
});

Object.assign(window, { PROFILE, SNS, SHORTS, PROFILE_MEDIA });
