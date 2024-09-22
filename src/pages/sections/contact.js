import { Chip, Input, Button, Textarea } from "@nextui-org/react";
import React from "react";

export default function Contact() {

    const IframeComponent = () => {
        return (
            <iframe
                width="540"
                height="80"
                src="https://d527d223.sibforms.com/serve/MUIFADWHw2lvWlFrP_vDKkq13jdtpAuzxY0aOJHNN8DuwH5ht--8YLnIdvOC1AMpEFRwFWkSl0EDJnfyI3J4IV1ZwG5O0cqToHjziUQ-LXOrIsbXWmkX1PIdenO8AZsyi9oDVox1kThM_LSf06I9VryXwjO6XhkJiateVbtfzqJu2N3NbL1ez3XGyGTmckMlptb0IdSp0FL48KkM"
                frameBorder="0"
                scrolling="auto"
                allowFullScreen
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: '100%',
                    height: '900px',
                }}
            ></iframe>
        );
    };
    return (
        <section className="container px-16 md:px-32" id="contact">
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Chip color="secondary">Contact Us</Chip>
                <IframeComponent />
            </div>
        </section>
    );
}