import React from 'react'
import assets from '../assets/assets'
import {motion} from 'motion/react'
export default function OurWork() {
   const workData=[
      {
         title:'Mobile app marketing',
         description:'We turn bold ideas into  powerful digital solution that connecct,engage...',
         image:assets.work_mobile_app
      },
      {
         title:'dashboard managment',
         description:'We help you execute your plan and deliver results',
         image:assets.work_dashboard_management
      },
      {
         title:'Fitness app ',
         description:'We turn bold ideas into powerful digital solution that cpnnect,engage',
         image:assets.work_fitness_app
      },
      
   ]  

  return (
    <>
    <motion.div 
    initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.7}}
    viewport={{once:true}}
    
    className=' flex flex-col items-center gap-7 px-4 sm:px-24
    xl:px-40 pt-30 text-gray-700 dark:text-white'>
       <h1 className='text-3xl sm:text-5xl font-medium'>Our Latest Work</h1>
       <p className='
       max-w-lg text-center text-gray-500 dark:text'>From strategy to execution, we craft digital solution
         that move your business forward.
       </p>
       <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl'>
         {
            workData.map((work,index)=>(
               <div key={index}className='hover:scale-104 duration-500 transition-all cursor-po'>
                  <img src={work.image} alt="" className='w-full rounded-xl' />
                  <h1 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h1>
                  <p className='mt-2 mb-1 text-sm font-light opacity-40'>{work.description}</p>
               </div>
            ))
         }
       </div>
    </motion.div>
    </>
  )
}
