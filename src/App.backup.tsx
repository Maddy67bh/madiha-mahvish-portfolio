import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import "./index.css";

const projects = [
  {
    id: "01",
    title: "AI Resume Screening",
    category: "AI / NLP",
    description: "BERT-powered resume screening system that analyzes resumes against job descriptions and generates ATS-style insights.",
    tech: "Python · BERT · NLP · Streamlit",
  },
  {
    id: "02",
    title: "Credit Risk Prediction",
    category: "Machine Learning",
    description: "Machine learning system for predicting credit risk and presenting model-driven financial insights.",
    tech: "Python · Pandas · Scikit-learn · Streamlit",
  },
  {
    id: "03",
    title: "Customer Churn Platform",
    category: "Data Science",
    description: "End-to-end customer churn analysis platform with data processing, prediction and business insights.",
    tech: "Python · ML · Pandas · Streamlit",
  },
  {
    id: "04",
    title: "E-Commerce Analytics",
    category: "Data Analytics",
    description: "Olist e-commerce analytics project exploring customers, sales patterns, locations and business performance.",
    tech: "SQL · Python · Power BI · Pandas",
  },
  {
    id: "05",
    title: "Mutual Fund Analytics",
    category: "Financial Analytics",
    description: "Financial analytics dashboard covering NAV trends, Sharpe, Sortino, Alpha, Beta and VaR metrics.",
    tech: "Python · Power BI · Financial Analytics",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site">
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <Link to="/" className="brand">MADIHA</Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#story" onClick={() => setMenuOpen(false)}>Story</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={22} /> : <span>☰</span>}
        </button>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">DATA SCIENCE · AI / ML</p>
          <h1>
            Madiha
            <br />
            <em>Mahvish</em>
          </h1>
          <p className="hero-text">
            Data Science student building practical AI, machine learning
            and analytics solutions with Python, SQL and Power BI.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="secondary-btn">Let's Connect</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-card">
            <img src="/portrait.jpg" alt="Madiha Mahvish" />
          </div>
          <div className="hero-circle">AI · DATA · ML</div>
        </div>
      </section>

      <section id="story" className="intro-section">
        <div className="section-number">01</div>
        <div>
          <p className="eyebrow">MY STORY</p>
          <h2>
            Turning data into
            <br />
            <em>useful intelligence.</em>
          </h2>
          <p className="body-copy">
            I am a B.Tech Data Science student at JNTUH College of Engineering
            Hyderabad, focused on Data Analytics, Artificial Intelligence and
            Machine Learning. I enjoy transforming raw data into clear
            insights and building practical applications around AI.
          </p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-header">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects <em>&amp; Experiments</em></h2>
          </div>
          <span className="project-count">05 PROJECTS</span>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              className="project-row"
              key={project.id}
            >
              <span className="project-id">{project.id}</span>

              <div className="project-main">
                <div className="project-title-line">
                  <h3>{project.title}</h3>
                  <ArrowUpRight className="project-arrow" size={24} />
                </div>
                <p>{project.description}</p>
                <span className="project-tech">{project.tech}</span>
              </div>

              <span className="project-category">{project.category}</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-number">03</div>
        <div className="skills-content">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>What I <em>work with</em></h2>

          <div className="skills-grid">
            {[
              "Python",
              "SQL",
              "Pandas",
              "NumPy",
              "Power BI",
              "Machine Learning",
              "Artificial Intelligence",
              "NLP / BERT",
              "Streamlit",
              "FastAPI",
              "Data Visualization",
              "Git / GitHub",
            ].map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>
          Let's build something
          <br />
          <em>meaningful.</em>
        </h2>

        <div className="contact-links">
          <a href="mailto:hello@example.com">
            <Mail size={18} /> Email
          </a>
          <a href="https://github.com/Maddy67bh" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/madiha-mahvish-6a95a12a4" target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} MADIHA MAHVISH</span>
        <span>DATA · AI · INTELLIGENCE</span>
      </footer>
    </main>
  );
}
