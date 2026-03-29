'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const dataCategories = [
    {
      title: 'Business Identity',
      items: ['Company registration & GST', 'FSSAI license & ISO certifications', 'Trade credentials', 'Authorized signatories'],
      icon: '🏢',
    },
    {
      title: 'Transaction Logs',
      items: ['Bulk order history (1000kg+)', 'Export documentation', 'Payment records (LC/TT)', 'Shipping manifests'],
      icon: '📦',
    },
    {
      title: 'System Telemetry',
      items: ['IP addresses & device data', 'Platform access logs', 'Security audit trails', 'Preference settings'],
      icon: '⚙️',
    },
    {
      title: 'Communications',
      items: ['Email correspondence', 'Call records', 'Meeting transcripts', 'Support tickets'],
      icon: '✉️',
    }
  ]

  const securityMeasures = [
    { icon: '🔐', title: 'AES-256 Encryption', desc: 'Bank-grade security for all B2B data' },
    { icon: '🛡️', title: 'Access Control', desc: 'Role-based permissions & 2FA' },
    { icon: '📋', title: 'Audit Trails', desc: 'Complete activity logging' },
    { icon: '🔒', title: 'Privacy Shield', desc: 'DPDP & GDPR compliant' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Privacy Protocol • DPDP Compliant
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Privacy Policy
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            How BrightMlk Industries protects B2B business data and ensures regulatory compliance
          </p>

          <div className="mt-6 text-sm text-neutral-500">
            Last Updated: March 1, 2024
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-elegant p-8 md:p-12">
            
            {/* Version Info */}
            <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
              <span className="text-sm text-neutral-500">Version 2.0.1</span>
              <span className="text-xs bg-neutral-100 px-3 py-1 rounded-full text-neutral-600">
                Industrial Data Classification
              </span>
            </div>

            {/* Introduction */}
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                <span className="font-semibold text-primary-600">BrightMlk Industries Private Limited</span> processes business data 
                in accordance with the Digital Personal Data Protection Act, 2023 and international B2B standards.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="mt-8 bg-primary-50 rounded-lg p-6 border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center text-primary-700 text-xl">
                  📋
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Our Privacy Promise</h3>
                  <p className="text-neutral-700 text-sm">
                    We collect only business information necessary for industrial transactions. Data is encrypted, 
                    never sold, and processed under strict access controls.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">📊</span>
                </span>
                Information We Collect
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {dataCategories.map((category, idx) => (
                  <div key={idx} className="bg-neutral-50 rounded-lg p-5 border border-neutral-200">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl text-primary-600">{category.icon}</span>
                      <h3 className="font-semibold text-neutral-900">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                          <span className="text-primary-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">⚙️</span>
                </span>
                How We Use Your Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Export Processing', desc: 'Documentation & customs clearance' },
                  { title: 'B2B Matchmaking', desc: 'Connect industrial buyers/suppliers' },
                  { title: 'Quality Tracking', desc: 'Batch certification & traceability' },
                  { title: 'Payment Security', desc: 'LC & TT transaction processing' },
                  { title: 'Regulatory Compliance', desc: 'FSSAI, customs & DPDP' },
                  { title: 'Industry Analytics', desc: 'Market trends & forecasting' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <span className="w-8 h-8 bg-primary-100 rounded flex items-center justify-center text-primary-600">✓</span>
                    <div>
                      <h3 className="font-medium text-neutral-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">🔄</span>
                </span>
                Information Sharing
              </h2>

              <div className="space-y-3">
                {[
                  { party: 'Buyers & Suppliers', desc: 'Transaction data shared only between verified B2B parties', limit: 'Minimum Necessary' },
                  { party: 'Customs Authorities', desc: 'Export documentation as required by law', limit: 'Legal Compliance' },
                  { party: 'Payment Gateways', desc: 'Secure payment processing', limit: 'Tokenized' },
                  { party: 'Logistics Partners', desc: 'Shipment details for cold chain', limit: 'Tracking Only' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <span className="w-8 h-8 bg-white rounded-lg border border-neutral-300 flex items-center justify-center text-neutral-600 text-sm">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-medium text-neutral-900 text-sm">{item.party}</h3>
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
                  <span className="text-primary-600">🔒</span>
                  Zero Data Sales: Business information is never sold to third parties
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">🛡️</span>
                </span>
                Security Measures
              </h2>

              <div className="grid md:grid-cols-4 gap-4">
                {securityMeasures.map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-4 text-center rounded-lg border border-neutral-200">
                    <span className="text-3xl mb-2 block text-primary-600">{item.icon}</span>
                    <h3 className="font-medium text-neutral-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-neutral-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Your Rights */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-primary-600 text-lg">✓</span>
                </span>
                Your Data Rights
              </h2>

              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Access your business data',
                  'Export transaction logs',
                  'Update company information',
                  'Delete account data',
                  'Opt out of analytics',
                  'Request data portability'
                ].map((right, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                    <span className="w-5 h-5 bg-primary-100 rounded flex items-center justify-center text-primary-600 text-xs">
                      ✓
                    </span>
                    <span className="text-sm text-neutral-700">{right}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Retention */}
            <div className="mt-12">
              <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">Data Retention</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { type: 'Business Accounts', period: 'Duration + 3 years', reason: 'B2B Continuity' },
                  { type: 'Export Records', period: '8 years', reason: 'Customs & Tax' },
                  { type: 'Transaction Logs', period: '10 years', reason: 'Regulatory' }
                ].map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
                    <div className="text-sm font-medium text-neutral-900 mb-1">{item.type}</div>
                    <div className="text-lg font-semibold text-primary-600 mb-1">{item.period}</div>
                    <div className="text-xs text-neutral-500">{item.reason}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* DPDP Compliance */}
            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🇮🇳</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">DPDP Act Compliance</h3>
                  <p className="text-neutral-700 text-sm mb-3">Digital Personal Data Protection Act, 2023 compliant</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-primary-600 flex items-center gap-1">✓ Data Localization</span>
                    <span className="text-primary-600 flex items-center gap-1">✓ Consent Management</span>
                    <span className="text-primary-600 flex items-center gap-1">✓ Grievance Redressal</span>
                    <span className="text-primary-600 flex items-center gap-1">✓ Data Protection Officer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl text-primary-600">📞</span>
                Grievance Officer
              </h3>
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-neutral-700">
                  <span className="text-primary-600">✉️</span>
                  <a href="mailto:shukla.dry@gmail.com" className="hover:text-primary-600 transition-colors">
                    shukla.dry@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-3 text-neutral-700">
                  <span className="text-primary-600">📞</span>
                  <a href="tel:+918750751765" className="hover:text-primary-600 transition-colors">
                    +91-8750751765
                  </a>
                </p>
                <p className="flex items-start gap-3 text-neutral-700">
                  <span className="text-primary-600">📍</span>
                  <span>
                    BrightMlk Industries Pvt. Ltd.<br />
                    G-81 & G-82, Laxmi Nagar<br />
                    Delhi - 110092
                  </span>
                </p>
              </div>
              <p className="text-xs text-neutral-500 mt-4">
                Response Time: &lt;24 hours for B2B privacy concerns
              </p>
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
              { href: '/cookies', label: 'Cookie Policy', icon: '🍪' },
              { href: '/data-use', label: 'Data Use', icon: '📊' },
              { href: '/terms-and-conditions', label: 'Terms of Trade', icon: '📋' }
            ].map((policy, index) => (
              <Link
                key={index}
                href={policy.href}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3 text-primary-600">
                  {policy.icon}
                </div>
                <h3 className="font-medium text-neutral-900 hover:text-primary-600 transition-colors">
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