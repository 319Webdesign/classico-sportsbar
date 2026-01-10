'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Instagram } from 'lucide-react'
import Image from 'next/image'

// Instagram URL
const INSTAGRAM_URL = 'https://www.instagram.com/classico_sportsbar'

// WhatsApp URL
const WHATSAPP_URL = 'https://wa.me/4961579898000?text=Hallo%20Classico-Team%2C%20ich%20w%C3%BCrde%20gerne%20einen%20Tisch%20f%C3%BCr%20das%20n%C3%A4chste%20Event%20reservieren%21'

// Custom Sport Icons Components
const FootballIcon = () => (
  <Image
    src="/soccer_ball.png"
    alt=""
    width={32}
    height={32}
    className="w-8 h-8 object-contain"
    sizes="32px"
    loading="lazy"
    style={{
      filter: 'brightness(0) saturate(100%) invert(76%) sepia(50%) saturate(1234%) hue-rotate(360deg) brightness(0.95) contrast(0.9)',
    }}
    aria-hidden="true"
  />
)

const DartboardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" />
    <line x1="16" y1="1" x2="16" y2="31" stroke="currentColor" strokeWidth="1" />
    <line x1="1" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="1" />
    <line x1="4.34" y1="4.34" x2="27.66" y2="27.66" stroke="currentColor" strokeWidth="1" />
    <line x1="27.66" y1="4.34" x2="4.34" y2="27.66" stroke="currentColor" strokeWidth="1" />
  </svg>
)

const F1HelmetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 14C8 10.69 10.69 8 14 8H18C21.31 8 24 10.69 24 14V20C24 23.31 21.31 26 18 26H14C10.69 26 8 23.31 8 20V14Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M10 14C10 11.79 11.79 10 14 10H18C20.21 10 22 11.79 22 14"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <line x1="16" y1="8" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    <circle cx="20" cy="18" r="1.5" fill="currentColor" />
    <path d="M14 22L18 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const TennisBallIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.3" />
    <path
      d="M2 16C2 16 6 12 16 12C26 12 30 16 30 16"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M2 16C2 16 6 20 16 20C26 20 30 16 30 16"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M8 8C8 8 10 10 16 10C22 10 24 8 24 8"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M8 24C8 24 10 22 16 22C22 22 24 24 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)

export default function LiveSportSection() {
  const sportIcons = [
    { icon: FootballIcon, label: 'Fußball' },
    { icon: DartboardIcon, label: 'Darts' },
    { icon: F1HelmetIcon, label: 'Formel 1' },
    { icon: TennisBallIcon, label: 'Tennis' },
  ]

  return (
    <section
      id="live-sport"
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black/90"
    >
      {/* Atmosphärischer Hintergrund - Dunkles Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black opacity-90" />
      
      {/* Subtile Hintergrund-Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Container */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Links: Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Status Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-classico-gold/10 border border-classico-gold/30 rounded-full"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-classico-gold text-sm font-semibold uppercase tracking-wider">
                Offizieller Gastronomie-Partner 2026
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left">
              Dein Platz in der{' '}
              <span className="text-classico-gold">ersten Reihe.</span>
            </h2>

            {/* Main Text */}
            <div className="space-y-4 text-lg lg:text-xl text-gray-300 leading-relaxed">
              <p>
                Wir bringen das Stadion-Feeling direkt nach Pfungstadt. Als offizieller Partner
                von Sky und DAZN haben wir Zugriff auf alle Live-Events. Egal ob Bundesliga,
                Champions League oder internationale Top-Ligen – bei uns verpasst du keine Sekunde.
              </p>
              <p className="text-white lg:text-gray-400">
                Dank mehrerer großer Screens im Innenbereich können wir bei Bedarf verschiedene
                Sportevents gleichzeitig übertragen. Sprich unser Team einfach auf dein Wunschspiel
                an!
              </p>
            </div>

            {/* Sport Icons */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {sportIcons.map((sport, index) => {
                const IconComponent = sport.icon
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-classico-gold/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-classico-gold">
                      <IconComponent />
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{sport.label}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Button */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-3 px-8 py-4 min-h-[44px] min-w-[44px] bg-classico-gold text-[#050505] font-bold text-lg rounded-lg hover:bg-[#E6C547] transition-colors duration-200 shadow-lg shadow-classico-gold/20 w-full lg:w-auto focus-ring"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Tisch für das nächste Event via WhatsApp anfragen"
            >
              <CalendarCheck size={20} aria-hidden="true" />
              Tisch für das nächste Event anfragen
            </motion.a>

            {/* Instagram Info */}
            <motion.div
              className="flex items-start gap-3 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Instagram size={20} className="text-classico-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400">
                Bei großen Turnieren (EM/WM) bieten wir oft Specials an –{' '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-classico-gold hover:underline"
                >
                  folge uns auf Instagram
                </a>{' '}
                für kurzfristige Updates.
              </p>
            </motion.div>
          </motion.div>

          {/* Rechts: Partner Logos */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Partner Logos Container */}
            <div className="relative">
              {/* Glow Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-orange-600/10 blur-3xl rounded-full" />

              {/* Logos */}
              <div className="relative grid grid-cols-1 gap-12 p-8 lg:p-12">
                {/* Sky Logo */}
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-lg" />
                    <div className="relative bg-transparent p-6 lg:p-8 rounded-lg flex items-center justify-center">
                      {/* Sky Logo - PNG Image */}
                      <Image
                        src="/sky.png"
                        alt="Sky Sport Partner Logo"
                        width={160}
                        height={60}
                        className="w-auto h-12 lg:h-16 object-contain"
                        sizes="(max-width: 1024px) 128px, 160px"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                {/* DAZN Logo */}
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-lg" />
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black p-6 lg:p-8 rounded-lg shadow-2xl border border-zinc-800">
                      {/* DAZN Logo - Text only */}
                      <div className="flex items-center">
                        <span className="text-white text-3xl lg:text-4xl font-black tracking-wider" style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.1em' }}>
                          DAZN
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Partner Info Text */}
            <motion.p
              className="text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Offizielle Partnerschaften für Premium Live-Sport
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
