interface SectionTitleProps {
  label?: string
  title: string
  className?: string
}

export function SectionTitle({ label, title, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-16 ${className}`}>
      {label && (
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-3">
          <span className="text-accent mr-2">—</span>
          {label}
        </p>
      )}
      <h2 className="font-display italic text-4xl md:text-5xl text-text-primary leading-tight">
        {title}
      </h2>
      <div className="mt-4 w-12 h-px bg-accent" />
    </div>
  )
}
