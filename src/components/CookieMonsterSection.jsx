import React from 'react';

const monsters = [
  {
    name: "Shopify",
    color: "#95BF47",
    description: "Platform fees",
    image: "/monsters/shopify.png",
    bite: "$299/mo+",
    // Positioned top-left, reaching toward jar
    position: { top: '2%', left: '2%' },
    mobilePosition: { top: '0%', left: '0%' },
    rotation: 'rotate-[8deg]',
    size: 'w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40',
  },
  {
    name: "Klaviyo",
    color: "#004B50",
    description: "Email marketing",
    image: "/monsters/klaviyo.png",
    bite: "$1,500/mo+",
    // Positioned top-right
    position: { top: '0%', right: '5%' },
    mobilePosition: { top: '0%', right: '0%' },
    rotation: 'rotate-[-6deg]',
    size: 'w-28 h-28 sm:w-34 sm:h-34 md:w-38 md:h-38',
  },
  {
    name: "Refersion",
    color: "#FF6B47",
    description: "Affiliate marketing",
    image: "/monsters/refersion.png",
    bite: "$599/mo+",
    // Positioned bottom-left
    position: { bottom: '2%', left: '8%' },
    mobilePosition: { bottom: '2%', left: '0%' },
    rotation: 'rotate-[5deg]',
    size: 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36',
  },
  {
    name: "QuickBooks",
    color: "#2CA01C",
    description: "Payroll costs",
    image: "/monsters/quickbooks.png",
    bite: "$2,000/mo+",
    // Positioned bottom-right
    position: { bottom: '0%', right: '3%' },
    mobilePosition: { bottom: '2%', right: '0%' },
    rotation: 'rotate-[-8deg]',
    size: 'w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40',
  },
  {
    name: "Skio",
    color: "#6366F1",
    description: "Subscriptions",
    image: "/monsters/skio.png",
    bite: "$799/mo+",
    // Positioned far left middle
    position: { top: '50%', left: '0%', transform: 'translateY(-50%)' },
    mobilePosition: { top: '42%', left: '-2%' },
    rotation: 'rotate-[10deg]',
    size: 'w-26 h-26 sm:w-30 sm:h-30 md:w-36 md:h-36',
  },
];

