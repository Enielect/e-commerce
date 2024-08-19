import React from "react";

const CardLabel = ({ timer, title }: { timer: boolean; title: string }) => {
  return (
    <div className="flex space-x-[3rem]">
      <div className="space-y-6">
        <div className="space-x-6 flex items-center">
          <div className="w-5 h-[45px] bg-Secondary2 rounded-md"></div>
          <h5 className="text-Secondary2 title-16-semibold">Today&apos;s</h5>
        </div>
        <h3 className="heading-36-semibold text-Button">{title}</h3>
      </div>
      {timer && (
        <div className="text-Button self-end">
          <DateDecorator />
        </div>
      )}
    </div>
  );
};

function DateDecorator() {
  return (
    <div className="flex">
      <BreadCrumb display="Hours" value="08" />{" "}
      <span className="relative bottom-[-29px] text-HoverButton1 text-5xl">
        :
      </span>
      <BreadCrumb display="Minutes" value="00" />{" "}
      <span className="relative bottom-[-29px] text-HoverButton1 text-5xl">
        :
      </span>
      <BreadCrumb display="Seconds" value="00" />
    </div>
  );
}

function BreadCrumb({ display, value }: { display: string; value: string }) {
  return (
    <div className="space-y-3 m-3 flex flex-col">
      <span className="title-12-medium">{display}</span>
      <span className="heading-32-bold">{value}</span>
    </div>
  );
}

export default CardLabel;
