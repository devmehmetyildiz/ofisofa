import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../Assets/img'
import productimages from '../../Assets/productimages'

export default function About() {
  return (
    <div className='mt-12 flex flex-col lg:flex-row justify-center items-center bg-[#F2E1D9]'>
      <img src={productimages.informmasatakimshne1} className="w-1/2" alt="home about" />
      <div className='w-full'>
        <div className='p-8 flex flex-col justify-center items-start w-full lg:w-2/3'>
          <h1 className='font-bold text-[4vmin]'>
          VİZYON - MİSYON
          </h1>
          <p className='mt-8 text-md'>
          Birbirinden farklı tasarım, nicelik, boyut, renk ve fiyat çeşitliliğine sahip ürünlerle her türlü tüketiciye hitap eden firmamızın bu esnek ortamı oluşturmasının temel amacı; değişen şartlar ve zaman içerisinde farklılaşabilen ve gelişebilen talep yapısına cevap vermektir. 
          </p>
          <p className='mt-4 text-md'>
          Değişimi, gelişimi ve yeniliği hedefleyerek çağdaş ve özgün tasarımları müşterileriyle buluşturmayı hedeflemektedir.
          </p>
         <Link to={"/Aboutus"}><button className='mt-4 button rounded-lg'>Daha Fazla Öğren</button></Link>
        </div>
      </div>
    </div>
  )
}
