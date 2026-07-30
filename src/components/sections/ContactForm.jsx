import { useState } from 'react'
import { contactInfo } from '../../data/experience.js'
import Button from '../ui/Button.jsx'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
  }

  const inputClass =
    'w-full rounded-md border border-border-light bg-surface-light px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-signal dark:border-border-dark dark:bg-surface-dark'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-muted-light dark:text-muted-dark">
          name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-muted-light dark:text-muted-dark">
          email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted-light dark:text-muted-dark">
          message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Let's talk about the role..."
        />
      </div>
      <Button type="submit" variant="primary">
        Send message
      </Button>
      <p className="font-mono text-xs text-muted-light dark:text-muted-dark">
        opens your email client — sent straight to {contactInfo.email}
      </p>
    </form>
  )
}
