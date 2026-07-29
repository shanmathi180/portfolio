import "../styles/About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function About() {
    return (
        <section id="about">
            <div>
                <h2 >About Me</h2>

                <p>
                    I am a final-year Electronics and Instrumentation Engineering student passionate about both industrial automation and software development. I enjoy working on control systems, process control, sensors, and instrumentation while also building responsive full-stack web applications using modern technologies.
                    <br />
                    <br />

                    Through academic and personal projects, I have combined engineering principles with software development to solve real-world problems and strengthen my practical skills. I am always eager to learn new technologies, take on challenging projects, and continuously improve as an engineer.
                    <br />
                    <br />

                    I am currently seeking internship and full-time opportunities in Control Systems, Industrial Automation, Electronics & Instrumentation, or Full-Stack Software Development, where I can contribute, learn, and grow.

                </p>
            </div>
            <div className="about-icons">
                <a href="https://github.com/shanmathi180" target="_blank"
                    rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/shanmathi-g-51b51328b" target="_blank"
                    rel="noopener noreferrer"><FaLinkedin /></a>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=shanmathi180@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Shanmathi"
                >
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
}

export default About;