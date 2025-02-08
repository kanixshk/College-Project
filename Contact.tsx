import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const locations = [
    {
      city: "Mumbai",
      address: "42, Marine Drive, Nariman Point, Mumbai, Maharashtra",
      phone: "+91 22-1234-5678",
      email: "mumbai@spicefusion.com"
    },
    {
      city: "Delhi",
      address: "15, Connaught Place, New Delhi",
      phone: "+91 11-8765-4321",
      email: "delhi@spicefusion.com"
    },
    {
      city: "Bangalore",
      address: "78, Indiranagar 100ft Road, Bangalore, Karnataka",
      phone: "+91 80-9876-5432",
      email: "bangalore@spicefusion.com"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">{location.city}</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1" />
                  <p className="text-gray-600">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-600" />
                  <p className="text-gray-600">{location.phone}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-600" />
                  <p className="text-gray-600">{location.email}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold mb-2">Opening Hours</h3>
                <p className="text-gray-600">Monday - Sunday</p>
                <p className="text-gray-600">12:00 PM - 11:00 PM</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;