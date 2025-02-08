import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[calc(100vh-4rem)] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">Welcome to Spice Fusion</h1>
            <p className="text-lg md:text-2xl mb-6 md:mb-8">Experience the perfect blend of Indian, Chinese & Continental cuisine</p>
            <Link 
              to="/menu"
              className="bg-orange-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full inline-flex items-center hover:bg-orange-700 transition-colors text-lg md:text-xl"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Cuisine Categories */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Cuisines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: "Indian Cuisine",
                image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/menu"
              },
              {
                title: "Chinese Cuisine",
                image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/menu"
              },
              {
                title: "Continental Cuisine",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                link: "/menu"
              }
            ].map((cuisine, index) => (
              <Link 
                key={index} 
                to={cuisine.link} 
                className="relative overflow-hidden rounded-lg shadow-lg group aspect-[4/3]"
              >
                <img 
                  src={cuisine.image} 
                  alt={cuisine.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{cuisine.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;