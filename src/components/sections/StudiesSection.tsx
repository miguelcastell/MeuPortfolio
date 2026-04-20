'use client'

import Link from 'next/link'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const articles = [
  {
    slug: 'etl-vs-elt',
    title: 'ETL vs ELT: quando usar cada abordagem',
    excerpt:
      'Como escolher entre transformar antes ou depois de carregar — e por que isso importa para performance e custo no pipeline.',
    area: 'Data Engineering',
    readTime: '4 min',
    tags: ['ETL', 'ELT', 'Pipeline'],
  },
  {
    slug: 'dados-desbalanceados',
    title: 'Tratando dados desbalanceados em ML',
    excerpt:
      'SMOTE, undersampling e threshold tuning — estratégias práticas para classificadores com classes minoritárias raras.',
    area: 'Machine Learning',
    readTime: '6 min',
    tags: ['ML', 'SMOTE', 'Classificação'],
  },
  {
    slug: 'qualidade-dados',
    title: 'Checklist de Qualidade de Dados',
    excerpt:
      'Os 7 critérios fundamentais que todo pipeline deveria validar antes de alimentar um modelo ou dashboard.',
    area: 'Data Engineering',
    readTime: '3 min',
    tags: ['Data Quality', 'Pipeline', 'Validação'],
  },
  {
    slug: 'encoding-csv',
    title: 'Encoding em CSV: o problema do Latin-1 no Brasil',
    excerpt:
      'Por que dados brasileiros quebram em Python e como resolver de vez o conflito Latin-1 vs UTF-8.',
    area: 'Python',
    readTime: '3 min',
    tags: ['Python', 'CSV', 'Encoding'],
  },
  {
    slug: 'precision-recall',
    title: 'Precision, Recall e F1: além da acurácia',
    excerpt:
      'Quando acurácia mente — métricas essenciais para avaliar modelos de classificação em cenários reais.',
    area: 'Machine Learning',
    readTime: '5 min',
    tags: ['Métricas', 'ML', 'Avaliação'],
  },
  {
    slug: 'pl-pgsql-procedures',
    title: 'PL/pgSQL: Procedures e Triggers na prática',
    excerpt:
      'Como automatizar fluxos de negócio direto no banco — sem depender da aplicação para lógica crítica.',
    area: 'SQL',
    readTime: '7 min',
    tags: ['PostgreSQL', 'PL/pgSQL', 'Triggers'],
  },
]

const areaColors: Record<string, { text: string; bg: string; border: string }> = {
  'Data Engineering': {
    text: '#22D3EE',
    bg: 'rgba(14, 116, 144, 0.12)',
    border: 'rgba(14, 116, 144, 0.28)',
  },
  'Machine Learning': {
    text: '#2DD4BF',
    bg: 'rgba(20, 184, 166, 0.12)',
    border: 'rgba(20, 184, 166, 0.28)',
  },
  'Python': {
    text: '#22D3EE',
    bg: 'rgba(14, 116, 144, 0.12)',
    border: 'rgba(14, 116, 144, 0.28)',
  },
  'SQL': {
    text: '#2DD4BF',
    bg: 'rgba(20, 184, 166, 0.12)',
    border: 'rgba(20, 184, 166, 0.28)',
  },
}

export function StudiesSection() {
  return (
    <section id="estudos" className="section-padding py-24">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest mb-2">
              Estudos
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-3">
              Notas técnicas.
            </h2>
            <p className="text-text-muted max-w-xl">
              Conceitos que aprendi na prática — escritos para fixar e compartilhar.
            </p>
          </div>
          <Link
            href="/estudos"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-[#22D3EE] transition-colors flex-shrink-0"
          >
            Ver todos
            <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, i) => {
            const color = areaColors[article.area] ?? areaColors['Data Engineering']
            return (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group relative rounded-xl border border-[#334155] bg-[#1E293B]/50 p-5 flex flex-col transition-all duration-300 hover:border-primary/35 hover:shadow-[0_4px_20px_rgba(14,116,144,0.1)] hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium border"
                    style={{
                      color: color.text,
                      background: color.bg,
                      borderColor: color.border,
                    }}
                  >
                    {article.area}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] text-text-muted flex-shrink-0">
                    <Clock size={10} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-base text-text-main leading-snug mb-2 group-hover:text-[#22D3EE] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded border border-[#334155] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/estudos/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#22D3EE] hover:text-[#67E8F9] transition-colors mt-auto"
                >
                  <BookOpen size={11} />
                  Ler nota
                  <ArrowRight size={11} />
                </Link>
              </motion.article>
            )
          })}
        </div>

        <div className="flex md:hidden justify-center mt-6">
          <Link
            href="/estudos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#22D3EE] border border-primary/30 px-5 py-2.5 rounded-xl hover:bg-primary/5 transition-colors"
          >
            Ver todos os estudos <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}
