import { useState, useMemo } from 'react';
import { submitForm } from '../utils/submitForm';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const savings = useMemo(() => {
    const payroll = parseFloat(formData.monthlyPayroll) || 0;
    const software = parseFloat(formData.monthlySoftware) || 0;
    if (payroll === 0 && software === 0) return null;
    
    const payrollSavings = payroll * 0.24;
    const softwareSavings = software * 0.39;
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
      return;
    }
    setShowPopup(true);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!emailData.name || !emailData.email || !emailData.storeUrl) return;
    
    try {
      await submitForm({ ...formData, ...emailData });
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

  const inputClasses = (field) => `w-full pl-10 pr-4 py-4 bg-gray-50/80 border rounded-xl text-gray-900 text-lg placeholder:text-gray-300 transition-all duration-300 ${
    focusedField === field 
      ? 'border-amber-400 ring-4 ring-amber-100/50 bg-white' 
      : 'border-gray-200/80 hover:border-gray-300'
  }`;

  return (
    <section id="form-section" className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFBF5] via-[#FFF8E7] to-[#FFF0CC]" />
      
      {/* Grain */}
      <div className="grain absolute inset-0 pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
            Free Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-black text-gray-900 mb-4 tracking-tight leading-tight">
            How much are you{' '}
            <span className="text-red-500 italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>leaking</span>?
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto font-light">
            Enter your numbers. We'll estimate the waste — and show you how to stop it.
          </p>
        </ScrollReveal>
        
        {/* Form Card */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white border border-gray-100/80 rounded-3xl p-6 sm:p-10 shadow-[0_4px_40px_rgba(0,0,0,0.04)]">
            <form onSubmit={handleFormSubmit} className="space-y-5">
              {[
                { label: 'Monthly Revenue', name: 'monthlyRevenue', placeholder: '250,000' },
                { label: 'Monthly Payroll', name: 'monthlyPayroll', placeholder: '45,000' },
                { label: 'Monthly Software Costs', name: 'monthlySoftware', placeholder: '8,500' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 tracking-wide">
                    {field.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg font-medium">$</span>
                    <input
                      type="number"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      placeholder={field.placeholder}
                      className={inputClasses(field.name)}
                    />
                  </div>
                </div>
              ))}

              {/* Dynamic Savings Preview */}
              <AnimatePresence>
                {savings && savings.monthly > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200/40 rounded-2xl p-5">
                      <p className="text-green-600 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Estimated Savings
                      </p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-3xl sm:text-4xl font-black text-green-600 tracking-tight">{formatCurrency(savings.monthly)}</span>
                        <span className="text-green-500/60 text-sm font-medium">/month</span>
                      </div>
                      <p className="text-green-600/50 text-sm">
                        That's <strong className="text-green-600">{formatCurrency(savings.annual)}/year</strong> back in your pocket
                      </p>
                      <div className="flex gap-4 mt-3 text-xs text-green-500/40">
                        <span>Payroll: ~{formatCurrency(savings.payroll)}</span>
                        <span>Software: ~{formatCurrency(savings.software)}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button
                type="submit"
                className="w-full btn-primary text-lg py-4 mt-2 flex items-center justify-center gap-2"
              >
                See my cost leaks
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
            
            <p className="text-center text-xs text-gray-400 mt-5 flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Your data is 100% confidential. We never share your numbers.
            </p>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Email Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-5"
            onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-7 sm:p-8 max-w-md w-full shadow-2xl border border-gray-100"
            >
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Your Report is Ready</h3>
                <p className="text-gray-500 text-sm">Tell us where to send your personalized cost analysis</p>
              </div>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                {[
                  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'John Smith' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@yourstore.com' },
                  { label: 'Store URL', name: 'storeUrl', type: 'url', placeholder: 'https://yourstore.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={emailData[field.name]}
                      onChange={handleEmailInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3.5 bg-gray-50/80 border border-gray-200/80 rounded-xl text-gray-900 placeholder:text-gray-300 focus:border-amber-400 focus:ring-4 focus:ring-amber-100/50 focus:bg-white focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                ))}
                
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl transition-colors border border-gray-200/80"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-primary py-3.5 text-base"
                  >
                    Send My Report →
                  </button>
                </div>
              </form>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                We'll email your personalized cost analysis within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Thank You Toast */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-2xl shadow-2xl z-50"
          >
            <p className="font-semibold text-center flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Report request received! Check your email within 24hrs.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FormSection;
