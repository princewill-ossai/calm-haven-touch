import React from 'react'
import logo from '../assets/logo.jpeg'

const Header = () => {
  return (
    <div className='!container absolute p-[1.5rem] z-10'>
        <nav className='flex !items-center justify-between gap-11'>
            <div className='w-[5rem] rounded-[10px] overflow-hidden'>
                <img src={logo} alt='' />
            </div>
            <div className='flex items-center gap-5'>
                <button className='bg-[#fde0ff] px-4 py-2 rounded-lg font-bold'>Book An Appointment</button>
                <div className='w-[2rem] flex flex-col gap-[6px]'>
                    <span className='w-full bg-white h-[4px] rounded-[3px]'></span>
                    <span className='w-full bg-white h-[4px] rounded-[3px]'></span>
                    <span className='w-full bg-white h-[4px] rounded-[3px]'></span>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header