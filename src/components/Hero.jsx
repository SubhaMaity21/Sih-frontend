import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 pb-8 bg-gradient-to-br from-sky-50 via-sky-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8 lg:py-12">
          {/* Main Tagline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-sky-600">Harvest</span> Every Drop,{' '}
            <br className="hidden sm:inline" />
            <span className="text-sky-600">Sustain</span> Every Future
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform rainfall into a reliable water source with innovative rainwater harvesting solutions. 
            Conserve water, reduce costs, and contribute to a sustainable tomorrow.
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm sm:text-base text-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>Eco-Friendly Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>Cost-Effective Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>Easy Installation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
              <span>Long-term Benefits</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-sky-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-4 -left-4 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
