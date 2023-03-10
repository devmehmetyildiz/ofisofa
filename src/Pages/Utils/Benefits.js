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
      title: 'Hızlı & Ücretsiz* Dağıtım',
      info: 'Gaziantep İçi Ücretsiz Dağıtım',
      duration: 0.7
    },
    {
      icon: <MdOutlinePayment />,
      title: 'Taksit Seçenekleri',
      info: 'Tüm Bankalarla Anlaşmalı',
      duration: 1.0
    },
    {
      icon: <CiMoneyCheck1 />,
      title: 'Mail Order ile Güvenli Ödeme',
      info: 'Oturduğunuz Yerden Ödeme İmkânı',
      duration: 1.3
    },
    {
      icon: <BiSupport />,
      title: 'Teslimat Sonrası Hizmet',
      info: 'Her an yanınızdayız',
      duration: 1.6
    },
  ]

  return (
    <div className='mt-12 bg-[#90EE90] '>
      <div className='py-8 flex flex-col lg:flex-row justify-center items-center gap-10'>
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
              <p className='text-[#000000] mt-2 '>{item.info}</p>
            </motion.div>
          </div>
        })}
      </div>
    </div >
  )
}
