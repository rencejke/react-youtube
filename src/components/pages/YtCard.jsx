import React from 'react'
import SliderTop from '../partials/SliderTop'
import { baseImgUrl } from '../helpers/functions-general'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { ytvideos } from './data'

const YtCard = () => {
  return (
    <div className='grid grid-cols-5 gap-3'>
            
    {ytvideos.map((i, k) =>(
    <div className="card" key={k}>
    <img src={`${baseImgUrl}/thumbnails/${i.img}`} alt="" className='w-[320px] h-[180px] rounded-lg'/>
    
    <div className="content">
    <div className='flex gap-2 pt-3 items-center'>
    <img src={`${baseImgUrl}/subs/${i.profile}`} alt="" className=' size-[40px] rounded-full'/>

   <div className='flex items-center'>
   <h4 className='font-bold text-[16px]'>{i.title}</h4>
    {/* <button><BsThreeDotsVertical /></button> */}
   </div>
      
    </div>
    <p className='text-gray-400 text-md pl-12'>{i.channel}</p>
    <p className='text-gray-400 text-md pl-12'><span>{i.views} Views</span>  <span>{i.time}</span></p>
  
  
    </div>
    </div>
    ))}
  </div>
  )
}

export default YtCard
