import * as React from 'react';
import { cleanup, render } from '@testing-library/react';
import HotelListItem from './HotelsListItem';
import { Hotel } from './types';
import { hotels } from '../../data/testData';

afterEach(cleanup);

const hotel: Hotel = hotels[0];

test('hotel item is rendered', () => {
  const { getByText } = render(<HotelListItem hotel={hotel} />);

  const streetAddress = hotel.address.streetAddress || '';
  const city = hotel.address.city || '';
  const country = hotel.address.country || '';

  expect(getByText(streetAddress).innerHTML).toBe(streetAddress);
  expect(getByText(hotel.name).innerHTML).toBe(hotel.name);
  expect(getByText(city).innerHTML).toBe(city);
  expect(getByText(country).innerHTML).toBe(country);
  //expect(getByTestId('submit-book-now')).toBeInTheDocument();
});