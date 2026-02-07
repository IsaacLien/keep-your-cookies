import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">
              Keep Your Cookies
            </h3>
            <p className="text-gray-400 leading-relaxed">
              AI-powered cost reduction for e-commerce brands. 
              Stop letting software tools eat your profits.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@keepyourcookies.com</p>
              <p>🔒 100% confidential analysis</p>
              <p>⚡ 24-hour turnaround</p>
            </div>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Ready to Save?</h4>
            <p className="text-gray-400 mb-4">
              Get your cost analysis in under 2 minutes
            </p>
            <button 
              onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Analyze My Costs
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Keep Your Cookies. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;