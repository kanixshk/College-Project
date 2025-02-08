import React from 'react';
import { Star } from 'lucide-react';

const locations = [
  {
    city: "Mumbai",
    address: "42, Marine Drive, Nariman Point, Mumbai, Maharashtra",
    phone: "+91 22-1234-5678",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    rating: 4.8,
    reviews: [
      { author: "Priya S.", text: "Best butter chicken in Mumbai! The ambiance is perfect for both family dinners and business meetings." },
      { author: "Rahul M.", text: "The fusion dishes are innovative and delicious. A must-visit restaurant in South Mumbai." }
    ]
  },
  {
    city: "Delhi",
    address: "15, Connaught Place, New Delhi",
    phone: "+91 11-8765-4321",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    rating: 4.9,
    reviews: [
      { author: "Amit K.", text: "The North Indian dishes here are authentic and the service is impeccable." },
      { author: "Sarah P.", text: "Amazing continental options. The fusion of flavors is unique and memorable." }
    ]
  },
  {
    city: "Bangalore",
    address: "78, Indiranagar 100ft Road, Bangalore, Karnataka",
    phone: "+91 80-9876-5432",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviews: [
      { author: "Karthik R.", text: "The ambiance is perfect for a romantic dinner. The wine selection is impressive." },
      { author: "Lisa M.", text: "Great place for corporate events. The staff is very accommodating." }
    ]
  }
];

const Shop = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Locations</h1>

        <div className="grid grid-cols-1 gap-12">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 md:h-auto">
                  <img
                    src={location.image}
                    alt={`${location.city} Restaurant`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-semibold mb-4">{location.city}</h2>
                  <p className="text-gray-600 mb-2">{location.address}</p>
                  <p className="text-gray-600 mb-4">{location.phone}</p>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(location.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">{location.rating}/5</span>
                  </div>

                  <div className="space-y-4">
                    {location.reviews.map((review, idx) => (
                      <div key={idx} className="border-l-4 border-orange-600 pl-4">
                        <p className="text-gray-600 italic mb-2">"{review.text}"</p>
                        <p className="text-sm text-gray-500">- {review.author}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;