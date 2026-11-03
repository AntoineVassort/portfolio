export interface ContributionDay {
  date: string
  level: 0 | 1 | 2 | 3 | 4
  count: number
}

export interface ContributionData {
  total: number
  days: ContributionDay[]
}

/**
 * Récupère le calendrier de contributions public d'un utilisateur GitHub.
 * Les contributions privées y figurent (en comptes anonymes) si l'option
 * « Include private contributions on my profile » est activée sur GitHub.
 * Aucun nom de dépôt n'est exposé. Revalidé toutes les heures (ISR).
 */
export async function getContributions(username: string): Promise<ContributionData | null> {
  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const html = await res.text()

    const counts = new Map<string, number>()
    for (const m of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>\s*([^<]*?)\s*<\/tool-tip>/g)) {
      const n = /^(\d+) contribution/.exec(m[2])
      counts.set(m[1], n ? Number(n[1]) : 0)
    }

    const days: ContributionDay[] = []
    for (const m of html.matchAll(/<td\b[^>]*\bContributionCalendar-day\b[^>]*>/g)) {
      const tag = m[0]
      const date = /data-date="([^"]+)"/.exec(tag)?.[1]
      const level = Number(/data-level="(\d)"/.exec(tag)?.[1] ?? 0)
      const id = /\bid="([^"]+)"/.exec(tag)?.[1]
      if (!date || level < 0 || level > 4) continue
      days.push({ date, level: level as ContributionDay['level'], count: (id && counts.get(id)) || 0 })
    }
    if (days.length === 0) return null

    days.sort((a, b) => a.date.localeCompare(b.date))
    return { total: days.reduce((s, d) => s + d.count, 0), days }
  } catch {
    return null
  }
}
