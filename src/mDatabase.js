import React from "react";

//go with capitals for start of image names
import AmanitaSadddle from './images/AmanitaSaddle.jpg'
import redCrackingBolete from './images/redCrackingBolete.jpg'
import bitterBoleteSide from './images/bitterBoleteSide.jpg'
import Amanita_bigfam from './images/Amanita_bigfam.jpg'
import BigAmanitaTop from './images/BigAmanitaTop.jpg'
import BleedingTooth1 from './images/BleedingTooth1.jpg'
import BleedingToothAdult1 from './images/BleedingToothAdult1.jpg'
import BleedingToothAdult2 from './images/BleedingToothAdult2.jpg'
import BleedingToothAdult3 from './images/BleedingToothAdult3.jpg'
import Baby_amanita_bite1 from './images/Baby_amanita_bite1.jpg'
import Oyster_mush_top1 from './images/Oyster_mush_top1.jpg'
import BirdsEggWithEggs from './images/BirdsEggWithEggs.jpg'
import birdsNestGroup from './images/birdsNestGroup.jpg'
import orangecup1 from './images/orangecup1.jpeg'
import SpringOrangePeel from './images/SpringOrangePeel.jpg'
import SpringOrangePeel1 from './images/SpringOrangePeel1.jpg'
import BrokenOrangePeel from './images/BrokenOrangePeel.jpg'
import birdsNestSide from './images/birdsNestSide.jpg'
import birdsEggNoEgg from './images/birdsEggNoEgg.jpg'
import Pholiota_aurivella from './images/Pholiota_aurivella.jpg'
import Bleeding_mycena from './images/Bleeding_mycena.jpg'
import ShaggyParasol from './images/ShaggyParasol.jpg'
import InkyGroup from './images/InkyGroup.jpg'
import puffballGroup from './images/puffballGroup.jpeg'
import OrangeOakBolete from './images/OrangeOakBolete.jpg'
import OrangeOakBoleteSmall from './images/OrangeOakBoleteSmall.jpg'
import OrangeOakBoleteAdultSide from './images/OrangeOakBoleteAdultSide.jpg'
import OrangeOakBoleteTopOnly from './images/OrangeOakBoleteTopOnly.jpg'




