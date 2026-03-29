'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate products
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const products = [
    { name: 'Skimmed Milk Powder', purity: '99.5%', origin: 'India', protein: '34%', category: 'Dairy' },
    { name: 'Mango Powder', purity: '100%', origin: 'India', process: 'Spray Dried', category: 'Fruit' },
    { name: 'Full Cream Milk', purity: '99%', origin: 'India', fat: '26%', category: 'Dairy' },
    { name: 'Banana Powder', purity: '100%', origin: 'India', process: 'Freeze Dried', category: 'Fruit' },
    { name: 'Whey Protein', purity: '98%', origin: 'India', protein: '80%', category: 'Specialty' },
  ]

  const stats = [
    { value: '5,000+', label: 'Tons Annual Capacity', icon: '📦' },
    { value: '25+', label: 'Export Countries', icon: '🌍' },
    { value: 'ISO 22000', label: 'Certified', icon: '✓' },
    { value: '24/7', label: 'Production', icon: '⚙️' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-dots opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto w-full">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Company Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-600">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                B2B Industrial Supplier • Est. 2010
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-4">
              BrightMlk
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-neutral-600 font-normal mt-2">
                Industries Private Limited
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Premium quality dairy and fruit powders for industrial applications. 
              ISO 22000 certified manufacturing with global export capabilities.
            </p>
            
            {/* Product Showcase */}
            <div className="relative h-20 mb-12">
              <div className="absolute inset-0 flex justify-center">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`absolute transition-all duration-1000 transform ${
                      index === activeIndex 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 translate-y-2'
                    }`}
                  >
                    <div className="bg-white px-6 py-3 rounded-lg shadow-elegant border border-neutral-200">
                      <span className="font-medium text-neutral-900">{product.name}</span>
                      <span className="mx-2 text-neutral-400">•</span>
                      <span className="text-neutral-600">{product.purity}</span>
                      <span className="mx-2 text-neutral-400">•</span>
                      <span className="text-neutral-600">{product.origin}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link 
                href="/contact?type=buyer" 
                className="btn-primary"
              >
                Request Quote
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/contact?type=supplier" 
                className="btn-secondary"
              >
                Partner With Us
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-neutral-50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl font-semibold text-neutral-900">{stat.value}</div>
                  <div className="text-xs text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
          <span className="text-xs text-neutral-400 mb-2">Scroll</span>
          <div className="w-5 h-8 border-2 border-neutral-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-neutral-400 rounded-full mt-2 animate-float"></div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Company Information
            </h2>
            <div className="w-20 h-1 bg-primary-200 mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Details Card */}
            <div className="bg-white rounded-xl shadow-elevation-1 p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                Corporate Details
              </h3>

              <div className="space-y-5">
                {/* Company Name */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-primary-600">🏢</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Entity Name</p>
                    <p className="text-neutral-900 font-medium">BrightMlk Industries Private Limited</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-primary-600">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Headquarters</p>
                    <p className="text-neutral-700 leading-relaxed">
                      G-81 & G-82, Old No. G-23-A,<br />
                      PVT Office NO-201, Second Floor,<br />
                      Laxmi Nagar, Delhi - 110092
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-primary-600">✉️</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Email</p>
                    <a href="mailto:shukla.dry@gmail.com" 
                       className="text-primary-600 hover:text-primary-700 transition-colors">
                      shukla.dry@gmail.com
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 mr-3">
                    <span className="text-primary-600">📞</span>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">Phone</p>
                    <a href="tel:+918750751765" 
                       className="text-primary-600 hover:text-primary-700 transition-colors">
                      +91-8750751765
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="bg-white rounded-xl shadow-elevation-1 p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <span className="w-1 h-6 bg-primary-500 rounded-full mr-3"></span>
                Certifications
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { cert: 'ISO 22000:2018', status: 'Active', icon: '✓' },
                  { cert: 'FSSAI Approved', status: 'Valid', icon: '✓' },
                  { cert: 'HPIFG Certified', status: 'Certified', icon: '☪️' },
                  { cert: 'LAPIO', status: 'Certified', icon: '✓' },
                ].map((item, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-4 text-center">
                    <div className="text-xl mb-2 text-primary-600">{item.icon}</div>
                    <div className="text-sm font-medium text-neutral-900 mb-1">{item.cert}</div>
                    <div className="text-xs text-neutral-500">{item.status}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 my-6"></div>
              
              <div className="text-sm text-neutral-600">
                <p>SITSA: 3209001234 • HILOPAS: OO98787UU-98889</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Products</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Industrial Grade Products
            </h2>
            <p className="text-neutral-600 mt-3 max-w-2xl mx-auto">
              Premium quality ingredients for food processing, dairy, and pharmaceutical industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: 'Skimmed Milk Powder', 
                code: 'SMP-34',
                specs: 'Protein: 34% | Fat: 1%',
                use: 'Dairy Processing, Bakery',
                icon: '🥛',
                category: 'Dairy'
              },
              { 
                name: 'Full Cream Milk Powder', 
                code: 'FCMP-26',
                specs: 'Fat: 26% | Protein: 26%',
                use: 'Ice Cream, Chocolate',
                icon: '🍦',
                category: 'Dairy'
              },
              { 
                name: 'Mango Powder', 
                code: 'MP-100',
                specs: '100% Pure | Spray Dried',
                use: 'Beverages, Confectionery',
                icon: '🥭',
                category: 'Fruit'
              },
              { 
                name: 'Whey Protein', 
                code: 'WPC-80',
                specs: 'Protein: 80% | Instant',
                use: 'Sports Nutrition, Pharma',
                icon: '💪',
                category: 'Specialty'
              },
              { 
                name: 'Banana Powder', 
                code: 'BP-FD',
                specs: 'Freeze Dried | 100% Fruit',
                use: 'Baby Food, Bakery',
                icon: '🍌',
                category: 'Fruit'
              },
              { 
                name: 'Butter Milk Powder', 
                code: 'BMP-12',
                specs: 'Cultured | 12% Protein',
                use: 'Bakery, Snacks',
                icon: '🧈',
                category: 'Dairy'
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{product.icon}</span>
                    <span className="text-xs font-mono bg-neutral-100 px-2 py-1 rounded text-neutral-600">
                      {product.code}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{product.specs}</p>
                  <p className="text-xs text-neutral-500 mb-4">{product.use}</p>
                  
                  <div className="border-t border-neutral-200 my-4"></div>
                  
                  <Link 
                    href="/contact?type=buyer" 
                    className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Request Quote
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Supply Chain Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {[
              { 
                step: '01', 
                title: 'Inquiry', 
                desc: 'Submit your requirements and specifications',
                icon: '📝'
              },
              { 
                step: '02', 
                title: 'Verification', 
                desc: 'Quality checks and sample approval',
                icon: '✓'
              },
              { 
                step: '03', 
                title: 'Production', 
                desc: 'Manufacturing and quality control',
                icon: '⚙️'
              },
              { 
                step: '04', 
                title: 'Delivery', 
                desc: 'Logistics and export documentation',
                icon: '🚚'
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-elevation-1 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="text-sm text-primary-600 font-mono mb-1">{item.step}</div>
                <h3 className="font-semibold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Ready to Start?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Whether you're looking to place a bulk order or become a supplier, 
              our team is here to help.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Link href="/contact?type=buyer" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/contact?type=supplier" className="btn-secondary">
                Become a Supplier
              </Link>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <a href="mailto:shukla.dry@gmail.com" className="text-neutral-600 hover:text-primary-600 transition-colors">
                ✉️ shukla.dry@gmail.com
              </a>
              <span className="text-neutral-300">|</span>
              <a href="tel:+918750751765" className="text-neutral-600 hover:text-primary-600 transition-colors">
                📞 +91-8750751765
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
            <p>© 2024 BrightMlk Industries Private Limited. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>B2B Portal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}