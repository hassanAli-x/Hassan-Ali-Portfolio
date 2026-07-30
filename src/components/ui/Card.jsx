export default function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-lg border border-border-light bg-surface-light dark:border-border-dark dark:bg-surface-dark ${className}`}
    >
      {children}
    </div>
  )
}
