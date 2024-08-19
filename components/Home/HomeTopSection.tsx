import { ChevronArrowDown, RightArrow } from "@/assets/svgIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IphoneBanner from "@/public/productImages/iphone-banner.png";
import AppleLogo from "@/assets/appleLogo.png";

const categories = [
  "Womwn's Fashion",
  "Men's Fasihon",
  "Electronics",
  "Home and Lifestyle",
  "Medicine",
  "Sports and Outdoor",
  "Baby's and Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const HomeTopSection = () => {
  return (
    <div className="mx-[30px] mb-[4rem] flex justify-between w-full">
      <Aside />
      <div className="max-w-[65rem] mr-[6rem] py-14">
        <div className="bg-Button py-[3rem] w-full px-[4rem] flex">
          <div className="space-y-4">
            <div className="flex gap-5 items-center">
              <div>
                <Image src={AppleLogo} alt="apple logo" />
              </div>
              <span className="title-16-regular">iPhone 14 Series</span>
            </div>
            <div className="heading-48-semibold">Up to 10% off Voucher</div>
            <ShopNowButton arrow={true} />
          </div>
          <div>
            <Image src={IphoneBanner} alt="iphone-banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export function ShopNowButton({arrow}: {arrow: boolean}) {
  return (
    <button className="title-16-medium flex gap-3 items-center">
      <span className="border-b border-primary">Shop Now</span>
      
      {arrow && <RightArrow className="text-white" stroke="white" />}
    </button>
  );
}

function Aside() {
  return (
    <div className=" space-y-4 text-Button border-r py-14 border-opacity-20 border-black">
      {categories.map((category, i) => (
        <Link href="#" key={category} className="flex items-center gap-8">
          {category}
          {(i === 0 || i === 1) && (
            <span>
              <ChevronArrowDown />
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}

export default HomeTopSection;
