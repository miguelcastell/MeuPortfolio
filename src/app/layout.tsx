import type { Metadata } from 'next'
import { Space_Grotesk, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Miguel Mantoan Castellani — Engenharia de Dados & IA',
    template: '%s | Miguel Castellani',
  },
  description:
    'Analista de Sistemas especializado em Engenharia de Dados e Machine Learning. Transformo dados brutos em decisões concretas com Python, SQL e automação.',
  keywords: [
    'Data Engineering',
    'Machine Learning',
    'Python',
    'SQL',
    'Streamlit',
    'Analista de Sistemas',
    'Portfólio',
    'Toledo PR',
  ],
  authors: [{ name: 'Miguel Mantoan Castellani', url: 'https://github.com/miguelcastell' }],
  creator: 'Miguel Mantoan Castellani',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Miguel Mantoan Castellani — Engenharia de Dados & IA',
    description:
      'Transformo dados brutos em decisões concretas com Python, SQL e engenharia de dados.',
    siteName: 'Miguel Castellani',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Mantoan Castellani',
    description: 'Engenharia de Dados & Machine Learning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Miguel Mantoan Castellani',
  url: 'https://github.com/miguelcastell',
  email: 'miguelmscastell@hotmail.com',
  jobTitle: 'Analista de Sistemas | Engenharia de Dados | Machine Learning',
  description:
    'Analista de Sistemas e estudante de IA focado em Engenharia de Dados e Machine Learning. Graduando em Inteligência Artificial na Faculdade Donaduzzi (Biopark).',
  address: { '@type': 'PostalAddress', addressLocality: 'Toledo', addressRegion: 'PR', addressCountry: 'BR' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Faculdade Donaduzzi — Biopark' },
  sameAs: [
    'https://github.com/miguelcastell',
    'https://linkedin.com/in/miguel-mantoan-castellani',
  ],
  knowsAbout: ['Python', 'SQL', 'Data Engineering', 'Machine Learning', 'ETL', 'Power BI', 'Apache Airflow'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
