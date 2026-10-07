import React from 'react'
import CommonText from './CommonText'
import Cantainer from './Cantainer'
import SkComp from './SkComp'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { DiResponsive } from "react-icons/di";
const MySk = () => {
  return (
    <>
    <section id='myskil' className='mb-14'>
        <Cantainer>
            <CommonText className={`mt-15`} text={`My`} texttow={`Skills`}/>
            <div className='mt-6 flex flex-wrap gap-[71.5px]'>
              <SkComp Logo={<FaHtml5 />} Text={"HTML5"} LogoColor={"text-[#e96227]"}/>
              <SkComp Logo={<FaCss3Alt />} Text={"CSS3"} LogoColor={'text-[#2363e9]'}/>
              <SkComp Logo={<FaJsSquare />} Text={"javascript"} LogoColor={'text-[#f7df1d]'}/>
              <SkComp Logo={<FaReact />} Text={"React.js"} LogoColor={'text-[#00d5f7]'}/>
              <SkComp Logo={<RiTailwindCssFill />} Text={"Tailwind css"} LogoColor={'text-[#36b7f0]'}/>
              <SkComp Logo={<FaBootstrap />} Text={"Bootstrap"} LogoColor={'text-[#780ff1]'}/>
              <SkComp Logo={<BsGit />} Text={"Git"} LogoColor={'text-[#e84d31]'}/>
              <SkComp Logo={<FaGithub />} Text={"Github"} LogoColor={'group-hover:text-[#f28a39]'}/>
              <SkComp Logo={<AiOutlineApi />} Text={"REST API"} LogoColor={'text-[#f6754c]'}/>
              <SkComp Logo={<DiResponsive />} Text={"Responsive"} LogoColor={`text-[#6aaa3f]`}/>

            </div>
        </Cantainer>
    </section>
    </>
  )
}

export default MySk