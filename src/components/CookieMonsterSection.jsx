import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const monsters = [
  {
    name: "Shopify",
    color: "#95BF47",
    bg: "from-[#95BF47]/5 to-[#95BF47]/10",
    description: "Platform fees",
    image: "/monsters/shopify.png",
    bite: "$299/mo+",
  },
  {
    name: "Klaviyo",
    color: "#004B50",
    bg: "from-[#004B50]/5 to-[#004B50]/10",
    description: "Email marketing",
    image: "/monsters/klaviyo.png",
    bite: "$1,500/mo+",
  },
  {
    name: "Refersion",
    color: "#FF6B47",
    bg: "from-[#FF6B47]/5 to-[#FF6B47]/10",
    description: "Affiliate marketing",
    image: "/monsters/refersion.png",
    bite: "$599/mo+",
  },
  {
    name: "QuickBooks",
    color: "#2CA01C",
    bg: "from-[#2CA01C]/5 to-[#2CA01C]/10",
    description: "Payroll costs",
    image: "/monsters/quickbooks.png",
    bite: "$2,000/mo+",
  },
  {
    name: "Skio",
    color: "#6366F1",
    bg: "from-[#6366F1]/5 to-[#6366F1]/10",
    description: "Subscriptions",
    image: "/monsters/skio.png",
    bite: "$799/mo+",
  },
];

const CookieMonsterSection = () => {
  return (
    <section className="bg-[#FFFBF5] py-20 sm:py-28 px-5 sm:px-8 overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-red-400 mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-black text-gray-900 mb-4 leading-tight tracking-tight">
            Who's eating your{' '}
            <span className="text-red-500 italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>cookies</span>?
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-light">
            Your revenue is the cookie jar. These tools devour it — 
            one subscription at a time.
          </p>
        </ScrollReveal>

        {/* Monster Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {monsters.map((monster, i) => (
            <ScrollReveal key={monster.name} delay={i * 0.08}>
              <motion.div 
                className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-gray-100/80 overflow-hidden cursor-pointer"
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                {/* Top accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${monster.color}80, ${monster.color})` }}
                />
                
                {/* Monster Image */}
                <div className="relative mb-3 flex justify-center">
                  <picture>
                    <source srcSet={monster.image.replace('.png', '.webp')} type="image/webp" />
                    <img 
                      src={monster.image} 
                      alt={`${monster.name} cost monster`}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-sm"
                      loading="lazy"
                    />
                  </picture>
                  {/* Hover tooltip */}
                  <div className="absolute -top-2 -right-1 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-white text-[10px] font-bold text-red-500 px-2 py-1 rounded-full shadow-md border border-red-100 whitespace-nowrap">
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
                <p className="text-[11px] sm:text-xs text-gray-400 text-center mb-2.5">
                  {monster.description}
                </p>
                
                {/* Cost badge */}
                <div className="text-center">
                  <span className="inline-block bg-red-50 text-[10px] sm:text-[11px] font-bold text-red-500 px-2.5 py-1 rounded-full border border-red-100/60">
                    {monster.bite}
                  </span>
                </div>

                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ boxShadow: `0 8px 40px ${monster.color}15, 0 0 0 1px ${monster.color}10` }}
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Bottom callout */}
        <ScrollReveal delay={0.4} className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-red-50/80 border border-red-100/60 rounded-2xl px-6 py-4 backdrop-blur-sm">
            <span className="text-xl">⚠️</span>
            <span className="text-gray-600 font-medium text-sm sm:text-base text-center">
              Average e-commerce brand loses <strong className="text-red-600">$5,000–$15,000/mo</strong> to tool bloat
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CookieMonsterSection;
