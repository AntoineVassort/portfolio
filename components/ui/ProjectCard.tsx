import { projects } from '@/lib/data'

type Project = (typeof projects)[number]

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="relative group h-full flex flex-col bg-bg-surface border border-border rounded-sm p-6 transition-colors duration-300 hover:border-accent/40">
      {/* Indicateur accent pour les projets mis en avant */}
      {project.highlight && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent rounded-l-sm" />
      )}

      {/* Domaine */}
      <span className="font-mono text-xs text-accent tracking-widest uppercase">
        {project.domain}
      </span>

      {/* Titre */}
      <h3 className="font-display text-xl text-text-primary mt-2 mb-1 leading-snug">
        {project.title}
      </h3>

      {/* Sous-titre */}
      <p className="font-mono text-xs text-text-muted mb-4">{project.subtitle}</p>

      {/* Description */}
      <p className="font-mono text-sm text-text-muted leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs text-text-muted border border-border px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Liens GitHub / Demo */}
      {(project.github || project.demo) && (
        <div className="mt-5 flex gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-text-primary transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-accent hover:text-text-primary transition-colors"
            >
              Demo →
            </a>
          )}
        </div>
      )}
    </article>
  )
}
