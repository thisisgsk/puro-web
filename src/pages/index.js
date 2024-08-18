import Footer from "./sections/footer";
import Contact from "./sections/contact";
import Products from "./sections/products";
import About from "./sections/about";
import Hero from "./sections/hero";
import Nav from "./sections/nav";
export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
