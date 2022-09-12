import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('logo', () => {
  render(<App />);
  const linkElement = screen.getAllByTestId(/logo/i);
  expect(linkElement).toBeInTheDocument();
});
