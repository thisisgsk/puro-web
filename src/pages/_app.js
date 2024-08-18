import "../styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Lexend } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

const lexend = Lexend({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <main className={`puro-theme overflow-x-hidden md:overflow-x-visible bg-background text-foreground ${lexend.className}`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
