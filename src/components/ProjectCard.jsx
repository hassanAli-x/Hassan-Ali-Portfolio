import { ArrowUpRight, Github } from 'lucide-react'
import Card from './ui/Card.jsx'
import Badge from './ui/Badge.jsx'

export default function ProjectCard({ project }) {
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="mb-1 flex items-start justify-between gap-3">
        <h3 className="font-semibold leading-snug">{project.title}</h3>
        <span className="shrink-0 font-mono text-xs text-muted-light dark:text-muted-dark">
          {project.period}
        </span>
      </div>
      <p className="mb-3 font-mono text-xs text-signal">{project.role}</p>
      <p className="mb-4 text-sm text-muted-light dark:text-muted-dark">
        {project.description}
      </p>

      <ul className="mb-4 space-y-1.5 text-sm">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-signal">›</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <div className="mt-auto flex gap-4 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-signal"
          >
            <Github size={15} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium hover:text-signal"
          >
            Live <ArrowUpRight size={15} />
          </a>
        )}
      </div>
    </Card>
  )
}
