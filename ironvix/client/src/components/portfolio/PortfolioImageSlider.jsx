import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import placeholder from '../../assets/images/wedding.jpeg'
import './portfolioImageSlider.css'
import { AiFillCloseCircle } from 'react-icons/ai'
const PortfolioImageSlider = ({ toggleShowOverlay, title }) => {
    return (
        <div className="overlay-background">
            <div className='image-slider-container'>
                <AiFillCloseCircle className='close-modal' onClick={ toggleShowOverlay } />

                <h1 className='slider-title raleway-bold'>{title}</h1>

                <Carousel
                showStatus={false}
                thumbWidth={80}
                className="carousel"
                >
                        <img src={placeholder} alt="Image 1" />
                        <img src={placeholder} alt="Image 2" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                        <img src={placeholder} alt="Image 3" />
                </Carousel>
            </div>
        </div>
    );
};


export default PortfolioImageSlider;
