import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              🍪 Keep Your Cookies
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              AI-powered cost reduction for e-commerce brands.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Contact</h4>
            <div className="space-y-2 text-gray-500 text-sm">
              <p>hello@keepyourcookies.com</p>
              <p>100% confidential</p>
            </div>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Ready?</h4>
            <button 
              onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/15 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors border border-white/10"
            >
              Start Analysis →
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© 2026 Keep Your Cookies. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
