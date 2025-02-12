import HeadLines from "@/components/HeadLines";
import LatestNews from "@/components/news/LatestNews";
import Title from "@/components/Title";
import SimpleNewsCard from "@/components/news/items/SimpleNewsCard";
import PopularNews from "@/components/news/PopularNews";
import DetailsNewsRow from "@/components/news/DetailsNewsRow";
import DetailsNews from "@/components/news/DetailsNews";
import DetailsNewsCol from "@/components/news/DetailsNewsCol";
import NewsCard from "@/components/news/items/NewsCard";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <main>
        <HeadLines />
        <div className="bg-slate-100">
          <div className="px-4 md:px-8 py-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12">
                <LatestNews />
              </div>
              <div className="w-full lg:w-6/12 mt-5 lg:mt-0">
                <div className="flex w-full flex-col gap-y-[14px] pl-0 lg:pl-2">
                  <Title title="Technology" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                    {[1, 2, 3, 4].map((item, i) => (
                      <SimpleNewsCard item={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <PopularNews type="Popular news" />

            {/* first section */}

            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  <DetailsNewsRow category="Sports" type="details-news" />
                  <DetailsNews />
                </div>
                <div className="w-full lg:w-4/12">
                  <DetailsNewsCol />
                </div>
              </div>
            </div>
            {/* 2nd section */}
            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12">
                  <div className="pr-2">
                    <DetailsNewsCol />
                  </div>
                </div>
                <div className="w-full lg:w-8/12">
                  <div className="pl-2">
                    <DetailsNewsRow category="Sports" type="details-news" />
                    <DetailsNews />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12">
                  {/* <div className="pr-2">
                    <DetailsNewsCol />
                  </div> */}
                  <div className="">
                    <DetailsNewsRow category="Sports" type="details-news" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12">
                  <div className="pl-2">
                    <Title title="Recent news" />
                    <div className="grid grid-cols-1 gap-y-[14px] mt-4">
                      {[1, 2, 3, 4].map((_, i) => (
                        <NewsCard />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
