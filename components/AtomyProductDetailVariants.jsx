// AtomyProductDetailVariants.jsx
// 3개의 서로 다른 제품 상세 페이지 컴포넌트
// - HemohimDetail        (id 000168) : 정통 의약품/기능성 스타일 — 임상·성분·차분한 네이비
// - HerbalShampooDetail  (id 000605) : 보태니컬 스토리텔링 — 자연/그린/생동감
// - LipTreatmentDetail   (id 000460) : 비주얼 룩북/이모셔널 — 핑크/광택/캔디

const fmtKR = (n) => Number(n).toLocaleString('ko-KR');

// =============================================================
// 공용 — 닫기 헤더 + 가격 푸터
// =============================================================
function VariantTopBar({ onClose, isMobile, accent = '#0B1F3A', kicker, label }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 10,
      height: isMobile ? 48 : 56,
      background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(14px)',
      borderBottom: `1px solid rgba(11,31,58,0.08)`,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: isMobile ? '0 14px' : '0 24px',
    }}>
      <button onClick={onClose} style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'transparent', border: 'none', cursor: 'pointer',
        color: '#0B1F3A', fontSize: isMobile ? 12.5 : 13.5, fontWeight: 700,
        letterSpacing: '-0.01em', padding: '6px 8px', borderRadius: 6,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A"
             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        뒤로
      </button>
      <div style={{
        fontSize: isMobile ? 10.5 : 11.5, fontWeight: 800,
        letterSpacing: '0.16em', color: accent,
      }}>{kicker}</div>
      <div style={{ width: 50 }} />
    </div>
  );
}

function VariantPurchaseFooter({ price, pv, qty, setQty, isMobile, accent, label }) {
  // S26 Ultra의 AtomyProductDetail과 동일한 3분할 CTA 구성:
  // [선물하기 아이콘] [장바구니(다크그레이)] [바로구매(시안)]
  return (
    <div style={{
      position: 'sticky', bottom: 0, zIndex: 10,
      background: '#fff', borderTop: '1px solid rgba(11,31,58,0.08)',
      padding: isMobile ? '10px 12px' : '12px 16px',
      boxShadow: '0 -4px 20px rgba(11,31,58,0.04)',
    }}>
      {/* 수량 + 합계 PV/가격 */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: isMobile ? 10 : 14,
        marginBottom: isMobile ? 10 : 12,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          border: '1px solid rgba(11,31,58,0.15)', borderRadius: 8, overflow: 'hidden',
        }}>
          <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{
            width: 30, height: 32, border: 'none', background: '#fff', cursor: 'pointer',
            color: '#0B1F3A', fontSize: 17, fontWeight: 700,
          }}>−</button>
          <div style={{
            minWidth: 30, textAlign: 'center', fontSize: 13, fontWeight: 800,
            fontVariantNumeric: 'tabular-nums',
          }}>{qty}</div>
          <button onClick={() => setQty(q => q + 1)} style={{
            width: 30, height: 32, border: 'none', background: '#fff', cursor: 'pointer',
            color: '#0B1F3A', fontSize: 17, fontWeight: 700,
          }}>+</button>
        </div>
        <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
          <span style={{ fontSize: 10.5, color: '#6B7A90', fontWeight: 700, marginRight: 6 }}>
            PV {fmtKR(pv * qty)}
          </span>
          <span style={{
            fontSize: isMobile ? 15 : 17, fontWeight: 900,
            letterSpacing: '-0.02em', color: '#0B1F3A',
          }}>{fmtKR(price * qty)}원</span>
        </div>
      </div>

      {/* 3분할 CTA — 선물하기 / 장바구니 / 바로구매 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '44px 1fr 1.4fr',
        gap: 8,
      }}>
        {/* 선물하기 */}
        <button aria-label="선물하기" style={{
          padding: 0, borderRadius: 8,
          background: '#fff', border: '1.5px solid #00B6F0',
          color: '#00B6F0', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00B6F0"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
          </svg>
        </button>
        {/* 장바구니 */}
        <button style={{
          padding: '12px', borderRadius: 8,
          background: '#2E3338', border: 'none',
          color: '#fff', fontSize: 13.5, fontWeight: 800,
          letterSpacing: '-0.01em', cursor: 'pointer',
        }}>
          장바구니
        </button>
        {/* 바로구매 */}
        <button
          className="cta-pulse"
          style={{
            padding: '12px', borderRadius: 8,
            background: '#00B6F0',
            border: 'none', color: '#fff', fontSize: 14, fontWeight: 800,
            letterSpacing: '-0.01em', cursor: 'pointer',
            boxShadow: '0 6px 18px rgba(0,182,240,0.32)',
            transition: 'transform 0.18s, box-shadow 0.18s',
            ['--cta-pulse-color']: 'rgba(0,182,240,0.55)',
          }}
        >
          바로구매
        </button>
      </div>
    </div>
  );
}

