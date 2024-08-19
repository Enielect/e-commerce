import Image from "next/image";
import React from "react";
import BoomBbox from "@/public/productImages/boomBox.svg";

const FancyCard = () => {
  return (
    <div className="bg-Button max-w-[1024px] flex py-10 px-8 w-full">
      <div className="flex-1">
        <Label />
        <TimerWrapper />
        <Button />
      </div>
      <div className="h-[19rem] flex-1 relative shadow-lg">
        <Image src={BoomBbox} className="w-full h-full" alt="boomBox" />
        <div className="blur-3xl absolute top-0 bg-primary opacity-30 h-full w-[20rem] right-[110px]"></div>
      </div>
    </div>
  );
};

function Label() {
  return (
    <div className="space-y-5">
      <p className="title-16-semibold text-Button1">Categories</p>
      <p className="heading-48-semibold">Enhance Your Music Experience</p>
    </div>
  );
}

function TimerWrapper() {
  return (
    <div className="text-Button my-3 flex gap-4">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <Timer key={i} />
        ))}
    </div>
  );
}

function Timer() {
  return (
    <div className="bg-primary p-3 ronded-full flex flex-col justify-center rounded-full items-center">
      <span className="text-16-semibold">23</span>
      <span className="text-xs">hours</span>
    </div>
  );
}

function Button() {
  return (
    <button className="px-4 py-2 bg-Button1 rounded-md my-5">Buy Now!</button>
  );
}

export default FancyCard;
