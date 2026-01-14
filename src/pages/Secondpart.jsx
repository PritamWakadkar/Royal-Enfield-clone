 import React, { useRef } from "react";
 import {useGSAP} from '@gsap/react'
 import scrollTrigger from 'gsap/ScrollTrigger'
import gsap from "gsap";
 

gsap.registerPlugin(scrollTrigger);

const Secondpart = () => {
 
  const gsapref = useRef()

 useGSAP(()=>{
  gsap.to(gsapref.current,{
   
   x:-1000,
    duration:2,
        delay:1,
    
        scrollTrigger:{
        trigger:gsapref.current,
        start:"top 80%",
        end:"top -20%",
        scrub:true,
        

      }

  })
 })
   

  return (
    <div className="h-screen w-full relative overflow-x-hidden">
      <img
        className="h-screen w-screen absolute bg-cover -z-10"
        src="https://imgs.search.brave.com/bK3Gw5b0eaR-7tUItWy6WmEOuDYrRQxB_duHReL9MZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDI2MTY4/NTguanBn"
        alt=""
      />

      <div className="h-screen absolute w-full text-white  ">
        <h1 className="text-white p-10 text-4xl font-extrabold">
          In the headlights
        </h1>

        <div  id="boxes"  ref={gsapref}   className="h-[50%] w-full flex items-center justify-center gap-10 flex-nowrap">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="min-w-[400px] h-[300px] border-2 bg-gray-500 border-black rounded-3xl"
            >
              <img
                className="p-5"
                src="https://www.royalenfield.com/content/dam/royal-enfield/india/rides/events/hunter-hood-2026/banners/hunter-hood-650x290.jpg"
                alt=""
              />
              <p className="text-black text-xl font-bold p-5">
                Hunterhood celebrates hustlers..
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Secondpart;
