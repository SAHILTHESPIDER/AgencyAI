import React, { useEffect } from 'react'
import assets from '../assets/assets'

export default function Themeto({ Theme, setTheme }) {
  useEffect(()=>{
   const prefersDarkMode = window.matchMedia('(prefers-color-scheme-dark)').matches;
   setTheme(Theme||(prefersDarkMode ? 'dark': 'light'))
  },[])
   useEffect(() => {
    if (Theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('Theme', Theme)
  }, [Theme])

  return (
    <button>
      {Theme === 'dark' ? (
        <img
          onClick={() => setTheme('light')}
          src={assets.sun_icon}
          className="size-8 p-2 border border-gray-500 rounded-full"
          alt="Light Mode"
        />
      ) : (
        <img
          onClick={() => setTheme('dark')}
          src={assets.moon_icon}
          className="size-8 p-2 border border-gray-500 rounded-full"
          alt="Dark Mode"
        />
      )}
    </button>
  )
}
