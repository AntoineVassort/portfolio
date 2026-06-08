'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { personal } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Contact() {
  const shouldReduce = useReducedMotion()

  const links = [
    { key: 'email', label: 'Email', href: personal.email ? `mailto:${personal.email}` : '' },
    { key: 'github', label: 'GitHub', href: personal.github },
    { key: 'linkedin', label: 'LinkedIn', href: personal.linkedin },
  ].filter(({ href }) => href)

  return (
    <section id="contact" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle label="04 — Contact" title="Me contacter" />
        </motion.div>

        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduce ? 0 : 0.15 }}
          className="max-w-xl"
        >
          <p className="font-mono text-sm text-text-muted leading-relaxed mb-10">
            Disponible pour des missions freelance, des collaborations ou simplement échanger.
          </p>

          {links.length > 0 ? (
            <div className="flex flex-col gap-3">
              {links.map(({ key, label, href }) => (
                <a
                  key={key}
                  href={href}
                  target={key !== 'email' ? '_blank' : undefined}
                  rel={key !== 'email' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between bg-bg-surface border border-border px-5 py-4 hover:border-accent transition-colors"
                >
                  <span className="font-mono text-xs text-text-muted tracking-widest uppercase group-hover:text-accent transition-colors">
                    {label}
                  </span>
                  <span className="font-mono text-xs text-accent">→</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="font-mono text-xs text-text-muted tracking-widest">— liens à venir</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
