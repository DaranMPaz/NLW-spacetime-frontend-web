import { Blur } from '@/components/Blur'
import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemories'
import { HeroSection } from '@/components/HeroSection'
import { SignIn } from '@/components/SignIn'
import { Stripe } from '@/components/Stripe'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div
        className="
          flex 
          flex-col
          items-start
          justify-between 
          px-28
          py-16
          relative 
          overflow-hidden
          border-r
        border-white/10 
          bg-[url(../assets/bg-stars.svg)]
          bg-cover"
      >
        <Blur />
        <Stripe />
        <SignIn />
        <HeroSection />
        <Copyright />
      </div>

      {/* Right */}
      <div
        className="
          flex
          flex-col
          p-16
          bg-[url(../assets/bg-stars.svg)]
          bg-cover"
      >
        <EmptyMemories />
      </div>
    </main>
  )
}
