import { Chip, Input, Button, Textarea } from "@nextui-org/react";
import React from "react";

export default function Contact() {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && phone && email && message) {
            const body = {
                name,
                phone,
                email,
                message
            };

        }
    };
    return (
        <section className="container px-16 md:px-32" id="contact">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">Contact Us</Chip>
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-4xl md:text-5xl text-semibold text-center">For Any Enquiry</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                        <Input
                            type="text"
                            label="Full Name"
                            value={name}
                            onChange={handleNameChange}
                            validationBehavior="native"
                            isRequired
                        />
                        <Input
                            type="phone"
                            label="Contact No."
                            value={phone}
                            onChange={handlePhoneChange}
                            validationBehavior="native"
                            isRequired
                        />
                        <Input
                            type="email"
                            label="Email"
                            value={email}
                            onChange={handleEmailChange}
                            validationBehavior="native"
                            isRequired
                        />
                        <Textarea
                            label="Message"
                            placeholder="What's on your mind?"
                            value={message}
                            onChange={handleMessageChange}
                        />
                        <Button type="submit" color="primary">Submit</Button>
                    </form>
                </div>
            </div>
        </section>
    );
}