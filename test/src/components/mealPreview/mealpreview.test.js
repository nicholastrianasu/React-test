import React from 'react';
import { render } from '@testing-library/react';
import MealPreview from './MealPreview';

test('renders MealPreview component', () => {
  const meal = {
    idMeal: 1,
    strMeal: 'Test Meal',
    strMealThumb: 'test-image.jpg',
  };

  const { getByAltText } = render(<MealPreview meal={meal} />);
  const imageElement = getByAltText(meal.strMeal);

  expect(imageElement).toBeInTheDocument();
  expect(imageElement.src).toContain(meal.strMealThumb);
});