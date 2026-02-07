import React from 'react';

const CookieMonsterSection = () => {
  const monsters = [
    {
      name: "Shopify Monster",
      color: "#95BF47",
      description: "Platform costs",
      position: "top-left",
      style: { top: '15%', left: '15%' }
    },
    {
      name: "Klaviyo Monster", 
      color: "#004B50",
      description: "Email marketing expense",
      position: "top-right",
      style: { top: '15%', right: '15%' }
    },
    {
      name: "Refersion Monster",
      color: "#FF6B47", 
      description: "Affiliate marketing",
      position: "bottom-left",
      style: { bottom: '15%', left: '15%' }
    },
    {
      name: "QuickBooks Monster",
      color: "#2CA01C",
      description: "Payroll costs", 
      position: "bottom-right",
      style: { bottom: '15%', right: '15%' }
    },
    {
      name: "Skio Monster",
      color: "#6366F1",
      description: "Subscriber management",
      position: "center-right",
      style: { top: '50%', right: '5%', transform: 'translateY(-50%)' }
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
          Stop feeding the <span className="text-red-600">monsters</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto">
          Your e-commerce business makes money (cookies), but these software tools are eating away at your profits.
        </p>
        
        {/* Central Cookie Jar */}
        <div className="relative mx-auto w-80 h-80 mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full shadow-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🍪</div>
              <div className="text-6xl mb-4">🍪</div>
              <div className="text-6xl">🍪</div>
              <p className="text-black font-bold text-lg mt-4">Your Profits</p>
            </div>
          </div>
          
          {/* Overflowing cookies */}
          <div className="absolute -top-4 -left-4 text-5xl animate-bounce">🍪</div>
          <div className="absolute -top-6 right-1/4 text-4xl animate-pulse">🍪</div>
          <div className="absolute -bottom-4 -right-4 text-5xl animate-bounce delay-500">🍪</div>
          <div className="absolute -bottom-6 left-1/4 text-4xl animate-pulse delay-700">🍪</div>
        </div>

        {/* Monsters around the jar */}
        <div className="relative">
          {monsters.map((monster, index) => (
            <div
              key={monster.name}
              className="absolute w-48 h-48 rounded-full shadow-lg flex flex-col items-center justify-center transform hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ 
                backgroundColor: monster.color,
                ...monster.style,
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`
              }}
            >
              {/* Monster face - placeholder for now, will be replaced with AI-generated images */}
              <div className="text-6xl mb-2" style={{ filter: 'contrast(0.8)' }}>
                👹
              </div>
              <div className="text-white text-center px-2">
                <h3 className="font-bold text-lg">{monster.name.replace(' Monster', '')}</h3>
                <p className="text-sm opacity-90">{monster.description}</p>
              </div>
              
              {/* Eyes looking at cookie jar */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full relative">
                    <div className="w-2 h-2 bg-black rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                  <div className="w-3 h-3 bg-white rounded-full relative">
                    <div className="w-2 h-2 bg-black rounded-full absolute top-0.5 left-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default CookieMonsterSection;