import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Spice Fusion</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Restaurant Interior" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Spice Fusion has been serving the finest multi-cuisine dishes to our valued customers. 
              Our passion for culinary excellence drives us to create unique dining experiences that blend traditional 
              recipes with modern innovation.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in offering an extensive menu that includes authentic Indian delicacies, 
              mouth-watering Chinese specialties, and exquisite Continental dishes. Our team of expert chefs 
              brings years of experience and dedication to every dish we serve.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4 bg-orange-100 rounded-lg">
                <p className="text-3xl font-bold text-orange-600">15+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="p-4 bg-orange-100 rounded-lg">
                <p className="text-3xl font-bold text-orange-600">1000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;