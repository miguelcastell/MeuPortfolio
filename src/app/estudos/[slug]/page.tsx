import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'
import { PageWrapper } from '@/components/layout/PageWrapper'

interface Props {
  params: Promise<{ slug: string }>
}

const estudos: Record<
  string,
  {
    title: string
    description: string
    tags: string[]
    readTime: string
    date: string
    content: string
  }
> = {
  'etl-vs-elt': {
    title: 'ETL vs ELT: quando usar cada abordagem',
    description:
      'Diferenças práticas entre as duas arquiteturas de pipeline, com exemplos de quando cada uma faz sentido no contexto de dados modernos.',
    tags: ['Data Engineering', 'SQL', 'Arquitetura'],
    readTime: '4 min',
    date: 'Novembro 2025',
    content: `
## O que é ETL?

**ETL (Extract → Transform → Load)** é a abordagem clássica: os dados são extraídos da fonte, transformados em uma camada intermediária (staging) e só então carregados no destino.

É a escolha certa quando:
- O volume de dados é grande e transformações são custosas
- O sistema de destino tem capacidade limitada de processamento
- As regras de negócio são complexas e exigem lógica externa ao banco

## O que é ELT?

**ELT (Extract → Load → Transform)** inverte a ordem: dados brutos chegam primeiro ao destino (normalmente um data warehouse moderno), e as transformações acontecem lá.

Faz sentido quando:
- O destino tem alto poder de processamento (BigQuery, Snowflake, Redshift)
- Você quer manter o dado bruto disponível para auditoria
- As transformações mudam com frequência e você quer versioná-las com dbt

## Na prática

Para projetos menores com PostgreSQL e Pandas, ETL ainda domina. Para contextos com data warehouses cloud, ELT com dbt é a tendência atual.

O critério principal: **onde você tem mais poder de processamento e onde as transformações precisam ser mantidas**.
    `,
  },
  'dados-desbalanceados': {
    title: 'Tratando dados desbalanceados em ML',
    description:
      'Estratégias para lidar com datasets onde uma classe é muito mais frequente — SMOTE, class_weight, undersampling e implicações nas métricas.',
    tags: ['Machine Learning', 'Python', 'Scikit-learn'],
    readTime: '6 min',
    date: 'Outubro 2025',
    content: `
## O problema do desbalanceamento

Imagine um dataset de detecção de fraude onde apenas 0.1% das transações são fraudulentas. Um modelo que classifica tudo como "não fraude" tem 99.9% de acurácia — e é completamente inútil.

## Estratégias principais

### 1. Ajustar os pesos das classes

A solução mais simples: informar ao modelo que errar na classe minoritária tem custo maior.

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(class_weight='balanced')
\`\`\`

### 2. SMOTE (Oversampling sintético)

Gera exemplos sintéticos da classe minoritária interpolando entre exemplos reais existentes.

\`\`\`python
from imblearn.over_sampling import SMOTE

sm = SMOTE(random_state=42)
X_res, y_res = sm.fit_resample(X_train, y_train)
\`\`\`

### 3. Undersampling

Remove exemplos da classe majoritária. Mais agressivo — só use quando o dataset é muito grande.

## Métricas que importam

Com dados desbalanceados, **nunca use apenas acurácia**. Prefira:
- F1-Score (equilíbrio entre Precision e Recall)
- ROC-AUC
- Precision-Recall AUC (mais informativo que ROC em casos extremos)
    `,
  },
  'qualidade-dados': {
    title: 'Checklist de Qualidade de Dados',
    description:
      'Os 7 itens que verifico em todo dataset antes de qualquer análise.',
    tags: ['Data Engineering', 'Python', 'Pandas'],
    readTime: '3 min',
    date: 'Setembro 2025',
    content: `
## Os 7 verificadores

Antes de qualquer pipeline, análise ou modelo, passo por estes 7 pontos:

### 1. Valores nulos

\`\`\`python
df.isnull().sum() / len(df) * 100
\`\`\`

### 2. Duplicatas

\`\`\`python
df.duplicated().sum()
\`\`\`

### 3. Tipos de colunas

\`\`\`python
df.dtypes
\`\`\`

Datas como string, números como object — problemas clássicos.

### 4. Encoding

\`\`\`python
# Tenta ler; se falhar, o encoding está errado
df = pd.read_csv('arquivo.csv', encoding='utf-8')
\`\`\`

### 5. Outliers

\`\`\`python
Q1 = df['col'].quantile(0.25)
Q3 = df['col'].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df['col'] < Q1 - 1.5*IQR) | (df['col'] > Q3 + 1.5*IQR)]
\`\`\`

### 6. Volume esperado

Dados chegaram completos? Um arquivo com 50k linhas quando o esperado é 500k é um dado importante.

### 7. Consistência de domínio

Valores que não fazem sentido no contexto: idades negativas, datas futuras em campos históricos, categorias inválidas.
    `,
  },
}

export function generateStaticParams() {
  return Object.keys(estudos).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const estudo = estudos[slug]
  if (!estudo) return { title: 'Estudo não encontrado' }

  return {
    title: estudo.title,
    description: estudo.description,
  }
}

export default async function EstudoPage({ params }: Props) {
  const { slug } = await params
  const estudo = estudos[slug]
  if (!estudo) notFound()

  return (
    <PageWrapper showProgress>
      <div className="container-content section-padding py-20">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <Link
            href="/estudos"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-main mb-10 transition-colors"
          >
            <ArrowLeft size={14} />
            Todos os estudos
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {estudo.tags.map((tag) => (
                <span key={tag} className="tag-badge text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-4">
              {estudo.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {estudo.readTime} de leitura
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen size={13} />
                {estudo.date}
              </span>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose-editorial"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(estudo.content) }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

function renderMarkdown(md: string): string {
  return md
    .trim()
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, _lang, code) => `<pre><code>${escapeHtml(code.trim())}</code></pre>`)
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/((<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|p|l])/gm, '<p>$&')
    .replace(/<p>(<[h|u])/g, '$1')
    .replace(/(<\/[h|u][^>]*>)<\/p>/g, '$1')
    .replace(/<p><\/p>/g, '')
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
