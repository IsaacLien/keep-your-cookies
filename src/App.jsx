import React, { useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import CookieMonsterSection from './components/CookieMonsterSection';
import CaseStudySection from './components/CaseStudySection';
import FormSection from './components/FormSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <CookieMonsterSection />
      <CaseStudySection />
      <FormSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;