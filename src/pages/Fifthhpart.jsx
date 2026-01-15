import React from 'react'

const fifthpart = () => {
  return (
   <div className="h-screen w-full bg-black">
  <h1 className="font-extrabold text-4xl text-white px-20 py-10">
    Ride
  </h1>

  <div className="flex items-center justify-evenly w-full px-10 gap-5">

    {/* Left Card */}
    <div className="relative h-[400px] w-[400px]">
      <img
        className="h-full w-full object-cover"
        src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/irides/webp/rides-new.webp"
        alt=""
      />
      <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold">
        Rides
      </h1>
    </div>

    {/* Middle Column */}
    <div className="flex flex-col gap-6">

      <div className="relative h-[200px] w-[350px]">
        <img
          className="h-full w-full object-cover"
          src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/irides/webp/rentals-ride-home.webp"
          alt=""
        />
        <h1 className="absolute bottom-2 left-3 text-white font-semibold">
          Rentals
        </h1>
      </div>

      <div className="relative h-[200px] w-[350px]">
        <img
          className="h-full w-full object-cover"
          src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/new/irides/webp/tours-desktop.webp"
          alt=""
        />
        <h1 className="absolute bottom-2 left-3 text-white font-semibold">
          Tours
        </h1>
      </div>

    </div>

    {/* Right Card */}
    <div className="relative h-[400px] w-[400px]">
      <img
        className="h-full w-full object-cover"
        src="https://www.royalenfield.com/content/dam/royal-enfield/india/rides/events/motoverse-2025/motoverse-ride.webp"
        alt=""
      />
      <h1 className="absolute bottom-4 left-4 text-white text-xl font-bold">
        Motoverse
      </h1>
    </div>

  </div>


  <div>
    <h1 className='text-white font-bold text-4xl px-20 py-20'>Latest</h1>
  </div>
</div>

  )
}

export default fifthpart