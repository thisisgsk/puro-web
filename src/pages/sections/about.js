import { useRef } from "react";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";

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
                <h1 className="text-4xl md:text-5xl text-semibold text-center md:max-w-xl">A Trusted Name In Bottled Water Industry</h1>
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
                    <motion.div variants={item} key={2} ref={ref}>
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