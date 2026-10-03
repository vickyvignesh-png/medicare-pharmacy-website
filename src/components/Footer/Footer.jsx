import React from 'react';
import { Link } from 'react-router-dom';
import { MEDICARE_LOGO_URL, BRAND_TAGLINE } from '../../constants/assets';
import './Footer.css';

/**
 * Footer Component
 * 
 * Simple, minimal footer featuring MediCare+ logo, tagline,
 * quick navigation links, contact placeholders, and copyright notice.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer-wrapper text-slate-300 pt-12 pb-8 border-t border-brand-navy-800">
      <div className="medicare-container">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-brand-navy-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-3">
            <Link to="/" className="inline-block bg-white p-2 rounded-lg shadow-sm" aria-label="MediCare+ Home">
              <img
                src={MEDICARE_LOGO_URL}
                alt="MediCare+ Pharmacy"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-xs text-brand-green-400 font-semibold tracking-wide">
              {BRAND_TAGLINE}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your dependable digital pharmacy for quality healthcare essentials, daily wellness, and first aid supplies.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="footer-link text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link text-slate-400 hover:text-white transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <a href="#contact" className="footer-link text-slate-400 hover:text-white transition-colors">
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Contact Us
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>100 Health Ave, Medical District, Suite 400</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@medicare-store.example</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} MediCare+. All rights reserved.</p>
          <p>Authentic Healthcare & Wellness Essentials</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
