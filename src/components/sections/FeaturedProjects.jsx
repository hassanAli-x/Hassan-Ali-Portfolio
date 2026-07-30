import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects.js'
import ProjectCard from '../ProjectCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="container-page py-10 sm:py-14">
      <div className="flex items-end justify-between">
        <SectionHeading eyebrow="work" title="Featured projects" />
        <Link
          to="/projects"
          className="mb-8 hidden items-center gap-1 font-mono text-sm text-signal hover:underline sm:flex"
        >
          view all <ArrowRight size={14} />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        to="/projects"
        className="mt-6 flex items-center gap-1 font-mono text-sm text-signal hover:underline sm:hidden"
      >
        view all <ArrowRight size={14} />
      </Link>
    </section>
  )
}
