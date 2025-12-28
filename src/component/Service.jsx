import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'
export default function Service() {
   const servicedata=[
      {
         title:"Advertising",
         description:"We turn bold idea  into powerful digital solution that connect, engage.. ",
         icon: assets.ads_icon
      },
      {
         title:"Content Writing",
         description:"We help you execute your plan and deliver result ",
         icon: assets.content_icon
      },
      {
         title:"Content Marketing",
         description:"We help you create a marketing strategy that drives ",
         icon: assets.marketing_icon
      },
      {
         title:"Social Media",
         description:"We help yoy building a strong social medial presence and engage with your audience ",
         icon: assets.social_icon
      },
   ]
  return (
    <>
    <motion.div
    initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.7}}
    viewport={{once:true}}
    className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24
    xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <img src={assets.bgImage2} className='absolute  -top-100 -left-70 -z-1 dark:hidden' alt="" />
      <Title title="How can we help?" desc=" From strategy to execution, we craft digital solution that move your business forward." />
    <div className='flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-3'>
      {servicedata.map((Service,index)=>(
         <ServiceCard key={index} Service={Service} index={index} />
      ))}
    </div>
    </motion.div>
    </>
  )
}
