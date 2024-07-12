import React from "react";

import FlyAgaric from './images/FlyAgaric.jpg'
import red_crackingBolete from './images/red_crackingBolete.jpg'
import bitterBoleteSide from './images/bitterBoleteSide.jpg'



const allMushrooms = [
  {
    id: '1',
    family: 'Amanitaceae',
    picture: FlyAgaric,
    species: 'Amanita muscaria',
    names: 'Fly Agaric',
    habitat: 'Native to Northern hemisphere but transported worldwide. Under conifer and deciduous trees. In exposed earth, or in grass.',
    season: 'Late summer to late Autumn depending on local climate.',
    edibility: 'Poisonous',
    description: 'Caps can be bright red, yellow or beige or a combination. Gills are always white.  Grows under trees. Fly agaric fruiting bodies emerge from the soil looking like white eggs. As the mushroom grows the cap is covered with numerous small white to yellow pyramid-shaped warts. These are remnants of the universal veil, a membrane that encloses the entire mushroom when it is still very young.',
  },
  {
    id: '2',
    family: 'Boletaceae',
    picture: red_crackingBolete,
    species: 'Xerocomellus zelleri',
    names: 'Zellers bolete',
    habitat: 'This bolete grows exclusively in Western North America from British Columbia to Mexico. It is fairly common in B.C. It often grows in Dougals fir forests and on decaying cedar stumps. It can grow solitary or in small groups.',
    season: 'Summer to Late Fall',
    edibility: 'Edible',
    description: 'Caps are a dark brownish red. The rim of the cap is red and the stem has a streaked red look. The spores are contained within the spongy, bright yellow structures underneath the cap. The stems are red with red streaks.',
  },
  {
    id: '3',
    family: 'Boletaceae',
    picture: bitterBoleteSide,
    species: 'Tylopilus felleus',
    names: 'Bitter Bolete',
    habitat: 'Habitat: This bolete grows singly or in small groups on hardwood and conifer woods. It is mycorrhizal with hardwood trees, often beech. Literature places it as mostly growing in eastern Canada but it does grow at lower elevations on the west coast.',
    season: 'Season: Early summer to mid-winter.',
    edibility: 'Edibility: Edible but not choice, very bitter',
    description: 'Description: Caps are beige to brown. Stalks are lighter than caps with a faint lattice of darker streaks. Spongy spores below the cap are light tan or brown but stain darker brown when bruised or damaged.',
  }
]

export default allMushrooms;




// // server.js
// const Pool = require("pg").Pool;
// require("dotenv").config();

// // Replace these with your PostgreSQL connection details

// const config = {
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DATABASE,
//   port: process.env.POSTGRES_PORT
// };

// const pool = new Pool(config);

// module.exports = pool;
