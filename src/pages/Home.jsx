import React from 'react'
import Backgroundimg from './Backgroundimg'
import Secondpart from './Secondpart'
import { Outdent } from 'lucide-react'

const Home = () => {
  return (
    <div className='h-full w-full  '>
      <Backgroundimg />
      
      <Secondpart />

      <Outdent />
    </div>
  )
}

export default Home