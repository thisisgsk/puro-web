import Image from "next/image";
import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";
export default function Products() {
    return (
        <section className="container px-16 md:px-32">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">Products</Chip>
                <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
                    <h1 className="text-4xl md:text-5xl text-semibold text-center md:basis-1/2 md:text-right md:pb-3">Bottles We Deliver</h1>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <p className="text-center md:text-left md:basis-1/2 md:max-w-xl">
                        We now deliver different types of bottled water.
                        To Drink the best water please come to us and give us order and
                        take safe and sound water for you.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[380px] flex-1">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <Image src="/purobottle.png" width={40} height={40} />
                            <h4 className="font-bold text-large text-primary hover:text-secondary">250 ml</h4>
                        </CardHeader>
                        <CardBody className="py-2 text-center">
                            Perfect for quick hydration, the 250 ml Puro bottle is your ideal companion for a morning jog or a busy day.
                            Small in size, but big on purity, it's easy to slip into your bag for refreshment whenever you need it.
                        </CardBody>
                    </Card>
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[380px] flex-1">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <Image src="/purobottle.png" width={40} height={40} />
                            <h4 className="font-bold text-large text-primary hover:text-secondary">500 ml</h4>
                        </CardHeader>
                        <CardBody className="py-2 text-center">
                            The 500 ml Puro bottle strikes the perfect balance between portability and quantity,
                            ensuring you stay refreshed throughout your day without weighing you down.
                        </CardBody>
                    </Card>
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[380px] flex-1">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <Image src="/purobottle.png" width={40} height={40} />
                            <h4 className="font-bold text-large text-primary hover:text-secondary">1 ltr</h4>
                        </CardHeader>
                        <CardBody className="py-2 text-center">
                            When you need long-lasting hydration, the 1-litre Puro bottle has you covered. Perfect for road trips,
                            outdoor adventures, or a busy workday, it's your source of pure water for hours on end.
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
}