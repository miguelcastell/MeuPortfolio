'use client'

import { motion } from 'framer-motion'
import { InfiniteMarquee } from '@/components/ui/InfiniteMarquee'
import { Database, Brain, BarChart3, Zap } from 'lucide-react'

const row1 = [
  { label: 'Python', category: 'python' },
  { label: 'Pandas', category: 'python' },
  { label: 'NumPy', category: 'python' },
  { label: 'PySpark', category: 'python' },
  { label: 'Apache Spark', category: 'python' },
  { label: 'Scikit-learn', category: 'ml' },
  { label: 'TensorFlow', category: 'ml' },
  { label: 'Streamlit', category: 'python' },
  { label: 'FastAPI', category: 'python' },
  { label: 'Apache Airflow', category: 'python' },
  { label: 'SQL', category: 'sql' },
  { label: 'PostgreSQL', category: 'sql' },
  { label: 'PL/pgSQL', category: 'sql' },
  { label: 'SQLite', category: 'sql' },
  { label: 'DuckDB', category: 'sql' },
  { label: 'MySQL', category: 'sql' },
]

const row2 = [
  { label: 'Power BI', category: 'bi' },
  { label: 'ETL / ELT', category: 'bi' },
  { label: 'Data Warehouse', category: 'bi' },
  { label: 'Data Lake', category: 'bi' },
  { label: 'Databricks', category: 'bi' },
  { label: 'Jupyter', category: 'python' },
  { label: 'PowerShell', category: 'automation' },
  { label: 'Git', category: 'devops' },
  { label: 'GitHub', category: 'devops' },
  { label: 'VS Code', category: 'devops' },
  { label: 'Looker', category: 'bi' },
  { label: 'Figma', category: 'other' },
  { label: 'Trello', category: 'other' },
  { label: 'Postman', category: 'other' },
  { label: 'Visão Computacional', category: 'ml' },
  { label: 'NLP', category: 'ml' },
]

const row3 = [
  { label: 'Keras', category: 'ml' },
  { label: 'Clustering', category: 'ml' },
  { label: 'Plotly', category: 'bi' },
  { label: 'Seaborn', category: 'bi' },
  { label: 'SQLAlchemy', category: 'python' },
  { label: 'BeautifulSoup', category: 'python' },
  { label: 'Selenium', category: 'automation' },
  { label: 'Excel', category: 'bi' },
  { label: 'PyCharm', category: 'other' },
  { label: 'Photoshop', category: 'other' },
  { label: 'HTML', category: 'other' },
  { label: 'CSS', category: 'other' },
  { label: 'JavaScript', category: 'other' },
  { label: 'Pytest', category: 'python' },
  { label: 'Web Scraping', category: 'automation' },
]

const coreSkills = [
  {
    icon: Database,
    label: 'Engenharia de Dados',
    description: 'Pipelines ETL/ELT, modelagem dimensional e orquestração com Airflow.',
    highlights: ['ETL / ELT', 'Airflow', 'SQL'],
    color: '#22D3EE',
    bg: 'rgba(14, 116, 144, 0.12)',
    border: 'rgba(14, 116, 144, 0.28)',
  },
  {
    icon: Brain,
    label: 'Machine Learning',
    description: 'Classificação, regressão, clustering, recomendação e visão computacional.',
    highlights: ['Scikit-learn', 'TensorFlow/Keras', 'NLP e CV'],
    color: '#2DD4BF',
    bg: 'rgba(20, 184, 166, 0.12)',
    border: 'rgba(20, 184, 166, 0.28)',
  },
  {
    icon: BarChart3,
    label: 'Business Intelligence',
    description: 'Dashboards, KPIs automatizados e análise de dados para decisões de negócio.',
    highlights: ['Power BI', 'Modelagem de métricas', 'Storytelling com dados'],
    color: '#22D3EE',
    bg: 'rgba(14, 116, 144, 0.12)',
    border: 'rgba(14, 116, 144, 0.28)',
  },
  {
    icon: Zap,
    label: 'Automação',
    description: 'Scripts Python e PowerShell, geração de documentos e integração entre sistemas.',
    highlights: ['Python + APIs', 'PowerShell', 'Automação de processos'],
    color: '#FB923C',
    bg: 'rgba(249, 115, 22, 0.12)',
    border: 'rgba(249, 115, 22, 0.28)',
  },
]

export function TechStack() {
  return (
    <section id="stack" className="py-24 overflow-hidden" aria-label="Stack tecnológica">
      <div className="container-content section-padding mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest mb-2">
            Ferramentas
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-4">
            Stack & Ferramentas
          </h2>
          <p className="text-text-muted max-w-xl">
            Combinação que cobre o ciclo completo do dado — da coleta à decisão.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-3 mb-16">
        <InfiniteMarquee items={row1} speed="ultraSlow" reverse />
        <InfiniteMarquee items={row2} speed="ultraSlow" />
        <InfiniteMarquee items={row3} speed="ultraSlow" reverse />
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
              className="group rounded-xl p-5 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(14,116,144,0.1)]"
              style={{
                background: skill.bg,
                borderColor: skill.border,
              }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
              >
                <skill.icon size={17} style={{ color: skill.color }} />
              </div>
              <h3 className="font-display font-semibold text-sm text-text-main mb-1.5">
                {skill.label}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">{skill.description}</p>
              <ul className="mt-3 space-y-1">
                {skill.highlights.map((item) => (
                  <li key={item} className="text-[11px] text-text-muted/90 leading-relaxed flex items-center gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
