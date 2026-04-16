import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { TechStack } from '@/components/sections/TechStack'
import { Timeline } from '@/components/sections/Timeline'
import { getFeaturedProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Miguel Mantoan Castellani — Engenharia de Dados & IA',
  description:
    'Portfólio de Miguel Mantoan Castellani — Analista de Sistemas especializado em Engenharia de Dados, Machine Learning e Automação. Transformo dados brutos em decisões concretas.',
}

export default function HomePage() {
  const featured = getFeaturedProjects()

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featured} />
      <TechStack />
      <Timeline />
    </>
  )
}
