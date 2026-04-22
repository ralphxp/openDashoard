import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/public/assets/libs/flaticon/css/all/all.css'
import '/public/assets/libs/lucide/lucide.css'
import '/public/assets/libs/fontawesome/css/all.min.css'
import '/public/assets/libs/simplebar/simplebar.css'
import '/public/assets/libs/node-waves/waves.css'
import '/public/assets/libs/bootstrap-select/css/bootstrap-select.min.css'
import '/public/assets/libs/flatpickr/flatpickr.min.css'
import '/public/assets/libs/datatables/datatables.min.css'
import '/public/assets/css/styles.css'
import { RootLayoutClient } from './RootLayoutClient'

export const metadata: Metadata = {
  title: 'NexLink | CRM Admin Dashboard Template',
  description: 'NexLink is a modern Bootstrap 5 CRM Admin Dashboard Template designed for managing sales, analytics, projects, and team performance with clean UI, responsive layout, and prebuilt pages.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/assets/images/favicon.png',
    apple: '/assets/images/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexlink.layoutdrop.com',
    siteName: 'NexLink | CRM Admin Dashboard Template',
    title: 'NexLink | CRM Admin Dashboard Template',
    description: 'NexLink is a modern Bootstrap 5 CRM Admin Dashboard Template designed for managing sales, analytics, projects, and team performance with clean UI, responsive layout, and prebuilt pages.',
    images: [
      {
        url: '/assets/images/preview.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary',
    creator: '@layoutdrop',
    title: 'NexLink | CRM Admin Dashboard Template',
    description: 'NexLink is a modern Bootstrap 5 CRM Admin Dashboard Template designed for managing sales, analytics, projects, and team performance with clean UI, responsive layout, and prebuilt pages.',
  },
  keywords: 'Bootstrap Admin Template, CRM Dashboard, Admin Panel, Bootstrap 5 Dashboard, Project Management, Analytics Template, Responsive Admin',
  robots: 'index, follow',
  authors: [
    {
      name: 'LayoutDrop',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  )
}
