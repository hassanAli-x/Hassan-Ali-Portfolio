import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ContactForm from '../components/sections/ContactForm.jsx'
import { contactInfo } from '../data/experience.js'

const links = [
  { icon: Mail, label: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'linkedin.com/in/hassan-ali-x', href: contactInfo.linkedin },
  { icon: Github, label: 'github.com/hassanAli-x', href: contactInfo.github },
  { icon: MapPin, label: contactInfo.location, href: null },
]

export default function Contact() {
  return (
    <section className="container-page py-12 sm:py-16">
      <SectionHeading
        eyebrow="contact"
        title="Get in touch"
        description="Open to frontend developer internships — happy to chat."
      />
      <div className="grid gap-10 sm:grid-cols-2">
        <ul className="space-y-4">
          {links.map(({ icon: Icon, label, href }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border-light dark:border-border-dark">
                <Icon size={16} />
              </span>
              {href ? (
                <a href={href} target="_blank" rel="noreferrer" className="text-sm hover:text-signal">
                  {label}
                </a>
              ) : (
                <span className="text-sm">{label}</span>
              )}
            </li>
          ))}
        </ul>
        <ContactForm />
      </div>
    </section>
  )
}
