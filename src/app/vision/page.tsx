'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function VisionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const visionGoals = [
    {
      number: '10,000',
      label: 'MT Capacity',
      desc: 'Annual production capacity by 2028',
      icon: '⚙️'
    },
    {
      number: '50+',
      label: 'Countries',
      desc: 'Global export destinations',
      icon: '🌍'
    },
    {
      number: '100%',
      label: 'Traceable',
      desc: 'Complete batch traceability',
      icon: '🔗'
    },
    {
      number: '35+',
      label: 'Products',
      desc: 'Dairy & fruit powder variants',
      icon: '📦'
    }
  ]

  const pillars = [
    {
      title: 'Manufacturing Excellence',
      desc: 'Continuous investment in state-of-the-art spray drying technology and process automation.',
      icon: '🏭',
      stats: '5000+ MT Current'
    },
    {
      title: 'Global Leadership',
      desc: 'Establishing BrightMlk as Asia\'s most trusted B2B dairy ingredient supplier.',
      icon: '🏆',
      stats: '25+ Countries'
    },
    {
      title: 'Sustainable Growth',
      desc: 'Carbon-neutral manufacturing and sustainable sourcing practices.',
      icon: '🌱',
      stats: 'Net Zero 2030'
    }
  ]

  const roadmap: {
    year: string;
    title: string;
    desc: string;
    achievements: string[];
    status: string;
    icon?: string;
  }[] = [
    {
      year: '2024',
      title: 'Foundation Phase',
      desc: 'Current operations and market establishment',
      achievements: ['5000 MT annual capacity', '25 export countries', 'ISO 22000 certified', '18 product variants'],
      status: 'Active',
      icon: '🚀'
    },
    {
      year: '2026',
      title: 'Expansion Phase',
      desc: 'Capacity doubling and market diversification',
      achievements: ['8000 MT capacity', '35 export countries', '5 new formulations', 'R&D center launch'],
      status: 'Planned',
      icon: '📈'
    },
    {
      year: '2028',
      title: 'Market Leadership',
      desc: 'Industry leadership in Asian markets',
      achievements: ['10,000 MT capacity', '50 export countries', 'Custom formulations hub', 'Global recognition'],
      status: 'Target',
      icon: '🏆'
    },
    {
      year: '2030',
      title: 'Legacy Phase',
      desc: 'Sustainable industry leadership',
      achievements: ['Carbon neutral', '100+ formulations', 'Global top 5 supplier', 'Industry benchmark'],
      status: 'Vision',
      icon: '🌟'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full text-sm text-primary-700 mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
            Strategic Vision • 2024-2030
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
            Our Vision
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Establishing BrightMlk as Asia's premier industrial dairy and fruit powder manufacturer
          </p>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-elegant p-12 text-center relative overflow-hidden border border-neutral-200">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-50 rounded-full -translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-50 rounded-full translate-x-20 translate-y-20"></div>
            
            <div className="relative">
              <span className="text-7xl mb-6 block text-primary-200 font-serif">"</span>
              <p className="text-2xl md:text-3xl text-neutral-700 italic leading-relaxed">
                "To be the most trusted B2B partner for industrial dairy and fruit ingredients, 
                delivering consistent quality, innovation, and sustainability to food manufacturers worldwide."
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-16 h-0.5 bg-primary-300 rounded-full"></div>
                <span className="text-primary-600 font-semibold">BrightMlk Industries</span>
                <div className="w-16 h-0.5 bg-primary-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Goals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">2030 Targets</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Vision Metrics
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visionGoals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-6 text-center hover:shadow-elevation-2 transition-shadow">
                <div className="text-4xl mb-4 text-primary-600">
                  {goal.icon}
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-2">{goal.number}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {goal.label}
                </h3>
                <p className="text-sm text-neutral-600">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars of Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Foundation</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Strategic Pillars
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-8 hover:shadow-elevation-2 transition-shadow">
                <div className="text-5xl mb-4 text-primary-600">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">{pillar.desc}</p>
                <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                  {pillar.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Strategic Timeline
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {roadmap.map((milestone, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white rounded-xl shadow-elevation-1 p-8 hover:shadow-elevation-2 transition-shadow border-l-4 border-primary-600">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl text-primary-600">{milestone.icon}</span>
                          <span className="px-4 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                            {milestone.year}
                          </span>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          milestone.status === 'Active' 
                            ? 'bg-green-100 text-green-700' 
                            : milestone.status === 'Planned'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-neutral-100 text-neutral-700'
                        }`}>
                          {milestone.status}
                        </span>
                      </div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4">{milestone.desc}</p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-elevation-1 p-8 border border-neutral-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl text-primary-600">🇮🇳</span>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  Made in India
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Industrial Excellence</h3>
              <p className="text-neutral-600 text-sm mb-4">Leading Indian manufacturer of dairy and fruit powders</p>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {['ISO', 'FSSAI', 'HPIFG'].map((cert, i) => (
                    <span key={i} className="px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-md text-neutral-700 text-xs font-medium">
                      {cert}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-neutral-500">25+ Countries</span>
              </div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl text-primary-600">🎯</span>
                <span className="inline-block px-3 py-1 bg-primary-200 text-primary-700 rounded-full text-xs font-medium">
                  2030 Vision
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">Legacy Goal</h3>
              <p className="text-neutral-600 text-sm mb-4">Global top 5 dairy ingredient supplier</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-2 rounded text-center text-primary-700 text-sm font-medium">10,000 MT</div>
                <div className="bg-white p-2 rounded text-center text-primary-700 text-sm font-medium">50 Countries</div>
                <div className="bg-white p-2 rounded text-center text-primary-700 text-sm font-medium">35+ Products</div>
                <div className="bg-white p-2 rounded text-center text-primary-700 text-sm font-medium">₹500Cr Revenue</div>
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
            Join Our Mission
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Industrial buyers • Raw material suppliers • Distribution partners
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact?type=buyer" 
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Partner With Us
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
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

      {/* Footer Note */}
      <footer className="border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <p>© 2024 BrightMlk Industries Private Limited</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Vision 2030</span>
              <span>Industrial Division</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}