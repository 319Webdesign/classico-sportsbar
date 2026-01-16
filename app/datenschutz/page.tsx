import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung der Arena Sportsbar. Informationen zur Datenverarbeitung und Ihren Rechten.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          {/* Datenschutz auf einen Blick */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              1. Datenschutz auf einen Blick
            </h2>
            
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Allgemeine Hinweise
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Datenerfassung auf dieser Website
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mt-4">
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder
                über WhatsApp senden.
              </p>
              <p className="mt-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                werden.
              </p>
              <p className="mt-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
                ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>
          </section>

          {/* Allgemeine Hinweise und Pflichtinformationen */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Datenschutz
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten
                erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
                identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche
                Daten wir erheben und wofür wir sie nutzen.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                <strong>Arena Sportsbar</strong>
                <br />
                Musterstraße 1
                <br />
                12345 Stadt
                <br />
                Telefon: +49 000 0000000
                <br />
                E-Mail: info@example.com
                <br />
                <span className="text-sm text-gray-400">
                  (Bitte durch die tatsächliche E-Mail-Adresse ersetzen)
                </span>
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Speicherdauer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
                genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für
                die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend
                machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben.
              </p>
            </div>
          </section>

          {/* Datenerfassung auf dieser Website */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Cookies
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Diese Website nutzt technisch notwendige Cookies, um die Funktionalität der Website
                sicherzustellen. Diese Cookies werden automatisch gesetzt, wenn Sie die Website
                besuchen.
              </p>
              <p>
                <strong>Betroffene Daten:</strong> Technische Daten (z. B. Session-ID)
                <br />
                <strong>Zweck:</strong> Gewährleistung der Funktionalität der Website
                <br />
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f
                DSGVO)
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Hosting
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Diese Website wird gehostet. Anbieter ist:
              </p>
              <p>
                <strong>[Name des Hosting-Anbieters]</strong>
                <br />
                [Adresse des Hosting-Anbieters]
                <br />
                <span className="text-sm text-gray-400">
                  (Bitte durch die tatsächlichen Daten des Hosting-Anbieters ersetzen)
                </span>
              </p>
              <p>
                Wenn Sie diese Website besuchen, erfasst der Hoster automatisch verschiedene
                Logfiles inklusive Ihrer IP-Adresse.
              </p>
              <p>
                <strong>Betroffene Daten:</strong> IP-Adresse, Zugriffszeiten, angeforderte
                Seiten, Browser-Informationen
                <br />
                <strong>Zweck:</strong> Bereitstellung und Sicherheit der Website
                <br />
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f
                DSGVO)
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Kontaktformular und WhatsApp
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Wenn Sie uns per Kontaktformular oder WhatsApp Anfragen zukommen lassen, werden
                Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen
                Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                bei uns gespeichert.
              </p>
              <p>
                <strong>Betroffene Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, Nachricht
                <br />
                <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage
                <br />
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f
                DSGVO) oder Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)
              </p>
              <p className="mt-4">
                <strong>Hinweis zu WhatsApp:</strong>
              </p>
              <p>
                Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Daten gemäß den
                Datenschutzbestimmungen von WhatsApp verarbeitet. WhatsApp ist ein Dienst der Meta
                Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                Irland.
              </p>
              <p>
                Wir verwenden WhatsApp, um mit Ihnen zu kommunizieren. Die Übermittlung Ihrer Daten
                an WhatsApp erfolgt nur, wenn Sie uns aktiv kontaktieren. Weitere Informationen
                zur Datenverarbeitung durch WhatsApp finden Sie in der Datenschutzerklärung von
                WhatsApp:{' '}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-classico-gold hover:underline"
                >
                  https://www.whatsapp.com/legal/privacy-policy
                </a>
              </p>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-200 mt-6">
              Google Maps
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Diese Website nutzt Google Maps zur Darstellung von Karten. Anbieter ist die Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Wenn Sie eine Seite mit Google Maps aufrufen, wird eine Verbindung zu den Servern
                von Google aufgebaut. Hierdurch wird Google mitgeteilt, dass Sie unsere Website
                besucht haben. Ihre IP-Adresse wird ebenfalls übertragen.
              </p>
              <p>
                <strong>Betroffene Daten:</strong> IP-Adresse, Standortdaten (wenn erlaubt)
                <br />
                <strong>Zweck:</strong> Bereitstellung von Kartenfunktionen
                <br />
                <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f
                DSGVO)
              </p>
              <p>
                Weitere Informationen zur Datenverarbeitung durch Google finden Sie in der
                Datenschutzerklärung von Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-classico-gold hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </section>

          {/* Ihre Rechte */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-classico-gold">
              4. Ihre Rechte
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Sie haben folgende Rechte:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
                  (Art. 15 DSGVO)
                </li>
                <li>
                  Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)
                </li>
                <li>
                  Recht auf Löschung (Art. 17 DSGVO)
                </li>
                <li>
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>
                  Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                </li>
                <li>
                  Widerspruchsrecht (Art. 21 DSGVO)
                </li>
                <li>
                  Recht auf Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)
                </li>
              </ul>
              <p className="mt-4">
                Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht
                verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise
                verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
