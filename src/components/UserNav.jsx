import React from 'react'
import styles from './stylesheet.module.css'
import { Link, Outlet, NavLink } from 'react-router-dom';


export default function UserNav() {





  return (   
        <>
        <nav className={styles.userNav}>

          <button className="userNav-btn">
            Cart
          </button>    

          <NavLink to="login">
            <button className="userNav-btn">
              Login
            </button>
          </NavLink>
        </nav>
        <div id="displaySection">
          <Outlet />
        </div>
        </>   
  )
}
