interface StatCardProps {
  title: string
  value: string | number
  icon?: string
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  className = '',
}: StatCardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <p className="text-muted small mb-1">{title}</p>
            <h4 className="mb-0">{value}</h4>
            {trend && (
              <small className={trend.isPositive ? 'text-success' : 'text-danger'}>
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </small>
            )}
          </div>
          {icon && (
            <div className="stat-icon">
              <i className={`${icon} fs-4`}></i>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
