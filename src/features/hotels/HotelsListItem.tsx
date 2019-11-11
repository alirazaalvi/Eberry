import * as React from 'react';
import { Hotel } from './types';
import hotelPlaceholder from './../../assets/images/hotel.jpg';
import Button from '../../controls/Button';


interface OwnProps {
  hotel: Hotel
}

interface ComponentProps extends OwnProps { };

export const HotelListItem = (props: ComponentProps) => {
  const hotel = props.hotel;

  return (
    <div data-testid="hotel-item">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image">
              <img className="image-is-thumbnail" src={hotelPlaceholder} alt="hotel"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{hotel.name}</strong>
                <br />
                <small><b>{hotel.address.streetAddress}</b></small>
                <br />
                <small><b>{hotel.address.city}</b></small>
                <br />
                <small><b>{hotel.address.country}</b></small>
              </p>
            </div>
          </div>
          <div className="content">
            <small>avverage price per night from</small>
            <br />
            <span className="is-size-3">2500 SEK</span>
            <br />
            <small className="has-dark-green-text">Free cancellation</small>
            <br />
            <small className="has-dark-green-text">Pay now or at the hotel</small>
            <br />
            <br />
            <Button
              label="Book Now"
              type="submit"
              data-testid="submit-book-now"
              className="button is-success"
            />
          </div>
        </article>
      </div>
      <br />
    </div>
  );
};

export default HotelListItem;