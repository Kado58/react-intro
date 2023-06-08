import React from 'react';
import { render, screen } from '@testing-library/react';
import BookApp from './BookApp';

test('renders learn react link', () => {
  render(<BookApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
