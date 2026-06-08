'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { experiences } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Experience() {
  const shouldReduce = useReducedMotion()

  return (
    <section id="parcours" className="px-6 py-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle label="01 — Parcours" title="Expérience & Formation" />
        </motion.div>

        <motion.div
          variants={shouldReduce ? undefined : container}
          initial={shouldReduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={shouldReduce ? undefined : item}
                className="relative pl-8"
              >
                {/* Dot avec animation pulse si en cours */}
                <div
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    exp.current
                      ? 'border-accent bg-accent/20'
                      : exp.type === 'education'
                        ? 'border-accent bg-bg-primary'
                        : 'border-border bg-bg-primary'
                  }`}
                >
                  {exp.current && !shouldReduce && (
                    <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                  )}
                </div>

                {/* Méta : période + type */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                  <span className="font-mono text-xs text-text-muted">{exp.period}</span>
                  <span
                    className={`font-mono text-xs tracking-widest uppercase ${
                      exp.type === 'education' ? 'text-accent' : 'text-text-muted'
                    }`}
                  >
                    {exp.type === 'education' ? 'Formation' : 'Expérience'}
                  </span>
                  {exp.current && (
                    <span className="font-mono text-xs text-accent">· en cours</span>
                  )}
                </div>

                {/* Titre */}
                <h3 className="font-display text-xl text-text-primary leading-snug mb-1">
                  {exp.title}
                </h3>

                {/* Organisation / certification */}
                {exp.organization && (
                  <p className="font-mono text-xs text-accent mb-3">{exp.organization}</p>
                )}

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className="space-y-1.5 mt-3">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="font-mono text-sm text-text-muted leading-relaxed flex gap-2"
                      >
                        <span className="text-accent shrink-0 mt-0.5">·</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
