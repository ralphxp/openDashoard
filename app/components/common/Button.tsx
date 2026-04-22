import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
  loading?: boolean
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  loading = false,
  children,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClass = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  }[size]

  const variantClass = `btn-${variant}`

  return (
    <button
      className={`btn ${variantClass} ${sizeClass} ${fullWidth ? 'w-100' : ''} ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm me-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </>
      ) : (
        <>
          {icon && <i className={`${icon} me-2`}></i>}
          {children}
        </>
      )}
    </button>
  )
}
