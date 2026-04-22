import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { StudiesSection } from '@/components/sections/StudiesSection'
import { Timeline } from '@/components/sections/Timeline'
import { TechStack } from '@/components/sections/TechStack'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Portfólio',
  description:
    'Portfólio de Miguel Mantoan Castellani — Analista de Sistemas especializado em Engenharia de Dados, Machine Learning e Automação. Transformo dados brutos em disões concretas.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <StudiesSection />
      <Timeline />
      <TechStack />
      <ContactSection />
    </>
  )
}
