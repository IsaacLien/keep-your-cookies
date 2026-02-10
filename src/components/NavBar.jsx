import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">🍪</span>
            <span className="font-bold text-[17px] tracking-tight text-gray-900">
              Keep Your Cookies
            </span>
          </a>

          {/* CTA */}
          <button
            onClick={scrollToForm}
            className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            Get Free Analysis
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavBar;
