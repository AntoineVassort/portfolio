'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { personal } from '@/lib/data'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full py-32">
        <motion.div
          variants={shouldReduce ? undefined : container}
          initial={shouldReduce ? false : 'hidden'}
          animate="show"
          className="space-y-6 max-w-3xl"
        >
          {/* Nom */}
          <motion.h1
            variants={shouldReduce ? undefined : item}
            className="font-display italic text-7xl md:text-9xl text-text-primary leading-none tracking-tight"
          >
            <span className="block">{personal.name}</span>
            <span className="block">{personal.lastName}</span>
          </motion.h1>

          {/* Titre professionnel */}
          <motion.p
            variants={shouldReduce ? undefined : item}
            className="font-mono text-base md:text-lg text-accent"
          >
            {personal.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={shouldReduce ? undefined : item}
            className="font-mono text-sm text-text-muted max-w-md leading-relaxed"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={shouldReduce ? undefined : item}
            className="flex flex-wrap gap-3 pt-4"
          >
            <a
              href="#projets"
              className="font-mono text-xs text-text-primary border border-border px-5 py-2.5 hover:border-accent hover:text-accent transition-colors"
            >
              Voir les projets →
            </a>
            <a
              href="#contact"
              className="font-mono text-xs text-bg-primary bg-accent px-5 py-2.5 hover:bg-accent-dim transition-colors"
            >
              Contact
            </a>
            <a
              href="/Antoine_Vassort_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted border border-border px-5 py-2.5 hover:border-text-muted hover:text-text-primary transition-colors"
            >
              ↓ CV PDF
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduce && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 7, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          aria-hidden
        >
          <span className="font-mono text-text-muted text-base">↓</span>
        </motion.div>
      )}
    </section>
  )
}
