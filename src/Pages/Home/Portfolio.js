import React from 'react'
import img from "../../Assets/img"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
export default function Portfolio() {
  return (
    <div className=' relative w-full flex justify-center items-center bg-[#F2E1D9] h-[100vh]'>
      <img className='absolute top-0 left-0' src={img.Home_slider} alt="slider" />
      <div className='absolute left-[10%] top-[15%] bg-white w-2/3 lg:w-1/3'>
        <div className='p-[10%] flex flex-col justify-center items-start'>
          <h1 className='text-[#7F85A8]  text-[3.4vmin] font-bold uppercase mb-4'>SİZLER İÇİN</h1>
          <h1 className='text-[5.4vmin] text-[#1a1a1a] font-extrabold leading-[1.2] mb-4'>YENİ SİTEMİZLE YAYINDAYIZ</h1>
          <div className='overflow-hidden'>
            < motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-[120%] leading-[30px] mb-[25px] '>Yeni Ürünler ve modern tasarımımız ile sizlere daha iyi hizmet vereceğiz.</motion.p>
          </div>
          <Link to={"/Products"}>  <button className='button rounded-lg mt-4 '>Daha Fazla Gör</button></Link>
        </div>
      </div>
    </div>
  )
}
