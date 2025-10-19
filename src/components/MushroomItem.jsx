import React from 'react'
import { Link } from 'react-router-dom'

//This page describes each mushroom, displays listed categories within each mushroom id taken from database. This is imported in mushrooms.jsx where each id is displayed in column according to the instructions on this page.
const MushroomItem = ({mushroomID, familyHead, family, picture, species, 
  names, habitat, season, edibility, description}) => {
  return (
    <><h1 className='species_title'>{familyHead}</h1>
    <article className='mushroom'>
      {/* <div className='species_title'><h1>{familyHead}</h1></div>    */}
      <div className='mushroom__picture'>

        <h1>{family}</h1>
        <img src={picture} alt={species}></img>
      </div>

      <div className='mushroom__content'>
        {/* <div className='species_title'><h1>{familyHead}</h1></div> */}
        <Link to={`/mushrooms/${mushroomID}`}>
          <h2>{species}</h2>
        </Link>
        <h3>({names})</h3>
        <p>Habitat: {habitat}</p>
        <p>Season: {season}</p>
        <p>Edibility: {edibility}</p>
        <p>Description: {description}</p>
        <div className='mushroom__footer'>
          <Link to={`mushrooms/families/${family}`} className='btn'>{family}</Link>
        </div>
      </div>

    </article></>
  )
}

export default MushroomItem