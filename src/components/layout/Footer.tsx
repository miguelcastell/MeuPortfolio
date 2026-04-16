import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const navLinks = [
  { href: '/projects', label: 'Projetos' },
  { href: '/estudos', label: 'Estudos' },
  { href: '/sobre', label: 'Sobre' },
]

const socialLinks = [
  { href: 'https://github.com/miguelcastell', icon: Github, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/miguel-mantoan-castellani',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:miguelmscastell@hotmail.com', icon: Mail, label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50 section-padding py-12">
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-2">
              <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold font-display">
                M
              </span>
              <span className="font-display font-semibold text-text-main">Miguel Castellani</span>
            </Link>
            <p className="text-sm text-text-muted max-w-xs">
              Engenharia de Dados · Machine Learning · Automação
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text-main transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="p-2 rounded-lg border border-border text-text-muted hover:text-text-main hover:border-primary/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <span>© {year} Miguel Mantoan Castellani. Todos os direitos reservados.</span>
          <span>Construído com Next.js · Tailwind CSS · Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
