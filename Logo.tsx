import React from 'react';
import { Utensils } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Utensils className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />
        <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full animate-pulse" />
      </div>
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-orange-600">Spice Fusion</h1>
        <p className="text-xs text-gray-600 italic hidden md:block">Evokes the flavorful world of Indian spices</p>
      </div>
    </div>
  );
};

export default Logo;