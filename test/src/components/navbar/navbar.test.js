import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
test('renders Navbar component', () => {
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(container.querySelector('.navbar-container')).toBeInTheDocument();
});

test('clicking Navbar navigates to home', () => {
  const mockNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  fireEvent.click(container.querySelector('.navbar-container'));

  expect(mockNavigate).toHaveBeenCalledWith('/');
});