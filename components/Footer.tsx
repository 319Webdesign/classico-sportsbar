'use client'

import { MapPin, Phone, MessageCircle, Instagram } from 'lucide-react'

const ADDRESS = {
  street: 'Musterstraße 1',
  city: '12345 Stadt',
  full: 'Musterstraße 1, 12345 Stadt',
}

const PHONE_NUMBER = '+490000000000'
const PHONE_DISPLAY = '+49 000 0000000'

// WhatsApp-Link
const whatsappUrl = '#'

// Instagram-Link
const instagramUrl = '#'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hauptbereich: Adresse, Kontakt & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 mb-6">
          {/* Linke Seite: Adresse */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-400">
            <MapPin size={16} className="text-classico-gold flex-shrink-0" />
            <span className="text-gray-300">
              {ADDRESS.street}, {ADDRESS.city}
            </span>
          </div>

          {/* Mitte: Kontakt - richtig zentriert */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            {/* Telefon */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-2 hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] px-2 focus-ring rounded-md"
              aria-label={`Arena Sportsbar anrufen: ${PHONE_DISPLAY}`}
            >
              <Phone size={16} className="text-classico-gold flex-shrink-0" aria-hidden="true" />
              <span>{PHONE_DISPLAY}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] px-2 focus-ring rounded-md"
              aria-label="Arena Sportsbar via WhatsApp kontaktieren"
            >
              <MessageCircle size={16} className="text-classico-gold flex-shrink-0" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Rechte Seite: Instagram */}
          <div className="flex items-center justify-center md:justify-end">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 min-h-[44px] min-w-[44px] bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-lg hover:scale-105 transition-transform shadow-lg hover:shadow-xl focus-ring"
              aria-label="Arena Sportsbar auf Instagram besuchen"
            >
              <Instagram size={20} className="text-white" />
              <span className="text-sm font-bold">Instagram</span>
            </a>
          </div>
        </div>

        {/* Rechtliche Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm text-gray-500">
          <a
            href="/impressum"
            className="hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
            aria-label="Impressum anzeigen"
          >
            Impressum
          </a>
          <span className="text-gray-600" aria-hidden="true">•</span>
          <a
            href="/datenschutz"
            className="hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
            aria-label="Datenschutzerklärung anzeigen"
          >
            Datenschutz
          </a>
        </div>

        {/* Copyright & Design Credit */}
        <div className="pt-6 border-t border-zinc-800 text-center space-y-2">
          <p className="text-xs text-gray-500">
            &copy; 2026 Arena Sportsbar. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-gray-600">
            Design by{' '}
            <a
              href="https://319Webdesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-classico-gold hover:text-classico-gold/80 transition-colors"
            >
              319Webdesign
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
