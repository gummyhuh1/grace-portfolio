'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const easeOut = { duration: 0.8, ease: 'easeOut' as const }

export default function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [overlayVisible, setOverlayVisible] = useState(true)

  const handleComplete = useCallback(onComplete, [onComplete])

  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 1300)
    const t2 = setTimeout(() => setStep(3), 2600)
    const t3 = setTimeout(() => setOverlayVisible(false), 4300)
    const t4 = setTimeout(() => handleComplete(), 5100)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [handleComplete])

  return (
    <AnimatePresence>
      {overlayVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white px-8"
          exit={{ opacity: 0 }}
          transition={easeOut}
        >
          <AnimatePresence mode="wait">
            {step === 1 || step === 2 ? (
              <motion.p
                key="hello"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8, transition: { duration: 0.35, ease: 'easeOut' } }}
                transition={easeOut}
                className="text-5xl sm:text-7xl lg:text-8xl font-medium text-center leading-tight tracking-tight"
              >
                <motion.span
                  animate={{ color: step === 2 ? '#d1d5db' : '#000000' }}
                  transition={easeOut}
                >
                  {'Hello, I am Grace '}
                </motion.span>
                <span className="relative inline-block" style={{ color: '#000000' }}>
                  Huh
                  <AnimatePresence>
                    {step === 2 && (
                      <motion.span
                        key="qmark"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={easeOut}
                        className="absolute left-full top-0"
                        style={{ color: '#000000' }}
                      >
                        ?
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </motion.p>
            ) : (
              <motion.p
                key="step3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-5xl sm:text-7xl lg:text-8xl font-medium text-black text-center leading-tight tracking-tight"
              >
                Yes, exactly, &ldquo;Huh&rdquo; is my last name.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
