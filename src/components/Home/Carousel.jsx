import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

import action from '../../assets/action.png';
import drama from '../../assets/drama.png';
import fantasy from '../../assets/fantasy.png';
import horror from '../../assets/horror.png';
import music from '../../assets/music.png';
import romance from '../../assets/romance.png';
import thriller from '../../assets/thriller.png';
import western from '../../assets/western.png';
import fiction from '../../assets/fiction.png';

const images = [
  action,
  drama,
  fantasy,
  horror,
  music,
  romance,
  thriller,
  western,
  fiction,
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`${styles.slide} ${
            index === currentImageIndex ? styles.active : ''
          }`}
        />
      ))}
    </div>
  );
};

export default Carousel;
