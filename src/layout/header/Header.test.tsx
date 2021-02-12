import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render', () => {
    render(<Header />);
    const headerText = screen.getByText(/Header/i);

    expect(headerText).toBeInTheDocument();
  });
});
