import React from 'react';

const CaseStudySection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Real Results from Real Brands
        </h2>
        
        <div className="bg-gray-50 rounded-2xl p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo and Company Info */}
            <div className="text-center md:text-left">
              <div className="mb-8">
                {/* Placeholder for Real Provisions logo */}
                <div className="w-48 h-24 bg-gradient-to-r from-green-600 to-green-800 rounded-lg mx-auto md:mx-0 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Real Provisions</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                "Keep Your Cookies helped us identify massive inefficiencies in our payroll and software stack. 
                The AI analysis revealed overlapping tools and overstaffed departments we never noticed."
              </p>
              
              {/* Team photo placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 text-lg">Real Provisions Team</span>
              </div>
              <p className="text-sm text-gray-500">Mansal Denton, Founder & CEO</p>
            </div>
            
            {/* Stats */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-2xl p-8 mb-4">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-5xl font-bold text-green-700">↓ 24%</span>
                  </div>
                  <p className="text-2xl font-semibold text-green-800 mt-2">Payroll costs</p>
                  <p className="text-gray-600 mt-1">Eliminated redundant roles and optimized team structure</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-2xl p-8">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-5xl font-bold text-blue-700">↓ 39%</span>
                  </div>
                  <p className="text-2xl font-semibold text-blue-800 mt-2">SaaS costs</p>
                  <p className="text-gray-600 mt-1">Consolidated overlapping tools and found better alternatives</p>
                </div>
              </div>
              
              <div className="text-center bg-amber-50 rounded-2xl p-6">
                <p className="text-lg font-semibold text-amber-800">
                  💰 Total monthly savings: <span className="text-2xl">$47,000</span>
                </p>
                <p className="text-amber-700 mt-2">That's over $564,000 per year back in their pocket</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 italic">
            "We went from hemorrhaging money on tools we barely used to a lean, efficient operation. 
            Best decision we made this year."
          </p>
          <p className="text-gray-500 mt-2">— Real Provisions Leadership Team</p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;