import { skillIcons } from '@/lib/skill-icons'

interface SkillCardProps {
  skill: string
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skillIcons[skill]

  return (
    <div className="group w-[88px] min-h-[88px] flex flex-col items-center justify-center gap-2 bg-bg-surface border border-border rounded-sm p-3 hover:border-accent/50 transition-colors cursor-default">
      {Icon ? (
        <Icon className="text-2xl text-text-muted group-hover:text-accent transition-colors shrink-0" />
      ) : (
        <span className="font-mono text-sm text-text-muted group-hover:text-accent transition-colors leading-none select-none">
          //
        </span>
      )}
      <span className="font-mono text-[10px] text-text-muted group-hover:text-accent transition-colors text-center leading-tight">
        {skill}
      </span>
    </div>
  )
}
