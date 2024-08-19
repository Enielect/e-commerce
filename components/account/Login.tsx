import { GoogleIcon } from "@/assets/svgIcons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex bg-primary text-Button w-full">
      <div className="flex-1">
        <Image
          src={"/productImages/loginImage.svg"}
          className="w-full"
          width={400}
          height={400}
          alt="login"
        />
      </div>
      <div className="space-y-5 flex-1 px-[13rem] py-[10rem]">
        <Label title="Log in to Exclusive" label="Enter your details below" />
        <FormFields type="login" />
        <Buttons />
      </div>
    </div>
  );
};

export function Label({ title, label }: { title: string; label: string }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="heading-36-medium">{title}</div>
      <span className="title-16-regular">{label}</span>
    </div>
  );
}

export function FormFields({ type }: { type: "signUp" | "login" }) {
  return (
    <div className="flex flex-col gap-4">
      {type === "signUp" && (
        <input
          type="text"
          placeholder="Name"
          className="border-Button border-b outline-transparent p-2"
        />
      )}
      <input
        type="text"
        placeholder="Email or Phone Number"
        className="border-Button border-b outline-transparent p-2"
      />
      <input
        type="text"
        placeholder="Password"
        className="border-Button border-b outline-transparent p-2"
      />
    </div>
  );
}

function Buttons() {
  return (
    <div className="w-full flex">
      <button className="bg-Button2 px-4 py-3 text-white rounded-md flex-1">Create Account</button>
      <div className="flex-1 flex justify-center items-center">
        <Link href="#" className="text-Button2">
          Forget Password?
        </Link>
      </div>
    </div>
  );
}

function Option() {
  return (
    <span className="block text-center py-3">
      Already have account? <span>Login in</span>
    </span>
  );
}

export default Login;
