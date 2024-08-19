"use client";

import {
  CartIcon,
  FavoriteIcon,
  SearchIcon,
  UserIcon,
} from "@/assets/svgIcons";
import React, { useState } from "react";

const loggedIn = true;
const User = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[2rem]"
    >
      <path
        d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MailBag = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[1.5rem]"
    >
      <path
        d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const Cancel = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[1.5rem]"
    >
      <g clip-path="url(#clip0_831_458)">
        <path
          d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
          stroke="#FAFAFA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="11.25" stroke="white" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_831_458">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
const Review = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[1.5rem]"
    >
      <path
        d="M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z"
        stroke="#FAFAFA"
        strokeWidth="1.5"
      />
    </svg>
  );
};
const LogOut = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[1.5rem]"
    >
      <path
        d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const userDropDown = [
  { icon: <User />, label: "Manage My Account" },
  { icon: <MailBag />, label: "My Order" },
  { icon: <Cancel />, label: "My Cancellations" },
  { icon: <Review />, label: "My reviews" },
  { icon: <LogOut />, label: "Logout" },
];

const DropDown = () => {
  return (
    <div className="backdrop-blur-xl absolute right-[5.7rem] textWhite top-[5rem] bg-black bg-opacity-[10%] p-5 w-[14rem]">
      <ul className="space-y-3">
        {userDropDown.map((ele, i) => (
          <li key={i} className="flex gap-3 items-center">
            {ele.icon}
            <span className="title-14-regular">{ele.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TopNav = () => {
  const [toggleDropDown, settoggleDropDown] = useState(false);
  return (
    <div className="bg-primary text-Button flex justify-between py-[30px] border-b border-Button border-opacity-20 px-[80px]">
      <div className="heading-24-bold">Exclusive</div>
      <div className="menu">
        <ul className="flex title-16-regular gap-[40px]">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div className="flex gap-3">
        <div className="flex items-center relative">
          <input
            type="text"
            className=" py-2 pl-5 pr-6 rounded-md placeholder:title-12-regular placeholder:opacity-50 bg-secondary"
            placeholder="What are you looking for?"
          />
          <SearchIcon className="absolute right-3 w-4" />
        </div>
        <FavoriteIcon />
        <CartIcon />
        {loggedIn && (
          <span
            className="cursor-pointer"
            onClick={() => settoggleDropDown((c) => !c)}
          >
            <UserIcon />
            <div>{toggleDropDown && <DropDown />}</div>
          </span>
        )}
      </div>
    </div>
  );
};

export default TopNav;
