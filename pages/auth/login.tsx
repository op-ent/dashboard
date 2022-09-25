import type { NextPage } from "next";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useMemo, useState } from "react";
import { Button } from "@op-ent/unstyled-ui";
import ThemeToggle from "~/components/ThemeToggle";
import Link from "next/link";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import clsx from "clsx";
import toast from "react-hot-toast";
import { Transition } from "@headlessui/react";
import React from "react";
import { XMarkIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";

const Login: NextPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    const data = await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
      redirect: false,
    });
    if (data && !data.error) {
      router.push(data!.url!);
    } else {
      const toastId = toast.custom(({ visible, id }) => (
        <Transition
          show={visible}
          appear={true}
          as={React.Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-danger-2 shadow-lg ring-1 ring-danger-11 ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ExclamationCircleIcon
                    className="h-6 w-6 text-danger-9"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-danger-12">
                    Echec de la connexion
                  </p>
                  <p className="mt-1 text-sm text-danger-11">
                    {(function () {
                      switch (data!.error) {
                        case "CredentialsSignin":
                          return "Un ou des identifiants sont incorrects.";
                        case "Default":
                          return "Une erreur s'est produite.";
                      }
                    })()}
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md text-danger-11 hover:bg-danger-3 focus:outline-none focus:ring-2 focus:ring-danger-6"
                    onClick={() => toast.dismiss(id)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      ));
    }
  };

  function probability(n: number) {
    return !!n && Math.random() <= n;
  }

  const squares = useMemo(
    () =>
      [...Array(500)].map((_, i) => (
        <div
          key={i}
          className={clsx(
            "w-10 h-10 2xl:w-12 2xl:h-12",
            probability(0.5) && "border-opacity-30",
            probability(0.05)
              ? "dark:border-primaryDark-8/80 border-primaryLight-9/80 border-2"
              : "border-neutral-6 border"
          )}
        />
      )),
    []
  );

  return (
    <>
      <Head>
        <title>Connexion - op-ent</title>
      </Head>
      <div className="min-h-screen grid grid-cols-3 lg:grid-cols-2">
        <div className="hidden md:block overflow-hidden w-[calc(50vw+50px)] relative">
          <div className="flex flex-wrap items-center justify-center absolute -left-[25px]">
            {squares}
          </div>
          {/* <img
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="login"
            className="h-full w-full object-cover"
          /> */}
        </div>
        <div className="col-span-3 md:col-span-2 lg:col-span-1 bg-neutral-3 p-8 flex justify-center items-center relative">
          <div className="absolute top-4 right-4">
            <ThemeToggle />
          </div>
          <div className="max-w-md w-full">
            <div>
              <img
                src="/img/logo.svg"
                className="h-12 mx-auto mb-2"
                alt="Logo d'op-ent"
              />
              <h1 className="text-neutral-12 font-bold text-4xl text-center mb-2 tracking-tight">
                Connexion
              </h1>
              <p className="text-center text-sm text-neutral-11 max-w-md mb-8">
                Pas encore de compte ?{" "}
                <Link
                  href="/auth/register"
                  className="font-medium text-primary-10 hover:text-primary-9 focus:outline-none focus:ring-2 focus:ring-primary-9 rounded"
                >
                  S{"'"}inscrire
                </Link>
              </p>
            </div>
            <div className="bg-neutral-1 p-6 border border-neutral-6 rounded-xl">
              <div className="rounded-md border border-neutral-6 px-3 py-2 shadow-sm focus-within:border-primary-9 focus-within:ring-1 focus-within:ring-primary-9 mb-4 bg-neutral-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-neutral-12"
                >
                  Adresse email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full border-0 p-0 text-neutral-12 placeholder-neutral-11 focus:ring-0 sm:text-sm"
                  placeholder="exemple@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <div className="rounded-md border border-neutral-6 px-3 py-2 shadow-sm focus-within:border-primary-9 focus-within:ring-1 focus-within:ring-primary-9 bg-neutral-2">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-neutral-12"
                    >
                      Mot de passe
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className="block w-full border-0 p-0 text-neutral-12 placeholder-neutral-11 focus:ring-0 sm:text-sm pr-10 rounded-none"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-neutral-11 hover:text-neutral-12 focus:outline-none focus:ring-2 focus:ring-primary-9 rounded-md p-1"
                      >
                        {showPassword ? (
                          <EyeSlashIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <EyeIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <p
                  className="mt-2 text-sm text-neutral-11"
                  id="password-description"
                >
                  Mot de passe oublié ?{" "}
                  <Link
                    href="/auth/reset-password"
                    className="font-medium text-primary-10 hover:text-primary-9 focus:outline-none focus:ring-2 focus:ring-primary-9 rounded"
                  >
                    Réinitialiser
                  </Link>
                </p>
              </div>
              <div className="flex items-center [&>*]:cursor-pointer mb-8">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="bg-neutral-2"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-neutral-12"
                >
                  Se souvenir de moi
                </label>
              </div>
              <Button
                color="primary"
                className="w-full inline-flex justify-center"
                size="lg"
                onClick={() => login()}
              >
                Se connecter
              </Button>
              <div className="flex mt-4 justify-center text-sm text-neutral-11 space-x-6">
                <Link
                  href="/legal/legal-notices"
                  className="hover:text-primary-9 rounded focus:outline-none focus:ring-2 focus:ring-primary-9"
                >
                  Mentions légales
                </Link>
                <Link
                  href="/support"
                  className="hover:text-primary-9 rounded focus:outline-none focus:ring-2 focus:ring-primary-9"
                >
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
