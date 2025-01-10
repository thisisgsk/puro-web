import "../styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <title>Puro &#124; Packaged Drinking Water</title>
        <meta name="description" content="Puro offers premium water bottles in 250 ml, 500 ml, and 1-liter sizes. Add your brand to our customizable bottles and deliver pure hydration to your customers." />

        <meta property="og:title" content="Puro &#124; Packaged Drinking Water" />
        <meta property="og:description" content="Puro offers premium water bottles in 250 ml, 500 ml, and 1-liter sizes. Add your brand to our customizable bottles and deliver pure hydration to your customers." />
        <meta property="og:image" content="/purobottle.jpg" />
        <meta property="og:url" content="https://purobeverages.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className={`puro-theme overflow-x-hidden ${poppins.className}`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
