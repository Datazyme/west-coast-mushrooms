import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import { allMushrooms } from '../mDatabase'


const MushroomFamilies = () => {
  const {family} = useParams();
  const fam = allMushrooms.filter(mushroom => mushroom.family === family)
  return (
    <section className='mushroom-detail'>
      {fam.map((item) => (<>
      <div key={item.id} className='mushroom-detail'>
        <h1>{item.names}</h1>
      </div>
      <div className='mushroom-detail__block'>
          <div className='mushroom__picture'>
            <img src={item.picture} alt={item.names}></img>
          </div>
          <div className='mushroom__content'>
            <h2>History</h2>
            <p>{item.description}</p>
          </div>
        </div></>))}
    </section>
  )
}


export default MushroomFamilies