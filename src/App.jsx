import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// ======= Main Pages Component Imports ======= // => SRC: MainNav.jsx
import Home from './main-pages/Home.jsx'
import Gallery from './main-pages/Gallery.jsx'
import Shop from './main-pages/Shop.jsx'
import ContactUs from './main-pages/ContactUs.jsx'
// ================================= //

import LoginSignUp from './components/sub-components/LoginSignUp.jsx'

// ======= Main Component Imports ======= //
import MainNav from './components/MainNav'
import UserNav from './components/UserNav'
import Footer from './components/Footer'
// ================================= //


function App() {
  

  return (
    <>   
    
    <UserNav />   
    <MainNav />

    <Routes>

    {/* Main Pages Routes */}
    <Route path='home' element={<Home />}  />
    <Route path='gallery' element={<Gallery />}  />
    <Route path='shop' element={<Shop />}  />
    <Route path='contact-us' element={<ContactUs />}  />
    {/* Login / Shop - Pages Routes */}
    <Route path='login' element={<LoginSignUp />}></Route>

    </Routes>

    <Footer />
    </>
  )
}

export default App
