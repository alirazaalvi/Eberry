import hotel1 from '../assets/images/hotels/hotel1.jpg';
import hotel2 from '../assets/images/hotels/hotel2.jpg';
import hotel3 from '../assets/images/hotels/hotel3.jpg';
import hotel4 from '../assets/images/hotels/hotel4.jpg';
import hotel5 from '../assets/images/hotels/hotel5.jpg';
import hotel6 from '../assets/images/hotels/hotel6.jpg';
import hotel7 from '../assets/images/hotels/hotel7.jpg';
import hotel8 from '../assets/images/hotels/hotel8.jpg';
import hotel9 from '../assets/images/hotels/hotel9.jpg';
import hotel10 from '../assets/images/hotels/hotel10.jpg';

const imagesList: string[] = [
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
  hotel8,
  hotel9,
  hotel10,
];

export const getRandomImage = (() => {
  let counter = -1;
  return () => {
    counter = counter === 9 ? 0 : (counter + 1);
    return imagesList[counter];
  };
})();