import React from 'react'
import './footer.css'
import logo from '../../assets/images/logos/IRONVIX_Horizontal_isotipo_blanco.png'
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"


const Footer = () => {
  return (
    <div className='footer-container flex'>
      <div className='logo'>
        <a href="">
          <img src={logo} alt="Ironvix Logo" />
        </a>
      </div> {/* logo */}

      <div className='social-logos flex'>
          {/* <FaFacebookF className='social-logo facebook' /> */}
          <AiOutlineInstagram className='social-logo instagram' />
          {/* <RiTwitterXFill className='social-logo x' /> */}
          <AiOutlineWhatsApp className='social-logo whatsapp' />
      </div> {/* social-logos */}
      
    </div>
  )
}

export default Footer