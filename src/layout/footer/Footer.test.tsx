import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('should render', () => {
    render(<Footer />);
    const footerEl = screen.getByTestId('Footer');

    expect(footerEl).toBeInTheDocument();
  });
});
