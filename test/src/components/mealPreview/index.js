import React from 'react';
import './index.css';

const MealPreview = ({ meal }) => {
  const mealStyle = {
    fontFamily: "'Your-New-Font', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };

  return (
    <div className='meal-preview' style={mealStyle}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
};

export default MealPreview;
