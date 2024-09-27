import { GoogleTagManager } from '@next/third-parties/google';
import Footer from "./sections/footer";
import Contact from "./sections/contact";
import Products from "./sections/products";
import About from "./sections/about";
import Hero from "./sections/hero";
import Nav from "./sections/nav";
import Partners from "./sections/partners";
export default function Home() {
  return (
    <div>
      <GoogleTagManager gtmId="GTM-PPCTM27P" />
      <Nav />
      <Hero />
      <About />
      <Products />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
