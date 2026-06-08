'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { personal } from '@/lib/data'

const navLinks = [
  { href: '#parcours', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
  { href: '/cv', label: 'CV' },
]

const sectionIds = ['parcours', 'projets', 'competences', 'contact']

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-bg-primary/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Nom / logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="font-mono text-sm text-text-primary hover:text-accent transition-colors"
        >
          <span className="text-accent">›</span>{' '}
          {personal.name} {personal.lastName}
        </a>

        {/* Liens desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = href.startsWith('#') && activeSection === href.slice(1)
            return (
            <li key={href}>
              <a
                href={href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  isActive ? 'text-accent' : 'text-text-muted hover:text-accent'
                }`}
              >
                {label}
              </a>
            </li>
          )
          })}
        </ul>

        {/* Bouton hamburger mobile */}
        <button
          className="md:hidden font-mono text-base text-text-muted hover:text-accent transition-colors w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '≡'}
        </button>
      </nav>

      {/* Menu mobile — intégré dans le header pour hériter du z-index et de la position */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduce ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-t border-border md:hidden"
          >
            <ul className="max-w-6xl mx-auto px-6 py-3 flex flex-col">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center gap-3 font-mono text-xs text-text-muted tracking-widest uppercase py-3 hover:text-accent transition-colors"
                  >
                    <span className="text-accent">—</span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
