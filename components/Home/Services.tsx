import React from "react";
import {
  CutomerServiceIcon,
  DeliveryIcon,
  SecureIcon,
} from "@/assets/svgIcons";

const servicesContent = [
  {
    icon: <DeliveryIcon />,
    offer: "free and fast delivery",
    tag: "Free delivery for all offers over $140",
  },
  {
    icon: <CutomerServiceIcon />,
    offer: "24/7 customer service",
    tag: "Friendly 24/7 Customer Support",
  },
  {
    icon: <SecureIcon />,
    offer: "money back guarantee",
    tag: "We return money within 30 days",
  },
];

const Services = () => {
  return (
    <div className="w-full flex gap-14 text-Button">
      {servicesContent.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          offer={service.offer}
          tag={service.tag}
        />
      ))}
    </div>
  );
};

function ServiceCard({
  icon,
  offer,
  tag,
}: {
  icon: React.ReactNode;
  offer: string;
  tag: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-fit">
      <div className="w-[5rem] h-[5rem] rounded-full bg-[#2F2E30] p-2 mx-auto">
        <div className="bg-Button h-full w-full flex justify-center items-center rounded-full">
          {icon}
        </div>
      </div>
        <h4 className="text-center">{offer}</h4>
        <h6>{tag}</h6>
    </div>
  );
}

export default Services;
