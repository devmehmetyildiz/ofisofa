import React from 'react'
import { CiHome, CiMobile4 } from "react-icons/ci"
import { AiOutlineMail } from "react-icons/ai"

export default function Message() {
  return (
    <div className='w-full flex justify-center items-center mb-12'>
      <div className=' w-full lg:w-2/3'>
        <div className='flex flex-col justify-start items-start'>
          <h1 className='font-bold text-xl text-[#000000] mt-4'>Bizimle İletişime Geç</h1>
          <div className='flex flex-col lg:flex-row justify-between items-center w-full mt-4'>
            <div className='flex flex-col justify-center items-center w-2/3'>
              <textarea placeholder='Mesajınızı Yazınız' className='forminput outline-none border-[1px] border-gray-300 border-solid rounded-lg !w-full' rows="5"></textarea>
              <div className='mt-4 flex flex-row justify-center items-center w-full'>
                <input placeholder='İsminizi Giriniz' className='forminput py-2 mr-4 w-full rounded-md border-[1px] border-solid border-gray-300'></input>
                <input placeholder='E-mail' className='forminput py-2 w-full rounded-md border-[1px] border-solid border-gray-300'></input>
              </div>
              <div className='mt-4 flex flex-row justify-center items-center w-full'>
                <input placeholder='Konu Giriniz' className='forminput py-2 w-full rounded-md border-[1px] border-solid border-gray-300'></input>
              </div>
              <div className='mt-4 flex flex-row justify-start items-start w-full'>
                <button className='button rounded-lg'>Gönder</button>
              </div>
            </div>
            <div className='flex flex-col justify-start items-start '>
              <div className='flex flex-row justify-start items-center w-full my-4'>
                <CiHome className='mr-8 text-4xl text-[#000000]' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#000000] font-semibold'>Mücahitler Mahallesi 52075.Sokak </h1>
                  <h1 className='text-[#000000] font-semibold'> Kuğu Apartmanı No: 12/A </h1>
                  <h2 className='text-[#000000]'>Şehitkamil/Gaziantep</h2>
                </div>
              </div>
              <div className='flex flex-row justify-start items-center w-full my-4'>
                <CiMobile4 className='mr-8 text-4xl text-[#000000]' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#000000] font-semibold'>0 (530) 364 8963</h1>
                  <h2 className='text-[#000000]'>7/24 Her zaman</h2>
                </div>
              </div>
              <div className='flex flex-row justify-start items-center w-full my-4'>
                <AiOutlineMail className='mr-8 text-4xl text-[#000000]' />
                <div className='flex flex-col justify-center items-start'>
                  <h1 className='text-[#000000] font-semibold'>info@ofisofa.com</h1>
                  <h2 className='text-[#000000]'>Her zaman bize ulaşabilirsiniz!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
