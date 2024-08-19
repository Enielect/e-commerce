import React from "react";
import CardLabel from "@/components/Home/CardLabel";
import {
  Camera,
  ComputersIcon,
  GamePad,
  HeadPhonesIcon,
  PhoneIcon,
  SmartWatchIcon,
} from "@/assets/svgIcons";
import Link from "next/link";

const categoryCardList = [
  { icon: <PhoneIcon />, tag: "Phones" },
  { icon: <ComputersIcon />, tag: "Computers" },
  { icon: <SmartWatchIcon />, tag: "SmartWatch" },
  { icon: <Camera />, tag: "Camera" },
  { icon: <HeadPhonesIcon />, tag: "HeadPhones" },
  { icon: <GamePad />, tag: "Gaming" },
];

const Category = () => {
  return (
    <div>
      <CardLabel timer={false} title="Browse By Category" />
      <div className="flex gap-[4rem] mt-14 pb-20 border-b border-Button border-opacity-30">
        {categoryCardList.map((category, index) => (
          <CategoryCard key={index} icon={category.icon} tag={category.tag} />
        ))}
      </div>
    </div>
  );
};

function CategoryCard({ icon, tag }: { icon: React.ReactNode; tag: string }) {
  return (
    <Link
      href="#"
      className="w-[9.5rem] h-[9.5rem] flex justify-center hover:bg-Secondary2 text-Button hover:text-white items-center border border-Button border-opacity-30"
    >
      <div className="flex flex-col items-center justify-center">
        {icon}
        <h6 className=" title-12-regular py-2">{tag}</h6>
      </div>
    </Link>
  );
}

export default Category;
