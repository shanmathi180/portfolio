
import "../styles/Projects.css";

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Sweets & Bakery Website Catalog",
            description: "A responsive bakery website designed as a sample project for showcasing freelance web development services.",
            tech: ["React", "JavaScript", "CSS", "Responsive Design"],
            live: "https://sweets-bakery-catalog-website.vercel.app/",
            image: "/bakery.png"
        },
        {
            id: 2,
            title: "AI Food Ordering App",
            description: "A MERN-based food ordering platform with AI-powered review analysis.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
            github: "https://github.com/shanmathi180/Full-Stack-Food-Ordering-App",
            image: "/food.png"
        },
        {
            id: 3,
            title: "Digital Twin Level Control",
            description: "Industrial digital twin for monitoring and controlling liquid level.",
            tech: ["ESP32", "Process Control", "Sensors and Transducers", "React", "Node.js"],
            github: "https://github.com/shanmathi180/Digital-Twin-Level-Control",
            image: "/DT.png"
        },

    ];

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-container">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} />

                        <div className="project-content">
                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tech-stack">
                                {project.tech.map((tech, index) => (
                                    <span key={index}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-buttons">
                                {project.github && (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.github}
                                        className="github-btn"
                                    >
                                        GitHub
                                    </a>
                                )}

                                {project.live && (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.live}
                                        className="github-btn"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="more-projects">
                <a
                    href="https://github.com/shanmathi180?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-more-btn"
                >
                    View More Projects →
                </a>
            </div>
        </section>
    );
}

export default Projects;
