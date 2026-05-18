'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-black hover:opacity-60 transition-opacity"
        >
          Grace Huh
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className={`text-sm tracking-tight transition-opacity hover:opacity-60 ${
              pathname === '/work' ? 'font-semibold' : 'font-normal'
            }`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-sm tracking-tight transition-opacity hover:opacity-60 ${
              pathname === '/about' ? 'font-semibold' : 'font-normal'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-black transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 px-8 py-6 flex flex-col gap-5">
          <Link
            href="/work"
            onClick={() => setMenuOpen(false)}
            className={`text-sm tracking-tight ${pathname === '/work' ? 'font-semibold' : 'font-normal'}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`text-sm tracking-tight ${pathname === '/about' ? 'font-semibold' : 'font-normal'}`}
          >
            About
          </Link>
        </div>
      )}
    </header>
  )
}
