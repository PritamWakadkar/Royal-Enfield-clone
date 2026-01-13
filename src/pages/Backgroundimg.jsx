import { useEffect, useState } from "react";

 const images=[{
  
      img:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/meteor/banner/meteor-350-new-home.webp",
      model:"METOR 350",
   },
  {
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/bullet-650/banners/bullet-650-new.webp",
      model:"METOR 350",
   },
  {
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/banners/new-himalayan-mana-black-india-home.webp",
      model:"METOR 350",
   },{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/guerrilla-450-banner.webp",
      model:"METOR 350",
   },{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/guerrilla-450-banner.webp",
      model:"METOR 350",
   },{
     
      img:"https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/classic-650-new.webp",
      model:"METOR 350",
  
 }]

const Backgroundimg = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((item, i) => (
        <div
          key={i}
          className="absolute -z-20 inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === index ? 1 : 0
          }}
        />
        
      ))}
         <div className="flex items-center   h-screen w-screen ml-40 ">
          <div className="flex items-center  flex-col gap-10 text-3xl font-extrabold text-white">
                     <h1>Royal Enfield</h1>
         <button className="bg-gray-800 px-10 py-3 border-2 rounded-2xl text-white text-xl "> 
          Explore
         </button>
</div>          
          
         </div>
    </div>
  );
};

export default Backgroundimg;
