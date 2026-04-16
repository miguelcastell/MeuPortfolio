'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const timeline = [
  {
    type: 'work' as const,
    title: 'Analista de Sistemas',
    org: 'Saga Contabilidade LTDA',
    period: 'Jun 2025 — Presente',
    location: 'Toledo, PR',
    highlights: [
      'Dashboards internos para apoio à decisão gerencial',
      'ETL: tratamento e padronização de dados para sistemas internos',
      'Automação de processos com Python e integração entre plataformas',
      'Identificação e correção de falhas em parametrizações',
    ],
  },
  {
    type: 'work' as const,
    title: 'Auxiliar de Logística',
    org: 'Prati Donaduzzi',
    period: 'Mar 2025 — Mai 2025',
    location: 'Toledo, PR',
    highlights: [
      'Controle de inventário via SAP',
      'Organização de materiais e operação de processos internos',
    ],
  },
  {
    type: 'education' as const,
    title: 'Bacharelado em Inteligência Artificial',
    org: 'Faculdade Donaduzzi — Biopark',
    period: '2025 — Em andamento',
    location: 'Toledo, PR',
    highlights: [
      '3º período — foco em ML, DE e IA aplicada',
      'Projetos práticos integrando teoria e engenharia de software',
    ],
  },
]

export function Timeline() {
  return (
    <section className="section-padding py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
            Trajetória
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight">
            Experiência & Formação
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-border md:left-[calc(50%-1px)]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:even:flex-row-reverse"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-border bg-surface flex items-center justify-center z-10 relative">
                  {entry.type === 'work' ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-secondary" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 md:max-w-[calc(50%-3rem)] glass-card rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display font-semibold text-text-main">{entry.title}</h3>
                      <p className="text-sm font-medium text-primary">{entry.org}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-text-muted block">{entry.period}</span>
                      <span className="text-xs text-text-muted">{entry.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {entry.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="text-primary mt-0.5 flex-shrink-0">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
