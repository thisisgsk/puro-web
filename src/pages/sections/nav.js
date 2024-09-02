import React, { useEffect } from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  useEffect(() => {
    // Get all nav links
    const navLinks = document.querySelectorAll('a');

    // Add event listener to each link
    navLinks.forEach(link => {
      const handleClick = event => {
        event.preventDefault();

        // Get the href attribute of the link
        const href = link.getAttribute('href');

        // Get the section element
        const section = document.querySelector(href);

        // Animate the scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
      };

      link.addEventListener('click', handleClick);
      link.addEventListener('touchstart', handleClick);
    });
  }, []);

  const menuItems = [
    { title: "About Us", target: "about" },
    { title: "Products", target: "products" },
    { title: "Partners", target: "partners" },
    { title: "Contact Us", target: "contact" }
  ];

  return (
    <Navbar id="nav" maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="#nav" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image src="/purologo.png" width={150} height={150} alt="Puro Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-16" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <a
              className="cursor-pointer"
              href={`#${item.target}`}>
              {item.title}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex space-x-6">
          <a href="#"><i className="fa-brands fa-facebook text-2xl"></i></a>
          <a href="#"><i class="fa-brands fa-square-whatsapp text-2xl"></i></a>
          <a href="#"><i className="fa-brands fa-square-x-twitter text-2xl"></i></a>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}_${index}`}>
            <a
              href={`#${item.target}`}
              onClick={() => {
                setIsMenuOpen(false);
              }}>
              {item.title}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
