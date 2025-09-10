import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ContentSection = () => {
  const [videoDuration, setVideoDuration] = useState('Loading...');
  const videoRef = useRef(null);
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/calculate');
  };

  // Format duration from seconds to MM:SS format
  const formatDuration = (seconds) => {
    if (!seconds || isNaN(seconds)) return 'Loading...';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Handle video metadata loaded
  const handleVideoLoad = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      setVideoDuration(formatDuration(duration));
    }
  };

  const tips = [
    {
      icon: "🏠",
      title: "Roof Collection",
      description: "Install gutters and downspouts to channel rainwater from your roof to storage containers."
    },
    {
      icon: "🔧",
      title: "First Flush Diverter",
      description: "Use a first flush diverter to remove initial dirty water and collect only clean rainwater."
    },
    {
      icon: "💧",
      title: "Storage Solutions",
      description: "Choose appropriate storage tanks made of food-grade materials for safe water storage."
    },
    {
      icon: "🌿",
      title: "Filtration System",
      description: "Implement proper filtration to ensure your harvested water is clean and safe for use."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Video Section */}
          <div className="flex flex-col h-full space-y-6">
            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Learn How to <span className="text-sky-600">Harvest Rainwater</span>
              </h2>
              <p className="text-lg text-gray-600">
                Watch our comprehensive guide to understand the complete process of setting up 
                your own rainwater harvesting system.
              </p>
            </div>
            
            {/* Video Container */}
             <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg group flex-grow">
              {/* YouTube Embed */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8Ls0rM2j8iQ?si=f0eVPHQz_ZKR5pYc"
                title="Rainwater Harvesting Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            {/* Video Info */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              
              <span>Step-by-step guide</span>
            </div>
          </div>

          {/* Tips Section */}
          <div className="flex flex-col h-full space-y-6">
            <div className="text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Essential <span className="text-sky-600">Tips & Guidelines</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Follow these expert recommendations to maximize your rainwater harvesting efficiency 
                and ensure long-term success.
              </p>
            </div>

            {/* Tips Grid */}
            <div className="space-y-4 flex-grow">
              {tips.map((tip, index) => (
                <div 
                  key={index} 
                  className="card p-6 hover:bg-sky-50 transition-colors duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {tip.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Calculate Button */}
        <div className="text-center mt-12">
          <button onClick={handleGetStarted} className="btn-primary text-lg px-12 py-4">
            <span className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 002 2v14a2 2 0 002 2z"/>
              </svg>
              <span>Calculate</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
