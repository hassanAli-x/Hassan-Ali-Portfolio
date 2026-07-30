import { skillGroups } from '../../data/skills.js'
import Badge from '../ui/Badge.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function SkillsGrid({ compact = false }) {
  const groups = compact ? skillGroups.slice(0, 3) : skillGroups

  return (
    <section className="container-page py-10 sm:py-14">
      <SectionHeading eyebrow="stack" title="Skills" />
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wide text-muted-light dark:text-muted-dark">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
