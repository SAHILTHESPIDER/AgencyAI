import React, { useState } from 'react'
import { Link } from "react-router-dom"
import assets from '../assets/assets'
import Themeto from './Themeto'

function Nav({ Theme, setTheme }) {
  const [sidebaropen, SetSidebarOpen] = useState(false)

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl 
      font-medium bg-white/50 dark:bg-gray-900/70">

        <img
          src={Theme === 'dark' ? assets.logo_dark : assets.logo}
          className="w-32 sm:w-40"
          alt="logo"
        />

        <div
          className={`text-gray-700 dark:text-white sm:text-[90%] 
          ${!sidebaropen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
          max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen 
          max-sm:flex max-sm:flex-col max-sm:bg-primary max-sm:pt-20
          flex sm:items-center gap-5 transition-all`}
        >
          <img
            src={assets.close_icon}
            alt="close"
            className="w-5 absolute right-4 top-4 sm:hidden"
            onClick={() => SetSidebarOpen(false)}
          />

          <Link to="/" onClick={() => SetSidebarOpen(false)} className="sm:hover:border-b">
            Home
          </Link>

          <Link to="/services" onClick={() => SetSidebarOpen(false)} className="sm:hover:border-b">
            Service
          </Link>

          <Link to="/work" onClick={() => SetSidebarOpen(false)} className="sm:hover:border-b">
            Our Work
          </Link>

          <Link to="/contact" onClick={() => SetSidebarOpen(false)} className="sm:hover:border-b">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Themeto Theme={Theme} setTheme={setTheme} />
          <img
            src={Theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            onClick={() => SetSidebarOpen(true)}
            className="w-8 sm:hidden"
          />
        </div>
      </div>
    </>
  )
}

export default Nav
