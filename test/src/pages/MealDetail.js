import React from 'react';

const MealDetail = ({ meal, onBackClick }) => {
  return (
    <div>
      <button onClick={onBackClick}>Volver a la lista</button>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '80%' }} />
      <p>Category: {meal.strCategory}</p>
      <p>Instructions: {meal.strInstructions}</p>
      <p>Ingredients:</p>
      <ul>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
          const ingredientKey = `strIngredient${i}`;
          const measureKey = `strMeasure${i}`;
          if (meal[ingredientKey]) {
            return (
              <li key={ingredientKey}>
                {meal[ingredientKey]} - {meal[measureKey]}
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default MealDetail;
