import React from "react";
import Card from "@/components/Home/Card";
import CardLabel from "@/components/Home/CardLabel";

const DisplaySection = ({ timer }: { timer: boolean }) => {
  return (
    <div className="space-y-10 w-fit">
      <CardLabel timer={timer} title="Flash Sales" />
      <div className="flex gap-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card isInWishList={false} key={i} />
          ))} 
      </div>
      <div className="w-full text-center">
        <button className="capitalize px-4 py-2 bg-Button2 rounded-md">
          View all proudcts
        </button>
      </div>
    </div>
  );
};

export default DisplaySection;
