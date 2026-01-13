import { ChevronDown, ContactRound, MapPin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Rigthpart = () => {
  return (
    <div>
        <div className='flex items-center justify-around gap-5 m-10'>
           
           <Link to="/map">
           <MapPin className='cursor-pointer' />
           </Link>
         <Link to="account"><ContactRound className='cursor-pointer' /></Link>
         <Link to="/location"> <div className='flex items-center font-bold text-xl'>
            <h1>IN</h1>
            <ChevronDown size={20} strokeWidth={2.25} className='cursor-pointer' />
           </div></Link>
          
           
            
          
        </div>
    </div>
  )
}

export default Rigthpart