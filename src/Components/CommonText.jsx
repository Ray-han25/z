import React from 'react'

const CommonText = ({className}) => {
    return (
        <>
            <h2 className={`text-[48px] text-black font-my_font font-normal text-center ${className}`}>My<span className='font-extrabold'>Skills</span></h2>
        </>
    )
}

export default CommonText