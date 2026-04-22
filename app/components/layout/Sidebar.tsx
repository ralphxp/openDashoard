'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavItem {
  label: string
  href?: string
  icon?: string
  badge?: string
  items?: NavItem[]
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: 'fi-rr-home',
  },
  {
    label: 'CRM',
    icon: 'fi-rr-briefcase',
    items: [
      { label: 'Companies', href: '/companies' },
      { label: 'Contacts', href: '/contacts' },
      { label: 'Deals', href: '/deals' },
      { label: 'Activities', href: '/activities' },
    ],
  },
  {
    label: 'Sales',
    icon: 'fi-rr-chart-bar',
    items: [
      { label: 'Pipeline', href: '/sales/pipeline' },
      { label: 'Leads', href: '/sales/leads' },
      { label: 'Invoices', href: '/sales/invoices' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: 'fi-rr-list-check',
  },
  {
    label: 'Calendar',
    href: '/calendar',
    icon: 'fi-rr-calendar',
  },
  {
    label: 'Chat',
    href: '/chat',
    icon: 'fi-rr-comments',
  },
  {
    label: 'AI',
    href: '/ai/new-chat',
    icon: 'fi-rr-sparkles',
  },
]

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  return (
    <aside className="app-sidebar">
      <div className="app-brand">
        <a href="/" className="d-flex align-items-center gap-2">
          <img src="/assets/images/logo.webp" alt="NexLink" className="logo" />
          <span className="brand-name">NexLink</span>
        </a>
      </div>

      <nav className="app-nav">
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.label} className="nav-menu-item">
              {item.items ? (
                <>
                  <button
                    className={`nav-menu-link ${expandedItems.includes(item.label) ? 'active' : ''}`}
                    onClick={() => toggleExpand(item.label)}
                  >
                    {item.icon && <i className={`fi ${item.icon}`}></i>}
                    <span className="nav-menu-label">{item.label}</span>
                    <i className="fi fi-rr-angle-small-right nav-menu-arrow"></i>
                  </button>
                  {expandedItems.includes(item.label) && (
                    <ul className="nav-submenu">
                      {item.items.map((subitem) => (
                        <li key={subitem.label} className="nav-submenu-item">
                          <Link href={subitem.href || '#'} className="nav-submenu-link">
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href || '#'} className="nav-menu-link">
                  {item.icon && <i className={`fi ${item.icon}`}></i>}
                  <span className="nav-menu-label">{item.label}</span>
                  {item.badge && <span className="nav-badge badge badge-sm bg-primary">{item.badge}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="app-sidebar-footer">
        <div className="upgrade-card bg-primary-subtle rounded-2 p-3 text-center mb-3">
          <h6 className="mb-2">Upgrade your plan</h6>
          <p className="small text-muted mb-3">Get access to all features</p>
          <button className="btn btn-primary btn-sm w-100">Upgrade</button>
        </div>
      </div>
    </aside>
  )
}
