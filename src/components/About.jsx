import React from 'react';
import { BRAND_TAGLINE } from '../constants/assets';

/**
 * About Section Component
 * 
 * Introduces MediCare+ values, pharmacy services, and standard operating standards.
 */
function About() {
  return (
    <section id="about" className="py-16 bg-white border-b border-slate-200">
      <div className="medicare-container">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold tracking-wider text-brand-navy-700 uppercase bg-brand-navy-50 px-3 py-1 rounded-full border border-brand-navy-100">
            About MediCare+
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy-900 mt-3 mb-2">
            Dedicated to Modern, Accessible Healthcare
          </h2>
          <p className="text-sm sm:text-base text-brand-green-700 font-medium">
            {BRAND_TAGLINE}
          </p>
        </div>

        {/* Narrative & Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              At <strong className="text-brand-navy-900 font-semibold">MediCare+</strong>, our goal is to make essential pharmacy products, wellness formulations, and daily personal care accessible and transparent.
            </p>
            <p>
              We prioritize temperature-controlled handling, verified source distributors, and prompt dispatch to ensure that every household receives reliable medical and wellness care when they need it most.
            </p>
            <div className="p-4 bg-slate-50 border-l-4 border-brand-green-600 rounded-r-lg text-xs text-slate-600">
              <strong className="text-slate-800 font-semibold block mb-1">Store Notice:</strong>
              This storefront serves as a modern digital catalog ready for direct customer orders, home delivery, and future backend inventory management.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-subtle">
              <div className="w-9 h-9 rounded-lg bg-brand-green-100 text-brand-green-700 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-navy-900 text-sm mb-1">Quality Guaranteed</h3>
              <p className="text-xs text-slate-500">Every product meets strict standard hygiene and packaging guidelines.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-subtle">
              <div className="w-9 h-9 rounded-lg bg-brand-navy-100 text-brand-navy-700 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-navy-900 text-sm mb-1">Fast Delivery</h3>
              <p className="text-xs text-slate-500">Swift order fulfillment designed for urgent and daily healthcare needs.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-subtle">
              <div className="w-9 h-9 rounded-lg bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L3 11V5a2 2 0 012-2h11a2 2 0 012 2v3m-7 4h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-navy-900 text-sm mb-1">Customer Care</h3>
              <p className="text-xs text-slate-500">Friendly assistance for order tracking and product questions.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-subtle">
              <div className="w-9 h-9 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-brand-navy-900 text-sm mb-1">Secure Checkout</h3>
              <p className="text-xs text-slate-500">Safe and confidential transaction processing at all times.</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
