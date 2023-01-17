import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../Assets/img"
import { AiOutlineRight } from "react-icons/ai"

export default function Title({ title, titleurl }) {
  return (
    <div className='w-full titlebg'>
      <div className='flex flex-col justify-start items-start px-[15%] py-14'>
        <h1 className='text-4xl font-bold text-[#000000] uppercase'>{title}</h1>
        <div className='flex flex-row justify-center items-center mt-4'>
          <Link to={'/'}><h1 className='text-[#000000] font-bold'>Anasayfa</h1></Link>
          <AiOutlineRight className='text-[#000000]  mx-4 font-bold'/>
          <Link to={titleurl}><h1 className='text-[#000000]  font-bold'>{title}</h1></Link>
        </div>
      </div>
    </div>
  )
}
