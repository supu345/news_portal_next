import React from "react";
import Title from "../Title";
import SimpleDetailsNewCard from "./items/SimpleDetailsNewCard";
import NewsCard from "./items/NewsCard";

const DetailsNewsCol = () => {
  return (
    <div className="w-full flex flex-col gap-[14px] pl-2">
      <Title title="Education" />
      <div className="grid grid-cols-1 gap-y-6">
        <SimpleDetailsNewCard type="details-news" height={300} />
      </div>
      <div className="grid grid-cols-1 gap-y-[14px] mt-4">
        {[1, 2, 3, 4].map((_, i) => (
          <NewsCard />
        ))}
      </div>
    </div>
  );
};

export default DetailsNewsCol;
