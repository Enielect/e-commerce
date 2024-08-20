import Card from "@/components/Home/Card";
import Category from "@/components/Home/Category";
import DisplaySection from "@/components/Home/DisplaySection";
import FancyCard from "@/components/Home/FancyCard";
import HomeTopSection from "@/components/Home/HomeTopSection";
import NewArrival from "@/components/Home/NewArrival";
import Services from "@/components/Home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 bg-primary">
      <HomeTopSection />
      {/* <Card /> */}
      <div className=" pb-10 w-full border-b border-Button border-opacity-30">
        <DisplaySection timer={true} />
      </div>
      <div className="py-14 w-full">
        <Category />
      </div>
      <div className="w-full">
        <FancyCard />
      </div>
      <div className="w-full py-14 border-b border-Button border-opacity-30">
        <DisplaySection timer={false} />
      </div>
      <div className="w-full py-14 border-b border-Button border-opacity-30">
        <NewArrival />
      </div>
      <div className="py-[5rem]">
        <Services />
      </div>
    </main>
  );
}
