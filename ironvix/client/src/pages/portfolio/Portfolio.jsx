import React from 'react'
import './portfolio.css'
import Title from '../../components/title/Title';
import placeholder from '../../assets/images/wedding.jpeg'
import PortfolioImage from '../../components/portfolio/PortfolioImage';

const Portfolio = () => {

  const images = [
    {
      src: placeholder,
      alt: "First slide",
      title: "Casamiento de Carla"
    },
    {
      src: placeholder,
      alt: "First slide",
      title: "Casamiento de Roberta"
    },
    {
      src: placeholder,
      alt: "First slide",
      title: "Casamiento de Gertrudis"
    },
    {
      src: placeholder,
      alt: "First slide",
      title: "Casamiento de Rigoberta"
    },
    {
      src: placeholder,
      alt: "First slide",
      title: "Casamiento de Poltrufia"
    },
    {
      src: placeholder,
      alt: "First slide",
      title: "Casamiento de Anselmina"
    },
  ];

  return (
    <section id='portfolio'>
      <div className='portfolio-container'>
        <div className="title">
          <Title text='PORTFOLIO' />
        </div>

        <div className='portfolio-images'>
          {images.map((image, index) => (
            <PortfolioImage 
            src={image.src}
            alt={image.alt}
            key={index}
            title={image.title}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio