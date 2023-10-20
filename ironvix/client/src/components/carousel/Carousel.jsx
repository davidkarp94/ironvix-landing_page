import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import placeholder from '../../assets/images/wedding.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.css';

function CarouselComponent() {
  // Array de objetos con la información de cada diapositiva
  // REEMPLAZAR CON DB
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
            src={slide.src}
            alt={slide.alt}
          />
          {/* Puedes descomentar la sección de Carousel.Caption si deseas agregar texto a cada diapositiva */}
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