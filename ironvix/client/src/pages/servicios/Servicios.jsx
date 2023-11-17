import React, { useState } from 'react';
import './servicios.css';
import Title from '../../components/title/Title';

const Servicios = () => {
  const [visibleServicios, setVisibleServicios] = useState(3);

  const servicios = [
    {
      title: 'Casamientos',
      content: 'Ofrecemos servicios de casamientos llamado "Big Chungus", los servicios constan de lo siguiente: -Cathering con los mejores Big Chungus a la plancha que jamás hayas comido -DJ en vivo pasando los mejores temas de L-Gante y muchos otros más!!! -Partidas de Dota en vivo, con invitados especiales como Arteezy o Smash que nos acompañarán en estas intrépidas aventuras por la grieta del invocador -Y mucho más!!!',
    },
  ];

  const handleVerMasClick = () => {
    setVisibleServicios(servicios.length);
  };

  return (
    <section id='servicios'>
      <div className='servicios-container flex'>
        <div className="title">
          <Title text='SERVICIOS' />
        </div>

        <div className='servicios-content flex'>
          {servicios.slice(0, visibleServicios).map((servicio, index) => (
            <div key={index} className='servicio flex'>
              <div className='servicio-text-content'>
                <p className='raleway-bold servicio-title'>{servicio.title}</p>
                <p className='raleway-bold servicio-content'>{servicio.content}</p>
              </div>
              <button className='servicio-button raleway-bold'>Contactar</button>
            </div>
          ))}
        </div>{/* servicios-content */}

        {visibleServicios < servicios.length && (
          <button className='servicio-button raleway-bold ver-mas' onClick={handleVerMasClick}>
            Ver Más
          </button>
        )}
      </div>
    </section>
  );
};

export default Servicios;
