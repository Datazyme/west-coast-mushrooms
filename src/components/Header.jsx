import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.png'
//import {FaBars} from 'rect-icons/fa'


const Header = () => {
  return (
    <nav>
      <div className='nav__container'>
        <Link to='/' className='nav__logo'>
          <img src={logo1} alt='Navbar Logo'></img>
        </Link>
        <h1 className='title'>West Coast Mushrooms</h1>

      </div>
    </nav>
  )
}

export default Header