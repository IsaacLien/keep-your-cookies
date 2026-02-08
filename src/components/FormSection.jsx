import React, { useState, useMemo } from 'react';
import { submitForm } from '../utils/submitForm';
import ScrollReveal from './ScrollReveal';

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

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!emailData.name || !emailData.email || !emailData.storeUrl) {
      alert('Please fill in all fields');
      return;
    }
    
    // Submit the form data using the submitForm utility
    try {
      const result = await submitForm({ ...formData, ...emailData });
      console.log('Form submission successful:', result);
    } catch (error) {
      console.error('Form submission error:', error);
    }
    
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
    <section id="form-section" className="bg-gradient-to-b from-[#FFF8E7] to-[#FFF0CC] py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            How much are you
            <span className="text-red-600"> leaking</span>?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Enter your numbers. We'll estimate the waste.
          </p>
        </ScrollReveal>
        
        {/* Form Card */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white border border-amber-100 rounded-3xl p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
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
                  className="w-full pl-10 pr-4 py-4 bg-amber-50 border border-amber-200 rounded-xl text-gray-900 text-lg placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
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
                  className="w-full pl-10 pr-4 py-4 bg-amber-50 border border-amber-200 rounded-xl text-gray-900 text-lg placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
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
                  className="w-full pl-10 pr-4 py-4 bg-amber-50 border border-amber-200 rounded-xl text-gray-900 text-lg placeholder:text-gray-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500/30 transition-colors"
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
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md mt-2"
            >
              See my cost leaks →
            </button>
          </form>
          
          <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1.5">
            <span>🔒</span> Your data is 100% confidential. We never share your numbers.
          </p>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Email Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white border border-amber-200 rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Report is Ready</h3>
              <p className="text-gray-600 text-sm">Tell us where to send your personalized cost analysis</p>
            </div>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={emailData.name}
                  onChange={handleEmailInputChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3.5 bg-amber-50 border border-amber-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={emailData.email}
                  onChange={handleEmailInputChange}
                  placeholder="john@yourstore.com"
                  className="w-full px-4 py-3.5 bg-amber-50 border border-amber-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Store URL</label>
                <input
                  type="url"
                  name="storeUrl"
                  value={emailData.storeUrl}
                  onChange={handleEmailInputChange}
                  placeholder="https://yourstore.com"
                  className="w-full px-4 py-3.5 bg-amber-50 border border-amber-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:border-amber-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl transition-colors border border-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
                >
                  Send My Report →
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
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
