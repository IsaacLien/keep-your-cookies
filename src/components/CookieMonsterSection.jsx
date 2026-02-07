import React from 'react';

const monsters = [
  {
    name: "Shopify",
    color: "#95BF47",
    bgGradient: "from-[#95BF47]/10 to-[#95BF47]/5",
    borderColor: "#95BF47",
    description: "Platform fees",
    image: "/monsters/shopify.png",
    bite: "$299/mo+",
  },
  {
    name: "Klaviyo",
    color: "#004B50",
    bgGradient: "from-[#004B50]/10 to-[#004B50]/5",
    borderColor: "#004B50",
    description: "Email marketing",
    image: "/monsters/klaviyo.png",
    bite: "$1,500/mo+",
  },
  {
    name: "Refersion",
    color: "#FF6B47",
    bgGradient: "from-[#FF6B47]/10 to-[#FF6B47]/5",
    borderColor: "#FF6B47",
    description: "Affiliate marketing",
    image: "/monsters/refersion.png",
    bite: "$599/mo+",
  },
  {
    name: "QuickBooks",
    color: "#2CA01C",
    bgGradient: "from-[#2CA01C]/10 to-[#2CA01C]/5",
    borderColor: "#2CA01C",
    description: "Payroll costs",
    image: "/monsters/quickbooks.png",
    bite: "$2,000/mo+",
  },
  {
    name: "Skio",
    color: "#6366F1",
    bgGradient: "from-[#6366F1]/10 to-[#6366F1]/5",
    borderColor: "#6366F1",
    description: "Subscriptions",
    image: "/monsters/skio.png",
    bite: "$799/mo+",
  },
];

const CookieMonsterSection = () => {
  return (
    <section className="bg-[#faf7f2] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Who's eating your{' '}
            <span className="text-red-500">cookies</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your revenue is the cookie jar. These are the monsters eating it — 
            one subscription at a time.
          </p>
        </div>

        {/* Central Cookie Jar visual */}
        <div className="flex justify-center my-16">
          <div className="relative">
            <div className="w-44 h-44 sm:w-56 sm:h-56 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-400 rounded-[2rem] rotate-2 flex items-center justify-center shadow-xl shadow-amber-400/20 border-4 border-amber-300/50">
              <div className="-rotate-2 text-center">
                <div className="text-5xl sm:text-6xl mb-1">🍪</div>
                <p className="text-amber-900 font-extrabold text-sm sm:text-base tracking-tight">YOUR REVENUE</p>
              </div>
            </div>
            {/* Crumbs */}
            <div className="absolute -top-5 -right-5 text-3xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>🍪</div>
            <div className="absolute -bottom-4 -left-6 text-2xl animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '2.5s' }}>🍪</div>
            <div className="absolute top-0 -left-8 text-xl animate-bounce" style={{ animationDelay: '1.2s', animationDuration: '3s' }}>🍪</div>
            <div className="absolute -bottom-2 -right-7 text-xl animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '2.2s' }}>🍪</div>
          </div>
        </div>

        {/* Monsters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {monsters.map((monster, i) => (
            <div
              key={monster.name}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl cursor-pointer border border-gray-100 overflow-hidden"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              {/* Colored top bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                style={{ backgroundColor: monster.color }}
              />
              
              {/* Monster Image */}
              <div className="relative mb-3 flex justify-center">
                <img 
                  src={monster.image} 
                  alt={`${monster.name} monster`}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-lg"
                />
                {/* Nom nom bubble on hover */}
                <div className="absolute -top-2 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100 whitespace-nowrap">
                  nom nom! 🍪
                </div>
              </div>
              
              {/* Name */}
              <h3 
                className="font-extrabold text-base sm:text-lg text-center mb-0.5 tracking-tight"
                style={{ color: monster.color }}
              >
                {monster.name}
              </h3>
              
              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-400 text-center mb-2">
                {monster.description}
              </p>
              
              {/* Cost bite */}
              <div className="text-center">
                <span className="inline-block bg-red-50 text-[11px] sm:text-xs font-bold text-red-500 px-2.5 py-1 rounded-full border border-red-100">
                  {monster.bite}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-red-50 border border-red-100 rounded-2xl px-6 py-4">
            <span className="text-2xl">⚠️</span>
            <span className="text-gray-700 font-medium text-sm sm:text-base text-center">
              Average e-commerce brand loses <strong className="text-red-600">$5,000–$15,000/mo</strong> to tool bloat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieMonsterSection;
