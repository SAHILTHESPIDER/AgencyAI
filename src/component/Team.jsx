import React from 'react'
import { teamData } from '../assets/assets'
import { motion } from 'motion/react';
export default function Team() {
  return (
    <motion.div
    initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.5, delay:0.7}}
     viewport={{once:true}}
    className='flex flex-col gap-7 px-4 sm:px-12 lg:px-24 xl:px-40
    pt-30 text-gray-800 dark:text-white'>
    <div className='flex flex-col gap-7 items-center justify-center'>
    <h1 className='text-3xl sm:text-5xl font-medium '>Meet the team</h1>
    <p className='max-w-lg text-center opacity-50 text-gray-500 dark:text-white mb-6'> A passionate team of digital expert dedicated to your brand sucess. </p>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid gap-4'>
      {teamData.map((team)=>(
         <div key={team.id} className='flex max-sm:flex-col items-center gap-5 px-4 py-3 w-[90%] rounded-xl border
          border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all 
          duration-400'>
            <img src={team.image} className='w-12 h-12 rounded-full' alt="" />
            <div className='flex-1'>
            <h1 className='font-bold text-sm'>{team.name}</h1>
            <p className='text-xs opacity-50'>{team.title}</p>
            </div>
           
         </div>
      ))

      }
    </div>
    
    </motion.div>
  )
}
