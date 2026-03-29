'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [progress, setProgress] = useState<number>(0)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = (): void => {
      // Handle navbar background change
      setIsScrolled(window.scrollY > 20)
      
      // Handle progress bar
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)
      setProgress(scrollPercentage * 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call immediately to set initial values

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) return null

  const navLinks = [
    { 
      href: '/', 
      label: 'Home', 
    },
    { 
      label: 'Company', 
      dropdown: [
        { href: '/about', label: 'About Us', description: 'Learn about our journey' },
        { href: '/vision', label: 'Vision', description: 'Our future goals' },
        { href: '/mission', label: 'Mission', description: 'What drives us' },
        { href: '/careers', label: 'Careers', description: 'Join our team' },
      ]
    },
    { 
      href: '/services', 
      label: 'Services', 
    },
    { 
      label: 'Resources', 
      dropdown: [
        { href: '/faq', label: 'FAQ', description: 'Frequently asked questions' },
        { href: '/privacy-policy', label: 'Privacy Policy', description: 'How we handle data' },
        { href: '/terms-and-conditions', label: 'Terms of Trade', description: 'Our terms and conditions' },
        { href: '/cookies', label: 'Cookie Policy', description: 'Cookie information' },
        { href: '/data-use', label: 'Data Use', description: 'How we use your data' },
      ]
    },
    { 
      href: '/contact', 
      label: 'Contact', 
    },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* New Elegant Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* Logo Mark */}
            <div className="relative">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-xl font-serif font-bold text-white">B</span>
              </div>
              {/* Subtle decorative element */}
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Company Name */}
            <div className="flex flex-col">
              <span className={`text-lg font-serif font-bold tracking-wide transition-colors ${
                isScrolled ? 'text-neutral-900' : 'text-white'
              }`}>
                BrightMlk
              </span>
              <span className={`text-[10px] font-medium tracking-wider transition-colors ${
                isScrolled ? 'text-neutral-500' : 'text-white/70'
              }`}>
                INDUSTRIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        isScrolled 
                          ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50' 
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Elegant Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-72 transition-all duration-200 ${
                      activeDropdown === index 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }`}>
                      <div className="bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden">
                        <div className="py-2">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              className="block px-4 py-3 hover:bg-primary-50 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="flex items-start">
                                <div className="flex-1">
                                  <span className="text-sm font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                                    {item.label}
                                  </span>
                                  {item.description && (
                                    <p className="text-xs text-neutral-500 mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                                <span className="text-primary-600 opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-0 transition-all duration-200">
                                  →
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {/* Optional footer */}
                        <div className="bg-neutral-50 px-4 py-2 border-t border-neutral-200">
                          <p className="text-xs text-neutral-500">
                            {link.dropdown.length} items
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors inline-block ${
                      isScrolled 
                        ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-4 pl-4 border-l border-neutral-300/30">
              <Link
                href="/contact?type=buyer"
                className="btn-primary text-sm px-4 py-2"
              >
                Bulk Order
              </Link>
              <Link
                href="/contact?type=supplier"
                className="btn-secondary text-sm px-4 py-2"
              >
                Partner Portal
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative w-10 h-10 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-neutral-100' 
                : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1.5">
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900' : 'bg-white'
              } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900' : 'bg-white'
              } ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-neutral-900' : 'bg-white'
              } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg border border-neutral-200 py-2">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.dropdown ? (
                  <div className="border-b border-neutral-100 last:border-0">
                    <div className="px-4 py-3 font-medium text-neutral-900 bg-neutral-50">
                      {link.label}
                    </div>
                    <div className="pl-6 py-1">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="block py-2.5 text-sm text-neutral-600 hover:text-primary-600 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-sm text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors border-b border-neutral-100 last:border-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Action Buttons */}
            <div className="px-4 py-4 space-y-3 border-t border-neutral-200 mt-2">
              <Link
                href="/contact?type=buyer"
                className="btn-primary w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                Bulk Order
              </Link>
              <Link
                href="/contact?type=supplier"
                className="btn-secondary w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                Partner Portal
              </Link>
              
              {/* Quick contact info */}
              <div className="flex items-center justify-between px-3 py-2 bg-neutral-50 rounded-md">
                <span className="text-xs text-neutral-500">Support</span>
                <a href="tel:+918750751765" className="text-xs text-primary-600 hover:text-primary-700 font-medium">
                  +91-8750751765
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar - subtle */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-200">
        <div 
          className="h-full bg-primary-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </nav>
  )
}