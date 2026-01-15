import React from 'react'
import Backgroundimg from './Backgroundimg'
import Secondpart from './Secondpart'
import { Outdent } from 'lucide-react'
import Thirdpart from './Thirdpart'
import Fourtpart from './Fourtpart'
import Fifthhpart from './Fifthhpart'

const Home = () => {
  return (
    <div className='h-full w-full  '>
      <Backgroundimg />
      
      <Secondpart />
       <Thirdpart />
      <Fourtpart />
      <Fifthhpart />
    </div>
  )
}

export default Home