# Hassan Ali — Portfolio

Mobile-first portfolio site built with React, Vite, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Before you deploy

1. Drop your actual resume PDF at `public/resume.pdf` (used by the Resume page for preview + download).
2. Double-check the CGPA in `src/data/experience.js` — the CV you attached says 3.28, your message said 3.30. Update whichever is correct.
3. Fill in real project links (`github` / `live`) in `src/data/projects.js` — right now every project links to your GitHub profile, not the specific repo.
4. Swap placeholder social links in `src/data/experience.js` if any are off.

## Build

```bash
npm run build
npm run preview
```

## Deploy

Works out of the box on Vercel, Netlify, or GitHub Pages (static build in `dist/`).

## Structure

- `src/pages/` — the 5 routes: Home, Projects, About, Resume, Contact
- `src/components/sections/` — page sections (Hero, SkillsGrid, ExperienceTimeline, etc.)
- `src/components/ui/` — reusable primitives (Button, Card, Badge, SectionHeading)
- `src/components/layout/` — Navbar, Footer, ThemeToggle
- `src/data/` — your content (projects, skills, experience) — edit these files to update the site
- `src/context/ThemeContext.jsx` — dark/light mode, persisted to localStorage

## Design notes

Dev-console visual language: monospace (JetBrains Mono) for headings/labels, Inter for body text, ink/paper base colors with a signal-green accent. The hero is styled as a terminal window running `whoami`, and the experience section reads like a `git log`. Dark mode toggles the `dark` class on `<html>`; Tailwind's `darkMode: 'class'` handles the rest.
