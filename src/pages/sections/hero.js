import React from "react";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";

const words = ['Hydration', 'Refreshment', 'Wellness', 'Clarity'];

export default function Hero() {
    const [wordIndex, cycle] = useCycle(0, 1, 2, 3);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            cycle();
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="hero" className="container py-8">
            <div className="flex flex-col w-screen items-center justify-center text-center gap-10 px-10 mt-8 md:flex-row md:text-left">
                <div className="flex flex-col space-y-6 md:pl-6 lg:pl-28 justify-center items-center md:items-start md:basis-1/3">
                    <Chip color="secondary">Packaged Drinking Water</Chip>
                    <div className="text-5xl font-bold w-[468px]">
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
                    <p className="w-3/4">
                        Experience the essence of nature with every sip of Puro.
                        Sourced from the purest springs and carefully filtered to maintain its natural minerals,
                        Puro offers refreshment that's as clean and crisp as the mountain air. Hydrate with confidence,
                        knowing that every drop is a testament to purity.
                    </p>
                </div>
                <div className="md:basis-1/3">
                    <Image
                        src="/purobottle.png"
                        alt="Puro Bottle"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="hidden lg:basis-1/3 md:relative lg:flex flex-col gap-4">
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeOut' }}
                    >
                        <Card isPressable className="py-4 w-[300px] md:absolute md:bottom-8 md:-left-20">
                            <CardHeader className="flex-col items-start">
                                <h4 className="font-bold text-xl text-primary">Crystal-Clear Purity</h4>
                            </CardHeader>
                            <CardBody className="py-2">
                                Every drop of Puro water is a testament to crystal-clear purity,
                                ensuring that what you drink is free from impurities and
                                as refreshing as nature intended.
                            </CardBody>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeOut' }}
                    >
                        <Card isPressable className="py-4 w-[300px] md:absolute md:-bottom-[220px]">
                            <CardHeader className="flex-col items-start">
                                <h4 className="font-bold text-xl text-primary">Pristine Hydration</h4>
                            </CardHeader>
                            <CardBody className="py-2">
                                Puro delivers pristine hydration, sourced from untouched natural springs,
                                providing you with water that's not only pure but also rich in essential
                                minerals for your well-being.
                            </CardBody>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}