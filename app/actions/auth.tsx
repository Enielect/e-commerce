"use server";
import { LoginSchema, SignUpSchema } from "@/lib/definitions";
import bcrypt from "bcrypt";
import db from "../db/db";
import { createSession, updateSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(prev: any, formData: FormData) {
  console.log("LoginAction", formData);
  //validate form
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }
  console.log("run boundary");

  const { email, password } = validatedFields.data;
  console.log("Email", email);
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      password: true,
    },
  });

  console.log("User", user);
  if (user) {
    const isPasswordMatched = await bcrypt.compare(
      password,
      user.password as string
    );
    if (isPasswordMatched) {
      !cookies().get("session")?.value
        ? await createSession(user.id)
        : await updateSession();
      console.log("run inside isPasswordMatched");

      redirect("/");
      // console.log("User found", user.id);
    }
    return { errors: { password: ["Password does not match"] } };
  }
  return { errors: { email: "no such user exists" } };
}

export async function signUpAction(prev: any, formData: FormData) {
  //validate form firld]
  const validatedFields = SignUpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    name: formData.get("name"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error?.flatten().fieldErrors };
  }

  const { email, password, name } = validatedFields.data;
  const existingUser = await db.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return {
      errors: {
        email: "Email already exists",
      },
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("HiIIIIII");

  try {
    const user = await db.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
      select: {
        id: true, // Return only the `id` of the created user
      },
    });
    //id is a number
    await createSession(user.id);
    redirect("/");
  } catch (error) {
    console.error("Error creating user:", error);
    return {
      message: "An error occurred while creating your account.",
    };
  }
}
