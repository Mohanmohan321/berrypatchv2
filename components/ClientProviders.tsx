'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import Loader from './Loader'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const isFirst = useRef(true)

  useEffect(() => {
    setLoading(true)
    // Longer splash on first load, shorter on navigation
    const duration = isFirst.current ? 2200 : 900
    isFirst.current = false
    const timer = setTimeout(() => setLoading(false), duration)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key={pathname} />}
      </AnimatePresence>
      {children}
    </>
  )
}
