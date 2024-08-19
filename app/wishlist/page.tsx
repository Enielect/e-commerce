import React from "react";
import WishListRecommedLIst from "./_components/WishListRecommedLIst";
import WishLIstItems from "./_components/WishLIstItems";

const WishListpage = () => {
  return (
    <div className="bg-white h-full min-h-screen px-24 py-10">
      <div className=" h-full space-y-10 text-Button w-fit">
        <WishLIstItems />
        {/* <CardLabel timer={false} title={"Just For You"}  /> */}
        <WishListRecommedLIst />
      </div>
    </div>
  );
};

export function WishListActionButtons({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="border border-Button border-opacity-50 py-4 px-8 mr-[1rem] rounded-md">
      {children}
    </button>
  );
}

export default WishListpage;
