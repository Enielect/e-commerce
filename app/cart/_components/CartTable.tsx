"use client";

import { ChevronArrowDown } from "@/assets/svgIcons";
import { formatCurrency } from "@/lib/formatter";
import Image from "next/image";
import React, { useState } from "react";
import monitor from "@/assets/wishlist/monitor.svg";
import gamePad from "@/assets/wishlist/gamePad.svg";

const ImageSkeleton = ({ src }: { src: string }) => {
  return (
    <Image
      src={src}
      className="w-[45px] h-[45px]"
      height={500}
      width={500}
      alt="wishlist"
    />
  );
};

const wishList = [
  {
    id: 1,
    name: "The north coat",
    price: 250,
    discountedPrice: 350,
    icon: <ImageSkeleton src={monitor} />,
  },
  {
    id: 2,
    name: "The north coat",
    price: 250,
    discountedPrice: 350,
    icon: <ImageSkeleton src={gamePad} />,
  },
];

const CartTable = () => {
  return (
    <div className="text-Button min-w-[700px] ">
      <table className="w-full">
        <TableHeader />
        <tbody>
          {wishList.map((item) => (
            <TableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};



const TableHeader = () => {
  return (
    <thead className="text-left h-[4rem]">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Subtotal</th>
      </tr>
    </thead>
  );
};

const TableRow = ({ item }: { item: (typeof wishList)[0] }) => {
  return (
    <tr className="h-[8rem] border-b border-[#E5E5E5] ">
      <td className="h-full">
        <span className="flex items-center">
          {item.icon}
          <span className="text-Button pl-4">{item.name}</span>
        </span>
      </td>
      <td className="text-Button">{formatCurrency(item.price)}</td>
      <td className="text-Button">
        <Counter />
      </td>
      <td className="text-Button">{formatCurrency(item.price)}</td>
    </tr>
  );
};

const ChevronArrowUp = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.75732 7.36666L4.45732 10.6667L3.51465 9.72399L7.75732 5.48132L12 9.72399L11.0573 10.6667L7.75732 7.36666Z"
        fill="black"
      />
    </svg>
  );
};

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-Button min-w-16  p-1 rounded-md flex w-fit items-center border border-Button">
      <span className="px-2 flex items-center h-[25px] leading-[25px]">
        {count}
      </span>
      <span className="flex flex-col items-center h-[25px]  justify-center">
        <button onClick={() => setCount((c) => c + 1)}>
          <ChevronArrowUp />
        </button>
        <button disabled={count === 0} onClick={() => setCount((c) => c - 1)}>
          <ChevronArrowDown className="w-[0.7rem] h-[0.7rem]" />
        </button>
      </span>
    </div>
  );
}

export default CartTable;
