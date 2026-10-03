import React from 'react'

const CommonText = ({className,text,texttow,}) => {
    return (
        <>
            <h2 className={`text-[48px] text-black font-my_font font-normal text-center ${className}`}>{text}<span className='font-extrabold'>{texttow}</span></h2>
        </>
    )
}

export default CommonText