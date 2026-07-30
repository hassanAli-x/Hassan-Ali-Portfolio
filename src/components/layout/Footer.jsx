import { Github, Linkedin, Mail } from 'lucide-react'
import { contactInfo } from '../../data/experience.js'

export default function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark">
      <div className="container-page flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted-light dark:text-muted-dark">
          © {new Date().getFullYear()} {contactInfo.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-light hover:text-ink dark:text-muted-dark dark:hover:text-paper"
          >
            <Github size={18} />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-light hover:text-ink dark:text-muted-dark dark:hover:text-paper"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="text-muted-light hover:text-ink dark:text-muted-dark dark:hover:text-paper"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
