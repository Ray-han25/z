import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import { TbSignature } from "react-icons/tb";




const Horo = () => {
  return (
    <div>
      <Cantainer>
        <Flex>

          <div>
            <Flex className={` mb-10 py-3 px-6 w-fit gap-3 items-center bg-[#F7F7F7] rounded-full border border-gray-300`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-[#32bd00]'></span>
              </span>
              <h2 className=' font-my_font text-black'>Let’s Create Something Amazing</h2>
            </Flex>
            <h1 className='w-130.75 font-my_font text-black font-normal text-[48px]'><span className='text-gray-400 block'>Hello, I'm </span><span className=' flex   items-center font-extrabold'>Rayhan Islam <TbSignature /> .

            </span>
            </h1>
            <h2 className='flex items-center gap-3 mt-3 '>
              <span className='  bg-black w-fit py-1.5 px-3.5 rounded-lg text-[22px] text-blue-300 font-extrabold'>React <span className="text-white font-bold">Developer </span> </span>
              <span className=' text-balck'>|</span>

            </h2>

            <h2 className=' font-my_font text-gray-600 font-medium text-[16px] mt-4'>

              Based in Bangladesh
            </h2>
          </div>
          <div></div>
        </Flex>
      </Cantainer>


    </div>
  )
}

export default Horo