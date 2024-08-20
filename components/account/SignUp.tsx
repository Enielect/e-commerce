"use client";

import { GoogleIcon } from "@/assets/svgIcons";
import Image from "next/image";
import React from "react";
import { FormFields, Label } from "@/components/account/Login";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { signUpAction } from "@/app/actions/auth";
import { FormState } from "@/lib/definitions";

const SignUp = () => {
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
      <SignUpForm />
    </div>
  );
};

function SignUpForm() {
  const [state, action] = useFormState(signUpAction, undefined);
  const { pending } = useFormStatus();
  return (
    <form action={action} className="space-y-5 flex-1 px-[13rem] py-[10rem]">
      <Label title="Create an account" label="Enter your details below" />
      <FormFields state={state as FormState} type="signUp" />
      <Buttons type="submit" pending={pending} />
      <Option />
    </form>
  );
}

function Buttons({
  type,
  pending,
  ...restProp
}: {
  type: "submit" | undefined;
  pending: boolean;
  restProp?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  return (
    <div className="w-full space-y-4">
      <button
        className="bg-Button2 px-4 py-3 rounded-md w-full"
        type={type}
        aria-disabled={pending}
        {...restProp}
      >
        {pending ? "Submitting" : "Create Account"}
      </button>
      <button className="flex justify-center gap-3 px-4 py-3 w-full items-center border border-black border-opacity-40">
        <GoogleIcon />
        <span>Sign Up with Google</span>
      </button>
    </div>
  );
}

function Option() {
  return (
    <span className="block text-center py-3">
      Already have account?{" "}
      <Link href="/login" className="text-Button2">
        Login in
      </Link>
    </span>
  );
}

export default SignUp;
