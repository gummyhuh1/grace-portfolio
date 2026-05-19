'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Dark background on work/case-study pages, light everywhere else
  const isDark = pathname.startsWith('/work/')

  const pillClass = isDark
    ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_2px_16px_rgba(0,0,0,0.15)]'
    : 'bg-white/20 backdrop-blur-md border border-neutral-300/40 shadow-[0_2px_16px_rgba(0,0,0,0.06)]'

  const linkClass = isDark
    ? 'text-white/90 hover:text-white'
    : 'text-black hover:opacity-60'

  const hamburgerClass = isDark ? 'bg-white' : 'bg-black'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 pt-5">
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-20 lg:px-32 flex flex-col">

      {/* Pill bar */}
      <div className={`w-full flex items-center justify-between rounded-full px-6 py-3 ${pillClass}`}>

        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-60">
          <img
            src={isDark ? '/gh-logo-white.png' : '/gh-logo-black.png'}
            alt="GH"
            className="h-5 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/work"
            className={`text-sm tracking-tight transition-opacity ${linkClass} ${pathname === '/work' ? 'font-semibold' : 'font-normal'}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-sm tracking-tight transition-opacity ${linkClass} ${pathname === '/about' ? 'font-semibold' : 'font-normal'}`}
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
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${hamburgerClass} ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-5 h-0.5 transition-opacity duration-200 ${hamburgerClass} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-transform duration-200 ${hamburgerClass} ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={`mt-2 w-full rounded-3xl px-6 py-5 flex flex-col gap-4 ${pillClass}`}>
          <Link
            href="/work"
            onClick={() => setMenuOpen(false)}
            className={`text-sm tracking-tight ${linkClass} ${pathname === '/work' ? 'font-semibold' : 'font-normal'}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className={`text-sm tracking-tight ${linkClass} ${pathname === '/about' ? 'font-semibold' : 'font-normal'}`}
          >
            About
          </Link>
        </div>
      )}
      </div>
    </header>
  )
}
