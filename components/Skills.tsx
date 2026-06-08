'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { skills } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { SkillCard } from '@/components/ui/SkillCard'

export function Skills() {
  const shouldReduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduce ? 0 : 0.1 } },
  }

  const row: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="competences" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle label="03 — Compétences" title="Stack technique" />
        </motion.div>

        <motion.div
          variants={container}
          initial={shouldReduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-10"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={row}>
              <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
                <span className="text-accent mr-2">—</span>
                {category}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <SkillCard key={skill} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
