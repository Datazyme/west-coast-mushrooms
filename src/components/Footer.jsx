import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to='/mushrooms/families/Amanitaceae'>Amanitaceae</Link></li>
        <li><Link to='/mushrooms/families/Boletaceae'>Boletaceae</Link></li>
        <li><Link to='/mushrooms/families/Strophariaceae'>Strophariaceae</Link></li>
        <li><Link to='/mushrooms/families/Pleurotaceae'>Pleurotaceae</Link></li>
        <li><Link to='/mushrooms/families/Mycenaceae'>Mycenaceae</Link></li>
      </ul>
      <div className='footer__copyright'>
        <small>All Rights Reserved &copy; Copyright, West Coast Mushrooms</small>
      </div>
    </footer>
  )
}

export default Footer