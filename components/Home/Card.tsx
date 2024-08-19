import React from "react";
import { DeleteIcon, FavoriteIcon, OpenEye, StarIcon } from "@/assets/svgIcons";
import Pink from "/public/productImages/pink hoddie.png";
import Image from "next/image";
import { formatCurrency } from "@/lib/formatter";

const Card = ({ isInWishList }: { isInWishList: boolean }) => {
  return (
    <div>
      <div className="relative">
        <div className="w-[220px] h-[200px] p-5 bg-secondary ">
          <Image
            src={Pink}
            className="w-full h-full p-3"
            width={400}
            height={800}
            alt="pink hoodie"
          />
        </div>
        <div className="flex flex-col items-center absolute top-[10px] gap-2 right-[10px]">
          {isInWishList ? (
            <DeleteIcon className="w-8 h-8 cursor-pointer" />
          ) : (
            <>
              <FavoriteIcon className="w-8 h-8 cursor-pointer" />
              <OpenEye className="w-8 h-8 cursor-pointer" />
            </>
          )}
        </div>
      </div>
      <div>
        <p className="text-Button title-16-medium py-2">The north coat</p>
        <div className="space-x-3">
          <span className="text-Secondary2">{formatCurrency(250)}</span>
          <span className="text-Button text-opacity-50 relative after:content-[''] after:absolute after:top-1/2 after:h-[1px] after:bg-Button after:opacity-30 after:w-full after:left-0">
            {formatCurrency(350)}
          </span>
        </div>
        {!isInWishList && (
          <div className="flex gap-2 py-1 items-center">
            {Array(5)
              .fill(0)
              .map((ele, i) => (
                <StarIcon key={i} />
              ))}
            <span className="text-Button text-opacity-50">(65)</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
