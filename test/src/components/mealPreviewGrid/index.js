import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MealProvider, { useMeal } from './MealProvider'; 

const MealPreviewGrid = () => {
  const { meals, isLoading, error } = useMeal();

  return (
    <div className='meal-grid'>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

describe('MealProvider', () => {
  const server = setupServer(
    rest.get('https://api.example.com/meals', (req, res, ctx) => {
      return res(ctx.json({ meals: [{ idMeal: 1, strMeal: 'Meal 1' }, { idMeal: 2, strMeal: 'Meal 2' }] }));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should fetch meals by first letter and provide them to its children', async () => {
    render(
      <MealProvider>
        <MealPreviewGrid />
      </MealProvider>
    );

    expect(screen.getByText('Meal 1')).toBeInTheDocument();
    expect(screen.getByText('Meal 2')).toBeInTheDocument();
  });
});

export default MealPreviwGrid;
