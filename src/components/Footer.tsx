'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section with logo and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">B</span>
              </div>
              <div>
                <span className="text-lg font-semibold text-neutral-900">
                  BrightMlk
                </span>
                <span className="block text-xs text-neutral-500">
                  Industries Pvt. Ltd.
                </span>
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              India's premier B2B manufacturer of industrial dairy and fruit powders. 
              ISO 22000:2018 certified, exporting to 25+ countries worldwide.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                ISO 22000
              </span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                FSSAI
              </span>
              <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                HPIFG
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/vision', label: 'Vision' },
                { href: '/mission', label: 'Mission' },
                { href: '/careers', label: 'Careers' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/faq', label: 'FAQ' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/terms-and-conditions', label: 'Terms of Trade' },
                { href: '/cookies', label: 'Cookie Policy' },
                { href: '/data-use', label: 'Data Use' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-neutral-600 hover:text-primary-600 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-600 text-sm">
                  G-81 & G-82, Laxmi Nagar<br />
                  Delhi - 110092
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:shukla.dry@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  shukla.dry@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918750751765" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
                  +91-8750751765
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle section with quick action buttons */}
        <div className="border-t border-neutral-200 pt-8 mb-8">
          <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center">
            <div className="flex gap-3">
              <Link
                href="/contact?type=buyer"
                className="btn-primary text-sm px-6 py-2.5"
              >
                Bulk Procurement
              </Link>
              <Link
                href="/contact?type=supplier"
                className="btn-secondary text-sm px-6 py-2.5"
              >
                Supplier Portal
              </Link>
            </div>
            
            {/* B2B Quick Contact */}
            <div className="flex items-center space-x-4">
              <span className="text-neutral-500 text-sm">B2B Hotline:</span>
              <a href="tel:+918750751765" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                +91-8750751765
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-neutral-200 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-neutral-500 text-sm">
            © {currentYear} BrightMlk Industries Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-neutral-500 hover:text-primary-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="/terms" className="text-neutral-500 hover:text-primary-600 text-sm transition-colors">
              Terms of Trade
            </Link>
            <span className="text-neutral-300">|</span>
            <Link href="/sitemap" className="text-neutral-500 hover:text-primary-600 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Business Credentials */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center items-center text-xs text-neutral-400">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            IECJI: 7787YY2039VLD
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
            SITSA: 0OOOACB1234F1Z5
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1 text-neutral-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
            MLKBIL: DLMB-009-88XXX-430801
          </span>
        </div>

        {/* Made in India badge */}
        <div className="mt-6 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-neutral-100 rounded-full text-xs text-neutral-600">
            <span className="text-primary-600 mr-1">🇮🇳</span>
            Made in India • Industrial Grade
          </span>
        </div>
      </div>
    </footer>
  )
}