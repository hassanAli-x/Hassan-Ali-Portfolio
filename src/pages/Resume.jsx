import { Download } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'

export default function Resume() {
  return (
    <section className="container-page py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="resume.pdf" title="Resume" />
        <Button as="a" href="/resume.pdf" download variant="primary" className="mb-8">
          <Download size={15} /> Download PDF
        </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
        <iframe
          src="/resume.pdf"
          title="Hassan Ali Resume"
          className="h-[75vh] w-full"
        />
      </div>
      <p className="mt-3 font-mono text-xs text-muted-light dark:text-muted-dark">
        Note: add your resume file at public/resume.pdf for this preview and download to work.
      </p>
    </section>
  )
}
