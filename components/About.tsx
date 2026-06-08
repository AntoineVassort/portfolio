'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { personal } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'

const stats = [
  { label: 'Statut', value: personal.status },
  { label: 'Localisation', value: personal.location },
  { label: 'Langues', value: 'FR · EN · ES' },
]

export function About() {
  const shouldReduce = useReducedMotion()
  const viewportConfig = { once: true, margin: '-80px' } as const

  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle label="00 — À propos" title="Qui suis-je ?" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduce ? 0 : 0.15 }}
            className="space-y-5"
          >
            {personal.bio.map((paragraph, i) => (
              <p key={i} className="font-mono text-sm text-text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stats terminales */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, ease: 'easeOut', delay: shouldReduce ? 0 : 0.3 }}
            className="bg-bg-surface border border-border rounded-sm p-6 space-y-4"
          >
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-5">
              — profil.json
            </p>
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-baseline border-b border-border pb-3 last:border-0 last:pb-0"
              >
                <span className="font-mono text-xs text-text-muted">{label}</span>
                <span className="font-mono text-xs text-text-primary">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
