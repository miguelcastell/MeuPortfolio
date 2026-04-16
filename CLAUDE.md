# CLAUDE.md — Contexto do Projeto

## Quem é o Usuário

**Miguel Mantoan Castellani** — 20 anos, Toledo/PR, Brasil.

- **Cargo atual:** Analista de Sistemas na Saga Contabilidade LTDA (junho 2025–presente)
- **Formação:** Graduando em Inteligência Artificial — Faculdade Donaduzzi (Biopark), 3º período
- **Objetivo de carreira:** Senior Data Engineer ou ML Engineer; construir produtos próprios baseados em dados e IA
- **GitHub:** github.com/miguelcastell
- **LinkedIn:** linkedin.com/in/miguel-mantoan-castellani
- **Email:** miguelmscastell@hotmail.com

---

## Stack Principal

`Python` · `SQL / PostgreSQL` · `Pandas` · `Streamlit` · `Jupyter` · `TypeScript` · `PowerShell`

**Também usa:** Scikit-learn, TensorFlow, Keras, Apache Airflow, Power BI, Excel, BeautifulSoup, Selenium, PL/pgSQL, PHP, HTML5, CSS3, SAP, Git/GitHub

---

## O "Second Brain"

Este workspace é um sistema de conhecimento pessoal baseado em Obsidian, organizado em:

```
SecondBrain/
├── Home.md                    ← Hub central de navegação
├── Curriculo.md               ← Currículo completo
├── Índice — Projetos.md       ← Índice de projetos por categoria
├── Índice — Estudos.md        ← Índice de estudos
├── Projetos/
│   ├── Data Engineering/      (5 projetos)
│   ├── Machine Learning/      (5 projetos)
│   ├── Automacao/             (5 projetos)
│   ├── Banco de Dados/        (1 projeto)
│   ├── Web/                   (1 projeto)
│   └── Outros/                (3 projetos)
├── Estudos/
│   ├── Python/
│   ├── SQL/
│   ├── Machine Learning/
│   ├── Data Engineering/
│   └── TypeScript/
├── Ideias/
│   └── Ideias.md
└── Templates/
    ├── Template - Projeto.md
    ├── Template - Estudo.md
    └── Template - Ideia.md
```

Cada arquivo de projeto usa um template padrão: Descrição, Linguagem, Repositório, Status, Área (tags), Insights, Próximos passos (checklist), Conexões (links bidirecionais).

---

## Projetos (21 no total)

### Tier 1 — Projetos Vitrine (Em progresso)

| Projeto | Stack | Descrição |
|---------|-------|-----------|
| **Analise-Fraude-Financeira** | Python | Pipeline ETL completo para detecção de fraude financeira. Combina DE + DS com dados reais de transações. |
| **DataGuardian** | Python + Streamlit | Plataforma de qualidade de dados CSV: diagnóstico → tratamento assistido → exportação limpa. |
| **RecomendaAI** | Python | Sistema de recomendação de filmes com ML (Collaborative Filtering, Content-Based, Híbrido). |
| **PipeFlow** | Python | BI e análise de vendas: dashboard interativo com métricas de negócio. |

### Tier 2 — Projetos de Suporte Técnico

| Projeto | Stack | Descrição |
|---------|-------|-----------|
| **Banco-Loja** | PL/pgSQL | Sistema completo de gestão de pedidos em PostgreSQL com procedures e triggers. |
| **EuroSAT-Clustering** | Python | IA preditiva para clustering de imagens geoespaciais (satélite Sentinel-2 da ESA). |
| **titanic-repo** | Python/Jupyter | Projeto clássico Kaggle — EDA, tratamento, feature engineering, classificação. ✅ Concluído |
| **ATAGenerator** | Python + Tkinter | Automação de geração de documentos Word/PDF a partir de planilhas, com GUI. |
| **SETUP-MY-PC** | PowerShell | Script de instalação automatizada de programas em Windows via winget. ✅ Concluído |

### Outros Projetos

| Projeto | Stack | Status |
|---------|-------|--------|
| **arnis** | Rust | Geração de locais reais do mundo no Minecraft via OpenStreetMap. Em progresso. |
| **Vitally** | PHP + MySQL | Plataforma web de gestão de ordens de serviço. Em progresso. |
| **WebScrapping** | Python | Scripts de extração de dados com BeautifulSoup/Selenium. Em progresso. |
| **app-notifications** | Python | Envio e gerenciamento de notificações automáticas. Em progresso. |
| **calculadora_sn_das** | Python | Calculadora de DAS (Simples Nacional) para MEI. Em progresso. |
| **nature-flow-command** | TypeScript | Ferramenta CLI para automação de workflows no terminal. Em progresso. |
| **Encoding-CSV** | Python | Script de reinterpretação de encoding Latin-1 → UTF-8. ✅ Concluído |
| **PythonLearn** | Jupyter | Repositório de aprendizado Python: fundamentos → DE → IA. Em progresso. |
| **agentscope** | Python | Framework para construção de agentes IA com foco em observabilidade. Em progresso. |
| **miguelcastell** | Markdown | README de perfil do GitHub — showcase público. Em progresso. |
| **Portfolio-Blueprint** | Markdown | Planejamento estratégico do site portfólio. |

