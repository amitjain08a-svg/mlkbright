'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function MissionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pillars = [
    {
      title: 'Industrial Excellence',
      desc: 'State-of-the-art spray drying technology with 5000+ MT annual capacity.',
      icon: '🏭',
      stats: '24/7 Production'
    },
    {
      title: 'Quality Assurance',
      desc: 'ISO 22000:2018 certified facility with in-house NABL accredited lab.',
      icon: '✓',
      stats: '100% Traceable'
    },
    {
      title: 'Global Reach',
      desc: 'Exporting to 25+ countries with complete logistics support.',
      icon: '🌐',
      stats: '25+ Markets'
    },
    {
      title: 'Custom Solutions',
      desc: 'R&D team developing custom formulations for industrial clients.',
      icon: '🔬',
      stats: '500+ Formulations'
    }
  ]

  const goals = [
    { label: 'Production Capacity', current: 5000, target: 10000, unit: 'MT/year' },
    { label: 'Export Markets', current: 25, target: 50, unit: 'countries' },
    { label: 'Product Portfolio', current: 18, target: 35, unit: 'variants' },
    { label: 'Warehouse Network', current: 3, target: 8, unit: 'locations' }
  ]

  const impactMetrics = [
    { number: '5000+', label: 'MT Annual', icon: '⚙️', desc: 'Production capacity' },
    { number: '25+', label: 'Countries', icon: '🌍', desc: 'Export destinations' },
    { number: '150Cr+', label: 'Turnover', icon: '📈', desc: 'Annual revenue' },
    { number: '150+', label: 'Employees', icon: '👥', desc: 'Workforce' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern manufacturing facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            Our Mission
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            Driving Industrial Excellence
          </h1>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            To deliver consistent, high-quality dairy and fruit powders to industrial clients worldwide
          </p>
        </div>
      </section>

      {/* Core Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-elegant overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-primary-50 to-white border-r border-neutral-200">
                <span className="text-6xl mb-4 block text-primary-200 font-serif">"</span>
                <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">Our Vision</h2>
                <p className="text-xl leading-relaxed mb-8 text-neutral-700">
                  "To be Asia's most trusted B2B supplier of industrial dairy and fruit ingredients, 
                  powering the world's leading food manufacturers with consistent quality."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-primary-700">👨‍💼</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Shukla ji</p>
                    <p className="text-sm text-neutral-500">Founder & CEO, BrightMlk</p>
                  </div>
                </div>
              </div>
              <div className="p-12 bg-neutral-50">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">Our Commitment</h3>
                <div className="space-y-4">
                  {[
                    '24/7 industrial-scale production',
                    'ISO 22000:2018 certified processes',
                    'Complete batch traceability',
                    'R&D for custom formulations',
                    'Just-in-time inventory management',
                    'Sustainable manufacturing by 2030'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-600 text-xs">✓</span>
                      </div>
                      <span className="text-neutral-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Mission Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-6 hover:shadow-elevation-2 transition-shadow">
                <div className="text-4xl mb-4 text-primary-600">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{pillar.desc}</p>
                <div className="text-xs text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block">
                  {pillar.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Growth Targets</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2 mb-6">
                2030 Objectives
              </h2>
              
              <div className="space-y-6">
                {goals.map((goal, index) => {
                  const percentage = (goal.current / goal.target) * 100
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-neutral-900">{goal.label}</span>
                        <span className="text-neutral-600">{goal.current}/{goal.target} {goal.unit}</span>
                      </div>
                      <div className="w-full h-4 bg-neutral-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary-600 rounded-full transition-all duration-1000 relative"
                          style={{ width: `${percentage}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 flex items-center gap-2">
                <span className="text-3xl text-primary-600">🎯</span>
                Strategic Priorities
              </h3>
              <div className="space-y-3">
                {[
                  'Expand to 50+ export countries by 2028',
                  'Double production capacity to 10,000 MT',
                  'Launch 15 new product formulations annually',
                  'Establish 5 regional warehouses',
                  'Achieve carbon-neutral certification',
                  'Implement AI-powered quality control'
                ].map((objective, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-neutral-200">
                    <span className="w-6 h-6 bg-primary-600 text-white rounded flex items-center justify-center flex-shrink-0 text-xs font-medium">
                      {index + 1}
                    </span>
                    <span className="text-neutral-700 text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 text-white">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-4">
              Performance Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">
              Our Industrial Impact
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center text-white border border-white/20">
                <div className="text-4xl mb-3">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{metric.number}</div>
                <div className="text-sm font-medium text-white/80 mb-1">{metric.label}</div>
                <div className="text-xs text-white/60">{metric.desc}</div>
              </div>
            ))}
          </div>

          {/* Additional Impact Stats */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <span className="text-4xl">💰</span>
                <div>
                  <p className="text-sm text-white/80">Annual Revenue</p>
                  <p className="text-2xl font-bold text-white">₹150 Cr+</p>
                  <p className="text-xs text-white/60">FY 2023-24</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <span className="text-4xl">🏆</span>
                <div>
                  <p className="text-sm text-white/80">Certifications</p>
                  <p className="text-2xl font-bold text-white">ISO 22000</p>
                  <p className="text-xs text-white/60">HPIFG • LAPIO • GMP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                value: 'Precision',
                desc: '±0.5% tolerance in all formulations',
                icon: '⚡'
              },
              {
                value: 'Integrity',
                desc: '100% traceability from source to shipment',
                icon: '🔗'
              },
              {
                value: 'Innovation',
                desc: 'Continuous R&D for new applications',
                icon: '🔬'
              }
            ].map((item, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4 text-primary-600">{item.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {item.value}
                </h3>
                <p className="text-neutral-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-elegant">
            <span className="text-6xl mb-4 block text-primary-600">⚙️</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Join Our Mission
            </h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
              Industrial buyers • Raw material suppliers • Distribution partners
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/contact?type=buyer" 
                className="btn-primary"
              >
                Start Procurement
              </Link>
              <Link 
                href="/contact?type=supplier" 
                className="btn-secondary"
              >
                Become a Supplier
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-neutral-600">
              <span>📞 +91-8750751765</span>
              <span>✉️ shukla.dry@gmail.com</span>
              <span>📍 Laxmi Nagar, Delhi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}