import React from 'react';
import ScrollReveal from './ScrollReveal';

const monsters = [
  {
    name: "Shopify",
    color: "#95BF47",
    description: "Platform fees",
    image: "/monsters/shopify.png",
    bite: "$299/mo+",
  },
  {
    name: "Klaviyo",
    color: "#004B50",
    description: "Email marketing",
    image: "/monsters/klaviyo.png",
    bite: "$1,500/mo+",
  },
  {
    name: "Refersion",
    color: "#FF6B47",
    description: "Affiliate marketing",
    image: "/monsters/refersion.png",
    bite: "$599/mo+",
  },
  {
    name: "QuickBooks",
    color: "#2CA01C",
    description: "Payroll costs",
    image: "/monsters/quickbooks.png",
    bite: "$2,000/mo+",
  },
  {
    name: "Skio",
    color: "#6366F1",
    description: "Subscriptions",
    image: "/monsters/skio.png",
    bite: "$799/mo+",
  },
];

const CookieMonsterSection = () => {
  return (
    <section className="bg-[#faf7f2] py-20 sm:py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
            Who's eating your{' '}
            <span className="text-red-500">cookies</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your revenue is the cookie jar. These monsters devour it — 
            one subscription at a time.
          </p>
        </ScrollReveal>

        {/* Monster Cards — Clean responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {monsters.map((monster, i) => (
            <ScrollReveal key={monster.name} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-gray-100 overflow-hidden">
                {/* Colored top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 rounded-t-2xl sm:rounded-t-3xl"
                  style={{ backgroundColor: monster.color }}
                />
                
                {/* Monster Image */}
                <div className="relative mb-3 flex justify-center">
                  <picture>
                    <source srcSet={monster.image.replace('.png', '.webp')} type="image/webp" />
                    <img 
                      src={monster.image} 
                      alt={`${monster.name} monster`}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                      loading="lazy"
                    />
                  </picture>
                  {/* Nom nom on hover */}
                  <div className="absolute -top-2 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100 whitespace-nowrap">
                    nom nom! 🍪
                  </div>
                </div>
                
                {/* Name */}
                <h3 
                  className="font-extrabold text-sm sm:text-base text-center mb-0.5 tracking-tight"
                  style={{ color: monster.color }}
                >
                  {monster.name}
                </h3>
                
                {/* Description */}
                <p className="text-[11px] sm:text-xs text-gray-400 text-center mb-2">
                  {monster.description}
                </p>
                
                {/* Cost badge */}
                <div className="text-center">
                  <span className="inline-block bg-red-50 text-[10px] sm:text-[11px] font-bold text-red-500 px-2.5 py-1 rounded-full border border-red-100">
                    {monster.bite}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Bottom callout */}
        <ScrollReveal delay={0.5} className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-red-50 border border-red-100 rounded-2xl px-6 py-4">
            <span className="text-2xl">⚠️</span>
            <span className="text-gray-700 font-medium text-sm sm:text-base text-center">
              Average e-commerce brand loses <strong className="text-red-600">$5,000–$15,000/mo</strong> to tool bloat
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CookieMonsterSection;