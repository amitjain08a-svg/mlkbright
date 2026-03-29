'use client'

import { useState, useEffect } from 'react'

export default function ScrollToTop(): React.ReactElement | null {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)

    const toggleVisibility = (): void => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility() // Call immediately to set initial state

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Prevent hydration mismatch
  if (!mounted) return null

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="group fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-5 h-5 text-neutral-600 group-hover:text-primary-600 transition-colors" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>

      {/* Optional tooltip that appears on hover */}
      <span className="absolute -top-8 right-0 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Back to top
      </span>
    </button>
  )
}