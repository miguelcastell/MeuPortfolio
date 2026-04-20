'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, ArrowRight, MessageSquare } from 'lucide-react'

const contactCards = [
  {
    icon: Mail,
    label: 'Email',
    value: 'miguelmcastell@hotmail.com',
    href: 'mailto:miguelmcastell@hotmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@miguelcastell',
    href: 'https://github.com/miguelcastell',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'miguel-mantoan-castellani-744304324',
    href: 'https://www.linkedin.com/in/miguel-mantoan-castellani-744304324/',
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="section-padding py-24">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 mb-6">
              <MessageSquare size={24} className="text-[#22D3EE]" />
            </div>
            <p className="text-xs font-medium text-[#22D3EE] uppercase tracking-widest mb-3">
              Contato
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-text-main tracking-tight mb-4">
              Vamos trabalhar juntos.
            </h2>
            <p className="text-text-muted leading-relaxed mb-10 max-w-md mx-auto">
              Aberto a oportunidades Engenharia e Analista de Dados, Machine Learning, e automações. Em
              tempo integral, freela ou só uma conversa técnica — me manda uma mensagem!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <a
              href="mailto:miguelmcastell@hotmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium text-sm transition-all duration-200 hover:bg-[#0c6578] hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-mantoan-castellani-744304324/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#334155] text-text-main font-medium text-sm transition-all duration-200 hover:border-primary/50 hover:text-[#22D3EE] hover:-translate-y-0.5 hover:bg-primary/5"
            >
              <Linkedin size={16} />
              LinkedIn
              <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="pt-8 border-t border-[#334155]/60"
          >
            <div className="grid grid-cols-3 gap-4">
              {contactCards.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-[#334155] hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1E293B] border border-[#334155] group-hover:border-primary/40 flex items-center justify-center transition-colors">
                    <Icon size={15} className="text-[#22D3EE]" />
                  </div>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wide">
                    {label}
                  </span>
                  <span className="text-[10px] text-text-muted truncate max-w-full hidden sm:block">
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
