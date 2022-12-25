import React from 'react'
import img from '../../Assets/img'
import { motion } from "framer-motion"
export default function Popularproducts() {

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
      img: img.Popularproduct1,
      title: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
      price: '367',
      duration: 0.5
    },
    {
      img: img.Popularproduct2,
      title: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
      price: '367',
      duration: 1.0
    },
    {
      img: img.Popularproduct3,
      title: 'Bly Microfiber / Microsuede 56" Armless Loveseat',
      price: '367',
      duration: 1.5
    },

  ]

  const frame_toup = {
    initial: { y: 80 },
    viewport: { once: true },
    whileInView: { y: 0 },
    transition: { duration: 0.7 }
  }

  return (
    <div className='w-full justify-center items-center flex flex-col mt-12'>
      <div className='overflow-hidden'>
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='font-bold uppercase text-center text-4xl'>POPULAR PRODUCTS</motion.h1>
      </div>
      <div className='overflow-hidden'>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mt-4 text-center text-[#7F85A8] font-normal text-lg'>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</motion.p>

      </div>
      <div className='mt-8 flex flex-col justify-center items-center w-full px-[5%]'>
        <div className='flex flex-wrap  flex-row justify-center items-center '>
          {categories.map(item => {
            return <div key={Math.random()} className='overflow-hidden'>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer py-4 px-8 flex items-center justify-center border-b-2 border-solid border-[#e9ecef #e9ecef #dee2e6] hover:border-[#FD8F5F]">
                {item}
              </motion.div>
            </div>
          })}
        </div>
      </div>
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
    </div >
  )
}
