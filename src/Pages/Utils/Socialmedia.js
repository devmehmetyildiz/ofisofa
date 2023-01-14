import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import img from '../../Assets/img'
import productimages from '../../Assets/productimages'

export default function Socialmedia() {
  return (
    <div className='mt-12 flex flex-col lg:flex-row justify-center items-center'>
        <div className=' flex flex-col justify-center items-center lg:items-start p-4'>
          <AiOutlineInstagram className='text-[#144E5A] text-5xl' />
          <h1 className='text-3xl text-[#144E5A] mt-8 font-bold w-2/3'>
            INSTAGRAM 'DA DA BİZİ TAKİP EDİN
          </h1>
          <p className='mt-4 text-[#1c2520]'>
            En Güncel Ürünlerimizden ilk siz haberdar olun
          </p>
          <button className='mt-4 button rounded-lg'>Keşfet</button>
        </div>
      <img className='w-1/3' src={productimages.classmasatakim2} alt="social 1" />
    </div>
  )
}
