import React from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import Header from "./Pages/Utils/Header"
import Footer from "./Pages/Utils/Footer"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Aboutus from "./Pages/Aboutus"
import Contact from "./Pages/Contact"



export function App(props) {
  let location = useLocation()
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </React.Fragment>
  )
}
export default App
