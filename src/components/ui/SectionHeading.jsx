export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-wider text-signal mb-2">
          // {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 text-muted-light dark:text-muted-dark max-w-xl">
          {description}
        </p>
      )}
    </div>
  )
}
