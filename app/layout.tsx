import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'nexo · crédito + confianza',
  description:
    'Infraestructura de crédito descentralizada para cadenas de suministro en LATAM. Tokenizamos facturas en blockchain para conectar pymes con capital verificable.',
  keywords: ['fintech', 'blockchain', 'facturas', 'LATAM', 'DeFi', 'crédito', 'pymes'],
  openGraph: {
    title: 'nexo · crédito + confianza',
    description: 'Infraestructura de crédito para LATAM. Tokeniza, verifica, financia.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={quicksand.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
