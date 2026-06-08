import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'CV — Antoine',
  description: "Curriculum vitae d'Antoine, Administrateur Système & DevOps.",
}

export default function CVPage() {
  return (
    <div className="h-screen flex flex-col bg-bg-primary">
      {/* En-tête de la page CV */}
      <header className="shrink-0 border-b border-border bg-bg-primary/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs text-text-muted hover:text-accent transition-colors"
          >
            ← Retour
          </Link>

          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
            <span className="text-accent mr-2">›</span>
            Curriculum Vitae
          </span>

          <a
            href="/Antoine_Vassort_2026.pdf"
            download="Antoine_Vassort_2026.pdf"
            className="font-mono text-xs text-bg-primary bg-accent px-4 py-2 hover:bg-accent-dim transition-colors"
          >
            Télécharger
          </a>
        </div>
      </header>

      <iframe
        src="/Antoine_Vassort_2026.pdf"
        title="CV Antoine"
        className="flex-1 min-h-0 w-full border-0"
      />
    </div>
  )
}
