import React from "react";
import Image from "next/image";
import { sendGTMEvent } from '@next/third-parties/google'
import { motion, useCycle, useScroll } from "framer-motion";
import { Input, Modal, ModalContent, Textarea, ModalHeader, ModalBody, ModalFooter, Chip, Button, useDisclosure } from "@nextui-org/react";

const words = ['Hydration', 'Refreshment', 'Wellness', 'Clarity'];

export default function Hero() {

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

    const [wordIndex, cycle] = useCycle(0, 1, 2, 3);

    const { scrollY } = useScroll();
    const threshold = 100;

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            cycle();
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                setName('');
                setPhone('');
                setEmail('');
                setMessage('');
            }
        }
    };

    return (
        <section id="hero" className="container min-h-screen">
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
            <div className="flex flex-col w-screen items-center justify-between text-center gap-2 px-10 mt-8 md:flex-row md:text-left">
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
                        Puro offers refreshment that&apos;s as clean and crisp as the mountain air. Hydrate with confidence,
                        knowing that every drop is a testament to purity.
                    </p>
                    <Button color="primary" size="lg" onPress={() => {
                        onOpen();
                        sendGTMEvent({ action: 'click', category: 'button', label: 'contact us' });
                    }}>
                        Contact Us
                    </Button>
                </motion.div>
                <div className="md:basis-1/2 pr-6 flex justify-center bg-[url('/herobg.png')] bg-cover bg-no-repeat bg-center w-full h-full">
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    >
                        <Image
                            src="/purohero.png"
                            alt="Puro Hero"
                            width={500}
                            height={500}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">

                                <ModalBody>
                                    <div className="flex flex-col gap-6 items-center justify-center">
                                        <h1 className="text-4xl md:text-5xl text-semibold text-center py-5">Contact Us</h1>
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
                                            placeholder="What's on your mind?"
                                            value={message}
                                            onChange={handleMessageChange}
                                        />
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" type="submit" onPress={() => {
                                        sendGTMEvent({ action: 'click', category: 'button', label: 'submit' });
                                        setTimeout(() => {
                                            onClose();
                                        }, 3000)
                                    }}>Submit</Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
}