import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { MdOutlineAccountBox, MdOutlineHistory, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { IoHelpCircleOutline, IoPlayCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { LiaDownloadSolid } from 'react-icons/lia'
import { SiYoutubegaming, SiYoutubeshorts } from 'react-icons/si'
import { RxCaretRight } from 'react-icons/rx'
import { RiPlayList2Fill } from 'react-icons/ri'
import { PiCaretDown, PiVideo } from 'react-icons/pi'
import { LuListVideo } from 'react-icons/lu'
import { CiClock2, CiFlag1 } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import { baseImgUrl } from '../helpers/functions-general'
import { Link } from 'react-router-dom'
import { CgMediaLive } from 'react-icons/cg'
import { FaFireFlameSimple, FaMusic, FaNewspaper, FaTrophy } from 'react-icons/fa6'
import { GiClapperboard, GiClothesline } from 'react-icons/gi'

const SideBar = () => {
  return (
    
    <div>
    <aside className='side__header flex fixed flex-col justify-start mt-4 gap-3 pl-4 
    overflow-y-scroll custom-scroll max-h-[92vh] w-[13%] cursor-pointer'>
         
          {/* 1st part sidebar */}
          <div className='flex flex-col  border-b-[1px] border-gray-400 gap-1 pb-3 w-[90%] '>

          <div className='side__menus flex flex-row items-center gap-5 p-2 activeHeader'>
          <IoMdHome className='text-[26px]'/>
          <button><Link><span className='text-[14px] font-normal'>Home</span></Link></button>
          </div>

          <div className='side__menus flex flex-row items-center gap-5 p-2 justify-start'>
          <SiYoutubeshorts className='text-[26px]'/>
          <span  className='text-[14px]  font-normal'>Shorts</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <MdOutlineSubscriptions className='text-[26px]'/>
          <span className='text-[14px] font-normalt'>Subscriptions</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <IoPlayCircleOutline className='text-[26px]'/>
          <span className='text-[14px] font-normal'>Youtube Music</span>
          </div>
          </div>
         
          {/* 2nd part sidebar */}
          <div className='flex flex-col  border-b-[1px] border-gray-400 gap-1 pb-3 w-[90%]'>

          <div className='side__menus flex flex-row items-center gap-2 p-2'>
          <span className='text-[18px] font-normal'>You</span>
          <RxCaretRight  className='text-[26px]'/>
       </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <MdOutlineAccountBox className='text-[26px]'/> 
          <span  className='text-[14px]  font-normal'>Your Channel</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <MdOutlineHistory className='text-[26px]'/>
          <span className='text-[14px] font-normalt'>History</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <LuListVideo className='text-[26px]'/>
          <span className='text-[14px] font-normal'>Your Playlist</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <PiVideo className='text-[26px]'/>
          <span className='text-[14px] font-normal'>Your Videos</span>
          </div>

          <div className=' side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <CiClock2 className='text-[26px]'/>
          <span className='text-[14px] font-normal'>Watch Later</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <AiOutlineLike className='text-[26px]'/>
          <span className='text-[14px] font-normal'>Liked Videos</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-4 p-2 justify-start'>
          <LiaDownloadSolid className='text-[26px]'/>
          <span className='text-[14px] font-normal'>Downloads</span>
          </div>
          </div>  
          
           {/* 3rd part sidebar subscriptions */}
           <div className='flex flex-col  border-b-[1px] border-gray-400 gap-1 pb-3 w-[90%]'>

            <h3 className='font-bold'>Subscriptions</h3>

           <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
          <Link><img src={`${baseImgUrl}/acc-icon.png`} alt="" className='size-[40px]'/></Link>
          <span className='text-[16px] font-normal truncate '>ABS-CBN Enternainment</span>
          <CgMediaLive  className='text-[26px] text-red-700'/>
         </div>

         <div className='side__menus flex flex-row items-center gap-2 p-1'>
         <PiCaretDown  className='text-[26px]'/>
          <span className='text-[16px] font-normal '>Show 908 More</span>

         </div>

        
          </div>  


          {/* 4th part sidebar */}
          <div className='flex flex-col  border-b-[1px] border-gray-400 gap-1 pb-3 w-[90%]'>

          <h3 className='font-bold'>Explore</h3>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <FaFireFlameSimple  className='text-[26px]'/>
          <span className='text-[16px] font-normal'>Trending</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <FaMusic  className='text-[26px]'/> 
          <span className='text-[16px] font-normal'>Music</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <GiClapperboard  className='text-[26px'/>
          <span className='text-[16px] font-normal'>Movies</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <SiYoutubegaming  className='text-[26px]'/>
          <span className='text-[16px] font-normal'>Gaming</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <FaNewspaper  className='text-[26px]'/>
          <span className='text-[16px] font-normal truncate '>News</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <FaTrophy  className='text-[26px] '/>
          <span className='text-[16px] font-normal truncate '>Sports</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <GiClothesline  className='text-[26px]'/>
          <span className='text-[16px] font-normal '>Fashion & Beauty</span>

          </div>


         </div>  

         {/* 5th part sidebar */}
          <div className='flex flex-col  border-b-[1px] border-gray-400 gap-1 pb-3 w-[90%]'>

          <h3 className='font-bold'>More From Youtube</h3>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <Link><img src={`${baseImgUrl}/yt-studio.svg`} alt="" className='size-[20px]'/></Link>
          <span className='text-[16px] font-normal'>Youtube Studio</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <Link><img src={`${baseImgUrl}/yt-music.svg`} alt="" className='size-[20px]'/></Link>
          <span className='text-[16px] font-normal'>Youtube Music</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <Link><img src={`${baseImgUrl}/yt-kids.svg`} alt="" className='size-[0px]'/></Link>
          <span className='text-[16px] font-normal '>Youtube Kids</span>
          </div>

         </div>     

           {/* 6th part sidebar */}
          <div className='flex flex-col  border-b-[1px] border-gray-400 pb-3 w-[90%]'>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
            <button className='text-[26px]'><Link><IoSettingsOutline /></Link></button>
          <span className='text-[16px] font-normal'>Settings</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
          <button className='text-[26px]'><Link><CiFlag1 /></Link></button>
          <span className='text-[16px] font-normal'>Flag History</span>
          </div>

          <div className='side__menus flex flex-row items-center gap-3 p-2'>
         <button className='text-[26px]'><Link><IoHelpCircleOutline /></Link></button>
          <span className='text-[16px] font-normal '>Movies</span>
          </div>


         </div>   

         <div className='flex flex-col gap-4 border-b-[1px] border-gray-400 pb-3 w-[90%]'>
          
           <div>
           <ul className='flex gap-2 text-sm font-normal'>
            <li>About </li>
            <li>Press</li>
            <li>Copyright</li>
          </ul>

          <ul className='flex gap-2 text-sm font-normal'>
            <li>Contact Us </li>
            <li>Creators</li>
          </ul>

          <ul className='flex gap-2 text-sm font-normal'>
            <li>Advertise </li>
            <li>Developers</li>
          </ul>
           </div>

           <div className='flex flex-col text-sm font-normal'>

           <ul className='flex flex-row gap-2'>
            <li>Terms </li>
            <li>Privacy</li>
            <li>Policy & Sately</li>
          </ul>

          <ul className='flex flex-col'>
            <li>How YouTube works?</li>
            <li>Test New Features</li>
          </ul>
           </div>

           <span>	&#169;  2024 Google LLC </span>

</div>  

        </aside>
        </div>
  )
}

export default SideBar