'use client'

export default function Hero() {
  return (
    <section
      data-section
      data-theme="dark"
      className="relative overflow-hidden flex items-center"
      style={{
        background: '#0c0c0e',
        padding: '96px 36px 140px',
        minHeight: '100vh',
      }}
    >
      <div
        className="grid w-full items-center"
        style={{
          gridTemplateColumns: 'clamp(280px, 38%, 380px) 1fr',
          gap: 60,
        }}
      >
        {/* ── Copy ── */}
        <div>
          <h1
            className="font-bold text-[#f4f2ee] lowercase"
            style={{
              fontSize: 'clamp(44px, 5.5vw, 68px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.02,
              marginBottom: 26,
              opacity: 0,
              animation: 'up 0.8s ease 0.2s forwards',
            }}
          >
            crédito<br />+ confianza
          </h1>

          <p
            className="font-medium"
            style={{
              fontSize: 14,
              color: '#9a9892',
              lineHeight: 1.75,
              maxWidth: 300,
              opacity: 0,
              animation: 'up 0.8s ease 0.45s forwards',
            }}
          >
            para conectar pymes con capital verificable, desde Caracas
            hasta toda LATAM. ¿Cómo? Mira el{' '}
            <a
              href="#tokeniza"
              className="font-semibold text-[#f4f2ee] transition-[border-color] duration-200"
              style={{ borderBottom: '1.5px solid #3a3a3a' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#f4f2ee')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#3a3a3a')}
            >
              protocolo
            </a>{' '}
            o pide{' '}
            <a
              href="#contacto"
              className="font-semibold text-[#f4f2ee] transition-[border-color] duration-200"
              style={{ borderBottom: '1.5px solid #3a3a3a' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#f4f2ee')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#3a3a3a')}
            >
              acceso
            </a>
          </p>
        </div>

        {/* ── Ilustración SVG ── */}
        <div
          style={{
            opacity: 0,
            animation: 'up 1s ease 0.5s forwards',
          }}
        >
          <HeroArt />
        </div>
      </div>
    </section>
  )
}

function HeroArt() {
  return (
    <svg
      viewBox="0 0 600 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 620, height: 'auto', display: 'block', margin: '0 auto' }}
      aria-hidden="true"
    >
      <g stroke="#f4f2ee" strokeWidth={2} strokeLinecap="round">
        {/* Documento factura */}
        <rect x="60" y="80" width="180" height="240" rx="10" strokeWidth={2.5} />
        <line x1="85" y1="120" x2="195" y2="120" />
        <line x1="85" y1="145" x2="215" y2="145" opacity={0.5} />
        <line x1="85" y1="165" x2="175" y2="165" opacity={0.5} />
        <line x1="85" y1="185" x2="205" y2="185" opacity={0.5} />
        <rect x="85" y="215" width="70" height="26" rx="13" opacity={0.7} />
        <text
          x="100" y="233"
          fill="#f4f2ee"
          stroke="none"
          fontFamily="Quicksand, sans-serif"
          fontSize="13"
          fontWeight="600"
        >
          $48K
        </text>

        {/* Sello circular */}
        <circle cx="195" cy="275" r="26" strokeWidth={2.5} />
        <circle cx="195" cy="275" r="17" opacity={0.5} />
        <path d="M186 275 l6 6 l12 -13" strokeWidth={2.5} />

        {/* Flecha conexión (dashed) */}
        <path
          d="M260 200 C 310 200, 310 200, 350 200"
          strokeDasharray="2 8"
          strokeWidth={2.5}
        />
        <path d="M342 192 l10 8 l-10 8" strokeWidth={2.5} />

        {/* Cadena de bloques */}
        <rect x="375" y="160" width="80" height="80" rx="12" strokeWidth={2.5} />
        <rect x="470" y="120" width="80" height="80" rx="12" opacity={0.7} strokeWidth={2.5} />
        <rect x="470" y="220" width="80" height="80" rx="12" opacity={0.7} strokeWidth={2.5} />
        <line x1="455" y1="190" x2="470" y2="170" opacity={0.6} />
        <line x1="455" y1="210" x2="470" y2="250" opacity={0.6} />

        {/* Hexágono nexo en bloque central */}
        <path d="M415 178 l14 8 v16 l-14 8 l-14 -8 v-16 z" strokeWidth={2.5} />

        {/* Nodos flotantes */}
        <circle cx="320" cy="90" r="5" opacity={0.5} />
        <circle cx="540" cy="70" r="4" opacity={0.4} />
        <circle cx="290" cy="330" r="6" opacity={0.4} />
        <circle cx="560" cy="350" r="5" opacity={0.5} />
      </g>
    </svg>
  )
}
