import React from 'react'
import Navbar from './Components/Navbar'
import Horo from './Components/Horo'
import Cursol from './Components/Cursol'
import MySk from './Components/MySk'
import About from './Components/About'
import MyProjct from './Components/MyProjct'


const App = () => {
  return (
    <>
      <Cursol />

      <  Navbar className={`absolute top-0 left-0`} />
      <Horo />
      <MySk />
      <About/>
      <MyProjct/>




    </>

  )
}

export default App