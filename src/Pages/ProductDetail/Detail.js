import React, { useState } from 'react'
import { useLocation, useMatch, useNavigate, useParams } from 'react-router-dom';
import products from '../../Assets/products';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { motion } from "framer-motion"
export default function Detail() {
  let { Name } = useParams();
  let navigate = useNavigate()

  const [selectedImage, setselectedImage] = useState(0)

  const selectedproduct = products.find(u => u.product === Name)
  if (!selectedproduct) {
    navigate("/Products")
  }
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='w-full flex flex-col lg:flex-row justify-center items-start text-center p-8 '>
        <div className='flex flex-col justify-center items-center '>
          <Popup
            modal
            size={"large"}
            trigger={<motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={selectedproduct.imgs[selectedImage]} className="cursor-pointer h-[600px]" alt="asd" />} position="bottom">
            {close => (
              <div className="bg-transparent shadow-4xl  flex flex-col justify-center items-center rounded-lg ">
                <img src={selectedproduct.imgs[selectedImage]} className=" w-[90vw]  " alt="asd" />
                <button className="absolute right-0 top-0 outline-none border-none" onClick={close}>
                  <AiOutlineCloseCircle className='text-[#29303e] text-4xl' />
                </button>
              </div>
            )}
          </Popup>

          <div className='flex flex-row justify-start items-start p-4 gap-4 w-full'>
            {selectedproduct.imgs.map((item, index) => {
              return <img src={item} alt="foto" onMouseEnter={() => { setselectedImage(index) }} className={`rounded-lg h-[80px] ${index === selectedImage && 'shadow-lg shadow-green-300'}`} />
            })}
          </div>
        </div>
        <div className='p-4 flex flex-col justify-start items-start lg:ml-12 w-1/2 font-serif'>
          <h1 className='font-serif text-[3vmin]'>{selectedproduct.product}</h1>
          <p className='text-[#b8b8b8] font-serif'>{selectedproduct.category}</p>
          <h1 className='mt-12 text-left font-serif text-lg w-1/2'>{selectedproduct.info}</h1>
          <h1 className='mt-12 text-xl font-serif'>{selectedproduct.price}</h1>
        </div>
      </div>
      <div className='my-8 h-[1px] px-[10%] w-full bg-[#8b8b8b]' />
      <div className='mt-12 flex flex-row items-center justify-center gap-20'>
        <div className='flex  flex-col justify-center items-center'>
          <h1 className='text-[3vmin] font-seminold leading-7  w-full text-left font-serif'>ÖZELLİKLER</h1>
          <ul className='list-disc text-gray-600 text-center mt-4 font-serif'>
            <li>özellik 1</li>
            <li>özellik 2</li>
            <li>özellik 3</li>
          </ul>
        </div>
        <img src={selectedproduct.imgs[0]} className="rounded-lg cursor-pointer h-[400px]" alt="asd" />
      </div>
      <div className='my-8 h-[1px] px-[10%] w-full bg-[#8b8b8b]' />
      <div className='flex flex-row justify-center items-center mt-12'>
        <div className='flex flex-col justify-center items-center '>
          <img src={selectedproduct.imgs[0]} className="rounded-lg cursor-pointer h-[300px]" alt="asd" />
          <h1 className='text-[2vmin] mt-4 font-seminold leading-7  font-serif'>Ürün Detaylı Açıklama</h1>
          <p className='w-1/2 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <img src={selectedproduct.imgs[0]} className="rounded-lg cursor-pointer h-[300px]" alt="asd" />
          <h1 className='text-[2vmin] mt-4 font-seminold leading-7 font-serif  '>Ürün Detaylı Açıklama</h1>
          <p className='w-1/2 font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
        </div>
      </div>
    </div>
  )
}
