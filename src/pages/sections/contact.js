import { Chip, Input, Button, Textarea } from "@nextui-org/react";
import React from "react";
import { sendGTMEvent } from '@next/third-parties/google'

export default function Contact() {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const [isSubmitted, setSubmitted] = React.useState(false);

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    async function handleSubmit(e) {
        e.preventDefault();
        if (name && phone && email && message) {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "089dd47b-2c20-4eb2-bde7-be38a85e3433",
                    name,
                    phone,
                    email,
                    message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
                setTimeout(() => {
                    setSubmitted(false);
                }, 3000)
            }
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
                        />
                        <Textarea
                            label="Message"
                            value={message}
                            onChange={handleMessageChange}
                        />
                        <Button type="submit" color="primary" onPress={() => {
                            sendGTMEvent({ action: 'click', category: 'button', label: 'submit' });
                        }}>Submit</Button>
                        {isSubmitted && <p className="text-center text-medium text-green-800 font-semibold">Thank you for your message! <br />We will get back to you soon.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}