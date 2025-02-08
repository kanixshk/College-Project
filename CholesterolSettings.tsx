import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { AlertTriangle } from 'lucide-react';

const CholesterolSettings = () => {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [level, setLevel] = useState(state.maxCholesterolLevel);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_MAX_CHOLESTEROL', payload: level });
    setIsOpen(false);
  };

  const cholesterolPercentage = (state.totalCholesterol / state.maxCholesterolLevel) * 100;
  const isHighCholesterol = cholesterolPercentage >= 80;

  return (
    <div className="fixed bottom-4 right-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-2 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Cholesterol Level</span>
          <span className="text-sm text-gray-600">{state.totalCholesterol}/{state.maxCholesterolLevel} mg/dL</span>
        </div>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`absolute left-0 top-0 h-full transition-all duration-300 ${
              isHighCholesterol ? 'bg-red-500' : 'bg-orange-500'
            }`}
            style={{ width: `${Math.min(cholesterolPercentage, 100)}%` }}
          />
        </div>
        {isHighCholesterol && (
          <div className="mt-2 flex items-center text-red-500 text-sm">
            <AlertTriangle className="w-4 h-4 mr-1" />
            <span>High cholesterol warning</span>
          </div>
        )}
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors shadow-lg"
      >
        Set Cholesterol Limit
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Set Cholesterol Limit</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Cholesterol Level (mg/dL)
                </label>
                <input
                  type="number"
                  value={level}
                  onChange={(e) => setLevel(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  max={300}
                />
                <p className="text-sm text-gray-500 mt-1">Maximum allowed: 300 mg/dL</p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CholesterolSettings;