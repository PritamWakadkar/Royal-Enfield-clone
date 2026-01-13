import React from 'react'
import Leftpartnav from './Leftpartnav'
import Middlepart from './Middlepart'
import Rigthpart from './Rigthpart'

function Navbar() {
  return (
    <div className='bg-black flex items-center justify-between text-white h-20 w-full fixed
     '>
      <Leftpartnav />
      <Middlepart />
      <Rigthpart />
   


    </div>
  )
}

export default Navbar
