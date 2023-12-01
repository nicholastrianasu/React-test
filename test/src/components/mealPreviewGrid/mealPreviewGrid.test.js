import React from 'react';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MealPreviewGrid from './MealPreviewGrid';

const server = setupServer(
  rest.get('https://api.example.com/meals', (req, res, ctx) => {
    return res(
      ctx.json({
        meals: [{ idMeal: 1, strMeal: 'Meal 1' }, { idMeal: 2, strMeal: 'Meal 2' }],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches meals and displays them in MealPreviewGrid', async () => {
  const { findByText } = render(
    <MealProvider>
      <MealPreviewGrid />
    </MealProvider>
  );

  
  await findByText('Meal 1');

  expect(await findByText('Meal 1')).toBeInTheDocument();
  expect(await findByText('Meal 2')).toBeInTheDocument();
});