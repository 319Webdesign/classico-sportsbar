export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Arena Sportsbar',
    alternateName: 'Arena Sportsbar',
    description:
      'Modernes Sportsbar Template. Erlebe internationale Sportevents live. Perfekt für Gastronomie und Bars.',
    image: 'https://example.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Musterstraße 1',
      addressLocality: 'Deine Stadt',
      postalCode: '12345',
      addressRegion: 'Dein Bundesland',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.0,
      longitude: 8.0,
    },
    telephone: '+490000000000',
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
      name: 'Deine Stadt',
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
