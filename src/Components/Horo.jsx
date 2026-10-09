import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import { TbSignature } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa6";
import { RiArrowRightUpLine } from "react-icons/ri";
import heroImg from '../assets/prfil.png'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";







const Horo = () => {
  return (
    <div className='border border-[#E5E5E5]'>
      <Cantainer>
        <Flex className=' border-l border-r border-[#E5E5E5] pt-30 p-10'>

          <div className='p-10 '>
            <Flex className={` mb-10 py-3 px-6 w-fit gap-3 items-center bg-[#F7F7F7] rounded-full border border-gray-300`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-[#32bd00]'></span>
              </span>
              <h2 className=' font-my_font text-black'>Let’s Create Something Amazing</h2>
            </Flex>
            <h1 className='w-130.75 font-my_font text-black font-normal text-[48px]'><span className='text-gray-400 block font-log text-4xl'>Hello, I'm </span><span className=' flex   items-center font-extrabold'>Rayhan Islam <TbSignature /> .

            </span>
            </h1>
            <h2 className='flex items-center gap-3 mt-3 '>
              <span className='  bg-black w-fit py-1.5 px-3.5 rounded-lg text-[22px] text-blue-300 font-extrabold'>React <span className="text-white font-bold">Developer </span> </span>
              <span className=' text-balck'>|</span>

            </h2>

            <h2 className=' font-my_font text-gray-600 font-medium text-[16px] mt-4'>

              Based in Bangladesh
            </h2>
            <h3 className='w-144.25 text-[#71717A] text-[16px] font-normal font-my_font mt-8'>
              I’m a self-taught React Developer focused on building modern, responsive, and user-friendly web applications. I enjoy creating clean, maintainable code and smooth user experiences using React, JavaScript, HTML, CSS, and Tailwind CSS. I’m continuously learning and improving my skills to turn ideas into fast and engaging digital experiences.
            </h3>
            <Flex className=' mt-10 gap-5  '>
             
              
               <button className=' group relative overflow-hidden px-6 py-3 font-semibold border-2 border-blue-300 bg-blue-300 rounded-full cursor-pointer'>
                <span className=' absolute inset-0 bg-white rounded-full  scale-0 group-hover:scale-150 transition-transform duration-1000'></span>
                <span className='  relative z-10 text-white group-hover:text-black transition-colors duration-1000'>Explore Project</span>
              </button>
             
              <a href="https://wa.me/8801873848214?text=Hello%20Rayhan%2C%20I%20would%20like%20to%20discuss%20a%20project" target='_blank'>
              <button className=' group relative overflow-hidden px-6 py-3 font-semibold border-2 border-black bg-black rounded-full cursor-pointer'>
                <span className=' absolute inset-0 bg-white rounded-full  scale-0 group-hover:scale-150 transition-transform duration-1000'></span>
                <span className='  relative z-10 text-white group-hover:text-black transition-colors duration-1000'>Let’s Chat</span>
              </button>


            </a>
            </Flex>
            <div className=' border-t border-[#E5E5E5] mt-10 mb-10 flex gap-10'>
              <div className=' flex items-center pt-7 text-black gap-2'>
                <div>
                  <IoIosCheckmarkCircleOutline />
                </div >
                <h3 className=' text-[12px] font-my_font'>  Clean & Scalable Code</h3>
              </div>

              <div className=' flex items-center pt-7 text-black gap-2'>
                <div>
                  <IoIosCheckmarkCircleOutline />
                </div >
                <h3 className=' text-[12px] font-my_font'> Fast Modern UI/UX</h3>
              </div>

              <div className=' flex items-center pt-7 text-black gap-2'>
                <div>
                  <IoIosCheckmarkCircleOutline />
                </div >
                <h3 className=' text-[12px] font-my_font'>  Production Ready APIs
                </h3>
              </div>


            </div>
          </div>
          <div>
            <div className='bg-[#f2f1ed]  border-10 border-[#E5E5E5] rounded-[26px] h-176  overflow-hidden'>
              <img src={heroImg} alt="heroImg" />
            </div>
          </div>
        </Flex>
      </Cantainer>


    </div>
  )
}

export default Horo