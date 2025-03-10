import React from 'react';
import { render, screen } from '@testing-library/react';
import Expenses from './Expenses';

test('renders learn react link', () => {
  render(<Expenses />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
