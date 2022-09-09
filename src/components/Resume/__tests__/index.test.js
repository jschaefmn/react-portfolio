import React from 'react';
import { render, cleanup,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup);

describe('Resume component', () => {

  it('renders', () => {
    render(<Resume />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Resume />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders resume download link', () => {
  render(<Resume />);
  const linkElement = screen.getByText(/Download my resume!/i);
  expect(linkElement).toBeInTheDocument();
});