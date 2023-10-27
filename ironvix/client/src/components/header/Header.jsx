import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/images/logos/IRONVIX_Horizontal_isotipo_blanco.png';
import logo_simp from '../../assets/images/logos/IRONVIX_isotipo.png';
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth >= 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className='flex flex-center'>
      <div className='flex header-container'>
        <div className='logo'>
          <a href="#home">
            <img src={windowWidth > 900 ? logo : logo_simp} alt="Ironvix Logo" />
          </a>
        </div>

        <div className='nav-links_container flex flex-center'>
          {windowWidth < 768 && (
            <GiHamburgerMenu className='mobile-menu' onClick={toggleMobileMenu} />
          )}

          {(showMobileMenu || windowWidth >= 768) && 
            <>
                <div className={`nav-links flex ${showMobileMenu ? 'absolute' : '' }`}>
                  <a href="#home" id='home-link'>
                    <p className='raleway-bold'>HOME</p>
                  </a>
                  <a href="#portfolio">
                    <p className='raleway-bold'>PORTFOLIO</p>
                  </a>
                  <a href="#servicios">
                    <p className='raleway-bold'>SERVICIOS</p>
                  </a>
                  <a href="#nosotros">
                    <p className='raleway-bold'>NOSOTROS</p>
                  </a>
                  <a href="#contacto">
                    <p className='raleway-bold'>CONTACTO</p>
                  </a>
                </div> {/* nav-links */}

                <div className={`social-logos ${showMobileMenu ? 'none' : 'flex'}`}>
                  <AiOutlineInstagram className='social-logo instagram' />
                  <AiOutlineWhatsApp className='social-logo whatsapp' />
                </div> {/* social-logos */}
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
