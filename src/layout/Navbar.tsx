import * as React from 'react';

interface OwnProps {
  label: string;
}

export const Navbar = (props: OwnProps) => (
  <section className="hero is-header is-small">
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-white	">
          {props.label}
        </h1>
      </div>
    </div>
  </section>
);

export default Navbar;