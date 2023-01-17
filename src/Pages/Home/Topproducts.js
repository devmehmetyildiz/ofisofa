import React from 'react'
import img from '../../Assets/img'
import { motion } from "framer-motion"
import products from '../../Assets/products';
import { Link } from 'react-router-dom';

export default function Topproducts() {

    const productshuffled = products.sort(() => 0.5 - Math.random());

    return (
        <div className='w-full justify-center items-center flex flex-col mt-12'>
            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }} className='px-4 font-bold uppercase text-center text-4xl'>EN TERCİH EDİLEN ÜRÜNLER</motion.h1>
            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className='px-4 mt-4 text-center text-[#3d3d3d] font-normal text-lg'>Müşterilerimizin en çok tercih ettiği ürünler</motion.p>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] '>
                {productshuffled.slice(0, 3).map(item => {
                    return <div key={Math.random()} className="overflow-hidden">
                        <motion.div
                            initial={{ y: 180, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: item.duration }}
                            className="p-4 flex flex-col justify-center items-center border-[1px] border-solid border-[#90EE90]">
                            <img className='h-[250px]' src={item.imgs[0]} alt={item.title} />
                            <h1 className='mt-4 font-bold leading-[1.7]'>{item.product}</h1>
                            <h1 className='mt-4 font-bold leading-[1.7]'>{item.info}</h1>
                            <p className='font-semibold text-[#006400] my-4'>${item.price}</p>
                        </motion.div>
                    </div>
                })}
            </div>
            <Link to={"/Products"}>  <button className='button rounded-lg mt-4 '>Daha Fazla Gör</button></Link>
        </div>
    )
}
