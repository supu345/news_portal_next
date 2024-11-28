import React from "react";
import Image from "next/image";
//import { base_api_url } from "../../config/config";

const Gallery = async () => {
  //   const res = await fetch(`${base_api_url}/api/images/news`, {
  //     next: {
  //       revalidate: 1,
  //     },
  //   });

  //   const { images } = await res.json();

  return (
    <div className="w-full flex flex-col gap-y-[14px]">
      <div className="text-xl font-bold text-white relative before:absolute before:w-[4px] before:bg-[#c80000] before:h-full before:-left-0 pl-3">
        Gallery
      </div>
      <div className="grid grid-cols-3 gap-2">
        {/* {images &&
          images.length > 0 &&
          images.map((item, i) => (
            <div key={i} className="w-full h-[85px] relative">
              <Image className="" layout="fill" src={item.image} alt="images" />
            </div>
          ))} */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img, i) => (
          <div key={i} className="w-full h-[85px] relative">
            <Image
              className=""
              layout="fill"
              src="https://images.pexels.com/photos/17229141/pexels-photo-17229141/free-photo-of-sand-and-water-foam-on-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="images"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
