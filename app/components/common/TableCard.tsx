interface TableCardProps {
  title: string
  columns: {
    key: string
    label: string
    sortable?: boolean
    className?: string
  }[]
  data: Record<string, any>[]
  actions?: (row: Record<string, any>) => React.ReactNode
  footer?: React.ReactNode
  className?: string
  striped?: boolean
  hover?: boolean
}

export function TableCard({
  title,
  columns,
  data,
  actions,
  footer,
  className = '',
  striped = true,
  hover = true,
}: TableCardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header border-bottom">
        <h5 className="card-title mb-0">{title}</h5>
      </div>
      <div className="table-responsive">
        <table className={`table mb-0 ${striped ? 'table-striped' : ''} ${hover ? 'table-hover' : ''}`}>
          <thead className="table-light">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className={col.className}>
                  {col.label}
                  {col.sortable && <i className="fas fa-sort ms-2 text-muted"></i>}
                </th>
              ))}
              {actions && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.key} className={col.className}>
                    {row[col.key]}
                  </td>
                ))}
                {actions && <td>{actions(row)}</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer && (
        <div className="card-footer border-top">
          {footer}
        </div>
      )}
    </div>
  )
}
