import "../styles/Skills.css";
function Skills() {
    const skills = [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Django",
        "MySQL",
        "LABVIEW",
        "Process control",
        "Industrial Instrumention",
        "Sensors and Transducers",

    ];

    return (
        <section id="skills">
            <div className="container">
                <h2>My Skills</h2>

                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <h3>{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;