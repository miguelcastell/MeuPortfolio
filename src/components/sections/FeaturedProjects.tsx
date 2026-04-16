'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'
import type { Project } from '@/lib/projects'

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="section-padding py-24">
      <div className="container-content">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
              Projetos em destaque
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight">
              Do problema ao impacto.
            </h2>
            <p className="text-text-muted mt-3 max-w-xl">
              Projetos que mostram a jornada completa — da coleta e tratamento à análise e entrega visual.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors flex-shrink-0"
          >
            Ver todos
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Main featured — spans full width on first item */}
          {projects.slice(0, 1).map((project, i) => (
            <div key={project.slug} className="md:col-span-2">
              <WideProjectCard project={project} index={i} />
            </div>
          ))}
          {/* Remaining */}
          {projects.slice(1, 4).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i + 1} />
          ))}
        </div>

        {/* Mobile link */}
        <div className="flex md:hidden justify-center mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 px-5 py-2.5 rounded-xl hover:bg-primary/5 transition-colors"
          >
            Ver todos os projetos
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function WideProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-primary/30 hover:-translate-y-1"
    >
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 group-hover:h-[3px]"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-0">
        {/* Cover */}
        <div
          className="relative h-48 md:h-full min-h-[180px] overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}18 0%, ${project.accentColor}08 100%)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div
              className="w-48 h-48 rounded-full"
              style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent)` }}
            />
          </div>
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="tag-badge">{project.area}</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs font-mono text-text-muted">{project.year}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div>
            <h3 className="font-display font-bold text-2xl text-text-main mb-2">
              {project.title}
            </h3>
            <p className="text-text-muted leading-relaxed">{project.description}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 py-4 border-t border-b border-border/60">
            {project.metrics.slice(0, 3).map((m, i) => (
              <div key={i}>
                <div
                  className="text-xl font-bold font-display"
                  style={{ color: project.accentColor }}
                >
                  {m.value}
                </div>
                <div className="text-[10px] text-text-muted leading-tight mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="tag-badge text-[11px]">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium transition-all hover:bg-[#0c6578]"
            >
              Ver case study <ArrowRight size={14} />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-text-main transition-colors"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
