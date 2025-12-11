import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl px-6 md:px-10 lg:px-20 shadow-2xl overflow-hidden relative'>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* ------- Left Side ------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] relative z-10'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight drop-shadow-lg'>
            Book Appointment <br /> <span className='bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>With Trusted Doctors</span>
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light backdrop-blur-sm bg-white/10 p-4 rounded-xl'>
            <img className='w-28 drop-shadow-lg' src={assets.group_profiles} alt="" />
            <p className='leading-relaxed'>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-4 rounded-full text-blue-600 font-semibold text-sm m-auto md:m-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:bg-blue-50'>
        Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ------- Right Side ------- */}
      <div className='md:w-1/2 relative z-10'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg drop-shadow-2xl hover:scale-105 transition-transform duration-500' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
