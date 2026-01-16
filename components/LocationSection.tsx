'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

interface OpeningHours {
  day: string
  hours: string
  isClosed?: boolean
  open?: number
  close?: number
}

const OPENING_HOURS: OpeningHours[] = [
  { day: 'Montag', hours: 'Ruhetag', isClosed: true },
  { day: 'Dienstag', hours: '16:00 - 00:00 Uhr', open: 16, close: 0 },
  { day: 'Mittwoch', hours: '16:00 - 00:00 Uhr', open: 16, close: 0 },
  { day: 'Donnerstag', hours: '16:00 - 00:00 Uhr', open: 16, close: 0 },
  { day: 'Freitag', hours: '16:00 - 02:00 Uhr', open: 16, close: 2 },
  { day: 'Samstag', hours: '10:00 - 02:00 Uhr', open: 10, close: 2 },
  { day: 'Sonntag', hours: '10:00 - 00:00 Uhr', open: 10, close: 0 },
]

// Adresse
const ADDRESS = {
  street: 'Musterstraße 1',
  city: '12345 Stadt',
  full: 'Musterstraße 1, 12345 Stadt',
}

// Telefonnummer
const PHONE_NUMBER = '+490000000000'
const PHONE_DISPLAY = '+49 000 0000000'

// Google Maps Embed URL - Platzhalter
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.123456789!2d8.123456789!3d50.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzI0LjQiTiA4wrAwNycyNC40IkU!5e0!3m2!1sde!2sde!4v1234567890!5m2!1sde!2sde`

export default function LocationSection() {
  const [currentDay, setCurrentDay] = useState<number>(0)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    // Aktuellen Tag ermitteln (0 = Sonntag, 1 = Montag, ...)
    const today = new Date().getDay()
    // Konvertiere zu unserem Format (0 = Montag, 6 = Sonntag)
    const dayIndex = today === 0 ? 6 : today - 1
    setCurrentDay(dayIndex)

    // Prüfe ob die Bar aktuell geöffnet ist
    const checkOpeningStatus = () => {
      const todayHours = OPENING_HOURS[dayIndex]

      // Wenn Ruhetag, dann geschlossen
      if (todayHours.isClosed) {
        setIsOpen(false)
        return
      }

      // Wenn keine Öffnungszeiten definiert, geschlossen
      if (!todayHours.open || todayHours.close === undefined) {
        setIsOpen(false)
        return
      }

      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const currentTime = currentHour * 60 + currentMinute

      const openTimeMinutes = todayHours.open * 60
      let closeTimeMinutes = todayHours.close * 60

      // Wenn close = 0 (Mitternacht) oder kleiner als open, bedeutet es nächsten Tag
      if (closeTimeMinutes === 0 || closeTimeMinutes < openTimeMinutes) {
        closeTimeMinutes += 24 * 60 // Nächster Tag
      }

      // Prüfe ob wir nach Mitternacht sind (zwischen 00:00 und Öffnungszeit)
      // In diesem Fall betrachten wir es als Teil des gestrigen Tages
      let adjustedCurrentTime = currentTime
      if (currentHour < todayHours.open && currentHour < 6) {
        // Zwischen 00:00 und 06:00 = möglicherweise noch geöffnet von gestern
        adjustedCurrentTime = currentTime + 24 * 60
      }

      // Prüfe ob wir im Öffnungszeitfenster sind
      const isCurrentlyOpen =
        (adjustedCurrentTime >= openTimeMinutes && adjustedCurrentTime < closeTimeMinutes) ||
        (currentTime >= openTimeMinutes && currentTime < closeTimeMinutes)

      setIsOpen(isCurrentlyOpen)
    }

    checkOpeningStatus()
    // Prüfe alle Minute neu
    const interval = setInterval(checkOpeningStatus, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="kontakt" className="pt-32 pb-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Linke Seite: Öffnungszeiten */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Titel */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                Besuch uns in der{' '}
                <span className="text-classico-gold">Arena</span>
              </h2>
            </div>

            {/* Live-Status */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="relative">
                {isOpen && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-500"
                    animate={{
                      scale: [1, 1.5, 1.5],
                      opacity: [1, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                )}
                <div
                  className={`relative w-3 h-3 rounded-full ${
                    isOpen ? 'bg-green-500' : 'bg-gray-500'
                  }`}
                />
              </div>
              <span
                className={`font-bold text-sm uppercase tracking-wider ${
                  isOpen ? 'text-green-500' : 'text-gray-500'
                }`}
              >
                {isOpen ? 'JETZT GEÖFFNET' : 'GESCHLOSSEN'}
              </span>
            </div>

            {/* Öffnungszeiten */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock size={20} className="text-classico-gold" />
                <h3 className="text-xl font-bold text-white">Öffnungszeiten</h3>
              </div>
              <ul className="space-y-2">
                {OPENING_HOURS.map((day, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-all ${
                      index === currentDay
                        ? 'bg-classico-gold/20 text-classico-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                        : 'text-gray-300'
                    }`}
                  >
                    <span className={`font-medium ${index === currentDay ? 'font-bold' : ''}`}>
                      {day.day}
                    </span>
                    <span className={index === currentDay ? 'font-bold' : ''}>{day.hours}</span>
                  </li>
                ))}
              </ul>
              {/* Zusatz-Info */}
              <p className="text-gray-400 text-sm mt-4 italic text-center lg:text-left">
                Bei besonderen Sport-Events können die Öffnungszeiten abweichen.
              </p>
            </div>
          </motion.div>

          {/* Rechte Seite: Adresse und Kontakt über der Karte */}
          <motion.div
            className="space-y-6 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Adresse und Kontakt nebeneinander */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Adresse */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={20} className="text-classico-gold" />
                  <h3 className="text-xl font-bold text-white">Adresse</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 text-lg">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.city}
                  </p>
                </div>
              </div>

              {/* Telefon */}
              <div className="text-right lg:text-left">
                <div className="flex items-center justify-end lg:justify-start gap-2 mb-4">
                  <Phone size={20} className="text-classico-gold" />
                  <h3 className="text-xl font-bold text-white">Kontakt</h3>
                </div>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-gray-300 hover:text-classico-gold transition-colors text-lg inline-block min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
                  aria-label={`Arena Sportsbar anrufen: ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Karte */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-classico-gold shadow-2xl">
              {/* Google Maps iframe mit dunklen Filtern */}
              <div className="relative aspect-square lg:aspect-[4/3] grayscale invert brightness-90 contrast-125">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                  title="Arena Sportsbar Standort"
                />
              </div>
              
              {/* Overlay für bessere Lesbarkeit (optional) */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-black/5 to-transparent" />
            </div>

            {/* Info-Badge */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Klicke auf die Karte für Details
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
