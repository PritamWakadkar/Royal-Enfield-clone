import React from 'react'
import Backgroundimg from './Backgroundimg'
import Secondpart from './Secondpart'
import { Outdent } from 'lucide-react'
import Thirdpart from './Thirdpart'

const Home = () => {
  return (
    <div className='h-full w-full  '>
      <Backgroundimg />
      
      <Secondpart />
       <Thirdpart />
     
    </div>
  )
}

export default Home