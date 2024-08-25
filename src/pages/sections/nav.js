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
      link.addEventListener('click', event => {
        event.preventDefault();

        // Get the href attribute of the link
        const href = link.getAttribute('href');

        // Get the section element
        const section = document.querySelector(href);

        // Animate the scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }, []);

  const menuItems = [
    { title: "About Us", target: "about" },
    { title: "Products", target: "products" },
    { title: "Contact Us", target: "contact" }
  ];

  return (
    <Navbar maxWidth="xl" position="sticky" onMenuOpenChange={setIsMenuOpen} className="bg-[#445b7c] py-1.5">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand>
          <Link href="#">
            <Image src="/purologo.png" width={150} height={150} alt="Puro Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-16" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem>
            <a
              key={`${item}-${index}`}
              className="cursor-pointer text-white"
              href={`#${item.target}`}>
              {item.title}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex space-x-6">
          <Link href="#" color="foreground"><i className="fa-brands fa-facebook text-2xl"></i></Link>
          <Link href="#" color="foreground"><i className="fa-brands fa-square-twitter text-2xl"></i></Link>
          <Link href="#" color="foreground"><i className="fa-brands fa-square-x-twitter text-2xl"></i></Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
