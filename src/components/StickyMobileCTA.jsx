import { useState, useEffect } from 'react';

const StickyMobileCTA = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const heroSection = document.querySelector('.hero-section'); // We'll need to add this class to HeroSection
    
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show CTA when hero is not in view (user scrolled past it)
        setShowCTA(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.unobserve(heroSection);
    };
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        showCTA ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white shadow-lg border-t border-gray-100 px-4 py-3">
        <button
          onClick={scrollToForm}
          className="w-full py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-500 hover:via-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg active:scale-95"
        >
          Get Free Analysis →
        </button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;