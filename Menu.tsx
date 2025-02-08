import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = React.useState('indian');
  const { dispatch } = useCart();

  const categories = [
    { id: 'indian', name: 'Indian Cuisine' },
    { id: 'chinese', name: 'Chinese Cuisine' },
    { id: 'continental', name: 'Continental Cuisine' },
    { id: 'starters', name: 'Starters' }
  ];

  const dishes = {
    indian: [
      {
        id: 1,
        name: "Butter Chicken",
        description: "Tender chicken in rich tomato-butter sauce",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      },
      // ... (rest of the indian dishes)
    ],
    chinese: [
      {
        id: 5,
        name: "Kung Pao Chicken",
        description: "Spicy diced chicken with peanuts and vegetables",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      },
      // ... (rest of the chinese dishes)
    ],
    continental: [
      {
        id: 9,
        name: "Grilled Salmon",
        description: "Fresh salmon with herbs and lemon butter",
        price: 22.99,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
      },
      // ... (rest of the continental dishes)
    ],
    starters: [
      {
        id: 13,
        name: "Bruschetta",
        description: "Toasted bread with tomatoes and basil",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1171&q=80"
      },
      // ... (rest of the starters)
    ]
  };

  const handleAddToCart = (dish: typeof dishes.indian[0]) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image
      }
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-lg transition-colors ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Title */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          {categories.find(cat => cat.id === activeCategory)?.name}
        </h2>
        
        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes[activeCategory as keyof typeof dishes].map((dish) => (
            <div key={dish.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
              <div className="relative h-48">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-lg font-bold text-orange-600">${dish.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <button 
                  onClick={() => handleAddToCart(dish)}
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
    </div>
  );
};

export default Menu;