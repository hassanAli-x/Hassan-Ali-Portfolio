import { timeline } from '../../data/experience.js'
import SectionHeading from '../ui/SectionHeading.jsx'

const typeLabel = {
  work: 'work',
  education: 'education',
  leadership: 'leadership',
}

export default function ExperienceTimeline() {
  return (
    <section className="container-page py-10 sm:py-14">
      <SectionHeading eyebrow="log" title="Experience" description="git log --oneline of how I got here." />
      <ol className="space-y-6 border-l border-border-light pl-6 dark:border-border-dark">
        {timeline.map((entry) => (
          <li key={entry.hash} className="relative">
            <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-signal" />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-signal">{entry.hash}</span>
              <span className="font-mono text-xs text-muted-light dark:text-muted-dark">
                {entry.date}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wide text-amber">
                {typeLabel[entry.type]}
              </span>
            </div>
            <h3 className="mt-1 font-semibold">{entry.title}</h3>
            <p className="font-mono text-xs text-muted-light dark:text-muted-dark">
              {entry.org}
            </p>
            <p className="mt-1 text-sm text-muted-light dark:text-muted-dark">
              {entry.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
