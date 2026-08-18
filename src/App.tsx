import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "SIEM Security Dashboard",
    description:
      "A security monitoring dashboard for collecting, storing and visualizing security events with correlation rules.",
    technologies: ["Python", "Flask", "SQLite", "Chart.js"],
  },
  {
    title: "Earthquake Early Warning System",
    description:
      "A machine learning system designed to estimate earthquake epicenter locations using P-wave arrival data.",
    technologies: ["Python", "Random Forest", "Django", "Machine Learning"],
  },
  {
    title: "AI Traffic Sign Recognition",
    description:
      "An AI-based system combining object detection, image processing and OCR for traffic sign text recognition.",
    technologies: ["YOLOv5", "OCR", "Python", "Computer Vision"],
  },
];

const skills = [
  "Cybersecurity",
  "Network Security",
  "Python",
  "SQL",
  "Linux",
  "Wazuh",
  "SIEM",
  "Docker",
  "AI / ML",
  "FastAPI",
  "React",
  "Git",
];

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header className="navbar">
        <a href="#home" className="logo">
          RG<span>.</span>
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "☾"}
        </button>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">CYBERSECURITY • AI • TECHNOLOGY</p>

            <h1>
              Hi, I'm <span>Ranjith</span>.
              <br />
              I build with security in mind.
            </h1>

            <p className="hero-description">
              Cybersecurity-focused technology professional interested in
              security, Python, AI, networking, automation and building
              practical technology solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-links">
              <a
                href="https://github.com/RANJITHILA"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/ila-ranjith/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* TERMINAL CARD */}
          <div className="hero-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>

              <p className="terminal-output">ranjithgoudila</p>

              <p>
                <span className="terminal-green">$</span> specialization
              </p>

              <p className="terminal-output">cybersecurity</p>

              <p>
                <span className="terminal-green">$</span> technologies
              </p>

              <p className="terminal-output">
                python + networking + AI
              </p>

              <p>
                <span className="terminal-green">$</span> interests
              </p>

              <p className="terminal-output">
                security + automation
              </p>

              <p>
                <span className="terminal-green">$</span> status
              </p>

              <p className="terminal-success">● Building</p>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>A little about me.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="large-text">
                I'm a Computer Science graduate with a specialization in
                Cybersecurity, interested in building secure systems and
                solving practical technology problems.
              </p>

              <p>
                My interests span cybersecurity, networking, Python,
                artificial intelligence, automation and full-stack
                development.
              </p>
            </div>

            <div className="about-card">
              <div>
                <strong>Cybersecurity</strong>
                <span>Security & Networking</span>
              </div>

              <div>
                <strong>Python</strong>
                <span>Automation & Development</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Machine Learning & Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">02 / SKILLS</p>
            <h2>Tools I work with.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                <span>◆</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">03 / PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <button className="project-link">
                  View Project ↗
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>My professional journey.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />

              <div>
                <p className="timeline-date">2025 — PRESENT</p>

                <h3>Technical & Digital Operations</h3>

                <p>
                  Working across technical support, digital operations,
                  social media workflows, automation and technology-related
                  activities while developing practical cybersecurity skills.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot" />

              <div>
                <p className="timeline-date">2021 — 2025</p>

                <h3>B.Tech — Computer Science & Cybersecurity</h3>

                <p>
                  Built a foundation in computer science, networking,
                  programming, cybersecurity and machine learning through
                  academic projects and practical learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CYBERSECURITY LAB */}
        <section className="section lab-section">
          <div className="section-heading">
            <p className="eyebrow">05 / CYBERSECURITY LAB</p>
            <h2>Learning by building.</h2>
          </div>

          <div className="lab-grid">
            <div className="lab-card">
              <span className="lab-status">ACTIVE</span>

              <h3>Wazuh SIEM</h3>

              <p>
                Security monitoring, log collection and security event
                analysis.
              </p>
            </div>

            <div className="lab-card">
              <span className="lab-status">LEARNING</span>

              <h3>Network Security</h3>

              <p>
                Exploring networking, reconnaissance and defensive security
                concepts.
              </p>
            </div>

            <div className="lab-card">
              <span className="lab-status">BUILDING</span>

              <h3>Security Automation</h3>

              <p>
                Exploring Python and workflow automation for security
                operations.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <p className="eyebrow">06 / CONTACT</p>

          <h2>
            Let's build something
            <br />
            <span>secure.</span>
          </h2>

          <p>
            Interested in cybersecurity, technology or collaboration?
            Feel free to connect with me.
          </p>

          <a
            href="mailto:ilaranjithgoud@gmail.com"
            className="primary-button"
          >
            Get In Touch
          </a>

          <div className="hero-links contact-links">
            <a
              href="https://github.com/RANJITHILA"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ila-ranjith/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} Ranjith Goudila</p>

        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;