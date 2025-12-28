import React from 'react'
import {company_logos} from '../assets/assets';
import { motion } from 'motion/react';
export default function Trusted() {
  return (
    <>
    <motion.div 
    initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.7}}
    viewport={{once:true}}
     className='flex flex-col items-center px-4 sm:px-12 md:px-24 lg:px-40 gap-10 text-gray-700'>
      <h1 className='font-semibold flex items-center justify-center  dark:text-white'>Trusted by lending companies</h1>
     <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
       {company_logos.map((logo,index)=>(
         <img key={index} src={logo} alt="" className='max-h-5 dark:drop-shadow-2xl' />
       ))}
     </div>
    </motion.div>
    </>
  )
}
