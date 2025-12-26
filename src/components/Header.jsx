import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.png'
//import {FaBars} from 'rect-icons/fa'


const Header = ({mushroomID, family, picture, species, 
  names, habitat, season, edibility, description}) => {
  return (
    <nav>
      <div className='nav__container'>
        <Link to='/' className='nav__logo'>
          <img src={logo1} alt='Navbar Logo'></img>
        </Link>
        <h1 className='title'>West Coast Mushrooms</h1>
        <Link to='/About' className='nav__logo'><h2 className='about_title'>About</h2>
        </Link>
        {/* <select className='nav__logo'>
          
          <option><Link to={`mushrooms/families/${family}`}>Amanita</Link></option>
          <option><Link to='/'>Authors</Link></option>
        </select> */}
      
      </div>

    </nav>
  )
}

export default Header