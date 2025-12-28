import React from 'react'
import assets from '../assets/assets'

export default function Footview({ Theme }) {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-14">

        {/* Left Section */}
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400 max-w-md">
          <img
            src={Theme === 'dark' ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="Logo"
          />

          <p>
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li><a href="#hero" className="hover:text-primary">Home</a></li>
            <li><a href="#service" className="hover:text-primary">Service</a></li>
            <li><a href="#ourwork" className="hover:text-primary">Our Work</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="max-w-md">
          <h2 className="font-semibold text-gray-800 dark:text-gray-200">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm mt-2 mb-6 text-gray-600 dark:text-gray-400">
            The latest news, articles, and resources sent to your inbox weekly.
          </p>

          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm rounded-full bg-transparent border border-gray-300 dark:border-gray-700 outline-none"
            />
            <button className="bg-primary text-white px-6 rounded-full hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-6 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>

        <div className="flex gap-5">
          <img src={assets.facebook_icon} alt="Facebook" className="w-5 cursor-pointer hover:opacity-80" />
          <img src={assets.instagram_icon} alt="Instagram" className="w-5 cursor-pointer hover:opacity-80" />
          <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 cursor-pointer hover:opacity-80" />
          <img src={assets.twitter_icon} alt="Twitter" className="w-5 cursor-pointer hover:opacity-80" />
        </div>
      </div>
    </footer>
  )
}
