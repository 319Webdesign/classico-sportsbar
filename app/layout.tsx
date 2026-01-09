import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: {
    default: 'Classico Sportsbar Pfungstadt | Live Fußball & Sportevents',
    template: '%s | Classico Sportsbar Pfungstadt',
  },
  description:
    'Deine Sportsbar im Herzen von Pfungstadt. Erlebe internationale Sportevents live in authentischer Atmosphäre. Offizieller Partner von Sky & DAZN. Bundesliga, Champions League, Live Fußball.',
  keywords: [
    'Sportsbar Pfungstadt',
    'Live Fußball Darmstadt',
    'Bundesliga schauen Bergstraße',
    'Sportsbar Bergstraße',
    'Live Sport Pfungstadt',
    'Sky Sport Gastronomie',
    'DAZN Partner Pfungstadt',
    'Fußball schauen Pfungstadt',
    'Sportsbar Hessen',
  ],
  authors: [{ name: 'Classico Sportsbar Pfungstadt' }],
  creator: 'Classico Sportsbar Pfungstadt',
  publisher: 'Classico Sportsbar Pfungstadt',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://classico-sportsbar.de'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://classico-sportsbar.de',
    title: 'Classico Sportsbar Pfungstadt | Live Sport Events',
    description:
      'Deine Sportsbar im Herzen von Pfungstadt. Erlebe internationale Sportevents live. Offizieller Partner von Sky & DAZN.',
    siteName: 'Classico Sportsbar Pfungstadt',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Classico Sportsbar Pfungstadt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Classico Sportsbar Pfungstadt | Live Sport Events',
    description:
      'Deine Sportsbar im Herzen von Pfungstadt. Erlebe internationale Sportevents live.',
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
