import React from 'react'
import './title.css';

const Title = ( props ) => {
  return (
    <div className='title-container'>
        <p className='raleway-bold'>
          {props.text}
        </p>
    </div>
  )
}

export default Title