import * as React from 'react';
import { useDispatch } from 'react-redux';
import { DispatchType } from './shared/AppTypes';
import { searchLocation } from './features/hotels/actions';
import { SearchInput } from './features/hotels/types';
import Header from  './layout/Header';
import Footer from  './layout/Footer';
import Navbar from  './layout/Navbar';
import HotelsContainer from './features/hotels/HotelsContainer';
import './App.scss';

function App() {
  const dispatch: DispatchType = useDispatch();
  const handleSearch = (searchInput: SearchInput) => (dispatch(searchLocation(searchInput)));

  return (
    <div data-testid="app">
      <Navbar label='eBerry'/>
      <Header
        handleSearch={handleSearch}
        heading={'LET\'S BOOK YOUR NEXT TRIP'}
      />
      <HotelsContainer />
      <Footer
        label='© 2019 eBerry'
      />
    </div>
  );
}

export default App;
