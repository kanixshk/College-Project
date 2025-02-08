import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-32 h-32">
        {/* Cooking Pan */}
        <div className="absolute w-32 h-16 bottom-0 bg-gray-700 rounded-full transform -skew-x-12">
          <div className="absolute w-24 h-6 bg-gray-800 rounded-full left-4 bottom-2"></div>
        </div>
        <div className="absolute w-8 h-20 right-0 bottom-4 bg-gray-800 transform rotate-45"></div>
        
        {/* Spice Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-spice"
            style={{
              backgroundColor: ['#FF6B6B', '#FFD93D', '#4CAF50'][i % 3],
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;