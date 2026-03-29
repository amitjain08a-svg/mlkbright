'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Elegant 404 */}
        <div className="relative mb-8">
          <h1 className="text-8xl md:text-9xl font-display font-bold text-primary-600">
            404
          </h1>
          
          {/* Subtle decorative element */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-primary-200 rounded-full"></div>
        </div>

        {/* Error message */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
            Page Not Found
          </span>
          
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-neutral-900 mb-4">
            This page doesn't seem to exist
          </h2>
          
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for might have been moved, deleted, 
            or never existed. Let's get you back on track.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link 
            href="/" 
            className="btn-primary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link 
            href="/contact" 
            className="btn-secondary inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Support
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-neutral-50 rounded-xl p-8 max-w-2xl mx-auto border border-neutral-200">
          <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
            You might be looking for
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { href: '/about', label: 'About Us', icon: '🏢' },
              { href: '/services', label: 'Services', icon: '⚙️' },
              { href: '/faq', label: 'FAQ', icon: '❓' },
              { href: '/contact', label: 'Contact', icon: '📞' },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex flex-col items-center p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-200 hover:shadow-md transition-all duration-300"
              >
                <span className="text-2xl mb-2 text-primary-600 group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <span className="text-xs font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 text-sm text-neutral-500">
          <p className="flex items-center justify-center gap-2">
            <span>Try our</span>
            <Link href="/search" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
              search
            </Link>
            <span>or</span>
            <Link href="/sitemap" className="text-primary-600 hover:text-primary-700 font-medium hover:underline">
              sitemap
            </Link>
          </p>
        </div>

        {/* Current Time */}
        <div className="mt-6 text-xs text-neutral-400">
          <span>BrightMlk Industries • </span>
          <span>{new Date().toLocaleString('en-IN', { 
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Kolkata' 
          })} IST</span>
        </div>
      </div>
    </div>
  )
}