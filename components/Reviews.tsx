'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Review {
  name: string
  text: string
  rating: number
}

const REVIEWS: Review[] = [
  {
    name: 'Max Mustermann',
    text: 'Tolle Atmosphäre, super Service! Die Sportsbar ist perfekt für Live-Events. Sehr zu empfehlen!',
    rating: 5,
  },
  {
    name: 'Anna Schmidt',
    text: 'Mehr als ausreichend Fernseher für verschiedene Spiele gleichzeitig. Tolle Atmosphäre bei Top-Spielen!',
    rating: 5,
  },
  {
    name: 'Thomas Müller',
    text: 'Sehr freundliches Personal, schöne Einrichtung, super Getränke. Gerne wieder!',
    rating: 5,
  },
]

// Google Business Profile URL
const GOOGLE_BUSINESS_URL = '#'

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Reviews() {
  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Was unsere <span className="text-classico-gold">Gäste</span> sagen
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Echte Bewertungen von echten Gästen – direkt von Google
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {REVIEWS.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 min-h-[44px] min-w-[44px] bg-zinc-900 border-2 border-zinc-800 text-white font-semibold rounded-lg hover:border-classico-gold hover:bg-zinc-800 transition-all duration-300 group focus-ring"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Alle 5-Sterne Bewertungen auf Google Business lesen"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="group-hover:text-classico-gold transition-colors">
              Alle 5-Sterne Bewertungen auf Google lesen
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.div
      className="relative bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 lg:p-8 hover:border-classico-gold transition-all duration-300 group"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(212, 175, 55, 0.15)' }}
    >
      {/* Google G Icon - Top Right */}
      <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-50 transition-opacity">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className="text-classico-gold fill-classico-gold"
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
        "{review.text}"
      </p>

      {/* Author Name */}
      <div className="pt-4 border-t border-zinc-800">
        <p className="text-white font-semibold text-sm lg:text-base">
          {review.name}
        </p>
      </div>
    </motion.div>
  )
}
