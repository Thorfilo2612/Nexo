import Hero from '@/components/Hero'
import BottomBar from '@/components/BottomBar'
import BottomHaze from '@/components/BottomHaze'

export default function Home() {
  return (
    <main>
      <Hero />

      {/* secciones — se irán añadiendo paso a paso */}

      <BottomHaze />
      <BottomBar />
    </main>
  )
}
