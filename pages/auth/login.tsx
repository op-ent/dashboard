import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Button } from "@op-ent/unstyled-ui";
import ThemeToggle from "~/components/ThemeToggle";
import Link from "next/link";
import Head from "next/head";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  error: string;
}> = async (context) => {
  return {
    props: {
      error: (context.query.error || "NONE") as string,
    },
  };
};

const Login: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const login = async () => {
    const data = await signIn("credentials", {
      email: "test@test.com",
      password: "test",
      callbackUrl: "/",
      redirect: false,
    });
    if (data && !data.error) {
      router.push(data!.url!);
    } else {
      router.query.error = data!.error;
      router.push(router);
    }
  };

  return (
    <>
      <Head>
        <title>Connexion - op-ent</title>
      </Head>
      <div className="min-h-screen grid grid-cols-3 lg:grid-cols-2">
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="login"
            className="h-full w-full object-cover"
          />
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
              <div>ERROR {error}</div>
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
                  className=""
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
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
