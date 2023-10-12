import React from 'react'
import './header.css'
import logo from '../../assets/images/logos/IRONVIX_Horizontal_isotipo_blanco.png'
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
import { RiTwitterXFill } from "react-icons/ri"

const Header = () => {

  return (
    <div className='bg-blue flex header-container'>

      <div className='logo'>
        <a href="">
          <img src={logo} alt="Ironvix Logo" />
        </a>
      </div> {/* logo */}
      
      <div className='flex nav-links'>
        <a href="">
          <p className='raleway-bold'>HOME</p>
        </a>

        <a href="">
          <p className='raleway-bold'>PORTFOLIO</p>
        </a>

        <a href="">
          <p className='raleway-bold'>SERVICIOS</p>
        </a>

        <a href="">
          <p className='raleway-bold'>NOSOTROS</p>
        </a>

        <a href="">
          <p className='raleway-bold'>CONTACTO</p>
        </a>

        </div> {/* nav-links */}

        <div className='social-logos flex'>
          <FaFacebookF className='social-logo facebook' />
          <AiOutlineInstagram className='social-logo instagram' />
          <RiTwitterXFill className='social-logo x' />
          <AiOutlineWhatsApp className='social-logo whatsapp' />
        </div> {/* social-logos */}

    </div>
  )
}

export default Header