import React, { useState, useMemo } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    monthlyPayroll: '',
    monthlySoftware: ''
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    storeUrl: ''
  });
  
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  // Dynamic savings estimate
  const savings = useMemo(() => {
    const payroll = parseFloat(formData.monthlyPayroll) || 0;
    const software = parseFloat(formData.monthlySoftware) || 0;
    if (payroll === 0 && software === 0) return null;
    
    const payrollSavings = payroll * 0.24; // 24% avg payroll reduction
    const softwareSavings = software * 0.39; // 39% avg SaaS reduction
    const total = payrollSavings + softwareSavings;
    
    return {
      monthly: total,
      annual: total * 12,
      payroll: payrollSavings,
      software: softwareSavings,
    };
  }, [formData.monthlyPayroll, formData.monthlySoftware]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.monthlyRevenue || !formData.monthlyPayroll || !formData.monthlySoftware) {
      alert('Please fill in all fields');
      return;
    }
    setShowPopup(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailData.name || !emailData.email || !emailData.storeUrl) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form Data:', formData);
    console.log('Email Data:', emailData);
    setShowPopup(false);
    setShowThankYou(true);
    setFormData({ monthlyRevenue: '', monthlyPayroll: '', monthlySoftware: '' });
    setEmailData({ name: '', email: '', storeUrl: '' });
    setTimeout(() => setShowThankYou(false), 4000);
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="form-section" className="bg-[#0a0a0a] py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            How much are you
            <span className="text-red-500"> leaking</span>?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Enter your numbers. We'll estimate the waste.
          </p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white/[0.04] backdrop-blur border border-white/10 rounded-3xl p-6 sm:p-10">
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Monthly Revenue
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleInputChange}
                  placeholder="250,000"
                  className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-lg placeholder:text-gray-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Monthly Payroll
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  name="monthlyPayroll"
                  value={formData.monthlyPayroll}
                  onChange={handleInputChange}
                  placeholder="45,000"
                  className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-lg placeholder:text-gray-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Monthly Software Costs
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  name="monthlySoftware"
                  value={formData.monthlySoftware}
                  onChange={handleInputChange}
                  placeholder="8,500"
                  className="w-full pl-10 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-lg placeholder:text-gray-600 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Dynamic Savings Preview */}
            {savings && savings.monthly > 0 && (
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-5 mt-2 animate-fade-in">
                <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-3">Estimated Savings</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-green-400">{formatCurrency(savings.monthly)}</span>
                  <span className="text-green-400/60 text-sm font-medium">/month</span>
                </div>
                <p className="text-green-400/50 text-sm">
                  That's <strong className="text-green-400">{formatCurrency(savings.annual)}/year</strong> back in your pocket
                </p>
                <div className="flex gap-4 mt-3 text-xs text-green-400/40">
                  <span>Payroll: ~{formatCurrency(savings.payroll)}</span>
                  <span>Software: ~{formatCurrency(savings.software)}</span>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] mt-2"
            >
              See my cost leaks →
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-600 mt-4 flex items-center justify-center gap-1.5">
            <span>🔒</span> Your data is 100% confidential. We never share your numbers.
          </p>
        </div>

        {/* Social proof under form */}
        <div className="flex items-center justify-center gap-3 mt-8 text-sm text-gray-500">
          <span className="text-amber-500 text-lg">⭐⭐⭐⭐⭐</span>
          <span>Trusted by 150+ e-commerce brands</span>
        </div>
      </div>
      
      {/* Email Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-bold text-white mb-2">Your Report is Ready</h3>
              <p className="text-gray-400 text-sm">Tell us where to send your personalized cost analysis</p>
            </div>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={emailData.name}
                  onChange={handleEmailInputChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleEmailInputChange}
                  placeholder="john@yourstore.com"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Store URL</label>
                <input
                  type="url"
                  name="storeUrl"
                  value={emailData.storeUrl}
                  onChange={handleEmailInputChange}
                  placeholder="https://yourstore.com"
                  className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold py-3.5 rounded-xl transition-colors border border-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold py-3.5 rounded-xl transition-colors"
                >
                  Send My Report →
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-600 text-center mt-4">
              We'll email your personalized cost analysis within 24 hours.
            </p>
          </div>
        </div>
      )}
      
      {/* Thank You Toast */}
      {showThankYou && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-2xl shadow-2xl z-50">
          <p className="font-bold text-center">✅ Report request received! Check your email within 24hrs.</p>
        </div>
      )}
    </section>
  );
};

export default FormSection;
