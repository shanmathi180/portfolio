import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    alert("Failed to send message.");
                    console.log(error);
                }
            );
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>

            <p className="contact-text">
                Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                />

                <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                />

                <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>
            </form>
        </section>
    );
}

export default Contact;