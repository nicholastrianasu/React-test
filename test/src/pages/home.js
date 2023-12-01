import React from 'react';

function Home({ meals, onMealClick }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          style={{ flexBasis: 'calc(33.33% - 10px)', margin: '5px', cursor: 'pointer' }}
          onClick={() => onMealClick(meal)} 
        >
          <img src={meal.strMealThumb} alt={meal.strMeal} style={{ maxWidth: '80%' }} />
        </div>
      ))}
    </div>
  );
}

export default Home;
