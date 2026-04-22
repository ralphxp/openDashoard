import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata: Metadata = {
  title: 'NexLink | CRM Admin Dashboard Template',
  description: 'NexLink is a modern Bootstrap 5 CRM Admin Dashboard Template designed for managing sales, analytics, projects, and team performance with clean UI, responsive layout, and prebuilt pages.',
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/libs/flaticon/css/all/all.css" />
        <link rel="stylesheet" href="/assets/libs/lucide/lucide.css" />
        <link rel="stylesheet" href="/assets/libs/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/libs/simplebar/simplebar.css" />
        <link rel="stylesheet" href="/assets/libs/node-waves/waves.css" />
        <link rel="stylesheet" href="/assets/libs/bootstrap-select/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/libs/flatpickr/flatpickr.min.css" />
        <link rel="stylesheet" href="/assets/libs/datatables/datatables.min.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
      </head>
      <body>
        {children}

        <Script src="/assets/libs/global/global.min.js" strategy="afterInteractive" />
        <Script src="/assets/libs/flatpickr/flatpickr.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/appSettings.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
