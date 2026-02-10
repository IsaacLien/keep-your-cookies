import { motion } from 'framer-motion';

const logos = [
  { name: 'Shopify', icon: '🟢' },
  { name: 'Klaviyo', icon: '📧' },
  { name: 'QuickBooks', icon: '📊' },
  { name: 'Gorgias', icon: '💬' },
  { name: 'Recharge', icon: '🔄' },
  { name: 'ShipStation', icon: '📦' },
  { name: 'Yotpo', icon: '⭐' },
  { name: 'Triple Whale', icon: '🐋' },
];

const LogoStrip = () => {
  return (
    <section className="bg-[#FFFBF5] py-10 sm:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8">
          We audit costs across your entire stack
        </p>
      </div>
      
      {/* Infinite marquee */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 mx-8 sm:mx-12 text-gray-300 hover:text-gray-500 transition-colors duration-300"
            >
              <span className="text-2xl grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                {logo.icon}
              </span>
              <span className="text-base font-semibold tracking-tight">{logo.name}</span>
            </div>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFFBF5] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FFFBF5] to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default LogoStrip;
