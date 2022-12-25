import React from 'react'
import img from '../../Assets/img'

export default function About() {
  return (
    <div className='mt-12 px-[10%] flex flex-col justify-center items-center text-center'>
      <h1 className='text-4xl text-black font-bold mt-12'>OUR STORY</h1>
      <p className='text-lg text-[#646D77] mt-12 px-[10%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img src={img.About1} alt="aboutfoto1" className='mt-12' />
      <h1 className='text-4xl text-black font-bold mt-12'>JOURNEY START FROM</h1>
      <p className='text-lg text-[#646D77] mt-12 px-[10%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img src={img.About2} alt="aboutfoto1" className='mt-12'/>
      <h1 className='text-4xl text-black font-bold mt-12'>2020</h1>
      <p className='text-lg text-[#646D77] mt-12 px-[10%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div >
  )
}
