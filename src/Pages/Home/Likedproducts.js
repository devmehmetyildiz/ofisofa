import React from 'react'
import img from '../../Assets/img'
import { motion } from "framer-motion"
export default function Likedproducts() {
  const categories = [
    'Sofa',
    'Table',
    'Chair',
    'Bed',
    'Lighting',
    'Decore',
  ]

  const products = [
    {
      img: img.Likedproduct1,
      title: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
      price: '367',
      duration: 0.5
    },
    {
      img: img.Likedproduct2,
      title: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
      price: '367',
      duration: 1.0
    },
    {
      img: img.Likedproduct3,
      title: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
      price: '367',
      duration: 1.5
    },

  ]

  return (
    <div className='w-full justify-center items-center flex flex-col mt-12'>
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='px-4 font-bold uppercase text-center text-4xl'>PRODUCTS YOU MAY LIKE</motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='px-4 mt-4 text-center text-[#7F85A8] font-normal text-lg'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</motion.p>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] '>
        {products.map(item => {
          return <div key={Math.random()} className="overflow-hidden">
            <motion.div
              initial={{ y: 180, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: item.duration }}
              className="p-4 flex flex-col justify-center items-center border-[1px] border-solid border-[#F6F8FE]">
              <img className='h-[250px]' src={item.img} alt={item.title} />
              <h1 className='mt-4 font-bold leading-[1.7]'>{item.title}</h1>
              <p className='font-semibold text-red-800 my-4'>${item.price}</p>
            </motion.div>
          </div>
        })}
      </div>
      <button className='button rounded-lg mt-4 '>Discover More</button>
    </div>
  )
}
