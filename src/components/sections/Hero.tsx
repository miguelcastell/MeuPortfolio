'use client'

import { ArrowRight, Github, Linkedin, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

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

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="inicio"
      className="relative min-h-[96vh] flex items-center section-padding overflow-hidden"
    >
      {/* Background shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-48 -left-48 w-[750px] h-[750px] rounded-full opacity-[0.08] animate-blob"
          style={{ background: 'radial-gradient(circle, #0E7490, transparent)' }}
        />
        <div
          className="absolute -bottom-48 -right-48 w-[650px] h-[650px] rounded-full opacity-[0.07] animate-blob"
          style={{
            background: 'radial-gradient(circle, #14B8A6, transparent)',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.04] animate-blob"
          style={{
            background: 'radial-gradient(circle, #F97316, transparent)',
            animationDelay: '6s',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-content relative z-10 py-28">
        <div className="flex items-center justify-between gap-10 xl:gap-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8">
            <span className="flex items-center gap-1.5 text-xs text-text-muted">
              <MapPin size={12} aria-hidden="true" />
              Toledo, PR — Brasil
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.6rem, 6.5vw, 4.8rem)' }}
          >
            Hello World. Eu sou o{''}
            <br className="hidden sm:block" />
            {' '}
            <span className="text-gradient">Miguel!</span>
          </motion.h1>

          {/* Stack line */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-medium text-text-muted max-w-2xl mb-3"
          >
            Python · SQL · Engenharia e Ciência de Dados · Machine Learning
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base text-text-muted max-w-2xl leading-relaxed mb-10"
          >
            Analista de Sistemas e graduando em IA.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projetos')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm transition-all duration-200 hover:bg-[#0c6578] hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Ver projetos
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo('contato')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#334155] text-text-main font-medium text-sm transition-all duration-200 hover:border-primary/50 hover:text-[#22D3EE] hover:-translate-y-0.5 hover:bg-primary/5"
            >
              Entrar em contato
            </button>
            <div className="flex items-center gap-2.5 ml-1">
              <a
                href="https://github.com/miguelcastell"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg border border-[#334155] text-text-muted hover:text-text-main hover:border-[#475569] transition-colors"
              >
                <Github size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/miguel-mantoan-castellani-744304324/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-[#334155] text-text-muted hover:text-text-main hover:border-[#475569] transition-colors"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-[#334155]/60"
          >
            {[
              { value: '1+', label: 'Ano de experiência' },
              { value: 'Python · SQL · ML', label: 'Stack principal' },
              { value: 'Visão Computacional', label: 'Se aprofundando' },              
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-text-main">{stat.value}</div>
                <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border border-[#334155]/70 ring-4 ring-[#0E7490]/20 shadow-[0_12px_60px_rgba(0,0,0,0.35)]">
              {!imageError ? (
                <Image
                  src="/images/miguel-hero.jpg"
                  alt="Foto de Miguel Mantoan Castellani"
                  fill
                  sizes="(max-width: 1280px) 288px, 320px"
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-[#1E293B] flex items-center justify-center">
                  <span className="font-display font-bold text-5xl text-[#22D3EE]">MC</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-50">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#334155] to-transparent" />
      </motion.div>
    </section>
  )
}
