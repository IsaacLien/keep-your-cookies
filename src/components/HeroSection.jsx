import React from 'react';
import ScrollReveal from './ScrollReveal';

const HeroSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section relative min-h-screen bg-gradient-to-b from-[#FFF8E7] via-[#FFF0CC] to-[#FFE4A0] text-gray-900 overflow-hidden">
      
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
          </div>

          {/* Right: Composed hero — cookie jar + floating monsters */}
          <div className="relative flex items-center justify-center" style={{ minHeight: '500px' }}>
            {/* Central cookie jar */}
            <picture>
              <source srcSet="/images/cookie-jar.webp" type="image/webp" />
              <img 
                src="/images/cookie-jar.png" 
                alt="Cookie jar full of your revenue" 
                className="w-64 lg:w-72 xl:w-80 animate-gentle-bob relative z-10"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(180, 120, 60, 0.25))' }}
              />
            </picture>
            
            {/* Monsters reaching for the jar */}
            <picture>
              <source srcSet="/monsters/hero-monster.webp" type="image/webp" />
              <img 
                src="/monsters/hero-monster.png" 
                alt="" 
                className="absolute w-32 lg:w-36 animate-float-slow z-20"
                style={{ top: '-5%', left: '8%', transform: 'rotate(-12deg)', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
              />
            </picture>
            <picture>
              <source srcSet="/monsters/shopify.webp" type="image/webp" />
              <img 
                src="/monsters/shopify.png" 
                alt="" 
                className="absolute w-28 lg:w-32 animate-float-medium z-20"
                style={{ top: '5%', right: '5%', transform: 'rotate(10deg)', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
              />
            </picture>
            <picture>
              <source srcSet="/monsters/klaviyo.webp" type="image/webp" />
              <img 
                src="/monsters/klaviyo.png" 
                alt="" 
                className="absolute w-28 lg:w-32 animate-float-slow z-5"
                style={{ bottom: '5%', left: '2%', transform: 'rotate(8deg)', animationDelay: '0.5s', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
              />
            </picture>
            <picture>
              <source srcSet="/monsters/skio.webp" type="image/webp" />
              <img 
                src="/monsters/skio.png" 
                alt="" 
                className="absolute w-26 lg:w-30 animate-float-medium z-5"
                style={{ bottom: '0%', right: '8%', transform: 'rotate(-8deg) scaleX(-1)', animationDelay: '1s', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
              />
            </picture>
            <picture>
              <source srcSet="/monsters/refersion.webp" type="image/webp" />
              <img 
                src="/monsters/refersion.png" 
                alt="" 
                className="absolute w-24 lg:w-28 animate-float-slow z-5"
                style={{ top: '45%', right: '-2%', transform: 'rotate(15deg)', animationDelay: '1.5s', filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}
              />
            </picture>
            
            {/* Floating cookies */}
            <span className="absolute -top-4 right-16 text-4xl animate-float-slow z-30">🍪</span>
            <span className="absolute bottom-8 -left-2 text-3xl animate-float-medium z-30">🍪</span>
            <span className="absolute top-1/3 -right-4 text-2xl animate-float-slow z-30" style={{ animationDelay: '1s' }}>🍪</span>
          </div>
        </div>
      </div>

      {/* ===== MOBILE HERO ===== */}
      <div className="flex md:hidden flex-col items-center justify-center min-h-screen px-6 py-20 relative">
        
        {/* Composed illustration: cookie jar + monsters */}
        <div className="relative z-10 mb-8" style={{ width: '300px', height: '320px' }}>
          {/* Central cookie jar */}
          <picture>
            <source srcSet="/images/cookie-jar.webp" type="image/webp" />
            <img 
              src="/images/cookie-jar.png" 
              alt="Cookie jar full of your revenue" 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 animate-gentle-bob z-10"
              style={{ filter: 'drop-shadow(0 12px 30px rgba(180, 120, 60, 0.25))' }}
            />
          </picture>
          
          {/* Monsters around the jar */}
          <picture>
            <source srcSet="/monsters/hero-monster.webp" type="image/webp" />
            <img 
              src="/monsters/hero-monster.png" 
              alt="" 
              className="absolute w-24 animate-float-slow z-20"
              style={{ top: '-8%', left: '2%', transform: 'rotate(-10deg)', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.15))' }}
            />
          </picture>
          <picture>
            <source srcSet="/monsters/shopify.webp" type="image/webp" />
            <img 
              src="/monsters/shopify.png" 
              alt="" 
              className="absolute w-22 animate-float-medium z-20"
              style={{ top: '-2%', right: '0%', transform: 'rotate(10deg)', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.15))' }}
            />
          </picture>
          <picture>
            <source srcSet="/monsters/klaviyo.webp" type="image/webp" />
            <img 
              src="/monsters/klaviyo.png" 
              alt="" 
              className="absolute w-22 animate-float-slow z-5"
              style={{ bottom: '0%', left: '0%', transform: 'rotate(8deg)', animationDelay: '0.5s', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.15))' }}
            />
          </picture>
          <picture>
            <source srcSet="/monsters/skio.webp" type="image/webp" />
            <img 
              src="/monsters/skio.png" 
              alt="" 
              className="absolute w-20 animate-float-medium z-5"
              style={{ bottom: '2%', right: '2%', transform: 'rotate(-8deg) scaleX(-1)', animationDelay: '1s', filter: 'drop-shadow(0 6px 15px rgba(0,0,0,0.15))' }}
            />
          </picture>
          
          {/* Floating cookies */}
          <span className="absolute -top-2 right-8 text-3xl animate-float-slow z-30">🍪</span>
          <span className="absolute bottom-4 -left-2 text-2xl animate-float-medium z-30">🍪</span>
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
