import React from 'react';

/**
 * Hero Section Component
 * 
 * Clean, typography-focused hero section highlighting the pharmacy's core mission
 * with direct call-to-action to browse products.
 */
function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-brand-navy-50/50 via-white to-slate-50 py-16 sm:py-24 border-b border-slate-200/80">
      <div className="medicare-container">
        
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-50 border border-brand-green-200 text-brand-green-800 text-xs sm:text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green-600 animate-pulse"></span>
            Trusted Online & Community Pharmacy
          </div>

          {/* Main Hero Heading */}
          <h1 className="hero-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-800 tracking-tight mb-4">
            Your Health, <span className="text-brand-green-600">Our Priority</span>
          </h1>

          {/* Subtitle / Introduction */}
          <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Welcome to <strong className="font-semibold text-brand-navy-700">MediCare+</strong>. We provide authentic healthcare essentials, over-the-counter wellness supplies, and daily personal care items delivered directly to your doorstep with care and precision.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <a
              href="#products"
              className="w-full sm:w-auto px-7 py-3.5 bg-brand-green-600 hover:bg-brand-green-700 text-white font-medium text-sm rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-500 text-center"
            >
              Shop Products
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-brand-navy-700 font-medium text-sm rounded-lg border border-slate-300 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 text-center"
            >
              About MediCare+
            </a>
          </div>

          {/* Key Value Propositions / Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-200 text-left">
            <div className="flex items-start gap-3 p-2">
              <div className="w-8 h-8 rounded-lg bg-brand-navy-50 text-brand-navy-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-brand-navy-800">100% Genuine</h2>
                <p className="text-[11px] sm:text-xs text-slate-500">Quality-checked essentials</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="w-8 h-8 rounded-lg bg-brand-green-50 text-brand-green-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-brand-navy-800">Prompt Service</h2>
                <p className="text-[11px] sm:text-xs text-slate-500">Fast order processing</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-brand-navy-800">Safe Packaging</h2>
                <p className="text-[11px] sm:text-xs text-slate-500">Hygienic sealed dispatch</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-2">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xs sm:text-sm font-semibold text-brand-navy-800">Support</h2>
                <p className="text-[11px] sm:text-xs text-slate-500">Dedicated assistance</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
