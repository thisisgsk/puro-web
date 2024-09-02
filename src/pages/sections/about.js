import { useRef } from "react";
import { Chip, Card, CardHeader, CardBody, Divider, ScrollShadow } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
                duration: 1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: isInView ? 1 : 0
        }
    };

    return (
        <section className="container px-16 md:px-32" id="about">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">About Us</Chip>
                <div className="flex flex-col md:flex-row gap-6 md:p-6 justify-stretch items-center bg-secondary rounded-md shadow-lg">
                    <div className="basis-1/3 flex justify-end py-6 px-6 md:px-0 md:pl-4">
                        <Image
                            src="/purobottle.jpg"
                            alt="Puro Logo"
                            width={400}
                            height={400}
                            className="rounded-md">
                        </Image>
                    </div>
                    <div className="flex flex-col text-center md:leading-loose font-light pb-6 md:pb-0 md:text-left items-center basis-2/3 max-h-80 px-6 text-white">
                        <ScrollShadow hideScrollBar>
                            <p>At Puro, we believe that the foundation of a healthy life begins with the water we drink. That’s why we’re committed to providing you with the purest, most refreshing water, sourced directly from nature’s finest springs. Our journey started with a simple goal: to offer water that’s as close to its natural state as possible—free from contaminants, rich in essential minerals, and undeniably fresh.</p>
                            <p>Each bottle of Puro is a testament to our dedication to quality. We carefully select and source our water from pristine environments, ensuring that it retains its natural purity throughout our meticulous filtration process. The result is water that not only quenches your thirst but also nourishes your body with the essential minerals it needs to thrive.</p>
                            <p>But our commitment doesn’t stop at what’s inside the bottle. We’re equally passionate about protecting the planet, which is why we’ve made sustainability a core part of our mission. Our eco-friendly packaging is designed to minimize environmental impact, using recyclable materials that help reduce waste. We believe that pure water and a clean environment go hand in hand, and we’re proud to contribute to a healthier planet with every bottle we produce.</p>
                            <p>Whether you’re reaching for our compact 250 ml bottle for a quick refreshment, our 500 ml bottle for balanced hydration on the go, or our 1-litre bottle to keep you fueled throughout the day, you can trust that Puro delivers purity in every drop. Join us in our pursuit of a healthier, more sustainable world, one bottle of pure water at a time.</p>
                        </ScrollShadow>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl pt-4 text-semibold text-center md:max-w-xl">A Trusted Name In Bottled Water Industry</h1>
                <i className="fa-solid fa-minus text-secondary text-6xl"></i>
                <motion.div className="flex flex-col md:flex-row gap-6 justify-center items-center" ref={ref} variants={container} initial="hidden" animate="visible">
                    <motion.div variants={item} key={0} ref={ref}>
                        <Card shadow="none" radius="none" className="py-4 min-w-[300px] min-h-[260px]">
                            <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center text-primary hover:text-secondary">
                                <i className="fa-solid fa-droplet text-6xl"></i>
                                <h4 className="font-bold text-large">Maximum Purity</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 text-center text-[#000000]">
                                Due to the importance of water in our life we give 99.99% pure water to our customers.
                            </CardBody>
                        </Card>
                    </motion.div>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <motion.div variants={item} key={1} ref={ref}>
                        <Card shadow="none" radius="none" className="py-4 min-w-[300px] min-h-[260px]">
                            <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center text-primary hover:text-secondary">
                                <i className="fa-solid fa-tarp-droplet text-6xl"></i>
                                <h4 className="font-bold text-large">5 Steps Filtration</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 text-center text-[#000000]">
                                Water has different types of impurity. 5 steps filtration removes all the impurity of the water.
                            </CardBody>
                        </Card>
                    </motion.div>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <motion.div variants={item} key={2} ref={ref}>
                        <Card shadow="none" radius="none" className="py-4 min-w-[300px] min-h-[260px]">
                            <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center text-primary hover:text-secondary">
                                <i className="fa-solid fa-flask text-6xl"></i>
                                <h4 className="font-bold text-large">Chlorine Free</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 text-center text-[#000000]">
                                We serve our water chlorine free to think about clients' lives since chlorine causes serious damage to our health.
                            </CardBody>
                        </Card>
                    </motion.div>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <motion.div variants={item} key={3} ref={ref}>
                        <Card shadow="none" radius="none" className="py-4 min-w-[300px] min-h-[260px]">
                            <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center text-primary hover:text-secondary">
                                <i className="fa-solid fa-medal text-6xl"></i>
                                <h4 className="font-bold text-large">Quality Certified</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2 text-center text-[#000000]">
                                Our water quality is certified in several countries (BD, USA, UK, UAE) due to the purity of the water.
                            </CardBody>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}