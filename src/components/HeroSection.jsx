import React from 'react';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          Keep your <span className="text-amber-400">cookies</span>.
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We use AI to eliminate unnecessary payroll and software spend for e-commerce brands.
        </p>
        <button 
          onClick={scrollToForm}
          className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-xl px-12 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          See my cost
        </button>
        
        {/* Cookie floating animation */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="cookie-float absolute top-10 left-1/4 text-4xl animate-bounce">🍪</div>
            <div className="cookie-float absolute top-20 right-1/3 text-3xl animate-pulse">🍪</div>
            <div className="cookie-float absolute bottom-10 left-1/3 text-5xl animate-bounce delay-1000">🍪</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;