import React from 'react'
import Navbar from './Components/Navbar'
import Horo from './Components/Horo'
import Cursol from './Components/Cursol'
import MySk from './Components/MySk'


const App = () => {
  return (
    <>
      <Cursol />

      <  Navbar className={`absolute top-0 left-0`} />
      <Horo />
      <MySk/>
     



    </>

  )
}

export default App