const CookieMonsterSection = () => {
  return (
    <section className="bg-[#faf7f2] py-20 sm:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
            Who's eating your{' '}
            <span className="text-red-500">cookies</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your revenue is the cookie jar. These are the monsters devouring it — 
            one subscription at a time.
          </p>
        </div>

        {/* ===== MOBILE LAYOUT: Stacked cards ===== */}
        <div className="block sm:hidden">
          {/* Cookie Jar - Mobile */}
          <div className="flex justify-center my-8">
            <div className="relative">
              <img 
                src="/images/cookie-jar.png" 
                alt="Your revenue cookie jar" 
                className="w-40 h-40 object-contain drop-shadow-xl"
              />
              <p className="text-center text-amber-800 font-extrabold text-sm mt-2 tracking-tight">YOUR REVENUE</p>
            </div>
          </div>
          
          {/* Gets devoured by... label */}
          <p className="text-center text-gray-500 font-medium text-sm mb-4 tracking-wide uppercase">gets devoured by...</p>
          
          {/* Monster Cards - Mobile Grid */}
          <div className="grid grid-cols-2 gap-4">
            {monsters.map((monster) => (
              <div
                key={monster.name}
                className="relative bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: monster.color }} />
                <div className="flex justify-center mb-2">
                  <img 
                    src={monster.image} 
                    alt={`${monster.name} monster`}
                    className="w-20 h-20 object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="font-extrabold text-sm text-center mb-0.5" style={{ color: monster.color }}>
                  {monster.name}
                </h3>
                <p className="text-xs text-gray-400 text-center mb-1.5">{monster.description}</p>
                <div className="text-center">
                  <span className="inline-block bg-red-50 text-[10px] font-bold text-red-500 px-2 py-0.5 rounded-full border border-red-100">
                    {monster.bite}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT: Cookie jar center with monsters surrounding it ===== */}
        <div className="hidden sm:block">
          <div className="relative max-w-4xl mx-auto" style={{ minHeight: '600px' }}>
            
            {/* Central Cookie Jar */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative">
                <img 
                  src="/images/cookie-jar.png" 
                  alt="Your revenue cookie jar" 
                  className="w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(245, 158, 11, 0.3))' }}
                />
                <p className="text-center text-amber-800 font-extrabold text-sm md:text-base mt-2 tracking-tight">YOUR REVENUE</p>
                
                {/* Floating cookie crumbs around jar */}
                <span className="absolute -top-6 -right-4 text-2xl animate-bounce" style={{ animationDuration: '2.5s' }}>🍪</span>
                <span className="absolute -bottom-3 -left-5 text-xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>🍪</span>
                <span className="absolute top-2 -left-8 text-lg animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}>🍪</span>
              </div>
            </div>

            {/* "gets devoured by..." connecting text */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[15%] z-20">
              <p className="text-gray-400 font-medium text-sm tracking-wider uppercase whitespace-nowrap">gets devoured by...</p>
            </div>

            {/* Monster: Shopify - Top Left, tilted toward jar */}
            <div className="absolute group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-30"
                 style={{ top: '5%', left: '5%' }}>
              <div className="rotate-[8deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-white rounded-3xl p-4 md:p-5 shadow-lg border border-gray-100 w-40 md:w-48">
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: '#95BF47' }} />
                  <img src="/monsters/shopify.png" alt="Shopify monster" className="w-24 h-24 md:w-28 md:h-28 mx-auto object-contain drop-shadow-lg" />
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100">nom nom! 🍪</div>
                  <h3 className="font-extrabold text-base text-center mt-1" style={{ color: '#95BF47' }}>Shopify</h3>
                  <p className="text-xs text-gray-400 text-center">Platform fees</p>
                  <div className="text-center mt-1">
                    <span className="inline-block bg-red-50 text-[11px] font-bold text-red-500 px-2.5 py-0.5 rounded-full border border-red-100">$299/mo+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monster: Klaviyo - Top Right, leaning toward jar */}
            <div className="absolute group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-30"
                 style={{ top: '8%', right: '3%' }}>
              <div className="rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-white rounded-3xl p-4 md:p-5 shadow-lg border border-gray-100 w-40 md:w-48">
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: '#004B50' }} />
                  <img src="/monsters/klaviyo.png" alt="Klaviyo monster" className="w-24 h-24 md:w-28 md:h-28 mx-auto object-contain drop-shadow-lg" />
                  <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100">nom nom! 🍪</div>
                  <h3 className="font-extrabold text-base text-center mt-1" style={{ color: '#004B50' }}>Klaviyo</h3>
                  <p className="text-xs text-gray-400 text-center">Email marketing</p>
                  <div className="text-center mt-1">
                    <span className="inline-block bg-red-50 text-[11px] font-bold text-red-500 px-2.5 py-0.5 rounded-full border border-red-100">$1,500/mo+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monster: Skio - Middle Left, reaching toward jar */}
            <div className="absolute group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-30"
                 style={{ top: '42%', left: '-2%' }}>
              <div className="rotate-[12deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-white rounded-3xl p-4 md:p-5 shadow-lg border border-gray-100 w-38 md:w-44">
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: '#6366F1' }} />
                  <img src="/monsters/skio.png" alt="Skio monster" className="w-22 h-22 md:w-26 md:h-26 mx-auto object-contain drop-shadow-lg" />
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100">nom nom! 🍪</div>
                  <h3 className="font-extrabold text-sm text-center mt-1" style={{ color: '#6366F1' }}>Skio</h3>
                  <p className="text-xs text-gray-400 text-center">Subscriptions</p>
                  <div className="text-center mt-1">
                    <span className="inline-block bg-red-50 text-[10px] font-bold text-red-500 px-2 py-0.5 rounded-full border border-red-100">$799/mo+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monster: Refersion - Bottom Left */}
            <div className="absolute group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-30"
                 style={{ bottom: '3%', left: '8%' }}>
              <div className="rotate-[5deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-white rounded-3xl p-4 md:p-5 shadow-lg border border-gray-100 w-38 md:w-44">
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: '#FF6B47' }} />
                  <img src="/monsters/refersion.png" alt="Refersion monster" className="w-22 h-22 md:w-26 md:h-26 mx-auto object-contain drop-shadow-lg" />
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100">nom nom! 🍪</div>
                  <h3 className="font-extrabold text-sm text-center mt-1" style={{ color: '#FF6B47' }}>Refersion</h3>
                  <p className="text-xs text-gray-400 text-center">Affiliate marketing</p>
                  <div className="text-center mt-1">
                    <span className="inline-block bg-red-50 text-[10px] font-bold text-red-500 px-2 py-0.5 rounded-full border border-red-100">$599/mo+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Monster: QuickBooks - Bottom Right, largest (biggest cost) */}
            <div className="absolute group cursor-pointer transition-all duration-500 hover:scale-110 hover:z-30"
                 style={{ bottom: '0%', right: '2%' }}>
              <div className="rotate-[-8deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-white rounded-3xl p-4 md:p-5 shadow-lg border border-gray-100 w-42 md:w-50">
                  <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl" style={{ backgroundColor: '#2CA01C' }} />
                  <img src="/monsters/quickbooks.png" alt="QuickBooks monster" className="w-26 h-26 md:w-30 md:h-30 mx-auto object-contain drop-shadow-lg" />
                  <div className="absolute -top-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100">nom nom! 🍪</div>
                  <h3 className="font-extrabold text-base text-center mt-1" style={{ color: '#2CA01C' }}>QuickBooks</h3>
                  <p className="text-xs text-gray-400 text-center">Payroll costs</p>
                  <div className="text-center mt-1">
                    <span className="inline-block bg-red-50 text-[11px] font-bold text-red-500 px-2.5 py-0.5 rounded-full border border-red-100">$2,000/mo+</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashed connecting lines (SVG) - monsters reaching toward cookie jar */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 800 600">
              {/* Lines from each monster area toward center */}
              <line x1="140" y1="120" x2="380" y2="280" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6,6" />
              <line x1="660" y1="130" x2="420" y2="280" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6,6" />
              <line x1="80" y1="350" x2="360" y2="310" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6,6" />
              <line x1="160" y1="520" x2="370" y2="340" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6,6" />
              <line x1="680" y1="500" x2="430" y2="340" stroke="#aaa" strokeWidth="1.5" strokeDasharray="6,6" />
            </svg>
          </div>
        </div>
        
        {/* Bottom callout */}
        <div className="mt-12 sm:mt-16 text-center">
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
