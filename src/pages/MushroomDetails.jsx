import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import { allMushrooms } from '../mDatabase'


const MushroomDetails = () => {
  //'id' below is stored as a string
  const {id} = useParams();
  //console.log(typeof id)
  //the paseInt turns a string into an integer
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
        <div className='mushroom-content-block'>
          <h2>Background</h2>
          <p>{species.background}</p>
        </div>
      </div>

      <div className='mushroom-detail__block'>
        <div className='mushroom__picture'>
          <img src={species.picdetail2} alt={species.names}></img>
        </div>
        <div className='mushroom-content-block'>
          <h2>Biology</h2>
          <p>{species.biology}</p>
        </div>
      </div>

      <div className='mushroom-detail__block'>
        <div className='mushroom__picture'>
          <img src={species.picdetail3} alt={species.names}></img>
        </div>
        <div className='mushroom-content-block'>
          <h2>Medley</h2>
          <p>{species.medley}</p>
          <p> <h3>Similar Species</h3></p>
         
          <p>{species.similarSpecies}</p>
          <p>{species.references && species.references.length > 0 && (
            <>
              <h3>References</h3>
              <ul>
                {species.references.map((ref, index) => (
                  <li key={index}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}</p>
        </div>
      </div>
    </section>
  )
}

export default MushroomDetails