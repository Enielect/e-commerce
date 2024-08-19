import Card from "@/components/Home/Card";
import React from "react";
import { WishListActionButtons } from "../page";

const WishListRecommedLIst = () => {
  return (
    <div className="py-16">
      <div className="flex justify-between items-center">
        <div className="space-x-6 flex py-5 items-center">
          <div className="w-5 h-[45px] bg-Secondary2 rounded-md"></div>
          <h5 className="text-Button title-20-regular">Just For You&apos;s</h5>
        </div>
        <WishListActionButtons>See All</WishListActionButtons>
      </div>
      <div className="flex gap-5">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Card key={i} isInWishList={false} />
          ))}
      </div>
    </div>
  );
};

export default WishListRecommedLIst;
