import React from 'react';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                🍪 Keep Your Cookies
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-powered cost reduction for e-commerce brands.
              </p>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>hello@keepyourcookies.com</p>
                <p>100% confidential</p>
              </div>
            </div>
            
            {/* CTA */}
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Ready?</h4>
              <button 
                onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Start Analysis →
              </button>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">© 2026 Keep Your Cookies. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;