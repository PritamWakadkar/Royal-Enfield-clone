import React from 'react'
import { Link } from 'react-router-dom'

const Middlepart = () => {
  return (
    <div className='flex items-center  gap-10 font-bold text-xl flex-wrap lg:w-fit'>
    <Link to="/motocycles" >MotorCycle</Link>
    <Link to="/shop" >Shop</Link>
    <Link to="/services" >Service</Link>
    <Link to="ride" >Ride</Link>
    <Link  to="motoculture" >MotoCulture</Link>
    <Link to="explore" >Explore</Link>
     
 
    </div>
  )
}

export default Middlepart