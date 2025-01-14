import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import { allMushrooms } from '../mDatabase'

// const MushroomFamilies = () => {
//   return (
//     <div>MushroomFamilies</div>
//   )
// }

const MushroomFamilies = () => {
  const {family} = useParams();
  //console.log({family})
  //this only gets the first family it comes accross try map
  const fam = allMushrooms.filter(mushroom => mushroom.family === family)
  //console.log(typeof family)
  //console.log(fam);

  // const famMap = fam.map((fam, index) => <h1 key={index}>{fam}</h1>)
  // console.log(famMap)
  return (
    <section className='mushroom-detail'>
      {/* <div className='mushroom-detail'>
        <h1>{item.names}</h1>
      </div> */}
      <div className='mushroom-detail__block'>
        {fam.map((item) => (<><div key={item.id} className='mushroom__picture'>
          <img src={item.picture} alt={item.names}></img>
        </div><div className='mushroom__content'>
            <h2>History</h2>
            <p>{family}</p>
          </div></>))}

      </div>

      {/* <div className='mushroom-detail'>
        <h1>{fam[1].names}</h1>
      </div>
      <div className='mushroom-detail__block'>
        <div className='mushroom__picture'>
          <img src={fam[1].picture} alt={fam[1].names}></img>
        </div>
        <div className='mushroom__content'>
          <h2>History</h2>
          <p>{family}</p>
        </div>
      </div> */}
    </section>
  )
}


export default MushroomFamilies