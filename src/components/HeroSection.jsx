import React from 'react';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#FFF0CC] to-[#FFE4A0] text-gray-900 overflow-hidden">
      
      {/* ===== DESKTOP HERO ===== */}
      <div className="hidden md:flex items-center justify-center min-h-screen px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div className="relative z-10">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6">
              Keep your
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">cookies.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed mb-10 font-light">
              We use AI to find and eliminate unnecessary payroll and software costs eating into your e-commerce margins.
            </p>
            
            <button 
              onClick={scrollToForm}
              className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.5)] hover:-translate-y-0.5"
            >
              See my cost leaks
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {/* Trust signal */}
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <span className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-amber-200 border-2 border-white flex items-center justify-center text-xs">🍪</span>
                <span className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center text-xs">🍪</span>
                <span className="w-8 h-8 rounded-full bg-red-200 border-2 border-white flex items-center justify-center text-xs">🍪</span>
              </span>
              <span>Trusted by e-commerce brands everywhere</span>
            </div>
          </div>

          {/* Right: Hero illustration */}
          <div className="relative flex items-center justify-center">
            <img 
              src="/images/hero-scene.png" 
              alt="Cookie monsters reaching for your revenue" 
              className="w-full max-w-xl animate-gentle-bob"
              style={{ 
                WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 40%, transparent 80%)',
                maskImage: 'radial-gradient(ellipse 90% 85% at center, black 40%, transparent 80%)',
                filter: 'drop-shadow(0 20px 60px rgba(245, 158, 11, 0.15))'
              }}
            />
            {/* Floating cookies around illustration */}
            <span className="absolute -top-8 right-10 text-4xl animate-float-slow">🍪</span>
            <span className="absolute bottom-4 -left-6 text-3xl animate-float-medium">🍪</span>
            <span className="absolute top-1/4 -right-4 text-2xl animate-float-slow" style={{ animationDelay: '1s' }}>🍪</span>
          </div>
        </div>
      </div>

      {/* ===== MOBILE HERO ===== */}
      <div className="flex md:hidden flex-col items-center justify-center min-h-screen px-6 py-16 relative">
        
        {/* Background: Monster hands reaching in */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="/images/hero-hands.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Cookie jar illustration */}
        <div className="relative z-10 mb-6">
          <img 
            src="/images/hero-scene.png" 
            alt="Cookie monsters reaching for your revenue" 
            className="w-80 h-auto animate-gentle-bob"
            style={{ 
              WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 75%)',
              maskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 75%)',
              filter: 'drop-shadow(0 12px 40px rgba(245, 158, 11, 0.15))'
            }}
          />
        </div>

        {/* Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tight mb-5">
            Keep your
            <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">cookies.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-sm mx-auto leading-relaxed mb-8 font-light">
            We use AI to find and eliminate unnecessary costs eating into your e-commerce margins.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgba(245,158,11,0.4)]"
          >
            See my cost leaks
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Monster characters peeking from bottom corners */}
        <div className="absolute bottom-0 left-0 z-5 pointer-events-none">
          <img 
            src="/monsters/shopify.png" 
            alt="" 
            className="w-24 opacity-40 translate-y-6 -translate-x-2"
          />
        </div>
        <div className="absolute bottom-0 right-0 z-5 pointer-events-none">
          <img 
            src="/monsters/klaviyo.png" 
            alt="" 
            className="w-20 opacity-35 translate-y-8 translate-x-2 scale-x-[-1]"
          />
        </div>
      </div>

      {/* Decorative bottom wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 60 1440 40V80H0V40Z" fill="#faf7f2"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
