import React from 'react'
import img from '../../Assets/img'

export default function About() {
  return (
    <div className='mt-12 flex flex-col lg:flex-row justify-center items-center bg-[#F2E1D9]'>
      <img src={img.Home_about} alt="home about" />
      <div className='w-full'>
        <div className='p-8 flex flex-col justify-center items-start w-full lg:w-2/3'>
          <h1 className='font-bold text-[4vmin]'>
            BEST FURNITURE
            MANUFACTURER
          </h1>
          <p className='mt-8 text-md'>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
          <p className='mt-4 text-md'>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
          </p>
          <button className='mt-4 button rounded-lg'>Discover More</button>
        </div>
      </div>
    </div>
  )
}
