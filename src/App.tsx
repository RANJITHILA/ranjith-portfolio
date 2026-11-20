import { useEffect, useState } from "react";
import "./App.css";

const interests = [
  {
    title: "Cybersecurity",
    label: "SECURITY / RESEARCH",
    description:
      "Exploring vulnerabilities, defensive security, security research, policies and compliance.",
  },
  {
    title: "AI × Automation",
    label: "BUILD / AUTOMATE",
    description:
      "Using AI, Python and automation to solve real-world problems and improve workflows.",
  },
];

const projects = [
  {
    category: "SECURITY",
    title: "SIEM Security Dashboard",
    description:
      "A dashboard for collecting, storing and visualizing security events with correlation rules.",
    technologies: "Python · Flask · SQLite · Chart.js",
  },
  {
    category: "MACHINE LEARNING",
    title: "Earthquake Early Warning",
    description:
      "A machine learning system that estimates earthquake epicenter locations using P-wave arrival data.",
    technologies: "Python · Random Forest · Django",
  },
  {
    category: "AI / COMPUTER VISION",
    title: "Traffic Sign Recognition",
    description:
      "An AI system combining object detection, image processing and OCR to recognize traffic sign text.",
    technologies: "YOLOv5 · OCR · Python",
  },
];

const personalInterests = [
  { title: "Music", description: "Songs, artists and sounds I keep coming back to." },
  { title: "Travel", description: "Places I visit and moments worth remembering." },
  { title: "Video Editing", description: "Visual experiments, edits and creative projects." },
  { title: "Badminton", description: "A favourite way to step away from a screen." },
];

