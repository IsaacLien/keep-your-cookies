import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Who We Are
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="order-2 md:order-1">
            <div className="w-full h-80 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl shadow-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-gray-700 font-semibold text-xl">Our Mission</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              We Stop the Bleeding
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              E-commerce brands are losing thousands every month to software bloat and payroll inefficiencies. 
              We use cutting-edge AI to analyze your entire operation and identify exactly where your money is going.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI scans your payroll, software stack, and operational costs to find redundancies, overpayments, 
              and opportunities for consolidation. We've helped brands save up to 40% on their monthly expenses.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Every day you wait is money lost.</strong> Let us show you where the leaks are 
              and help you plug them immediately.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">$2.3M+</div>
                <p className="text-gray-600">Saved for clients</p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl font-bold text-amber-600 mb-2">150+</div>
                <p className="text-gray-600">Brands analyzed</p>
              </div>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-8">
              <p className="text-lg font-semibold text-amber-800">
                "Most e-commerce brands are unknowingly hemorrhaging 20-40% of their profits on redundant tools and overstaffing."
              </p>
              <p className="text-amber-700 mt-2">— Our Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;