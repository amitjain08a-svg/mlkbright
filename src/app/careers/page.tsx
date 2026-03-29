'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

type Job = {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  salary: string
  requirements: string[]
}

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [activeDepartment, setActiveDepartment] = useState<string>('all')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const jobs = [
    {
      id: 'PROD-001',
      title: 'Production Manager',
      department: 'Operations',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '8+ years',
      description: 'Oversee industrial-scale spray drying operations for milk and fruit powders. Manage production schedules, quality control, and team leadership.',
      salary: '₹18-25 LPA',
      requirements: [
        'B.Tech in Food Technology/Dairy Technology',
        '8+ years in food processing industry',
        'Experience with spray dryers and evaporators',
        'Knowledge of ISO 22000 and HACCP',
        'Team management experience'
      ]
    },
    {
      id: 'QA-002',
      title: 'Quality Control Analyst',
      department: 'Quality',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Perform physical, chemical, and microbiological analysis of raw materials and finished products. Maintain lab equipment and documentation.',
      salary: '₹6-9 LPA',
      requirements: [
        'M.Sc in Food Technology/Microbiology',
        '3-5 years in food testing lab',
        'Experience with HPLC, FTIR, and wet lab analysis',
        'Understanding of FSSAI regulations',
        'ISO 17025 knowledge preferred'
      ]
    },
    {
      id: 'RND-003',
      title: 'Product Development Specialist',
      department: 'R&D',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Develop new dairy and fruit powder formulations. Optimize existing products for better solubility, nutrition, and cost efficiency.',
      salary: '₹12-18 LPA',
      requirements: [
        'PhD/M.Tech in Food Technology',
        '5+ years in product development',
        'Experience with spray drying optimization',
        'Knowledge of encapsulation technologies',
        'Patent filing experience preferred'
      ]
    },
    {
      id: 'SALES-004',
      title: 'Export Sales Manager',
      department: 'Sales',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Drive B2B sales of dairy and fruit powders to international markets. Manage distributor relationships and export documentation.',
      salary: '₹15-22 LPA + Incentives',
      requirements: [
        'MBA in International Business',
        '7+ years in food ingredient exports',
        'Existing network in Middle East/Asia/Africa',
        'Knowledge of LC, DGFT, and customs',
        'Fluency in English; Arabic preferred'
      ]
    },
    {
      id: 'MAINT-005',
      title: 'Maintenance Engineer',
      department: 'Engineering',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Maintain and troubleshoot spray dryers, evaporators, boilers, and packaging equipment. Implement preventive maintenance schedules.',
      salary: '₹8-12 LPA',
      requirements: [
        'B.E in Mechanical/Electrical Engineering',
        '5+ years in food processing industry',
        'Experience with industrial dryers and boilers',
        'PLC troubleshooting skills',
        'Safety compliance knowledge'
      ]
    },
    {
      id: 'LOG-006',
      title: 'Supply Chain Coordinator',
      department: 'Logistics',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Coordinate raw material procurement, production planning, and finished goods dispatch. Manage warehouse operations and inventory.',
      salary: '₹5-8 LPA',
      requirements: [
        'Degree in Supply Chain Management',
        '3+ years in food industry logistics',
        'Experience with ERP systems',
        'Knowledge of cold chain management',
        'Strong communication skills'
      ]
    },
    {
      id: 'LAB-007',
      title: 'Microbiologist',
      department: 'Quality',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Conduct microbiological testing of dairy products. Monitor environmental hygiene and pathogen testing protocols.',
      salary: '₹4-7 LPA',
      requirements: [
        'M.Sc in Microbiology',
        '2-4 years in food microbiology lab',
        'Experience with pathogen testing (Salmonella, Listeria)',
        'Knowledge of BSL-2 practices',
        'ISO 17025 documentation skills'
      ]
    },
    {
      id: 'PROD-008',
      title: 'Shift Incharge',
      department: 'Operations',
      location: 'Delhi NCR',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Manage production shift operations, coordinate with maintenance and quality teams, ensure production targets are met safely.',
      salary: '₹6-9 LPA',
      requirements: [
        'Diploma/B.Tech in Food Technology',
        '4-6 years in food processing',
        'Experience with spray drying operations',
        'Team handling skills',
        'Flexible for rotational shifts'
      ]
    }
  ]

  const departments = [
    { id: 'all', name: 'All Departments', count: jobs.length },
    { id: 'Operations', name: 'Operations', count: jobs.filter(j => j.department === 'Operations').length },
    { id: 'Quality', name: 'Quality Assurance', count: jobs.filter(j => j.department === 'Quality').length },
    { id: 'R&D', name: 'R&D', count: jobs.filter(j => j.department === 'R&D').length },
    { id: 'Sales', name: 'Sales & Marketing', count: jobs.filter(j => j.department === 'Sales').length },
    { id: 'Engineering', name: 'Engineering', count: jobs.filter(j => j.department === 'Engineering').length },
    { id: 'Logistics', name: 'Logistics', count: jobs.filter(j => j.department === 'Logistics').length }
  ]

  const filteredJobs = activeDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === activeDepartment)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Modern food processing facility"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 to-neutral-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            Join Our Team
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            Careers at BrightMlk
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Build your career in industrial food processing. Join a team committed to quality,
            innovation, and excellence in dairy and fruit powder manufacturing.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: '08', label: 'Open Positions' },
              { number: '24/7', label: 'Operations' },
              { number: 'ISO', label: 'Certified Facility' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Why BrightMlk</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Grow With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industrial Scale',
                desc: 'Work with state-of-the-art spray drying technology and processing lines handling 5000+ tons annually.',
                icon: '🏭',
                stat: '5000 TPA capacity'
              },
              {
                title: 'Global Exposure',
                desc: 'Export to 25+ countries. Collaborate with international clients and suppliers worldwide.',
                icon: '🌐',
                stat: '25+ export markets'
              },
              {
                title: 'Technical Excellence',
                desc: 'Continuous learning in advanced food processing technologies and quality systems.',
                icon: '⚙️',
                stat: 'ISO 22000 certified'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-8 hover:shadow-elevation-2 transition-shadow">
                <div className="text-4xl mb-4 text-primary-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{item.desc}</p>
                <div className="text-xs font-medium text-primary-600">{item.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Open Positions
            </h2>
            <p className="text-neutral-600 mt-3 max-w-2xl mx-auto">
              Explore opportunities to contribute to India's leading dairy and fruit powder manufacturing facility
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeDepartment === dept.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
              >
                {dept.name}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeDepartment === dept.id
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-neutral-600'
                  }`}>
                  {dept.count}
                </span>
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow p-6 cursor-pointer border border-neutral-200"
                onClick={() => setSelectedJob(job)}
              >
                {/* Header with badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded-full">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {job.experience}
                  </span>
                </div>

                {/* Title and ID */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {job.title}
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">
                    {job.id}
                  </span>
                </div>

                <p className="text-neutral-600 mb-4 text-sm line-clamp-2">{job.description}</p>

                {/* Location */}
                <div className="flex items-center text-sm text-neutral-500 mb-4">
                  <span className="mr-2">📍</span>
                  {job.location}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                  <span className="text-sm font-medium text-primary-600">{job.salary}</span>
                  <span className="text-primary-600 text-sm">View Details →</span>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12 bg-neutral-50 rounded-xl">
              <p className="text-neutral-600 text-lg">No open positions in this department</p>
              <p className="text-neutral-500 mt-2">Check back soon for updates</p>
            </div>
          )}
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full bg-white rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
            >
              <span className="text-neutral-600 text-xl">✕</span>
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-primary-600 bg-primary-50 px-3 py-1 rounded-full font-medium">
                    {selectedJob.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">{selectedJob.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {selectedJob.department}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {selectedJob.location}
                  </span>
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                    {selectedJob.type}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-2">Job Description</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{selectedJob.description}</p>
                </div>

                {/* Requirements */}
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 mb-2">Requirements</h4>
                  <ul className="space-y-2">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-neutral-600 text-sm">
                        <span className="text-primary-600 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Compensation */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-neutral-50 rounded-lg">
                  <div>
                    <span className="text-xs text-neutral-500">Experience</span>
                    <p className="text-lg font-semibold text-neutral-900">{selectedJob.experience}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-500">Compensation</span>
                    <p className="text-lg font-semibold text-primary-600">{selectedJob.salary}</p>
                  </div>
                </div>

                {/* Apply Button */}
                <Link
                  href="/contact?type=careers"
                  className="btn-primary w-full text-center block"
                  onClick={() => setSelectedJob(null)}
                >
                  Apply for this Position
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              Employee Benefits
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Medical Cover', icon: '🏥', desc: 'Family floater • ₹10L coverage' },
              { title: 'Performance Bonus', icon: '📈', desc: 'Quarterly • Project-based' },
              { title: 'Training', icon: '📚', desc: 'Technical certifications' },
              { title: 'Meal Subsidy', icon: '🍱', desc: 'Cafeteria • 24/7' },
              { title: 'Transport', icon: '🚌', desc: 'Pick & drop • Shift allowance' },
              { title: 'PF & Gratuity', icon: '💰', desc: 'Statutory benefits' },
              { title: 'Safety Gear', icon: '👔', desc: 'Industrial PPE kit' },
              { title: 'Leave Policy', icon: '⏰', desc: '30 days annual leave' }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <h3 className="text-sm font-semibold text-neutral-900 mb-1">{benefit.title}</h3>
                <p className="text-xs text-neutral-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-900 mt-2">
              What Our Team Says
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "BrightMlk offers unmatched exposure to industrial-scale processing. The technology and quality systems are world-class.",
                name: "Amit Kumar",
                role: "Production Manager",
                years: "5 years",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              },
              {
                quote: "Working in R&D here means solving real industrial challenges. We're developing formulations used globally.",
                name: "Priya Singh",
                role: "R&D Specialist",
                years: "3 years",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-elevation-1 p-6 relative">
                <div className="absolute -top-3 -left-3 text-6xl text-primary-200">"</div>
                <p className="text-neutral-600 mb-6 relative z-10 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-500">{testimonial.role} • {testimonial.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume for future opportunities.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact?type=careers"
              className="bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-primary-50 transition-colors"
            >
              Submit General Application
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Contact HR
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-sm text-white/80">
            <span>📞 +91-8750751765</span>            
            <span>📍 Delhi NCR</span>
          </div>
        </div>
      </section>
    </div>
  )
}