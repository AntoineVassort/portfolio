import type { Metadata, Viewport } from 'next'
import { Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Antoine Vassort',
  jobTitle: 'Administrateur Système & DevOps',
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
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000',
  ),
  title: 'Antoine — Administrateur Système & DevOps',
  description:
    "Portfolio d'Antoine. Systèmes qui apprennent, automatisent et prédisent. Bachelor RNCP Niveau 6, Paris.",
  keywords: ['DevOps', 'Machine Learning', 'Python', 'Next.js', 'Solana', 'Automation'],
  authors: [{ name: 'Antoine' }],
  openGraph: {
    title: 'Antoine — Administrateur Système & DevOps',
    description: 'Systèmes qui apprennent, automatisent et prédisent.',
    type: 'website',
    locale: 'fr_FR',
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
