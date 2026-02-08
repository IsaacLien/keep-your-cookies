import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CookieMonsterSection from './components/CookieMonsterSection';
import HowItWorksSection from './components/HowItWorksSection';
import CaseStudySection from './components/CaseStudySection';
import AboutSection from './components/AboutSection';
import FormSection from './components/FormSection';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <CookieMonsterSection />
      <HowItWorksSection />
      <CaseStudySection />
      <AboutSection />
      <FormSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}

export default App;