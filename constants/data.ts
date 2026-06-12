export interface Factura {
  id: string
  emisor: string
  monto: number
  dias: number
  apr: number
  score: number
}

export interface Check {
  label: string
  sub: string
  done: boolean
}

export interface BarraScore {
  label: string
  valor: number
  display: string
}

export const FACTURAS: Factura[] = [
  { id: 'NEXO-NFT #4821', emisor: 'AutoparTec C.A.',  monto: 48200,  dias: 30, apr: 4.0, score: 8.9 },
  { id: 'NEXO-NFT #4819', emisor: 'CacaoVen S.A.',    monto: 120000, dias: 45, apr: 4.4, score: 8.2 },
  { id: 'NEXO-NFT #4823', emisor: 'TexLara C.A.',     monto: 31900,  dias: 60, apr: 5.0, score: 7.8 },
]

export const POOL = {
  apr: 4.2,
  utilizado: 1_700_000,
  total: 2_400_000,
  porcentaje: 72,
} as const

export const SCORE = {
  empresa: 'AutoparTec C.A.',
  valor: 8.9,
  barras: [
    { label: 'Puntualidad', valor: 100, display: '100%'  },
    { label: 'Volumen',     valor: 78,  display: '$312K' },
    { label: 'Antigüedad',  valor: 64,  display: '8m'    },
    { label: 'Facturas',    valor: 55,  display: '14'    },
  ] satisfies BarraScore[],
} as const

export const CHECKS: Check[] = [
  { label: 'Identidad del emisor',  sub: 'RIF validado · AutoparTec C.A.', done: true  },
  { label: 'Screening OFAC',        sub: 'Sin coincidencias en listas',     done: true  },
  { label: 'Origen del insumo',     sub: 'Cadena de suministro trazada',    done: true  },
  { label: 'Comprador corporativo', sub: 'Confirmación en curso…',          done: false },
]

export const FAN_CARDS = [
  { num: '#4818', monto: '$12,400' },
  { num: '#4819', monto: '$8,750'  },
  {
    num: '#4821',
    monto: '$48,200',
    emisor: 'AutoparTec C.A.',
    red: 'Polygon',
    estandar: 'ERC-721',
    vence: '30 días',
    featured: true,
  },
  { num: '#4822', monto: '$23,100' },
  { num: '#4823', monto: '$31,900' },
] as const

export const CONTACT_EMAIL = 'hola@nexo.finance'
