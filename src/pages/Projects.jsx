import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

export default function Projects() {
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeading
        eyebrow="ls ./projects"
        title="All projects"
        description="Web, mobile, and systems projects from coursework and self-driven builds."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
