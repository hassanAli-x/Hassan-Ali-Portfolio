const variants = {
  primary:
    'bg-ink text-paper dark:bg-signal dark:text-ink hover:opacity-90',
  secondary:
    'border border-border-light dark:border-border-dark text-ink dark:text-paper hover:border-ink dark:hover:border-paper',
  ghost: 'text-muted-light dark:text-muted-dark hover:text-ink dark:hover:text-paper',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
