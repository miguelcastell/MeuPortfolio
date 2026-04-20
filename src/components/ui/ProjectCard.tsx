'use client'

import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  variant?: 'default' | 'compact'
  index?: number
}

export function ProjectCard({ project, variant = 'default', index = 0 }: ProjectCardProps) {
  const isCompact = variant === 'compact'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'group relative flex flex-col rounded-2xl border border-border bg-surface overflow-hidden',
        'transition-all duration-300 ease-out',
        'hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-primary/30',
        'hover:-translate-y-1',
        isCompact ? 'p-5' : 'p-0'
      )}
    >
      {/* Color bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 group-hover:h-[3px]"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
        aria-hidden="true"
      />

      {!isCompact && (
        <>
          {/* Cover gradient */}
          <div
            className="relative h-40 w-full overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}15 0%, ${project.accentColor}05 100%)`,
            }}
          >
            {/* Abstract background pattern */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div
                className="w-32 h-32 rounded-full"
                style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent)` }}
              />
            </div>
            {/* Area + status */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="tag-badge text-xs">{project.area}</span>
              {project.status === 'completed' && (
                <span className="tag-badge-teal text-xs inline-flex items-center px-2.5 py-0.5 rounded-full border">
                  Concluído
                </span>
              )}
            </div>
            {/* Year */}
            <span className="absolute top-4 right-4 text-xs text-text-muted font-mono">
              {project.year}
            </span>
            {/* Title overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display font-semibold text-xl text-text-main leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col gap-4 flex-1">
            <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="tag-badge text-[11px]">
                  {tech}
                </span>
              ))}
              {project.stack.length > 4 && (
                <span className="tag-badge text-[11px]">+{project.stack.length - 4}</span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-auto pt-2">
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                Ver sobre
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-main transition-colors ml-auto"
                  aria-label={`GitHub: ${project.title}`}
                >
                  <Github size={14} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </>
      )}

      {isCompact && (
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display font-semibold text-base text-text-main">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted mt-1 line-clamp-2">{project.description}</p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="flex-shrink-0 p-1.5 rounded-lg border border-border hover:border-primary/40 hover:text-primary text-text-muted transition-colors"
              aria-label={`Ver ${project.title}`}
            >
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-1">
            {project.stack.slice(0, 3).map((tech) => (
              <span key={tech} className="tag-badge text-[10px]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  )
}
