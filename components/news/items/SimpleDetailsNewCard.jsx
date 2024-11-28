import Image from "next/image";
import Link from "next/link";
import React from "react";

const SimpleDetailsNewCard = ({ news, type, height }) => {
  return (
    <div className="bg-white shadow">
      <div className="group relative overflow-hidden">
        <div
          style={{ height: `${height}px` }}
          className={`w-full group-hover:scale-[1.1] transition-all duration-[1s]`}
        >
          <Image
            className=""
            layout="fill"
            src="https://images.pexels.com/photos/29451082/pexels-photo-29451082/free-photo-of-squirrel-in-autumn-tree-with-colorful-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="images"
          />
        </div>

        <div className="w-full h-full block absolute left-0 top-0 invisible group-hover:visible bg-white cursor-pointer opacity-5 transition-all duration-300"></div>
        <div className="left-5 absolute bottom-4 flex justify-start items-start gap-x-2 text-white font-semibold gap-y-2">
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
          <div className="px-[6px] py-[2px] rounded-sm text-[13px] bg-[#c80000]">
            Travel
          </div>
        </div>
      </div>
      <div className="p-5">
        <Link
          className="text-[15px] font-semibold text-[#333333] hover:text-[#c80000]"
          href="#"
        >
          this is title for news
        </Link>
        <div className="flex gap-x-2 text-xs font-normal text-slate-600">
          <span>date</span>
          <span>writerName</span>
        </div>
        {type === "details-news" && (
          <p className="text-sm text-slate-600 pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            molestias unde et! Itaque impedit dolores repudiandae corporis sint
            at amet?
          </p>
        )}
      </div>
    </div>
  );
};

export default SimpleDetailsNewCard;
