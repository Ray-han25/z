import React from 'react'

import Navbar from '../Components/Navbar'
import Horo from '../Components/Horo'
import MySk from '../Components/MySk'
import About from '../Components/About'
import MyProjct from '../Components/MyProjct'
import Contai from '../Components/Contai'
import Footer from '../Components/Footer'
import Cursor from '../Components/Cursor'

const Home = () => {
  return (
    <>

<Cursor/>
      <  Navbar  />
      <Horo />
      <MySk />
      <About/>
      <MyProjct/>
      <Contai/>
      <Footer/>

    
    
    </>
  )
}

export default Home