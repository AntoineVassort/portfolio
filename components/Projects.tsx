'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { projects } from '@/lib/data'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function Projects() {
  const shouldReduce = useReducedMotion()

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: shouldReduce ? 0 : 0.15 } },
  }

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="projets" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle label="02 — Projets" title="Réalisations" />
        </motion.div>

        <motion.div
          variants={container}
          initial={shouldReduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariant} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