// =============================================================
// 1. 헤모힘 (000168) — 정통 의약품/기능성
// =============================================================
function HemohimDetail({ product, isMobile, onClose }) {
  const p = product;
  const [qty, setQty] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState('feature');
  const accent = '#0B2D58';

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#fff', color: '#0B1F3A', minHeight: '100%',
    }}>
      <VariantTopBar onClose={onClose} isMobile={isMobile} accent={accent} kicker="HEMOHIM · 듀얼 기능성" />

      {/* 히어로 — 좌: 보틀 / 우: 메디컬 인포 */}
      <section style={{
        background: 'linear-gradient(180deg, #F4F8FE 0%, #fff 100%)',
        padding: isMobile ? '20px 18px 28px' : '40px 36px 60px',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.05fr 1fr',
          gap: isMobile ? 20 : 48,
          alignItems: 'center',
        }}>
          {/* 보틀 — 정중앙, 그림자 */}
          <div style={{
            position: 'relative',
            aspectRatio: '1 / 1',
            background: 'radial-gradient(circle at 50% 60%, #fff 0%, #E9EFF7 70%, #D6DEEC 100%)',
            borderRadius: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '0 30px 60px -20px rgba(11,45,88,0.25)',
          }}>
            <img src={p.image} alt={p.name} style={{
              width: '70%', height: '85%', objectFit: 'contain',
              filter: 'drop-shadow(0 30px 30px rgba(11,45,88,0.3))',
            }} />
            {/* 인증 라벨 */}
            <div style={{
              position: 'absolute', top: 16, left: 16,
              display: 'flex', flexDirection: 'column', gap: 6,
            }}>
              {['KFDA', '특허', 'GMP'].map(b => (
                <div key={b} style={{
                  padding: '4px 10px', borderRadius: 999,
                  background: 'rgba(11,45,88,0.92)', color: '#fff',
                  fontSize: 9.5, fontWeight: 800, letterSpacing: '0.1em',
                }}>{b}</div>
              ))}
            </div>
            <div style={{
              position: 'absolute', bottom: 16, right: 16,
              padding: '6px 12px', borderRadius: 999,
              background: '#fff',
              border: '1.5px solid #0B2D58',
              fontSize: 10, fontWeight: 800, letterSpacing: '0.08em',
              color: '#0B2D58',
            }}>듀얼 기능성</div>
          </div>

          {/* 메디컬 인포 */}
          <div>
            <div style={{
              display: 'inline-block',
              padding: '4px 10px', borderRadius: 4,
              background: '#0B2D58', color: '#fff',
              fontSize: 10, fontWeight: 800, letterSpacing: '0.14em',
              marginBottom: 12,
            }}>HEALTH FUNCTIONAL FOOD</div>
            <h1 style={{
              margin: 0, fontSize: isMobile ? 26 : 38, fontWeight: 900,
              letterSpacing: '-0.03em', lineHeight: 1.15, color: '#0B1F3A',
            }}>{p.name}</h1>
            <p style={{
              margin: '12px 0 20px', fontSize: isMobile ? 13.5 : 15,
              color: '#2B3A52', lineHeight: 1.7, fontWeight: 500,
            }}>면역기능 개선 · 피로개선의 두 가지 기능성을 인정받은 듀얼 헬스케어. 한국식품연구원 30년 연구의 결정체.</p>

            {/* 기능성 표 — 메디컬 */}
            <div style={{
              border: '1px solid rgba(11,45,88,0.15)', borderRadius: 12, overflow: 'hidden',
              marginBottom: 20,
            }}>
              {[
                { k: '주요 기능성', v: '면역기능 개선 · 피로개선' },
                { k: '주성분', v: '당귀추출물·천궁·작약·홍삼' },
                { k: '복용 방법', v: '1일 1포 (20mL), 식사 무관' },
                { k: '용량', v: '20mL × 60포' },
                { k: '인증', v: '식약처 건강기능식품 GRAS' },
              ].map((row, i) => (
                <div key={row.k} style={{
                  display: 'grid', gridTemplateColumns: '110px 1fr',
                  borderBottom: i < 4 ? '1px solid rgba(11,45,88,0.08)' : 'none',
                  fontSize: isMobile ? 12 : 12.5,
                }}>
                  <div style={{
                    background: '#F4F8FE', padding: '10px 14px',
                    fontWeight: 800, color: '#0B2D58',
                  }}>{row.k}</div>
                  <div style={{ padding: '10px 14px', fontWeight: 600, color: '#2B3A52' }}>{row.v}</div>
                </div>
              ))}
            </div>

            {/* 별점 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'inline-flex', gap: 1 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24"
                       fill={i <= Math.round(p.rating) ? '#FFB800' : 'rgba(11,31,58,0.15)'}>
                    <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 13, fontWeight: 800, color: '#0B1F3A' }}>{p.rating}</span>
              <span style={{ fontSize: 12, color: '#6B7A90', fontWeight: 600 }}>({fmtKR(p.reviews)} 리뷰)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 임상 데이터 — 그래프 카드 */}
      <section style={{
        padding: isMobile ? '32px 18px' : '60px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{
            fontSize: 10.5, fontWeight: 800, letterSpacing: '0.18em',
            color: '#0B2D58', marginBottom: 8,
          }}>CLINICAL EVIDENCE</div>
          <h2 style={{
            margin: 0, fontSize: isMobile ? 22 : 32, fontWeight: 900,
            letterSpacing: '-0.025em', lineHeight: 1.2, color: '#0B1F3A',
            marginBottom: isMobile ? 24 : 36,
          }}>30년 연구가 증명하는<br />
            <span style={{ color: '#0B2D58' }}>면역과 활력</span>의 변화</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 14 : 20,
          }}>
            {[
              { metric: 'NK 세포 활성도', from: 100, to: 168, unit: '%', label: '8주 후' },
              { metric: '피로 점수 감소', from: 100, to: 42, unit: '%', label: '4주 후', invert: true },
              { metric: '항산화 지표', from: 100, to: 154, unit: '%', label: '12주 후' },
            ].map(c => {
              const pct = c.invert ? c.to : Math.round((c.to / c.from) * 100);
              const barFill = c.invert ? (100 - c.to) : Math.min(100, c.to - 100);
              return (
                <div key={c.metric} style={{
                  background: '#F4F8FE', padding: isMobile ? 18 : 24,
                  borderRadius: 14,
                  border: '1px solid rgba(11,45,88,0.06)',
                }}>
                  <div style={{
                    fontSize: 11.5, fontWeight: 800, color: '#6B7A90',
                    letterSpacing: '0.04em', marginBottom: 12,
                  }}>{c.metric.toUpperCase()}</div>
                  <div style={{
                    fontSize: isMobile ? 36 : 44, fontWeight: 900,
                    color: '#0B2D58', letterSpacing: '-0.03em', lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}>{c.invert ? '−' : '+'}{Math.abs(c.invert ? (100 - c.to) : (c.to - 100))}{c.unit}</div>
                  <div style={{ fontSize: 11, color: '#6B7A90', fontWeight: 700, marginTop: 4 }}>{c.label}</div>
                  {/* 막대 그래프 */}
                  <div style={{
                    marginTop: 18, height: 6, background: '#E0E7F2',
                    borderRadius: 999, overflow: 'hidden',
                  }}>
                    <div style={{
                      height: '100%', width: `${Math.max(20, barFill)}%`,
                      background: 'linear-gradient(90deg, #0B2D58, #00B6F0)',
                      borderRadius: 999,
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
          <p style={{
            marginTop: 18, fontSize: 11, color: '#8A97AD', fontWeight: 600,
            lineHeight: 1.6, fontStyle: 'italic',
          }}>* 한국식품연구원, 2018. 자체 임상시험 결과로 개인차가 있을 수 있습니다.</p>
        </div>
      </section>

      {/* 탭 섹션 */}
      <section style={{
        background: '#F8FAFD', padding: isMobile ? '28px 0' : '56px 36px',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '0 18px' : 0 }}>
          <div style={{
            display: 'flex', gap: 0, borderBottom: '2px solid rgba(11,45,88,0.1)',
            marginBottom: isMobile ? 18 : 28,
          }}>
            {[
              { k: 'feature', l: '특징' },
              { k: 'ingredients', l: '주성분' },
              { k: 'who', l: '추천 대상' },
            ].map(t => (
              <button key={t.k} onClick={() => setActiveTab(t.k)} style={{
                padding: isMobile ? '12px 16px' : '14px 24px',
                background: 'transparent', border: 'none', cursor: 'pointer',
                fontSize: isMobile ? 13 : 14, fontWeight: 800,
                color: activeTab === t.k ? '#0B2D58' : '#8A97AD',
                borderBottom: activeTab === t.k ? '2px solid #0B2D58' : '2px solid transparent',
                marginBottom: -2,
                letterSpacing: '-0.01em',
              }}>{t.l}</button>
            ))}
          </div>

          {activeTab === 'feature' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? 12 : 16,
            }}>
              {[
                { ic: '🛡️', t: '면역기능 개선', d: 'NK세포 활성, 사이토카인 IL-2 분비 촉진으로 면역 시스템을 균형있게 유지합니다.' },
                { ic: '⚡', t: '피로개선', d: '항산화 작용으로 활성산소를 제거, 신체 활력과 회복력을 높여줍니다.' },
                { ic: '🌿', t: '식물성 4종 복합', d: '당귀·천궁·작약·홍삼 4종이 조화롭게 작용하는 한국식품연구원 특허 조성물.' },
                { ic: '⏱️', t: '간편한 1일 1포', d: '식사와 무관하게 하루 한 포(20mL), 어디서든 휴대 가능한 스틱 파우치.' },
              ].map(f => (
                <div key={f.t} style={{
                  background: '#fff', borderRadius: 12, padding: isMobile ? 16 : 22,
                  border: '1px solid rgba(11,45,88,0.08)',
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                }}>
                  <div style={{ fontSize: 28, flexShrink: 0 }}>{f.ic}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#0B1F3A', marginBottom: 4 }}>{f.t}</div>
                    <div style={{ fontSize: 12, color: '#6B7A90', lineHeight: 1.6 }}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div style={{ background: '#fff', padding: isMobile ? 18 : 28, borderRadius: 14 }}>
              {[
                { name: '당귀추출물', amt: '300mg', pct: 75 },
                { name: '천궁추출물', amt: '180mg', pct: 45 },
                { name: '작약추출물', amt: '120mg', pct: 30 },
                { name: '홍삼추출물', amt: '100mg', pct: 25 },
              ].map(ing => (
                <div key={ing.name} style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#0B1F3A' }}>{ing.name}</span>
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: '#0B2D58', fontVariantNumeric: 'tabular-nums' }}>{ing.amt}</span>
                  </div>
                  <div style={{ height: 8, background: '#E0E7F2', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', width: `${ing.pct}%`,
                      background: 'linear-gradient(90deg, #0B2D58, #2A6FDB)',
                      borderRadius: 999,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'who' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 12,
            }}>
              {['만성 피로를 자주 느끼시는 분', '면역력이 약해진 환절기', '잦은 야근·수험생', '운동 후 회복이 더딘 분', '40대 이후 활력 저하', '바쁜 생활로 영양 부족'].map(w => (
                <div key={w} style={{
                  background: '#fff', padding: '14px 16px', borderRadius: 10,
                  fontSize: 12.5, fontWeight: 700, color: '#2B3A52',
                  border: '1px solid rgba(11,45,88,0.08)',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: '#0B2D58' }} />
                  {w}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <VariantPurchaseFooter price={p.price} pv={p.pv} qty={qty} setQty={setQty}
        isMobile={isMobile} accent="#0B2D58" />
    </div>
  );
}

// =============================================================
// 2. 허벌 샴푸 (000605) — 보태니컬 스토리텔링
// =============================================================
function HerbalShampooDetail({ product, isMobile, onClose }) {
  const p = product;
  const [qty, setQty] = React.useState(1);
  const accent = '#1F8A5B';

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const ingredients = [
    { emoji: '🌿', name: '약쑥', desc: '진정 · 항염' },
    { emoji: '🍃', name: '녹차', desc: '항산화 · 두피 청결' },
    { emoji: '🌱', name: '어성초', desc: '비듬 · 가려움' },
    { emoji: '🌾', name: '감초', desc: '두피 보습' },
    { emoji: '🌸', name: '하수오', desc: '모발 강화' },
    { emoji: '🌳', name: '인삼', desc: '두피 활력' },
  ];

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#fff', color: '#0B1F3A', minHeight: '100%',
    }}>
      <VariantTopBar onClose={onClose} isMobile={isMobile} accent={accent} kicker="HERBAL · 자연주의 케어" />

      {/* 히어로 — 풀블리드 자연 배경 + 텍스트 오버레이 */}
      <section style={{
        position: 'relative',
        minHeight: isMobile ? 480 : 640,
        background: 'linear-gradient(135deg, #1F8A5B 0%, #2EA672 50%, #5BC68F 100%)',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        {/* SVG 잎사귀 패턴 */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}
             viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {Array.from({length: 30}).map((_, i) => {
            const x = (i * 73) % 800;
            const y = ((i * 37) + 50) % 600;
            const r = 60 + (i % 5) * 20;
            return (
              <ellipse key={i} cx={x} cy={y} rx={r * 0.4} ry={r}
                       transform={`rotate(${i * 23} ${x} ${y})`}
                       fill="#fff" opacity={0.6} />
            );
          })}
        </svg>

        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1180, margin: '0 auto', width: '100%',
          padding: isMobile ? '40px 22px' : '60px 36px',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 24 : 40,
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 999,
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff', fontSize: 10.5, fontWeight: 800, letterSpacing: '0.16em',
              marginBottom: 18,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: '#FFE45A' }} />
              SINCE 2009 · 누적 1,200만병
            </div>
            <h1 style={{
              margin: 0, fontSize: isMobile ? 32 : 56, fontWeight: 900,
              color: '#fff', letterSpacing: '-0.035em', lineHeight: 1.05,
              textShadow: '0 2px 20px rgba(0,0,0,0.15)',
            }}>
              자연이 빚은<br />
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#FFE45A' }}>여섯 가지 풀잎</em><br />
              두피의 균형
            </h1>
            <p style={{
              margin: '20px 0 28px', fontSize: isMobile ? 14 : 16,
              color: 'rgba(255,255,255,0.92)', lineHeight: 1.7, fontWeight: 500,
              maxWidth: 460,
            }}>
              실리콘·파라벤·인공색소 ZERO. 한방 6종이 두피 본연의 균형을 회복시켜
              자연 그대로의 깨끗함을 선물합니다.
            </p>

            {/* 어워드 라벨 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['EWG GREEN', 'VEGAN', 'NO 실리콘', 'NO 파라벤'].map(b => (
                <div key={b} style={{
                  padding: '6px 12px', borderRadius: 4,
                  background: 'rgba(0,0,0,0.25)',
                  color: '#fff', fontSize: 10.5, fontWeight: 800, letterSpacing: '0.08em',
                }}>{b}</div>
              ))}
            </div>
          </div>

          {/* 보틀 */}
          <div style={{
            position: 'relative',
            aspectRatio: isMobile ? '4 / 3' : '1 / 1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              position: 'absolute', inset: '8% 12%',
              background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)',
              filter: 'blur(20px)',
            }} />
            <img src={p.image} alt={p.name} style={{
              position: 'relative',
              maxWidth: '100%', maxHeight: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.3))',
            }} />
          </div>
        </div>
      </section>

      {/* 6가지 풀잎 — 그리드 */}
      <section style={{ padding: isMobile ? '40px 18px' : '80px 36px', background: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? 28 : 48 }}>
            <div style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.2em',
              color: '#1F8A5B', marginBottom: 10,
            }}>SIX HERBS</div>
            <h2 style={{
              margin: 0, fontSize: isMobile ? 26 : 40, fontWeight: 900,
              letterSpacing: '-0.03em', lineHeight: 1.2, color: '#0B1F3A',
            }}>두피를 살리는 <span style={{
              background: 'linear-gradient(135deg, #1F8A5B, #5BC68F)',
              WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>여섯 가지 한방</span></h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? 12 : 16,
          }}>
            {ingredients.map(ing => (
              <div key={ing.name} style={{
                background: 'linear-gradient(180deg, #F4FAF6 0%, #fff 100%)',
                border: '1px solid rgba(31,138,91,0.15)',
                borderRadius: 16, padding: isMobile ? 16 : 20,
                textAlign: 'center',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: 'default',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(31,138,91,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>{ing.emoji}</div>
                <div style={{
                  fontSize: isMobile ? 14 : 15, fontWeight: 900,
                  color: '#0B1F3A', marginBottom: 4, letterSpacing: '-0.01em',
                }}>{ing.name}</div>
                <div style={{ fontSize: 11.5, color: '#1F8A5B', fontWeight: 700 }}>{ing.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 사용법 — 3 step */}
      <section style={{
        padding: isMobile ? '40px 18px' : '80px 36px',
        background: '#F4FAF6',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h2 style={{
            margin: '0 0 32px', fontSize: isMobile ? 22 : 32, fontWeight: 900,
            letterSpacing: '-0.025em', color: '#0B1F3A', textAlign: 'center',
          }}>HOW TO USE</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? 16 : 24,
          }}>
            {[
              { n: '01', t: 'Wet & Apply', d: '머리를 충분히 적신 후 적당량을 손에 덜어 거품을 냅니다.' },
              { n: '02', t: 'Massage', d: '두피 위주로 손끝으로 부드럽게 마사지하듯 30초 이상 거품을 충분히 냅니다.' },
              { n: '03', t: 'Rinse Clean', d: '미온수로 잔여물 없이 깨끗이 헹궈주세요. 주 3회 사용 권장.' },
            ].map(s => (
              <div key={s.n} style={{
                background: '#fff', borderRadius: 18,
                padding: isMobile ? 22 : 28,
                position: 'relative',
              }}>
                <div style={{
                  fontSize: 64, fontWeight: 900,
                  color: 'rgba(31,138,91,0.12)',
                  letterSpacing: '-0.04em', lineHeight: 1,
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontStyle: 'italic',
                  marginBottom: -8,
                }}>{s.n}</div>
                <div style={{
                  fontSize: 16, fontWeight: 900, color: '#1F8A5B',
                  letterSpacing: '0.02em', marginBottom: 8,
                  fontFamily: '"Playfair Display", Georgia, serif',
                }}>{s.t}</div>
                <div style={{ fontSize: 13, color: '#2B3A52', lineHeight: 1.6 }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VariantPurchaseFooter price={p.price} pv={p.pv} qty={qty} setQty={setQty}
        isMobile={isMobile} accent="#1F8A5B" label="장바구니 담기" />
    </div>
  );
}

// =============================================================
// 3. 립 트리트먼트 (000460) — 비주얼 룩북
// =============================================================
function LipTreatmentDetail({ product, isMobile, onClose }) {
  const p = product;
  const [qty, setQty] = React.useState(1);
  const [activeShade, setActiveShade] = React.useState(0);
  const accent = '#E84E73';

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const shades = [
    { name: 'Original', color: '#F4D8D8', desc: '본연의 핑크' },
    { name: 'Berry', color: '#C04266', desc: '깊은 베리' },
    { name: 'Coral', color: '#FF7A6B', desc: '생기 코랄' },
    { name: 'Mauve', color: '#B97A8C', desc: '뮤트 모브' },
  ];
  const cur = shades[activeShade];

  return (
    <div style={{
      fontFamily: '"Pretendard", "Noto Sans KR", system-ui, sans-serif',
      background: '#FFF8F8', color: '#0B1F3A', minHeight: '100%',
    }}>
      <VariantTopBar onClose={onClose} isMobile={isMobile} accent={accent} kicker="LIP · 4 SHADES" />

      {/* 히어로 — 큰 그라디언트 입술 비주얼 */}
      <section style={{
        position: 'relative',
        background: `radial-gradient(ellipse at 50% 30%, ${cur.color}55 0%, #FFF8F8 70%)`,
        padding: isMobile ? '20px 18px 40px' : '36px 36px 80px',
        transition: 'background 0.5s ease',
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 20 : 60,
          alignItems: 'center',
        }}>
          {/* 좌측 — 입술 형상 SVG */}
          <div style={{
            position: 'relative',
            aspectRatio: '1 / 1',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg viewBox="0 0 400 400" style={{ width: '90%', height: '90%' }}>
              <defs>
                <radialGradient id="lipShine" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                  <stop offset="40%" stopColor={cur.color} stopOpacity="0.95" />
                  <stop offset="100%" stopColor={cur.color} stopOpacity="1" />
                </radialGradient>
              </defs>
              {/* 입술 — 풀스타일 */}
              <path d="M 80 200
                       C 80 150, 130 130, 160 145
                       C 180 130, 220 130, 240 145
                       C 270 130, 320 150, 320 200
                       C 320 250, 260 290, 200 290
                       C 140 290, 80 250, 80 200 Z"
                    fill="url(#lipShine)"
                    style={{ transition: 'fill 0.5s' }}
                    filter="drop-shadow(0 20px 40px rgba(232,78,115,0.3))" />
              {/* 하이라이트 */}
              <ellipse cx="170" cy="180" rx="30" ry="10" fill="#fff" opacity="0.5" />
              <ellipse cx="240" cy="180" rx="20" ry="8" fill="#fff" opacity="0.4" />
            </svg>

            {/* 보틀 */}
            <img src={p.image} alt={p.name} style={{
              position: 'absolute', bottom: 0, right: '5%',
              width: '35%', maxHeight: '60%', objectFit: 'contain',
              filter: 'drop-shadow(0 20px 30px rgba(232,78,115,0.4))',
              transform: 'rotate(8deg)',
            }} />
          </div>

          {/* 우측 — 텍스트 */}
          <div>
            <div style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: isMobile ? 14 : 16, fontStyle: 'italic',
              color: accent, fontWeight: 600, marginBottom: 12,
              letterSpacing: '0.04em',
            }}>The Daily Ritual</div>
            <h1 style={{
              margin: 0, fontSize: isMobile ? 36 : 64,
              fontWeight: 900, letterSpacing: '-0.04em',
              lineHeight: 0.95, color: '#0B1F3A',
              fontFamily: '"Playfair Display", Georgia, serif',
            }}>
              Kiss<br />
              <span style={{ color: accent, fontStyle: 'italic' }}>your lips</span><br />
              alive.
            </h1>
            <p style={{
              margin: '24px 0 32px', fontSize: isMobile ? 13.5 : 15,
              color: '#2B3A52', lineHeight: 1.7, fontWeight: 500, maxWidth: 420,
            }}>
              립 트리트먼트 한 방울로 균열 없이 매끄러운 입술. 시어버터 · 호호바오일 ·
              비타민 E의 트리플 보습이 만드는 24시간 광채.
            </p>

            {/* 컬러 팔레트 */}
            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontSize: 10.5, fontWeight: 800, letterSpacing: '0.18em',
                color: '#6B7A90', marginBottom: 12,
              }}>SHADE — {cur.name.toUpperCase()}</div>
              <div style={{ display: 'flex', gap: 10 }}>
                {shades.map((s, i) => (
                  <button key={s.name}
                    onClick={() => setActiveShade(i)}
                    style={{
                      width: isMobile ? 44 : 56, height: isMobile ? 44 : 56,
                      borderRadius: 999,
                      background: s.color,
                      border: activeShade === i ? `3px solid ${accent}` : '3px solid transparent',
                      boxShadow: activeShade === i
                        ? `0 0 0 2px #fff, 0 8px 20px ${s.color}88`
                        : '0 4px 12px rgba(0,0,0,0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                      outline: 'none',
                    }}
                    title={s.name} />
                ))}
              </div>
              <div style={{
                marginTop: 10, fontSize: 12, color: accent, fontWeight: 700,
                fontStyle: 'italic',
              }}>{cur.desc}</div>
            </div>

            {/* 별점 + 베스트 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 12px', borderRadius: 999,
                background: '#fff',
                boxShadow: '0 4px 12px rgba(232,78,115,0.15)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFB800">
                  <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
                </svg>
                <span style={{ fontSize: 13, fontWeight: 800 }}>{p.rating}</span>
                <span style={{ fontSize: 11, color: '#6B7A90', fontWeight: 600 }}>({fmtKR(p.reviews)})</span>
              </div>
              <div style={{
                padding: '6px 12px', borderRadius: 999,
                background: accent, color: '#fff',
                fontSize: 10.5, fontWeight: 800, letterSpacing: '0.1em',
              }}>♥ #1 BESTSELLER</div>
            </div>
          </div>
        </div>
      </section>

      {/* 텍스처/효능 — 매거진 레이아웃 */}
      <section style={{
        padding: isMobile ? '40px 18px' : '80px 36px',
        background: '#fff',
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 28 : 60,
            alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: 'italic', fontSize: isMobile ? 18 : 24,
                color: accent, fontWeight: 500, marginBottom: 10,
              }}>Why we love it</div>
              <h2 style={{
                margin: 0, fontSize: isMobile ? 26 : 42, fontWeight: 900,
                letterSpacing: '-0.03em', lineHeight: 1.15,
                fontFamily: '"Playfair Display", Georgia, serif',
              }}>입술이 <em style={{ color: accent }}>녹아드는</em><br />그 순간.</h2>
              <div style={{
                marginTop: 24, display: 'grid', gap: 14,
              }}>
                {[
                  { k: '24H', l: '광채 보습' },
                  { k: '0%', l: '파라벤·인공색소' },
                  { k: '3종', l: '식물성 오일 컴플렉스' },
                ].map(m => (
                  <div key={m.k} style={{
                    display: 'flex', alignItems: 'baseline', gap: 18,
                    paddingBottom: 14, borderBottom: '1px solid rgba(232,78,115,0.15)',
                  }}>
                    <div style={{
                      fontSize: isMobile ? 28 : 36, fontWeight: 900,
                      color: accent, letterSpacing: '-0.02em',
                      fontVariantNumeric: 'tabular-nums', minWidth: 80,
                      fontFamily: '"Playfair Display", Georgia, serif',
                      fontStyle: 'italic',
                    }}>{m.k}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: '#2B3A52' }}>{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 텍스처 카드 — 광택 */}
            <div style={{
              aspectRatio: '1 / 1',
              borderRadius: 24,
              background: `linear-gradient(135deg, ${cur.color}33 0%, ${accent}66 100%)`,
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(232,78,115,0.2)',
            }}>
              <div style={{
                position: 'absolute', top: '15%', left: '20%', width: '60%', height: '50%',
                background: `radial-gradient(ellipse at 30% 30%, #fff 0%, transparent 70%)`,
                filter: 'blur(30px)',
              }} />
              <div style={{
                position: 'absolute', bottom: '15%', right: '15%',
                fontFamily: '"Playfair Display", Georgia, serif',
                fontStyle: 'italic', fontSize: isMobile ? 32 : 56,
                fontWeight: 900, color: '#fff',
                textShadow: '0 4px 20px rgba(232,78,115,0.5)',
                lineHeight: 0.9,
              }}>glossy.<br />glow.</div>
              <div style={{
                position: 'absolute', top: '8%', left: '8%',
                padding: '6px 12px', borderRadius: 999,
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)',
                fontSize: 10.5, fontWeight: 800, letterSpacing: '0.16em',
                color: accent,
              }}>TEXTURE</div>
            </div>
          </div>
        </div>
      </section>

      {/* 리뷰 카드 — 스크롤 */}
      <section style={{
        padding: isMobile ? '40px 0' : '80px 0',
        background: `linear-gradient(180deg, #fff 0%, ${cur.color}15 100%)`,
      }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '0 18px' : '0 36px' }}>
          <div style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: isMobile ? 22 : 32, fontWeight: 900,
            letterSpacing: '-0.02em', marginBottom: 24,
            fontStyle: 'italic',
          }}>“ Beauty Diary ”</div>
        </div>
        <div style={{
          display: 'flex', gap: 14, overflowX: 'auto',
          padding: isMobile ? '0 18px 8px' : '0 36px 8px',
          scrollSnapType: 'x mandatory',
          maxWidth: 1180, margin: '0 auto',
        }}>
          {[
            { n: '하**', d: '베리 컬러가 데일리로 너무 좋아요. 발색도 자연스럽고 보습감이 끝내줍니다.', s: 5 },
            { n: '소**', d: '4가지 다 사고싶을 정도. 코랄이 진짜 생기 돌아요.', s: 5 },
            { n: '준**', d: '입술 각질에 진짜 효과 있어요. 한 번 바르고 자면 다음날 부드러워져요.', s: 5 },
            { n: '윤**', d: '광택감 끝내줍니다. 다른 립밤 못 쓰겠어요.', s: 4 },
          ].map((r, i) => (
            <div key={i} style={{
              flex: '0 0 auto', width: isMobile ? 240 : 300,
              padding: 22, borderRadius: 18,
              background: '#fff',
              boxShadow: '0 8px 24px rgba(232,78,115,0.1)',
              scrollSnapAlign: 'start',
            }}>
              <div style={{ display: 'flex', gap: 1, marginBottom: 10 }}>
                {[1,2,3,4,5].map(i2 => (
                  <svg key={i2} width="12" height="12" viewBox="0 0 24 24"
                       fill={i2 <= r.s ? '#FFB800' : 'rgba(11,31,58,0.15)'}>
                    <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9" />
                  </svg>
                ))}
              </div>
              <div style={{
                fontSize: 13, lineHeight: 1.6, color: '#2B3A52', marginBottom: 12,
                fontWeight: 600,
              }}>“{r.d}”</div>
              <div style={{ fontSize: 11, color: '#6B7A90', fontWeight: 700 }}>— {r.n}</div>
            </div>
          ))}
        </div>
      </section>

      <VariantPurchaseFooter price={p.price} pv={p.pv} qty={qty} setQty={setQty}
        isMobile={isMobile} accent="#E84E73" />
    </div>
  );
}

Object.assign(window, { HemohimDetail, HerbalShampooDetail, LipTreatmentDetail });
