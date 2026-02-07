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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailInputChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.monthlyRevenue || !formData.monthlyPayroll || !formData.monthlySoftware) {
      alert('Please fill in all fields');
      return;
    }
    
    setShowPopup(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    
    // Validate email form
    if (!emailData.name || !emailData.storeUrl) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log('Form Data:', formData);
    console.log('Email Data:', emailData);
    
    setShowPopup(false);
    setShowThankYou(true);
    
    // Reset forms
    setFormData({
      monthlyRevenue: '',
      monthlyPayroll: '',
      monthlySoftware: ''
    });
    setEmailData({
      name: '',
      storeUrl: ''
    });
    
    // Hide thank you message after 3 seconds
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const formatCurrency = (value) => {
    if (!value) return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(value);
  };

  return (
    <section id="form-section" className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
          How much are you <span className="text-red-600">bleeding</span>?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Enter your current costs below and we'll show you where the leaks are
        </p>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleFormSubmit} className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Monthly Revenue
                </label>
                <input
                  type="number"
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleInputChange}
                  placeholder="250000"
                  className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                />
                <div className="text-sm text-gray-500 mt-2">
                  {formData.monthlyRevenue && formatCurrency(formData.monthlyRevenue)}
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Monthly Payroll
                </label>
                <input
                  type="number"
                  name="monthlyPayroll"
                  value={formData.monthlyPayroll}
                  onChange={handleInputChange}
                  placeholder="45000"
                  className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                />
                <div className="text-sm text-gray-500 mt-2">
                  {formData.monthlyPayroll && formatCurrency(formData.monthlyPayroll)}
                </div>
              </div>
              
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Software Costs
                </label>
                <input
                  type="number"
                  name="monthlySoftware"
                  value={formData.monthlySoftware}
                  onChange={handleInputChange}
                  placeholder="8500"
                  className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                />
                <div className="text-sm text-gray-500 mt-2">
                  {formData.monthlySoftware && formatCurrency(formData.monthlySoftware)}
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                See my cost leaks 🔍
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Email Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Get Your Cost Report
            </h3>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={emailData.name}
                  onChange={handleEmailInputChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Store URL
                </label>
                <input
                  type="url"
                  name="storeUrl"
                  value={emailData.storeUrl}
                  onChange={handleEmailInputChange}
                  placeholder="https://yourstore.com"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Report
                </button>
              </div>
            </form>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              We'll send your report via email
            </p>
          </div>
        </div>
      )}
      
      {/* Thank You Message */}
      {showThankYou && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="font-semibold">✅ Report sent! Check your email.</p>
        </div>
      )}
    </section>
  );
};

export default FormSection;