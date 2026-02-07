import React from 'react';

const monsters = [
  {
    name: "Shopify",
    color: "#95BF47",
    bgLight: "rgba(149,191,71,0.1)",
    borderColor: "rgba(149,191,71,0.3)",
    description: "Platform fees",
    icon: "🛒",
    bite: "$299/mo+",
  },
  {
    name: "Klaviyo",
    color: "#004B50",
    bgLight: "rgba(0,75,80,0.1)",
    borderColor: "rgba(0,75,80,0.3)",
    description: "Email marketing",
    icon: "✉️",
    bite: "$1,500/mo+",
  },
  {
    name: "Refersion",
    color: "#FF6B47",
    bgLight: "rgba(255,107,71,0.1)",
    borderColor: "rgba(255,107,71,0.3)",
    description: "Affiliate marketing",
    icon: "🤝",
    bite: "$599/mo+",
  },
  {
    name: "QuickBooks",
    color: "#2CA01C",
    bgLight: "rgba(44,160,28,0.1)",
    borderColor: "rgba(44,160,28,0.3)",
    description: "Payroll costs",
    icon: "💰",
    bite: "$2,000/mo+",
  },
  {
    name: "Skio",
    color: "#6366F1",
    bgLight: "rgba(99,102,241,0.1)",
    borderColor: "rgba(99,102,241,0.3)",
    description: "Subscriber management",
    icon: "🔄",
    bite: "$799/mo+",
  },
];

const CookieMonsterSection = () => {
  return (
    <section className="bg-[#faf7f2] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Who's eating your <span className="text-red-500">cookies</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every month, these tools take a bigger bite out of your revenue. 
            Most founders don't realize how much until it's too late.
          </p>
        </div>

        {/* Cookie Jar - Center */}
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="w-40 h-40 sm:w-52 sm:h-52 bg-gradient-to-br from-amber-300 to-amber-500 rounded-3xl rotate-3 flex items-center justify-center shadow-2xl shadow-amber-500/20">
              <div className="text-center -rotate-3">
                <div className="text-5xl sm:text-6xl mb-1">🍪</div>
                <p className="text-sm sm:text-base font-bold text-amber-900">Your Revenue</p>
              </div>
            </div>
            {/* Floating cookie crumbs */}
            <div className="absolute -top-4 -right-4 text-2xl animate-bounce" style={{ animationDelay: '0s' }}>🍪</div>
            <div className="absolute -bottom-3 -left-5 text-xl animate-bounce" style={{ animationDelay: '0.5s' }}>🍪</div>
            <div className="absolute -top-2 -left-6 text-lg animate-bounce" style={{ animationDelay: '1s' }}>🍪</div>
          </div>
        </div>
        
        {/* Arrow down */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col items-center gap-1 text-gray-400">
            <span className="text-sm font-medium tracking-widest uppercase">Gets devoured by</span>
            <span className="text-2xl">↓</span>
          </div>
        </div>

        {/* Monster Cards - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {monsters.map((monster) => (
            <div
              key={monster.name}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 cursor-pointer border"
              style={{
                backgroundColor: monster.bgLight,
                borderColor: monster.borderColor,
              }}
            >
              {/* Monster "eyes" */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-5 h-5 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-900 rounded-full relative">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
                <div className="w-5 h-5 bg-white rounded-full shadow-inner flex items-center justify-center">
                  <div className="w-3 h-3 bg-gray-900 rounded-full relative">
                    <div className="w-1 h-1 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
              </div>
              
              {/* Icon */}
              <div className="text-3xl text-center mb-3">{monster.icon}</div>
              
              {/* Name */}
              <h3 
                className="font-bold text-lg text-center mb-1"
                style={{ color: monster.color }}
              >
                {monster.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-500 text-center mb-3">
                {monster.description}
              </p>
              
              {/* Bite size */}
              <div className="text-center">
                <span className="inline-block bg-white/80 text-xs font-mono font-bold text-red-500 px-3 py-1 rounded-full">
                  {monster.bite}
                </span>
              </div>

              {/* "Nom nom" on hover */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-red-400 bg-white px-2 py-1 rounded-full shadow">
                nom nom 🍪
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom stat */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-red-50 border border-red-100 rounded-full px-6 py-3">
            <span className="text-red-500 text-xl">⚠️</span>
            <span className="text-gray-700 font-medium">
              Average e-commerce brand loses <strong className="text-red-600">$5,000–$15,000/mo</strong> to tool bloat
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieMonsterSection;
