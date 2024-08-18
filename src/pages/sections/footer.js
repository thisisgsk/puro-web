import Image from "next/image";
import { Link, Chip } from "@nextui-org/react";

export default function Footer() {
    return (
        <footer className="w-full p-8 bg-secondary text-secondary-foreground">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                <div className="flex flex-col gap-6 items-center justify-center md:items-start md:basis-1/4">
                    <Image src="/purologo.png" width={150} height={150} alt="Puro Logo" className="invert" />
                    <p className="text-sm font-extralight text-center md:text-left">
                        Experience the essence of nature with every sip of Puro.
                        Sourced from the purest springs and carefully filtered to maintain its natural minerals,
                        Puro offers refreshment that's as clean and crisp as the mountain air. Hydrate with confidence,
                        knowing that every drop is a testament to purity.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-start md:items-start md:basis-1/4">
                    <h3 className="text-2xl">Explore</h3>
                    <i className="fa-solid fa-minus"></i>
                    <Link href="#" alt="Home">Home</Link>
                    <Link href="#" alt="About Us">About Us</Link>
                    <Link href="#" alt="Products">Products</Link>
                    <Link href="#" alt="Contact Us">Contact Us</Link>
                </div>
                <div className="flex flex-col items-center justify-start md:items-start md:basis-1/4">
                    <h3 className="text-2xl">Contact</h3>
                    <i className="fa-solid fa-minus"></i>
                    <Chip
                        startContent={<i className="fa-solid fa-square-phone"></i>}
                        variant="flat"
                        color="none"
                    >
                        +91 8331800888
                    </Chip>
                    <Chip
                        startContent={<i className="fa-solid fa-envelope"></i>}
                        variant="flat"
                        color="none"
                    >
                        contact.aurakrafts@gmail.com
                    </Chip>
                    <Chip
                        startContent={<i className="fa-solid fa-location-dot"></i>}
                        variant="flat"
                        color="none"
                    >
                        Plot no 7 Water Enclave, Vishalinagar, Madinaguda, Hyderabad-500049
                    </Chip>
                </div>
                <div className="flex flex-col items-center justify-start md:items-start md:basis-1/4">
                    <h3 className="text-2xl">Follow Us</h3>
                    <i className="fa-solid fa-minus"></i>
                    <div className="flex gap-4">
                        <Link href="#" color="secondary-foreground"><i className="fa-brands fa-facebook text-2xl"></i></Link>
                        <Link href="#" color="secondary-foreground"><i className="fa-brands fa-square-twitter text-2xl"></i></Link>
                        <Link href="#" color="secondary-foreground"><i className="fa-brands fa-square-x-twitter text-2xl"></i></Link>
                    </div>
                </div>
            </div >
        </footer >
    );
}