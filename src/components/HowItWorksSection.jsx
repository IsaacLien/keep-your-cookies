import ScrollReveal from './ScrollReveal';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Submit Your Numbers",
      description: "Enter your revenue, payroll, and software costs",
      emoji: "📊",
      icon: "💰"
    },
    {
      number: 2,
      title: "AI Analyzes Everything", 
      description: "Our system scans your stack for waste and overlap",
      emoji: "🤖",
      icon: "🔍"
    },
    {
      number: 3,
      title: "Get Your Report",
      description: "Receive a detailed cost-reduction plan within 24 hours",
      emoji: "📋", 
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get your personalized cost-reduction report in three simple steps
          </p>
        </ScrollReveal>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center space-x-8 lg:space-x-16">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <ScrollReveal delay={index * 0.2}>
                  <div className="flex flex-col items-center text-center max-w-xs">
                    {/* Number circle */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-2xl mb-4">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="text-4xl mb-4">{step.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>

                {/* Connecting arrow (not after last step) */}
                {index < steps.length - 1 && (
                  <div className="mx-6 lg:mx-8">
                    <svg
                      className="w-8 h-8 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center">
              <ScrollReveal delay={index * 0.15}>
                <div className="flex flex-col items-center text-center">
                  {/* Number circle */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Connecting line (not after last step) */}
              {index < steps.length - 1 && (
                <div className="my-6">
                  <svg
                    className="w-6 h-12 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;