import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section with Tagline */}
        <Hero />
        
        {/* Content Section with Video and Tips */}
        <ContentSection />
        
        {/* Benefits Section */}
        <BenefitsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
