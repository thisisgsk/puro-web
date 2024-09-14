import { Chip, Input, Button } from "@nextui-org/react";

export default function Contact() {
    return (
        <section className="container px-16 md:px-32" id="contact">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">Contact Us</Chip>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-4xl md:text-5xl text-semibold text-center">For Any Enquiry</h1>
                    <Input isClearable type="text" label="Full Name" />
                    <Input isClearable type="phone" label="Contact No." />
                    <Input isClearable type="email" label="Email" />
                    <Button color="primary">Submit</Button>
                </div>
            </div>
        </section>
    );
}