'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react'

const skillGroups = [
  {
    label: 'Dados & ETL',
    skills: [
      'Pandas',
      'PySpark',
      'Apache Spark',
      'Apache Airflow',
      'SQL',
      'Data Warehouse',
      'Data Lake',
      'Databricks',
    ],
  },
  {
    label: 'BI & Visualização',
    skills: ['Power BI', 'Plotly', 'Seaborn', 'Looker', 'NumPy', 'Excel'],
  },
  {
    label: 'IA & Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'Visão Computacional', 'Clustering', 'NLP'],
  },
  {
    label: 'Banco de Dados',
    skills: ['PostgreSQL', 'SQLite', 'DuckDB', 'MySQL'],
  },
  {
    label: 'DevOps e Ferramentas',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Photoshop', 'Trello', 'PyCharm', 'Postman'],
  },
  {
    label: 'Desenvolvimento',
    skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'Web Scraping'],
  },
]

const contactLinks = [
  {
    icon: Mail,
    label: 'miguelmcastell@hotmail.com',
    href: 'mailto:miguelmcastell@hotmail.com',
  },
  {
    icon: Github,
    label: 'github.com/miguelcastell',
    href: 'https://github.com/miguelcastell',
  },
  {
    icon: Linkedin,
    label: 'miguel-mantoan-castellani-744304324',
    href: 'https://www.linkedin.com/in/miguel-mantoan-castellani-744304324/',
  },
  {
    icon: MapPin,
    label: 'Toledo, PR — Brasil',
    href: null,
  },
]

export function AboutSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="sobre" className="section-padding py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest mb-2">
            Sobre mim
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight">
            Quem está por trás dos dados.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Bio column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-7 flex items-center gap-5">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-[#334155] ring-4 ring-[#0E7490]/20 bg-[#1E293B] flex-shrink-0">
                {!imageError ? (
                  <Image
                    src="/images/miguel-profile.jpg"
                    alt="Foto de Miguel Mantoan Castellani"
                    fill
                    sizes="(max-width: 768px) 128px, 144px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display font-bold text-2xl text-[#22D3EE]">
                    MC
                  </div>
                )}
              </div>
              <div>
                <p className="text-base md:text-lg font-semibold text-text-main">Miguel Mantoan Castellani</p>
                <p className="text-sm text-text-muted">Analista de Sistemas · Engenharia de Dados · IA</p>
              </div>
            </div>

            <p className="text-text-muted leading-relaxed mb-5">
              Sou Miguel, 19 anos, de Itapira - SP, atualmento moro em Toledo - PR. Trabalho como{' '}
              <strong className="text-text-main font-semibold">
                Analista de Sistemas na Saga Contabilidade
              </strong>
              , com foco em desenvolvimento de dashboards, automação de processos com Python, parametrização de sistemas e suporte em infraestrutura, incluindo manutenção de hardware e software.
            </p>
            <p className="text-text-muted leading-relaxed mb-5">
              Curso{' '}
              <strong className="text-text-main font-semibold">
                Inteligência Artificial na Faculdade Donaduzzi (Biopark)
              </strong>{' '}
              — 3º período, com foco em ML, engenharia de dados e IA aplicada. Cada projeto aqui
              mostra a jornada completa do dado: coleta, tratamento, modelagem, análise e entrega.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Objetivo:{' '}
              <strong className="text-text-main font-semibold">
                Senior Data Engineer e Data Analytics ou ML Engineer
              </strong>
              , construindo produtos próprios baseados em dados e IA.
            </p>

            {/* Contact links */}
            <div className="space-y-3 mb-8">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-[#22D3EE]" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-text-muted hover:text-text-main transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm text-text-muted">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="glass-card rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap size={16} className="text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-main">
                    Bacharelado em Inteligência Artificial
                  </p>
                  <p className="text-xs text-[#22D3EE] mt-0.5">Faculdade Donaduzzi — Biopark</p>
                  <p className="text-xs text-text-muted mt-1">2025 — Em andamento · 3º período</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display font-semibold text-lg text-text-main mb-6">
              Competências técnicas
            </h3>
            <div className="space-y-6">
              {skillGroups.map((group, i) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2.5">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-medium border border-[#334155] bg-[#1E293B]/60 text-text-muted hover:border-primary/40 hover:text-[#22D3EE] transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
