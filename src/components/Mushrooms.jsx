import React, { useState } from 'react'
import {allMushrooms} from '../mDatabase.js'
import MushroomItem from './MushroomItem.jsx'

const Mushrooms = () => {
  const [mushroom, setMushroom] = useState(allMushrooms)
  return (
    <section className='mushrooms'>
      <div className='container'> {
        mushroom.map(({id, family, picture, species, 
          names, habitat, season, edibility, description}) => <MushroomItem key={id} mushroomID={id} family={family}
          picture={picture} species={species} names={names} habitat={habitat} season={season}
          edibility={edibility} description={description}></MushroomItem>)
      }
      </div>
    </section>
  )
}

export default Mushrooms