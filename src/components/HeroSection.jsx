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
      
      {/* Floating cookies background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="absolute text-5xl sm:text-6xl opacity-15 animate-float-slow" style={{ top: '10%', left: '8%' }}>🍪</span>
        <span className="absolute text-4xl sm:text-5xl opacity-10 animate-float-medium" style={{ top: '20%', right: '12%' }}>🍪</span>
        <span className="absolute text-3xl sm:text-4xl opacity-15 animate-float-slow" style={{ top: '60%', left: '5%' }}>🍪</span>
        <span className="absolute text-6xl sm:text-7xl opacity-10 animate-float-medium" style={{ top: '70%', right: '8%' }}>🍪</span>
        <span className="absolute text-3xl opacity-10 animate-float-slow" style={{ top: '40%', left: '15%' }}>🍪</span>
        <span className="absolute text-4xl opacity-8 animate-float-medium" style={{ top: '85%', left: '20%' }}>🍪</span>
        <span className="absolute text-5xl opacity-10 animate-float-slow" style={{ top: '15%', right: '25%' }}>🍪</span>
      </div>

      {/* Monster peeking from left */}
      <div className="absolute bottom-0 left-0 pointer-events-none hidden sm:block">
        <img 
          src="/monsters/hero-monster.png" 
          alt="" 
          className="w-36 md:w-48 lg:w-56 opacity-30 translate-y-8 -translate-x-4"
          style={{ filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.2))' }}
        />
      </div>

      {/* Monster peeking from right */}
      <div className="absolute bottom-0 right-0 pointer-events-none hidden sm:block">
        <img 
          src="/monsters/shopify.png" 
          alt="" 
          className="w-32 md:w-44 lg:w-52 opacity-25 translate-y-10 translate-x-4 scale-x-[-1]"
          style={{ filter: 'drop-shadow(0 0 30px rgba(245, 158, 11, 0.2))' }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Cookie jar icon */}
        <div className="mb-8">
          <img 
            src="/images/cookie-jar.png" 
            alt="Cookie jar" 
            className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] animate-gentle-bob"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
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
          See my cost leaks
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
