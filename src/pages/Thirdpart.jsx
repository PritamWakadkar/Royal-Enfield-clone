import React, { useState } from "react";

const Thirdpart = () => {
  const [activeModel, setActiveModel] = useState("PURE_SPORT");

  return (
    <>
    <img className="absolute h-screen w-full" src=" https://i.pinimg.com/1200x/e4/13/b1/e413b1b81bd2c52291e2459344a5aa01.jpg" alt="" />
    <div className="h-screen w-full   relative">
      <h1 className="p-20 text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Motorcycles
      </h1>

      {/* BUTTONS (ALWAYS VISIBLE) */}
      <div className="flex justify-center gap-20 text-white text-xl font-extrabold">
        <div className="cursor-pointer h-15 w-40 border-2 flex items-center justify-center bg-orange-300 rounded-3xl active:scale-95" onClick={() => setActiveModel("PURE_SPORT")}>
          PURE SPORT
        </div>
        <div className="cursor-pointer  h-15 w-40 border-2 flex items-center justify-center bg-orange-300 rounded-3xl active:scale-95" onClick={() => setActiveModel("HERITAGE")}>
          HERITAGE
        </div>
        <div className="cursor-pointer  h-15 w-40 border-2 flex items-center justify-center bg-orange-300 rounded-3xl active:scale-95" onClick={() => setActiveModel("CRUISER")}>
          CRUISER
        </div>
        <div className="cursor-pointer  h-15 w-40 border-2 flex items-center justify-center bg-orange-300 rounded-3xl active:scale-95" onClick={() => setActiveModel("ADVENTURE")}>
          ADVENTURE
        </div>
        <div className="cursor-pointer h-15 w-40 border-2 flex items-center justify-center bg-orange-300 rounded-3xl active:scale-95" onClick={() => setActiveModel("ROADSTER")}>
          ROADSTER
        </div>
      </div>

      {/* MODEL NAMES (HIDE / SHOW) */}
      <div className="text-white flex justify-evenly p-20 text-2xl font-bold flex-nowrap">
        {activeModel === "PURE_SPORT" && (
          <div><h1 className="px-70  font-extrabold bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">Continental GT 650</h1>
            <img className="h-80 w-200 "  src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/continental-gt-650.webp" alt="" />
          </div>
        )}

        {activeModel === "HERITAGE" && (
          <>
            <div className="bg-cover"> <h1 className="px-12 font-extrabold bg-gradient-to-r  text-white bg-clip-text text-transparent">Goan Classic 650</h1>
           <img className="h-80 w-260 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/goan-classic-350.webp" alt="" />
            </div>
             <div className="bg-cover"> <h1 className="px-12  font-extrabold bg-gradient-to-r text-white bg-clip-text text-transparent">Classic 350</h1>
           <img className="h-80 w-260 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/classic-350.webp" alt="" />
            </div>
             <div className="bg-cover"> <h1 className="px-12  font-extrabold bg-gradient-to-r  text-white bg-clip-text text-transparent">Bullet 350</h1>
           <img className="h-80 w-260 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/bullet-350.webp" alt="" />
            </div>
             <div className="bg-cover"> <h1 className="px-12  font-extrabold bg-gradient-to-r text-white bg-clip-text text-transparent">Classic 650</h1>
           <img className="h-80 w-260 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/classic-650.webp" alt="" />
            </div>
            
          </>
        )}

        {activeModel === "CRUISER" && (
          <>
          <div className="bg-cover"> <h1 className="px-38 font-extrabold   text-white bg-clip-text text-transparent">Meteor 350</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/meteor-350-black-home.webp" alt="" />
            </div>
            <div className="bg-cover"> <h1 className="px-29  font-bold    text-white bg-clip-text text-transparent">Super Meteor 650</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/super-meteor-650.webp" alt="" />
            </div>
            
          </>
        )}

        {activeModel === "ADVENTURE" && (
          <>
          <div className="bg-cover"> <h1 className="px-12  font-bold  text-white bg-clip-text text-transparent">Scram 440</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/header/scram-440-new-motorcycle.webp" alt="" />
            </div>
            <div className="bg-cover"> <h1 className="px-12  font-bold  text-white bg-clip-text text-transparent">Himalayan 450</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/himalayan-450.webp" alt="" />
            </div>
            <div className="bg-cover"> <h1 className="px-12  font-bold  text-white bg-clip-text text-transparent">Bear 650</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/bear-650.webp" alt="" />
            </div>
            
          </>
        )}

        {activeModel === "ROADSTER" && (
          <>
          <div className="bg-cover"> <h1 className="px-12  font-bold  text-white bg-clip-text text-transparent">Hunter 350</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/hunter-350.webp" alt="" />
            </div>
            <div className="bg-cover"> <h1 className="px-12  font-bold  text-white bg-clip-text text-transparent">Guerrilla 450</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/guerrilla-450.webp" alt="" />
            </div>
            <div className="bg-cover"> <h1 className="px-15  font-bold  text-white bg-clip-text text-transparent">Shotgun 650</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/shotgun-650.webp" alt="" />
            </div>
            <div className="bg-cover"> <h1 className="px-12  font-bold text-white bg-clip-text text-transparent">Interceptor 650</h1>
           <img className="h-80 w-240 " src="https://www.royalenfield.com/content/dam/royal-enfield-revamp/motorcycles/home/webp/interceptor.webp" alt="" />
            </div>
           
          </>
        )}
      </div>
    </div>
    </>
  );
};

export default Thirdpart;
