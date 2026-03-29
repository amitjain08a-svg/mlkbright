'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [openCategory, setOpenCategory] = useState('general')
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleItem = (category: string, index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [`${category}-${index}`]: !prev[`${category}-${index}`]
    }))
  }

  const faqData: Record<string, {
    title: string;
    icon: string;
    questions: { q: string; a: string }[];
  }> = {
    general: {
      title: 'General B2B',
      icon: '🏢',
      questions: [
        {
          q: 'What is BrightMlk Industries?',
          a: 'BrightMlk Industries is a premier B2B supplier of industrial dairy and fruit powders. We specialize in bulk manufacturing of Skimmed Milk Powder, Full Cream Milk Powder, Whey Protein, and spray-dried fruit powders for global food manufacturers.'
        },
        {
          q: 'What is your manufacturing capacity?',
          a: 'Our facility processes 5000+ metric tons annually, with capability for 24/7 production. We operate multiple spray dryers and maintain buffer stock of 500MT for immediate dispatch.'
        },
        {
          q: 'Which products do you manufacture?',
          a: 'Primary products: Skimmed Milk Powder (SMP), Full Cream Milk Powder (FCMP), Whey Protein Concentrate (WPC-80), Mango Powder, Banana Powder, and custom dairy-fruit blends for industrial applications.'
        },
        {
          q: 'Do you offer custom formulations?',
          a: 'Yes, our R&D team develops custom formulations for industrial clients. Minimum 5000kg per SKU for custom blends. We can match specific protein, fat, and solubility requirements.'
        }
      ]
    },
    buyers: {
      title: 'Industrial Buyers',
      icon: '📦',
      questions: [
        {
          q: 'What is the minimum order quantity?',
          a: 'Standard MOQ: 1000kg per product. Trial orders of 500kg available for first-time buyers. Contract manufacturing MOQ: 5000kg per SKU. Volume discounts available for 10MT+ orders.'
        },
        {
          q: 'How do you ensure product quality?',
          a: 'ISO 22000:2018 certified facility. In-house lab testing for each batch with Certificate of Analysis. Third-party testing available on request. Parameters tested: protein, fat, moisture, solubility, microbiology.'
        },
        {
          q: 'What payment terms do you accept?',
          a: 'Irrevocable Letter of Credit (LC), Telegraphic Transfer (TT) with 30% advance. Net 30 days for established buyers with credit history. All transactions in USD/INR/EUR.'
        },
        {
          q: 'Do you provide samples?',
          a: 'Yes, 1kg samples available for serious buyers. Sample cost deductible from first bulk order. Express shipping arranged for urgent sample requirements.'
        },
        {
          q: 'What export documentation do you provide?',
          a: 'Complete export documentation: Certificate of Origin, Health Certificate, FSSAI Export License, Phytosanitary Certificate, Bill of Lading, Commercial Invoice, Packing List, and GSP Certificate.'
        },
        {
          q: 'What are your lead times?',
          a: 'Production lead time: 2-3 weeks. Shipping: Air freight (3-5 days), Sea freight (15-30 days depending on destination). Express production available for urgent orders.'
        }
      ]
    },
    suppliers: {
      title: 'Raw Material Suppliers',
      icon: '🥛',
      questions: [
        {
          q: 'How can I become a raw material supplier?',
          a: 'We source fresh milk, fruits, and dairy ingredients. Requirements: FSSAI license, ISO 22000 certification, consistent quality parameters, and minimum supply capacity of 10,000 liters/day (milk) or 5MT/month (fruits).'
        },
        {
          q: 'What are your quality requirements?',
          a: 'Milk: 3.5% fat, 8.5% SNF, antibiotic-free. Fruits: Brix value, pesticide-free, specific gravity standards. All suppliers must maintain traceability and cold chain documentation.'
        },
        {
          q: 'What is your payment cycle?',
          a: 'Payment within 7-15 days of delivery. Direct bank transfer. Long-term contracts available for consistent quality suppliers with volume commitments.'
        },
        {
          q: 'Do you provide technical support?',
          a: 'Yes, our quality team provides technical guidance on meeting specifications. We can assist with GMP implementation and certification readiness.'
        }
      ]
    },
    logistics: {
      title: 'Shipping & Logistics',
      icon: '🚢',
      questions: [
        {
          q: 'How are products packaged?',
          a: 'Standard packaging: 25kg multi-layer paper bags with inner polyethylene liner. Custom packaging available: 500kg jumbo bags, 1MT sacks, or as per buyer specification. All packaging food-grade and moisture-proof.'
        },
        {
          q: 'Do you handle customs clearance?',
          a: 'Yes, our logistics team manages export customs clearance. We work with CHA partners at all major ports: JNPT Mumbai, Mundra, Chennai, and ICD Tughlakabad.'
        },
        {
          q: 'What is your shipping network?',
          a: 'We ship to 25+ countries including UAE, Saudi Arabia, Egypt, Bangladesh, Sri Lanka, Vietnam, Indonesia, Nigeria, and Kenya. Regular FCL and LCL consolidation services.'
        },
        {
          q: 'How do you handle storage?',
          a: 'Finished goods stored in humidity-controlled warehouses (RH < 50%). FIFO inventory management. Cold storage available for heat-sensitive products.'
        }
      ]
    },
    compliance: {
      title: 'Regulatory Compliance',
      icon: '✓',
      questions: [
        {
          q: 'What certifications do you hold?',
          a: 'ISO 22000:2018 (Food Safety Management), FSSAI Licensed (License No: 123240XXXXXXX), HPIFG Certified, LAPIO Certified, GMP Compliant, and HACCP Certified facility.'
        },
        {
          q: 'Do you comply with international standards?',
          a: 'Yes, we meet CODEX Alimentarius standards, EU Food Safety Regulations, FDA requirements, and destination-specific import regulations. We can provide destination-specific certifications.'
        },
        {
          q: 'What traceability systems do you use?',
          a: 'ERP-based batch traceability from raw material to finished product. Each batch assigned unique lot number with complete production records, quality tests, and shipping documentation.'
        },
        {
          q: 'Do you provide lab reports?',
          a: 'Comprehensive Certificate of Analysis (COA) with every shipment. Testing includes: proximate analysis, heavy metals, microbiological parameters, and pathogen testing from NABL-accredited labs.'
        }
      ]
    }
  }

  const categories = [
    { id: 'general', label: 'General', icon: '🏢', count: '04' },
    { id: 'buyers', label: 'Buyers', icon: '📦', count: '06' },
    { id: 'suppliers', label: 'Suppliers', icon: '🥛', count: '04' },
    { id: 'logistics', label: 'Logistics', icon: '🚢', count: '04' },
    { id: 'compliance', label: 'Compliance', icon: '✓', count: '04' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Knowledge Base • B2B FAQ
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about industrial procurement, manufacturing, and partnerships
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setOpenCategory(category.id)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
                  openCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{category.icon}</span>
                  {category.label}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    openCategory === category.id
                      ? 'bg-white/20 text-white'
                      : 'bg-white text-neutral-600'
                  }`}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Header */}
          <div className="mb-8">
            <div className="bg-white rounded-xl shadow-elevation-1 p-6 border-l-4 border-primary-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 text-3xl">
                    {faqData[openCategory].icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-neutral-900">
                      {faqData[openCategory].title}
                    </h2>
                    <p className="text-neutral-500 text-sm mt-1">
                      {faqData[openCategory].questions.length} frequently asked questions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqData[openCategory].questions.map((item, index) => {
              const itemKey = `${openCategory}-${index}`
              const isOpen = openItems[itemKey]

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:border-primary-200 transition-colors"
                >
                  <button
                    onClick={() => toggleItem(openCategory, index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-neutral-900 pr-8">
                      {item.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                      {item.a}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center border border-primary-100">
            <div className="w-20 h-20 mx-auto mb-4 bg-primary-200 rounded-full flex items-center justify-center">
              <span className="text-3xl text-primary-700">❓</span>
            </div>
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">Still Have Questions?</h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Connect with our industrial trade desk for specific B2B requirements
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact?type=buyer"
                className="btn-primary"
              >
                Contact Trade Desk
              </Link>
              <a
                href="mailto:shukla.dry@gmail.com"
                className="btn-secondary"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                icon: '📞',
                title: 'Trade Hotline',
                value: '+91-8750751765',
                link: 'tel:+918750751765'
              },
              {
                icon: '✉️',
                title: 'Trade Email',
                value: 'shukla.dry@gmail.com',
                link: 'mailto:shukla.dry@gmail.com'
              },
              {
                icon: '📍',
                title: 'Head Office',
                value: 'Laxmi Nagar, Delhi',
                link: '#'
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3 text-primary-600">
                  {item.icon}
                </div>
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                <p className="font-medium text-neutral-900">
                  {item.value}
                </p>
              </a>
            ))}
          </div>

          {/* Business Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              BrightMlk Industries Private Limited • G-81 & G-82, Laxmi Nagar, Delhi 110092
            </p>
            <p className="text-xs text-neutral-400 mt-2">
              MOQ: 1000KG • ISO 22000:2018 • HPIFG • LAPIO
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}