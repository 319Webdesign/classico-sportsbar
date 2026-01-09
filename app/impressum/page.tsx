import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum der Classico Sportsbar Pfungstadt. Kontaktdaten, Adresse und rechtliche Informationen.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Zurück-Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-classico-gold transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={18} />
          Zurück zur Startseite
        </Link>

        {/* Hauptinhalt */}
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            Impressum
          </h1>

          {/* Angaben gemäß § 5 TMG */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong>Classico Sportsbar Pfungstadt</strong>
                <br />
                Mainstraße 11
                <br />
                64319 Pfungstadt
              </p>
              <p>
                Deutschland
              </p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              Kontakt
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong>Telefon:</strong>{' '}
                <a
                  href="tel:+4961579898000"
                  className="text-classico-gold hover:underline"
                >
                  +49 6157 9898000
                </a>
              </p>
              <p>
                <strong>E-Mail:</strong>{' '}
                <a
                  href="mailto:info@classico-sportsbar.de"
                  className="text-classico-gold hover:underline"
                >
                  info@classico-sportsbar.de
                </a>
                <br />
                <span className="text-sm text-gray-400">
                  (Bitte ersetzen Sie die E-Mail-Adresse durch die tatsächliche Adresse)
                </span>
              </p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              Umsatzsteuer-ID
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              </p>
              <p>
                <strong>DE 123456789</strong>
                <br />
                <span className="text-sm text-gray-400">
                  (Bitte durch die tatsächliche USt-IdNr. ersetzen, falls vorhanden)
                </span>
              </p>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                [Name des Verantwortlichen]
                <br />
                Mainstraße 11
                <br />
                64319 Pfungstadt
                <br />
                <span className="text-sm text-gray-400">
                  (Bitte durch den tatsächlichen Namen des Verantwortlichen ersetzen)
                </span>
              </p>
            </div>
          </section>

          {/* Redaktionell verantwortlich (optional) */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              Redaktionell verantwortlich
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                [Name des Redaktionsverantwortlichen]
                <br />
                Mainstraße 11
                <br />
                64319 Pfungstadt
                <br />
                <span className="text-sm text-gray-400">
                  (Optional - falls abweichend vom Inhaber)
                </span>
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
