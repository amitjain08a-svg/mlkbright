'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('buyers')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const buyerServices = [
    {
      title: 'Bulk Procurement',
      desc: 'Source industrial dairy and fruit powders directly from manufacturer. MOQ: 1000kg.',
      icon: '📦',
      features: ['Skimmed Milk Powder (SMP)', 'Full Cream Milk Powder (FCMP)', 'Whey Protein (WPC-80)', 'Fruit Powders (Mango/Banana)'],
      stats: '5000+ MT Annual'
    },
    {
      title: 'Export Documentation',
      desc: 'Complete export handling including customs, certificates, and international shipping.',
      icon: '📄',
      features: ['Certificate of Origin', 'Health & FSSAI certs', 'Customs clearance', 'Bill of Lading'],
      stats: '25+ Countries'
    },
    {
      title: 'Quality Certification',
      desc: 'ISO 22000:2018 certified products with complete lab testing and traceability.',
      icon: '✓',
      features: ['NABL lab reports', 'Batch traceability', 'Certificate of Analysis', 'Third-party audits'],
      stats: '100% Certified'
    },
    {
      title: 'Logistics Solutions',
      desc: 'Temperature-controlled shipping with real-time monitoring.',
      icon: '🚢',
      features: ['FCL/LCL consolidation', 'Cold chain management', 'Real-time tracking', 'Express air freight'],
      stats: '98% On-Time'
    },
    {
      title: 'Private Labeling',
      desc: 'Custom packaging and formulations for industrial clients.',
      icon: '🏷️',
      features: ['Custom formulations', 'Branded packaging', 'Exclusive blends', 'MOQ: 5000kg'],
      stats: '50+ Formulations'
    },
    {
      title: 'Market Intelligence',
      desc: 'Data-driven insights on pricing trends and demand forecasting.',
      icon: '📊',
      features: ['Price trends', 'Demand forecasts', 'Competitor analysis', 'Market reports'],
      stats: 'Real-time Data'
    }
  ]

  const supplierServices = [
    {
      title: 'Global Market Access',
      desc: 'Connect with industrial buyers across 25+ countries.',
      icon: '🌐',
      features: ['Buyer matching', 'Export opportunities', 'Trade shows', 'Digital catalog'],
      stats: '200+ Buyers'
    },
    {
      title: 'Quality Assurance',
      desc: 'ISO 22000 certification support and quality systems implementation.',
      icon: '✨',
      features: ['Gap analysis', 'Documentation', 'Audit support', 'Continuous improvement'],
      stats: 'ISO 22000'
    },
    {
      title: 'Fair Pricing',
      desc: 'Transparent pricing with 15-day payment terms.',
      icon: '💰',
      features: ['Premium pricing', '15-day payments', 'Volume bonuses', 'Long-term contracts'],
      stats: '₹50Cr+ Paid'
    },
    {
      title: 'Technical Support',
      desc: 'Process optimization and quality control assistance.',
      icon: '⚙️',
      features: ['Process optimization', 'Quality control', 'Packaging solutions', 'Training'],
      stats: '24/7 Support'
    },
    {
      title: 'Export Logistics',
      desc: 'End-to-end export handling including documentation and shipping.',
      icon: '🚢',
      features: ['Door pickup', 'Documentation', 'Insurance', 'Payment collection'],
      stats: '98% Hassle-Free'
    },
    {
      title: 'R&D Collaboration',
      desc: 'Joint development of new formulations and applications.',
      icon: '🔬',
      features: ['Product development', 'Application testing', 'Market research', 'Patent support'],
      stats: '10+ Patents'
    }
  ]

  const processSteps = [
    { step: '01', title: 'Procurement', desc: 'Raw material sourcing & quality verification', icon: '⚙️' },
    { step: '02', title: 'Processing', desc: 'Spray drying & quality control', icon: '🏭' },
    { step: '03', title: 'Certification', desc: 'Lab testing & batch traceability', icon: '✓' },
    { step: '04', title: 'Dispatch', desc: 'Global logistics & documentation', icon: '🌍' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Industrial Services • B2B Division
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Our Services
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive B2B solutions for industrial dairy and fruit powder procurement
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-neutral-100 rounded-lg">
              <button
                onClick={() => setActiveTab('buyers')}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all ${
                  activeTab === 'buyers'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                Industrial Buyers
              </button>
              <button
                onClick={() => setActiveTab('suppliers')}
                className={`px-6 py-2.5 rounded-md font-medium text-sm transition-all ${
                  activeTab === 'suppliers'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                Raw Material Suppliers
              </button>
            </div>
          </div>

          {/* Buyers Services */}
          {activeTab === 'buyers' && (
            <div className="space-y-16">
              {/* Hero Card for Buyers */}
              <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-200 text-primary-700 rounded-full text-sm font-medium mb-4">
                      Industrial Procurement
                    </span>
                    <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                      Source Industrial-Grade Powders
                    </h2>
                    <p className="text-neutral-600 text-lg mb-6">
                      Direct from ISO 22000 certified facility. Consistent quality, competitive pricing, reliable supply.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        {['ISO', 'FSSAI', 'HPIFG'].map((cert, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-primary-200 rounded-md text-primary-700 text-xs font-medium">
                            {cert}
                          </span>
                        ))}
                      </div>
                      <span className="text-primary-600 text-sm">Certified Quality</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-5xl mb-4 text-center text-primary-600">⚙️</div>
                    <p className="text-center text-sm text-neutral-500">Industrial Grade</p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="text-center p-2 bg-primary-50 rounded">
                        <div className="text-sm font-medium text-primary-700">SMP 34%</div>
                        <div className="text-xs text-neutral-500">Protein</div>
                      </div>
                      <div className="text-center p-2 bg-primary-50 rounded">
                        <div className="text-sm font-medium text-primary-700">WPC 80%</div>
                        <div className="text-xs text-neutral-500">Protein</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buyers Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buyerServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl text-primary-600">
                        {service.icon}
                      </div>
                      <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded-full">
                        {service.stats}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-neutral-500">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Suppliers Services */}
          {activeTab === 'suppliers' && (
            <div className="space-y-16">
              {/* Hero Card for Suppliers */}
              <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="inline-block px-3 py-1 bg-primary-200 text-primary-700 rounded-full text-sm font-medium mb-4">
                      Supplier Network
                    </span>
                    <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                      Join Our Supply Chain
                    </h2>
                    <p className="text-neutral-600 text-lg mb-6">
                      Partner with India's fastest-growing industrial dairy and fruit powder manufacturer.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        {['50+', '1000L+', '24/7'].map((stat, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-primary-200 rounded-md text-primary-700 text-xs font-medium">
                            {stat}
                          </span>
                        ))}
                      </div>
                      <span className="text-primary-600 text-sm">Active Suppliers</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="text-5xl mb-4 text-center text-primary-600">🥛</div>
                    <p className="text-center text-sm text-neutral-500">Raw Material Partners</p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <div className="text-center p-2 bg-primary-50 rounded">
                        <div className="text-sm font-medium text-primary-700">MILK</div>
                        <div className="text-xs text-neutral-500">10000L/day</div>
                      </div>
                      <div className="text-center p-2 bg-primary-50 rounded">
                        <div className="text-sm font-medium text-primary-700">FRUITS</div>
                        <div className="text-xs text-neutral-500">5MT/month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Suppliers Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supplierServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl text-primary-600">
                        {service.icon}
                      </div>
                      <span className="text-xs text-neutral-400 bg-neutral-100 px-2 py-1 rounded-full">
                        {service.stats}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">{service.desc}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-neutral-500">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Production Workflow
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-primary-200"></div>
                )}
                <div className="relative">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-600 rounded-full flex items-center justify-center text-2xl text-white">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-primary-600 flex items-center justify-center text-primary-600 font-bold text-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-neutral-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Calculator Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-elegant overflow-hidden border border-neutral-200">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-white">
                <span className="inline-block px-3 py-1 bg-primary-200 text-primary-700 rounded-full text-sm font-medium mb-4">
                  Volume Calculator
                </span>
                <h2 className="text-2xl font-display font-bold text-neutral-900 mb-4">
                  Estimate Your Requirements
                </h2>
                <p className="text-neutral-600 text-sm mb-6">
                  Calculate bulk pricing, shipping costs, and documentation fees for industrial orders.
                </p>
                <Link 
                  href="/contact" 
                  className="btn-primary inline-block"
                >
                  Request Quote
                </Link>
              </div>
              <div className="p-8 bg-neutral-50">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-sm text-neutral-600">Product Value (1000kg)</span>
                    <span className="font-semibold text-primary-600">$15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-sm text-neutral-600">Shipping (FCL)</span>
                    <span className="font-semibold text-primary-600">$2,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="text-sm text-neutral-600">Documentation</span>
                    <span className="font-semibold text-primary-600">$450</span>
                  </div>
                  <div className="h-px bg-neutral-300 my-2"></div>
                  <div className="flex justify-between items-center p-3">
                    <span className="font-semibold text-neutral-900">Total CIF</span>
                    <span className="font-bold text-primary-600 text-xl">$17,950</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">*Estimate only. Final quote based on specifications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <span className="text-5xl mb-4 block">⚙️</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Industrial buyers • Raw material suppliers • Distribution partners
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact?type=buyer" 
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Start Sourcing
            </Link>
            <Link 
              href="/contact?type=supplier" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Supplier Portal
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-white/80">
            <span>📞 +91-8750751765</span>
            <span>✉️ shukla.dry@gmail.com</span>
            <span>📍 Laxmi Nagar, Delhi</span>
          </div>
        </div>
      </section>
    </div>
  )
}