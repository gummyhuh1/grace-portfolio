'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface BigProjectCardProps {
  title: string
  description: string
  category: string
  href: string
  image?: string
  imageClass?: string
  heroBg?: string
  logo?: string
  password?: string
  storageKey?: string
  className?: string
}

export default function BigProjectCard({
  title,
  description,
  category,
  href,
  image,
  imageClass,
  heroBg,
  logo,
  password,
  storageKey,
  className = '',
}: BigProjectCardProps) {
  const router = useRouter()
  const [unlocked, setUnlocked] = useState(!password)
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reads sessionStorage, must run client-only post-mount to avoid hydration mismatch.
    if (password && storageKey && sessionStorage.getItem(storageKey) === 'unlocked') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnlocked(true)
    }
  }, [password, storageKey])

  const handleClose = () => {
    setOpen(false)
    setInput('')
    setError(false)
  }

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
    e.preventDefault()
    e.stopPropagation()
    setOpen(true)
    setTimeout(() => inputRef.current?.focus(), 50)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === password) {
      if (storageKey) sessionStorage.setItem(storageKey, 'unlocked')
      setUnlocked(true)
      setOpen(false)
      router.push(href)
    } else {
      setError(true)
      setInput('')
      inputRef.current?.focus()
    }
  }

  const imageBlock = (
    <div
      ref={containerRef}
      className={`w-full aspect-[4/3] sm:aspect-[12/7] ${heroBg ?? 'bg-black'} mb-6 overflow-hidden rounded-[40px] sm:rounded-[48px] relative ${!unlocked ? 'cursor-pointer' : ''}`}
      onClick={!unlocked ? handleImageClick : undefined}
    >
      {image ? (
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Image src={image} alt={title} fill className={imageClass ?? 'object-cover'} sizes="100vw" />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-stone-500 text-sm tracking-widest uppercase">
          Image
        </div>
      )}

      {logo && (
        <Image
          src={logo}
          alt=""
          width={96}
          height={36}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 h-6 sm:h-7 w-auto z-10"
        />
      )}

      {/* Dim + password prompt, anchored to the image */}
      {!unlocked && open && (
        <div
          className="absolute inset-0 flex items-center justify-center z-20 rounded-[40px] sm:rounded-[48px] bg-black/50"
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
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false) }}
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
  )

  const textBlock = (
    <div className="flex items-start justify-between gap-4 sm:gap-8">
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold tracking-tight group-hover:opacity-60 transition-opacity">
          {title}
        </h3>
        <p className="mt-1.5 text-sm text-gray-500 max-w-xl leading-relaxed">
          {description}
        </p>
      </div>
      <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap mt-1">{category}</span>
    </div>
  )

  if (unlocked) {
    return (
      <Link href={href} className={`group block mb-3 ${className}`}>
        {imageBlock}
        {textBlock}
      </Link>
    )
  }

  return (
    <div className={`group block mb-3 ${className}`}>
      {imageBlock}
      {textBlock}
    </div>
  )
}
