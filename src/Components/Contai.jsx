import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import { MdLocationOn } from "react-icons/md";


const Contai = () => {
    return (
        <div>
            <Cantainer>
                <h2 className='text-black text-center font-bold font-my_font text-4xl mt-20'>Let's Discuss Your Project</h2>
                <p className='text-center text-gray-500 font-normal font-my_font  mt-3'>I'm available for freelance work. Drop me a line if you have a project you'd like to discuss.</p>
                <Flex>
                    <div>
                        <div className=' py-6 px-8.5 bg-[#f7f7f7] border border-[#E5E5E5] rounded-3xl hover:border-black duration-300 ease-in-out flex  gap-2'>

                            <div className='w-10 h-10 rounded-lg bg-black text-white text-2xl flex justify-center items-center'>
                             <MdLocationOn />

                            </div>
                            <div>
                                <h2 className='text-xs font-my_font text-gray-400'>Location</h2>
                                <h2 className='text-[16px] font-extrabold text-gray-950 font-my_font'>Dhaka, Bangladesh</h2>
                                <p className='text-xs font-my_font text-gray-400'>Available for remote & international work</p>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>

                </Flex>
            </Cantainer>

        </div>
    )
}

export default Contai