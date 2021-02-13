import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('should render the page', () => {
    render(<Home />);
    const headerEl = screen.getByTestId('Home');

    expect(headerEl).toBeInTheDocument();
  });
});
