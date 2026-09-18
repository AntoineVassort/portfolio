import type { Metadata, Viewport } from 'next'
import { Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { SITE_URL } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antoine Vassort',
  url: SITE_URL,
  jobTitle: 'Administrateur Système & DevOps',
  description: 'Administrateur Système & DevOps : infrastructure, automatisation et machine learning.',
  knowsAbout: ['DevOps', 'Linux', 'Docker', 'Kubernetes', 'CI/CD', 'Python', 'Machine Learning', 'Next.js'],
  sameAs: [
    'https://github.com/AntoineVassort',
    'https://linkedin.com/in/antoine-vassort',
  ],
  email: 'antoine.clean@gmail.com',
  knowsLanguage: ['fr', 'en', 'es'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paris',
    addressCountry: 'FR',
  },
}

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Antoine Vassort — Administrateur Système & DevOps',
  description:
    "Portfolio d'Antoine Vassort. Systèmes qui apprennent, automatisent et prédisent. Bachelor RNCP Niveau 6, Paris.",
  keywords: ['Antoine Vassort', 'DevOps', 'Machine Learning', 'Python', 'Next.js', 'Automation'],
  authors: [{ name: 'Antoine Vassort' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Antoine Vassort — Administrateur Système & DevOps',
    url: '/',
    description: 'Systèmes qui apprennent, automatisent et prédisent.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Antoine Vassort',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antoine Vassort — Administrateur Système & DevOps',
    description: 'Systèmes qui apprennent, automatisent et prédisent.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-mono antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
