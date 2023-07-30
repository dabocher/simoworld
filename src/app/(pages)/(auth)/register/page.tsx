"use client";

import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { racing as font } from "@/app/layout";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const metadata: Metadata = {
  title: "Registro",
  description: "Crea una cuenta para SimoWorld",
};

const RegisterPage = () => {
  const router = useRouter();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setRegister({ ...register, [name]: value });
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
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

      response.status === 201 && router.push(`/`);
    } catch (error) {}
  };

  const isDisabled =
    register.username.length < 3 ||
    register.email.length < 5 ||
    register.password.length < 8;

  return (
    <section className={styles.section}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <h1 className={font.className}>Registro</h1>
        <div className={styles.formContainer}>
          <div className={styles.container}>
            <label className={font.className} htmlFor="username">
              Usuaria / o
            </label>
            <input
              name="username"
              value={register.username}
              onChange={onChangeHandler}
              id="username"
              type="text"
              required={true}
              placeholder="Andrea_Peroni"
            />
          </div>
          <div className={styles.container}>
            <label className={font.className} htmlFor="email">
              Correo Electrónico
            </label>
            <input
              name="email"
              onChange={onChangeHandler}
              value={register.email}
              id="email"
              type="email"
              required={true}
              placeholder="andrea.peroni@hotmail.com"
            />
          </div>
          <div className={styles.container}>
            <label className={font.className} htmlFor="password">
              Contraseña
            </label>
            <input
              onChange={onChangeHandler}
              name="password"
              value={register.password}
              id="password"
              required={true}
              type={"password"}
              placeholder="andreita123"
            />
          </div>
        </div>
        <button
          disabled={isDisabled}
          className={`${font.className} ${styles.button} `}
          type="submit"
        >
          Crear cuenta
        </button>
      </form>
      <div className={styles.linkContainer}>
        <Link href="/login">¿Ya tienes una cuenta?</Link>
      </div>
    </section>
  );
};
export default RegisterPage;
