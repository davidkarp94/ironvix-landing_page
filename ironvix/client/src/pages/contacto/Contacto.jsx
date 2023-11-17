import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contacto.css';
import Title from '../../components/title/Title';
import { BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contacto = () => {

  const [status, setStatus] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const form = useRef();
  const emailRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nbkcjj9', 'template_gblcf1m', form.current, '6_h4OceyOK6xhCtTi');

    setStatus('visible');
    setTimeout(() => {
      setStatus('');
    }, 3000);

    e.target.reset();
  };

  const copyToClipboard = () => {
    const emailText = emailRef.current.innerText;

    navigator.clipboard.writeText(emailText);

    setCopyStatus('copy-visible');
    setTimeout(() => {
      setCopyStatus('');
    }, 3000);
  };

  return (
    <section id='contacto'>
      <div className='contacto-container'>
        <div className="title">
            <Title text='CONTACTO' />
        </div>

        <div className="contacto-content">
          <div className='contacto-social'>
            <p className='contacto-social_title raleway-bold'>
              A través de Whatsapp para una atención personalizada en tiempo real.
            </p>
            <p className='contacto-social_title raleway-bold'>
              Horario de Atención: Lunes a Viernes de 9hs a 18hs.
            </p>

            <div className='social-red'>
              <BsWhatsapp className='social-icon' />
              <p className='social-text raleway-black'>Click Aquí</p>
            </div>

            <p className='contacto-social_title raleway-bold'>
              A través del resto de nuestras redes.
            </p>

            <div className='social-red'>
              <BsInstagram className='social-icon' />
              <p className='social-text raleway-black'>Click Aquí</p>
            </div>

            <div className='social-red'>
              <BsLinkedin className='social-icon' />
              <p className='social-text raleway-black'>Click Aquí</p>
            </div>

          </div>

          <div className='contacto-email'>
            <form ref={form} onSubmit={sendEmail} className='contacto-form flex'>
              <input type="text" name='name' placeholder='Nombre' required className='raleway-bold' />
              <input type="email" name='email' placeholder='E-Mail' required className='raleway-bold' />
              <input type="text" name='subject' placeholder='Asunto' required className='raleway-bold' />
              <textarea name="message" rows="7" placeholder='Mensaje' required className='raleway-bold'></textarea>
              <div className='contacto-submit flex'>
                <button type='submit' className='contacto-button raleway-bold'>Enviar Mensaje</button>
                <h5 className={`message-sent raleway-bold ${status === 'visible' ? 'visible' : ''}`}>Mensaje Enviado!</h5>
              </div>
            </form>

            <p className='contacto-social_title raleway-bold'>
              Si deseas enviar un Email desde tu propia casilla, por favor hacelo al:
            </p>
            <div className='contacto-email_copy-container flex' onClick={copyToClipboard}>
              <p className='contacto-social_title raleway-bold contacto-email_copy' ref={emailRef}>
                loreipsum@gmail.bigchungus.ironvix.com
              </p>
              <p className={`raleway-bold copy-message ${copyStatus === 'copy-visible' ? 'copy-visible' : ''}`}>
                Copiado!
              </p>
            </div>
          </div>
        </div>
      </div> {/* contacto-content */}
    </section>
  )
}

export default Contacto