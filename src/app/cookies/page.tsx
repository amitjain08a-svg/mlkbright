'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CookiesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const cookieConsent = localStorage.getItem('brightmlk_cookie_consent')
    if (cookieConsent === 'accepted') setAccepted(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('brightmlk_cookie_consent', 'accepted')
    setAccepted(true)
  }

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: '🔐',
      desc: 'Required for platform security and core functionality',
      examples: 'Session tokens, authentication, security features'
    },
    {
      title: 'Performance Cookies',
      icon: '📊',
      desc: 'Monitor platform performance and user experience',
      examples: 'Page load times, error tracking, usage analytics'
    },
    {
      title: 'Functional Cookies',
      icon: '⚙️',
      desc: 'Remember your preferences and settings',
      examples: 'Unit preferences, language, dashboard layout'
    },
    {
      title: 'B2B Session Cookies',
      icon: '📦',
      desc: 'Track procurement sessions and order preferences',
      examples: 'Volume discounts, product specifications, RFQs'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Data Privacy • Version 2.0
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Cookie Policy
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            How BrightMlk Industries uses cookies to enhance your B2B procurement experience
          </p>

          <div className="mt-6 text-sm text-neutral-500">
            Last Updated: March 1, 2024
          </div>
        </div>
      </section>

      {/* Cookie Consent Banner */}
      {!accepted && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-50 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl p-6 border border-neutral-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍪</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-1">Cookie Consent</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  We use cookies to improve your experience and facilitate B2B operations.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={handleAccept}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Accept All
                  </button>
                  <Link
                    href="#policy"
                    className="px-4 py-2 border border-neutral-300 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="policy">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-elegant p-8 md:p-12">
            
            {/* Version Info */}
            <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-sm text-neutral-500">Version 2.0.1</span>
              <span className="text-xs bg-neutral-100 px-3 py-1 rounded-full text-neutral-600">
                Effective: March 2024
              </span>
            </div>

            {/* Introduction */}
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                <span className="font-semibold text-primary-600">BrightMlk Industries Private Limited</span> uses cookies and similar 
                technologies to facilitate industrial B2B transactions, ensure platform security, 
                and enhance your procurement experience.
              </p>
            </div>

            {/* Cookie Types Grid */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-xl">🍪</span>
                </span>
                Types of Cookies We Use
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-3 text-primary-600">{cookie.icon}</div>
                    <h3 className="font-semibold text-neutral-900 mb-2">{cookie.title}</h3>
                    <p className="text-sm text-neutral-600 mb-3">{cookie.desc}</p>
                    <p className="text-xs text-neutral-500 bg-white p-3 rounded border border-neutral-200">
                      {cookie.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* B2B Specific Section */}
            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-700 text-xl">📦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">B2B Transaction Cookies</h3>
                  <p className="text-neutral-700 text-sm mb-3">
                    Industrial procurement cookies used for:
                  </p>
                  <ul className="space-y-2 text-sm text-neutral-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                      Bulk order volume tracking (1000kg+ MOQ)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                      Export documentation preferences
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                      Product specifications and custom formulations
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Control Cookies */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                How to Control Cookies
              </h2>
              
              <p className="text-neutral-700 mb-6">
                You can manage cookie preferences through your browser settings:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Google Chrome', icon: '🌐', instruction: 'Settings → Privacy and Security → Cookies' },
                  { name: 'Mozilla Firefox', icon: '🦊', instruction: 'Options → Privacy & Security → Cookies' },
                  { name: 'Safari', icon: '🧭', instruction: 'Preferences → Privacy → Cookies' },
                  { name: 'Microsoft Edge', icon: '📘', instruction: 'Settings → Cookies and site permissions' }
                ].map((browser, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl text-neutral-600">{browser.icon}</span>
                      <span className="text-sm font-medium text-neutral-900">{browser.name}</span>
                    </div>
                    <span className="text-xs text-neutral-500">{browser.instruction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-primary-600">📞</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 mb-2">Data Protection Officer</h3>
                  <p className="text-neutral-600 text-sm mb-4">For privacy-related inquiries:</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <span className="text-primary-600">✉️</span>
                      <a href="mailto:shukla.dry@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        shukla.dry@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary-600">📞</span>
                      <a href="tel:+918750751765" className="text-neutral-600 hover:text-primary-600 transition-colors">
                        +91-8750751765
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-primary-600">📍</span>
                      <span className="text-neutral-600">G-81 & G-82, Laxmi Nagar, Delhi 110092</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8 text-center">
            Related Policies
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: '/privacy-policy', label: 'Privacy Policy', icon: '🔒' },
              { href: '/terms-and-conditions', label: 'Terms of Trade', icon: '📋' },
              { href: '/data', label: 'Data Processing', icon: '💾' }
            ].map((policy, index) => (
              <Link
                key={index}
                href={policy.href}
                className="group bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3 text-primary-600">
                  {policy.icon}
                </div>
                <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
                  {policy.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}