export const allMushrooms = [
  {
    id: 1,
    family: 'Agaricaceae',
    familyHead: 'Agaricaceae',
    picture: ShaggyParasol,
    species: 'Chlorophyllum rhacodes complex',
    names: 'Shaggy Parasol',
    habitat: 'Widely spread across North America, Europe and Africa. The name Shaggy Parasol actually encompasses three very similar looking species Chlorophyllum rhacodes, C. olivieri and C. brunneum.s',
    season: 'Summer to Autumn',
    edibility: 'Variable. It is very similar to the edible and choice mushroom Macrolepiota procera (parasol mushroom) which is common in Europe. The shaggy parasol can cause gastric upset and trigger an allergic reaction. It can also be mistaken for the poisonous Chlorophyllum molybdites which can be identified from their green sporte print. The spore print of Chlorophyllum rhacodes is white not green.',
    description: 'The mushroom is saprobic. It grows individually or in a group. It prefers disturbed ground around conifers. The cap is white to brown with a shaggy appearance. The stalk is thin with a skirt and gets more brown with age. The gills are also white and take on a brownish tinge with age.',
  },
  {
    id: 2,
    family: 'Agaricaceae',
    picture: InkyGroup,
    species: 'Coprinus comatus',
    names: 'Shaggy Mane',
    habitat: 'Found all over the Northern Hemisphere. They can grow in woods but they prefer urban areas, on lawns, along gravel roads and generallly in disturbed areas where they are very common. They can even grow through asphalt!',
    season: 'Spring - Fall.',
    edibility: 'Edible when young.',
    description: 'Cone shaped, gilled cap on a white stalk with a veil. Shaggy cap that turns into a black, dripping inky substance over time. Cap can be white or beige when young. Gills start off white but change to black as the cap begins to ink from the bottom up. The inking is due to the mushrooms amazing ability to digest itself (autodigestion) to release its spores. The spores are concentrated within the dripping, digested parts of the mushroom. The process begins shortly after being harvested and with age.',
  },
  {
    id: 3,
    family: 'Agaricaceae',
    picture: puffballGroup,
    species: 'Lycoperdon perlatum',
    names: 'Common Puffball',
    habitat: 'Found all over the world. They can grow in forests, on lawns and along gravel roads. They generally grow in tight knit groups. Like most mushrooms they are Saprotrophic.',
    season: 'Spring - Fall.',
    edibility: 'Edible when young.',
    description: 'Mostly pear shaped about 3cm tall. Their spores mature inside the outer surface (exoperidium) which is covered in small cone shaped spines and warts. When young and the spores immature the inside of the mushroom is white. The mushroom is edible at this stage. With maturity the spores become brown and dust-like. The exoperidium also becomes brown, thinner and more delicate until it bursts releasing a dust cloud of spores. They bioaccumulate heavy metals from the soil which can be used to indicate soil pollution. Extracts of puff balls have been shown to have antimicrobial activity.',
  },
  {
    id: 4,
    family: 'Agaricaceae',
    picture: BirdsEggWithEggs,
    species: 'Nidula candida',
    names: "Bird's Nest Fungus",
    habitat: 'Globally distributed. These fungi are saprotrophs and grow on dead wood. They prefer moist environments.',
    season: 'Late spring to early fall.',
    edibility: 'Not known',
    description: "Bird's egg fungus is very small, around one centimeter or less in diameter and height. They grow upright on dead branches. During reporoduction structures that look like a clutch of flattened eggs appear at the bottom of the inside of the bowl. These egg like structures are called periodoles and contain the spores.",
    picdetail1: birdsNestSide,
    picdetail2: birdsNestGroup,
    picdetail3: birdsEggNoEgg,
    background: `Bird's nest fungi were first identified in 1601 by Carolus Clusius. They were originally classified into the family Nidulariaceae. However, the genus Nidula was reclassified into the family Agaricaceae in 1902. The reclassification was due to the absence of the funicular cord or the cord that attaches the eggs to the inside of the fruiting body. Other species of bird's nest fungus differ in colour and morphology. Nidula candida is extremely common on the west coast. It can be found growing on logs or branches of moss covered cedars.`,
    biology: `The fruiting bodies of this fungus are quite small, on the order of millimetres in both height and width and look like a cup with eggs in it. The entire fruiting body is called a peridiole (pl. peridia). They can grow singly or in groups. The genera belonging to of the two families of birds nest fungi (Agaricaceae  and Nidulariaceae) can look very much alike. This makes distinguishing them a bit of a challenge especially since the fungi are so small. Key differences lie in the colour of the  eggs, the presence or absence of a funiculus and a flared or straight lip of the cup. The outside of the cup is covered in shaggy hairs (tomentum). Inside the cup there is a cluster of cluster of eggs (peridioles).  The peridioles house the spores (basidiospores) and the spore producing structures (basidia), which are surrounded by a hard outer wall.  Immature peridia have a membrane, called an epiphragm, which covers the cup. Immature peridioles are embedded in a gelatinous mix.  Upon maturity the epiphragm ruptures and the eggs are exposed. The fungus can reproduce both sexually and asexually. Spores are haploid. After dispersion and germination, if two hyphae of different mating types meet they fuse to produce diploid structures called dikaryotic mycelia. It is from these that the peridia form and the cycle is repeated. Nests are "splash cups" which disperse peridioles by taking advantage of raindrops landing inside the cups and expelling the eggs out of the cup.`,
    medley: `Eggs are splashed out of the cup to a mean distance of about 8mm. Species in the family Nidulariaceae have a funicular cord, a sticky cord attached to the egg, and use it to stick to surrounding surfaces. The spores can also use rain water to increase the distance of dispersal by utilizing the rivulets created by heavy rains.  It is possible that the spores can also be spread by herbivores who consume them with the vegetation they grow on. It is not known which animals consume them with vegetation or if they have any predators. There is very little information on Birds Egg Fungus out there and I was not able to find any clear-cut methods for classifying them. The classification relies almost entirely on phenotype. Therefore one specimen may be assigned to any of the following species. The one pictured here can just as easily be assigned to the species N. niveo-tomentosa.`,
    similarSpecies: `N. niveo-tomentosa, N. emodensis, N. shingbaensis`,
    references: [
      {
        title: `Wikipedia - Nidula`,
        url: `https://en.wikipedia.org/wiki/Nidula`
      },
      {
        title: `Short-range splash discharge of peridioles in Nidularia`,
        url: `https://pubmed.ncbi.nlm.nih.gov/25986543/`
      },
      {
        title:`Complete mitochondrial genome of the bird’s nest fungus Nidula shingbaensis (Nidulariaceae, Agaricales)`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC11290291/`
      },
      {
        title:`Australian Fungi - A Blog`,
        url: `https://australianfungi.blogspot.com/2007/06/17-nidula-emodensis.html`
      },
      {
        title:`The Wild World of Bird’s Nest Fungi: Identification Guide`,
        url: `https://www.mushroom-appreciation.com/birds-nest-fungi-identification.html`
      }
    ]
  },
  {
    id: 5,
    familyHead: 'Amanitaceae',
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
    background: 'The mushroom stands out in any environment with its beautiful, bright coloured cap starkly contrasting with the white spots. It has attracted people for centuries becoming a part of many cultures and has become an iconic, most recognized mushroom. It is often depicted in fantasy art work especially pertaining to fairy tales. Although it grows in most places in the world today, it is thought to have originated in the forests of northern Europe and Siberia. It was used by indigenous people across Siberia as an entheogen and as a fly trap in Slovenia.',
    biology: "Due to it's long standing historical association with people, amanita muscaria is one the most studied mushrooms. Ibotenic acid and muscimol are the principal biologically active agents of Amanita muscaria and related species of mushroom. They are structurally related to two major neurotransmitters of the human central nervous system. Ibotenic acid mimics glutamic acid and binds its NMDA glutamate receptors. Muscimol mimics GABA and binds its GABAA receptor. Both activate (are agonists of) their respective receptors thereby producing the toxic, psychoactive and hallucinogenic effects.Ibotenic acid is a powerful neurotoxin on it own and is also converted to muscanol by the liver which is a more stable compound than ibotenic acid. When ibotenic acid binds and activates NMDA glutamate receptors it allows excess Ca2+ into neurons thereby triggering a signalling cascade that results in neuronal death. The effects of ibotenic acid are usually experienced within 30–60 minutes after ingestion. The most common symptoms include nausea, vomiting, and drowsiness. An hour after ingestion symptoms include confusion, euphoria, visual and auditory distortions, sensations of floating, and retrograde amnesia. Most of the consumed muscimol is not metabolized and is excreted in the urine. When metabolized it binds to the same location on the GABAA receptor as GABA. GABAA receptors are widespread throughout the nervous systems. The binding of agonistic ligands such as GABA and muscimol causes an inhibitory effect on the neuron, decreasing the chance of it firing. In other words activating GABA receptors actively PREVENTS the neuron from firing. The effects of ingesting muscimol can be felt about one hour after consumption and can last 10 -24hrs. Symptoms include euphoria, muscle relaxation, sedation, hallucinations and nausea.",
    medley: "Although Amanitas are toxic to humans other animals are able to consume them without adverse effects. They are eaten by reindeer, squirrel, turkey, grouse, jays, slugs, fungus gnats and parasitic fungi such as  'Amanita mold’ (Hypomyces hyalinus) to name a few.",
    similarSpecies:``,
    references: [
      {
        title: `Wikipedia - Amanita muscaria`,
        url:`https://en.wikipedia.org/wiki/Amanita_muscaria`
      },
      {
        title: `Wikipedia - Muscarine`,
        url: `https://en.wikipedia.org/wiki/Muscarine`
      },
      {
        title: `Catching flies with Amanita muscaria: traditional recipes from Slovenia and their efficacy in the extraction of ibotenic acid`,
        url: `https://pubmed.ncbi.nlm.nih.gov/27063872/`
      },
      {
        title: `Do Differences in Chemical Composition of Stem and Cap of Amanita muscaria Fruiting Bodies Correlate with Topsoil Type?`,
        url: `https://pmc.ncbi.nlm.nih.gov/articles/PMC4249817/`
      }

    ]
  },
  {
    id: 6,
    family: 'Bankeraceae',
    picture: BleedingTooth1,
    species: 'Hydnellum peckii',
    names: "Strawberries and Cream, Bleeding Tooth Fungus, Devil's Tooth",
    habitat: "Found in North America where it is common in the Pacific Northwest and in Europe. Grows under conifers among mosses and pine needles. It can be solitary or in clusters.",
    season: 'Late summer - early fall.',
    edibility: "Not known to be poisonous but are reported to be very bitter. It's amazing someone was brave enough to taste it!",
    description: "The shape of the fruiting body is irregular with pores that exude a red liquid when the mushroom is young. Several fruiting bodies can fuse together (confluence) when they are clustered. Underneath the cap the mushroom is conical or block like and is covered in teeth-like hymeniam. These hymeniam are spore producing structures that look like tubes or teeth. Other mushrooms have gills or pores underneath the cap which produce spores. As the mushroom matures it stops producing the red liquid and the cap becomes brown.",
    picdetail1: BleedingToothAdult1,
    picdetail2: BleedingToothAdult2,
    picdetail3: BleedingToothAdult3
  },
  {
    id: 7,
    family: 'Boletaceae',
    picture: OrangeOakBolete,
    species: 'Leccinum aurantiacum',
    names: 'Orange Oak Bolete',
    habitat: 'This mushroom has a very short growing season here, from around the end of September to end of October depending on climate. They grow when the weather begins to get cool and wet but not too cold or too wet. It has been found in forests throughout Europe and North America. It is generally associated with poplar trees but can be found around other deciduous trees such as birch and willow. It is not common around the Vancouver area and surrounding pacific coast mountain ranges but becomes increasingly more common moving east, toward the rocky mountains.',
    season: 'Fall',
    edibility: 'Edible and choice',
    description: 'The cap is a dark reddish brown and globular when young. Upon maturity it spreads and forms a more traditional shallow convex shape. The stem is thick, pale beige or white with dark specks (scabers) covering the stem. Like all boletes the spores are underneath the cap within sponge-like structures. They are white to light beige. They grow mostly individually and less commonly in small groups of 2 or 3. They have a mycorrhizal association with their trees. There have been very few scientific studies conducted on this mushroom. The few that exist consist of several studies to determine accumulation of metallic compounds within the mushroom from Poland, a study to determine accumulation of 137Cs in mushrooms growing around Chernobyl and few others exploring some biochemical compounds.',
    picdetail1: OrangeOakBoleteSmall,
    picdetail2: OrangeOakBoleteAdultSide,
    picdetail3: OrangeOakBoleteTopOnly,
    background: ``,
    biology: ``,
    medley: ``,
    similarSpecies: `Leccinum vulpinum, Leccinum albostipitatum`,
    references: [
      {
        title: `Wikipedia - Leccinum aurantiacum`,
        url: `https://en.wikipedia.org/wiki/Leccinum_aurantiacum`
      },
      {
        title: `First-Nature`,
        url: `https://www.first-nature.com/fungi/leccinum-aurantiacum.php`
      },
      {
        title:`List of PubMed articles about Leccinum aurantiacum`,
        url: `https://pubmed.ncbi.nlm.nih.gov/?term=Leccinum%20aurantiacum`
      },
    ]
  },
  {
    id: 8,
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
    id: 9,
    family: 'Boletaceae',
    picture: redCrackingBolete,
    species: 'Xerocomellus zelleri',
    names: 'Zellers bolete',
    habitat: 'This bolete grows exclusively in Western North America from British Columbia to Mexico. It is fairly common in B.C. It often grows in Dougals fir forests and on decaying cedar stumps. It can grow solitary or in small groups.',
    season: 'Summer to Late Fall',
    edibility: 'Edible',
    description: 'Caps are a dark brownish red. The rim of the cap is red and the stem has a streaked red look. The spores are contained within the spongy, bright yellow structures underneath the cap. The stems are red with red streaks.',
    picdetail1: BigAmanitaTop,
  },
  {
    id: 10,
    family: 'Caloscyphaceae',
    picture: orangecup1,
    species: 'Caloscypha fulgens',
    names: 'Spring Orange Peel Fungus, Golden Cup, Dazzling Cup',
    habitat: 'Parasitizes dormant seeds of the Sitka spruce. Very common throughout the pacific northwest usually found under conifers. It is also found in Sweden, The Netherlands, and Turkey. It is listed on the Red List of protected species in Slovakia',
    season: 'Spring (March to July in British Columbia).',
    edibility: 'Indeterminate. Potentially non-poisonous but inedible.',
    description: "This mushroom looks like it belongs to the family of cup mushrooms Pezizaceae which it's look-alike Aleuria aurantia (orange peel fungus) belongs to. Though both belong to the order Pezizales, in 2002 a new family, Caloscyphaceae, was created for this cup mushroom of which it is the only genus and species. The bluish colouring predominantly on the outside of the cup is unique in the order Pezizales.  The life cycle of Caloscypha fulgens has two distinct forms which were previously thought to be different organisms. The first stage is asexual, called an 'imperfect state'. This stage is the parasitic form of the fungus, known as the plant pathogen Geniculodendron pyrofirme, which infects the dormant Sitka seeds. The second stage is the one that is represented by a fruiting body such as the one shown here. The seconds stage produces spores and reproduces sexually.",
    picdetail1: SpringOrangePeel,
    picdetail2: SpringOrangePeel1,
    picdetail3: BrokenOrangePeel,
    background: "Unknown",
    biology: "Unknown",
    predators: "Unknown"
  },
  {
    id: 11,
    family: 'Mycenaceae',
    picture: Bleeding_mycena,
    species: 'Mycena haematopus',
    names: 'Fairy Helmet, Bleeding Mycena',
    habitat: 'Widespread in Europe and North American but also found worldwide. They are saprotrophic so grows on decaying wood. Often found on decaying stumps and logs of deciduous trees, often beech. They grow in clusters from a common base.',
    season: 'Late spring to early fall.',
    edibility: 'Edible, tasty',
    description: 'Grows in clusters on the trunks of dead trees either fallen or standing. It does not generally grow on stumps. The stem is almost absent with the mushroom growing like a fan or funnel out of the wood. The cap is beige or light grey spreading out like a fan with frilly edges. The gills are white and extend from the tip of the cap to the end of the stem where it emerges from the wood. This species is often confused with the first cultivated oyster mushroom Pleurotus ostreatus as they look very much alike. Pleurotus ostreatus can be found worldwide but does not grow in the pacific northwest. Like many mushrooms that grow on dead trees both species are saprotrophic. Amazingly they are both also carnivorous, eating parasitic nematodes.',
    // picdetail1: ThreeBigAmanitaTop,
  },
  {
    id: 12,
    family: 'Pleurotaceae',
    picture: Oyster_mush_top1,
    species: 'Pleurotus pulmonarius',
    names: 'Oyster Mushroom',
    habitat: 'Spread throughout the world in temperate and subtropical forests. Grows on dead hardwoods such as alder, cottonwood, aspen and willow and on conifers in the pacific northwest. This mushroom has been grown commercially as it can grow on numerous substrates such as coffee grounds, wood chips and straw.',
    season: 'Late spring to early fall.',
    edibility: 'Edible, tasty',
    description: 'Grows in clusters on the trunks of dead trees either fallen or standing. It does not generally grow on stumps. The stem is almost absent with the mushroom growing like a fan or funnel out of the wood. The cap is beige or light grey spreading out like a fan with frilly edges. The gills are white and extend from the tip of the cap to the end of the stem where it emerges from the wood. This species is often confused with the first cultivated oyster mushroom Pleurotus ostreatus as they look very much alike. Pleurotus ostreatus can be found worldwide but does not grow in the pacific northwest. Like many mushrooms that grow on dead trees both species are saprotrophic. Amazingly they are both also carnivorous, eating parasitic nematodes.',
    // picdetail1: ThreeBigAmanitaTop,
  },
  {
    id: 13,
    family: 'Strophariaceae',
    picture: Pholiota_aurivella,
    species: 'Pholiota aurivella',
    names: 'Golden Pholiota',
    habitat: 'Grows in clusters on decaying wood. Often found associated with mosses.',
    season: 'Year round except winter.',
    edibility: 'Inedible, not recommended.',
    description: 'This mushroom is rather small and fragile. Perhaps about 5cm in height or less. It "bleeds" a dark red latex when cut or broken. The colour ranges from dark red to a reddish brown of both the stem and cap. The gills are a light reddish brown to white.',
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
