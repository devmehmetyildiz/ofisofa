import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import img from '../../Assets/img'

export default function Socialmedia() {
  return (
    <div className='mt-12 flex flex-col lg:flex-row justify-center items-center'>
      <div className='w-full flex justify-end items-center'>
        <div className='w-2/3 flex flex-col justify-center items-start'>
          <AiOutlineInstagram className='text-[#fd8f5f] text-5xl' />
          <h1 className='text-3xl text-black mt-8 font-bold w-2/3'>
           INSTAGRAM 'DA DA BİZİ TAKİP EDİN
          </h1>
          <p className='mt-4'>
            En Güncel Ürünlerimizden ilk siz haberdar olun
          </p>
          <button className='mt-4 button rounded-lg'>Keşfet</button>
        </div>
      </div>
      <img src={img.Home_Social1} alt="social 1" />
      <img src={img.Home_Social2} alt="social 2" />
    </div>
  )
}
