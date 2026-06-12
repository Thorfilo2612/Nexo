import Hero from '@/components/Hero'
import SectionTokeniza from '@/components/SectionTokeniza'
import BottomBar from '@/components/BottomBar'
import BottomHaze from '@/components/BottomHaze'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionTokeniza />

      {/* secciones siguientes — se irán añadiendo paso a paso */}

      <BottomHaze />
      <BottomBar />
    </main>
  )
}
