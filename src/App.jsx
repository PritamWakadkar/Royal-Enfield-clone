 import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MotorCycles from './pages/Motorcycless'
import Shop from './pages/Shop'
import Services from './pages/Services'
import Ride from './pages/Ride'
import MotoCulture from './pages/MotoCulture'
import Explore from './pages/Explore'
import Map from './pages/Map' 
import Location from './pages/Location'
import Account from './pages/Account'
import Fourtpart from './pages/Fourtpart'



 const App = () => {
  
   
const [img, setImg] = useState(0)


 


   return (
     <div >
        <Navbar />

        <Routes >
         <Route path='/' element={<Home />} />
         <Route path='/shop' element={<Shop />} />
         <Route path='/motocycles' element={<MotorCycles/>} />
         <Route path='/services' element={<Services />} />
         <Route path='/ride' element={<Ride />} />
         <Route path='/motoculture' element={<MotoCulture />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/map' element={<Map />}/>
         <Route path='/location'  element={<Location />} />
          <Route path='/account' element={<Account />} />
          <Route path='/knowmore' element={<Fourtpart />} />


        </Routes>



     </div>
   )
 }
 
 export default App