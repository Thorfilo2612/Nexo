import BottomBar from '@/components/BottomBar'
import BottomHaze from '@/components/BottomHaze'

export default function Home() {
  return (
    <main>
      {/* secciones — se irán añadiendo paso a paso */}
      <div
        data-section
        data-theme="dark"
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0c0c0e', color: '#f4f2ee' }}
      >
        <p className="text-2xl font-bold">nexo · en construcción</p>
      </div>

      <BottomHaze />
      <BottomBar />
    </main>
  )
}
