import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../shared/store';
import { DispatchType } from '../../shared/AppTypes';
import { fetchHotels } from './actions';
import { Hotel } from './types';
import NoResult from './NoResult';
import HotelListItem from './HotelsListItem';

const HotelsContainer = () => {
  const pagedHotels: Hotel[] = useSelector((state: AppState) => state.hotelReducer.pagedHotels);
  const noResult: boolean = useSelector((state: AppState) => state.hotelReducer.noResult);
  const dispatch: DispatchType = useDispatch();

  const getHotels = useCallback(() => dispatch(fetchHotels()), [dispatch]);

  useEffect(() => {
    getHotels();
  }, [getHotels]);


  const hotelsMarkup: JSX.Element[] = pagedHotels.map(hotel => (
    <HotelListItem key={hotel.name} hotel={hotel} />
  ));

  const noResultMarkup: JSX.Element = (<NoResult
    message="Sorry, but your search returned no results. Please try another search."
  />);

  return (
      <div>
        <div
          className="container"
          data-testid="container"
        >
          <br />
          <div className="App">
          {
            noResult ? noResultMarkup : hotelsMarkup
          }
          </div>
        </div>
    </div>)
}

export default HotelsContainer;
