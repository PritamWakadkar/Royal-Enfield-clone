 import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
 
 const Fifthhpart = () => {
 const divref = useRef()
 
   useGSAP(()=>{

   })


   return (
   <div className='h-screen w-full bg-black text-white '>
       <h1 className=' font-extrabold text-5xl  px-20 py-10'>RIde</h1>
   <div className='flex items-center content-center  px-50 gap-10'>
      <div>
  <img src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/irides/webp/rides-new.webp" alt="" />
 </div>
   <div className=''>
    <div className='pb-4'>
      <img src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/irides/webp/rentals-ride-home.webp" alt="" />
    </div>
    <div>
      <img src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/irides/webp/tours-desktop.webp" alt="" />
    </div>
   </div>
 <div>
  <img src="https://www.royalenfield.com/content/dam/royal-enfield/india/rides/events/motoverse-2025/motoverse-ride.webp" alt="" />
 </div>


   </div>



     </div>
   )
 }
 
 export default Fifthhpart