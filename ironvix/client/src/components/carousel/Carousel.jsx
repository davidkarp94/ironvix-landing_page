import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import placeholder from '../../assets/images/wedding.jpeg';
import placeholderVertical from '../../assets/images/tower.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';

function CarouselComponent() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  const slides = [
    {
      src: placeholder,
      alt: "First slide",
    },
    {
      src: placeholder,
      alt: "Second slide",
    },
    {
      src: placeholder,
      alt: "Third slide",
    },
    {
        src: placeholder,
        alt: "Third slide",
    },
  ];

  return (
    <Carousel data-bs-theme="dark" className='carousel-container' controls={false}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={ windowWidth > 768 ? placeholder : placeholderVertical }
            alt={slide.alt}
          />
          {/* <Carousel.Caption>
              <div className="carousel-text-container">
                  <h5>First slide label</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;