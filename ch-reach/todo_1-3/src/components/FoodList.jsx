import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ food, deleteItem, mode }) => {
  return (
    <div className="food-list-container">
      <ul className="food-list">
        {food.map((item, index) => (
          <FoodItem
            key={index}
            index={index}
            name={item.name}
            price={item.price}
            isBestSeller={item.isBestSeller}
            deleteItem={deleteItem}
            mode={mode}
          />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
