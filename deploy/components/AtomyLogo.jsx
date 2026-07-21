// AtomyLogo.jsx — 첨부 이미지(atom美 + ATOMY)를 그대로 사용
// 사용자 제공 이미지 URL을 그대로 <img>로 노출

// 새 로고 — atom美 + ATOMY 캡션 일체형 (흰 배경, 사용자 제공)
const ATOMY_LOGO_URL = 'https://www.genspark.ai/api/files/s/zNx3wt9Q';

function AtomyLogo({ size = 64, showCaption = true, alt = 'atom美 ATOMY' }) {
  // 새 이미지의 비율: 약 880 × 460 (1.91 : 1) — 가로로 길고 한 줄 워드마크 + ATOMY 캡션
  const aspect = 880 / 460;

  return (
    <img
      src={ATOMY_LOGO_URL}
      alt={alt}
      style={{
        width: size * aspect,
        height: size,
        display: 'block',
        objectFit: 'contain',
      }}
    />
  );
}

Object.assign(window, { AtomyLogo, ATOMY_LOGO_URL });
