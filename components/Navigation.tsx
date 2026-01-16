'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 focus-ring rounded-md p-2 -m-2"
            aria-label="Arena Sportsbar - Zur Startseite"
          >
            <div className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-classico-gold"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-classico-gold leading-tight">
                ARENA
              </span>
              <span className="text-sm lg:text-base text-gray-300 leading-tight">
                SPORTSBAR
              </span>
            </div>
          </Link>

          {/* Reservieren Button - nur auf Desktop sichtbar */}
          <a
            href="#"
            className="hidden lg:inline-flex px-8 py-3 lg:px-10 lg:py-4 min-h-[44px] min-w-[44px] bg-classico-gold text-[#050505] font-semibold text-base lg:text-lg rounded-md hover:bg-[#E6C547] transition-colors duration-200 focus-ring items-center justify-center"
            aria-label="Tisch reservieren"
          >
            Tisch reservieren
          </a>
        </div>
      </div>
    </nav>
  )
}
