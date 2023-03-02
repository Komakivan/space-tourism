import React, {useState} from 'react'
import './Navbar.styles.css'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

    const [click,setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <header className='header'>
        <Link className='logo' to='/'>GLX TRAVEL</Link>
        <ul className={click? 'nav active' : 'nav' }>
            <li><Link className='nav-link' to='/'>Home</Link></li>
            <li><Link className='nav-link' to='/'>Pricing</Link></li>
            <li><Link className='nav-link' to='/'>Training</Link></li>
            <li><Link className='nav-link' to='/'>Contact</Link></li>
        </ul>
        <div className='menu-icon' onClick={handleClick}>

            {click? <FaTimes/> : <FaBars/>}
            
        </div>
    </header>
  )
}

export default Navbar