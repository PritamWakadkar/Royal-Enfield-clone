import React from 'react'
import Leftpartnav from './Leftpartnav'
import Middlepart from './Middlepart'
import Rigthpart from './Rigthpart'

function Navbar() {
  return (
    <div className='bg-black flex items-center justify-between text-white h-20 w-screen fixed z-50 top-0 left-0'>
      <Leftpartnav />
      <Middlepart />
      <Rigthpart />
   


    </div>
  )
}

export default Navbar
