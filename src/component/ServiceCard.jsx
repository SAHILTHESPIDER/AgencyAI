import React, { useRef, useState } from 'react'

export default function ServiceCard({ Service }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative group max-w-lg rounded-xl p-[1px] overflow-hidden"
    >
      {/* BORDER GLOW */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 
        bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 
        ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          // maskImage: 'linear-gradient(#000 0 0)',
          // WebkitMask:
          //   'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          // WebkitMaskComposite: 'xor',
          // maskComposite: 'exclude',
          // padding: '2px',
          top:position.y-150,left:position.x-150
        }}
      />

      {/* CARD CONTENT */}
      <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 z-10 flex gap-6 items-center">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-3">
          <img
            src={Service.icon}
            alt=""
            className="w-16 h-16"
          />
        </div>

        <div>
          <h2 className="font-semibold text-lg">{Service.title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {Service.description}
          </p>
        </div>
      </div>
    </div>
  )
}
