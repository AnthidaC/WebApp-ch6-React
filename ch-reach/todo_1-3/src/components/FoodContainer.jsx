import React, { useState, useEffect } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';

const FoodContainer = () => {
  const [food, setFood] = useState([
    { name: "cake", price: 35, isBestSeller: true },
    { name: "bread", price: 25, isBestSeller: false },
    { name: "milk", price: 15, isBestSeller: true },
    { name: "donut", price: 45, isBestSeller: false },
    { name: "cookie", price: 55, isBestSeller: true },
  ]);

  const [mode, setMode] = useState(() => {
    return localStorage.getItem('mode') || 'User';
  });

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const deleteItem = (index) => {
    setFood(prevFood => prevFood.filter((_, i) => i !== index));
  };

  const addItem = (item) => {
    setFood(prevFood => [...prevFood, item]);
  };

  const toggleMode = () => {
    setMode(prev => (prev === 'User' ? 'Admin' : 'User'));
  };

  return (
    <div className="food-container-box">
      <div className="mode-toggle-header">
        <span className="mode-text">{mode} Mode</span>
        <button className="mode-btn" onClick={toggleMode}>
          {mode === 'User' ? 'Admin' : 'User'}
        </button>
      </div>

      <h2 className="menu-title">Our Menu</h2>
      <FoodList food={food} deleteItem={deleteItem} mode={mode} />

      {mode === 'Admin' && <FoodForm addItem={addItem} />}
    </div>
  );
};

export default FoodContainer;
