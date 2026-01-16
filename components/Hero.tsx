'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
    breathe: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full max-w-full">
      {/* Mobile: Platzhalter Hintergrund */}
      <div className="lg:hidden absolute inset-0 w-full h-full z-0 max-w-full">
        {/* Platzhalter-Bild von Unsplash */}
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1920&auto=format&fit=crop)',
          }}
        />
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Desktop: Split-Screen Layout (60/40) */}
      <div className="w-full max-w-full lg:flex lg:min-h-screen relative z-10">
        {/* Left Side - Content (60%) */}
        <div className="lg:w-[60%] flex items-center justify-center px-4 sm:px-6 lg:px-12 xl:px-16 py-20 lg:py-0 relative z-20">
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1
              className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold mb-6 text-shadow"
            >
              <motion.span variants={itemVariants} className="block">
                Deine Sportsbar im Herzen von{' '}
                <span className="text-classico-gold">Deine Stadt</span>.
              </motion.span>
            </h1>
            <motion.p
              className="text-xl sm:text-2xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Erlebe internationale Sportevents live in authentischer
              Atmosphäre.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-16 sm:mt-20 lg:mt-0">
              <motion.a
                href="#"
                className="inline-flex items-center space-x-3 px-8 py-4 min-h-[44px] min-w-[44px] bg-classico-gold text-[#050505] font-bold text-lg rounded-lg shine-effect relative overflow-hidden focus-ring"
                variants={buttonVariants}
                animate="breathe"
                whileHover="hover"
                whileTap="tap"
                aria-label="Tisch reservieren"
              >
                <span>Tisch reservieren</span>
                <MessageCircle size={20} fill="currentColor" aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Video (40%) */}
        <div className="lg:w-[40%] relative flex items-center justify-center px-4 lg:px-8 py-8 lg:py-0">
          {/* Desktop: Custom Smartphone Frame with Video - 3D Tilt */}
          <motion.div
            className="hidden lg:block w-full max-w-[280px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              perspective: '1000px',
              perspectiveOrigin: 'center center',
            }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -8, 0],
                rotateY: [-13, -17, -13],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                rotateY: {
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              whileHover={{
                rotateY: -15,
                rotateX: 5,
                rotateZ: -2,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-15deg) rotateX(5deg) rotateZ(-2deg)',
              }}
            >
              {/* Smartphone Frame */}
              <div
                className="relative bg-zinc-900 rounded-[3rem] p-3"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  boxShadow:
                    '0 40px 80px -20px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(212, 175, 55, 0.2), 0 0 60px rgba(212, 175, 55, 0.15), 30px -20px 60px rgba(0, 0, 0, 0.5)',
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8))',
                }}
              >
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 w-32 h-8 bg-black rounded-full flex items-center justify-center">
                  <div className="w-16 h-1 bg-zinc-700 rounded-full"></div>
                </div>

                {/* Screen Area */}
                <div className="aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black relative">
                  {/* Platzhalter-Bild */}
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url(https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1920&auto=format&fit=crop)',
                    }}
                  />
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-32 h-1 bg-white/30 rounded-full"></div>

                {/* Glänzende Kante (Bezel) */}
                <div
                  className="absolute inset-0 rounded-[3rem] pointer-events-none"
                  style={{
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    boxShadow: 'inset 0 0 20px rgba(212, 175, 55, 0.1)',
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
