import React, { createContext, useContext, useReducer } from 'react';
import { toast } from 'react-hot-toast';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  cholesterolLevel: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  totalCholesterol: number;
  maxCholesterolLevel: number;
  lastWarningTime: number | null;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_MAX_CHOLESTEROL'; payload: number };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const MAX_ALLOWED_CHOLESTEROL = 300; // Maximum allowed cholesterol level in mg/dL
const CHOLESTEROL_WARNING_COOLDOWN = 1000 * 60 * 30; // 30 minutes

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newCholesterolLevel = state.totalCholesterol + action.payload.cholesterolLevel;
      const now = Date.now();
      
      if (newCholesterolLevel > state.maxCholesterolLevel) {
        const shouldWarn = !state.lastWarningTime || 
                          (now - state.lastWarningTime) > CHOLESTEROL_WARNING_COOLDOWN;
        
        if (shouldWarn) {
          toast((t) => (
            <div>
              <p className="font-bold text-red-600">High Cholesterol Warning!</p>
              <p className="text-sm">Adding this item will exceed your cholesterol limit of {state.maxCholesterolLevel} mg/dL.</p>
              <p className="text-sm">Current: {state.totalCholesterol} mg/dL</p>
              <p className="text-sm">After adding: {newCholesterolLevel} mg/dL</p>
              <div className="mt-2 flex justify-end gap-2">
                <button
                  className="px-3 py-1 text-sm bg-gray-200 rounded-full"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Cancel
                </button>
                <button
                  className="px-3 py-1 text-sm bg-orange-600 text-white rounded-full"
                  onClick={() => {
                    toast.dismiss(t.id);
                    toast.success('Item added to cart');
                  }}
                >
                  Add Anyway
                </button>
              </div>
            </div>
          ), { duration: 6000 });
        } else {
          toast.success('Item added to cart');
        }
      }

      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
          totalCholesterol: newCholesterolLevel,
          lastWarningTime: now
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
        totalCholesterol: newCholesterolLevel,
        lastWarningTime: now
      };
    }
    case 'REMOVE_ITEM': {
      const item = state.items.find(item => item.id === action.payload);
      if (!item) return state;
      
      toast.success('Item removed from cart');
      
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (item.price * item.quantity),
        totalCholesterol: state.totalCholesterol - (item.cholesterolLevel * item.quantity)
      };
    }
    case 'UPDATE_QUANTITY': {
      const item = state.items.find(item => item.id === action.payload.id);
      if (!item) return state;
      
      const quantityDiff = action.payload.quantity - item.quantity;
      const newCholesterolLevel = state.totalCholesterol + (item.cholesterolLevel * quantityDiff);
      
      if (quantityDiff > 0) {
        toast.success('Quantity updated');
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + (item.price * quantityDiff),
        totalCholesterol: newCholesterolLevel
      };
    }
    case 'SET_MAX_CHOLESTEROL':
      if (action.payload > MAX_ALLOWED_CHOLESTEROL) {
        toast.error(`Maximum allowed cholesterol level is ${MAX_ALLOWED_CHOLESTEROL} mg/dL`);
        return state;
      }
      return {
        ...state,
        maxCholesterolLevel: action.payload
      };
    case 'CLEAR_CART':
      toast.success('Cart cleared');
      return { 
        ...state,
        items: [], 
        total: 0,
        totalCholesterol: 0
      };
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
    totalCholesterol: 0,
    maxCholesterolLevel: 200, // Default max cholesterol level
    lastWarningTime: null
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};