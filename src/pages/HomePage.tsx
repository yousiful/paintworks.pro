import { useState, useEffect } from 'react';
import {
  PaintBucket,
  CheckCircle2,
  Star,
  Shield,
  Award,
  Users,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClaimOffer = (offerType: 'community' | 'popcorn') => {
    if (offerType === 'popcorn') {
      window.location.href = 'https://go.paintworks.pro/popcorn-ceiling';
    } else {
      window.location.href = 'https://go.paintworks.pro/community';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Hero Section */}
      <section aria-label="Hero section" className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMyIgcj0iMyIvPjxjaXJjbGUgY3g9IjMiIGN5PSIzMCIgcj0iMyIvPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-300"></div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-yellow-300 to-orange-400 p-5 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                <PaintBucket className="w-16 h-16 text-white drop-shadow-lg" aria-label="Professional painting services icon" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 drop-shadow-lg">
              Professional Painting Services San Diego
            </h1>

            <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
              Expert interior and exterior painting contractors in San Diego County. Licensed, insured, and trusted by 1000+ homeowners. Save up to $400 on premium painting services.
            </p>

            <button
              onClick={() => handleClaimOffer('community')}
              className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 hover:from-yellow-500 hover:via-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
              aria-label="Claim exclusive painting service discount"
            >
              Claim Your Exclusive Offer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-orange-50 to-transparent"></div>
      </section>

      {/* Trust Indicators */}
      <section aria-label="Why choose Paintworks" className={`py-12 bg-gradient-to-r from-pink-100 via-yellow-100 to-blue-100 border-b-4 border-gradient-to-r from-pink-300 to-blue-300 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Why Choose Our San Diego Painting Contractors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-2xl mb-3 shadow-lg">
                <Award className="w-12 h-12 text-white" aria-label="Licensed and insured painting contractor" />
              </div>
              <p className="font-semibold text-purple-900">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-3 rounded-2xl mb-3 shadow-lg">
                <Star className="w-12 h-12 text-white" aria-label="Five star rated painting service" />
              </div>
              <p className="font-semibold text-orange-900">5-Star Rated</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-3 rounded-2xl mb-3 shadow-lg">
                <Users className="w-12 h-12 text-white" aria-label="Over 1000 satisfied customers" />
              </div>
              <p className="font-semibold text-teal-900">1000+ Happy Clients</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-2xl mb-3 shadow-lg">
                <Shield className="w-12 h-12 text-white" aria-label="Satisfaction guarantee" />
              </div>
              <p className="font-semibold text-blue-900">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Gallery */}
      <section aria-label="Our recent work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 delay-250 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
              Recent Projects in San Diego
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              From interior loft transformations to stunning exterior fence staining — see the quality we bring to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl shadow-xl group transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img
                  src="/WhatsApp_Image_2026-03-10_at_8.59.02_PM.jpeg"
                  alt="Freshly painted interior hallway with clean white walls and modern finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">Interior Painting</span>
                  <p className="text-white font-semibold mt-2 text-lg">Loft Interior — Downtown San Diego</p>
                </div>
              </div>
            </div>

            <div className={`overflow-hidden rounded-3xl shadow-xl group transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative h-48 md:h-full">
                <img
                  src="/WhatsApp_Image_2026-03-10_at_8.58.58_PM.jpeg"
                  alt="Beautifully stained cedar wood privacy fence with ocean view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-green-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">Fence Staining</span>
                  <p className="text-white font-semibold mt-1">Cedar Fence — Coastal SD</p>
                </div>
              </div>
            </div>

            <div className={`overflow-hidden rounded-3xl shadow-xl group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative h-48 md:h-full">
                <img
                  src="/WhatsApp_Image_2026-03-10_at_8.59.02_PM_(2).jpeg"
                  alt="Modern open kitchen with freshly painted white walls and clean finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-blue-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">Interior Painting</span>
                  <p className="text-white font-semibold mt-1">Kitchen & Living — Loft Unit</p>
                </div>
              </div>
            </div>

            <div className={`col-span-2 overflow-hidden rounded-3xl shadow-xl group transition-all duration-1000 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative h-56 md:h-64">
                <img
                  src="/WhatsApp_Image_2026-03-10_at_8.59.02_PM_(1).jpeg"
                  alt="Professionally painted kitchen cabinets with clean modern finish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-orange-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">Cabinet Painting</span>
                  <p className="text-white font-semibold mt-2 text-lg">Kitchen Cabinet Refresh — San Diego</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="tel:+16193047732"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105"
            >
              Get a Free Estimate — Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section aria-label="Special offers" className="py-20 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mb-4">
              San Diego Painting Specials - Save Up to $400
            </h2>
            <p className="text-xl text-purple-900 max-w-2xl mx-auto font-medium">
              Choose the perfect painting package for your home transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Offer 1: $400 Off Painting */}
            <div className={`bg-white rounded-3xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 delay-400 overflow-hidden border-4 border-pink-200 hover:border-pink-400 transform hover:-rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-300 rounded-full opacity-20 -ml-12 -mb-12"></div>
                <div className="flex items-center gap-2 mb-2 relative">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wider">Most Popular</span>
                </div>
                <h3 className="text-3xl font-bold mb-2 relative">Premium Painting Package</h3>
                <div className="flex items-baseline gap-2 relative">
                  <span className="text-5xl font-bold">$400</span>
                  <span className="text-2xl">OFF</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Complete interior or exterior painting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Professional paint patching included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Exclusive community access & tips</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Premium quality paint & materials</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-4 mb-6 border-2 border-yellow-300">
                  <p className="text-sm text-orange-800 mb-1 font-semibold">Claim this offer for only</p>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600">$7</p>
                </div>

                <button
                  onClick={() => handleClaimOffer('community')}
                  className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 hover:from-pink-600 hover:via-rose-600 hover:to-orange-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Claim Your Offer Now
                </button>
              </div>
            </div>

            {/* Offer 2: $50 Off Drywall */}
            <div className={`bg-white rounded-3xl shadow-2xl hover:shadow-teal-500/50 transition-all duration-500 delay-500 overflow-hidden border-4 border-teal-200 hover:border-teal-400 transform hover:rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 rounded-full opacity-20 -ml-12 -mb-12"></div>
                <div className="h-8 mb-2"></div>
                <h3 className="text-3xl font-bold mb-2 relative">Drywall Repair Special</h3>
                <div className="flex items-baseline gap-2 relative">
                  <span className="text-5xl font-bold">$50</span>
                  <span className="text-2xl">OFF</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Expert drywall repair & patching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Seamless texture matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Professional finish guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Add painting for $400 off</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-4 mb-6 border-2 border-cyan-300">
                  <p className="text-sm text-teal-800 mb-1 font-semibold">Claim this offer for only</p>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">$7</p>
                </div>

                <button
                  onClick={() => handleClaimOffer('community')}
                  className="w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Claim Your Offer Now
                </button>
              </div>
            </div>

            {/* Offer 3: $200 Off Popcorn Ceiling */}
            <div className={`bg-white rounded-3xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 delay-600 overflow-hidden border-4 border-purple-200 hover:border-purple-400 transform hover:-rotate-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-10 -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-300 rounded-full opacity-20 -ml-12 -mb-12"></div>
                <div className="h-8 mb-2"></div>
                <h3 className="text-3xl font-bold mb-2 relative">Popcorn Ceiling Removal</h3>
                <div className="flex items-baseline gap-2 relative">
                  <span className="text-5xl font-bold">$200</span>
                  <span className="text-2xl">OFF</span>
                </div>
              </div>

              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Complete popcorn ceiling removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Smooth, modern finish application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Add painting for $400 off</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">Bonus $25 value added</span>
                  </li>
                </ul>

                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-4 mb-6 border-2 border-purple-300">
                  <p className="text-sm text-purple-800 mb-1 font-semibold">Claim this offer for only</p>
                  <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">$7</p>
                </div>

                <button
                  onClick={() => handleClaimOffer('popcorn')}
                  className="w-full bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 hover:from-purple-600 hover:via-violet-600 hover:to-indigo-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Claim Your Offer Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Calendar Section */}
      <section aria-label="Schedule appointment" className="py-20 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 mb-4">
              Schedule Your Free Painting Estimate
            </h2>
            <p className="text-xl text-orange-900 font-medium">
              Book a convenient time for your free in-home consultation
            </p>
          </div>

          <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200 transition-all duration-1000 delay-750 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <iframe
              src="https://safeclick.kenjiai.com/widget/booking/KV7Jl8QjQYI3tMPWXxKV"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
              scrolling="no"
              id="KV7Jl8QjQYI3tMPWXxKV_1773106972854"
              title="Schedule Free Painting Estimate - Paintworks San Diego"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-label="Customer testimonials" className="py-20 bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 mb-4">
              San Diego's Top-Rated Painting Contractors
            </h2>
            <div className="flex justify-center gap-1 mb-2" role="img" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-500 text-yellow-500 drop-shadow-lg" aria-hidden="true" />
              ))}
            </div>
            <p className="text-orange-900 font-semibold">Rated 5.0 out of 5 from over 500 verified customer reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                content: "Paintworks transformed our living room beyond our expectations. The attention to detail and professionalism were outstanding. Highly recommend!"
              },
              {
                name: "Michael Chen",
                role: "Property Manager",
                content: "We've used Paintworks for multiple properties. They're always on time, professional, and deliver exceptional results. Our go-to painting company."
              },
              {
                name: "Emily Rodriguez",
                role: "Business Owner",
                content: "The popcorn ceiling removal made such a difference in our office. The team was efficient, clean, and the final result looks amazing."
              }
            ].map((testimonial, index) => {
              const colors = [
                { bg: 'from-pink-50 to-rose-50', border: 'border-pink-300', text: 'text-pink-900' },
                { bg: 'from-orange-50 to-yellow-50', border: 'border-orange-300', text: 'text-orange-900' },
                { bg: 'from-purple-50 to-indigo-50', border: 'border-purple-300', text: 'text-purple-900' }
              ];
              const color = colors[index];
              return (
                <div key={index} className={`bg-gradient-to-br ${color.bg} rounded-3xl p-6 shadow-2xl transition-all duration-1000 border-4 ${color.border} transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${900 + index * 100}ms` }}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-slate-800 mb-4 italic font-medium">"{testimonial.content}"</p>
                  <div>
                    <p className={`font-bold ${color.text}`}>{testimonial.name}</p>
                    <p className={`text-sm ${color.text} opacity-75`}>{testimonial.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
