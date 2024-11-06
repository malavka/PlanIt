import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from'../../assets/logo.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'  /> 
      <ul>
        <li><button className='btn'>Home</button></li>
        <li><button className='btn'>Programs</button></li>
        <li><button className='btn'>About Us</button></li>
        <li><button className='btn'>Bookings</button></li>
        <li><button className='btn'>Testimonials</button></li>
        <li><button className='btn'>Contact</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
