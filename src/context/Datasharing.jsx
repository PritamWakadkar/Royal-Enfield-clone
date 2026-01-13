import React, { createContext, useState } from 'react'
import Backgroundimg from '../pages/Backgroundimg'

export const Datashare= createContext()
 
const Datasharing = (props) => {
  
     const images = [{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/meteor/banner/meteor-350-new-home.webp",
      model:"METOR 350",
   },
  {
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/bullet-650/banners/bullet-650-new.webp",
      model:"METOR 350",
   },
  {
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/banners/new-himalayan-mana-black-india-home.webp",
      model:"METOR 350",
   },{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/guerrilla-450-banner.webp",
      model:"METOR 350",
   },{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/guerrilla-450-banner.webp",
      model:"METOR 350",
   },{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/classic-650-new.webp",
      model:"METOR 350",
   }]
  



    
  return (
    <div>
       
        <Datashare.Provider value={images.map(function(){
            return <Backgroundimg  />
        })}>
             {props.children }
        </Datashare.Provider>
    </div>
  )
}

export default Datasharing