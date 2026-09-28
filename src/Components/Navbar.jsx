import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import Logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <div className=' py-6 mb-15'>
    
    <Cantainer>
      <Flex className={`justify-between items-center`}>
        <div className='w-12.75 h-10 bg-white'><img src={Logo} alt="Logo" /></div>
        <div>
            <ul className={` flex font-semibold text-[20px] text-black gap-8 font-my_font`}>
                <li>About Me</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Contact me</li>
            </ul>
        </div>
        <div>

            <button className='py-4 px-5 bg-black rounded-sm text-white capitalize'>Hire Me</button>
        </div>
      </Flex>
     
    </Cantainer>
    
    
    </div>
  )
}

export default Navbar