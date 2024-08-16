import {
  AppleAppStore,
  Facebook,
  GooglePlayBanner,
  Instagram,
  LinkedIn,
  QRcode,
  SendIcon,
  Twitter,
} from "@/assets/svgIcons";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-Button h-[26rem] w-full">
      <div className="justify-between px-[8.5rem] flex py-[4rem]">
        <Separator first="Exclusive" space="1rem">
          <span className="title-20-medium">Subscribe</span>
          <div className="flex flex-col">
            <span>Get 10% off your first order</span>
            <span className="border flex border-white p-2 mt-1">
              <input
                className="bg-Button outline-transparent border-none"
                type="text"
                placeholder="Enter your email"
              />
              <SendIcon />
            </span>
          </div>
        </Separator>
        <Separator first="Support" space="space-y-[1rem]">
          <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
          <span>exclusive@gmail.com</span>
          <span>+88015-88888-9999</span>
        </Separator>
        <Separator first="Account" space="space-y-[0.8rem]">
          <span>My Account</span>
          <span>Login / Register</span>
          <span>Cart</span>
          <span>Wishlist</span>
          <span>Shop</span>
        </Separator>
        <Separator first="Quick Link" space="space-y-[0.9rem]">
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
          <span>FAQ</span>
          <span>Contact</span>
        </Separator>
        <Separator first="Download App" space="1rem">
          <div>
            <span>Save $3 with App New User Only</span>
            <div className="flex h-[72px] gap-3 my-2">
              <QRcode />
              <div className="flex flex-col justify-between">
                <div className="w-[100px] h-[70px]">
                  <GooglePlayBanner />
                </div>
                <div className="w-[100px] h-[70px]">
                  <AppleAppStore />
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-5 py-2 items-center">
            <Facebook /> <Twitter /> <Instagram /> <LinkedIn />
          </div>
        </Separator>
      </div>
      <hr className="text-primary opacity-40" />
      <div className=" w-full text-center py-4">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
};

export default Footer;

const Separator = ({
  children,
  first,
  space,
}: {
  children: React.ReactNode;
  first: string;
  space: string;
}) => {
  return (
    <div className="flex flex-col">
      <span className="mb-[2rem] heading-24-bold">{first}</span>
      <div className={`flex flex-col ${space}`}>{children}</div>
    </div>
  );
};
