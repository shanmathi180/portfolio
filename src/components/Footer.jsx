import "../styles/Footer.css"
function Footer() {
    return (
        <footer id="footer">

            <h2>Shanmathi</h2>

            <p>
                Thanks for visiting my portfolio. Let's build something amazing together.
            </p>

            <div className="social-links">
                <a href="https://github.com/shanmathi180" target="_blank"
                    rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/shanmathi-g-51b51328b" target="_blank"
                    rel="noopener noreferrer">LinkedIn</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shanmathi180@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Shanmathi">Email</a>
            </div>

            <hr />

            <p className="copyright">
                © 2026 Shanmathi. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Footer;