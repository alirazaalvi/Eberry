import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

afterEach(cleanup);

test('it should render', () => {
  const label = 'Navbar';
  const { getByText } = render(<Navbar label={label} />);

  expect(getByText(label).innerHTML).toBe(label);
});