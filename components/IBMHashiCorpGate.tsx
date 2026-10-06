'use client'

import { useState, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const IBMHashiCorpContent = dynamic(() => import('./IBMHashiCorpContent'), { ssr: false })

const PASSWORD = '1001'
const STORAGE_KEY = 'unlock-ibm-hashicorp'

export default function IBMHashiCorpGate() {
  const [checked, setChecked] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Reads sessionStorage, must run client-only post-mount to avoid hydration mismatch.
    if (sessionStorage.getItem(STORAGE_KEY) === 'unlocked') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUnlocked(true)
    }
    setChecked(true)
  }, [])

  useEffect(() => {
    if (checked && !unlocked) {
      inputRef.current?.focus()
    }
  }, [checked, unlocked])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'unlocked')
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
      inputRef.current?.focus()
    }
  }

  if (!checked) return null

  if (unlocked) return <IBMHashiCorpContent />

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="rounded-[24px] px-10 py-8 flex flex-col items-center gap-4 w-80 bg-stone-50 border border-stone-200 shadow-sm">
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
            className="w-full text-gray-800 placeholder-gray-400 text-center text-sm px-4 py-2.5 rounded-full outline-none border border-gray-200 bg-white"
          />
          {error && (
            <p className="text-red-500 text-xs tracking-wide">Incorrect password</p>
          )}
          <button
            type="submit"
            className="w-full text-white text-sm font-medium py-2.5 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
