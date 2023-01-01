import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai"
import { GiHamburgerMenu, GiRadarCrossSection } from "react-icons/gi"
import { FaLevelUpAlt } from "react-icons/fa"
import { motion } from "framer-motion"

import img from "../../Assets/img"

export default function Header(props) {
  let location = useLocation()
  const [togglemenu, setTogglemenu] = useState(false);
  const [showmenu, setshowmenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 800) {
      setTogglemenu(true);
    }
    else {
      setTogglemenu(false);
    }
  }, [])


  const toggleNavBar = () => {
    if (window.scrollY >= 100 || window.innerWidth < 800) {
      setTogglemenu(true);
    }
    else {
      setTogglemenu(false);
    }
  };
  window.addEventListener('scroll', toggleNavBar);

  const linkClass = "mx-8 transition-all ease-in-out duration-500 text-md font-bold hover:text-[#1C5727] "
  return (
    <React.Fragment>
      <div className='w-full h-[85px] bg-[#71A37A] flex justify-center items-center relative z-50'>
        <div className=' w-full flex flex-row justify-around items-center relative'>
          <div className='hidden lg:flex flex-row justify-center items-center'>
            <Link className={`${linkClass}  ${location.pathname === "/" ? " text-[#1C5727]" : null}`} to={{ pathname: '/', state: { from: location.pathname } }}>ANASAYFA</Link>
            <Link className={`${linkClass}  ${location.pathname === "/Products" ? " text-[#1C5727]" : null}`} to={{ pathname: '/Products', state: { from: location.pathname } }} >ÜRÜNLER</Link>
            <Link className={`${linkClass}  ${location.pathname === "/Aboutus" ? " text-[#1C5727]" : null}`} to={{ pathname: '/Aboutus', state: { from: location.pathname } }} >HAKKIMIZDA</Link>
            <Link className={`${linkClass}  ${location.pathname === "/Contact" ? " text-[#1C5727]" : null}`} to={{ pathname: '/Contact', state: { from: location.pathname } }} >İLETİŞİM</Link>
          </div>
         
            {
              !showmenu ?
                <div className=' absolute right-5 top-0 visible lg:hidden'>
                  <GiHamburgerMenu className='text-[#1C5727]' fontSize={27} onClick={() => { setshowmenu(true) }} />
                </div>
                : null
            }
        </div >
        <div className=''>
          <img className='absolute scale-75 z-50 -left-5 -top-5' src={img.logo} alt="logo" />
        </div>
      </div >
      {
        togglemenu ?
          <React.Fragment >
            <div className='overflow-hidden z-50 fixed right-5 bottom-5  '>
              <motion.div
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2 }}
                onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}
                className="cursor-pointer p-4 bg-[#1C5727] rounded-full group"
              >
                <FaLevelUpAlt className='text-white' />
              </motion.div>
            </div>
            <motion.nav
              initial={{ y: -80 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
              className={`w-[100%] bg-[#71A37A] px-[18%] mx-auto flex ${showmenu ? 'h-[100vh] flex-col justify-center ' : 'flex-row  justify-between'}  items-center top-0 z-10 fixed`}>
              {showmenu ? <AiOutlineCloseCircle className='absolute right-10 top-10 ml-8 text-[#1C5727]' fontSize={27} onClick={() => { setshowmenu(false) }} /> : null}
              <div className=' w-full flex flex-row justify-around items-center my-4'>
                <div className='hidden lg:flex flex-row justify-center items-center'>
                  <Link className={`${linkClass}  ${location.pathname === "/" ? " text-[#1C5727]" : null}`} to={{ pathname: '/', state: { from: location.pathname } }}>Anasayfa</Link>
                  <Link className={`${linkClass}  ${location.pathname === "/Products" ? " text-[#1C5727]" : null}`} to={{ pathname: '/Products', state: { from: location.pathname } }} >Ürünler</Link>
                  <Link className={`${linkClass}  ${location.pathname === "/Aboutus" ? " text-[#1C5727]" : null}`} to={{ pathname: '/Aboutus', state: { from: location.pathname } }} >Hakkımızda</Link>
                  <Link className={`${linkClass}  ${location.pathname === "/Contact" ? " text-[#1C5727]" : null}`} to={{ pathname: '/Contact', state: { from: location.pathname } }} >İletişim</Link>
                </div>
               
              </div >
              <div className=''>
                <img className='h-[100px] absolute z-50 left-0 top-0' src={img.logo} alt="logo" />
              </div>

              {
                !showmenu ?
                  <div className='visible lg:hidden'>
                    <GiHamburgerMenu className='text-[#1C5727]' fontSize={27} onClick={() => { setshowmenu(true) }} />
                  </div>
                  : null
              }
              {
                showmenu ?
                  <motion.ul
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2 }}
                    className='w-full flex flex-col justify-between uppercase items-center font-Common tracking-[0.22em] text-[0.77em] leading-[1.65] font-normal text-[#1C5727] '>
                    <li className="my-4 flex flex-col group"><Link to={"/"} className='cursor-pointer group-hover:text-[#1C5727]' onClick={() => {
                      setshowmenu(false)
                    }}>ANA SAYFA</Link> <div className='bg-[#1C5727] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#1C5727]' /></li>
                    <li className="my-4 flex flex-col group"><Link to={"/Aboutus"} className='cursor-pointer group-hover:text-[#1C5727]' onClick={() => {
                      setshowmenu(false)
                    }} >BİZ KİMİZ?</Link><div className='bg-[#1C5727] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#1C5727]' /></li>
                    <li className="my-4 flex flex-col group"><Link to={"/"} className='cursor-pointer group-hover:text-[#1C5727]' onClick={() => {
                      setshowmenu(false)
                    }}>KATALOGLARIMIZ</Link><div className='bg-[#1C5727] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#1C5727]' /></li>
                    <li className="my-4 flex flex-col group"><Link to={"/Products"} className='cursor-pointer group-hover:text-[#1C5727]' onClick={() => {
                      setshowmenu(false)
                    }}>ÜRÜNLERİMİZ</Link><div className='bg-[#1C5727] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#1C5727]' /></li>
                    <li className="my-4 flex flex-col group"><Link to={"/Contact"} className='cursor-pointer group-hover:text-[#1C5727]' onClick={() => {
                      setshowmenu(false)
                    }}>İLETİŞİM</Link><div className='bg-[#1C5727] group-hover:w-[100%] w-[0px] group-hover:border-[1px] transition-all ease-in-out duration-300 border-[#1C5727]' /></li>
                  </motion.ul>
                  : null
              }
            </motion.nav >
          </React.Fragment >
          : null
      }
    </React.Fragment >
  )
}

