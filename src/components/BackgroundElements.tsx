'use client'

import { useEffect, useState } from 'react'

export default function BackgroundElements() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <>
      {/* Subtle Gradient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Soft gradient orbs - top left */}
        <div 
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(130, 165, 115, 0.1), rgba(255, 255, 255, 0))',
            transform: 'translate(-30%, -30%)',
          }}
        />

        {/* Soft gradient orbs - bottom right */}
        <div 
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(225, 165, 130, 0.1), rgba(255, 255, 255, 0))',
            transform: 'translate(30%, 30%)',
          }}
        />

        {/* Central soft glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[150px] opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(130, 165, 115, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
          }}
        />
      </div>

      {/* Subtle Grid Pattern (very faint) */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e5e5 1px, transparent 1px),
            linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  )
}