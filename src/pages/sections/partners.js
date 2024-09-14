import { Chip } from "@nextui-org/react";
import EmblaCarousel from "../components/carousel";
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

const OPTIONS = { loop: true }

export default function Partners() {
    return (
        <section className="container px-16 md:px-32" id="partners">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">Partners</Chip>
                <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl text-semibold text-center md:basis-1/2 md:text-right md:pb-3"
                    >
                        Trusted Partners
                    </motion.h1>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left md:basis-1/2 md:max-w-xl">
                        Natural water, Fresh Water, mineral water they are working with us.
                        They work with us because we are giving them fresh, safe, pure and
                        healthy water with trust and honesty.
                    </motion.p>
                </div>
            </div>
            <div className="opacity-70">
                <EmblaCarousel slides={images} options={OPTIONS} />
            </div>
        </section>
    );
}