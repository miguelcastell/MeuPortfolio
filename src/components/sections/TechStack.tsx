'use client'

import { motion } from 'framer-motion'
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee'

const row1 = [
  { label: 'Python', category: 'python' },
  { label: 'Pandas', category: 'python' },
  { label: 'NumPy', category: 'python' },
  { label: 'Scikit-learn', category: 'ml' },
  { label: 'TensorFlow', category: 'ml' },
  { label: 'Streamlit', category: 'python' },
  { label: 'FastAPI', category: 'python' },
  { label: 'Apache Airflow', category: 'python' },
  { label: 'PostgreSQL', category: 'sql' },
  { label: 'PL/pgSQL', category: 'sql' },
]

const row2 = [
  { label: 'SQL Avançado', category: 'sql' },
  { label: 'Power BI', category: 'bi' },
  { label: 'ETL/ELT', category: 'bi' },
  { label: 'Jupyter', category: 'python' },
  { label: 'TypeScript', category: 'other' },
  { label: 'PowerShell', category: 'automation' },
  { label: 'Git', category: 'devops' },
  { label: 'Parquet', category: 'bi' },
  { label: 'dbt', category: 'bi' },
  { label: 'OpenCV', category: 'ml' },
]

const coreSkills = [
  { label: 'Engenharia de Dados', description: 'Pipelines ETL/ELT, modelagem e orquestração' },
  { label: 'Machine Learning', description: 'Classificação, regressão, clustering e recomendação' },
  { label: 'Business Intelligence', description: 'Dashboards, KPIs e análise de dados para negócios' },
  { label: 'Automação', description: 'Scripts Python, PowerShell e integração entre plataformas' },
]

export function TechStack() {
  return (
    <section className="py-20 overflow-hidden" aria-label="Stack tecnológica">
      <div className="container-content section-padding mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
            Competências técnicas
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-4">
            Stack & Ferramentas
          </h2>
          <p className="text-text-muted max-w-xl">
            Combinação entre linguagens, bibliotecas e ferramentas que cobre o ciclo completo do dado —
            da coleta à decisão.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-3 mb-16">
        <InfiniteMarquee items={row1} speed="normal" />
        <InfiniteMarquee items={row2} speed="slow" reverse />
      </div>

      {/* Core skills grid */}
      <div className="container-content section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-primary font-bold font-display text-sm">{i + 1}</span>
              </div>
              <h3 className="font-display font-semibold text-sm text-text-main mb-1">
                {skill.label}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
