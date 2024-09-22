import Image from "next/image";
import { Link } from "@nextui-org/react";

export default function Footer() {

    const menuItems = [
        { title: "About Us", target: "about" },
        { title: "Products", target: "products" },
        { title: "Partners", target: "partners" },
        { title: "Contact Us", target: "contact" }
    ];

    return (
        <footer className="w-full text-secondary-foreground flex flex-col">
            <div className="flex">
                <section className="spikedivider min-w-full h-11 animate-scroll shrink-0"></section>
                <section className="spikedivider min-w-full h-11 animate-scroll shrink-0"></section>
            </div>
            <div className="flex flex-col gap-4 bg-secondary justify-center items-center">
                <div className="flex flex-col md:flex-row gap-6 justify-start items-start px-8 py-8 md:px-32 mx-auto">
                    <div className="flex flex-col gap-6 justify-center items-start flex-1">
                        <Link href="#nav" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Image src="/purologo.png" width={150} height={150} alt="Puro Logo" />
                        </Link>
                        <p className="text-sm font-extralight text-left">
                            Experience the essence of nature with every sip of Puro.
                            Sourced from the purest springs and carefully filtered to maintain its natural minerals,
                            Puro offers refreshment that&apos;s as clean and crisp as the mountain air. Hydrate with confidence,
                            knowing that every drop is a testament to purity.
                        </p>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col justify-start items-start md:pl-24 md:pt-4">
                            <h3 className="text-2xl">Explore</h3>
                            <i className="fa-solid fa-minus"></i>
                            {menuItems.map((item, index) => (
                                <Link
                                    href={`#${item.target}`}
                                    key={`${item}__${index}`}
                                    color="foreground"
                                    alt={item.title}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start flex-1 md:pt-4">
                        <h3 className="text-2xl">Contact</h3>
                        <i className="fa-solid fa-minus"></i>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-square-phone"></i> +91 9039034455</div>
                        <div className="flex items-center gap-2"><i className="fa-solid fa-envelope"></i> purobeverages@gmail.com</div>
                        <div className="flex items-start gap-2"><i className="fa-solid fa-location-dot pt-1"></i> Plot No. 7, Water Front Enclave, Vaishalinagar, Madinaguda, Hyderabad-500049</div>
                    </div>
                    <div className="flex-1">
                        <div className="flex flex-col justify-start items-start md:pl-24 md:pt-4">
                            <h3 className="text-2xl">Follow Us</h3>
                            <i className="fa-solid fa-minus"></i>
                            <div className="flex gap-4">
                                <Link href="https://www.facebook.com/profile.php?id=61566393685261" onPointerDown={(event) => {
                                    event.preventDefault();
                                    window.open('https://www.facebook.com/profile.php?id=61566393685261');
                                }} color="secondary-foreground"><i className="fa-brands fa-facebook text-xl"></i></Link>
                                <Link href="https://www.instagram.com/purobeverages/" onPointerDown={(event) => {
                                    event.preventDefault();
                                    window.open('https://www.instagram.com/purobeverages/');
                                }} color="secondary-foreground"><i className="fa-brands fa-square-instagram text-xl"></i></Link>
                                <Link href="https://x.com/purobeverages?s=21&t=1cBA_x9Rns3umYfsu-E2BA" onPointerDown={(event) => {
                                    event.preventDefault();
                                    window.open('https://x.com/purobeverages?s=21&t=1cBA_x9Rns3umYfsu-E2BA');
                                }} color="secondary-foreground"><i className="fa-brands fa-square-x-twitter text-xl"></i></Link>
                                <Link href="https://www.youtube.com/@purobeverages" onPointerDown={(event) => {
                                    event.preventDefault();
                                    window.open('https://www.youtube.com/@purobeverages');
                                }} color="secondary-foreground"><i className="fa-brands fa-youtube text-xl"></i></Link>
                                <Link href="#" color="secondary-foreground"><i className="fa-brands fa-square-whatsapp text-xl"></i></Link>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="bg-white h-[1px] w-[90%]"></div>
                <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-96 mb-6">
                    <p className="text-sm font-extralight text-center px-4 md:px-0">Copyright © 2024 Fabulous Beverages Pvt. Ltd. All rights reserved.</p>
                    <p className="text-sm font-extralight text-center">Designed by Add Spark Solutions</p>
                </div>
            </div>
        </footer >
    );
}