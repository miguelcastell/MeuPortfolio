import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { PageWrapper } from '@/components/layout/PageWrapper'

export const metadata: Metadata = {
  title: 'Estudos — Notas Técnicas',
  description:
    'Anotações técnicas sobre Engenharia de Dados, Machine Learning e Python. Mini-artigos focados em conceitos aplicados.',
}

const estudos = [
  {
    slug: 'etl-vs-elt',
    title: 'ETL vs ELT: quando usar cada abordagem',
    description:
      'Diferenças práticas entre as duas arquiteturas de pipeline, com exemplos de quando cada uma faz sentido no contexto de dados modernos.',
    tags: ['Data Engineering', 'SQL', 'Arquitetura'],
    readTime: '4 min',
    date: '2025-11',
  },
  {
    slug: 'dados-desbalanceados',
    title: 'Tratando dados desbalanceados em ML',
    description:
      'Estratégias para lidar com datasets onde uma classe é muito mais frequente — SMOTE, class_weight, undersampling e implicações nas métricas.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    readTime: '6 min',
    date: '2025-10',
  },
  {
    slug: 'qualidade-dados',
    title: 'Checklist de Qualidade de Dados',
    description:
      'Os 7 itens que verifico em todo dataset antes de qualquer análise: nulos, duplicatas, tipos, encoding, outliers, volume e consistência.',
    tags: ['Data Engineering', 'Python', 'Pandas'],
    readTime: '3 min',
    date: '2025-09',
  },
  {
    slug: 'encoding-csv',
    title: 'Encoding em CSV: o problema do Latin-1 no Brasil',
    description:
      'Por que dados brasileiros frequentemente chegam corrompidos e como tratar encoding de forma robusta em pipelines Python.',
    tags: ['Python', 'Data Engineering'],
    readTime: '3 min',
    date: '2025-08',
  },
  {
    slug: 'precision-recall',
    title: 'Precision, Recall e F1: além da acurácia',
    description:
      'Quando acurácia mente e como escolher a métrica certa para seu problema de classificação, especialmente em dados desbalanceados.',
    tags: ['Machine Learning', 'Métricas'],
    readTime: '5 min',
    date: '2025-07',
  },
  {
    slug: 'pl-pgsql-procedures',
    title: 'PL/pgSQL: Procedures e Triggers na prática',
    description:
      'Como encapsular regras de negócio diretamente no banco de dados com PostgreSQL, evitando duplicação de lógica na aplicação.',
    tags: ['SQL', 'PostgreSQL', 'PL/pgSQL'],
    readTime: '7 min',
    date: '2025-06',
  },
]

export default function EstudosPage() {
  return (
    <PageWrapper showProgress>
      <section className="section-padding py-20">
        <div className="container-content">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
              Conhecimento técnico
            </p>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-text-main tracking-tight mb-4">
              Estudos
            </h1>
            <p className="text-lg text-text-muted max-w-xl">
              Notas técnicas sobre o que estou aprendendo e aplicando. Direto ao ponto — problema,
              conceito e aplicação prática.
            </p>
          </div>

          {/* Articles list */}
          <div className="flex flex-col divide-y divide-border">
            {estudos.map((estudo, i) => (
              <Link
                key={estudo.slug}
                href={`/estudos/${estudo.slug}`}
                className="group flex items-start justify-between gap-6 py-7 transition-colors hover:text-primary"
              >
                <div className="flex gap-5 items-start">
                  {/* Number */}
                  <span className="font-mono text-xs text-border mt-1 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h2 className="font-display font-semibold text-lg text-text-main group-hover:text-primary transition-colors mb-1.5">
                      {estudo.title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed mb-3">
                      {estudo.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      {estudo.tags.map((tag) => (
                        <span key={tag} className="tag-badge text-[11px]">
                          {tag}
                        </span>
                      ))}
                      <span className="text-xs text-text-muted flex items-center gap-1">
                        <BookOpen size={11} />
                        {estudo.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
