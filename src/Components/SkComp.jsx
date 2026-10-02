import React from 'react'



const SkComp = ({Logo,Text,LogoColor}) => {
    return (
        <>
          <div>
              <div className='w-46.5 h-46.5 border-2 border-black flex justify-center items-center flex-col duration-300 group hover:bg-black rounded-sm'>
                <h2 className=  {`${LogoColor}  text-6xl`}>{Logo}</h2>
                <h2 className='text-black text-[20px] font-bold font-my_font group-hover:text-white duration-300'>{Text}</h2>
            </div>

          </div>




        </>
    )
}

export default SkComp