import React from 'react'
import { TbTruckDelivery } from "react-icons/tb"
import { MdOutlinePayment } from "react-icons/md"
import { CiMoneyCheck1 } from "react-icons/ci"
import { BiSupport } from "react-icons/bi"
import { motion } from "framer-motion"
export default function Benefits() {

  const benefist = [
    {
      icon: <TbTruckDelivery />,
      title: 'Fast & Free Delivery',
      info: 'Free delivery on all orders',
      duration: 0.7
    },
    {
      icon: <MdOutlinePayment />,
      title: 'Secure Payment',
      info: 'Free delivery on all orders',
      duration: 1.0
    },
    {
      icon: <CiMoneyCheck1 />,
      title: 'Money Back Guarantee',
      info: 'Free delivery on all orders',
      duration: 1.3
    },
    {
      icon: <BiSupport />,
      title: 'Online Support',
      info: 'Free delivery on all orders',
      duration: 1.6
    },
  ]

  return (
    <div className='mt-12 bg-[#F2E1D9] '>
      <div className='py-8 flex flex-row justify-center items-center gap-10'>
        {benefist.map(item => {
          return <div key={Math.random()} className="overflow-hidden">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: item.duration }} className='px-8 flex flex-col justify-center items-start'>
              <div className='text-5xl mt-2'>
                {item.icon}
              </div>
              <h5 className='mt-4 text-lg font-normal'>{item.title}</h5>
              <p className='text-[#57667e] mt-2 '>{item.info}</p>
            </motion.div>
          </div>
        })}
      </div>
    </div >
  )
}
