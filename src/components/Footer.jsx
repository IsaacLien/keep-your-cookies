import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0F] relative overflow-hidden">
      {/* Top CTA banner */}
      <div className="border-b border-white/5">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-20 text-center">
          <ScrollReveal>
            <span className="text-5xl sm:text-6xl mb-6 block">🍪</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
              Stop feeding the monsters.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8 font-light">
              Get your free cost analysis and start keeping more of what you earn.
            </p>
            <button 
              onClick={scrollToForm}
              className="btn-primary text-base sm:text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              Get Free Analysis
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🍪</span>
            <span className="font-bold text-white text-sm tracking-tight">Keep Your Cookies</span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="mailto:hello@keepyourcookies.com" className="hover:text-gray-300 transition-colors">
              hello@keepyourcookies.com
            </a>
            <span className="hidden sm:block text-gray-700">·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Keep Your Cookies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
