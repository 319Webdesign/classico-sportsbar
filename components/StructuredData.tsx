export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Classico Sportsbar Pfungstadt',
    alternateName: 'Classico Sportsbar',
    description:
      'Sportsbar im Herzen von Pfungstadt. Erlebe internationale Sportevents live mit Sky und DAZN. Italienische Küche und Premium-Getränke.',
    image: 'https://classico-sportsbar.de/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mainstraße 11',
      addressLocality: 'Pfungstadt',
      postalCode: '64319',
      addressRegion: 'Hessen',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8035913,
      longitude: 8.5930187,
    },
    telephone: '+4961579898000',
    priceRange: '€€',
    servesCuisine: ['Italienisch', 'Bar'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
        opens: '16:00',
        closes: '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '16:00',
        closes: '02:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '02:00',
      },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Pfungstadt',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Live Sport Events',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Live Fußball Übertragungen',
            description: 'Bundesliga, Champions League und internationale Top-Ligen',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sky Sport Partner',
            description: 'Offizieller Gastronomie-Partner von Sky',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DAZN Partner',
            description: 'Offizieller Gastronomie-Partner von DAZN',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '30',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
