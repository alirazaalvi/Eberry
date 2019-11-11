import produce from 'immer';
import { HotelActionTypes, ActionNames } from './actions';
import { Hotel } from './types';

export interface HotelState {
  hotels: Hotel[],
  pagedHotels: Hotel[],
  noResult: boolean,
}

export const defaultState: HotelState = {
  hotels: [],
  pagedHotels: [],
  noResult: false,
};

export const reducer = (
  state: HotelState = defaultState,
  action: HotelActionTypes
) => produce(state, (draft) => {
  let currentDraft = draft;
  //const currentCount = currentDraft.hotels;

  switch(action.type) {
    case ActionNames.SEARCH_LOCATION: {
      const allHotels = currentDraft.hotels;
      const filteredHotels: Hotel[] = [];
      const searchText = action.payload.location.toLowerCase();
      for(let i in currentDraft.hotels) {
        const city = allHotels[i].address.city || '';
        const country = allHotels[i].address.country || '';

        if(searchText === city.toLowerCase() || searchText ===  country.toLowerCase()) {
          filteredHotels.push(allHotels[i]);
        }

        if(filteredHotels.length > 9) {
          break;
        }
      }

      currentDraft.noResult = filteredHotels.length < 1;
      currentDraft.pagedHotels = filteredHotels;
      return;
    }
    case ActionNames.FETCH_HOTELS: {
      currentDraft.hotels = action.payload.hotels;
      currentDraft.pagedHotels = action.payload.hotels.slice(0, 10);
      return;
    }
    default: {
      currentDraft = draft;
    }
  }
});

export default reducer;