'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Beer, GlassWater, Star } from 'lucide-react'
import { useState } from 'react'

interface Drink {
  name: string
  price: string
  description?: string
  isTip?: boolean
}

interface DrinkCategory {
  category: string
  icon: string
  items: Drink[]
}

export const DRINKS_DATA: DrinkCategory[] = [
  {
    category: 'Barista Selection',
    icon: 'Coffee',
    items: [
      { name: 'Espresso Classico', price: '2.50', description: 'Kräftig, italienische Röstung', isTip: true },
      { name: 'Cappuccino', price: '3.80', description: 'Feiner Milchschaum, 100% Arabica' },
      { name: 'Latte Macchiato', price: '4.20', description: 'Der Klassiker in drei Schichten' },
      { name: 'Hausgemachter Eiskaffee', price: '5.50', description: 'Mit Vanilleeis und Sahne' },
    ],
  },
  {
    category: 'Bierspezialitäten',
    icon: 'Beer',
    items: [
      { name: 'Pfungstädter Edel-Pils', price: '3.90', description: 'Frisch vom Fass, 0.3l', isTip: true },
      { name: 'Pfungstädter Weizen', price: '4.80', description: 'Naturtrüb vom Fass, 0.5l' },
      { name: 'Peroni Nastro Azzurro', price: '4.20', description: 'Italienisches Premium Lager, 0.33l' },
      { name: 'Alkoholfreies Weizen', price: '4.80', description: 'Isotonisch & erfrischend' },
    ],
  },
  {
    category: 'Longdrinks & Vibes',
    icon: 'GlassWater',
    items: [
      { name: 'Aperol Spritz', price: '7.50', description: 'Prosecco, Aperol, Soda & Orange', isTip: true },
      { name: 'Gin Tonic (Hausmarke)', price: '8.50', description: 'Premium Gin mit Botanical Tonic' },
      { name: 'Campari Amalfi', price: '7.90', description: 'Campari, Grapefruit, Soda' },
      { name: 'Lillet Wild Berry', price: '7.50', description: 'Lillet Blanc, Schweppes Wild Berry' },
    ],
  },
]

// Tab-Konfiguration
const TAB_CONFIG = [
  { id: 0, label: 'Barista', category: 'Barista Selection' },
  { id: 1, label: 'Bier', category: 'Bierspezialitäten' },
  { id: 2, label: 'Longdrinks & Vibes', category: 'Longdrinks & Vibes' },
]

// Icon mapping
const iconMap: Record<string, JSX.Element> = {
  Coffee: <Coffee size={20} className="text-classico-gold" />,
  Beer: <Beer size={20} className="text-classico-gold" />,
  GlassWater: <GlassWater size={20} className="text-classico-gold" />,
}

export default function DrinksMenu() {
  const [activeTab, setActiveTab] = useState(0)

  const activeCategory = DRINKS_DATA.find(
    (cat) => cat.category === TAB_CONFIG[activeTab].category
  )

  return (
    <section id="karte" className="pt-0 lg:pt-12 pb-32 lg:pb-40 px-4 sm:px-6 lg:px-8">
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
            Unsere <span className="text-classico-gold">Getränkekarte</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Entdecke unsere sorgfältig ausgewählten Getränke – von italienischem Kaffee bis zu
            internationalen Spirituosen
          </p>
        </motion.div>

        {/* Tab Navigation - Pill Design */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {TAB_CONFIG.map((tab) => {
            const category = DRINKS_DATA.find((cat) => cat.category === tab.category)
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                aria-label={`${tab.label} Kategorie anzeigen`}
                aria-pressed={isActive}
                className={`
                  relative px-6 py-3 min-h-[44px] min-w-[44px] rounded-full font-semibold text-sm lg:text-base transition-all duration-300 focus-ring
                  ${
                    isActive
                      ? 'bg-black text-classico-gold border-2 border-classico-gold shadow-lg shadow-classico-gold/20'
                      : 'bg-zinc-900/50 text-gray-400 border-2 border-zinc-800 hover:border-zinc-700 hover:text-gray-300'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  {category && iconMap[category.icon]}
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-classico-gold/10 -z-10"
                    layoutId="activeTab"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Tab Content - Two Column Grid */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 lg:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-zinc-800">
                {iconMap[activeCategory.icon]}
                <h3 className="text-2xl font-bold text-white">{activeCategory.category}</h3>
              </div>

              {/* Drinks Grid - Two Columns on Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {activeCategory.items.map((drink, index) => (
                  <DrinkItem key={index} drink={drink} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function DrinkItem({ drink }: { drink: Drink }) {
  const [isHovered, setIsHovered] = useState(false)

  // Format price: convert "2.50" to "2,50 €"
  const formattedPrice = drink.price.replace('.', ',') + ' €'

  return (
    <motion.div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Drink Card */}
      <div className="bg-zinc-900/30 border border-zinc-800 rounded-lg p-4 hover:border-classico-gold/50 transition-all duration-300 h-full">
        {/* Name and Tip Badge */}
        <div className="flex items-start gap-2 mb-2">
          <h4 className="text-white font-semibold text-base lg:text-lg flex-1">
            {drink.name}
          </h4>
          {drink.isTip && (
            <div
              className="flex items-center gap-1 px-2 py-1 bg-classico-gold/10 rounded-md border border-classico-gold/30"
              title="Classico Tipp"
            >
              <Star size={14} className="text-classico-gold fill-classico-gold" />
              <span className="text-xs text-classico-gold font-medium hidden sm:inline">Tipp</span>
            </div>
          )}
        </div>

        {/* Description */}
        {drink.description && (
          <p className="text-gray-400 text-sm mb-3">{drink.description}</p>
        )}

        {/* Price - Golden Highlight Box */}
        <div className="flex items-center justify-end mt-4 pt-3 border-t border-zinc-800">
          <motion.div
            className={`
              px-4 py-2 rounded-lg font-bold text-base lg:text-lg transition-all duration-300
              ${
                isHovered
                  ? 'bg-classico-gold text-black shadow-lg shadow-classico-gold/50'
                  : 'bg-classico-gold/10 text-classico-gold border border-classico-gold/30'
              }
            `}
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {formattedPrice}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
