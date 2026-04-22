# NexLink Next.js Implementation Guide

A comprehensive guide to understanding, extending, and deploying the NexLink CRM Dashboard Next.js conversion.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Component System](#component-system)
4. [Adding New Pages](#adding-new-pages)
5. [Styling & Theming](#styling--theming)
6. [State Management](#state-management)
7. [Chart Integration](#chart-integration)
8. [Forms & Validation](#forms--validation)
9. [Deployment](#deployment)
10. [Best Practices](#best-practices)

---

## Project Overview

NexLink is a modern CRM dashboard built with Next.js, React, TypeScript, and Bootstrap 5. It features:

- **Component-Based Architecture**: Reusable UI components
- **Type Safety**: Full TypeScript support
- **State Management**: React Context API
- **Responsive Design**: Mobile-first Bootstrap grid
- **Dark Mode**: Built-in theme switching
- **Charts & Visualizations**: ApexCharts integration
- **Production Ready**: Optimized build and deployment

---

## Architecture

### Directory Structure

```
app/
├── components/
│   ├── layout/           # Layout components (Header, Sidebar, etc.)
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── PageLayout.tsx
│   └── common/           # Reusable UI components
│       ├── StatCard.tsx
│       ├── ChartCard.tsx
│       ├── TableCard.tsx
│       ├── PageHeader.tsx
│       ├── Button.tsx
│       └── index.ts
├── contexts/             # State management
│   └── AppProvider.tsx
├── (routes)/             # App Router pages
│   ├── page.tsx (Dashboard)
│   ├── contacts/page.tsx
│   ├── projects/page.tsx
│   ├── analytics/page.tsx
│   └── settings/page.tsx
├── layout.tsx            # Root layout
├── RootLayoutClient.tsx  # Client wrapper
└── globals.css           # Global styles
```

### Data Flow

```
Root Layout
    ↓
RootLayoutClient (AppProvider)
    ↓
Header + Sidebar + Main Content
    ↓
Page Components
    ↓
Common Components
```

---

## Component System

### Creating a New Component

#### Step 1: Create the Component File

Create `app/components/common/MyComponent.tsx`:

```tsx
interface MyComponentProps {
  title: string
  description?: string
  onClick?: () => void
  className?: string
}

export function MyComponent({
  title,
  description,
  onClick,
  className = '',
}: MyComponentProps) {
  return (
    <div className={`my-component ${className}`}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {onClick && <button onClick={onClick}>Action</button>}
    </div>
  )
}
```

#### Step 2: Export from Index

Update `app/components/common/index.ts`:

```ts
export { MyComponent } from './MyComponent'
```

#### Step 3: Use in Pages

```tsx
import { MyComponent } from '@/app/components/common'

export default function MyPage() {
  return (
    <div>
      <MyComponent
        title="My Component"
        description="A description"
        onClick={() => console.log('clicked')}
      />
    </div>
  )
}
```

### Component Best Practices

1. **Props**: Define TypeScript interfaces for all props
2. **Naming**: Use PascalCase for component names
3. **Exports**: Use named exports, not default
4. **Reusability**: Build components to be reusable
5. **Documentation**: Add JSDoc comments for complex props
6. **Styling**: Use Bootstrap classes + custom CSS in globals.css

---

## Adding New Pages

### Creating a New Page with Routing

#### Example 1: Simple Page at `/products`

Create `app/products/page.tsx`:

```tsx
import { PageHeader } from '@/app/components/common'

export default function ProductsPage() {
  return (
    <div className="container-fluid">
      <PageHeader
        title="Products"
        description="Manage your products"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' },
        ]}
      />

      <div className="row">
        <div className="col-lg-8">
          {/* Page content */}
        </div>
        <div className="col-lg-4">
          {/* Sidebar content */}
        </div>
      </div>
    </div>
  )
}
```

#### Example 2: Nested Route at `/sales/pipeline`

Create `app/sales/pipeline/page.tsx`:

```tsx
import { PageHeader } from '@/app/components/common'

export default function SalesPipelinePage() {
  return (
    <div className="container-fluid">
      <PageHeader
        title="Sales Pipeline"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Sales', href: '/sales' },
          { label: 'Pipeline' },
        ]}
      />
      {/* Content */}
    </div>
  )
}
```

### Page Structure Template

```tsx
'use client'  // If using hooks/interactivity

import { PageHeader, StatCard, ChartCard } from '@/app/components/common'
import { useState } from 'react'

export default function TemplatePage() {
  const [data, setData] = useState([])

  return (
    <div className="container-fluid">
      {/* Page Header */}
      <PageHeader
        title="Page Title"
        description="Brief description"
        breadcrumbs={[...]}
      />

      {/* Stats Row */}
      <div className="row g-3 mb-4">
        <div className="col-lg-3 col-md-6">
          <StatCard title="Stat 1" value="123" />
        </div>
      </div>

      {/* Main Content */}
      <div className="row g-3">
        <div className="col-lg-8">
          <ChartCard title="Chart">
            {/* Chart content */}
          </ChartCard>
        </div>
      </div>
    </div>
  )
}
```

---

## Styling & Theming

### Using Bootstrap Classes

All Bootstrap 5 utility classes are available:

```tsx
<div className="p-4 m-2 bg-light border rounded">
  <h1 className="h2 text-primary">Title</h1>
  <p className="text-muted">Description</p>
</div>
```

### Custom CSS in globals.css

Add component-specific styles:

```css
.custom-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  background: var(--light-color);
}

.custom-card:hover {
  box-shadow: 0 8px 16px rgba(91, 99, 245, 0.15);
}

html[data-bs-theme='dark'] .custom-card {
  background: #252d3d;
}
```

### CSS Variables for Theming

Access theme variables in CSS:

```css
.element {
  color: var(--text-color);
  background: var(--light-color);
  border-color: var(--border-color);
}
```

### Dark Mode Implementation

The theme is automatically applied based on:

```tsx
// In AppProvider
html.setAttribute('data-bs-theme', isDark ? 'dark' : 'light')
```

Check theme in components:

```tsx
const { darkMode } = useApp()

return (
  <div className={darkMode ? 'dark-theme' : 'light-theme'}>
    {/* Content */}
  </div>
)
```

---

## State Management

### Using AppProvider Context

Access global state:

```tsx
'use client'

import { useApp } from '@/app/contexts/AppProvider'

export function MyComponent() {
  const { darkMode, toggleDarkMode, sidebarCollapsed } = useApp()

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}
```

### Creating Additional Context

Create `app/contexts/AuthContext.tsx`:

```tsx
'use client'

import { createContext, useContext, useState } from 'react'

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    // API call
    setIsLoading(false)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
```

Add to RootLayoutClient:

```tsx
import { AuthProvider } from './contexts/AuthContext'

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <AppProvider>
      <AuthProvider>
        {/* Layout */}
      </AuthProvider>
    </AppProvider>
  )
}
```

---

## Chart Integration

### Basic Chart Example

```tsx
'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function SalesChart() {
  const [series] = useState([
    {
      name: 'Sales',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ])

  const options = {
    chart: { type: 'area', toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    colors: ['#5b63f5'],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    grid: { borderColor: '#e9e9f8' },
  }

  return (
    <div className="card">
      <div className="card-header">
        <h6>Sales Chart</h6>
      </div>
      <div className="card-body">
        {typeof window !== 'undefined' && (
          <Chart options={options} series={series} type="area" height={300} />
        )}
      </div>
    </div>
  )
}
```

### Chart Types

ApexCharts supports:
- **Line**: Trends and time-series
- **Area**: Cumulative data
- **Bar**: Comparisons
- **Pie/Donut**: Distribution
- **Scatter**: Correlations
- **Bubble**: Multi-dimensional
- **Heatmap**: Matrix data

---

## Forms & Validation

### Basic Form Example

```tsx
'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = () => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Form submitted:', formData)
      // Submit to API
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card">
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </div>
    </form>
  )
}
```

---

## Deployment

### Vercel Deployment (Recommended)

1. **Connect GitHub**:
   ```bash
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to vercel.com
   - Import project from GitHub
   - Configure environment variables
   - Deploy

3. **Or use CLI**:
   ```bash
   npm i -g vercel
   vercel
   ```

### Self-Hosted Deployment

1. **Build**:
   ```bash
   npm run build
   ```

2. **Start server**:
   ```bash
   npm start
   ```

3. **With PM2** (process manager):
   ```bash
   npm i -g pm2
   pm2 start "npm start" --name nexlink
   pm2 save
   ```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t nexlink .
docker run -p 3000:3000 nexlink
```

---

## Best Practices

### Code Organization

1. **Component Naming**: Use descriptive, PascalCase names
2. **File Structure**: One component per file
3. **Imports**: Use absolute paths (`@/app/...`)
4. **Exports**: Use named exports, no default exports

### Performance

1. **Dynamic Imports**: Use for large libraries
   ```tsx
   const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
   ```

2. **Lazy Loading**: Load components on demand
3. **Image Optimization**: Use Next.js Image component
4. **Code Splitting**: Automatic with App Router

### Type Safety

1. **Props Interfaces**: Always define prop types
   ```tsx
   interface ComponentProps {
     title: string
     onClick: () => void
   }
   ```

2. **State Types**: Use generics
   ```tsx
   const [data, setData] = useState<DataType[]>([])
   ```

3. **API Responses**: Define types for API data

### Styling

1. **Bootstrap First**: Leverage built-in classes
2. **Avoid Inline Styles**: Use CSS classes
3. **Responsive**: Use Bootstrap breakpoints
4. **Consistency**: Use design tokens (CSS variables)

### State Management

1. **Prop Drilling**: Avoid deep nesting
2. **Context**: Use for global state only
3. **Lift State Up**: When multiple components need it
4. **Custom Hooks**: For reusable logic

### Error Handling

```tsx
try {
  const response = await fetch('/api/data')
  if (!response.ok) throw new Error('API Error')
  const data = await response.json()
  setData(data)
} catch (error) {
  console.error('Error:', error)
  setError(error instanceof Error ? error.message : 'Unknown error')
}
```

### Accessibility

1. **Semantic HTML**: Use proper elements
2. **ARIA Labels**: For interactive elements
3. **Keyboard Navigation**: Ensure full keyboard support
4. **Color Contrast**: Follow WCAG guidelines
5. **Alt Text**: For images and icons

---

## Common Patterns

### Loading State

```tsx
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)

const fetchData = async () => {
  setIsLoading(true)
  setError(null)
  try {
    // Fetch logic
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Error')
  } finally {
    setIsLoading(false)
  }
}

return (
  <div>
    {isLoading && <div className="spinner-border"></div>}
    {error && <div className="alert alert-danger">{error}</div>}
    {/* Content */}
  </div>
)
```

### Modal Dialog

```tsx
const [showModal, setShowModal] = useState(false)

return (
  <>
    <button onClick={() => setShowModal(true)}>Open</button>

    {showModal && (
      <div className="modal show d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Modal Title</h5>
              <button onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <div className="modal-body">Content</div>
            <div className="modal-footer">
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
)
```

---

## Troubleshooting

### Issue: Styles not applying
**Solution**: Ensure Bootstrap CSS is imported in `layout.tsx`

### Issue: Charts not rendering
**Solution**: Use `typeof window !== 'undefined'` check

### Issue: Build errors
**Solution**: Run `npm run build` locally to debug

### Issue: Sidebar not responsive
**Solution**: Check media query at 1191px breakpoint

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Bootstrap Documentation](https://getbootstrap.com/docs)
- [ApexCharts Docs](https://apexcharts.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## Support

For questions or issues:
1. Check the main README.md
2. Review CONVERSION_SUMMARY.md
3. Check framework documentation
4. Refer to code examples in existing pages

---

**Last Updated**: April 2024
**Version**: 1.0.0
