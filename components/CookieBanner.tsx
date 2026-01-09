'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, Settings, Check } from 'lucide-react'
import Link from 'next/link'

type CookiePreferences = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_STORAGE_KEY = 'classico-cookie-consent'
const COOKIE_PREFERENCES_KEY = 'classico-cookie-preferences'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Immer aktiv
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Prüfe, ob bereits eine Entscheidung getroffen wurde
    const consent = localStorage.getItem(COOKIE_STORAGE_KEY)
    if (!consent) {
      // Zeige Banner nach 1 Sekunde Verzögerung
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      // Lade gespeicherte Präferenzen
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY)
      if (savedPreferences) {
        try {
          const parsed = JSON.parse(savedPreferences)
          setPreferences(parsed)
          applyCookiePreferences(parsed)
        } catch (e) {
          console.error('Fehler beim Laden der Cookie-Präferenzen:', e)
        }
      }
    }
  }, [])

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Hier können Sie später Tracking-Skripte basierend auf den Präferenzen laden
    if (prefs.analytics) {
      // Google Analytics, Matomo, etc. initialisieren
      console.log('Analytics aktiviert')
    }
    if (prefs.marketing) {
      // Marketing-Tools initialisieren
      console.log('Marketing aktiviert')
    }
  }

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    }
    savePreferences(necessaryOnly)
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
    setIsVisible(false)
    setShowSettings(false)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_STORAGE_KEY, 'true')
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs))
    applyCookiePreferences(prefs)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return // Essential kann nicht deaktiviert werden
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998]"
            onClick={() => !showSettings && setIsVisible(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
            }}
            className="fixed bottom-0 left-0 right-0 lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-lg z-[9999] px-4 lg:px-0"
          >
            <div className="relative bg-zinc-900/95 backdrop-blur-md border border-classico-gold/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* Goldener Akzent oben */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-classico-gold to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                aria-label="Banner schließen"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-6 lg:p-8">
                {!showSettings ? (
                  /* Hauptansicht */
                  <>
                    <h3 className="text-xl font-bold text-white mb-3 pr-8">
                      Cookies & Datenschutz
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      Wir nutzen Cookies, um deinen Besuch im Classico noch besser zu machen. Manche
                      sind notwendig für die Funktion der Seite, andere helfen uns, die Seite zu
                      verbessern.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <motion.button
                        onClick={handleAcceptAll}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 min-h-[44px] min-w-[44px] bg-classico-gold text-[#050505] font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-classico-gold/30 focus-ring"
                        aria-label="Alle Cookies akzeptieren"
                      >
                        Alle akzeptieren
                      </motion.button>
                      <motion.button
                        onClick={handleAcceptNecessary}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 px-6 py-3 min-h-[44px] min-w-[44px] border border-gray-600 text-white font-semibold rounded-lg transition-all hover:border-gray-400 hover:bg-zinc-800/50 focus-ring"
                        aria-label="Nur notwendige Cookies akzeptieren"
                      >
                        Nur notwendige
                      </motion.button>
                    </div>

                    {/* Settings Link */}
                    <button
                      onClick={() => setShowSettings(true)}
                      className="text-sm text-classico-gold hover:text-classico-gold/80 transition-colors underline underline-offset-2 mb-4 inline-flex items-center gap-1 min-h-[44px] min-w-[44px] px-2 focus-ring rounded-md"
                      aria-label="Cookie-Einstellungen anpassen"
                    >
                      <Settings size={14} aria-hidden="true" />
                      Einstellungen anpassen
                    </button>

                    {/* Legal Links */}
                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 pt-4 border-t border-zinc-800">
                      <Link
                        href="/impressum"
                        className="hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
                        aria-label="Impressum anzeigen"
                      >
                        Impressum
                      </Link>
                      <span aria-hidden="true">•</span>
                      <Link
                        href="/datenschutz"
                        className="hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
                        aria-label="Datenschutzerklärung anzeigen"
                      >
                        Datenschutzerklärung
                      </Link>
                    </div>
                  </>
                ) : (
                  /* Settings Ansicht */
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">
                        Cookie-Einstellungen
                      </h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Zurück"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                      Wähle aus, welche Cookies wir verwenden dürfen. Notwendige Cookies sind immer
                      aktiv, da sie für die Grundfunktionen der Website erforderlich sind.
                    </p>

                    {/* Cookie-Kategorien */}
                    <div className="space-y-4 mb-6">
                      {/* Essential - immer aktiv */}
                      <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-white">Notwendige Cookies</h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Erforderlich für die Grundfunktionen
                            </p>
                          </div>
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-classico-gold/20 border border-classico-gold/40">
                            <Check size={20} className="text-classico-gold" />
                          </div>
                        </div>
                      </div>

                      {/* Analytics */}
                      <div className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors">
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">Analyse-Cookies</h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Helfen uns, die Website zu verbessern
                            </p>
                          </div>
                          <button
                            onClick={() => togglePreference('analytics')}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              preferences.analytics
                                ? 'bg-classico-gold'
                                : 'bg-zinc-600'
                            }`}
                            aria-label="Analyse-Cookies aktivieren/deaktivieren"
                          >
                            <motion.div
                              className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md"
                              animate={{
                                x: preferences.analytics ? 24 : 0,
                              }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          </button>
                        </label>
                      </div>

                      {/* Marketing */}
                      <div className="bg-zinc-800/30 rounded-lg p-4 border border-zinc-700 hover:border-zinc-600 transition-colors">
                        <label className="flex items-center justify-between cursor-pointer">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">Marketing-Cookies</h4>
                            <p className="text-xs text-gray-400 mt-1">
                              Für personalisierte Werbung und Inhalte
                            </p>
                          </div>
                          <button
                            onClick={() => togglePreference('marketing')}
                            className={`relative w-12 h-6 rounded-full transition-colors ${
                              preferences.marketing
                                ? 'bg-classico-gold'
                                : 'bg-zinc-600'
                            }`}
                            aria-label="Marketing-Cookies aktivieren/deaktivieren"
                          >
                            <motion.div
                              className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md"
                              animate={{
                                x: preferences.marketing ? 24 : 0,
                              }}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          </button>
                        </label>
                      </div>
                    </div>

                    {/* Save Button */}
                    <motion.button
                      onClick={handleSavePreferences}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 min-h-[44px] min-w-[44px] bg-classico-gold text-[#050505] font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-classico-gold/30 mb-4 focus-ring"
                      aria-label="Cookie-Einstellungen speichern"
                    >
                      Einstellungen speichern
                    </motion.button>

                    {/* Legal Links */}
                    <div className="flex flex-wrap gap-4 justify-center text-xs text-gray-400 pt-4 border-t border-zinc-800">
                      <Link
                        href="/impressum"
                        className="hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
                        aria-label="Impressum anzeigen"
                      >
                        Impressum
                      </Link>
                      <span aria-hidden="true">•</span>
                      <Link
                        href="/datenschutz"
                        className="hover:text-classico-gold transition-colors min-h-[44px] min-w-[44px] inline-flex items-center px-2 focus-ring rounded-md"
                        aria-label="Datenschutzerklärung anzeigen"
                      >
                        Datenschutzerklärung
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
