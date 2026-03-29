'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function TermsAndConditionsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sections = [
    {
      number: '01',
      title: 'Platform Terms',
      icon: '📋',
      content: [
        {
          subtitle: '1.1 Role Definition',
          text: 'BrightMlk Industries operates as a B2B manufacturer and supplier of industrial dairy and fruit powders. We are the principal in all transactions, not a marketplace intermediary.'
        },
        {
          subtitle: '1.2 Eligibility Criteria',
          text: 'All buyers must be registered businesses with valid GST, FSSAI license, and IEC (for exports). Individual consumers and unregistered entities are not permitted.'
        },
        {
          subtitle: '1.3 KYC Verification',
          text: 'All business partners must complete KYC verification including company registration, tax documents, and facility certifications before order processing.'
        }
      ]
    },
    {
      number: '02',
      title: 'Procurement Terms',
      icon: '📦',
      content: [
        {
          subtitle: '2.1 Minimum Order Quantity',
          text: 'Standard MOQ: 1000kg per product. Trial orders of 500kg available for first-time buyers. Contract manufacturing MOQ: 5000kg per SKU.'
        },
        {
          subtitle: '2.2 Payment Terms',
          text: 'Standard terms: 30% advance, 70% against shipping documents. Irrevocable Letter of Credit (LC) accepted. Net 30 days for approved credit customers with 3+ years history.'
        },
        {
          subtitle: '2.3 Price Adjustments',
          text: 'Prices valid for 15 days from quote. Raw material fluctuations may affect pricing. Volume discounts available for 10MT+ orders.'
        }
      ]
    },
    {
      number: '03',
      title: 'Quality Specifications',
      icon: '✓',
      content: [
        {
          subtitle: '3.1 Product Specifications',
          text: 'All products meet declared specifications: Skimmed Milk Powder (Protein 34% min, Fat 1% max), WPC-80 (Protein 80% min), Fruit Powders (100% pure, spray/freeze dried).'
        },
        {
          subtitle: '3.2 Certification Requirements',
          text: 'ISO 22000:2018 certified facility. Certificate of Analysis provided with each batch. Third-party testing available at buyer\'s cost.'
        },
        {
          subtitle: '3.3 Quality Claims',
          text: 'Quality claims must be reported within 7 days of receipt with retained samples. Disputes resolved via independent NABL accredited lab testing.'
        }
      ]
    },
    {
      number: '04',
      title: 'Logistics & Shipping',
      icon: '🚢',
      content: [
        {
          subtitle: '4.1 Shipping Terms',
          text: 'All shipments on FOB (Free On Board) Nhava Sheva/Mundra basis unless otherwise agreed. Incoterms 2020 apply. CIF/C&F available at additional cost.'
        },
        {
          subtitle: '4.2 Packaging Standards',
          text: 'Standard: 25kg multi-layer paper bags with inner liner. Jumbo bags (500kg) and 1MT sacks available. Custom packaging at additional cost (MOQ 5000kg).'
        },
        {
          subtitle: '4.3 Insurance Coverage',
          text: 'All shipments insured for 110% of invoice value. Institute Cargo Clauses (A) apply. Insurance certificate provided with shipping documents.'
        }
      ]
    },
    {
      number: '05',
      title: 'Pricing Structure',
      icon: '💰',
      content: [
        {
          subtitle: '5.1 Product Pricing',
          text: 'Ex-works pricing available. FOB/CIF quotes on request. Volume tiers: 1-5MT (Standard), 5-10MT (5% discount), 10MT+ (10% discount + custom terms).'
        },
        {
          subtitle: '5.2 Documentation Fees',
          text: 'Export documentation: ₹10,000 per shipment. Certificate of Origin: ₹2,000. Health certificate: ₹3,000. Additional certifications at actual cost.'
        },
        {
          subtitle: '5.3 Payment Processing',
          text: 'LC negotiation charges: 0.5% (min ₹5,000). Wire transfer fees: Actual. Early payment discount: 1% for payment within 7 days.'
        }
      ]
    },
    {
      number: '06',
      title: 'Intellectual Property',
      icon: '©️',
      content: [
        {
          subtitle: '6.1 Product Formulations',
          text: 'All product formulations, specifications, and manufacturing processes are proprietary to BrightMlk Industries. Reverse engineering prohibited.'
        },
        {
          subtitle: '6.2 Confidentiality',
          text: 'Buyers must maintain confidentiality of technical specifications, pricing, and trade terms. Non-disclosure agreements available on request.'
        }
      ]
    },
    {
      number: '07',
      title: 'Dispute Resolution',
      icon: '⚖️',
      content: [
        {
          subtitle: '7.1 Governing Law',
          text: 'These terms are governed by the laws of India. Courts in Delhi have exclusive jurisdiction over all disputes.'
        },
        {
          subtitle: '7.2 Arbitration',
          text: 'Disputes resolved by arbitration under the Arbitration and Conciliation Act, 1996. Venue: Delhi. Arbitration proceedings in English.'
        }
      ]
    },
    {
      number: '08',
      title: 'Force Majeure',
      icon: '⚡',
      content: [
        {
          subtitle: '8.1 Unforeseen Circumstances',
          text: 'Neither party liable for delays caused by acts of God, government actions, labor disputes, or supply chain disruptions beyond reasonable control.'
        },
        {
          subtitle: '8.2 Remedy Period',
          text: 'If force majeure exceeds 30 days, either party may terminate affected orders with mutual settlement of completed work.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Legal Protocol • B2B Transactions
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Terms of Trade
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Industrial B2B procurement terms for dairy and fruit powder transactions
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
                Industrial Trade Terms
              </span>
            </div>

            {/* Introduction */}
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-700 leading-relaxed">
                <span className="font-semibold text-primary-600">BrightMlk Industries Private Limited</span> operates as a manufacturer 
                and supplier of industrial dairy and fruit powders. These terms govern all B2B transactions.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="mt-8 bg-primary-50 rounded-lg p-6 border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center text-primary-700 text-xl">
                  📋
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Trade Summary</h3>
                  <p className="text-neutral-700 text-sm">
                    MOQ: 1000kg • Payment: 30% advance/LC • Claims: 7 days • 
                    All parties must hold valid business registrations and food safety certifications.
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Sections */}
            <div className="mt-12 space-y-8">
              {sections.map((section, idx) => (
                <div key={idx} className="border-l-4 border-primary-500 pl-6 py-2">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-2xl text-primary-600">
                        {section.icon}
                      </span>
                      <h2 className="text-xl font-display font-semibold text-neutral-900">
                        {section.title}
                      </h2>
                    </div>
                    <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      Section {section.number}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    {section.content.map((item, i) => (
                      <div key={i} className="text-neutral-700 text-sm">
                        <p><span className="font-medium text-primary-600">{item.subtitle}:</span> {item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Governing Law Card */}
            <div className="mt-12 p-6 bg-primary-50 rounded-lg border border-primary-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl text-primary-700">⚖️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Governing Law & Jurisdiction</h3>
                  <p className="text-neutral-700 text-sm mb-3">
                    These terms are governed by the laws of India. Courts in Delhi have exclusive jurisdiction.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-primary-600 flex items-center gap-1">✓ Arbitration Act, 1996</span>
                    <span className="text-primary-600 flex items-center gap-1">✓ Exclusive Jurisdiction: Delhi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl text-primary-600">📞</span>
                Legal Contact
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
                Legal notices: Registered email or courier to above address only
              </p>
            </div>

            {/* Acknowledgement */}
            <div className="mt-8 text-center text-xs text-neutral-500 border-t border-neutral-200 pt-6">
              <p>By using BrightMlk Industries services, you acknowledge acceptance of these terms for B2B industrial transactions.</p>
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
              { href: '/privacy', label: 'Privacy Policy', icon: '🔒' },
              { href: '/cookies', label: 'Cookie Policy', icon: '🍪' },
              { href: '/data-use', label: 'Data Use', icon: '📊' }
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

      {/* Footer Note */}
      <footer className="border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <p>© 2024 BrightMlk Industries Private Limited</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>CTI: POLL09899GG2026</span>
              <span>IBCI: 7688588JJ</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}