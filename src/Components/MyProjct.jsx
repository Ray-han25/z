import React, { useState } from 'react'
import Cantainer from './Cantainer'
import CommonText from './CommonText'
import Flex from './Flex'
import pic from '../assets/Bean Scene Coffee Hero.png'
import { VscCloseCompact } from "react-icons/vsc";
import { FaRegFaceSadCry } from "react-icons/fa6";



const MyProjct = () => {
  const [active ,setactive]=useState(false)
  const [activet ,setactivet]=useState(false)
  const [activett ,setactivett]=useState(false)
  return (
    <>
    <div className='bg-black py-20'>
        <Cantainer>
            <CommonText text={`My `} texttow={`Projects`} className={`text-white`}/>
            <Flex className={`mt-10 relative gap-5 items-center`}>
                <div className='w-132.5 rounded-lg '>
                  <img className='w-full rounded-lg'  src={pic} alt="" />
                  </div>
                <div className='w-[50%]'>
                  <h2 className='text-4xl font-bold text-white'>01</h2>
                  <h2 className='text-white font-my_font font-bold text-3xl mt-3'>Bean Scene — Coffee Website</h2>
                  <p className='text-white font-my_font mt-2 text-[10px]'> A modern and responsive coffee website built with HTML, CSS, JavaScript, and Bootstrap, featuring a stylish hero section, coffee menu, testimonials, and subscription section.</p>
                  <button onClick={()=>setactive(true)} className=' text-black  text-[10px] py-2 px-4 rounded-full bg-blue-400 font-my_font mt-4 cursor-pointer active:scale-110 translate'>Live Demo</button>
                  <div className={`${active?" opacity-100 translate-y-0":"opacity-0 translate-y-100"} duration-500 ease-in-out w-100 h-50 bg-yellow-50 rounded-lg absolute top-0 left-[25%]
                  p-3`}>
                    <h2 className='flex justify-end'><VscCloseCompact onClick={()=>setactive(false)}/></h2>
                    <h2 className='flex justify-center mt-1 text-[70px] text-black'><FaRegFaceSadCry /></h2>
                    <h2 className=' flex items-center flex-col font-my'><span className='block text-center text-4xl font-extrabold'>“Sorry"! </span>"This site is currently under development.”</h2>
                  </div>
                </div>
            </Flex>
            <Flex className={`mt-10 relative gap-5 items-center`}>
                <div className='w-[50%]'>
                  <h2 className='text-4xl font-bold text-white'>02</h2>
                  <h2 className='text-white font-my_font font-bold text-3xl mt-3'>Bean Scene — Coffee Website</h2>
                  <p className='text-white font-my_font mt-2 text-[10px]'>
                     A modern and responsive coffee website built with HTML, CSS, JavaScript, and Bootstrap, featuring a stylish hero section, coffee menu, testimonials, and subscription section.</p>
                  <button onClick={()=>setactivet(true)} className=' text-black  text-[10px] py-2 px-4 rounded-full bg-blue-400 font-my_font mt-4 cursor-pointer active:scale-110 translate'
                    >Live Demo</button>              
                </div>
                   <div className='w-132.5 rounded-lg '>
                  <img className='w-full rounded-lg'  src={pic} alt="" />
                     <div className={`${activet?
                  " opacity-100 translate-y-0":"opacity-0 translate-y-100"} duration-500 ease-in-out w-100 h-50 bg-yellow-50 rounded-lg absolute top-0 left-[25%]
                  p-3`}>
                    <h2 className='flex justify-end'><VscCloseCompact onClick={()=>setactivet(false)}/></h2>
                    <h2 className='flex justify-center mt-1 text-[70px] text-black'><FaRegFaceSadCry /></h2>
                    <h2 className=' flex items-center flex-col font-my'><span className='block text-center text-4xl font-extrabold'>“Sorry"! </span>"This site is currently under development.”</h2>
                  </div>   
                  </div>
            </Flex>
            <Flex className={`mt-10 relative gap-5 items-center`}>
                <div className='w-132.5 rounded-lg '>
                  <img className='w-full rounded-lg'  src={pic} alt="" />
                  </div>
                <div className='w-[50%]'>
                  <h2 className='text-4xl font-bold text-white'>03</h2>
                  <h2 className='text-white font-my_font font-bold text-3xl mt-3'>Bean Scene — Coffee Website</h2>
                  <p className='text-white font-my_font mt-2 text-[10px]'> A modern and responsive coffee website built with HTML, CSS, JavaScript, and Bootstrap, featuring a stylish hero section, coffee menu, testimonials, and subscription section.</p>
                  <button onClick={()=>setactivett(true)} className=' text-black  text-[10px] py-2 px-4 rounded-full bg-blue-400 font-my_font mt-4 cursor-pointer active:scale-110 translate'>Live Demo</button>
                  <div className={`${activett?" opacity-100 translate-y-0":"opacity-0 translate-y-100"} duration-500 ease-in-out w-100 h-50 bg-yellow-50 rounded-lg absolute top-0 left-[25%]
                  p-3`}>
                    <h2 className='flex justify-end'><VscCloseCompact onClick={()=>setactivett(false)}/></h2>
                    <h2 className='flex justify-center mt-1 text-[70px] text-black'><FaRegFaceSadCry /></h2>
                    <h2 className=' flex items-center flex-col font-my'><span className='block text-center text-4xl font-extrabold'>“Sorry"! </span>"This site is currently under development.”</h2>
                  </div>
                </div>
            </Flex> 
        </Cantainer>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default MyProjct  