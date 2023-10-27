import React, { useState } from 'react'
import './portfolioImage.css'
import PortfolioImageSlider from './PortfolioImageSlider'

const PortfolioImage = ({ src, alt, title }) => {

    const [showOverlay, setShowOverlay] = useState(false);

    const toggleShowOverlay = () => {
        setShowOverlay(!showOverlay);
    }

  return (
    <>
        <div className="portfolio-image" onClick={toggleShowOverlay}>
            <div className='overlay'></div>
                <img src={src} alt={alt} />
            <p className='raleway-bold'>{title}</p>
        </div>

        {showOverlay && (
            <PortfolioImageSlider toggleShowOverlay={toggleShowOverlay} title={title} />
        )}
    </>
  )
}

export default PortfolioImage;