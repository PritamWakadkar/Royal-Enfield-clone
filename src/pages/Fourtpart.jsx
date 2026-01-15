import React from 'react'
import {Link} from 'react-router-dom'

const Fourtpart = () => {
  return (
    <div className='h-screen w-full bg-gray-950 '>
        <Link to="/Knowmore" className='text-red-500 relative  h-30 w-full flex items-center justify-center -mt-30 font-bold text-xl'>Know more</Link>
       
       <div className='flex items-center content-center h-20 w-full gap-10 justify-center relative -mt-4'>
         <button className='relative border-2 h-15 w-60 rounded-xl text-white' >CONFIGURE NOW</button>
        <button  className='relative border-2 h-15 w-60 rounded-xl text-white'>BOOK A TEST RIDE</button>
 
       </div>

       <div className='h-[50%] w-full  '>
           <h1 className='text-white p-20 font-bold text-6xl'>MotoCulture</h1>
           <div className=' flex items-center gap-5 '>
            <div className='h-89 w-100 bg-white '>
              <img className='h-89 w-100 absolute' src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/motoculture/webp/royal-enfield-tv.webp" alt="" />
             <div className='relative'>
              <h1 className='text-white font-extrabold text-3xl'>01</h1>
             </div>
            </div>
            <div className='h-89 w-100 bg-white '>
              <img className='h-89 w-100 absolute' src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/motoculture/webp/social-mission-new1.webp" alt="" />
              <div className='relative'>
              <h1 className='text-white font-extrabold text-3xl'>02</h1>
             </div>
            </div>
            <div className='h-89 w-100 bg-white '>
              <img className='h-89 w-100 absolute' src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/motoculture/webp/motosports.webp" alt="" />
             <div className='relative'>
              <h1 className='text-white font-extrabold text-3xl'>03</h1>
             </div>
            </div>
            <div className='h-89 w-100 bg-white shrink-0 ml-1 '>
              <img className='h-89 w-100 absolute ' src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/motoculture/webp/custom-world.webp" alt="" />
             <div className='relative'>
              <h1 className='text-white font-extrabold text-3xl relative'>04</h1>
             </div>
            </div>
           
           </div>
       </div>
          </div>
  )
}

export default Fourtpart