import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { getProjectBySlug, projects } from '@/lib/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Projeto não encontrado' }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Miguel Castellani`,
      description: project.description,
      type: 'article',
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    codeRepository: project.github,
    programmingLanguage: project.stack,
    author: {
      '@type': 'Person',
      name: 'Miguel Mantoan Castellani',
      url: 'https://github.com/miguelcastell',
    },
  }

  return (
    <PageWrapper showProgress>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero banner */}
      <div
        className="relative h-56 md:h-72 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}20 0%, ${project.accentColor}08 60%, transparent)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
          <div
            className="w-96 h-96 rounded-full"
            style={{ background: `radial-gradient(circle, ${project.accentColor}, transparent)` }}
          />
        </div>

        <div className="container-content section-padding h-full flex flex-col justify-end pb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-main mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            Todos os projetos
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="tag-badge">{project.area}</span>
            <span className="text-xs font-mono text-text-muted">{project.year}</span>
            {project.status === 'completed' && (
              <span className="tag-badge-teal inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border">
                Concluído
              </span>
            )}
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-content section-padding py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main */}
          <article className="prose-editorial">
            <p className="text-lg text-text-muted leading-relaxed mb-10">
              {project.longDescription}
            </p>

            {/* The problem */}
            <h2>O Problema</h2>
            <p>
              {project.area === 'Data Engineering' &&
                'Pipelines de dados frágeis e não monitorados resultam em decisões baseadas em dados incorretos. A falta de qualidade é o gargalo mais subestimado no ciclo de BI e ML.'}
              {project.area === 'Machine Learning' &&
                'Sistemas de recomendação e classificação genéricos não capturam o comportamento real do usuário. A ausência de personalização reduz drasticamente o engajamento e a precisão preditiva.'}
            </p>

            {/* Architecture */}
            <h2>Arquitetura & Decisões Técnicas</h2>
            <p>A solução foi estruturada em etapas bem definidas, priorizando modularidade e reprodutibilidade:</p>
            <ul>
              {project.stack.map((tech) => (
                <li key={tech}>
                  <strong>{tech}</strong>
                </li>
              ))}
            </ul>

            {/* Metrics */}
            <h2>Métricas de Sucesso</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div
                    className="text-3xl font-bold font-display mb-1"
                    style={{ color: project.accentColor }}
                  >
                    {m.value}
                  </div>
                  <div className="text-xs text-text-muted">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Lessons */}
            <h2>Lições Aprendidas</h2>
            <p>
              Este projeto reforçou que a qualidade dos dados é mais crítica do que a escolha do
              algoritmo. Pipelines bem estruturados com tratamento explícito de edge cases superam
              soluções sofisticadas com dados brutos.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
            {/* Quick info */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-display font-semibold text-sm text-text-main mb-4">Detalhes</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-text-muted">Área</dt>
                  <dd className="font-medium text-text-main text-right">{project.area}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-text-muted">Ano</dt>
                  <dd className="font-medium text-text-main">{project.year}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-text-muted">Status</dt>
                  <dd className="font-medium text-text-main capitalize">
                    {project.status === 'completed' ? 'Concluído' : 'Em progresso'}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Stack */}
            <div className="glass-card rounded-xl p-5">
              <h3 className="font-display font-semibold text-sm text-text-main mb-3">Stack</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-badge text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium text-text-main hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Github size={15} />
                  Ver no GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-[#0c6578] transition-colors"
                >
                  <ExternalLink size={15} />
                  Ver demo
                </a>
              )}
            </div>
          </aside>
        </div>
      </div>
    </PageWrapper>
  )
}
