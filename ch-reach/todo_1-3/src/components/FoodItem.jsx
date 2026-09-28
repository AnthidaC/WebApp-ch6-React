import React from 'react';

const FoodItem = ({ name, price, isBestSeller, index, deleteItem, mode }) => {
  return (
    <li className="food-item">
      <span className="food-info">
        {name} - {price} baht {isBestSeller && <span className="bestseller-badge" title="Best Seller">🎖️</span>}
      </span>
      {mode === 'Admin' && (
        <button className="del-btn" onClick={() => deleteItem(index)}>
          Delete
        </button>
      )}
    </li>
  );
};

export default FoodItem;
