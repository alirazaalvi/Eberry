import { rootReducer } from '../configureStore';
import * as Hotel from '../features/hotels/reducer';
import { HotelActionTypes } from '../features/hotels/actions';

export type AppState = ReturnType<typeof rootReducer>;

export type ActionTypes = (HotelActionTypes);

export const reducers = {
  hotelReducer: Hotel.reducer,
};


