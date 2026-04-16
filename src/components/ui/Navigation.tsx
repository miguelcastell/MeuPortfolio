'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/projects', label: 'Projetos' },
  { href: '/estudos', label: 'Estudos' },
  { href: '/sobre', label: 'Sobre' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

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

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-border/60 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="container-content section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Ir para o início"
            >
              <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-sm font-bold font-display transition-transform group-hover:scale-110">
                M
              </span>
              <span className="font-display font-semibold text-text-main tracking-tight hidden sm:block">
                Miguel Castellani
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-muted hover:text-text-main hover:bg-black/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/miguelcastell"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 rounded-lg text-sm font-medium border border-border text-text-main hover:border-primary hover:text-primary transition-all duration-200"
              >
                GitHub ↗
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-main hover:bg-black/5 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-white/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col p-6 gap-2" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-3 rounded-xl text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-muted hover:text-text-main hover:bg-black/5'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/miguelcastell"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-base font-medium border border-border text-text-main"
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
