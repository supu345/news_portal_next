import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = () => {
  return (
    <div className="bg-white shadow flex p-4">
      <div className="relative group overflow-hidden h-full">
        <div className="group-hover:scale-[1.1] transition-all duration-[1s] w-[100px] md:w-[160px] h-[93px] lg:w-[100px] relative">
          <Image
            className=""
            layout="fill"
            src="https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="images"
          />
          <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 w-[calc(100%-100px)] md:w-[calc(100%-160px)] lg:w-[calc(100%-100px)] pl-3">
        <Link href={"#"} className="text-sm font-semibold text-[#c80000]">
          Sports
        </Link>
        <Link
          href={"#"}
          className="text-sm font-semibold text-[#333333] hover:text-[#c80000]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, quas?
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>November 27.2024</span>
          <span>Adilah Tanzim</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
