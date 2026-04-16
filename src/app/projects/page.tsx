'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { projects } from '@/lib/projects'
import type { Project } from '@/lib/projects'

const areas = ['Todos', 'Data Engineering', 'Machine Learning', 'Automation', 'Database', 'Web'] as const
type AreaFilter = (typeof areas)[number]

export default function ProjectsPage() {
  const [activeArea, setActiveArea] = useState<AreaFilter>('Todos')

  const filtered: Project[] =
    activeArea === 'Todos' ? projects : projects.filter((p) => p.area === activeArea)

  return (
    <PageWrapper>
      <section className="section-padding py-20">
        <div className="container-content">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
              Portfólio
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-text-main tracking-tight mb-4">
              Projetos
            </h1>
            <p className="text-lg text-text-muted max-w-2xl">
              Da coleta ao insight. Projetos reais cobrindo Engenharia de Dados, Machine Learning,
              Automação e Business Intelligence.
            </p>
          </motion.div>

          {/* Filter bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filtrar por área"
          >
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setActiveArea(area)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeArea === area
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-surface text-text-muted border-border hover:border-primary/40 hover:text-primary'
                }`}
                aria-pressed={activeArea === area}
              >
                {area}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-text-muted py-20"
            >
              Nenhum projeto encontrado para esta área.
            </motion.p>
          )}

          {/* Count */}
          <p className="text-sm text-text-muted mt-8 text-center">
            Mostrando {filtered.length} de {projects.length} projetos
          </p>
        </div>
      </section>
    </PageWrapper>
  )
}
