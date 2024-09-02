import { Chip, ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
    "/logos/logo7.png",
];

export default function Partners() {
    return (
        <section className="container px-16 md:px-32" id="partners">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">Partners</Chip>
                <motion.ScrollShadow
                    orientation="horizontal"
                    hideScrollBar
                    initial={{ x: 0 }}
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20, // Adjust duration for speed
                    }}
                    className="flex flex-nowrap gap-16 items-center">
                    {[...images, ...images].map((src, index) => (
                        <Image
                            key={index}
                            src={src}
                            width={100}
                            height={100}
                            className="w-auto object-cover"
                            alt={`scrolling-image-${index}`}
                        />
                    ))}
                </motion.ScrollShadow>
            </div>
        </section>
    );
}