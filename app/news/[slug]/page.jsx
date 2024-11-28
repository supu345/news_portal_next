import Breadcrumb from "@/components/Breadcrumb";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Search from "@/components/Search";
import React from "react";
// import htmlParser from "react-html-parser";
// import { base_api_url } from "../../../config/config";
//import RelatedNews from "@/components/news/RelatedNews";
import RecentNews from "@/components/news/RecentNews";

const Details = async ({ params }) => {
  const { slug } = params;

  //   const res = await fetch(`${base_api_url}/api/news/details/${slug}`, {
  //     next: {
  //       revalidate: 1,
  //     },
  //   });
  //   const { news, relateNews } = await res.json();

  return (
    <div>
      <div className="bg-white shadow-sm py-4">
        <div className="px-4 md:px-8 w-full">
          <Breadcrumb
            one="sports"
            two={"ABET accreditation reaffirms UTSA’s"}
          />
        </div>
      </div>
      <div className="bg-slate-200 w-full">
        <div className="px-4 md:px-8 w-full py-8">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12">
              <div className="w-full pr-0 xl:pr-4">
                <div className="flex flex-col gap-y-5 bg-white">
                  <img
                    src="https://images.pexels.com/photos/10773770/pexels-photo-10773770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                  <div className="flex flex-col gap-y-4 px-6 pb-6">
                    <h3 className="text-red-700 uppercase font-medium text-xl">
                      category
                    </h3>
                    <h2 className="text-3xl text-gray-700 font-bold">
                      this is title
                    </h2>
                    <div className="flex gap-x-2 text-xs font-normal text-slate-600">
                      <span>28.11.2024</span>
                      <span>Adilah Tanzim</span>
                    </div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corrupti ratione sint blanditiis placeat voluptatum iure
                      excepturi rem aperiam officiis molestiae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12">
              <div className="w-full pl-0 xl:pl-4">
                <div className="flex flex-col gap-y-8">
                  <Search />
                  <RecentNews />
                  <div className="p-4 bg-white">
                    <Category titleStyle={"text-gray-700 font-bold"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            {/* <RelatedNews type="Related news" /> */}
            {/* <PopularNews type="Related news" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
