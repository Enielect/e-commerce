"use client";

import React from "react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="w-full min-h-screen bg-primary px-[80px]">
      <Stack crumbs={["Home", "404 Error"]} />
      <div className="w-full mx-auto ">
        <p className="heading-110-medium py-[2rem] text-Button text-center">
          404 Not Found
        </p>
        <p className="text-Text2 py-[1rem] title-16-regular text-center">
          Your visited page not found. You may go to home page
        </p>
        <div className="text-center py-[2rem]">
          <button className="bg-Button2 py-3 px-5 rounded-md">
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
}

export function Stack({ crumbs }: { crumbs: string[] }) {
  return (
    <div className="text-Button py-[2rem]">
      {crumbs.map((ele, i) => (
        <>
          <span
            className={`title-14-regular ${
              i === crumbs.length - 1 ? "" : "opacity-40"
            } cursor-pointer hover:underline`}
          >
            {ele}
          </span>{" "}
          {!(crumbs.length - 1 === i) && "/"}{" "}
        </>
      ))}
    </div>
  );
}
