interface ChartCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function ChartCard({
  title,
  subtitle,
  children,
  footer,
  className = '',
}: ChartCardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header border-bottom">
        <h5 className="card-title mb-0">{title}</h5>
        {subtitle && <p className="text-muted small mb-0">{subtitle}</p>}
      </div>
      <div className="card-body">
        {children}
      </div>
      {footer && (
        <div className="card-footer border-top">
          {footer}
        </div>
      )}
    </div>
  )
}
