import { Chip, Card, CardHeader, CardBody } from "@nextui-org/react";

export default function About() {
    return (
        <section className="container px-16 md:px-32">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">About Us</Chip>
                <h1 className="text-4xl md:text-5xl text-semibold text-center md:max-w-xl">A Trusted Name In Bottled Water Industry</h1>
                <i className="fa-solid fa-minus text-secondary text-6xl"></i>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[260px]">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <i className="fa-solid fa-droplet text-6xl text-primary hover:text-secondary"></i>
                            <h4 className="font-bold text-large text-primary hover:text-secondary">Maximum Purity</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 text-center">
                            Due to the importance of water in our life we give 99.99% pure water to our customers.
                        </CardBody>
                    </Card>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[260px]">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <i className="fa-solid fa-tarp-droplet text-6xl text-primary hover:text-secondary"></i>
                            <h4 className="font-bold text-large text-primary hover:text-secondary">5 Steps Filtration</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 text-center">
                            Water has different types of impurity. 5 steps filtration removes all the impurity of the water.
                        </CardBody>
                    </Card>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[260px]">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <i className="fa-solid fa-flask text-6xl text-primary hover:text-secondary"></i>
                            <h4 className="font-bold text-large text-primary hover:text-secondary">Chlorine Free</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 text-center">
                            We serve our water chlorine free to think about clients' lives since chlorine causes serious damage to our health.
                        </CardBody>
                    </Card>
                    <div className="hidden md:block"><i className="fa-solid fa-ellipsis-vertical text-4xl"></i></div>
                    <Card isHoverable className="py-4 min-w-[300px] min-h-[260px]">
                        <CardHeader className="pb-0 pt-2 px-4 gap-4 flex-col items-center">
                            <i className="fa-solid fa-medal text-6xl text-primary hover:text-secondary"></i>
                            <h4 className="font-bold text-large text-primary hover:text-secondary">Quality Certified</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2 text-center">
                            Our water quality is certified in several countries (BD, USA, UK, UAE) due to the purity of the water.
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
}