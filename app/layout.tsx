import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gracehuh.com'),
  title: {
    default: 'Grace Huh — Product Designer',
    template: '%s — Grace Huh',
  },
  description: 'Product designer based in Seattle, WA specializing in mobile and digital experiences.',
  keywords: ['product designer', 'UX designer', 'UI designer', 'Seattle', 'Grace Huh', 'portfolio', 'mobile design'],
  authors: [{ name: 'Grace Huh', url: 'https://www.gracehuh.com' }],
  openGraph: {
    title: 'Grace Huh — Product Designer',
    description: 'Product designer based in Seattle, WA specializing in mobile and digital experiences.',
    url: 'https://www.gracehuh.com',
    siteName: 'Grace Huh',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Grace Huh — Product Designer' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grace Huh — Product Designer',
    description: 'Product designer based in Seattle, WA specializing in mobile and digital experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-white text-black font-sans">
        <Header />
        {children}
      </body>
    </html>
  )
}
