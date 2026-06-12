'use client'

import { useReveal } from './hooks/useReveal'

interface PanelHeadProps {
  title: string
  desc: string
  titleColor: string
  faintColor: string
  href?: string
}

export default function PanelHead({
  title,
  desc,
  titleColor,
  faintColor,
  href = '#contacto',
}: PanelHeadProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ maxWidth: 340, position: 'relative', zIndex: 10 }}
    >
      <h2
        className="font-bold lowercase"
        style={{
          fontSize: 'clamp(40px, 4.5vw, 58px)',
          letterSpacing: '-0.02em',
          lineHeight: 1.05,
          marginBottom: 22,
          color: titleColor,
        }}
      >
        {title}
      </h2>

      <p
        className="font-medium"
        style={{
          fontSize: 14,
          color: titleColor,
          opacity: 0.85,
          lineHeight: 1.7,
          paddingBottom: 18,
          marginBottom: 18,
          borderBottom: `1px solid ${faintColor}`,
        }}
      >
        {desc}
      </p>

      <a
        href={href}
        className="inline-flex items-center font-semibold cursor-pointer"
        style={{
          fontSize: 13,
          color: titleColor,
          opacity: 0.9,
          gap: 8,
          transition: 'gap 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.gap = '12px')}
        onMouseLeave={e => (e.currentTarget.style.gap = '8px')}
      >
        descubre <span>→</span>
      </a>
    </div>
  )
}
