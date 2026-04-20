'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTION_IDS = ['inicio', 'projetos', 'sobre', 'estudos', 'experiencia', 'stack', 'contato']

const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'estudos', label: 'Estudos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'stack', label: 'Stack' },
  { id: 'contato', label: 'Contato' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const activeSection = useActiveSection(SECTION_IDS)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[#0F172A]/92 backdrop-blur-md border-b border-[#334155]/55 shadow-lg shadow-black/25'
            : 'bg-transparent'
        )}
      >
        <div className="section-padding">
          <div className="container-content flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="/#inicio"
              onClick={(e) => handleClick(e, 'inicio')}
              className="flex items-center gap-2 group"
              aria-label="Ir para o início"
            >
              {/* <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold font-display transition-transform group-hover:scale-110">
                M
              </span> */}
              <span className="font-display font-semibold text-text-main tracking-tight hidden sm:block">
                Miguel Mantoan Castellani - Portfólio
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    isHome && activeSection === link.id
                      ? 'bg-primary/15 text-[#22D3EE]'
                      : 'text-text-muted hover:text-text-main hover:bg-white/5'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/miguelcastell"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-4 py-2 rounded-lg text-sm font-medium border border-[#334155] text-text-muted hover:border-primary/50 hover:text-[#22D3EE] transition-all duration-200"
              >
                GitHub ↗
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-[#0F172A]/97 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-1" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={cn(
                    'px-4 py-3.5 rounded-xl text-base font-medium transition-colors',
                    isHome && activeSection === link.id
                      ? 'bg-primary/15 text-[#22D3EE]'
                      : 'text-text-muted hover:text-text-main hover:bg-white/5'
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/miguelcastell"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 rounded-xl text-base font-medium border border-[#334155] text-text-muted mt-2"
              >
                GitHub ↗
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
