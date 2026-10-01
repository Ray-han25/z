import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import { LuMessageSquare } from "react-icons/lu";
import { RiArrowRightUpLine } from "react-icons/ri";




const Navbar = ({className}) => {
  return (
  <div className={` w-full py-6 mb-15 ${className} px-40`} >
    
    <Cantainer>
      <Flex className={`justify-between items-center`}>
<div className=''>
  <div className='w-10 h-10 rounded-lg bg-black font-bold font-log text-[30px] text-white flex justify-center items-center'>
    R
  </div>
  <h3 className='text-[13px] text-black font-normal font-log w-fit'>Rayhan</h3>
</div>
        <div>
            <ul className={` flex font-semibold text-[20px] text-black gap-8 font-my_font`}>
                <li>About Me</li>
                <li>Skills</li>
                <li>Project</li>
                <li>Contact me</li>
            </ul>
        </div>
        <div className=''>

           
            <a href="" className='py-3 px-4 bg-black rounded-full text-white font-my_font text-[12px] flex items-center gap-2'>
              <LuMessageSquare />
              <span>Let’s Chat</span>
              <RiArrowRightUpLine />

            </a>
        </div>
      </Flex>
     
    </Cantainer>
    
    
    </div>
  )
}

export default Navbar