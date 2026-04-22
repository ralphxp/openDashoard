interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; href?: string }[]
  action?: React.ReactNode
  className?: string
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  action,
  className = '',
}: PageHeaderProps) {
  return (
    <div className={`page-header mb-4 ${className}`}>
      {breadcrumbs && (
        <nav aria-label="breadcrumb" className="mb-2">
          <ol className="breadcrumb small mb-0">
            {breadcrumbs.map((crumb, idx) => (
              <li
                key={idx}
                className={`breadcrumb-item ${!crumb.href ? 'active' : ''}`}
              >
                {crumb.href ? (
                  <a href={crumb.href} className="text-decoration-none">
                    {crumb.label}
                  </a>
                ) : (
                  crumb.label
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h2 className="mb-1">{title}</h2>
          {description && <p className="text-muted">{description}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
