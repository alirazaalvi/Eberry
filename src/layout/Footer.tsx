import * as React from 'react';

interface OwnProps {
  label: string;
}

interface ComponentProps extends OwnProps {};

export const Footer = (props: ComponentProps) => {
  return (
    <section className="hero is-footer is-small">
      <div className="hero-body">
        <div className="container has-text-centered">
          <small className="has-text-white">
            {props.label}
          </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;