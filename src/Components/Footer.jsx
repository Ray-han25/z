import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import { FaArrowUp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";









const Footer = () => {
    return (
        <div className='bg-black py-20'>
            <Cantainer>
                <Flex className={` justify-between pb-10 border-b border-[#1a1a1a]`}>
                    <div className=''>
                        <div className='w-10 h-10 rounded-lg bg-white font-bold font-log text-[30px] text-black flex justify-center items-center'>
                            R
                        </div>
                        <h3 className='text-[13px] text-white font-normal font-log w-fit'>Rayhan</h3>
                    </div>
                    <div>
                        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#000000] text-xs font-bold transition-all duration-300 border border-white/20">
                            <span>Back To Top</span>
                            <span><FaArrowUp /></span>
                        </button>
                    </div>
                </Flex>
                <Flex className={`py-10  justify-between border-b border-[#1a1a1a]`}>
                    <div>
                        <ul className='text-[#aaaaaa] flex gap-4 font-my_font'>
                            <li className='hover:text-white duration-500'>Home</li>
                            <li className='hover:text-white duration-500'>About Me</li>
                            <li className='hover:text-white duration-500'>Skills</li>
                            <li className='hover:text-white duration-500'>Project</li>
                            <li className='hover:text-white duration-500'>Contact me</li>

                        </ul>
                    </div>
                    <div className='flex gap-4'>
                        <div className='w-10 h-10 bg-gray-500 rounded-full shadow-2xl group  hover:bg-white duration-500 flex justify-center items-center text-2xl'>
                          <a href="https://github.com/Ray-han25"   target="_blank">  <IoLogoGithub  /></a>
                        </div>
                        <div className='w-10 h-10 bg-gray-500 rounded-full shadow-2xl group  hover:bg-white duration-500 flex justify-center items-center text-2xl'>
                           <a href="https://www.facebook.com/rayhan.islam.377"   target="_blank"> <BsFacebook  /></a>
                        </div>
                        <div className='w-10 h-10 bg-gray-500 rounded-full shadow-2xl group  hover:bg-white duration-500 flex justify-center items-center text-2xl'>
                            <FaLinkedin  />
                        </div>
                        <div className='w-10 h-10 bg-gray-500 rounded-full shadow-2xl group  hover:bg-white duration-500 flex justify-center items-center text-2xl'>
                           <a href="https://wa.me/8801873848214?text=Hello%20Rayhan%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank"> <FaWhatsappSquare  /></a>
                        </div>
                    </div>


                </Flex>
                <Flex className={`justify-between mt-10`}>
                    <p className='text-[#aaaaaa] font-log text-[14px] '>© 2026 Rayhan Islam. All rights reserved.</p>
                    <h2 className='text-white font-log'>Rayhan Islam</h2>
                </Flex>
            </Cantainer>
        </div>
    )
}

export default Footer