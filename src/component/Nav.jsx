import React, { useState } from 'react'
import assets from '../assets/assets'
import Themeto from './Themeto';

function Nav({Theme,setTheme}) {
  const[sidebaropen,SetSidebarOpen]=useState(false);
  return (
    <>
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl 
    font-medium bg-white/50  dark:bg-gray-900/70  '>
    <img src={Theme ==='dark' ? assets.logo_dark:assets.logo} className='w-32 sm:w-40' alt="" />
      <div className={`text-gray-700 dark:text-white sm:text-[90%] ${!sidebaropen ? 'max-sm:w-0 overflow-hidden':'max-sm:w-60 max-sm:pl-10 '} max-sm:fixed top-0 bottom-0 right-0 
      max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 
      transition-all`}>
        <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=>SetSidebarOpen(false)} />
        <a onClick={()=>SetSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={()=>SetSidebarOpen(false)} href="#service" className='sm:hover:border-b'>Service</a>
        <a onClick={()=>SetSidebarOpen(false)} href="#Our-Work" className='sm:hover:border-b'>Our Work</a>
        <a onClick={()=>SetSidebarOpen(false)} href="#Contact-Us" className='sm:hover:border-b'>Contact Us</a>
       </div>
       <div className='flex items-center gap-2 sm:gap-4'>
        <Themeto Theme={Theme} setTheme={setTheme} />
        <img src={Theme==='dark'?assets.menu_icon_dark :assets.menu_icon} alt="" onClick={()=>SetSidebarOpen(true)} className='w-8 sm:hidden' />
        <a href="#Contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full 
        cursor-pointer hover:scale-105 transition-all'>connect
        <img src={assets.arrow_icon} width={14} alt="" />
        </a>
       </div>
    </div>
    </>
  )
}

export default Nav