const navItems = [
  { label: "Home", id: "home", icon: "⌂" },
  { label: "About", id: "about", icon: "◎" },
  { label: "Security", id: "cybersecurity", icon: "◇" },
  { label: "Projects", id: "projects", icon: "▧" },
  { label: "Creative", id: "creative", icon: "✳" },
  { label: "Journal", id: "journal", icon: "≡" },
  { label: "Contact", id: "contact", icon: "↗" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      ".about-heading, .about-main, .about-details, .about-footer, .section-label, .section-intro, .interest-row, .proof-placeholder, .feature-content, .project-row, .personal-card, .media-heading, .media-placeholder, .journal-intro, .journal-empty, .contact-section > *, .footer > *"
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal-on-scroll");
      revealObserver.observe(element);
    });

    const themedSections = document.querySelectorAll(
      ".hero-section, .about-page, .security-section, .automation-section, .projects-section, .creative-section, .media-section, .journal-section, .contact-section"
    );

    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.documentElement.dataset.activeTheme =
              entry.target.classList.contains("security-section") ||
              entry.target.classList.contains("automation-section") ||
              entry.target.classList.contains("media-section") ||
              entry.target.classList.contains("hero-section")
                ? "dark"
                : "light";
          }
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );

    themedSections.forEach((section) => themeObserver.observe(section));

    // Bottom floating navigation active section tracking
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) navObserver.observe(section);
    });

    return () => {
      revealObserver.disconnect();
      themeObserver.disconnect();
      navObserver.disconnect();
      delete document.documentElement.dataset.activeTheme;
    };
  }, []);

  return (
    <div className="site">
      {/* HERO */}
      <main>
        <section id="home" className="hero-section">
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="hero-eyebrow">PERSONAL WEBSITE </p>
            <h1>
              hi, i'm
              <br />
              <span>ranjith.</span>
            </h1>
            <p className="hero-role">
              CYBERSECURITY · AI AUTOMATION · TECHNOLOGY
            </p>
            <p className="hero-location">hyderabad, india</p>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <a href="#about" aria-label="Scroll to About">
              ↓
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-page">
          <div className="about-inner">
            <div className="about-heading">
              <h2>ABOUT</h2>
            </div>

            <div className="about-layout">
              <div className="about-main">
                <p className="about-lead">
                  I'm <span className="name-pill">Ranjith Ila</span>, based in
                  Hyderabad, India. I'm a Computer Science graduate focused on
                  cybersecurity and drawn to the systems behind technology: how they
                  work, where they break, and how they can be made more useful.
                </p>

                <p className="about-copy">
                  I explore vulnerability research, defensive security, networking,
                  AI and automation. I enjoy understanding technical problems and
                  building practical solutions through scripting, experiments and
                  projects.
                </p>

                <p className="about-copy">
                  Away from technology, I enjoy music, travelling, photography,
                  video editing and badminton. This website is my personal space to
                  share what I build, learn, create and discover.
                </p>

                <div className="about-contact">
                  <p>
                    Interested in technology, security or a good idea? Feel free
                    to reach out.
                  </p>
                  <a href="mailto:ilaranjithgoud@gmail.com">GET IN TOUCH ↗</a>
                </div>
              </div>

              <aside className="about-details">
                <div className="detail-row">
                  <span>EDUCATION</span>
                  <strong>B.Tech · Computer Science</strong>
                  <small>Cyber Security · 2025</small>
                </div>

                <div className="detail-row">
                  <span>FOCUS</span>
                  <strong>Security · AI · Automation</strong>
                </div>

                <div className="detail-row">
                  <span>TECHNOLOGIES</span>
                  <strong>Python · SQL · Networking</strong>
                </div>

                <div className="detail-row">
                  <span>OUTSIDE TECH</span>
                  <strong>Music · Travel · Badminton</strong>
                </div>

                <div className="detail-row">
                  <span>BASED IN</span>
                  <strong>Hyderabad, India</strong>
                </div>
              </aside>
            </div>

            <div className="about-footer">
              <span>A LITTLE ABOUT ME</span>
            </div>
          </div>
        </section>

        {/* CYBERSECURITY */}
        <section id="cybersecurity" className="content-section security-section">
          <div className="section-label">
            <span>CYBERSECURITY</span>
          </div>

          <div className="section-intro">
            <p className="section-kicker">SECURITY / RESEARCH</p>
            <h2>
              I like finding
              <br />
              <em>where things break.</em>
            </h2>
            <p>
              Exploring vulnerabilities, defensive security, security research,
              policies, compliance and the systems that keep technology secure.
            </p>
          </div>

          <div className="interest-list">
            {interests.map((item) => (
              <article className="interest-row" key={item.title}>
                <div className="row-main">
                  <span className="row-label">{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <span className="row-arrow">↗</span>
              </article>
            ))}
          </div>

          <div className="proof-placeholder">
            <span>PROOF OF WORK</span>
            <p>
              Security lab screenshots, research notes, demonstrations and technical
              write-ups will appear here.
            </p>
          </div>
        </section>

        {/* AI AUTOMATION */}
        <section className="feature-section automation-section">
          <div className="feature-content">
            <p className="section-kicker">AI × AUTOMATION</p>
            <h2>
              Find a problem.
              <br />
              <em>Automate it.</em>
            </h2>
            <p>
              I enjoy identifying repetitive tasks and creating scripts, workflows
              and AI-powered automations that solve practical problems.
            </p>

            <div className="process-line">
              <span>PROBLEM</span>
              <i>→</i>
              <span>IDEA</span>
              <i>→</i>
              <span>AUTOMATION</span>
              <i>→</i>
              <span>RESULT</span>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="content-section projects-section">
          <div className="section-label">
            <span>THINGS I'VE BUILT</span>
          </div>

          <div className="section-intro">
            <p className="section-kicker">SELECTED WORK</p>
            <h2>
              Building is how
              <br />
              <em>I learn.</em>
            </h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <small>{project.technologies}</small>
                </div>
                <span className="project-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* CREATIVE */}
        <section id="creative" className="content-section creative-section">
          <div className="section-label">
            <span>OUTSIDE TECHNOLOGY</span>
          </div>

          <div className="section-intro">
            <p className="section-kicker">THE OTHER SIDE</p>
            <h2>
              Technology isn't
              <br />
              <em>everything.</em>
            </h2>
            <p>
              A collection of things I enjoy, moments I capture and creative work I
              make outside my technical projects.
            </p>
          </div>

          <div className="personal-grid">
            {personalInterests.map((item) => (
              <article className="personal-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-line" />
              </article>
            ))}
          </div>
        </section>

        {/* MEDIA */}
        <section className="media-section">
          <div className="media-heading">
            <h2>
              Random
              <br />
              <em>frames.</em>
            </h2>
          </div>

          <div className="media-grid">
            <div className="media-placeholder large">
              <span>PHOTOGRAPHY</span>
              <p>Your photographs will appear here.</p>
            </div>

            <div className="media-placeholder">
              <span>VIDEO EDITING</span>
              <p>Your video work will appear here.</p>
            </div>

            <div className="media-placeholder">
              <span>TRAVEL</span>
              <p>Travel stories and photographs.</p>
            </div>

            <div className="media-placeholder">
              <span>MUSIC</span>
              <p>Music discoveries and favourites.</p>
            </div>
          </div>
        </section>

        {/* JOURNAL */}
        <section id="journal" className="content-section journal-section">
          <div className="section-label">
            <span>JOURNAL</span>
          </div>

          <div className="journal-intro">
            <p className="section-kicker">NOTES / BLOG</p>
            <h2>
              Things I've
              <br />
              <em>learned along the way.</em>
            </h2>
            <p>
              Cybersecurity research, technical experiments, automation and ideas
              worth writing about.
            </p>
          </div>

          <div className="journal-empty">
            <span>FIRST POST COMING SOON</span>
            <p>A growing collection of notes, experiments and ideas.</p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <p className="section-kicker">GET IN TOUCH</p>
          <h2>
            Let's talk about
            <br />
            <em>something interesting.</em>
          </h2>

          <a href="mailto:ilaranjithg@gmail.com" className="email-link">
            ilaranjithg@gmail.com ↗
          </a>

          <div className="social-links">
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
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://x.com/YOUR_TWITTER_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter / X ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>RANJITH GOUDILA</span>
        <span>CYBERSECURITY · AI · TECHNOLOGY</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>

      {/* BOTTOM DYNAMIC ISLAND NAVIGATION */}
      <nav className="dynamic-island" aria-label="Site navigation">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`island-item ${activeSection === item.id ? "active" : ""}`}
            aria-label={item.label}
            title={item.label}
          >
            <span className="island-icon">{item.icon}</span>
            <span className="island-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

export default App;