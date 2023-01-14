import React from 'react'
import img from '../../Assets/img'
import { AiOutlineTwitter, AiFillHeart, AiOutlineMail } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { CiHome, CiMobile4 } from 'react-icons/ci'

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#144E5A] py-8 text-[#FFE2FFB901C8]'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-12'>
        <div className='flex flex-col justify-center items-start w-1/3'>
          <img className='mt-4' src={img.logoFooter} alt="logo" />

          <div className='flex flex-row justify-center items-center mt-8'>
            <div className='cursor-pointer group rounded-full  p-2 border-2 text-[#FFE2C8]  mx-2 border-[#FFE2C8]'>
              <AiOutlineTwitter className='text-md  group-hover:-rotate-90 transition-all ease-in-out duration-150 group-hover:text-[#FFE2C8]' />
            </div>
            <div className='cursor-pointer group rounded-full  p-2 border-2 mx-2 text-[#FFE2C8] border-[#FFE2C8]'>
              <FaFacebookF className='text-md  group-hover:-rotate-90 transition-all ease-in-out duration-150 group-hover:text-[#FFE2C8]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-start items-start '>
          <div className='flex flex-row justify-start items-center w-full my-4'>
            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[#FFE2C8] font-semibold'>Mücahitler Mahallesi 52075.Sokak </h1>
              <h1 className='text-[#FFE2C8] font-semibold'> Kuğu Apartmanı No: 12/A </h1>
              <h2 className='text-[#FFE2C8]'>Şehitkamil/Gaziantep</h2>
            </div>
          </div>
          <div className='flex flex-row justify-start items-center w-full my-4'>
            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[#FFE2C8] font-semibold'>0 (530) 364 8963</h1>
              <h2 className='text-[#FFE2C8]'>7/24 Her zaman</h2>
            </div>
          </div>
          <div className='flex flex-row justify-start items-center w-full my-4'>
            <div className='flex flex-col justify-center items-start'>
              <h1 className='text-[#FFE2C8] font-semibold'>info@ofisofa.com</h1>
              <h2 className='text-[#FFE2C8]'>Her zaman bize ulaşabilirsiniz!</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mt-12   lg:whitespace-nowrap text-center flex flex-col lg:flex-row justify-center items-center'>
        <p className='text-[#FFE2C8]  inline lg:whitespace-nowrap'>Copyright ©2023 Her Hakkı Saklıdır</p>
        <AiFillHeart className='text-[#FFE2C8] mx-2' />
        <p className='text-center text-[#FFE2C8]'>by ARMSTEKNOLOJİ</p>
      </div>
    </div>
  )
}
