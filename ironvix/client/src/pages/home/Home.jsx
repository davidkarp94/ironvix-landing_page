import React from 'react'
import './home.css'
import Carousel from '../../components/carousel/Carousel';
import Title from '../../components/title/Title';

const Home = () => {
  return (
    <section id='home'>
      <div className='home-container'>
        <div className="title">
          <Title text='HOME' />
        </div>
        <Carousel />
      </div>
    </section>
  )
}

export default Home