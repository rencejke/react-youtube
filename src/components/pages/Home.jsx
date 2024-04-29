import React from 'react'
import Header from '../partials/Header'
import SideBar from '../partials/SideBar'

import YtCard from './YtCard'


const Home = () => {
  return (
    <>
        <Header />

       <div className='grid grid-cols-[1fr_7fr] gap-6 pt-16 px-6'>
        <SideBar />
        <YtCard />
       </div>
    </>
  )
}

export default Home