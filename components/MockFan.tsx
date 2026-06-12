'use client'

import { useParallax } from './hooks/useParallax'
import { FAN_CARDS } from '@/constants/data'

const POSITIONS = [
  { x: -190, rotate: -13, z: 1 },
  { x: -95,  rotate: -6.5, z: 2 },
  { x: 0,    rotate: 0,    z: 3 },
  { x: 95,   rotate: 6.5,  z: 2 },
  { x: 190,  rotate: 13,   z: 1 },
]

export default function MockFan() {
  const ref = useParallax<HTMLDivElement>(0.10)

  return (
    <div
      className="absolute left-0 right-0 flex justify-center items-end"
      style={{ bottom: -40, zIndex: 5 }}
    >
      <div
        ref={ref}
        className="relative"
        style={{ width: 680, maxWidth: '90vw', height: 420 }}
      >
        {FAN_CARDS.map((card, i) => {
          const pos = POSITIONS[i]
          const isFeatured = 'featured' in card && card.featured

          return (
            <div
              key={card.num}
              className="absolute"
              style={{
                left: '50%',
                bottom: 0,
                width: isFeatured ? 230 : 210,
                height: isFeatured ? 330 : 300,
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 18px 50px rgba(120,20,60,.18)',
                padding: 22,
                transformOrigin: 'bottom center',
                transform: `translateX(calc(-50% + ${pos.x}px)) rotate(${pos.rotate}deg)`,
                zIndex: pos.z,
              }}
            >
              <h4
                className="font-bold"
                style={{
                  fontSize: 19,
                  color: '#e0699a',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.15,
                  marginBottom: 14,
                }}
              >
                {isFeatured ? 'Manual de\ntokenización' : `Factura ${card.num}`}
              </h4>

              {isFeatured && 'emisor' in card ? (
                <FeaturedCardBody card={card as typeof FAN_CARDS[2]} />
              ) : (
                <SimpleCardBody monto={card.monto} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SimpleCardBody({ monto }: { monto: string }) {
  return (
    <>
      <div style={{ height: 7, background: '#f3f3f3', borderRadius: 4, marginBottom: 8, width: '80%' }} />
      <div style={{ height: 7, background: '#f3f3f3', borderRadius: 4, marginBottom: 8, width: '60%' }} />
      <p style={{ fontSize: 26, fontWeight: 700, color: '#222', letterSpacing: '-0.02em', margin: '14px 0 4px' }}>
        {monto}
      </p>
      <Badge />
    </>
  )
}

function FeaturedCardBody({ card }: { card: typeof FAN_CARDS[2] }) {
  return (
    <>
      <Row label="Emisor"   value={card.emisor}   />
      <Row label="Red"      value={card.red}      />
      <Row label="Estándar" value={card.estandar} />
      <p style={{ fontSize: 26, fontWeight: 700, color: '#222', letterSpacing: '-0.02em', margin: '14px 0 4px' }}>
        {card.monto}
      </p>
      <Row label="Vence" value={card.vence} />
      <Badge />
    </>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between" style={{ fontSize: 11, color: '#999', marginBottom: 8 }}>
      <span>{label}</span>
      <b style={{ color: '#333', fontWeight: 600 }}>{value}</b>
    </div>
  )
}

function Badge() {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: 10,
        fontWeight: 700,
        color: '#15803d',
        background: '#dcfce7',
        borderRadius: 20,
        padding: '4px 10px',
        marginTop: 8,
      }}
    >
      ✓ verificada on-chain
    </span>
  )
}
