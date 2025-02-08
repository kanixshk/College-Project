import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useLoadingState } from '../hooks/useLoadingState';
import LoadingOverlay from './LoadingOverlay';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isLoading, startLoading } = useLoadingState();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigation = (path: string) => {
    startLoading();
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      {isLoading && <LoadingOverlay />}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {[
              ['/', 'Home'],
              ['/about', 'About'],
              ['/menu', 'Our Menu'],
              ['/shop', 'Shop'],
              ['/blog', 'Blog'],
              ['/contact', 'Contact']
            ].map(([path, label]) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className="text-gray-700 hover:text-orange-600 transition-colors"
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={() => handleNavigation('/cart')}
              className="p-2 hover:bg-orange-100 rounded-full transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavigation(user ? "/profile" : "/auth")}
              className="p-2 hover:bg-orange-100 rounded-full transition-colors relative"
              aria-label="Account"
            >
              <User className="h-5 w-5 md:h-6 md:w-6 text-orange-600" />
              {user && (
                <span className="absolute -top-1 -right-1 bg-green-500 w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-white" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-orange-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 md:h-6 md:w-6" />
              ) : (
                <Menu className="h-5 w-5 md:h-6 md:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {[
                ['/', 'Home'],
                ['/about', 'About'],
                ['/menu', 'Our Menu'],
                ['/shop', 'Shop'],
                ['/blog', 'Blog'],
                ['/contact', 'Contact']
              ].map(([path, label]) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className="text-gray-700 hover:text-orange-600 transition-colors text-left py-2"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;