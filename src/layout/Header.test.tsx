import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);
const handleSearch = jest.fn();

test('it should render', () => {
  const heading = 'Heading';
  const { getByText } = render(<Header heading={heading} handleSearch={handleSearch} />);

  expect(getByText(heading).innerHTML).toBe(heading);
});