import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Clock, Lightbulb } from 'lucide-react'
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

**ETL (Extract → Transform → Load)** é a abordagem clássica: os dados são extraídos da fonte, transformados em uma camada intermediária e só então carregados no destino final.

O fluxo fica assim:

- **Extract** — Lê os dados da fonte (banco, arquivo, API)
- **Transform** — Limpa, normaliza e aplica regras de negócio fora do destino
- **Load** — Carrega os dados já tratados no destino

É a escolha certa quando o destino tem capacidade limitada de processamento, as transformações são complexas e precisam de lógica externa ao banco, ou quando você precisa garantir que nenhum dado bruto chegue ao ambiente final.

## O que é ELT?

**ELT (Extract → Load → Transform)** inverte a ordem: os dados brutos chegam primeiro ao destino (normalmente um data warehouse moderno) e as transformações acontecem lá dentro, usando o poder de processamento da própria plataforma.

Faz sentido quando o destino tem alto poder de processamento (BigQuery, Snowflake, Redshift), você quer manter o dado bruto disponível para auditoria e reprocessamento, e as transformações mudam com frequência — onde ferramentas como **dbt** brilham, versionando cada etapa.

## Por que isso importa na prática?

Para projetos menores com PostgreSQL e Pandas, **ETL ainda domina** — é mais simples, você tem controle total e não depende de infraestrutura cloud.

Para contextos com data warehouses modernos e equipes de dados maiores, **ELT com dbt é a tendência atual** — você escreve SQL transformando dados dentro do warehouse, versiona tudo no Git e tem lineage automático.

## Como escolher?

A pergunta certa é: **onde você tem mais poder de processamento e onde as transformações precisam ser mantidas?**

Se o pipeline roda em Python local com Pandas, vai de ETL. Se os dados vão para um warehouse cloud com escalabilidade horizontal, ELT faz mais sentido.
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

Imagine um dataset de detecção de fraude onde apenas 0.1% das transações são fraudulentas. Um modelo que classifica **tudo** como "não fraude" tem 99.9% de acurácia — e é completamente inútil para o que realmente importa.

Esse é o problema central: quando as classes não têm representação proporcional, os algoritmos tendem a ignorar a classe minoritária porque errar nela tem pouco impacto na métrica geral.

## Estratégias principais

### 1. Ajustar os pesos das classes

A solução mais simples e com menos risco: você informa ao modelo que errar na classe minoritária tem um custo maior.

