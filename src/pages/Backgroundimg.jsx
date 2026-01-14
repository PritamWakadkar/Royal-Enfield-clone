 import { useEffect, useState } from "react";

const images = [
  {
    img: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/meteor/banner/meteor-350-new-home.webp",
    title: "Meteor 350",
    description: "Cruise in comfort. Built for the open road.",
    bname:"Explore"
  },
  {
    img: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/bullet-650/banners/bullet-650-new.webp",
    title: "Bullet 650",
    description: "Legend reborn with modern power.",
   bname:"Explore"
  },
  {
    img: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/himalayan/banners/new-himalayan-mana-black-india-home.webp",
    title: "Himalayan 450",
    description: "Adventure without limits.",
    bname:"Stay update"
  },
  {
    img: "https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/guerrilla-450-banner.webp",
    title: "Guerrilla 450",
    description: "Street fighter with raw energy.",
    bname:"Explore"
  },
  {
    img: "https://www.royalenfield.com/content/dam/royal-enfield-revamp/home/banners/webp/classic-650-new.webp",
    title: "Classic 650",
    description: "Timeless design. Twin-cylinder soul.",
    bname:"Explore"
  }
];

const Backgroundimg = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative -z-10 h-screen w-full  overflow-hidden">
      {/* Background Images */}
      {images.map((item, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === index ? 1 : 0
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute z-10 flex h-full items-center px-20">
        <div className="max-w-xl text-white space-y-6">
          <h1 className="text-5xl font-extrabold tracking-wide">
            {images[index].title}
          </h1>

          <p className="text-xl text-gray-200">
            {images[index].description}
          </p>

          <button className="mt-4 rounded-2xl border-2 border-white px-10 py-3 text-lg font-semibold hover:bg-white hover:text-black transition">
            {images[index].bname}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Backgroundimg;
