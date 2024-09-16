import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import { allMushrooms } from '../mDatabase'


const MushroomDetails = () => {
  const {id} = useParams();
  const species = allMushrooms.find(mushroom => mushroom.id === parseInt(id))
  //console.log(species)
  return (
    <section className='mushroom-detail'>
      <div className='mushroom-detail'>
        <h1>{species.names}</h1>
      </div>
      <div className='mushroom-detail__block'>
        <div className='mushroom__picture'>
          <img src={species.picdetail1} alt={species.names}></img>
        </div>
        <div className='mushroom__content'>{species.description}</div>
      </div>

      
      <div className='mushroom__picture'>
      <h1>{species.names}</h1>
          <img src={species.picdetail2} alt={species.names}></img>
          
        </div>
      <div className='mushroom__content'>{species.description}</div>
       
      
    </section>
  )
}

export default MushroomDetails