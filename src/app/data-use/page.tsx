'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DataUsePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const dataCategories = [
    {
      title: 'Business Identity',
      icon: '🏢',
      items: ['Company registration & GST', 'FSSAI license & ISO certifications', 'Operational addresses', 'Authorized signatories'],
      protocol: 'BUS-001'
    },
    {
      title: 'Transaction Logs',
      icon: '📦',
      items: ['Bulk order history (1000kg+)', 'Product specifications', 'Export documentation', 'Payment records'],
      protocol: 'TXN-002'
    },
    {
      title: 'Quality Metrics',
      icon: '✓',
      items: ['Batch test results', 'Certificate of Analysis', 'Storage conditions', 'Supply chain data'],
      protocol: 'QLT-003'
    },
    {
      title: 'System Telemetry',
      icon: '⚙️',
      items: ['IP addresses & device fingerprints', 'Platform interaction logs', 'Security audit trails', 'Preference settings'],
      protocol: 'SYS-004'
    }
  ]

  const dataUses = [
    {
      title: 'B2B Procurement',
      desc: 'Match industrial buyers with verified suppliers',
      icon: '🤝',
      stat: '10M+ KG processed'
    },
    {
      title: 'Export Documentation',
      desc: 'Generate customs paperwork and certificates',
      icon: '📄',
      stat: '98% faster clearance'
    },
    {
      title: 'Quality Assurance',
      desc: 'Track batch specifications and test results',
      icon: '✓',
      stat: 'ISO 22000 certified'
    },
    {
      title: 'Payment Processing',
      desc: 'Secure LC and wire transactions',
      icon: '💳',
      stat: '₹50Cr+ processed'
    },
    {
      title: 'Regulatory Compliance',
      desc: 'FSSAI, customs, international standards',
      icon: '⚖️',
      stat: '100% compliant'
    },
    {
      title: 'Industry Analytics',
      desc: 'Price trends and demand forecasting',
      icon: '📊',
      stat: '25+ markets'
    }
  ]

  const securityMeasures = [
    { icon: '🔐', title: 'AES-256 Encryption', desc: 'Bank-grade security' },
    { icon: '🛡️', title: 'Access Control', desc: 'Role-based permissions' },
    { icon: '📋', title: 'Audit Trails', desc: 'Complete activity logs' },
    { icon: '🔄', title: 'Backup Protocol', desc: 'Real-time replication' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Data Governance • Version 2.0
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Data Usage Framework
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            How BrightMlk Industries processes and protects B2B transaction data
          </p>

          <div className="mt-6 text-sm text-neutral-500">
            Last Updated: March 1, 2024
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-elegant p-8 md:p-12">
            
            {/* Version Info */}
            <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-sm text-neutral-500">Version 2.0.1</span>
              <span className="text-xs bg-neutral-100 px-3 py-1 rounded-full text-neutral-600">
                Industrial Data Classification
              </span>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-primary-50 rounded-lg p-6 mb-12 border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center text-primary-700 text-xl">
                  📋
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Our Data Promise</h3>
                  <p className="text-neutral-700 text-sm">
                    We collect industrial transaction data to facilitate bulk dairy and fruit powder procurement. 
                    All data is encrypted, never sold, and used strictly for B2B operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Categories Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">📊</span>
                </span>
                Data Classifications
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {dataCategories.map((category, idx) => (
                  <div key={idx} className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-shadow border border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl text-primary-600">{category.icon}</span>
                        <h3 className="font-semibold text-neutral-900">{category.title}</h3>
                      </div>
                      <span className="text-xs text-neutral-500 bg-white px-2 py-1 rounded border border-neutral-200">
                        {category.protocol}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="text-primary-500 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Data */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">⚙️</span>
                </span>
                How We Use Your Data
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataUses.map((use, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-5 hover:shadow-md transition-shadow border border-neutral-200">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl text-primary-600">{use.icon}</span>
                      <div>
                        <h3 className="font-semibold text-neutral-900 text-sm mb-1">{use.title}</h3>
                        <p className="text-xs text-neutral-600 mb-2">{use.desc}</p>
                        <span className="text-xs text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                          {use.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">🔄</span>
                </span>
                Data Sharing
              </h2>

              <div className="space-y-3">
                {[
                  { party: 'Buyers & Suppliers', desc: 'Transaction data shared only between verified B2B parties', limit: 'Minimum Necessary' },
                  { party: 'Regulatory Bodies', desc: 'Export documentation as required by customs/FSSAI', limit: 'Legal Compliance' },
                  { party: 'Payment Gateways', desc: 'Encrypted payment processing for industrial transactions', limit: 'Tokenized' },
                  { party: 'Logistics Partners', desc: 'Shipment details for cold chain management', limit: 'Tracking Only' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <span className="w-8 h-8 bg-white rounded-lg border border-neutral-300 flex items-center justify-center text-neutral-600 text-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-medium text-neutral-900">{item.party}</h3>
                        <span className="text-xs text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                          {item.limit}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <p className="text-sm text-neutral-700 flex items-center gap-2">
                  <span className="text-primary-600 text-lg">🔒</span>
                  Zero Data Sales: Business data is never sold to third parties
                </p>
              </div>
            </div>

            {/* Security Measures */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">🛡️</span>
                </span>
                Security Measures
              </h2>

              <div className="grid md:grid-cols-4 gap-4">
                {securityMeasures.map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-5 text-center rounded-lg border border-neutral-200 hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-2 block text-primary-600">{item.icon}</span>
                    <h3 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-16">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">✓</span>
                </span>
                Your Data Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Access your company data',
                  'Export transaction history',
                  'Update business information',
                  'Delete account data',
                  'Opt out of analytics',
                  'Request data portability'
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                    <span className="w-5 h-5 bg-primary-100 rounded flex items-center justify-center text-primary-600 text-xs border border-primary-200">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-700">{right}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100">
                <p className="text-sm text-neutral-700 flex items-center gap-2">
                  <span className="text-primary-600">📧</span>
                  To exercise your rights: <a href="mailto:shukla.dry@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
                    shukla.dry@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Retention Periods */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Data Retention</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { type: 'Active Accounts', period: 'Duration + 3 years', reason: 'Business Continuity' },
                  { type: 'Transaction Logs', period: '8 years', reason: 'Tax & Customs' },
                  { type: 'Export Documents', period: '10 years', reason: 'Regulatory' }
                ].map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <div className="text-xs text-neutral-500 mb-1">{item.type}</div>
                    <div className="font-semibold text-neutral-900 text-lg mb-1">{item.period}</div>
                    <div className="text-xs text-neutral-600">{item.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="relative bg-neutral-50 rounded-lg p-8 border border-neutral-200">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 text-xl mb-2">Data Protection Officer</h3>
                  <p className="text-neutral-600 text-sm mb-4">For privacy and data inquiries</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-neutral-700">
                      <span className="text-primary-600">✉️</span>
                      <a href="mailto:shukla.dry@gmail.com" className="hover:text-primary-600 transition-colors">
                        shukla.dry@gmail.com
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-neutral-700">
                      <span className="text-primary-600">📞</span>
                      <a href="tel:+918750751765" className="hover:text-primary-600 transition-colors">
                        +91-8750751765
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-neutral-700">
                      <span className="text-primary-600">📍</span>
                      G-81 & G-82, Laxmi Nagar, Delhi 110092
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/privacy-policy" className="btn-secondary text-sm px-6 py-3">
                    Privacy Policy
                  </Link>
                  <Link href="/cookies" className="btn-primary text-sm px-6 py-3">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <p>© 2024 BrightMlk Industries Private Limited</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>ISO 27001:2022 Certified</span>
              <span>Industrial Data Processing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}