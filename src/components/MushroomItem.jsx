import React from 'react'
import { Link } from 'react-router-dom'

const MushroomItem = ({mushroomID, family, picture, species, 
  names, habitat, season, edibility, description}) => {
  return (
   <article className='mushroom'>
    <div className='mushroom__picture'>
      <img src={picture} alt={species}></img>
    </div>
    <div className='mushroom__content'>
      <Link to={`/mushrooms/${mushroomID}`}>
        <h3>{species}</h3>
      </Link>
    </div>

   </article>
  )
}

export default MushroomItem