\`\`\`python
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(class_weight='balanced')
\`\`\`

O parâmetro \`balanced\` faz o Scikit-learn calcular os pesos automaticamente com base na frequência de cada classe. Sem introduzir dados novos, sem risco de overfitting sintético.

### 2. SMOTE — Oversampling sintético

O SMOTE (Synthetic Minority Over-sampling Technique) gera novos exemplos da classe minoritária interpolando entre exemplos reais. Não duplica — cria pontos intermediários no espaço de features.

\`\`\`python
from imblearn.over_sampling import SMOTE

sm = SMOTE(random_state=42)
X_res, y_res = sm.fit_resample(X_train, y_train)
\`\`\`

**Atenção:** aplique SMOTE somente no conjunto de treino, nunca no de teste. Contaminar o teste com dados sintéticos é data leakage.

### 3. Undersampling

Remove exemplos da classe majoritária até equilibrar o dataset. Mais agressivo — só use quando o dataset é muito grande e você pode perder exemplos sem prejuízo.

## Métricas que importam

Com dados desbalanceados, **nunca use apenas acurácia**. Prefira:

- **F1-Score** — equilíbrio entre Precision e Recall, bom ponto de partida
- **ROC-AUC** — avalia o poder discriminativo geral do modelo
- **Precision-Recall AUC** — mais informativo que ROC em casos com extremo desbalanceamento

## Lição principal

O desbalanceamento não é um problema técnico isolado — ele é um reflexo do problema de negócio. Em fraude, um falso negativo (fraude não detectada) é muito mais caro que um falso positivo. Alinhe sua estratégia com esse custo real.
    `,
  },

  'qualidade-dados': {
    title: 'Checklist de Qualidade de Dados',
    description:
      'Os 7 itens que verifico em todo dataset antes de qualquer análise: nulos, duplicatas, tipos, encoding, outliers, volume e consistência.',
    tags: ['Data Engineering', 'Python', 'Pandas'],
    readTime: '3 min',
    date: 'Setembro 2025',
    content: `
## Por que verificar antes de analisar?

Dados ruins produzem insights ruins — e insights ruins levam a decisões ruins. O custo de corrigir um modelo treinado em dados com problemas é muito maior do que o custo de verificar esses problemas antes de começar.

Esse checklist nasceu dos erros que cometi. Cada item aqui corresponde a um problema que já me custou tempo.

## Os 7 verificadores

### 1. Valores nulos

\`\`\`python
df.isnull().sum() / len(df) * 100
\`\`\`

Veja a proporção, não só a contagem. 100 nulos em 100k linhas é diferente de 100 nulos em 500 linhas. Entenda **por que** os nulos existem antes de decidir como tratá-los.

### 2. Duplicatas

\`\`\`python
df.duplicated().sum()
\`\`\`

Duplicatas genuínas existem (ex: duas compras idênticas). Duplicatas por erro de ETL são problema. Entenda o contexto antes de deletar.

### 3. Tipos de colunas

\`\`\`python
df.dtypes
\`\`\`

Os problemas clássicos: datas como string, números como object, categorias numéricas. O tipo errado vai quebrar tudo silenciosamente nas etapas seguintes.

### 4. Encoding de caracteres

\`\`\`python
df = pd.read_csv('arquivo.csv', encoding='utf-8')
# Se quebrar, tente:
df = pd.read_csv('arquivo.csv', encoding='latin-1')
\`\`\`

Dados brasileiros quase sempre chegam em Latin-1. Se você ver \`ç\` virando caracteres estranhos, é encoding.

### 5. Outliers

\`\`\`python
Q1 = df['col'].quantile(0.25)
Q3 = df['col'].quantile(0.75)
IQR = Q3 - Q1
outliers = df[(df['col'] < Q1 - 1.5*IQR) | (df['col'] > Q3 + 1.5*IQR)]
\`\`\`

Outliers podem ser erros de entrada ou eventos reais e raros. Remover automaticamente é arriscado — analise caso a caso.

### 6. Volume esperado

Dados chegaram completos? Um arquivo com 50k linhas quando o esperado é 500k é uma informação crítica. Sempre valide o volume contra a expectativa da fonte.

### 7. Consistência de domínio

Valores que não fazem sentido no contexto do negócio: idades negativas, datas futuras em campos históricos, CEPs com 4 dígitos, categorias inválidas. Esse passo exige conhecimento do domínio.

## Resumo do fluxo

A ordem importa: comece pelos tipos (3) e encoding (4) antes de verificar nulos (1) e outliers (5), porque um tipo errado pode mascarar problemas nas etapas seguintes.
    `,
  },

  'encoding-csv': {
    title: 'Encoding em CSV: o problema do Latin-1 no Brasil',
    description:
      'Por que dados brasileiros frequentemente chegam corrompidos e como tratar encoding de forma robusta em pipelines Python.',
    tags: ['Python', 'Data Engineering'],
    readTime: '3 min',
    date: 'Agosto 2025',
    content: `
## Por que isso acontece?

Computadores armazenam texto como números. **Encoding** é o mapa que define qual número corresponde a qual caractere. O problema: existem vários mapas diferentes, e não há garantia de que quem gerou o arquivo usou o mesmo que você vai usar para ler.

No Brasil, o problema é especialmente comum porque sistemas legados (ERPs, planilhas Excel antigas, sistemas do governo) ainda salvam arquivos em **Latin-1 (ISO-8859-1)**, enquanto Python 3 assume **UTF-8** como padrão.

## O que você vê quando o encoding está errado

Você abre um CSV e vê isso:

- \`João\` vira \`JoÃ£o\`
- \`São Paulo\` vira \`SÃ£o Paulo\`
- \`Ação\` vira \`AÃ§Ã£o\`

Esses caracteres estranhos são a representação incorreta dos bytes do Latin-1 sendo interpretados como UTF-8. O dado não está corrompido — só está sendo lido com o mapa errado.

## Como identificar e corrigir

### Tentativa progressiva

\`\`\`python
import pandas as pd

encodings = ['utf-8', 'latin-1', 'cp1252', 'utf-8-sig']

for enc in encodings:
    try:
        df = pd.read_csv('arquivo.csv', encoding=enc)
        print(f'Funcionou com: {enc}')
        break
    except (UnicodeDecodeError, Exception):
        continue
\`\`\`

### Detectar automaticamente com chardet

\`\`\`python
import chardet

with open('arquivo.csv', 'rb') as f:
    resultado = chardet.detect(f.read())
    print(resultado)
    # {'encoding': 'ISO-8859-1', 'confidence': 0.73}

df = pd.read_csv('arquivo.csv', encoding=resultado['encoding'])
\`\`\`

### Converter o arquivo de uma vez

\`\`\`python
with open('arquivo.csv', 'r', encoding='latin-1') as f:
    conteudo = f.read()

with open('arquivo_utf8.csv', 'w', encoding='utf-8') as f:
    f.write(conteudo)
\`\`\`

## Prevenção em pipelines

Em todo pipeline que lê CSV, sempre declare o encoding explicitamente — nunca dependa do padrão:

\`\`\`python
# Nunca:
df = pd.read_csv('arquivo.csv')

# Sempre:
df = pd.read_csv('arquivo.csv', encoding='utf-8')
# ou
df = pd.read_csv('arquivo.csv', encoding='latin-1')
\`\`\`

## Regra prática

Se o arquivo vem de um sistema brasileiro legado (SAP, Totvs, planilhas Excel exportadas no Windows), comece com \`latin-1\`. Se vem de uma API moderna ou sistema web, provavelmente é \`utf-8\`.
    `,
  },

  'precision-recall': {
    title: 'Precision, Recall e F1: além da acurácia',
    description:
      'Quando acurácia mente e como escolher a métrica certa para seu problema de classificação, especialmente em dados desbalanceados.',
    tags: ['Machine Learning', 'Métricas'],
    readTime: '5 min',
    date: 'Julho 2025',
    content: `
## O problema com acurácia

Acurácia mede quantas previsões o modelo acertou no total. Parece simples e direto — mas é enganosa em qualquer problema onde os erros não têm o mesmo custo.

Exemplo clássico: detecção de tumor maligno. Se 95% dos pacientes são saudáveis, um modelo que classifica **todo mundo como saudável** tem 95% de acurácia. Mas ele deixa 5% dos pacientes com câncer sem diagnóstico. Isso é um desastre.

## As quatro situações possíveis

Em classificação binária, cada previsão cai em um de quatro casos:

- **Verdadeiro Positivo (TP)** — Previu positivo, era positivo. Acertou.
- **Verdadeiro Negativo (TN)** — Previu negativo, era negativo. Acertou.
- **Falso Positivo (FP)** — Previu positivo, era negativo. Alarme falso.
- **Falso Negativo (FN)** — Previu negativo, era positivo. Erro mais perigoso na maioria dos casos.

## Precision: quando diz que é positivo, está certo?

Precision = TP dividido por (TP + FP).

Alta precision significa poucos alarmes falsos. Importante quando o **custo de agir errado é alto**: marcar um e-mail legítimo como spam, bloquear um cartão de crédito válido.

## Recall: de todos os positivos reais, quantos encontrou?

Recall = TP dividido por (TP + FN).

Alto recall significa perder poucos casos positivos reais. Crítico quando o **custo de não agir é alto**: deixar uma fraude passar, não detectar um tumor.

## O trade-off inevitável

Precision e Recall andam em direções opostas. Aumentar o threshold do modelo aumenta Precision e diminui Recall. Diminuir o threshold faz o oposto.

Não existe configuração que maximize os dois ao mesmo tempo — você precisa escolher qual erro é mais tolerável para o seu problema.

## F1-Score: o equilíbrio

Quando você não tem uma preferência clara entre Precision e Recall, o **F1-Score** combina os dois em uma única métrica. É a média harmônica — penaliza mais quando um dos dois está muito baixo.

Um modelo com Precision 0.9 e Recall 0.1 tem F1 = 0.18, não 0.5. Isso revela modelos que parecem bons mas são desequilibrados.

## Como usar no código

\`\`\`python
from sklearn.metrics import classification_report

print(classification_report(y_test, y_pred))
\`\`\`

O \`classification_report\` mostra Precision, Recall e F1 para cada classe. Sempre leia ele antes de qualquer outra métrica.

## Como escolher a métrica certa

Faça essa pergunta: **qual erro é mais custoso para o meu negócio?**

- Falso Positivo caro → priorize **Precision** (ex: spam filter, bloqueio de conta)
- Falso Negativo caro → priorize **Recall** (ex: detecção de fraude, diagnóstico médico)
- Sem preferência clara → use **F1-Score**
- Quer uma visão geral do modelo → use **ROC-AUC**
    `,
  },

  'pl-pgsql-procedures': {
    title: 'PL/pgSQL: Procedures e Triggers na prática',
    description:
      'Como encapsular regras de negócio diretamente no banco de dados com PostgreSQL, evitando duplicação de lógica na aplicação.',
    tags: ['SQL', 'PostgreSQL', 'PL/pgSQL'],
    readTime: '7 min',
    date: 'Junho 2025',
    content: `
## O que é PL/pgSQL?

**PL/pgSQL** (Procedural Language/PostgreSQL) é a linguagem procedural nativa do PostgreSQL. Ela adiciona estruturas de controle (IF, LOOP, variáveis, tratamento de erros) ao SQL puro, permitindo escrever lógica complexa que roda diretamente dentro do banco.

A ideia central: **mover regras de negócio para o banco** quando essas regras precisam ser garantidas independentemente de qual aplicação está acessando os dados.

## Functions vs Procedures

São parecidas, mas têm propósitos diferentes:

- **FUNCTION** — retorna um valor, pode ser usada em SELECT
- **PROCEDURE** — executada com CALL, pode gerenciar transações (COMMIT/ROLLBACK)

Para automação de fluxos que modificam dados, geralmente usamos **Procedures**. Para cálculos e transformações reutilizáveis, usamos **Functions**.

## Criando uma Function básica

\`\`\`sql
CREATE OR REPLACE FUNCTION calcular_total_pedido(p_pedido_id INT)
RETURNS NUMERIC AS $$
DECLARE
    v_total NUMERIC := 0;
BEGIN
    SELECT SUM(quantidade * preco_unitario)
    INTO v_total
    FROM itens_pedido
    WHERE pedido_id = p_pedido_id;

    RETURN COALESCE(v_total, 0);
END;
$$ LANGUAGE plpgsql;

-- Usando:
SELECT calcular_total_pedido(42);
\`\`\`

O bloco \`DECLARE\` define variáveis locais. O \`BEGIN...END\` é o corpo. \`COALESCE\` garante que pedidos sem itens retornem 0 em vez de NULL.

## Criando uma Procedure com tratamento de erro

\`\`\`sql
CREATE OR REPLACE PROCEDURE finalizar_pedido(p_pedido_id INT)
LANGUAGE plpgsql AS $$
DECLARE
    v_status VARCHAR;
BEGIN
    SELECT status INTO v_status
    FROM pedidos
    WHERE id = p_pedido_id;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Pedido % nao encontrado', p_pedido_id;
    END IF;

    IF v_status = 'finalizado' THEN
        RAISE NOTICE 'Pedido % ja esta finalizado', p_pedido_id;
        RETURN;
    END IF;

    UPDATE pedidos
    SET status = 'finalizado', finalizado_em = NOW()
    WHERE id = p_pedido_id;

    RAISE NOTICE 'Pedido % finalizado com sucesso', p_pedido_id;
END;
$$;

-- Chamando:
CALL finalizar_pedido(42);
\`\`\`

\`RAISE EXCEPTION\` interrompe a execução e faz rollback. \`RAISE NOTICE\` é um log sem interromper — ótimo para debug.

## Triggers: automação reativa

**Triggers** executam automaticamente quando algo acontece numa tabela (INSERT, UPDATE, DELETE). São a forma mais poderosa de garantir consistência sem depender da aplicação.

### Exemplo: auditoria automática de status

\`\`\`sql
-- Tabela de auditoria
CREATE TABLE auditoria_pedidos (
    id SERIAL PRIMARY KEY,
    pedido_id INT,
    status_anterior VARCHAR,
    status_novo VARCHAR,
    alterado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Funcao que o trigger vai chamar
CREATE OR REPLACE FUNCTION registrar_mudanca_status()
RETURNS TRIGGER AS $$
BEGIN
    IF OLD.status IS DISTINCT FROM NEW.status THEN
        INSERT INTO auditoria_pedidos (pedido_id, status_anterior, status_novo)
        VALUES (NEW.id, OLD.status, NEW.status);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criando o trigger
CREATE TRIGGER trg_auditoria_pedidos
AFTER UPDATE ON pedidos
FOR EACH ROW
EXECUTE FUNCTION registrar_mudanca_status();
\`\`\`

Agora toda vez que um pedido mudar de status, a mudança é registrada automaticamente — sem nenhuma linha extra na aplicação.

## Quando usar e quando não usar

**Use PL/pgSQL quando:**

- A lógica precisa ser garantida independentemente da aplicação
- Você tem múltiplas aplicações acessando o mesmo banco
- A operação envolve várias tabelas e precisa ser atômica
- Precisa de auditoria automática

**Evite quando:**

- A lógica é simples o suficiente para SQL puro
- A regra muda com frequência (manutenção fica mais difícil)
- O time não tem fluência em SQL procedural
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
    title: `${estudo.title} — Estudos`,
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
          <header className="mb-10 pb-8 border-b border-[#334155]/60">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {estudo.tags.map((tag) => (
                <span key={tag} className="tag-badge text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-4">
              {estudo.title}
            </h1>
            <p className="text-text-muted leading-relaxed mb-5">{estudo.description}</p>
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

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-[#334155]/60">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-[#334155] bg-[#1E293B]/40">
              <Lightbulb size={16} className="text-[#22D3EE] flex-shrink-0" />
              <p className="text-sm text-text-muted">
                Essas notas são registros do meu aprendizado — escritas para fixar e compartilhar.{' '}
                <Link
                  href="/estudos"
                  className="text-[#22D3EE] hover:text-[#67E8F9] transition-colors"
                >
                  Ver todos os estudos →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

function renderMarkdown(md: string): string {
  return md
    .trim()
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_m, _lang, code) =>
      `<pre><code>${escapeHtml(code.trim())}</code></pre>`
    )
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`\n]+)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/((<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
    .split(/\n\n+/)
    .map((block) => {
      const b = block.trim()
      if (!b) return ''
      if (/^<(h[23]|ul|pre|li)/.test(b)) return b
      return `<p>${b}</p>`
    })
    .join('\n')
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}
