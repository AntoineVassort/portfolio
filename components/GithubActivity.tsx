import { personal } from '@/lib/data'
import { getContributions } from '@/lib/github'
import { SectionTitle } from '@/components/ui/SectionTitle'

const levelColors = ['#1a1a1a', '#0f4a3a', '#0f6e56', '#16876a', '#1d9e75']

function weekIndex(first: Date, d: Date) {
  return Math.floor((d.getTime() - first.getTime()) / (7 * 24 * 3600 * 1000))
}

export async function GithubActivity() {
  const username = personal.github.split('/').pop()!
  const data = await getContributions(username)
  if (!data) return null

  const first = new Date(data.days[0].date + 'T00:00:00Z')
  first.setUTCDate(first.getUTCDate() - first.getUTCDay()) // dimanche de la 1re semaine
  const weeks = weekIndex(first, new Date(data.days[data.days.length - 1].date + 'T00:00:00Z')) + 1
  const active = data.days.filter((d) => d.count > 0).length

  return (
    <section id="activite" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <SectionTitle label="04 / Activité" title="Activité GitHub" />

        <div className="bg-bg-surface border border-border rounded-sm p-6">
          <div className="flex flex-wrap justify-between gap-2 mb-5 font-mono text-xs">
            <span className="text-accent tracking-widest uppercase">/ contributions.log</span>
            <span className="text-text-muted">
              {data.total} contributions sur les 12 derniers mois · {active} jours actifs
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div
              role="img"
              aria-label={`${data.total} contributions GitHub sur les 12 derniers mois`}
              className="grid gap-[3px] min-w-[760px]"
              style={{
                gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))`,
              }}
            >
              {data.days.map((d) => {
                const date = new Date(d.date + 'T00:00:00Z')
                return (
                  <div
                    key={d.date}
                    title={`${d.count} contribution${d.count > 1 ? 's' : ''} le ${d.date}`}
                    className="aspect-square rounded-[2px]"
                    style={{
                      gridColumn: weekIndex(first, date) + 1,
                      gridRow: date.getUTCDay() + 1,
                      backgroundColor: levelColors[d.level],
                    }}
                  />
                )
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-5 font-mono text-xs text-text-muted">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              github.com/{username} →
            </a>
            <span className="flex items-center gap-1.5">
              Moins
              {levelColors.map((c) => (
                <span key={c} className="w-[11px] h-[11px] rounded-[2px] inline-block" style={{ backgroundColor: c }} />
              ))}
              Plus
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
