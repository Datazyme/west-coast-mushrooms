import React from 'react'
import { Link } from 'react-router-dom'
import MushroomFamilies from '../pages/MushroomFamilies'

const MushroomItem = ({mushroomID, family, picture, species, 
  names, habitat, season, edibility, description}) => {
  return (
   <article className='mushroom'>
    <div className='mushroom__picture'>
      <img src={picture} alt={species}></img>
    </div>
    <div className='mushroom__content'>
      
      <Link to={`/mushrooms/${mushroomID}`}>
        <h2>{species}</h2>
        </Link>
        <h3>({names})</h3>
        <p>{habitat}</p>
        <p>{season}</p>
        <p>{edibility}</p>
        <p>{description}</p>
    
      <div className='mushroom__footer'>
        <Link to={`mushrooms/families/${family}`} className='btn category'>{family}</Link>
      </div>
    </div>

   </article>
  )
}

export default MushroomItem