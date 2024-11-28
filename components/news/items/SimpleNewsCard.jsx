import React from "react";
import Image from "next/image";
import Link from "next/link";

const SimpleNewsCard = ({ item = {}, type }) => {
  const {
    category = "Uncategorized",
    title = "No Title",
    slug = "",
    date = "",
    writerName = "Unknown",
  } = item;

  return (
    <div className="group relative">
      <div className="overflow-hidden">
        <div
          className={`${
            type ? "h-[270px] sm:h-[470px]" : "h-[228px]"
          } w-full group-hover:scale-[1.1] transition-all duration-[1s]`}
        >
          <Image
            className=""
            layout="fill"
            src="https://images.pexels.com/photos/29480511/pexels-photo-29480511/free-photo-of-elegant-bouquet-of-roses-with-eucalyptus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="images"
          />
        </div>
      </div>
      <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
      <div className="left-5 absolute bottom-4 flex justify-start items-start flex-col text-white font-semibold gap-y-2">
        <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
          {category}
        </div>
        <Link href={`/news/${slug}`} className="text-xl">
          {title}
        </Link>
        <div className="flex gap-x-2 text-sm font-normal">
          <span>{date}</span>
          <span>{writerName}</span>
        </div>
      </div>
    </div>
  );
};

export default SimpleNewsCard;
