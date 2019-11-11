import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

afterEach(cleanup);

test('it should render', () => {
  const label = 'Footer';
  const { getByText } = render(<Footer label={label} />);

  expect(getByText(label).innerHTML).toBe(label);
});