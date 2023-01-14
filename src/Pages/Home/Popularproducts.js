import React, { useState } from 'react'
import img from '../../Assets/img'
import { motion } from "framer-motion"
import products from "../../Assets/products"
export default function Popularproducts() {


  const categories = [
    'Masa Takımı',
    'BOŞ',
    'BOŞ',
    'BOŞ',
    'BOŞ',
    'BOŞ',
  ]

  const [category, setcategory] = useState(categories[0])

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
          className='font-bold uppercase text-center text-4xl text-[#1c2520]'>Popüler Ürünler</motion.h1>
      </div>
      <div className='overflow-hidden'>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mt-4 text-center text-[#3D3D3D] font-normal text-lg'>En beğenilen Modellerimiz</motion.p>

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
                onClick={() => { setcategory(item) }}
                className="cursor-pointer py-4 px-8 flex items-center justify-center border-b-2 border-solid border-[#e9ecef #e9ecef #dee2e6] hover:border-[#144E5A]">
                {item}
              </motion.div>
            </div>
          })}
        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] '>
        {products.filter(u => u.category === category).length > 0 ? products.filter(u => u.category === category).slice(0, 3).map(item => {
          return <div key={Math.random()} className="overflow-hidden">
            <motion.div
              initial={{ y: 180, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: item.duration }}
              className="p-4 flex flex-col justify-center items-center border-[1px] border-solid border-[#F6F8FE]">
              <img className='h-[250px]' src={item.imgs[0]} alt={item.title} />
              <h1 className='mt-4 font-bold leading-[1.7]'>{item.product}</h1>
              <h1 className='mt-4 font-bold leading-[1.7]'>{item.info}</h1>
              <p className='font-semibold text-[#144E5A] my-4'>${item.price}</p>
            </motion.div>
          </div>
        }) : <div className="w-full text-center flex justify-center items-center"><h1>Ürün Bulunamadı</h1></div>}
      </div>
    </div >
  )
}
