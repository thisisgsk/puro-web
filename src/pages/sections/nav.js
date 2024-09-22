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

        if (href?.includes('#')) {
          // Get the section element
          const section = document.querySelector(href);

          // Animate the scroll to the section
          section.scrollIntoView({ behavior: 'smooth' });
        }
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
    <Navbar id="nav" maxWidth="xl" position="sticky" className="py-2" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        <NavbarItem className="flex space-x-3">
          <a href="https://www.facebook.com/profile.php?id=61566393685261" onPointerDown={(event) => {
            event.preventDefault();
            window.open('https://www.facebook.com/profile.php?id=61566393685261');
          }}><i className="fa-brands fa-facebook text-xl text-[#1877F2]"></i></a>
          <a href="https://www.instagram.com/purobeverages/" onPointerDown={(event) => {
            event.preventDefault();
            window.open('https://www.instagram.com/purobeverages/');
          }}><i className="fa-brands fa-square-instagram text-xl text-[#E1306C]"></i></a>
          <a href="https://x.com/purobeverages?s=21&t=1cBA_x9Rns3umYfsu-E2BA" onPointerDown={(event) => {
            event.preventDefault();
            window.open('https://x.com/purobeverages?s=21&t=1cBA_x9Rns3umYfsu-E2BA');
          }}><i className="fa-brands fa-square-x-twitter text-xl"></i></a>
          <a href="https://www.youtube.com/@purobeverages" onPointerDown={(event) => {
            event.preventDefault();
            window.open('https://www.youtube.com/@purobeverages');
          }}><i className="fa-brands fa-youtube text-xl text-[#FF0000]"></i></a>
          <a href="#"><i className="fa-brands fa-square-whatsapp text-xl text-[#25D366]"></i></a>
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
