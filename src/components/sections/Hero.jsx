import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button.jsx'

const roles = ['Frontend Developer', 'CS Student', 'React Enthusiast']

function useTypedRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 35 : 55
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1))
        } else {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return text
}

export default function Hero() {
  const typed = useTypedRole()

  return (
    <section className="container-page pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="rounded-lg border border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark">
        <div className="flex items-center gap-1.5 border-b border-border-light px-4 py-3 dark:border-border-dark">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal/70" />
          <span className="ml-3 font-mono text-xs text-muted-light dark:text-muted-dark">
            whoami.sh
          </span>
        </div>

        <div className="flex flex-col-reverse gap-8 px-5 py-8 sm:px-8 sm:py-12 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0">
            <p className="prompt font-mono text-sm text-muted-light dark:text-muted-dark">
              whoami
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">
              Hassan Ali
            </h1>
            <p className="mt-3 font-mono text-lg text-signal sm:text-xl">
              {typed}
              <span className="animate-pulse">▌</span>
            </p>
            <p className="mt-5 max-w-lg text-muted-light dark:text-muted-dark">
              BS Computer Science student in Lahore, building clean, responsive
              interfaces with React and a growing eye for product-minded
              frontend work. Currently interning with FlyRank AI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/projects" variant="primary">
                View projects
              </Button>
              <Button as={Link} to="/resume" variant="secondary">
                View resume
              </Button>
            </div>
          </div>

          <div className="mx-auto shrink-0 md:mx-0">
            <div className="relative h-36 w-36 overflow-hidden rounded-lg border border-border-light dark:border-border-dark sm:h-44 sm:w-44">
              <img
                src="/images/hassan.jpg"
                alt="Hassan Ali"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-2 left-2 h-2 w-2 rounded-full bg-signal ring-2 ring-surface-light dark:ring-surface-dark" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
