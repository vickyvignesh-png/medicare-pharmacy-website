import React from 'react';
import { MEDICARE_LOGO_URL, BRAND_TAGLINE } from '../constants/assets';

/**
 * Footer Component
 * 
 * Displays MediCare+ brand identity, navigation links, clearly marked contact
 * placeholders, and copyright notice.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-brand-navy-900 text-slate-300 pt-16 pb-12 border-t border-brand-navy-800">
      <div className="medicare-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-navy-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#hero" className="inline-block bg-white p-2.5 rounded-lg shadow-sm">
              <img
                src={MEDICARE_LOGO_URL}
                alt="MediCare+ Pharmacy"
                className="h-9 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <p className="text-xs text-brand-green-400 font-semibold tracking-wide">
              {BRAND_TAGLINE}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your dependable neighborhood and digital pharmacy storefront for quality healthcare essentials, daily wellness, and first aid supplies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-brand-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-slate-400 hover:text-brand-green-400 transition-colors">
                  Our Products (10 Essentials)
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-brand-green-400 transition-colors">
                  About MediCare+
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-brand-green-400 transition-colors">
                  Contact & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (Marked as Sample Placeholders) */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us <span className="text-[10px] lowercase text-slate-500 font-normal">(Sample)</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>100 Health Ave, Medical District, Suite 400 <em className="text-slate-500">[Demo]</em></span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (800) 555-0199 <em className="text-slate-500">[Demo]</em></span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@medicare-store.example <em className="text-slate-500">[Demo]</em></span>
              </li>
            </ul>
          </div>

          {/* Column 4: Store Hours & Backend Readiness Note */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Pharmacy Hours
            </h3>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="text-white font-medium">8:00 AM – 9:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white font-medium">9:00 AM – 8:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium">10:00 AM – 6:00 PM</span>
              </p>
            </div>
            <div className="mt-4 p-2.5 rounded bg-brand-navy-800/80 border border-brand-navy-700 text-[11px] text-slate-400">
              <span className="text-brand-green-400 font-medium">Backend Ready:</span> API layer set up for upcoming Node.js & MongoDB product management.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} MediCare+. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Demonstration Pharmacy Storefront • Designed for customer-facing healthcare shopping.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