---

## Plano do Site Portfólio (Portfolio-Blueprint)

**Stack recomendada:**
- Frontend: Next.js + TypeScript
- UI: Tailwind CSS + shadcn/ui
- Conteúdo: MDX (Markdown no Git)
- Deploy: Vercel
- Analytics: Plausible ou Vercel Analytics

**Arquitetura de conteúdo:**
1. Home — Hero + CTA
2. Projetos — 3-6 projetos em destaque
3. Projeto Individual — Template por projeto
4. Sobre/Currículo
5. Estudos — Artigos técnicos curtos
6. Contato

**Posicionamento:** "Transformo dados brutos em decisões concretas com Python, SQL e engenharia de dados."

**Público-alvo:** Recrutadores (estágio/júnior em Data/DE/ML), Tech leads, Clientes para automações/dashboards.

**Visual:**
- Estilo: Clean técnico + editorial
- Paleta: Slate/grafite + cyan/teal (evitar roxo padrão)
- Fontes: Space Grotesk (títulos), Source Sans 3 (corpo)

**Roadmap:**
- Semana 1 (MVP): Next.js + Home + Projects + About + Contact + 3 projetos + deploy Vercel
- Semana 2: Template reutilizável de projeto, +3 projetos, SEO/performance
- Semana 3: 2 artigos técnicos, versão em inglês

---

## Notas de Estudo (Resumo)

### Python
Cobre: estruturas nativas, list comprehensions, manipulação de arquivos, exceções, pandas, numpy, scikit-learn, streamlit, matplotlib/seaborn, requests, beautifulsoup4, python-docx, openpyxl.
Pitfalls: encoding CSV (Latin-1 vs UTF-8), argumentos mutáveis padrão, == vs is.

### SQL
Cobre: SELECT com filtros, JOINs (INNER, LEFT), agregações, CTEs + window functions, procedures PL/pgSQL com tratamento de erros.
Pitfalls: NULL handling, requisitos do GROUP BY, loops em triggers.

### Machine Learning
Fluxo padrão: definição do problema → EDA → tratamento → feature engineering → split → baseline → avaliação → iteração → deploy.
Métricas: Classification (accuracy, F1, ROC-AUC), Regression (MAE, MSE, R²), Clustering, Recomendação (Precision@K, NDCG).
Pitfalls: data leakage, dados desbalanceados, overfitting.

### Data Engineering
ETL vs ELT, 3 fases (Extract/Transform/Load), checklist de qualidade de dados, ferramentas: pandas, SQLAlchemy, Apache Airflow, dbt, Parquet.
Pitfalls: não versionar dados brutos, transformações não testadas, ignorar encoding.

### TypeScript
Tipos básicos, interface vs type, funções tipadas, generics, CLI com Node.js/process.argv.
Pitfalls: evitar `any`, undefined vs null, compilar com `strict: true`.

---

## Pipeline de Ideias

| Ideia | Área | Esforço | Status |
|-------|------|---------|--------|
| Monitoramento de preços via scraping | Python · Data | Médio | Ideia |
| Bot de notificação de vagas | Python · Automação | Médio | Ideia |
| Dashboard de finanças pessoais | Python · BI | Médio | Ideia |
| CLI para gestão de projetos do vault | TypeScript | Baixo | Ideia |
| API de recomendação do RecomendaAI | Python · FastAPI | Alto | Ideia |

---

## Conexões Principais entre Projetos

- **Analise-Fraude-Financeira** ↔ DataGuardian, PipeFlow, titanic-repo
- **DataGuardian** ↔ Encoding-CSV, WebScrapping, Analise-Fraude-Financeira
- **PipeFlow** ↔ Banco-Loja, Analise-Fraude-Financeira, DataGuardian
- **RecomendaAI** ↔ titanic-repo, PythonLearn, agentscope
- **Banco-Loja** ↔ calculadora_sn_das, Vitally, PipeFlow

---

## Experiência Profissional

**Saga Contabilidade LTDA** (jun 2025–presente) — Analista de Sistemas
- Dashboards internos para apoio à decisão
- Tratamento, padronização e organização de dados para sistemas internos
- Automação de processos com Python e integração entre plataformas
- Parametrização de sistemas e identificação de falhas
- Sistemas: Questor, Tarefa, Integrador

**Prati Donaduzzi** (mar–mai 2025) — Auxiliar de Logística
- Organização de materiais e operação de processos internos
- SAP para controle de estoque

---

## Filosofia do Projeto

> "Quantidade de ideias não tem mérito. Execução tem."

O diferencial está em mostrar a jornada completa do dado:
1. Coleta e tratamento
2. Modelagem
3. Análise
4. Entrega visual
5. Melhoria contínua

Isso posiciona o portfólio acima de projetos com apenas notebooks soltos.
