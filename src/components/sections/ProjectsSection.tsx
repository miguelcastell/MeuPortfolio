'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { projects, type Project } from '@/lib/projects'

type FilterArea = 'Todos' | Project['area']

const areaFilters: FilterArea[] = [
  'Todos',
  'Data Engineering',
  'Machine Learning',
  'Automation',
  'Database',
]

const areaLabels: Record<string, string> = {
  'Data Engineering': 'Data Engineering',
  'Machine Learning': 'Machine Learning',
  'Automation': 'Automação',
  'Database': 'Banco de Dados',
  'Web': 'Web',
  'Other': 'Outros',
}

const statusConfig = {
  'in-progress': {
    label: 'Em progresso',
    color: '#22D3EE',
    bg: 'rgba(14, 116, 144, 0.12)',
    border: 'rgba(14, 116, 144, 0.28)',
  },
  'completed': {
    label: 'Concluído',
    color: '#2DD4BF',
    bg: 'rgba(20, 184, 166, 0.12)',
    border: 'rgba(20, 184, 166, 0.28)',
  },
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterArea>('Todos')
  const [showAllTier2, setShowAllTier2] = useState(false)

  const filtered = useMemo(() => {
    let result = [...projects]
    if (activeFilter !== 'Todos') {
      result = result.filter((p) => p.area === activeFilter)
    }
    result.sort((a, b) => a.tier - b.tier)
    return result
  }, [activeFilter])

  const tier1 = filtered.filter((p) => p.tier === 1)
  const tier2 = filtered.filter((p) => p.tier === 2)
  const visibleTier2 = showAllTier2 ? tier2 : tier2.slice(0, 4)

  return (
    <section id="projetos" className="section-padding py-24">
      <div className="container-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest mb-2">
            Portfólio
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-3">
            Do problema ao impacto.
          </h2>
          <p className="text-text-muted max-w-xl">
            Projetos que mostram a jornada completa — da coleta e tratamento à análise,
            modelagem e entrega visual.
          </p>
        </motion.div>

        {/* Filters & Sort */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {areaFilters.map((area) => (
            <button
              key={area}
              onClick={() => setActiveFilter(area)}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200',
                activeFilter === area
                  ? 'bg-primary/20 border-primary/50 text-[#22D3EE]'
                  : 'bg-transparent border-[#334155] text-text-muted hover:border-[#475569] hover:text-text-main'
              )}
            >
              {area === 'Todos' ? 'Todos' : (areaLabels[area] ?? area)}
            </button>
          ))}
        </motion.div>

        {/* Tier 1 — Vitrine */}
        {tier1.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-[#22D3EE] uppercase tracking-widest whitespace-nowrap">
                ★ Projetos em Destaque
              </span>
              <div className="flex-1 h-px bg-[#334155]/60" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {tier1.slice(0, 1).map((p) => (
                <div key={p.slug} className="md:col-span-2">
                  <FeaturedCard project={p} />
                </div>
              ))}
              {tier1.slice(1).map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i + 1} />
              ))}
            </div>
          </div>
        )}

        {/* Tier 2 — Suporte Técnico */}
        {tier2.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-text-muted uppercase tracking-widest whitespace-nowrap">
                Projetos Técnicos
              </span>
              <div className="flex-1 h-px bg-[#334155]/60" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence>
                {visibleTier2.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} index={i} compact />
                ))}
              </AnimatePresence>
            </div>
            {tier2.length > 4 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllTier2((v) => !v)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#334155] text-sm text-text-muted hover:border-[#475569] hover:text-text-main transition-colors"
                >
                  {showAllTier2 ? (
                    <>Ver menos <ChevronUp size={14} /></>
                  ) : (
                    <>Ver todos os {tier2.length} projetos técnicos <ChevronDown size={14} /></>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 text-text-muted">
            Nenhum projeto encontrado nesta categoria.
          </div>
        )}
      </div>
    </section>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  const status = statusConfig[project.status]
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-[#334155] bg-[#1E293B]/60 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_48px_rgba(14,116,144,0.13)] hover:border-primary/40 hover:-translate-y-0.5"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 group-hover:h-[3px]"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
        aria-hidden="true"
      />
      <div className="grid md:grid-cols-2 gap-0">
        {/* Visual panel */}
        <div
          className="relative h-52 md:h-full min-h-[180px] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}14 0%, ${project.accentColor}05 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
            <div
              className="w-64 h-64 rounded-full"
              style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent)` }}
            />
          </div>
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            <span className="tag-badge">{areaLabels[project.area] ?? project.area}</span>
          </div>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-mono opacity-50 text-text-muted">{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-display font-bold text-2xl text-text-main">{project.title}</h3>
              <span
                className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-medium border"
                style={{ color: status.color, background: status.bg, borderColor: status.border }}
              >
                {status.label}
              </span>
            </div>
            <p className="text-text-muted leading-relaxed">{project.description}</p>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="tag-badge text-[11px]">{tech}</span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium transition-all hover:bg-[#0c6578] hover:shadow-md hover:shadow-primary/25"
            >
              Ver sobre <ArrowRight size={14} />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-main transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: Project
  index: number
  compact?: boolean
}) {
  const status = statusConfig[project.status]
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative rounded-xl border border-[#334155] bg-[#1E293B]/50 overflow-hidden transition-all duration-300 hover:shadow-[0_4px_24px_rgba(14,116,144,0.1)] hover:border-primary/35 hover:-translate-y-0.5 flex flex-col"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}80, transparent)` }}
        aria-hidden="true"
      />
      <div className="p-5 md:p-6 flex flex-col h-full">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className="tag-badge text-[10px] mb-2 inline-block">
              {areaLabels[project.area] ?? project.area}
            </span>
            <h3 className="font-display font-semibold text-lg text-text-main leading-tight">
              {project.title}
            </h3>
          </div>
          <span
            className="flex-shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium border whitespace-nowrap"
            style={{ color: status.color, background: status.bg, borderColor: status.border }}
          >
            {status.label}
          </span>
        </div>

        <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="tag-badge text-[10px]">{tech}</span>
          ))}
          {project.stack.length > 4 && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border"
              style={{
                background: 'rgba(51,65,85,0.3)',
                borderColor: 'rgba(71,85,105,0.4)',
                color: '#94A3B8',
              }}
            >
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#22D3EE] hover:text-[#67E8F9] transition-colors"
          >
            Sobre <ArrowRight size={12} />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-text-main transition-colors ml-auto"
            >
              <Github size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
