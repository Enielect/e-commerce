"use client";

import { loginAction } from "@/app/actions/auth";
import { FormState } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

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
      <LoginForm />
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

function LoginForm() {
  const [state, action] = useFormState(loginAction, undefined);
  const { pending } = useFormStatus();

  return (
    <form action={action} className="space-y-5 flex-1 px-[13rem] py-[10rem]">
      <Label title="Log in to Exclusive" label="Enter your details below" />
      <FormFields state={state as FormState} type="login" />
      <Buttons pending={pending} type="submit" />
    </form>
  );
}

function Buttons({
  pending,
  type,
  ...buttonProps
}: {
  type: "submit" | undefined;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  pending: boolean;
}) {
  return (
    <div className="w-full flex">
      <button
        {...buttonProps}
        aria-disabled={pending} //what does this do
        type={type} // Add the type prop here
        className="bg-Button2 px-4 py-3 text-white rounded-md flex-1"
      >
        {pending ? "Loading..." : "Login"}
      </button>
      <div className="flex-[2] flex justify-center items-center">
        <Link href="#" className="text-Button2">
          Forget Password?
        </Link>
      </div>
    </div>
  );
}

export function FormFields({
  type,
  state,
}: {
  state: FormState;
  type: "signUp" | "login";
}) {
  return (
    <div className="flex flex-col gap-4">
      {type === "signUp" && (
        <>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="border-Button border-b outline-transparent p-2"
          />
          {state?.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </>
      )}
      <input
        name="email"
        type="text"
        placeholder="Email or Phone Number"
        className="border-Button border-b outline-transparent p-2"
      />
      {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border-Button border-b outline-transparent p-2"
      />
      {state?.errors?.password && (
        <div className="text-red-500">
          <p>Password must:</p>
          <ul>
            {state?.errors?.password?.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// function Buttons({
//   ...buttonProps
// }: {
//   buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
// }) {
//   return (
//     <div className="w-full flex">
//       <button
//         {...buttonProps}
//         className="bg-Button2 px-4 py-3 text-white rounded-md flex-1"
//       >
//         Login
//       </button>
//       <div className="flex-[2] flex justify-center items-center">
//         <Link href="#" className="text-Button2">
//           Forget Password?
//         </Link>
//       </div>
//     </div>
//   );
// }

export default Login;
