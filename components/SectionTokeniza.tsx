import PanelHead from './PanelHead'
import MockFan from './MockFan'

const TITLE_COLOR = '#8e2050'
const FAINT_COLOR = 'rgba(142,32,80,.25)'

export default function SectionTokeniza() {
  return (
    <section
      id="tokeniza"
      data-section
      data-theme="light"
      className="relative overflow-hidden"
      style={{
        background: '#f2a7c0',
        minHeight: '100vh',
        padding: '96px 36px 120px',
      }}
    >
      <PanelHead
        title="tokeniza"
        desc="Tu factura se convierte en un NFT ERC-721 en Polygon. Inmutable, verificable, tuya. En minutos, no en semanas."
        titleColor={TITLE_COLOR}
        faintColor={FAINT_COLOR}
        href="#contacto"
      />

      <MockFan />
    </section>
  )
}
