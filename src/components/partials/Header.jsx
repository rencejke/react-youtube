import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { baseImgUrl } from '../helpers/functions-general'
import { IoSearchSharp } from 'react-icons/io5'
import { MdKeyboardVoice, MdOutlineVideoCall } from 'react-icons/md'
import { FaBell } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="header fixed w-full bg-white">
      <div className="w-full px-4 py-2">
        <div className='flex justify-between items-center'>

      <div className='flex flex-row gap-4'>
      <CiMenuBurger className='text-2xl font-bold'/>
      <img src={`${baseImgUrl}/logo.png`} alt="" className=' h-[20px]  w-full'/>
      </div>

      <div className='flex flex-row gap-3'>
        <div className='flex flex-row items-center'>
        <input type="text" placeholder='Search' className='border border-gray w-[600px] py-[10px] px-4 rounded-l-full placeholder:text-[1.2rem]'/> 
        <button className='bg-[#f2f2f2] p-4 rounded-r-full'><IoSearchSharp/></button>
        </div>
        <button className='bg-[#f2f2f2] p-4 rounded-full'><MdKeyboardVoice/></button>
      </div>

        <div className='flex flex-row gap-6'>
        <button><MdOutlineVideoCall className='text-[1.3rem]'/></button>
        <button><FaBell className='text-[1.3rem]'/></button>
         <button><Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className=' h-[40px]  w-full'/></Link></button>
        </div>
      </div>
      </div>
      </div>

    </>
  )
}

export default Header
