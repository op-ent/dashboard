import "~/styles/globals.css";
import "@op-ent/unstyled-ui-theme/dist/colors.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Button, ThemeProvider } from "@op-ent/unstyled-ui";
import { theme } from "~/lib/theme";
import { useEffect, useState } from "react";
import { Github } from "@icons-pack/react-simple-icons";
import { useRouter } from "next/router";
import ThemeToggle from "~/components/ThemeToggle";
import { signOut } from "next-auth/react";

function AppShell({
  show,
  children,
}: {
  show: boolean;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const logout = async () => {
    const data = await signOut({ callbackUrl: "/", redirect: false });
    router.push(data!.url!);
  };
  return (
    <>
      {show && (
        <div className="bg-warning-3 px-4 py-2 text-warning-11 text-center border-b border-b-warning-6">
          Site en construction
        </div>
      )}

      {show && (
        <header className="sticky -top-px bg-neutral-2 border-b border-b-neutral-6">
          <div className="px-4 py-3 flex items-center justify-between custom-container">
            <Link href="/" className="inline-flex items-center space-x-2">
              <img src="/img/logo.svg" className="h-8" alt="Logo d'op-ent" />
              <div className="font-bold text-lg text-neutral-12">op-ent</div>
            </Link>
            <div className="flex items-center space-x-2">
              <Button color="danger" size="sm" onClick={() => logout()}>
                Logout
              </Button>
              <Button
                as={Link}
                href="https://github.com/op-ent"
                target="_blank"
                size="sm"
                variant="ghost"
                leftIcon={<Github className="w-4 h-4 mr-2" />}
              >
                GitHub
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </header>
      )}
      <main>{children}</main>
      {show && (
        <div className="mt-auto bg-neutral-2 p-4 text-neutral-11 text-center border-t border-t-neutral-6">
          &copy; {new Date().getFullYear()} - op-ent
        </div>
      )}
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [showShell, setShowShell] = useState(false);
  useEffect(() => {
    if (pathname.startsWith("/auth")) {
      setShowShell(false);
    } else {
      setShowShell(true);
    }
  }, [pathname]);

  return (
    <ThemeProvider value={theme}>
      <AppShell show={showShell}>
        <Component {...pageProps} />
      </AppShell>
    </ThemeProvider>
  );
}

export default MyApp;
