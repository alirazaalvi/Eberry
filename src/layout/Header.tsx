import * as React from 'react';
import { Search } from '../features/hotels/Search';
import { SearchInput } from '../features/hotels/types';

interface OwnProps {
  heading: string;
  handleSearch(searchInput: SearchInput): void;
}

interface ComponentProps extends OwnProps {};

export const Header = (props: ComponentProps) => {
  return (
    <section className="hero header">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white">
            {props.heading}
          </h1>
        </div>
      </div>
      <div className="hero-foot">
        <div className="content-is-center">
          <Search handleSearch={props.handleSearch} />
        </div>
      </div>
    </section>
  );
};

export default Header;