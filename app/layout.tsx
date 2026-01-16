import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: {
    default: 'Modern Sportsbar Template | Dein Name Webdesign',
    template: '%s | Modern Sportsbar Template',
  },
  description:
    'Modernes Sportsbar Template für Gastronomie. Erlebe internationale Sportevents live in authentischer Atmosphäre. Perfekt für Bars, Restaurants und Sportlokale.',
  keywords: [
    'Sportsbar Template',
    'Gastronomie Website',
    'Bar Website',
    'Restaurant Template',
    'Live Sport Bar',
    'Sportsbar Design',
  ],
  authors: [{ name: 'Dein Name Webdesign' }],
  creator: 'Dein Name Webdesign',
  publisher: 'Dein Name Webdesign',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://classico-sportsbar.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://example.com',
    title: 'Modern Sportsbar Template | Dein Name Webdesign',
    description:
      'Modernes Sportsbar Template für Gastronomie. Perfekt für Bars, Restaurants und Sportlokale.',
    siteName: 'Modern Sportsbar Template',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Modern Sportsbar Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modern Sportsbar Template | Dein Name Webdesign',
    description:
      'Modernes Sportsbar Template für Gastronomie. Perfekt für Bars und Restaurants.',
    images: ['/logo.png'],
  },
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
  verification: {
    // TODO: Google Search Console Verification Code hier eintragen
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="overflow-x-hidden">
      <body className="overflow-x-hidden max-w-full">
        <StructuredData />
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
