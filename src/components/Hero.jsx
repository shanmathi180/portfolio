import "../styles/Hero.css";
function Hero() {
    return (
        <section id="hero">
            <div className="social">
                {/* icons */}
            </div>

            <div className="hero-content">
                <h1>Hi, I'am Shanmathi</h1>
                <p><b>Full Stack Developer</b></p>
                <p>
                    I build responsive, user-friendly, and full-stack web applications. I enjoy solving real-world problems through clean and efficient code. I am also available for freelance web development projects and enjoy helping businesses and individuals bring their ideas to life with modern, scalable websites.</p>

            </div>

            <div className="hero-image">
                <img className="blob" src="/profile.png" alt="Profile" />

            </div>
        </section>
    )
}
export default Hero;