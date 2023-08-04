import { Footer } from '@/components/Footer'
import Hero from '@/components/Hero'
import { Projects } from '@/components/projects/Projects'
import { Services } from '@/components/services/Services'
import Technologies from '@/components/technologies/Technologies'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technologies />
      <Projects />
      <Footer />
    </>
  )
}
