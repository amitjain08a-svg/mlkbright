'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'procurement',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', inquiryType: 'procurement', message: '' })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern office building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            Get in Touch
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Connect with our team for B2B inquiries, bulk procurement, and partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-elevation-2 p-6 hover:shadow-elevation-3 transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Head Office</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                BrightMlk Industries Pvt. Ltd.<br />
                G-81 & G-82, Old No. G-23-A<br />
                Second Floor, Laxmi Nagar<br />
                Delhi - 110092
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-elevation-2 p-6 hover:shadow-elevation-3 transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email</h3>
              <div className="space-y-2">
                <a href="mailto:shukla.dry@gmail.com" className="block text-primary-600 hover:text-primary-700 text-sm">
                  shukla.dry@gmail.com
                </a>                
              </div>
              <p className="text-xs text-neutral-500 mt-2">Response within 4 hours</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-elevation-2 p-6 hover:shadow-elevation-3 transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Phone</h3>
              <a href="tel:+918750751765" className="block text-xl font-semibold text-primary-600 mb-1 hover:text-primary-700">
                +91-8750751765
              </a>
              <p className="text-xs text-neutral-500">24/7 Industrial Support</p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-xl shadow-elevation-2 p-6 hover:shadow-elevation-3 transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Business Hours</h3>
              <div className="space-y-1 text-sm">
                <p className="flex justify-between">
                  <span className="text-neutral-600">Mon-Fri:</span>
                  <span className="text-neutral-900 font-medium">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-neutral-600">Saturday:</span>
                  <span className="text-neutral-900 font-medium">10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-neutral-600">Sunday:</span>
                  <span className="text-neutral-900 font-medium">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className={`relative h-[600px] rounded-xl overflow-hidden shadow-elegant transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.283912345678!2d77.5277!3d28.4597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb1123456789%3A0x9876543210abcdef!2sLaxmi%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0"
                title="BrightMlk Industries Location"
              ></iframe>

              {/* Location Card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl text-primary-600">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">BrightMlk Industries</p>
                      <p className="text-sm text-neutral-600">G-81 & G-82, Laxmi Nagar, Delhi 110092</p>
                      <div className="flex gap-4 mt-2">
                        <span className="text-xs text-green-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                          Industrial Zone • Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white rounded-xl shadow-elegant p-8 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}>
              <div className="mb-6">
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Send Inquiry</span>
                <h2 className="text-2xl font-bold text-neutral-900 mt-2">Get in Touch</h2>
              </div>
              <p className="text-neutral-600 text-sm mb-8">
                For bulk procurement, partnership inquiries, or any questions about our products
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="input"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Inquiry Type</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="select"
                  >
                    <option value="procurement">Bulk Procurement</option>
                    <option value="export">Export Inquiry</option>
                    <option value="partnership">Partnership / Supplier</option>
                    <option value="distribution">Distribution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input resize-none"
                    placeholder="Please specify your requirements, volumes, and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center animate-fadeIn">
                    <span className="block text-2xl mb-2">✓</span>
                    Thank you! Our team will respond within 4 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Connect Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-neutral-50 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl mb-2 text-primary-600">📦</div>
                <h3 className="font-semibold text-neutral-900 mb-1">Bulk Orders</h3>
                <p className="text-xs text-neutral-500 mb-2">Minimum 1000kg • Industrial Grade</p>
                <a href="mailto:shukla.dry@gmail.com" className="text-primary-600 text-sm hover:text-primary-700">
                  shukla.dry@gmail.com
                </a>
              </div>
              <div className="text-center p-4 border-x border-neutral-200">
                <div className="text-3xl mb-2 text-primary-600">🤝</div>
                <h3 className="font-semibold text-neutral-900 mb-1">Partner Portal</h3>
                <p className="text-xs text-neutral-500 mb-2">Suppliers • Distributors</p>
                <a href="shukla.dry@gmail.com" className="text-primary-600 text-sm hover:text-primary-700">
                  shukla.dry@gmail.com
                </a>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl mb-2 text-primary-600">🌐</div>
                <h3 className="font-semibold text-neutral-900 mb-1">Export Desk</h3>
                <p className="text-xs text-neutral-500 mb-2">International Shipping</p>
                <a href="tel:+918750751765" className="text-primary-600 text-sm hover:text-primary-700">
                  +91-8750751765
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-display font-bold text-neutral-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is the minimum order quantity?",
                a: "Standard MOQ is 1000kg per product. Custom MOQ available for contract manufacturing and trial orders."
              },
              {
                q: "What export documentation do you provide?",
                a: "We provide complete export documentation including FSSAI certificates, health certificates, Certificate of Origin, and assist with customs clearance."
              },
              {
                q: "Are your products quality certified?",
                a: "Yes, we are ISO 22000:2018 certified. Each batch comes with Certificate of Analysis from our in-house lab."
              },
              {
                q: "What are your lead times?",
                a: "Production lead time: 2-3 weeks. Shipping varies by destination. Express options available for urgent orders."
              },
              {
                q: "Do you offer custom formulations?",
                a: "Yes, we offer custom formulations for industrial clients. Minimum 5000kg per SKU for private labeling."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg border border-neutral-200">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none">
                  <span className="font-medium text-neutral-900 pr-8">{faq.q}</span>
                  <span className="text-primary-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-6 text-neutral-600 border-t border-neutral-100 pt-4">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-neutral-600 text-sm">
              Still have questions? <a href="mailto:shukla.dry@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">Email our trade desk</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Emergency Procurement?</h2>
            <p className="text-neutral-600 mb-6">24/7 critical support for urgent industrial requirements</p>
            <a href="tel:+918750751765" className="btn-primary inline-flex items-center">
              <span className="text-xl mr-2">📞</span>
              +91-8750751765
            </a>
            <p className="text-xs text-neutral-500 mt-4">Available 24/7 for emergencies</p>
          </div>
        </div>
      </section>
    </div>
  )
}