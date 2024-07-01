import React from 'react'
import { Link } from 'react-router-dom'
import logoForMushrooms from '../images/logoForMushrooms.png'
//import {FaBars} from 'rect-icons/fa'


const Header = () => {
  return (
    <nav>
      <div className='nav__container'>
        <Link to='/' className='nav__logo'>
          <img src={logoForMushrooms} alt='Navbar Logo'></img>
        </Link>
        <h1 className='title'>West Coast Mushrooms</h1>
        <button className='nav__toggle-btn'>
          This is a button
        </button>
      </div>
    </nav>
  )
}

export default Header