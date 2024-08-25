import "../styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={`puro-theme overflow-x-hidden bg-background text-black ${poppins.className}`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
