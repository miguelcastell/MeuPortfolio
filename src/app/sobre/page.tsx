import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'

export const metadata: Metadata = {
  title: 'Sobre — Miguel Mantoan Castellani',
  description:
    'Analista de Sistemas e graduando em Inteligência Artificial. Focado em Engenharia de Dados e Machine Learning. Toledo, PR — Brasil.',
}

const skills = {
  'Dados & ETL': [
    'Pandas',
    'PySpark',
    'Apache Spark',
    'Apache Airflow',
    'SQL',
    'Data Warehouse',
    'Data Lake',
    'Databricks',
  ],
  'BI & Visualização': ['Power BI', 'Plotly', 'Seaborn', 'Looker', 'NumPy', 'Excel'],
  'IA & Machine Learning': [
    'Scikit-learn',
    'TensorFlow',
    'Visão Computacional',
    'Clustering',
    'NLP',
  ],
  'Banco de Dados': ['PostgreSQL', 'SQLite', 'DuckDB', 'MySQL'],
  'DevOps e Ferramentas': [
    'Git',
    'GitHub',
    'VS Code',
    'Figma',
    'Photoshop',
    'Trello',
    'PyCharm',
    'Postman',
  ],
  Desenvolvimento: ['Python', 'HTML', 'CSS', 'JavaScript', 'Web Scraping'],
}

const courses = [
  { title: 'Python com ML, NLP, Computer Vision e Streamlit', platform: 'Udemy', hours: '34h', year: '2026' },
  { title: 'Excel Intermediário', platform: 'SENAI', hours: '20h', year: '2024' },
  { title: 'Fundamentos de Marketing Digital', platform: 'SENAI', hours: '12h', year: '2024' },
]

export default function SobrePage() {
  return (
    <PageWrapper>
      <div className="section-padding py-20">
        <div className="container-content">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_360px] gap-16 mb-20">
            <div>
              <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
                Quem sou eu
              </p>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-text-main tracking-tight mb-6">
                Miguel Mantoan Castellani
              </h1>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Sou Analista de Sistemas na{' '}
                  <strong className="text-text-main font-semibold">Saga Contabilidade LTDA</strong>{' '}
                  e graduando em{' '}
                  <strong className="text-text-main font-semibold">Inteligência Artificial</strong>{' '}
                  na Faculdade Donaduzzi (Biopark), em Toledo, PR.
                </p>
                <p>
                  Meu foco é a interseção entre Engenharia de Dados e Machine Learning — construir
                  pipelines confiáveis que transformam dados brutos em insights acionáveis. Acredito
                  que a qualidade do dado é mais importante que a sofisticação do modelo.
                </p>
                <p>
                  Tenho experiência prática com tratamento e análise de dados, dashboards, automação
                  de processos e sistemas de informação no ambiente contábil e logístico.
                </p>
              </div>

              {/* Soft skills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {['Comunicação eficaz', 'Trabalho em equipe', 'Resolução de problemas', 'Aprendizado contínuo', 'Adaptabilidade'].map((s) => (
                  <span key={s} className="tag-badge">{s}</span>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="flex flex-col gap-4">
              <div className="glass-card rounded-2xl p-6">
                <h2 className="font-display font-semibold text-sm text-text-main mb-5">Contato</h2>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:miguelmcastell@hotmail.com"
                    className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    <Mail size={15} className="flex-shrink-0" />
                    miguelmcastell@hotmail.com
                  </a>
                  <a
                    href="https://github.com/miguelcastell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    <Github size={15} className="flex-shrink-0" />
                    github.com/miguelcastell
                  </a>
                  <a
                    href="https://www.linkedin.com/in/miguel-mantoan-castellani-744304324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors"
                  >
                    <Linkedin size={15} className="flex-shrink-0" />
                    linkedin.com/in/miguel-mantoan-castellani-744304324
                  </a>
                </div>

                <div className="mt-5 pt-5 border-t border-border/60 space-y-2">
                  <div className="text-xs text-text-muted">Toledo, Paraná — Brasil</div>
                  <div className="text-xs text-text-muted">+55 (19) 97133-0883</div>
                </div>
              </div>

              <button
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-[#0c6578] transition-colors"
                disabled
                title="Currículo disponível em breve"
              >
                <Download size={15} />
                Baixar Currículo
              </button>

              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border text-sm font-medium text-text-main hover:border-primary/40 hover:text-primary transition-colors"
              >
                Ver projetos
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="font-display font-bold text-2xl text-text-main mb-8">
              Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="glass-card rounded-xl p-5">
                  <h3 className="font-display font-semibold text-sm text-primary mb-3">{category}</h3>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Courses */}
          <div className="mb-20">
            <h2 className="font-display font-bold text-2xl text-text-main mb-8">
              Formação & Cursos
            </h2>

            {/* Degree */}
            <div className="glass-card rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-text-main">
                    Bacharelado em Inteligência Artificial
                  </h3>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    Faculdade Donaduzzi — Biopark
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    3º período · Toledo, PR · IA aplicada, Engenharia de Dados, ML
                  </p>
                </div>
                <span className="text-sm text-text-muted flex-shrink-0">2025 — Cursando</span>
              </div>
            </div>

            {/* Courses */}
            <div className="flex flex-col divide-y divide-border border border-border rounded-xl overflow-hidden">
              {courses.map((course) => (
                <div key={course.title} className="flex items-center justify-between gap-4 p-4 bg-surface">
                  <div>
                    <span className="text-sm font-medium text-text-main">{course.title}</span>
                    <span className="text-xs text-text-muted ml-2">— {course.platform}</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-xs text-text-muted block">{course.hours}</span>
                    <span className="text-xs text-text-muted">{course.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-2xl text-text-main mb-3">
              Vamos conversar?
            </h2>
            <p className="text-text-muted mb-6 max-w-md mx-auto">
              Estou aberto a oportunidades em Engenharia de Dados, Análise de Dados e projetos de
              ML. Me envie uma mensagem.
            </p>
            <a
              href="mailto:miguelmcastell@hotmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-medium hover:bg-[#0c6578] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail size={16} />
              miguelmcastell@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
