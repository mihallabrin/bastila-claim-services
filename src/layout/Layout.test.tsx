import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Header', () => {
  it('should render the header', () => {
    render(<Layout />);
    const headerEl = screen.getByTestId('Header');

    expect(headerEl).toBeInTheDocument();
  });

  it('should render content', () => {
    render(<Layout />);
    const contentEl = screen.getByTestId('Content');

    expect(contentEl).toBeInTheDocument();
  });

  it('should render the footer', () => {
    render(<Layout />);
    const footerEl = screen.getByTestId('Footer');

    expect(footerEl).toBeInTheDocument();
  });
});
