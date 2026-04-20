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
    current: true,
    highlights: [
      'Dashboards internos para apoio à decisão gerencial',
      'ETL: tratamento e padronização de dados para sistemas internos',
      'Automação de processos com Python e integração entre plataformas',
      'Identificação e correção de falhas em parametrizações (Questor, Tarefa, Integrador)',
    ],
  },
  {
    type: 'work' as const,
    title: 'Auxiliar de Logística',
    org: 'Prati Donaduzzi',
    period: 'Mar 2025 — Mai 2025',
    location: 'Toledo, PR',
    current: false,
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
    current: true,
    highlights: [
      '3º período — foco em ML, DE e IA aplicada',
      'Projetos práticos integrando teoria e engenharia de software',
    ],
  },
]

export function Timeline() {
  return (
    <section id="experiencia" className="section-padding py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest mb-2">
            Trajetória
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight">
            Experiência & Formação
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px bg-[#334155]/60 md:left-[calc(50%-1px)]"
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
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center z-10 relative transition-colors"
                  style={{
                    background: '#1E293B',
                    borderColor: entry.type === 'work' ? '#0E7490' : '#14B8A6',
                  }}
                >
                  {entry.type === 'work' ? (
                    <Briefcase size={15} style={{ color: '#22D3EE' }} />
                  ) : (
                    <GraduationCap size={15} style={{ color: '#2DD4BF' }} />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 md:max-w-[calc(50%-3rem)] glass-card rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-semibold text-text-main">{entry.title}</h3>
                        {entry.current && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/15 text-[#22D3EE] border border-primary/25">
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-[#22D3EE] mt-0.5">{entry.org}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-text-muted block">{entry.period}</span>
                      <span className="text-xs text-text-muted opacity-70">{entry.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {entry.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-muted">
                        <span className="text-[#22D3EE] mt-0.5 flex-shrink-0 text-xs">→</span>
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
