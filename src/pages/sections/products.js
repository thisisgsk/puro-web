import { useRef } from "react";
import { Image, Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";

export default function Products() {
    return (
        <section className="container  flex flex-col gap-6 justify-center items-center" id="products">
            <Chip color="secondary">Products</Chip>
            <div className="flex flex-col">
                <div className="flex">
                    <section className="bumpdotdivider min-w-full h-16 animate-scroll shrink-0"></section>
                    <section className="bumpdotdivider min-w-full h-16 animate-scroll shrink-0"></section>
                </div>
                <div className="flex flex-col px-16 md:px-32 justify-center bg-[#F3F9FF] items-center gap-6 pt-4 pb-10">
                    <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
                        <motion.h1
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl text-semibold text-center md:basis-1/2 md:text-right md:pb-3"
                        >
                            Bottles We Deliver
                        </motion.h1>
                        <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                        <motion.p
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center md:text-left md:basis-1/2 md:max-w-xl">
                            We now deliver different types of bottled water.
                            To Drink the best water please come to us and give us order and
                            take safe and sound water for you.
                        </motion.p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <motion.div
                            initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0.2)", scale: 1 }}
                            whileHover={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 rounded-lg border-medium"
                        >
                            <Card shadow="none" className="min-w-[300px] min-h-[480px]">
                                <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                                    <Image src="/puro250.jpg" alt="250 ml product" width="100%" className="object-cover" />
                                    <h4 className="font-bold text-large text-primary hover:text-secondary">250 ml</h4>
                                </CardHeader>
                                <CardBody className="py-2 text-center text-[#000000]">
                                    Perfect for quick hydration, the 250 ml Puro bottle is your ideal companion for a morning jog or a busy day.
                                    Small in size, but big on purity, it&apos;s easy to slip into your bag for refreshment whenever you need it.
                                </CardBody>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0.2)", scale: 1 }}
                            whileHover={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 rounded-lg border-medium"
                        >
                            <Card shadow="none" className="min-w-[300px] min-h-[480px]">
                                <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                                    <Image src="/puro500.jpg" alt="500 ml product" width="100%" className="object-cover" />
                                    <h4 className="font-bold text-large text-primary hover:text-secondary">500 ml</h4>
                                </CardHeader>
                                <CardBody className="py-2 text-center text-[#000000]">
                                    The 500 ml Puro bottle strikes the perfect balance between portability and quantity,
                                    ensuring you stay refreshed throughout your day without weighing you down.
                                </CardBody>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0.2)", scale: 1 }}
                            whileHover={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 rounded-lg border-medium"
                        >
                            <Card shadow="none" className="min-w-[300px] min-h-[480px]">
                                <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                                    <Image src="/puro1.jpg" alt="1 ltr product" width="100%" className="object-cover" />
                                    <h4 className="font-bold text-large text-primary hover:text-secondary">1 ltr</h4>
                                </CardHeader>
                                <CardBody className="py-2 text-center text-[#000000]">
                                    When you need long-lasting hydration, the 1-litre Puro bottle has you covered. Perfect for road trips,
                                    outdoor adventures, or a busy workday, it&apos;s your source of pure water for hours on end.
                                </CardBody>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0.2)", scale: 1 }}
                            whileHover={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="flex-1 rounded-lg border-medium"
                        >
                            <Card shadow="none" className="min-w-[300px] min-h-[480px]">
                                <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                                    <Image src="/custom.jpg" alt="1 ltr product" width="100%" className="object-cover" />
                                    <h4 className="font-bold text-large text-primary hover:text-secondary">Customized</h4>
                                </CardHeader>
                                <CardBody className="py-2 text-center text-[#000000]">
                                    <strong>"Create your own story with Puro – attach your brand, and let your business flow!"</strong>
                                    This emphasizes the personalization aspect, allowing buyers to see Puro as a platform for their own brand's identity.
                                </CardBody>
                            </Card>
                        </motion.div>
                    </div>
                </div>
                <div className="flex">
                    <section className="bumpdotdividerinverted min-w-full h-16 animate-scroll shrink-0"></section>
                    <section className="bumpdotdividerinverted min-w-full h-16 animate-scroll shrink-0"></section>
                </div>
            </div>
        </section>
    );
}