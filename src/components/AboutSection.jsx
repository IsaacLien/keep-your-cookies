import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-[#faf7f2] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A small team obsessed with one thing: stopping the bleed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Story */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                We've been in your shoes.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We started as e-commerce operators. We saw our own margins get devoured by 
                Shopify apps, email tools, affiliate platforms, and bloated payroll. So we 
                built the AI we wished existed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our system scans your entire operation — payroll structure, software stack, 
                operational costs — and identifies exactly where money is being wasted.
              </p>
              <p className="text-gray-900 font-semibold">
                Every day you wait is money lost. We help you plug the leaks immediately.
              </p>
            </div>
            
            {/* Quote */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-6">
              <p className="text-amber-900 font-medium italic">
                "Most e-commerce brands unknowingly hemorrhage 20–40% of their profits on redundant 
                tools and overstaffing."
              </p>
            </div>
          </div>
          
          {/* Right - Stats + Image placeholder */}
          <div className="space-y-6">
            {/* Image placeholder */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-64 flex items-center justify-center border border-amber-200/50">
              <div className="text-center">
                <div className="text-5xl mb-3">🏗️</div>
                <p className="text-amber-800 font-semibold">Built by operators,</p>
                <p className="text-amber-800 font-semibold">for operators.</p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-amber-600 mb-1">$2.3M+</div>
                <p className="text-sm text-gray-500 font-medium">Saved for clients</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-amber-600 mb-1">150+</div>
                <p className="text-sm text-gray-500 font-medium">Brands analyzed</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-amber-600 mb-1">31%</div>
                <p className="text-sm text-gray-500 font-medium">Avg. cost reduction</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl font-black text-amber-600 mb-1">24hr</div>
                <p className="text-sm text-gray-500 font-medium">Report turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
