import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section relative min-h-[100dvh] gradient-hero overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="grain absolute inset-0 pointer-events-none" />
      
      {/* Floating cookies background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '12%', left: '8%', size: '42px', delay: 0, dur: 7 },
          { top: '18%', right: '12%', size: '32px', delay: 1.5, dur: 9 },
          { top: '60%', left: '5%', size: '28px', delay: 3, dur: 8 },
          { top: '75%', right: '8%', size: '36px', delay: 0.5, dur: 10 },
          { top: '40%', right: '4%', size: '24px', delay: 2, dur: 6 },
          { top: '85%', left: '15%', size: '20px', delay: 4, dur: 7 },
        ].map((cookie, i) => (
          <motion.span
            key={i}
            className="absolute opacity-40"
            style={{ 
              top: cookie.top, 
              left: cookie.left, 
              right: cookie.right,
              fontSize: cookie.size 
            }}
            animate={{ 
              y: [0, -20, 10, 0], 
              rotate: [0, 8, -5, 0] 
            }}
            transition={{ 
              duration: cookie.dur, 
              repeat: Infinity, 
              delay: cookie.delay,
              ease: 'easeInOut' 
            }}
          >
            🍪
          </motion.span>
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex items-center justify-center min-h-[100dvh] px-5 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* ===== DESKTOP ===== */}
          <div className="hidden md:grid grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 bg-amber-100/60 border border-amber-200/50 rounded-full px-4 py-1.5 mb-7">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-amber-800">AI-Powered Cost Analysis</span>
                </div>

                <h1 className="text-[3.5rem] lg:text-[4.5rem] xl:text-[5.25rem] font-black leading-[0.92] tracking-[-0.03em] text-gray-900 mb-6">
                  Keep your
                  <br />
                  <span className="gradient-text-warm">cookies.</span>
                </h1>
                
                <p className="text-lg lg:text-xl text-gray-500 max-w-[480px] leading-relaxed mb-10 font-light">
                  We use AI to find and eliminate the unnecessary payroll and software costs 
                  devouring your e-commerce margins.
                </p>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={scrollToForm}
                    className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                  >
                    See my cost leaks
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <span className="text-sm text-gray-400 font-medium">Free · No card required</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Hero Image */}
            <motion.div 
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="relative">
                <picture>
                  <source srcSet="/images/hero-scene-reaching.webp" type="image/webp" />
                  <img 
                    src="/images/hero-scene-reaching.png" 
                    alt="Monsters reaching for your cookie jar — representing SaaS costs eating your margins" 
                    className="w-full max-w-[520px] xl:max-w-[580px] animate-gentle-bob"
                    style={{ filter: 'drop-shadow(0 30px 60px rgba(180, 120, 60, 0.15))' }}
                  />
                </picture>
                
                {/* Floating stat badges */}
                <motion.div 
                  className="absolute -left-6 top-1/4 glass rounded-2xl p-3 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 text-xl">📉</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">-31% costs</p>
                      <p className="text-[10px] text-gray-400">avg. savings</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute -right-4 bottom-1/4 glass rounded-2xl p-3 shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 text-xl">💰</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">$2.3M+</p>
                      <p className="text-[10px] text-gray-400">saved for clients</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ===== MOBILE ===== */}
          <div className="flex md:hidden flex-col items-center text-center pt-24 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-amber-100/60 border border-amber-200/50 rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-amber-800">AI-Powered Cost Analysis</span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="relative w-64 sm:w-72 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <picture>
                <source srcSet="/images/hero-scene-reaching.webp" type="image/webp" />
                <img 
                  src="/images/hero-scene-reaching.png" 
                  alt="Cookie monsters eating your margins" 
                  className="w-full animate-gentle-bob"
                  style={{ filter: 'drop-shadow(0 15px 30px rgba(180, 120, 60, 0.15))' }}
                />
              </picture>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-[2.75rem] sm:text-5xl font-black leading-[0.92] tracking-[-0.03em] text-gray-900 mb-4">
                Keep your
                <br />
                <span className="gradient-text-warm">cookies.</span>
              </h1>
              
              <p className="text-base text-gray-500 max-w-sm mx-auto leading-relaxed mb-8 font-light">
                AI finds and eliminates the unnecessary costs devouring your e-commerce margins.
              </p>
              
              <button 
                onClick={scrollToForm}
                className="btn-primary text-base px-8 py-3.5 inline-flex items-center gap-2"
              >
                See my cost leaks
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <p className="text-xs text-gray-400 mt-3">Free · No card required</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 45 1440 30V60H0V30Z" fill="#FFFBF5"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
