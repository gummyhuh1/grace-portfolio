'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function MosaicPasswordGate() {
  const [open, setOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [open])

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpen(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === '0001') {
      router.push('/work/mosaic')
    } else {
      setError(true)
      setPassword('')
      inputRef.current?.focus()
    }
  }

  const handleClose = () => {
    setOpen(false)
    setPassword('')
    setError(false)
  }

  return (
    <div className="group block mb-3">
      {/* Image */}
      <div
        ref={containerRef}
        className="w-full aspect-[4/3] sm:aspect-[12/7] bg-black mb-6 rounded-[40px] sm:rounded-[48px] relative cursor-pointer"
        onClick={handleImageClick}
      >
        <div className="absolute inset-0 overflow-hidden rounded-[40px] sm:rounded-[48px] transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Image
            src="/mosaic-header.png"
            alt="Mosaic Companion App"
            fill
            className="object-cover sm:object-contain sm:scale-[1.12] sm:translate-y-[20px]"
            sizes="100vw"
          />
        </div>

        {/* Password modal — anchored to the image */}
        {open && (
          <div
            className="absolute inset-0 flex items-center justify-center z-10 rounded-[40px] sm:rounded-[48px]"
            onClick={(e) => { e.stopPropagation(); handleClose() }}
          >
            <div
              className="rounded-[24px] px-10 py-8 flex flex-col items-center gap-4 w-72"
              style={{
                background: 'rgba(255, 255, 255, 0.55)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-700">
                Password Protected
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-full">
                <input
                  ref={inputRef}
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false) }}
                  placeholder="Enter password"
                  className="w-full text-gray-800 placeholder-gray-400 text-center text-sm px-4 py-2.5 rounded-full outline-none transition-colors"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                  }}
                />
                {error && (
                  <p className="text-red-500 text-xs tracking-wide">Incorrect password</p>
                )}
                <button
                  type="submit"
                  className="w-full text-white text-sm font-medium py-2.5 rounded-full transition-colors"
                  style={{ background: 'rgba(30, 30, 30, 0.75)' }}
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex items-start justify-between gap-4 sm:gap-8">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
            Mosaic Companion App
          </h3>
          <p className="mt-1.5 text-sm text-gray-500 max-w-xl leading-relaxed">
            End to end app development for the world&apos;s first E-ink phone case.
          </p>
        </div>
        <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap mt-1">Product Design</span>
      </div>

    </div>
  )
}
