import React from 'react'
import './contacto.css'
import Title from '../../components/title/Title';

const Contacto = () => {
  return (
    <section id='contacto'>
      <div className='contacto-container'>
        <div className="title">
            <Title text='CONTACTO' />
        </div>
      </div>
    </section>
  )
}

export default Contacto