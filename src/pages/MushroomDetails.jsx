import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import { allMushrooms } from '../mDatabase'


const MushroomDetails = () => {
  const {id} = useParams();
  const species = allMushrooms.find(mushroom => mushroom.id === parseInt(id))
  //console.log(species)
  return (
    <section className='post-detail'>

      <h1>{species.names}</h1>
      <div className='post-detail__thumbnail'>
      <div className='mushroom__picture'>
          <img src={species.picdetail1} alt={species.names}></img>
        </div>
       
      </div>
    </section>
  )
}

export default MushroomDetails