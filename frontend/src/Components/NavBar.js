import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBarStyles.css';

const NavBar = () => {

	const[click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const [color, setColor] = useState(false)
	const changeColor =() => {
		if(window.scrollY >= 100) {
			setColor('red')
		} else {
			setColor('white')
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', changeColor);
		return () => window.removeEventListener('scroll', changeColor);
	  }, []);
	
	
    return (
      <div className='header'>
					<Link to='/'><h1>AEI APPLIED ELECTRONIC INSTITUTE</h1></Link>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<Link to='/'><li>Home</li></Link>
						<Link to='/dashboard'><li>Services</li></Link>
						</ul>
						
      </div>

    )
}

export default NavBar
