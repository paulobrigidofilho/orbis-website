import React from 'react'
import styles from './stylesheet.module.css'
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function MainNav() {

  return (
    <>
    <nav className='main-nav'>
        <img id={styles.orbisLogo} src="orbislogo.png"/>
        
        <NavLink to="home">Home</NavLink>
        <NavLink to="gallery">Gallery</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <NavLink to="contact-us">Contact Us</NavLink>
    </nav>

    <div id="displaySection">
      <Outlet />
    </div>
    </>
  )
}
