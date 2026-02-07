import React from 'react';

const CaseStudySection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-600 mb-4">Case Study</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
            Real Results. Real Savings.
          </h2>
        </div>
        
        {/* Case Study Card */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden border border-gray-200">
          {/* Top bar with logo */}
          <div className="bg-gradient-to-r from-green-700 to-green-900 px-8 py-6 flex items-center justify-between">
            <div>
              <h3 className="text-white text-2xl font-bold">Real Provisions</h3>
              <p className="text-green-200 text-sm">Premium Care Package Company</p>
            </div>
            <div className="hidden sm:block text-white/60 text-sm">
              Client since 2025
            </div>
          </div>
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="p-8 text-center">
              <div className="text-4xl sm:text-5xl font-black text-green-600 mb-2">24%</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Payroll Reduced</div>
              <p className="text-xs text-gray-400 mt-2">Eliminated redundant roles</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl sm:text-5xl font-black text-blue-600 mb-2">39%</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">SaaS Costs Cut</div>
              <p className="text-xs text-gray-400 mt-2">Consolidated overlapping tools</p>
            </div>
            <div className="p-8 text-center">
              <div className="text-4xl sm:text-5xl font-black text-amber-600 mb-2">$47K</div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Monthly Savings</div>
              <p className="text-xs text-gray-400 mt-2">$564K annually</p>
            </div>
          </div>
          
          {/* Quote */}
          <div className="px-8 pb-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
              <svg className="w-8 h-8 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                We went from hemorrhaging money on tools we barely used to a lean, efficient operation. 
                The AI analysis revealed overlapping subscriptions and overstaffed departments we never noticed.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-gray-900">Mansal Denton</p>
                  <p className="text-sm text-gray-500">Founder & CEO, Real Provisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
