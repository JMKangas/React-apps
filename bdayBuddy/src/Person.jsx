import React from 'react'

const Person = ({image, name, age}) => {
  return <article className='person'>
    <img src={image} alt='Not found' className='img'></img>
    <h4> {name} </h4>
    <p> {age} Years </p>
  </article>
}

export default Person