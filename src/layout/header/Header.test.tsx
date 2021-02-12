import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render', () => {
    render(<Header />);
    const headerEl = screen.getByTestId('Header');

    expect(headerEl).toBeInTheDocument();
  });

  it('should render the logo', () => {
    render(<Header />);
    const logoEl = screen.getByTestId('Logo');

    expect(logoEl).toBeInTheDocument();
  });
});
