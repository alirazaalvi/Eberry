import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';

afterEach(cleanup);

const handleSearch = jest.fn();

test('should render search view', () => {
  const { getByTestId } = render(<Search handleSearch={handleSearch} />);

  expect(getByTestId('location-input')).toBeInTheDocument();
  expect(getByTestId('submit-search')).toBeInTheDocument();
});

test('should call serch handler on click', async() => {
  const { getByTestId } = render(<Search handleSearch={handleSearch} />);

  fireEvent.change(getByTestId('location-input'), {target: {value: 'Stockholm'}});
  fireEvent.click(getByTestId('submit-search'));

  await(() => {
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

});