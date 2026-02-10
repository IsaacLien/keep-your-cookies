import ScrollReveal from './ScrollReveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const AnimatedStat = ({ end, suffix = '', prefix = '', label, sublabel }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-5 sm:p-6">
      <div className="text-2xl sm:text-3xl font-black text-amber-600 mb-1 tracking-tight">
        {prefix}{count}{suffix}
      </div>
      <p className="text-xs text-gray-400 font-medium">{label}</p>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-white py-20 sm:py-28 px-5 sm:px-8 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Built by operators,{' '}
            <br className="hidden sm:block" />
            <span className="italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>for operators</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-lg mx-auto font-light">
            A small team obsessed with one thing: stopping the bleed.
          </p>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left - Story */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-5">
              <div className="bg-[#FAFAF9] rounded-2xl p-6 sm:p-8 border border-gray-100/80">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 tracking-tight">
                  We've been in your shoes.
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-[15px]">
                  We started as e-commerce operators. We watched our own margins get devoured by 
                  Shopify apps, email tools, affiliate platforms, and bloated payroll.
                </p>
                <p className="text-gray-500 leading-relaxed mb-4 text-sm sm:text-[15px]">
                  So we built the AI we wished existed — one that scans your entire operation and 
                  identifies exactly where money is being wasted.
                </p>
                <p className="text-gray-900 font-semibold text-sm sm:text-[15px]">
                  Every day you wait is money lost.
                </p>
              </div>
              
              {/* Quote */}
              <div className="bg-amber-50/60 border-l-[3px] border-amber-400 rounded-r-xl p-5 sm:p-6">
                <p className="text-amber-900/80 font-medium italic text-sm sm:text-[15px] leading-relaxed">
                  "Most e-commerce brands unknowingly hemorrhage 20–40% of their profits on redundant 
                  tools and overstaffing."
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Right - Stats + Brand */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-5">
              {/* Brand Statement */}
              <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/60 rounded-2xl p-7 sm:p-8 border border-amber-100/30 text-center">
                <div className="text-5xl mb-4">🍪</div>
                <p className="text-amber-800/80 font-bold text-base sm:text-lg leading-snug">
                  Your margins are the cookie jar.
                  <br />
                  <span className="text-amber-600">We keep them full.</span>
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FAFAF9] rounded-2xl border border-gray-100/80">
                  <AnimatedStat end={2.3} prefix="$" suffix="M+" label="Saved for clients" />
                </div>
                <div className="bg-[#FAFAF9] rounded-2xl border border-gray-100/80">
                  <AnimatedStat end={150} suffix="+" label="Brands analyzed" />
                </div>
                <div className="bg-[#FAFAF9] rounded-2xl border border-gray-100/80">
                  <AnimatedStat end={31} suffix="%" label="Avg. cost reduction" />
                </div>
                <div className="bg-[#FAFAF9] rounded-2xl border border-gray-100/80">
                  <AnimatedStat end={24} suffix="hr" label="Report turnaround" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
