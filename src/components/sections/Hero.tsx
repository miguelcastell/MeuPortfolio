'use client'

import Link from 'next/link'
import { ArrowRight, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center section-padding overflow-hidden">
      {/* Background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.06] animate-blob"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent)' }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.05] animate-blob"
          style={{
            background: 'radial-gradient(circle, var(--secondary), transparent)',
            animationDelay: '3s',
          }}
        />
      </div>

      <div className="container-content relative z-10 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface text-xs font-medium text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              Disponível para oportunidades
            </span>
            <span className="text-xs text-text-muted hidden sm:block">Toledo, PR — Brasil</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Transformo dados brutos{' '}
            <br className="hidden sm:block" />
            em{' '}
            <span className="text-gradient">decisões concretas.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed mb-10"
          >
            Analista de Sistemas e graduando em IA com foco em{' '}
            <strong className="text-text-main font-semibold">Engenharia de Dados</strong> e{' '}
            <strong className="text-text-main font-semibold">Machine Learning</strong>. Construo
            pipelines, dashboards e sistemas de recomendação que geram impacto real.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm transition-all duration-200 hover:bg-[#0c6578] hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Ver projetos
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-main font-medium text-sm transition-all duration-200 hover:border-primary/40 hover:text-primary hover:-translate-y-0.5"
            >
              Sobre mim
            </Link>
            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://github.com/miguelcastell"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg border border-border text-text-muted hover:text-text-main hover:border-border-muted transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/miguel-mantoan-castellani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg border border-border text-text-muted hover:text-text-main transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 mt-16 pt-8 border-t border-border/60"
          >
            {[
              { value: '20+', label: 'Projetos ativos' },
              { value: '1+', label: 'Ano de experiência' },
              { value: 'Python · SQL · IA', label: 'Stack principal' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-text-main">{stat.value}</div>
                <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-border to-transparent" />
      </motion.div>
    </section>
  )
}
