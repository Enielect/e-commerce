"use client"; //remove when done

import React, { useEffect, useState } from "react";
import { Stack } from "@/app/not-found";
import Services from "@/components/Home/Services";
import Image, { StaticImageData } from "next/image";
import {
  Instagram,
  LinkedIn,
  ServicesMoneyBag,
  ServicesSalesIcon,
  ServicesShopIcon,
  ServicesShoppingBag,
  Twitter,
} from "@/assets/svgIcons";
import Tom from "@/assets/about/Tom-Cruise.png";
import Emma from "@/assets/about/Emma-Thompson.png";
import Will from "@/assets/about/Will-Smith.png";
import HeroImage from "@/assets/about/hero.png"

const executives = [
  { name: "Tom Cruise", position: "Founder & Chairman", src: Tom },
  { name: "Emma Waatson", position: "Managing Director", src: Emma },
  { name: "Will Smith", position: "Product Designer", src: Will },
];

const services = [
  {
    icon: <ServicesShopIcon />,
    price: "10.5k",
    benefit: "Sallers active our site",
  },
  {
    icon: <ServicesSalesIcon />,
    price: "33k",
    benefit: "Monthly product sale",
  },
  {
    icon: <ServicesShoppingBag />,
    price: "45.5k",
    benefit: "Customer active on our site",
  },
  {
    icon: <ServicesMoneyBag />,
    price: "25k",
    benefit: "Anual gross sale in our site",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-primary px-[80px]">
      <Stack crumbs={["Home", "About"]} />
      <div className="">
        <Hero />
      </div>
      <div className="flex w-full h-[40rem] items-center py-10 justify-center gap-[9rem]">
        {services.map((service, i) => (
          <Achievement
            key={i}
            icon={service.icon}
            price={service.price}
            benefit={service.benefit}
          />
        ))}
      </div>
      <div className="py-10 w-full flex justify-center gap-[8rem]">
        {executives.map((ele) => (
          <ExecutiveCard
            src={ele.src}
            key={ele.position}
            name={ele.name}
            position={ele.position}
          />
        ))}
        {/* <ExecutiveCard src={Tom} /> */}
      </div>
      <div className="mx-auto w-full flex py-[7rem] justify-center">
        <Services />
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div className="flex justify-between  items-center text-Button">
      <div className="max-w-[39rem]">
        <h2 className="heading-54-semibold py-5">Our Story</h2>
        <Paragraph>
          Launced in 2015, Exclusive is South Asia&apos;s premier online
          shopping makterplace with an active presense in Bangladesh. Supported
          by wide range of tailored marketing, data and service solutions,
          Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
          customers across the region.
        </Paragraph>
        <Paragraph>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </Paragraph>
      </div>
      <div>
        <Image
          src={HeroImage}
          width={600}
          height={600}
          alt="hero about page"
        />
      </div>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="py-[2rem]">{children}</p>;
}

function Achievement({
  icon,
  price,
  benefit,
}: {
  icon: React.ReactNode;
  price: string;
  benefit: string;
}) {
  const [isAchievementHover, setIsAchievementHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsAchievementHover(true)}
      onMouseLeave={() => setIsAchievementHover(false)}
      className={`py-3 px-5 achievement border text-Button space-y-4 border-Button hover:bg-Secondary2 hover:text-white border-opacity-30 cursor-pointer rounded-sm`}
    >
      {/* <CircleDecorator isAchievement={isAchievementHover} icon={icon} /> */}
      <div className="text-center w-full flex items-center justify-center">
        {icon}
      </div>
      <p className="text-center heading-32-bold">105.8k</p>
      <p className="text-center title-16-regular">Sallers active our site</p>
    </div>
  );
}

function ExecutiveCard({
  src,
  name,
  position,
}: {
  src: string | StaticImageData;
  name: string;
  position: string;
}) {
  return (
    <div className="text-Butto space-y-3 w-[16rem]">
      <div className="bg-secondary h-[20rem] px-[2rem] pt-4">
        <Image
          src={src}
          width={500}
          className="w-full  h-full object-cover"
          height={500}
          alt="executive"
        />
      </div>
      <div className="text-Button">
        <div>
          <p className="heading-32-medium"> {name}</p>
          <p className="title-16-regular">{position}</p>
        </div>
        <div className="flex items-center gap-3 py-2">
          <span>
            <Twitter className="w-4 h-4" />
          </span>{" "}
          <span>
            <Instagram stroke="black" className="w-4 h-4" />
          </span>{" "}
          <span>
            <LinkedIn stroke="black" className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
