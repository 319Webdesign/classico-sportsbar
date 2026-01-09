import dynamic from 'next/dynamic'
import ReservationCTA from '@/components/ReservationCTA'
import DrinksMenu from '@/components/DrinksMenu'
import LocationSection from '@/components/LocationSection'
import Reviews from '@/components/Reviews'
import LiveSportSection from '@/components/LiveSportSection'

// Code Splitting: Hero mit 3D-Animation dynamisch laden
const Hero = dynamic(() => import('@/components/Hero'), {
  ssr: true,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-classico-gold text-xl">Lädt...</div>
    </div>
  ),
})

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden max-w-full">
      <Hero />
      <div className="hidden lg:block lg:py-20" aria-hidden="true"></div>
      
      <DrinksMenu />
      <LiveSportSection />
      <Reviews />
      <ReservationCTA />
      <LocationSection />
    </main>
  )
}
