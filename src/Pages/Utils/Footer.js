import React from 'react'
import img from '../../Assets/img'
import { AiOutlineTwitter, AiFillHeart } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#32653B] py-8 text-white'>
      <div className='flex flex-row justify-center items-center gap-12'>
        <div className='flex flex-col justify-center items-start w-1/3'>
          <img className='mt-4' src={img.logo} alt="logo" />
          <p className='mt-8 text-[#FDFDFD] '>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
          <div className='flex flex-row justify-center items-center mt-8'>
            <div className='cursor-pointer group rounded-full  p-2 border-2 text-white  mx-2 border-white'>
              <AiOutlineTwitter className='text-md  group-hover:-rotate-90 transition-all ease-in-out duration-150 group-hover:text-[#FDFDFD]' />
            </div>
            <div className='cursor-pointer group rounded-full  p-2 border-2 mx-2 text-white border-white'>
              <FaFacebookF className='text-md  group-hover:-rotate-90 transition-all ease-in-out duration-150 group-hover:text-[#1C5727]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 text-[#FDFDFD]'>
          <h1 className='text-[#FDFDFD] font-bold '>Quick links</h1>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Image Licensin</p>
          </Link>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Style Guide</p>
          </Link>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Privacy Policy</p>
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 text-[#FDFDFD]'>
          <h1 className='text-[#FDFDFD] font-bold '>Shop Category</h1>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Image Licensin</p>
          </Link>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Style Guide</p>
          </Link>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Privacy Policy</p>
          </Link>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 text-[#FDFDFD]'>
          <h1 className='text-[#FDFDFD] font-bold '>Pertners</h1>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Image Licensin</p>
          </Link>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Style Guide</p>
          </Link>
          <Link className=''>
            <p className='text-[#FDFDFD] hover:border-b-[1px] border-[#1C5727] border-solid  hover:text-[#71A37A] transition-all ease-in-out duration-200'>Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className='w-full mt-12   whitespace-nowrap text-center flex flex-row justify-center items-center'>
        <p className='text-[#FDFDFD]  inline whitespace-nowrap'>Copyright ©2022 All rights reserved | This template is made with</p>
        <AiFillHeart className='text-[#1C57FDFDFD27] mx-2' />
        <p className='text-center text-[#FDFDFD]'>by Colorlib</p>
      </div>
    </div>
  )
}
