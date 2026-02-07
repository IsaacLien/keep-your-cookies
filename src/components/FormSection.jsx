import React, { useState } from 'react';

const FormSection = () => {
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    monthlyPayroll: '',
    monthlySoftware: ''
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [emailData, setEmailData] = useState({
    name: '',
    storeUrl: ''
  });
  
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

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
    if (!emailData.name || !emailData.storeUrl) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Form Data:', formData);
    console.log('Email Data:', emailData);
    setShowPopup(false);
    setShowThankYou(true);
    setFormData({ monthlyRevenue: '', monthlyPayroll: '', monthlySoftware: '' });
    setEmailData({ name: '', storeUrl: '' });
    setTimeout(() => setShowThankYou(false), 4000);
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency', currency: 'USD', minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="form-section" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            How much are you
            <span className="text-red-500"> leaking</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Enter your numbers. We'll find the waste.
          </p>
        </div>
        
        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 sm:p-10">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-5">
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
                {formData.monthlyRevenue && (
                  <p className="text-xs text-gray-500 mt-1.5 ml-1">{formatCurrency(formData.monthlyRevenue)}</p>
                )}
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
                {formData.monthlyPayroll && (
                  <p className="text-xs text-gray-500 mt-1.5 ml-1">{formatCurrency(formData.monthlyPayroll)}</p>
                )}
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
                {formData.monthlySoftware && (
                  <p className="text-xs text-gray-500 mt-1.5 ml-1">{formatCurrency(formData.monthlySoftware)}</p>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold text-lg py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]"
            >
              See my cost leaks →
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-600 mt-4">
            🔒 Your data is 100% confidential. We never share your numbers.
          </p>
        </div>
      </div>
      
      {/* Email Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-bold text-white mb-2">Your Report is Ready</h3>
              <p className="text-gray-400 text-sm">Tell us where to send your cost analysis</p>
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
                  className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3.5 rounded-xl transition-colors"
                >
                  Send Report
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
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50 animate-bounce">
          <p className="font-bold">✅ Report sent! Check your email.</p>
        </div>
      )}
    </section>
  );
};

export default FormSection;
