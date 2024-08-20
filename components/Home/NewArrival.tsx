import React from "react";
import CardLabel from "@/components/Home/CardLabel";
import { ShopNowButton } from "./HomeTopSection";

const NewArrival = () => {
  return (
    <div className="h-[44rem]">
      <CardLabel timer={false} title="New Arrival" />
      <div className="flex gap-4 h-[calc(100%-80px)]">
        <div className="h-full flex-1">
          <NewArrivalCard
            className="bg-Button"
            bgUrl="bg-[url('/productImages/playStation.svg')]"
            productName="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
          />
        </div>
        <div className="flex-1 h-full flex flex-col gap-5">
          <div className="flex-1">
            <NewArrivalCard
              className="bg-[#0D0D0D]"
              bgUrl="bg-[url('/productImages/womensCollection.svg')]"
              productName="PlayStation 5"
              description="Black and White version of the PS5 coming out on sale."
            />
          </div>
          <div className="flex flex-1 gap-5">
            <NewArrivalCard
              className="bg-Text2"
              bgUrl="bg-[url('/productImages/speakersNew.svg')]"
              productName="PlayStation 5"
              description="Black and White version of the PS5 coming out on sale."
            />
            <NewArrivalCard
              className="bg-Button"
              bgUrl="bg-[url('/productImages/perfumeNew.svg')]"
              productName="PlayStation 5"
              description="Black and White version of the PS5 coming out on sale."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function NewArrivalCard({
  bgUrl,
  description,
  productName,
  className,
}: {
  bgUrl: string;
  productName: string;
  description: string;
  className: string;
}) {
  return (
    <div
      className={`${className} py-8 px-7 flex items-end justify-start ${bgUrl} h-full bg-contain w-full bg-no-repeat`}
    >
      <div className="flex flex-col gap-4 w-[20rem]">
        <p className="text-white headint-24-semibold">{productName}</p>
        <p className="text-white title-14-regular">{description}</p>
        <ShopNowButton arrow={false} />
      </div>
    </div>
  );
}

export default NewArrival;
