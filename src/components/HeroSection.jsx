import React from 'react';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10 text-sm text-gray-400">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          AI-Powered Cost Analysis
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tight">
          Keep your
          <br />
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">cookies.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-14 text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
          We use AI to eliminate unnecessary payroll and software spend for e-commerce brands.
        </p>
        
        <button 
          onClick={scrollToForm}
          className="group relative bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)]"
        >
          See my cost
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/40 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
