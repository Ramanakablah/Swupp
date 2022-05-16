import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='Navbar'>
        <ul className='List'>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/Pricing"> Pricing </Link></li>
            <li><Link to="/Paid"> Paid </Link></li>
        </ul>
    </div>
  )
}

export default Navbar