import Hero from '../components/sections/Hero.jsx'
import SkillsGrid from '../components/sections/SkillsGrid.jsx'
import FeaturedProjects from '../components/sections/FeaturedProjects.jsx'
import ExperienceTimeline from '../components/sections/ExperienceTimeline.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ContactForm from '../components/sections/ContactForm.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsGrid />
      <ExperienceTimeline />
      <section className="container-page py-10 sm:py-14">
        <SectionHeading
          eyebrow="contact"
          title="Let's work together"
          description="Open to frontend developer internships — reach out below."
        />
        <div className="max-w-md">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
