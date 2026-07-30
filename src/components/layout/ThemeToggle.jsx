import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-md border border-border-light text-ink transition-colors hover:border-ink dark:border-border-dark dark:text-paper dark:hover:border-paper"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
