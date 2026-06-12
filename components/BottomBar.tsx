'use client'

import { useBarTheme } from './hooks/useBarTheme'
import { CONTACT_EMAIL } from '@/constants/data'

const NAV_ITEMS = [
  {
    label: 'protocolo',
    href: '#tokeniza',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
  {
    label: 'casos',
    href: '#tokeniza',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </svg>
    ),
  },
  {
    label: 'acceso',
    href: '#contacto',
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
      </svg>
    ),
  },
  {
    label: 'contacto',
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
]

export default function BottomBar() {
  const theme = useBarTheme()
  const isLight = theme === 'light'

  return (
    <nav
      className="fixed left-0 right-0 bottom-0 z-[200] flex justify-between items-end pointer-events-none"
      style={{
        padding: '18px 36px 20px',
        color: isLight ? '#1a1a1a' : '#f4f2ee',
        transition: 'color 0.4s ease',
      }}
      aria-label="Navegación principal"
    >
      {/* Logo + tagline */}
      <div className="flex flex-col gap-1 pointer-events-auto">
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-[17px] tracking-tight cursor-pointer"
          style={{ letterSpacing: '-0.01em' }}
        >
          nexo
          <Ring />
        </a>
        <span
          className="text-[11.5px] font-medium leading-snug opacity-65 hidden sm:block"
          style={{ lineHeight: 1.45 }}
        >
          infraestructura de crédito<br />para LATAM
        </span>
      </div>

      {/* Nav items */}
      <div className="flex gap-8 items-end pointer-events-auto" style={{ gap: '32px' }}>
        {NAV_ITEMS.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center gap-1.5 text-[12px] font-semibold opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            {icon}
            <span className="hidden sm:block">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

function Ring() {
  return (
    <span
      className="relative inline-block"
      style={{ width: 16, height: 16 }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 rounded-full border-2 border-current"
        style={{ borderWidth: 2 }}
      />
      <span
        className="absolute rounded-full border-2 border-current opacity-50"
        style={{ inset: 3, borderWidth: 2 }}
      />
    </span>
  )
}
