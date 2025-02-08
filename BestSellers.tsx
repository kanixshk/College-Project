import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const bestSellers = [
  {
    id: 101,
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato-butter sauce",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    rating: 4.9,
    reviews: 1250,
    cholesterolLevel: 85
  },
  {
    id: 102,
    name: "Dim Sum Platter",
    description: "Assorted steamed dumplings and buns",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviews: 980,
    cholesterolLevel: 45
  },
  {
    id: 103,
    name: "Mediterranean Salad",
    description: "Fresh vegetables with feta cheese and olives",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80",
    rating: 4.7,
    reviews: 856,
    cholesterolLevel: 15
  }
];

const BestSellers = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (item: typeof bestSellers[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        cholesterolLevel: item.cholesterolLevel
      }
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-orange-600">${item.price}</span>
                  <span className="text-sm text-gray-500">{item.reviews} reviews</span>
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;