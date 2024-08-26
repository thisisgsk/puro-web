import React from "react";
import Image from "next/image";
import { motion, useCycle, useScroll, useMotionValueEvent } from "framer-motion";
import { Chip, Button } from "@nextui-org/react";

const words = ['Hydration', 'Refreshment', 'Wellness', 'Clarity'];

export default function Hero() {
    const [wordIndex, cycle] = useCycle(0, 1, 2, 3);

    const { scrollY } = useScroll();
    const threshold = 100;

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            cycle();
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="hero" className="container py-8 text-white bg-[#445b7c] min-h-screen">
            <motion.div
                initial={{ y: '400%' }}
                animate={scrollY.current > threshold ? { y: '0%' } : { y: '400%' }}
                transition={{ duration: 0.2, ease: 'linear' }}
                className="fixed bottom-12 right-12 md:right-16 cursor-pointer z-20"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#67BBC4" className="size-6 scale-[2.5]">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                </svg>
            </motion.div>
            <div className="flex flex-col w-screen items-center justify-between text-center gap-10 px-10 mt-8 md:flex-row md:text-left">
                <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="flex flex-col space-y-6 md:pl-6 lg:pl-28 justify-center items-center md:items-start md:basis-1/2"
                >
                    <Chip color="primary">Packaged Drinking Water</Chip>
                    <div className="text-5xl md:text-7xl font-bold w-full">
                        Pure
                        <motion.div
                            key={wordIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                            className="text-primary">
                            {words[wordIndex]}
                        </motion.div> Begins Here
                    </div>
                    <p className="w-3/4 font-light">
                        Experience the essence of nature with every sip of Puro.
                        Sourced from the purest springs and carefully filtered to maintain its natural minerals,
                        Puro offers refreshment that's as clean and crisp as the mountain air. Hydrate with confidence,
                        knowing that every drop is a testament to purity.
                    </p>
                    <Button color="primary" size="lg">
                        Contact Us
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="md:basis-1/2 pr-6 flex justify-center"
                >
                    <Image
                        src="/purobottle.jpg"
                        alt="Puro Bottle"
                        width={500}
                        height={500}
                        style={{
                            boxShadow: '20px 20px 0px 0px #67BBC4',
                            WebkitBoxShadow: '20px 20px 0px 0px #67BBC4',
                            MozBoxShadow: '20px 20px 0px 0px #67BBC4'
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}