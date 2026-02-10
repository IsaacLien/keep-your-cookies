import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Submit Your Numbers",
    description: "Enter your monthly revenue, payroll, and software costs. Takes 60 seconds.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Analyzes Everything",
    description: "Our system scans your entire stack for waste, overlap, and optimization opportunities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Get Your Report",
    description: "Receive a detailed cost-reduction plan with specific actions. Within 24 hours.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <ScrollReveal className="text-center mb-14 sm:mb-18">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[3.25rem] font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Three steps to{' '}
            <span className="italic font-serif font-normal" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>clarity</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto font-light">
            Get your personalized cost-reduction report in under 24 hours
          </p>
        </ScrollReveal>

        {/* Steps - Bento style */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.12}>
              <div className="group relative bg-[#FAFAF9] hover:bg-white rounded-2xl p-7 sm:p-8 border border-gray-100/80 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] hover:border-amber-100">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-bold text-amber-500/60 tracking-wider">{step.number}</span>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 group-hover:bg-amber-100 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {step.description}
                </p>

                {/* Connecting line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg className="w-6 h-6 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
