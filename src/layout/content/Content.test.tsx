import React from 'react';
import { render, screen } from '@testing-library/react';

import Content from './Content';

describe('Content', () => {
  it('should render', () => {
    render(<Content />);
    const contentEl = screen.getByText(/Content/i);

    expect(contentEl).toBeInTheDocument();
  });
});
