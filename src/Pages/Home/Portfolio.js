import React, { useState } from 'react'
import img from "../../Assets/img"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import productimages from '../../Assets/productimages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  const [imageloaded, setimageloaded] = useState(false)
  const slideritems = [
    {
      Id: 2,
      img: productimages.sliderimg1,
      title: "B PROJEMİZ"
    },
    {
      Id: 1,
      img: productimages.sliderimg2,
      title: "A PROJEMİZ"
    },
    {
      Id: 3,
      img: productimages.sliderimg3,
      title: "C PROJEMİZ"
    },

  ]

  return (
    <div className=' relative w-full flex justify-center items-center bg-[#144E5A] h-[100vh]'>
      <img className='absolute top-0 left-0 w-[95vw]  h-[95vh] object-cover' src={img.Home_slider} alt="slider" />
      <div className='p-2 rounded-lg absolute left-[10%] top-[25%] bottom-[25%] bg-white w-1/3 lg:w-1/3'>
        <div className='p-[5%] flex flex-col justify-center items-start'>
          <h1 className='text-[#144E5A]  text-[3.4vmin] font-bold uppercase mb-4'>SİZLER İÇİN</h1>
          <h1 className='text-[5.4vmin] text-[#1c2520] font-extrabold leading-[1.2] mb-4'>YENİ SİTEMİZLE YAYINDAYIZ</h1>
          <div className='overflow-hidden'>
            < motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-[120%] leading-[30px] mb-[25px] '>Yeni Ürünler ve modern tasarımımız ile sizlere daha iyi hizmet vereceğiz.</motion.p>
          </div>
          <Link to={"/Products"}>  <button className='buttonportfolio rounded-lg mt-4'>Daha Fazla Gör</button></Link>
        </div>
      </div>
    </div>
  )
}



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <></>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <></>
  );
}