import React from 'react'
import Cantainer from './Cantainer'
import Flex from './Flex'
import { MdLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { AiTwotoneMail } from "react-icons/ai";
import { BsCopy } from "react-icons/bs";





const Contai = () => {
    return (
        <div className='mb-10'>
            <Cantainer>
                <h2 className='text-black text-center font-bold font-my_font text-4xl mt-20'>Let's Discuss Your Project</h2>
                <p className='text-center text-gray-500 font-normal font-my_font  mt-3'>I'm available for freelance work. Drop me a line if you have a project you'd like to discuss.</p>
                <Flex className={`gap-10 mt-10`}>
                    <div>
                        <div className=' py-6 px-8.5 bg-[#f7f7f7] border border-[#E5E5E5] rounded-3xl hover:border-black duration-300 ease-in-out flex  gap-2 mt-10'>

                            <div className='w-10 h-10 rounded-lg bg-black text-white text-2xl flex justify-center items-center'>
                                <MdLocationOn />

                            </div>
                            <div>
                                <h2 className='text-xs font-my_font text-gray-400'>Location</h2>
                                <h2 className='text-[16px] font-semibold text-gray-950 font-my_font'>Dhaka, Bangladesh</h2>
                                <p className='text-xs font-my_font text-gray-400'>Available for remote & international work</p>
                            </div>
                        </div>
                        <div className=' py-6 px-8.5 bg-[#f7f7f7] border border-[#E5E5E5] rounded-3xl hover:border-black duration-300 ease-in-out flex  gap-2 mt-10'>

                            <div className='w-10 h-10 rounded-lg bg-black text-white text-2xl flex justify-center items-center'>
                                <LuPhone />

                            </div>
                            <div className='w-full'>
                                <h2 className='text-xs font-my_font text-gray-400'>phon/Whatapps</h2>
                                <div className='flex justify-between'>
                                    <h2 className='text-[16px] font-semibold text-gray-950 font-my_font'>01873848214</h2>
                                    <div className='w-10 h-10 bg-white border border-[#E5E5E5] rounded-lg flex justify-center items-center group hover:bg-black duration-300 ease-in-out'>   <BsCopy className=' group-hover:text-white duration-300 ease-in-out' /></div>

                                </div>
                            </div>
                        </div>
                        <div className=' py-6 px-8.5 bg-[#f7f7f7] border border-[#E5E5E5] rounded-3xl hover:border-black duration-300 ease-in-out flex  gap-2 mt-10'>

                            <div className='w-10 h-10 rounded-lg bg-black text-white text-2xl flex justify-center items-center'>
                                <AiTwotoneMail />

                            </div>
                            <div>
                                <h2 className='text-xs font-my_font text-gray-400'>Email</h2>
                                <h2 className='text-[16px] font-semibold text-gray-950 font-my_font'>rayhanislamtoshar666666@gmail.com</h2>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='p-8 border border-[#E5E5E5] rounded-[10px] mt-11 shadow-2xl'>
                            <div className='flex gap-16'>
                                <div>
                                    <label className='block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider '>Your Name *</label>
                                    <div className='w-57 h-12.5'>
                                        <input type="text" className=' w-full px-4 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] text-sm text-[#111111] focus:outline-none focus:border-[#000000] transition-colors' />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider '>Your Email *</label>
                                    <div className='w-57 h-12.5'>
                                        <input type="text" className=' w-full px-4 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] text-sm text-[#111111] focus:outline-none focus:border-[#000000] transition-colors' />
                                    </div>
                                </div>

                            </div>
                            <div className='flex gap-16 mt-7'>
                                <div>
                                    <label className='block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider '>Your Location</label>
                                    <div className='w-57 h-12.5'>
                                        <input type="text" className=' w-full px-4 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] text-sm text-[#111111] focus:outline-none focus:border-[#000000] transition-colors' />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider '>Subject</label>
                                    <div className='w-57 h-12.5'>
                                        <input type="text" className=' w-full px-4 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] text-sm text-[#111111] focus:outline-none focus:border-[#000000] transition-colors' />
                                    </div>
                                </div>
                               

                            </div>
                             <div className=' mt-10'>
                                    <label className='block text-xs font-bold text-[#111111] mb-2 uppercase tracking-wider '>Message *</label>
                                    <div className='w-147.5 h-25'>
                                        <input type="text" className=' w-full h-full px-4 py-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E5] text-sm text-[#111111] focus:outline-none focus:border-[#000000] transition-colors' />
                                    </div>
                                    <button className=" mt-10 w-full py-4 rounded-xl bg-[#25D366] text-[#FFFFFF] text-sm font-bold tracking-wide shadow-lg hover:bg-[#20bd5a] active:scale-98 transition-all flex items-center justify-center gap-2">
                                        <span>Send via WhatsApp</span>
                                    </button>
                                </div>
                        </div>

                    </div>

                </Flex>
            </Cantainer>

        </div>
    )
}

export default Contai