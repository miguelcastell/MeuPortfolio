export interface Metric {
  label: string
  value: string
}

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  stack: string[]
  metrics: Metric[]
  github?: string
  demo?: string
  featured: boolean
  tier: 1 | 2
  status: 'completed' | 'in-progress'
  area: 'Data Engineering' | 'Machine Learning' | 'Automation' | 'Database' | 'Web' | 'Other'
  accentColor: string
  year: string
}

export const projects: Project[] = [
  {
    slug: 'dataguardian',
    title: 'DataGuardian',
    description: 'Plataforma de qualidade de dados CSV com diagnóstico inteligente, tratamento assistido e exportação multi-formato.',
    longDescription:
      'DataGuardian resolve o gargalo mais subestimado em pipelines de dados: qualidade. A plataforma automatiza o diagnóstico de anomalias, propõe tratamentos e exporta dados limpos prontos para BI e modelagem.',
    tags: ['Data Quality', 'Python', 'Streamlit', 'Pandas'],
    stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Openpyxl'],
    metrics: [
      { label: 'Redução no tempo de tratamento', value: '↓ 60%' },
      { label: 'Tipos de anomalias detectadas', value: '12+' },
      { label: 'Formatos de exportação', value: '4' },
    ],
    github: 'https://github.com/miguelcastell/DataGuardian',
    featured: true,
    tier: 1,
    status: 'in-progress',
    area: 'Data Engineering',
    accentColor: '#0E7490',
    year: '2026',
  },
  {
    slug: 'analise-fraude',
    title: 'Análise de Fraude Financeira',
    description: 'Pipeline ETL completo para detecção de fraudes em transações financeiras com dados reais e classes altamente desbalanceadas.',
    longDescription:
      'Projeto que une Engenharia de Dados e Data Science: pipeline robusto de ETL, tratamento de desbalanceamento com SMOTE, feature engineering específico para fraude e ensemble classifier com alta recall no rótulo minoritário.',
    tags: ['ETL', 'Python', 'Fraud Detection', 'Scikit-learn'],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'SMOTE', 'PostgreSQL'],
    metrics: [
      { label: 'Redução na latência do ETL', value: '↓ 40%' },
      { label: 'F1-Score na classe fraude', value: '0.87' },
      { label: 'Recall no rótulo minoritário', value: '99.2%' },
    ],
    github: 'https://github.com/miguelcastell/Analise-Fraude-Financeira',
    featured: true,
    tier: 1,
    status: 'completed',
    area: 'Data Engineering',
    accentColor: '#F97316',
    year: '2025',
  },
  {
    slug: 'pipeflow',
    title: 'PipeFlow',
    description: 'Pipeline de Business Intelligence com dashboard interativo de vendas, KPIs automáticos e atualização diária.',
    longDescription:
      'PipeFlow conecta múltiplas fontes de dados em um único dashboard de vendas. O pipeline processa grandes volumes e disponibiliza métricas de negócio (ticket médio, funil, crescimento MoM) com atualização automatizada.',
    tags: ['BI', 'Dashboard', 'ETL', 'Python'],
    stack: ['Python', 'Pandas', 'PostgreSQL', 'Streamlit', 'Plotly'],
    metrics: [
      { label: 'Registros processados por execução', value: '500k' },
      { label: 'Tempo de pipeline completo', value: '< 2min' },
      { label: 'KPIs rastreados automaticamente', value: '8' },
    ],
    github: 'https://github.com/miguelcastell/PipeFlow',
    featured: true,
    tier: 1,
    status: 'completed',
    area: 'Data Engineering',
    accentColor: '#0E7490',
    year: '2025',
  },
  {
    slug: 'banco-loja',
    title: 'Banco-Loja',
    description: 'Sistema completo de gestão de pedidos em PostgreSQL com procedures e triggers para automação de fluxo comercial.',
    longDescription:
      'Implementação de um sistema de ordem de compra completo usando PL/pgSQL. Cobre relacionamentos N:N, integridade referencial, procedures com tratamento de erros e triggers para automação de fluxos de negócio.',
    tags: ['SQL', 'PostgreSQL', 'PL/pgSQL', 'Database'],
    stack: ['PostgreSQL', 'PL/pgSQL'],
    metrics: [
      { label: 'Procedures implementadas', value: '8' },
      { label: 'Triggers de automação', value: '5' },
      { label: 'Tabelas no modelo', value: '12' },
    ],
    github: 'https://github.com/miguelcastell/Banco-Loja',
    featured: false,
    tier: 2,
    status: 'completed',
    area: 'Database',
    accentColor: '#0E7490',
    year: '2025',
  },
  {
    slug: 'eurosat-clustering',
    title: 'EuroSAT Clustering',
    description: 'IA preditiva para clustering de imagens de satélite (Sentinel-2 ESA) para classificação de uso do solo.',
    longDescription:
      'Aplicação de Computer Vision e ML não-supervisionado no dataset EuroSAT (10m/pixel). Pipeline: carregamento de imagens → extração de features via CNN → clustering (K-Means + DBSCAN) → visualização geoespacial.',
    tags: ['Computer Vision', 'Machine Learning', 'Geoespacial', 'CNN'],
    stack: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV'],
    metrics: [
      { label: 'Imagens no dataset', value: '27k' },
      { label: 'Resolução espacial', value: '10m/px' },
      { label: 'Classes de uso do solo', value: '10' },
    ],
    github: 'https://github.com/miguelcastell/EuroSAT-Clustering',
    featured: false,
    tier: 2,
    status: 'completed',
    area: 'Machine Learning',
    accentColor: '#14B8A6',
    year: '2026',
  },
  {
    slug: 'atgenerator',
    title: 'ATAGenerator',
    description: 'Automação de geração de documentos Word e PDF a partir de planilhas, com interface gráfica em Tkinter.',
    longDescription:
      'Ferramenta desktop que elimina horas de trabalho manual na criação de documentos padronizados. Lê dados de spreadsheets, aplica templates Word e exporta documentos finalizados em lote.',
    tags: ['Automação', 'Python', 'GUI', 'Tkinter'],
    stack: ['Python', 'Tkinter', 'python-docx', 'openpyxl'],
    metrics: [
      { label: 'Redução no tempo de geração', value: '↓ 85%' },
      { label: 'Documentos por lote', value: 'Ilimitado' },
      { label: 'Formatos de saída', value: '2 (DOCX, PDF)' },
    ],
    github: 'https://github.com/miguelcastell/ATAGenerator',
    featured: false,
    tier: 2,
    status: 'completed',
    area: 'Automation',
    accentColor: '#F97316',
    year: '2024',
  },
  {
    slug: 'setup-my-pc',
    title: 'SETUP-MY-PC',
    description: 'Script PowerShell idempotente para instalação automatizada de ambiente de desenvolvimento completo no Windows.',
    longDescription:
      'Script que configura um PC do zero: instala programas via winget, cria estrutura de pastas e define configurações do sistema. Idempotente — pode ser executado múltiplas vezes sem erros.',
    tags: ['PowerShell', 'Automação', 'Windows', 'DevOps'],
    stack: ['PowerShell', 'winget'],
    metrics: [
      { label: 'Programas instalados automaticamente', value: '15+' },
      { label: 'Tempo de setup (estimativa manual)', value: '2h → 5min' },
      { label: 'Execuções sem erro', value: 'Idempotente' },
    ],
    github: 'https://github.com/miguelcastell/SETUP-MY-PC',
    featured: false,
    tier: 2,
    status: 'completed',
    area: 'Automation',
    accentColor: '#0E7490',
    year: '2024',
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectsByArea(area: Project['area']): Project[] {
  return projects.filter((p) => p.area === area)
}
