import React from 'react'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

export default function Contact() {
  const onSubmit=async(event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35864c65-7cab-44b5-b4be-0f6825b79b12");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thankyou for the submission")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
    }

    } catch (error) {
     toast.error(error.message) 
    }

    
  }
  return (
  <>
  <div className='flex flex-col items-center gap-7 px-4 sm:px-24
    xl:px-40 pt-30 text-gray-700 dark:text-white'>
   <div className='flex flex-col gap-7 items-center justify-center'>
    <h1 className='text-3xl sm:text-5xl font-medium '>Reach out to us</h1>
    <p className='max-w-lg text-center opacity-50 text-gray-500 dark:text-white mb-6'> From strategy to execution, we craft digital solution that move your business forward </p>
    </div>
    <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'> 
     
     <div>
      <p className='mb-2 text-sm font-medium'>Your Name</p>
      <div className='flex pl-3 rounded-xl border border-gray-300 dark:border-gray-600'>
         <img src={assets.person_icon} alt="" />
         <input type="text" placeholder='Enter your name' name="name" className='w-full p-3 text-sm outline-none' required />
      </div>
     </div>
     <div>
      <p className='mb-2 text-sm font-medium'>Email id</p>
      <div className='flex pl-3 rounded-xl border border-gray-300 dark:border-gray-600'>
         <img src={assets.email_icon} alt="" />
         <input type="email" placeholder='Enter your email' name="email" className='w-full p-3 text-sm outline-none' required />
      </div>
     </div>
      <div className='sm:col-span-2'>
      <p className='mb-2 text-sm font-medium'>Message</p>
      <textarea name="message"  rows="8" placeholder='Enter your message'  className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300
      dark:border-gray-600' required/>
      </div>
      <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105
      transition-all'>Sumbit <img src={assets.arrow_icon} alt=""  className='w-4'/> </button>
    </form>
  </div>
  </>
  )
}
