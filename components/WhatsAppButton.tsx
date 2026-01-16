'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Nach 2 Sekunden einblenden
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // WhatsApp-Link
  const whatsappUrl = '#'

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 20 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Hover Text (Desktop) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="hidden md:flex items-center bg-zinc-900/95 backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-lg border border-zinc-800"
                initial={{ opacity: 0, x: 10, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: 10, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="whitespace-nowrap text-sm font-medium">
                  Jetzt Tisch reservieren
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="WhatsApp Kontakt - Jetzt Tisch reservieren"
          >
            {/* Pulsierender Schatten */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#25D366] opacity-75"
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.75, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:shadow-2xl">
              {/* WhatsApp Icon */}
              <MessageCircle size={28} className="text-white md:w-7 md:h-7" strokeWidth={2} fill="white" />
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
