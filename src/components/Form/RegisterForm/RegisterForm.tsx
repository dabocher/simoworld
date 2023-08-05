"use client";
import InputField from "@/components/Input/Input";
import React from "react";
import { racing as font } from "@/app/layout";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { username, email, password } = event.currentTarget;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.value,
          email: email.value,
          password: password.value,
        }),
      });
      if (response.status !== 201) {
        console.log("something went wrong");
        throw new Error("Something went wrong");
      }

      console.log("Form submitted");
      response.status === 201 && router.push(`/`);
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-80 flex flex-col gap-4 items-center justify-center"
      onSubmit={onSubmitHandler}
    >
      <h1
        className={`${font.className} w-full text-center rounded-md text-4xl text-white bg-zinc-600`}
      >
        Registro
      </h1>
      <div className="shadow-md w-full rounded-md flex flex-col items-center justify-center gap-2 bg-gray-200 p-4">
        <InputField
          placeholder="Andrea_Peroni"
          labelText="Username"
          name="username"
          type="text"
        />
        <InputField
          labelText="Email"
          name="email"
          type="email"
          placeholder="andrea.peroni@gmail.com"
        />
        <InputField
          labelText="Password"
          name="password"
          type="password"
          placeholder="andreita123"
        />
      </div>
    </form>
  );
};

export default RegisterForm;
