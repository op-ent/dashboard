import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="" lang="fr">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/img/logo.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex min-h-screen flex-col bg-neutral-1">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
