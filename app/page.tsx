import Link from 'next/link'
import { Check, Globe, Smartphone, Shield, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: 'KES 15,000',
    monthly: 'KES 2,500/mo',
    features: [
      '5-page website',
      'Mobile responsive',
      'Contact form',
      'Basic SEO',
      'SSL Certificate',
      '1 year domain (.co.ke)'
    ],
    cta: 'Start Basic',
    popular: false
  },
  {
    name: 'Standard',
    price: 'KES 30,000',
    monthly: 'KES 5,000/mo',
    features: [
      'Everything in Basic',
      'Booking calendar',
      'WhatsApp integration',
      'Blog section',
      'Email notifications',
      'Google Analytics',
      'Social media links'
    ],
    cta: 'Start Standard',
    popular: true
  },
  {
    name: 'Premium',
    price: 'KES 50,000',
    monthly: 'KES 7,500/mo',
    features: [
      'Everything in Standard',
      'Client portal',
      'Online payments (M-Pesa)',
      'Document management',
      'Advanced SEO',
      'Priority support',
      'Custom features'
    ],
    cta: 'Start Premium',
    popular: false
  }
]

const professions = [
  { name: 'Lawyers', count: '500+' },
  { name: 'Doctors', count: '300+' },
  { name: 'Dentists', count: '200+' },
  { name: 'Accountants', count: '150+' }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Wakili Digital</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/login" className="text-gray-700 hover:text-blue-900">
                Login
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Websites for Kenyan Professionals
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get your law firm, medical practice, or business online in minutes. 
              No technical skills needed. Trusted by {professions.reduce((acc, p) => acc + parseInt(p.count), 0)}+ professionals across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup" 
                className="bg-blue-900 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-800"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#demo" 
                className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50"
              >
                View Demo Sites
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {professions.map((profession) => (
              <div key={profession.name} className="text-center">
                <div className="text-3xl font-bold text-blue-900">{profession.count}</div>
                <div className="text-gray-600">{profession.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Succeed Online
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-900" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Professional Design</h4>
              <p className="text-gray-600">Industry-specific templates that build trust and credibility</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-blue-900" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Mobile First</h4>
              <p className="text-gray-600">Perfect on all devices - 80% of Kenyans browse on mobile</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-900" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Secure & Reliable</h4>
              <p className="text-gray-600">SSL certificates, daily backups, and 99.9% uptime</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-900" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-gray-600">Optimized for Kenya's internet speeds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Simple, Transparent Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-900' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-900 text-white text-center py-1 px-4 rounded-full text-sm font-semibold mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> setup</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.monthly} hosting & support</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/auth/signup" 
                  className={`block text-center px-6 py-3 rounded-lg font-semibold ${
                    plan.popular 
                      ? 'bg-blue-900 text-white hover:bg-blue-800' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Take Your Practice Online?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of professionals who trust Wakili Digital. 
            Get online in minutes, not months.
          </p>
          <Link 
            href="/auth/signup" 
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 inline-block"
          >
            Start Your Free Trial
          </Link>
          <p className="mt-4 text-blue-200">No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Wakili Digital</h3>
              <p className="text-gray-400">
                Professional websites for Kenyan professionals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#features" className="hover:text-white">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link href="#demo" className="hover:text-white">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:+254722000000" className="hover:text-white">0722 000 000</a></li>
                <li><a href="mailto:support@wakili.digital" className="hover:text-white">support@wakili.digital</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Wakili Digital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}