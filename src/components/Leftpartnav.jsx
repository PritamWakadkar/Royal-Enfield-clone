import React from 'react'
import { Link } from 'react-router-dom'

const Leftpartnav = () => {
  return (
    <div className='bg-cover flex items-center h-20 w-60 text-white m-10'>
      <Link to="/"><img src="https://www.royalenfield.com/content/dam/RE-Platform-Revamp/re-revamp-commons/logo.webp" alt="logo" />
   </Link>
    </div>
  )
}

export default Leftpartnav