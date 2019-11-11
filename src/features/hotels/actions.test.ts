import { SearchInput } from './types';
import { searchLocation, Actions, ActionNames } from './actions';

describe('hotel actions', () => {
  it('should search location', () => {
    const SearchInput: SearchInput = { location: 'Stockholm' };

    const searchLocationAction: Actions = {
      type: ActionNames.SEARCH_LOCATION,
      payload: SearchInput
    }

    expect(searchLocation(SearchInput)).toEqual(searchLocationAction);
  });
});