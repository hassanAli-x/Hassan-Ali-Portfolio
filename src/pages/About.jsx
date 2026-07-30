import SectionHeading from '../components/ui/SectionHeading.jsx'
import SkillsGrid from '../components/sections/SkillsGrid.jsx'
import ExperienceTimeline from '../components/sections/ExperienceTimeline.jsx'

export default function About() {
  return (
    <>
      <section className="container-page py-12 sm:py-16">
        <SectionHeading eyebrow="cat about.md" title="About me" />
        <div className="max-w-2xl space-y-4 text-muted-light dark:text-muted-dark">
          <p>
            I'm a Computer Science student at the University of Management and
            Technology, Lahore, currently in my third year and interning with
            FlyRank AI. I care about building interfaces that feel fast,
            considered, and easy to use.
          </p>
          <p>
            Most of my recent work has been in React — component structure,
            state management, and responsive layouts — alongside earlier
            projects in Flutter and C++. I like turning ambiguous requirements
            into a clean, working UI, and I'm comfortable leading a small team
            through that process.
          </p>
          <p>
            Outside of coursework, I've led a university project team, served
            as a class representative, and volunteered at a campus event. I'm
            currently looking for a frontend developer internship where I can
            keep sharpening those skills on real products.
          </p>
        </div>
      </section>

      <ExperienceTimeline />
      <SkillsGrid />
    </>
  )
}
