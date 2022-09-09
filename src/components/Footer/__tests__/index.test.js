import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup);

describe('Footer component', () => {
  it('renders', () => {
    render(<Footer />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// test links in contact section
test('renders footer links', () => {
  render(<Footer />);
  const githubLink = screen.getByText(/GitHub/i);
  const linkedinLink = screen.getByText(/LinkedIn/i);
  const twitterLink = screen.getByText(/Twitter/i);
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
  expect(twitterLink).toBeInTheDocument();
});