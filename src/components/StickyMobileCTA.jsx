import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyMobileCTA = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowCTA(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, []);

  const scrollToForm = () => {
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showCTA && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="glass shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-4 py-3 safe-area-bottom">
            <button
              onClick={scrollToForm}
              className="w-full py-3.5 btn-primary rounded-xl text-base font-semibold active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
            >
              Get Free Analysis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
