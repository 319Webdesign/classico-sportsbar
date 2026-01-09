'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Radio, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ReservationCTA() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // WhatsApp-Link mit korrekter Telefonnummer
  const phoneNumber = '4961579898000'
  const message = encodeURIComponent(
    'Hallo Classico-Team, ich würde gerne einen Tisch für das nächste Spiel reservieren!'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  // Goldene Partikel generieren - nur auf Client
  const particles = isMounted
    ? Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: i * 0.2,
        duration: 15 + Math.random() * 10,
        x: Math.random() * 100,
        size: 2 + Math.random() * 3,
      }))
    : []

  // Text-Wörter für Staggered Animation
  const textWords = ['KEIN', 'SPIEL', 'VERPASSEN.']

  return (
    <motion.section
      className="relative pt-16 lg:pt-24 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Hintergrundverlauf */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black" />

      {/* Stadion-Glow - Pulsierender Hintergrund-Lichteffekt */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-classico-gold/10 via-classico-gold/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-[80%] h-[80%] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full blur-2xl" />
      </motion.div>

      {/* Goldene Partikel (Floating Dust) */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-classico-gold/40 rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: ['0vh', '100vh'],
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() - 0.5) * 20}%`,
            ],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Goldene Linien oben und unten */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-classico-gold to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-classico-gold to-transparent z-10" />


      {/* Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Links: Headline & Subline */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Live Badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-4 lg:mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative">
                {/* Pulsierender roter Punkt */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-500"
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
                <div className="relative w-3 h-3 bg-red-500 rounded-full" />
              </div>
              <span className="text-red-500 font-bold text-sm uppercase tracking-wider flex items-center gap-1">
                <Radio size={14} className="fill-red-500" />
                LIVE
              </span>
            </motion.div>

            {/* Staggered Text Animation */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
              {textWords.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: 'easeOut',
                  }}
                >
                  {word === 'VERPASSEN.' ? (
                    <motion.span
                      className="text-classico-gold relative"
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(212, 175, 55, 0.5)',
                          '0 0 20px rgba(212, 175, 55, 0.8)',
                          '0 0 10px rgba(212, 175, 55, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {word}
                    </motion.span>
                  ) : (
                    <span>{word} </span>
                  )}
                </motion.span>
              ))}
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Reserviere deinen Stammplatz für das nächste Live-Event in{' '}
              <span className="text-classico-gold font-semibold">Pfungstadt</span>.
            </p>
          </motion.div>

          {/* Rechts: Buttons */}
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Haupt-Button: JETZT RESERVIEREN mit Shimmer-Effekt */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-10 py-5 lg:px-12 lg:py-6 min-h-[44px] min-w-[44px] bg-classico-gold text-[#050505] font-bold text-lg lg:text-xl rounded-xl overflow-hidden flex items-center justify-center gap-3 shadow-2xl shadow-classico-gold/30 focus-ring"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Jetzt Tisch via WhatsApp reservieren"
            >
              {/* Shimmer-Effekt */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{
                  x: ['100%', '200%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 0,
                  ease: 'linear',
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                <CalendarCheck size={24} aria-hidden="true" />
                JETZT RESERVIEREN
              </span>
            </motion.a>

            {/* Social Proof Badge */}
            <motion.div
              className="flex flex-col items-center lg:items-end gap-3 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Avatar-Gruppe */}
              <div className="flex items-center gap-3">
                {/* Überlappende Avatar-Icons */}
                <div className="flex -space-x-3">
                  {[
                    { bg: 'from-blue-500/20 to-blue-600/30', iconColor: 'blue' },
                    { bg: 'from-purple-500/20 to-purple-600/30', iconColor: 'purple' },
                    { bg: 'from-pink-500/20 to-pink-600/30', iconColor: 'pink' },
                    { bg: 'from-green-500/20 to-green-600/30', iconColor: 'green' },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className={`relative w-10 h-10 rounded-full border-2 border-classico-gold/40 bg-gradient-to-br ${avatar.bg} flex items-center justify-center overflow-hidden shadow-lg`}
                      style={{ zIndex: 5 - i }}
                    >
                      {/* Einfaches User-Icon - Gold gefiltert */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        style={{
                          filter: 'brightness(0) saturate(100%) invert(76%) sepia(50%) saturate(1234%) hue-rotate(360deg) brightness(0.9) contrast(0.9)',
                        }}
                      >
                        {/* Kopf */}
                        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
                        {/* Körper */}
                        <path
                          d="M 4 20 C 4 16 7.5 13 12 13 C 16.5 13 20 16 20 20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
                
                {/* Text */}
                <div className="text-left">
                  <p className="text-white font-semibold text-sm lg:text-base">
                    Schon über <span className="text-classico-gold">30 Reservierungen</span> diesen Monat
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Deine Stammbar in Pfungstadt
                  </p>
                </div>
              </div>

              {/* Sterne-Rating */}
              <div className="flex items-center gap-1 self-center lg:self-end">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className="text-classico-gold fill-classico-gold"
                  />
                ))}
                {/* 5. Stern - 80% gefüllt (für 4.8) */}
                <div className="relative">
                  <Star
                    size={16}
                    className="text-classico-gold"
                  />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                    <Star
                      size={16}
                      className="text-classico-gold fill-classico-gold"
                    />
                  </div>
                </div>
                <span className="ml-2 text-xs text-gray-400">4.8/5</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
