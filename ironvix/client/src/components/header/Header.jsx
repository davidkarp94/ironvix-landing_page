import React from 'react'
import './header.css'
import logo from '../../assets/images/logos/IRONVIX_Horizontal_isotipo_blanco.png'
// import { FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
// import { RiTwitterXFill } from "react-icons/ri"

const Header = () => {

  const headerHeight = '6rem';

  return (
    <div className='flex flex-center'>
      <div className='flex header-container'>
        <div className='logo'>
          <a href="">
            <img src={logo} alt="Ironvix Logo" />
          </a>
        </div> {/* logo */}
      
        <div className='flex nav-links'>
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
          <div className='social-logos flex'>
            {/* <FaFacebookF className='social-logo facebook' /> */}
            <AiOutlineInstagram className='social-logo instagram' />
            {/* <RiTwitterXFill className='social-logo x' /> */}
            <AiOutlineWhatsApp className='social-logo whatsapp' />
          </div> {/* social-logos */}
      </div>
    </div>
  )
}

export default Header