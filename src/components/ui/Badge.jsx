export default function Badge({ children, tone = 'default' }) {
  const tones = {
    default:
      'bg-black/[0.04] text-ink dark:bg-white/[0.06] dark:text-paper',
    signal: 'bg-signal/10 text-signal',
  }
  return (
    <span
      className={`inline-flex items-center rounded font-mono text-xs px-2 py-1 ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
