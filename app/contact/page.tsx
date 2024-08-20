import React from "react";
import { Stack } from "@/app/not-found";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-primary px-[80px]">
      <Stack crumbs={["Home", "Contact"]} />
    </div>
  );
};

export default ContactPage;
