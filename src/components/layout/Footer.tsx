import { Github, Linkedin, Mail } from 'lucide-react'

const anchorLinks = [
  { href: '/#inicio', label: 'Início' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/#sobre', label: 'Sobre' },
  { href: '/#estudos', label: 'Estudos' },
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#contato', label: 'Contato' },
]

const socialLinks = [
  { href: 'https://github.com/miguelcastell', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/miguel-mantoan-castellani-744304324/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:miguelmcastell@hotmail.com', icon: Mail, label: 'Email' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#334155]/60 bg-[#0B1120]/80 section-padding py-12">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="/#inicio" className="flex items-center gap-2 mb-3 w-fit">
              <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold font-display">
                M
              </span>
              <span className="font-display font-semibold text-text-main">Miguel Castellani</span>
            </a>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed">
              Transformo dados brutos em decisões concretas com Python, SQL e engenharia de dados.
            </p>
            <div className="flex items-center gap-2.5 mt-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2 rounded-lg border border-[#334155] text-text-muted hover:text-[#22D3EE] hover:border-primary/40 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
              Navegação rápida
            </p>
            <nav
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
              aria-label="Footer navigation"
            >
              {anchorLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-muted hover:text-text-main transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-6 border-t border-[#334155]/50 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-text-muted">
          <span>© {year} Miguel Mantoan Castellani. Todos os direitos reservados.</span>
          <span className="opacity-70">Next.js · Tailwind CSS · Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
