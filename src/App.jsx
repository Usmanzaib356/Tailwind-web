import React from 'react'
import './index.css'
import { Route, Router } from 'react-router-dom'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Developer from './Components/Developer'
import Subcribe from './Components/Subcribe'
import Footer from './Components/Footer'
function App() {
  return (
    < >    
     <Header/>
     <Hero/>
     <About/>
     <Developer/>
     <Subcribe/>
     <Footer/>
 
    </>
  )
}

export default App