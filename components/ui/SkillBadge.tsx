interface SkillBadgeProps {
  skill: string
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="font-mono text-xs text-text-muted border border-border px-3 py-1.5 rounded-sm cursor-default transition-colors duration-200 hover:text-accent hover:border-accent/50">
      {skill}
    </span>
  )
}
