import React from "react";

import AmanitaSadddle from './images/AmanitaSaddle.jpg'
import red_crackingBolete from './images/red_crackingBolete.jpg'
import bitterBoleteSide from './images/bitterBoleteSide.jpg'
import Amanita_bigfam from './images/Amanita_bigfam.jpg'
import BigAmanitaTop from './images/BigAmanitaTop.jpg'
import BleedingTooth1 from './images/BleedingTooth1.jpg'
import Baby_amanita_bite1 from './images/Baby_amanita_bite1.jpg'
import Oyster_mush_top1 from './images/Oyster_mush_top1.jpg'
import BirdsEggWithEggs from './images/BirdsEggWithEggs.jpg'



export const allMushrooms = [
  {
    id: 1,
    family: 'Agaricaceae',
    picture: BirdsEggWithEggs,
    species: 'Nidula niveotomentosa',
    names: "Bird's Nest Fungus",
    habitat: 'Globally distributed. These fungi are saprotrophs and grow on dead wood. They prefer moist environments.',
    season: 'Late spring to early fall.',
    edibility: 'Not known',
    description: "Bird's egg fungus is very small, around one centimeter or less in diameter and height. They grow upright on dead branches. During reporoduction structures that look like a clutch of  flattened eggs appear at the bottom of the inside of the bowl. These egg like structures are called periodoles and contain the spores. They are attached to the cup by a thin cord called a 'funiculus'.",
  },
  {
    id: 2,
    family: 'Amanitaceae',
    picture: Amanita_bigfam,
    species: 'Amanita muscaria',
    names: 'Fly Agaric',
    habitat: 'Native to Northern hemisphere but transported worldwide. Under conifer and deciduous trees. In exposed earth, or in grass.',
    season: 'Late summer to late Autumn depending on local climate.',
    edibility: 'Poisonous',
    description: "Caps can be bright red, yellow or beige or a combination. Gills are always white.  Grows under trees. Fly agaric fruiting bodies emerge from the soil looking like white eggs. As the mushroom grows the cap is covered with numerous small white to yellow pyramid-shaped warts. These are remnants of the universal veil, a membrane that encloses the entire mushroom when it is still very young.",
    picdetail1: BigAmanitaTop,
    picdetail2: AmanitaSadddle,
    picdetail3: Baby_amanita_bite1,
    history: 'The mushroom stands out in any environment with its beautiful, bright coloured cap starkly contrasting with the white spots. It has attracted people for centuries becoming a part of many cultures and has become an iconic, most recognized mushroom. It is often depicted in fantasy art work especially pertaining to fairy tales. Although it grows in most places in the world today, it is thought to have originated in the forests of northern Europe and Siberia. It was used by indigenous people across Siberia as an entheogen and as a fly trap in Slovenia.',
    biochemistry: "Due to it's long standing historical association with people, amanita muscaria is one the most studied mushrooms. Ibotenic acid and muscimol are the principal biologically active agents of Amanita muscaria and related species of mushroom. They are structurally related to two major neurotransmitters of the human central nervous system. Ibotenic acid mimics glutamic acid and binds its NMDA glutamate receptors. Muscimol mimics GABA and binds its GABAA receptor. Both activate (are agonists of) their respective receptors thereby producing the toxic, psychoactive and hallucinogenic effects.Ibotenic acid is a powerful neurotoxin on it own and is also converted to muscanol by the liver which is a more stable compound than ibotenic acid. When ibotenic acid binds and activates NMDA glutamate receptors it allows excess Ca2+ into neurons thereby triggering a signalling cascade that results in neuronal death. The effects of ibotenic acid are usually experienced within 30–60 minutes after ingestion. The most common symptoms include nausea, vomiting, and drowsiness. An hour after ingestion symptoms include confusion, euphoria, visual and auditory distortions, sensations of floating, and retrograde amnesia. Most of the consumed muscimol is not metabolized and is excreted in the urine. When metabolized it binds to the same location on the GABAA receptor as GABA. GABAA receptors are widespread throughout the nervous systems. The binding of agonistic ligands such as GABA and muscimol causes an inhibitory effect on the neuron, decreasing the chance of it firing. In other words activating GABA receptors actively PREVENTS the neuron from firing. The effects of ingesting muscimol can be felt about one hour after consumption and can last 10 -24hrs. Symptoms include euphoria, muscle relaxation, sedation, hallucinations and nausea.",
    predators: "Although Amanitas are toxic to humans other animals are able to consume them without adverse effects. They are eaten by reindeer, squirrel, turkey, grouse, jays, slugs, fungus gnats and parasitic fungi such as  'Amanita mold’ (Hypomyces hyalinus) to name a few."
  },
  {
    id: 3,
    family: 'Bankeraceae',
    picture: BleedingTooth1,
    species: 'Hydnellum peckii',
    names: "Strawberries and Cream, Bleeding Tooth Fungus, Devil's Tooth",
    habitat: "Found in North America where it is common in the Pacific Northwest and in Europe. Grows under conifers among mosses and pine needles. It can be solitary or in clusters.",
    season: 'Late summer - early fall.',
    edibility: "Not known to be poisonous but are reported to be very bitter. It's amazing someone was brave enough to taste it!",
    description: "The shape of the fruiting body is irregular with pores that exude a red liquid when the mushroom is young. Several fruiting bodies can fuse together (confluence) when they are clustered. Underneath the cap the mushroom is conical or block like and is covered in teeth-like hymeniam. These hymeniam are spore producing structures that look like tubes or teeth. Other mushrooms have gills or pores underneath the cap which produce spores. As the mushroom matures it stops producing the red liquid and the cap becomes brown.",
    picdetail1: BigAmanitaTop,
  },
  {
    id: 4,
    family: 'Boletaceae',
    picture: red_crackingBolete,
    species: 'Xerocomellus zelleri',
    names: 'Zellers bolete',
    habitat: 'This bolete grows exclusively in Western North America from British Columbia to Mexico. It is fairly common in B.C. It often grows in Dougals fir forests and on decaying cedar stumps. It can grow solitary or in small groups.',
    season: 'Summer to Late Fall',
    edibility: 'Edible',
    description: 'Caps are a dark brownish red. The rim of the cap is red and the stem has a streaked red look. The spores are contained within the spongy, bright yellow structures underneath the cap. The stems are red with red streaks.',
    picdetail1: BigAmanitaTop,
  },
  {
    id: 5,
    family: 'Boletaceae',
    picture: bitterBoleteSide,
    species: 'Tylopilus felleus',
    names: 'Bitter Bolete',
    habitat: 'This bolete grows singly or in small groups on hardwood and conifer woods. It is mycorrhizal with hardwood trees, often beech. Literature places it as mostly growing in eastern Canada but it does grow at lower elevations on the west coast.',
    season: 'Early summer to mid-winter.',
    edibility: 'Edible but not choice, very bitter',
    description: 'Caps are beige to brown. Stalks are lighter than caps with a faint lattice of darker streaks. Spongy spores below the cap are light tan or brown but stain darker brown when bruised or damaged.',
    // picdetail1: ThreeBigAmanitaTop,
  },
  {
    id: 6,
    family: 'Pleurotaceae',
    picture: Oyster_mush_top1,
    species: 'Pleurotus pulmonarius',
    names: 'Oyster Mushroom',
    habitat: ' Spread throughout the world in temperate and subtropical forests. Grows on dead hardwoods such as alder, cottonwood, aspen and willow and on conifers in the pacific northwest. This mushroom has been grown commercially as it can grow on numerous substrates such as coffee grounds, wood chips and straw.',
    season: 'Late spring to early fall.',
    edibility: 'Edible, tasty',
    description: 'Grows in clusters on the trunks of dead trees either fallen or standing. It does not generally grow on stumps. The stem is almost absent with the mushroom growing like a fan or funnel out of the wood. The cap is beige or light grey spreading out like a fan with frilly edges. The gills are white and extend from the tip of the cap to the end of the stem where it emerges from the wood. This species is often confused with the first cultivated oyster mushroom Pleurotus ostreatus as they look very much alike. Pleurotus ostreatus can be found worldwide but does not grow in the pacific northwest. Like many mushrooms that grow on dead trees both species are saprotrophic. Amazingly they are both also carnivorous, eating parasitic nematodes.',
    // picdetail1: ThreeBigAmanitaTop,
  }
]






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
