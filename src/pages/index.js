import Footer from "./sections/footer";
import Contact from "./sections/contact";
import Products from "./sections/products";
import About from "./sections/about";
import Hero from "./sections/hero";
import Nav from "./sections/nav";
import Partners from "./sections/partners";
import { Image } from "@nextui-org/react";
export default function Home() {
  return (
    <div>
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
