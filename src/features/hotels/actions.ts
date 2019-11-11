import { SearchInput, Hotel } from './types';
import { fetchData } from '../../shared/helpers';


export enum ActionNames {
  FETCH_HOTELS = 'FETCH_HOTELS',
  SEARCH_LOCATION = 'SEARCH_LOCATION',
}

export type Actions =
  ({ type: ActionNames.SEARCH_LOCATION, payload: SearchInput; })
  | ({ type: ActionNames.FETCH_HOTELS, payload: { hotels: Hotel[] } })

export interface GetHotelsResponse {
  hotels: Hotel[];
}

export function searchLocation(searchInput: SearchInput): Actions {
  return {
    type: ActionNames.SEARCH_LOCATION,
    payload: searchInput,
  }
}

export function fetchHotels(): Actions {
  const inputHotels: Hotel[] = fetchData();
  return {
    type: ActionNames.FETCH_HOTELS,
    payload: { hotels: inputHotels },
  }
}

export type HotelActionTypes =  Actions;