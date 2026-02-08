import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section className="bg-[#faf7f2] py-20 sm:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            A small team obsessed with one thing: stopping the bleed.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Story */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-gray-100 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  We've been in your shoes.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  We started as e-commerce operators. We saw our own margins get devoured by 
                  Shopify apps, email tools, affiliate platforms, and bloated payroll. So we 
                  built the AI we wished existed.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  Our system scans your entire operation — payroll structure, software stack, 
                  operational costs — and identifies exactly where money is being wasted.
                </p>
                <p className="text-gray-900 font-semibold text-sm sm:text-base">
                  Every day you wait is money lost. We help you plug the leaks immediately.
                </p>
              </div>
              
              {/* Quote */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 sm:p-6">
                <p className="text-amber-900 font-medium italic text-sm sm:text-base">
                  "Most e-commerce brands unknowingly hemorrhage 20–40% of their profits on redundant 
                  tools and overstaffing."
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right - Illustration + Stats */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {/* Branded Element */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center border border-amber-100/50 min-h-[240px] text-center">
                <div className="text-6xl mb-4">🍪</div>
                <p className="text-amber-800 font-bold text-lg mb-1">Built by e-commerce operators,</p>
                <p className="text-amber-800 font-bold text-lg">for e-commerce operators.</p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1">$2.3M+</div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Saved for clients</p>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1">150+</div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Brands analyzed</p>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1">31%</div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Avg. cost reduction</p>
                </div>
                <div className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-gray-100 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1">24hr</div>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">Report turnaround</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;