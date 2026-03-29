'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate expertise
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % expertise.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const expertise = [
    { category: 'Milk Powders', variants: '8 variants', desc: 'Skimmed • Full Cream • Instant • Organic', spec: 'Protein 34% | Fat 26%' },
    { category: 'Fruit Powders', variants: '12 variants', desc: 'Mango • Banana • Berry • Citrus', spec: 'Spray Dried • Freeze Dried' },
    { category: 'Dairy Proteins', variants: '6 variants', desc: 'WPC • MPI • Caseinates', spec: 'Protein 80% | Instantized' },
    { category: 'Custom Blends', variants: 'Tailored', desc: 'Contract manufacturing', spec: 'B2B formulations' },
  ]

  const leadership = [
    { 
      name: 'Shukla ji', 
      role: 'Founder & CEO', 
      expertise: 'Dairy Technology',
      experience: '25+ years',
      region: 'Delhi NCR',
    },
    { 
      name: 'Amit Kumar', 
      role: 'Head of Operations', 
      expertise: 'Supply Chain',
      experience: '18 years',
      region: 'North India',
    },
    { 
      name: 'Priya Singh', 
      role: 'Quality Control', 
      expertise: 'Food Safety',
      experience: '15 years',
      region: 'Lab Services',
    },
    { 
      name: 'Rahul Mehta', 
      role: 'Export Manager', 
      expertise: 'International Trade',
      experience: '20 years',
      region: 'Global Markets',
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        
        <div className={`relative max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Company Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              Est. 2010 • Industrial Food Ingredients
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            About BrightMlk
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-neutral-600 font-normal mt-2">
              Industries Private Limited
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Advanced dairy processing and fruit powder specialists, delivering industrial-grade 
            ingredients to global manufacturers since 2010.
          </p>

          {/* Expertise Showcase */}
          <div className="relative h-32 mt-12 mb-8">
            <div className="absolute inset-0 flex justify-center">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-1000 transform ${
                    index === activeIndex 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-95 translate-y-2'
                  }`}
                >
                  <div className="bg-white px-6 py-4 rounded-lg shadow-elegant border border-neutral-200">
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="font-semibold text-neutral-900">{item.category}</span>
                      <span className="text-neutral-400">•</span>
                      <span className="text-sm text-primary-600">{item.variants}</span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-1">{item.desc}</p>
                    <p className="text-xs text-neutral-500">{item.spec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900">
                Industrial Evolution
              </h2>
              <div className="w-20 h-1 bg-primary-200"></div>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                BrightMlk Industries emerged from a vision to revolutionize India's dairy processing sector. 
                What began as a single processing unit in Laxmi Nagar has evolved into a state-of-the-art 
                manufacturing facility serving 25+ countries worldwide.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our journey from local supplier to global exporter is built on relentless quality control, 
                advanced spray-drying technology, and deep expertise in dairy and fruit powder processing.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">25+</div>
                  <div className="text-xs text-neutral-500">Export Countries</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">5000T</div>
                  <div className="text-xs text-neutral-500">Annual Capacity</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <div className="text-2xl font-bold text-primary-600">ISO</div>
                  <div className="text-xs text-neutral-500">22000 Certified</div>
                </div>
              </div>
            </div>
            
            <div className={`relative transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="relative rounded-xl overflow-hidden shadow-elegant">
                <img 
                  src="https://images.unsplash.com/photo-1561997968-aa8a2b8b7c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial processing facility" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Image Caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <p className="text-sm text-neutral-600">
                      <span className="font-semibold text-primary-600">Advanced Processing Unit</span> • 
                      ISO 22000 certified • Spray drying technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-xl shadow-elevation-1 p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <span className="ml-4 text-sm text-neutral-500">Our Mission</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Quality First</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                To deliver consistent, high-quality dairy and fruit powders to industrial clients worldwide, 
                maintaining rigorous quality standards and supply chain integrity.
              </p>
              
              <div className="space-y-3">
                {[
                  { text: 'Industrial-scale production capacity', icon: '⚙️' },
                  { text: 'Rigorous quality control protocols', icon: '✓' },
                  { text: '24/7 manufacturing operations', icon: '⏰' },
                  { text: 'Just-in-time inventory management', icon: '📦' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-50 rounded flex items-center justify-center">
                      <span className="text-primary-600 text-xs">{item.icon}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-xl shadow-elevation-1 p-8">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <span className="ml-4 text-sm text-neutral-500">Our Vision</span>
              </div>
              
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Global Leadership</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                To become Asia's most trusted B2B supplier of industrial dairy and fruit ingredients, 
                powering the world's leading food manufacturers.
              </p>
              
              <div className="space-y-3">
                {[
                  { text: '100,000 MT annual production capacity', icon: '📈' },
                  { text: '50+ export destinations', icon: '🌐' },
                  { text: 'Sustainable manufacturing practices', icon: '🌱' },
                  { text: 'R&D center for custom formulations', icon: '🔬' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent-50 rounded flex items-center justify-center">
                      <span className="text-accent-600 text-xs">{item.icon}</span>
                    </div>
                    <span className="text-sm text-neutral-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Operating Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Industrial Precision',
                desc: 'Every batch manufactured to exact specifications with ±0.5% tolerance',
                icon: '⚙️',
                stat: '99.9% consistency',
              },
              {
                title: 'Quality Assurance',
                desc: 'Multi-stage testing • HACCP • ISO 22000 • In-house lab certified',
                icon: '✓',
                stat: '100% traceability',
              },
              {
                title: 'B2B Integrity',
                desc: 'Transparent pricing • Contract manufacturing • Confidential formulations',
                icon: '🔒',
                stat: 'Zero compromises',
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-8 hover:shadow-elevation-2 transition-shadow">
                <div className="text-4xl mb-4 text-primary-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{value.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <span className="text-xs font-medium text-primary-600">{value.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Management Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary-700 font-semibold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-xs text-neutral-500 mb-2">{member.expertise}</p>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-neutral-200 text-xs text-neutral-500">
                  <span>{member.experience}</span>
                  <span>{member.region}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-elevation-1 p-8">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              <div className="col-span-1">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Certifications</span>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mt-2">Quality<br />Standards</h3>
              </div>
              <div className="col-span-3">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'ISO 22000:2018', desc: 'Food Safety Management' },
                    { name: 'FSSAI Licensed', desc: 'Regulatory Compliance' },
                    { name: 'HACCP', desc: 'Hazard Analysis' },
                  ].map((cert, index) => (
                    <div key={index} className="bg-neutral-50 rounded-lg p-4 text-center">
                      <div className="text-xl text-primary-600 mb-2">✓</div>
                      <div className="text-sm font-medium text-neutral-900 mb-1">{cert.name}</div>
                      <div className="text-xs text-neutral-500">{cert.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Start a Partnership
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Industrial quantities • Custom formulations • Global logistics • Quality certified
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact?type=buyer" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/contact?type=supplier" className="btn-secondary">
                Become a Partner
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-neutral-600">
              <span>📞 +91-8750751765</span>
              <span>✉️ shukla.dry@gmail.com</span>
              <span>📍 Delhi • Laxmi Nagar</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}