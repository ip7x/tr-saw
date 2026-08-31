import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Xiamen Sawlink | İnce Elektrokaplamalı Tel ve Elmas Tel Üreticisi',
    template: '%s | Xiamen Sawlink',
  },
  description:
    'XIAMEN SAWLINK INTERNATIONAL CO., LTD. — elmas tel testere sektörüne odaklanan profesyonel küresel üretici. Yüksek kaliteli sarf malzemeleri, komple üretim hattı ekipmanları ve baştan sona teknik destek.',
  keywords: [
    'elmas tel testere',
    'elmas tel',
    'elektrokaplamalı tel',
    'tel testere sarf malzemeleri',
    'üretim hattı ekipmanı',
    'Xiamen Sawlink',
  ],
  generator: 'v0.app',
  applicationName: 'Xiamen Sawlink',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Xiamen Sawlink',
    description:
      'Elmas tel testere üreticisi ve global teknik destek partneri.',
    url: 'https://example.com',
    siteName: 'Xiamen Sawlink',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xiamen Sawlink',
    description:
      'Elmas tel testere üreticisi ve global teknik destek partneri.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d4ed8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
