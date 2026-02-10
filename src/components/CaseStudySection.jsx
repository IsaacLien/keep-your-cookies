import ScrollReveal from './ScrollReveal';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Animated counter component
const AnimatedNumber = ({ end, suffix = '', prefix = '', duration = 2000 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
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
  }, [isInView, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const CaseStudySection = () => {
  return (
    <section className="bg-[#FFFBF5] py-20 sm:py-28 px-5 sm:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-green-600 mb-4">
            Case Study
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Real results.{' '}
            <span className="italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>Real savings.</span>
          </h2>
        </ScrollReveal>
        
        {/* Case Study Card */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100/80 shadow-[0_4px_40px_rgba(0,0,0,0.04)]">
            {/* Top bar */}
            <div className="bg-gradient-to-r from-green-800 to-green-900 px-6 sm:px-10 py-6 flex items-center justify-between">
              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">Real Provisions</h3>
                <p className="text-green-300/70 text-sm">Premium Care Package Company</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-green-300/50 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                Client since 2025
              </div>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <div className="p-6 sm:p-8 text-center group">
                <div className="text-4xl sm:text-5xl font-black text-green-600 mb-2 tracking-tight">
                  <AnimatedNumber end={24} suffix="%" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Payroll Reduced</div>
                <p className="text-xs text-gray-300 mt-2">Eliminated redundant roles</p>
              </div>
              <div className="p-6 sm:p-8 text-center group">
                <div className="text-4xl sm:text-5xl font-black text-blue-600 mb-2 tracking-tight">
                  <AnimatedNumber end={39} suffix="%" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SaaS Costs Cut</div>
                <p className="text-xs text-gray-300 mt-2">Consolidated overlapping tools</p>
              </div>
              <div className="p-6 sm:p-8 text-center group">
                <div className="text-4xl sm:text-5xl font-black text-amber-600 mb-2 tracking-tight">
                  <AnimatedNumber end={47} prefix="$" suffix="K" />
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Monthly Savings</div>
                <p className="text-xs text-gray-300 mt-2">$564K annually</p>
              </div>
            </div>
            
            {/* Quote */}
            <div className="px-6 sm:px-10 pb-8">
              <div className="bg-gray-50/70 rounded-2xl p-6 sm:p-8 border border-gray-100/50">
                <svg className="w-7 h-7 text-amber-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  We went from hemorrhaging money on tools we barely used to a lean, efficient operation. 
                  The AI analysis revealed overlapping subscriptions and overstaffed departments we never noticed.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Mansal Denton</p>
                    <p className="text-xs text-gray-400">Founder & CEO, Real Provisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CaseStudySection;
