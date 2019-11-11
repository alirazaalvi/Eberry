import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoResult from './NoResult';

afterEach(cleanup);

test('it should render', () => {
  const label = 'Message';
  const { getByText } = render(<NoResult message={label} />);

  expect(getByText(label).innerHTML).toBe(label);
});