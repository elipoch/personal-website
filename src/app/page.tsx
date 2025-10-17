import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
    </div>
  )
}
