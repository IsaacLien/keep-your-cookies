import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo and brand */}
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🍪</span>
            <span className="font-display font-bold text-lg md:text-xl text-gray-900 hidden sm:block">
              Keep Your Cookies
            </span>
            <span className="font-display font-bold text-lg text-gray-900 sm:hidden">
              Keep Your Cookies
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="px-4 py-2 md:px-6 md:py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md text-sm md:text-base"
          >
            Get Free Analysis →
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;