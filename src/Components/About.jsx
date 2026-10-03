import React, { useState } from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import ab from '../assets/prfil.png'
import CommonText from './CommonText'
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";




const About = () => {
    const [active, setactive] = useState(true)
    const [activeT, setactiveT] = useState(false)
    return (
        <>
            <div className='mb-20 mt-40'>
                <Cantainer>

                    <Flex>

                        <div className='w-[50%]'>
                            <div className='w-131.25 h-120 border-2 rounded-sm border-black bg-[#E5E5E5] overflow-hidden'>
                                <img src={ab} alt="" />

                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <CommonText className={`text-start`} text={`About`} texttow={`  Me`} />
                            <h2 className='mb-10 text-[#71717A]'>
                                <span className='font-bold text-black'>I</span>’m a self-taught React Developer based in Bangladesh, passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean and engaging digital experiences using React, JavaScript, HTML, CSS, and Tailwind CSS.</h2>
                            <h2 className='mb-10  text-[#71717A]'>
                                <span className='font-bold text-black'>M</span>y journey into web development started with a curiosity about how websites work and how ideas can be turned into interactive experiences. Since then, I’ve been learning and building projects with modern web technologies, continuously improving my skills along the way.

                                Today, I focus on building responsive and user-friendly web applications with React, JavaScript, HTML, CSS, and Tailwind CSS. I’m always exploring new technologies, taking on new challenges, and working toward becoming a better Frontend Developer.
                                .</h2>
                            <h2 className='mb-10 text-[#71717A]'>
                                <span className='font-bold text-black'>W</span>hen I’m not coding, I enjoy exploring new web technologies, learning from other developers, and working on personal projects. I like turning new ideas into real-world projects and continuously improving my skills. You can follow my journey and explore my work on GitHub.

                            </h2>
                        </div>
                    </Flex >
                    <Flex className={`gap-2 pb-2  `}>
                        <button onClick={() => { setactive(true, setactiveT(false)) }} className={`py-2 px-5 ${active ? "bg-black" : "bg-gray-50"} ${active ? "text-white " : "text-black "} rounded-[10px] cursor-pointer font-my_font text-[10px] border border-gray-600`}>Core Mission</button>
                        <button onClick={() => setactiveT(true, setactive(false))} className={`py-2 px-5 ${activeT ? "bg-black" : "bg-gray-50"} ${activeT ? "text-white " : "text-black "} rounded-[10px] cursor-pointer font-my_font text-[10px] border border-gray-600`}>Tech Stack</button>
                    </Flex>

                    <div className=' border-t border-black w-fit pt-5 relative '

                    >


                        <div className={`${active
                            ? "opacity-100 translate-y-0 "
                            : "opacity-0 -translate-y-5 pointer-events-none "
                            } 
                                w-fit flex items-center gap-2
                               transition-all duration-500 ease-in-out`}
                        >
                            <div className=' border border-gray-300 bg-[#f7f7f7] w-fit py-3 px-4 rounded-xl'>
                                <div className='flex items-center gap-3 mb-1'>
                                    <h2 className='text-yellow-400'><BsFillLightningChargeFill /></h2>
                                    <h2>Speed & Performance</h2>
                                </div>
                                <p className=' w-80 text-[12px] text-gray-600 '>Fast-loading, responsive web experiences optimized for smooth performance across devices. Focused on clean, efficient code and delivering a seamless user experience.
                                </p>
                            </div>
                            <div className=' border border-gray-300 bg-[#f7f7f7] w-fit py-3 px-4 rounded-xl'>
                                <div className='flex items-center gap-3 mb-1'>
                                    <h2 className='text-black'><FaRegCircleUser /></h2>
                                    <h2>Seamless User Experience</h2>
                                </div>
                                <p className=' w-80 text-[12px] text-gray-600 '>Modern, intuitive, and user-focused interfaces designed to make every interaction simple, engaging, and enjoyable across all devices.
                                </p>
                            </div>
                        </div>
                        <div className={`flex gap-3 flex-wrap w-187 absolute top-5 left-0.5
                        ${activeT
                            ? "opacity-100 translate-y-0  "
                            : "opacity-0 -translate-y-5 pointer-events-none "
                            } 
                                w-fit flex items-center gap-2
                               transition-all duration-500 ease-in-out
                            `}>
                          
                        
                            <div className='flex items-center gap-2 py-2 px-3 bg-[#f7f7f7] w-fit rounded-lg border border-gray-200 group hover:bg-black duration-400 ease-in'>
                                <span className=' group-hover:text-white duration-300 ease-in'><IoMdCheckmark /></span>
                                <span className='text-[12px] group-hover:text-white duration-300 ease-in font-my_font font-light'>React.js</span>
                            </div>
                        
                            <div className='flex items-center gap-2 py-2 px-3 bg-[#f7f7f7] w-fit rounded-lg border border-gray-200 group hover:bg-black duration-400 ease-in'>
                                <span className=' group-hover:text-white duration-300 ease-in'><IoMdCheckmark /></span>
                                <span className='text-[12px] group-hover:text-white duration-300 ease-in font-my_font font-light'>Node.js</span>
                            </div>
                        
                            <div className='flex items-center gap-2 py-2 px-3 bg-[#f7f7f7] w-fit rounded-lg border border-gray-200 group hover:bg-black duration-400 ease-in'>
                                <span className=' group-hover:text-white duration-300 ease-in'><IoMdCheckmark /></span>
                                <span className='text-[12px] group-hover:text-white duration-300 ease-in font-my_font font-light'>Next.js</span>
                            </div>
                        
                            <div className='flex items-center gap-2 py-2 px-3 bg-[#f7f7f7] w-fit rounded-lg border border-gray-200 group hover:bg-black duration-400 ease-in'>
                                <span className=' group-hover:text-white duration-300 ease-in'><IoMdCheckmark /></span>
                                <span className='text-[12px] group-hover:text-white duration-300 ease-in font-my_font font-light'>Tailwind CSS</span>
                            </div>
                        
                            <div className='flex items-center gap-2 py-2 px-3 bg-[#f7f7f7] w-fit rounded-lg border border-gray-200 group hover:bg-black duration-400 ease-in'>
                                <span className=' group-hover:text-white duration-300 ease-in'><IoMdCheckmark /></span>
                                <span className='text-[12px] group-hover:text-white duration-300 ease-in font-my_font font-light'>GraphQL / REST</span>
                            </div>
                            <div className='flex items-center gap-2 py-2 px-3 bg-[#f7f7f7] w-fit rounded-lg border border-gray-200 group hover:bg-black duration-400 ease-in'>
                                <span className=' group-hover:text-white duration-300 ease-in'><IoMdCheckmark /></span>
                                <span className='text-[12px] group-hover:text-white duration-300 ease-in font-my_font font-light'>Redux Toolkit</span>
                            </div>


                      
                        </div>
                    </div>
                    
                </Cantainer>
            </div>


        </>
    )
}

export default About
