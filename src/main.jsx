import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Brain,
  Database,
  BarChart3,
  Code2,
  ChevronRight
} from "lucide-react"
import "./index.css"

const skills = [
  "Python",
  "SQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "PyTorch",
  "BERT",
  "NLP",
  "Machine Learning",
  "GenAI",
  "RAG",
  "LLM",
  "Power BI",
  "DAX",
  "Excel",
  "Streamlit",
  "FastAPI"
]

const projects = [
  {
    id: "resume",
    number: "01",
    title: "AI Resume Screening",
    short: "AI-powered resume and job-description matching using NLP and BERT.",
    description:
      "An AI-based resume screening system designed to compare resumes with job descriptions and identify relevant matches using NLP, embeddings and BERT-based techniques.",
    tech: ["Python", "BERT", "NLP", "Machine Learning", "Streamlit"],
    icon: Brain
  },
  {
    id: "credit",
    number: "02",
    title: "Credit Risk Prediction",
    short: "Machine learning system for predicting customer credit risk.",
    description:
      "A machine learning project that processes customer and financial features to predict credit risk and present model-driven insights in an understandable format.",
    tech: ["Python", "Pandas", "Scikit-learn", "ML", "Data Analysis"],
    icon: Database
  },
  {
    id: "churn",
    number: "03",
    title: "AI Customer Churn Platform",
    short: "Predicting customer churn and identifying important retention signals.",
    description:
      "An analytics and machine learning platform focused on customer churn prediction, feature analysis and actionable business insights.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning", "Analytics"],
    icon: Sparkles
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-Commerce Analytics",
    short: "Sales, customer and product analytics dashboard.",
    description:
      "An e-commerce analytics project focused on revenue, orders, customers, products and business performance using data analysis and Power BI.",
    tech: ["Python", "SQL", "Power BI", "DAX", "Excel"],
    icon: BarChart3
  }
]

function App() {
  const [menu, setMenu] = useState(false)
  const [selected, setSelected] = useState(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }

    window.addEventListener("scroll", onScroll)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el))

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  const scrollTo = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMenu(false)
  }

  return (
    <div className="site">

      <div className="progress" style={{ width: `${progress}%` }} />

      <nav className="nav">
        <div className="nav-logo" onClick={() => scrollTo("home")}>
          MM<span>.</span>
        </div>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("skills")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>

        <button className="menu-btn" onClick={() => setMenu(!menu)}>
          {menu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <main>

        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-grid" />

          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="dot" />
              DATA SCIENCE • AI/ML • ANALYTICS
            </div>

            <h1>
              Madiha
              <br />
              <em>Mahvish.</em>
            </h1>

            <p className="hero-text">
              Building practical solutions with data, machine learning,
              artificial intelligence and analytics.
            </p>

            <div className="hero-buttons">
              <button
                className="btn primary"
                onClick={() => scrollTo("projects")}
              >
                Explore Projects
                <ArrowUpRight size={17} />
              </button>

              <a
                className="btn"
                href="https://github.com/Maddy67bh"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="portrait-ring">
              <div className="portrait-wrap">
                <img
                  src="/portrait.jpg"
                  alt="Madiha Mahvish"
                />
              </div>
            </div>

            <div className="float-card card-one">
              <Code2 size={18} />
              <span>Python</span>
            </div>

            <div className="float-card card-two">
              <Brain size={18} />
              <span>Machine Learning</span>
            </div>

            <div className="float-card card-three">
              <BarChart3 size={18} />
              <span>Data Analytics</span>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <div />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-label reveal">01 — ABOUT</div>

          <div className="about-grid">
            <h2 className="reveal">
              Data with
              <br />
              <em>purpose.</em>
            </h2>

            <div className="about-content reveal">
              <p>
                I’m Madiha Mahvish, a B.Tech Data Science student interested
                in Data Science, AI/ML and Data Analytics.
              </p>

              <p>
                I enjoy turning raw data into useful insights and building
                practical applications using Python, machine learning,
                NLP, GenAI and business intelligence tools.
              </p>

              <div className="about-line">
                <span>FOCUS</span>
                <strong>DATA → INSIGHT → SOLUTION</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills">
          <div className="section-label reveal">02 — SKILLS</div>

          <div className="skills-head reveal">
            <h2>
              Tools I <em>work with.</em>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                className="skill reveal"
                style={{ transitionDelay: `${index * 35}ms` }}
                key={skill}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="section-label reveal">03 — PROJECTS</div>

          <div className="projects-head reveal">
            <h2>
              Selected <em>work.</em>
            </h2>

            <p>
              Click any project to open its details.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <button
                  className="project-card reveal tilt"
                  key={project.id}
                  onClick={() => setSelected(project)}
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  <div className="project-number">{project.number}</div>

                  <div className="project-icon">
                    <Icon size={24} />
                  </div>

                  <div className="project-main">
                    <h3>{project.title}</h3>
                    <p>{project.short}</p>
                  </div>

                  <div className="project-arrow">
                    <ChevronRight size={25} />
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="section-label reveal">04 — CONTACT</div>

          <div className="contact-box reveal">
            <div>
              <div className="eyebrow">
                <span className="dot" />
                OPEN TO OPPORTUNITIES
              </div>

              <h2>
                Let’s build
                <br />
                <em>something useful.</em>
              </h2>

              <p>
                Interested in Data Science, AI/ML, Data Analytics,
                internships, entry-level opportunities and collaborations.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:madiha.mahvish@gmail.com">
                <Mail size={18} />
                Email
                <ExternalLink size={15} />
              </a>

              <a
                href="https://github.com/Maddy67bh"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
                <ExternalLink size={15} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <span>© 2026 MADIHA MAHVISH</span>
        <span>DATA SCIENCE • AI/ML • ANALYTICS</span>
      </footer>

      {/* PROJECT MODAL */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>

            <div className="modal-number">
              PROJECT {selected.number}
            </div>

            <h2>{selected.title}</h2>

            <p className="modal-description">
              {selected.description}
            </p>

            <div className="modal-tech">
              {selected.tech.map(item => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="modal-footer">
              <span>PROJECT DETAILS</span>
              <button onClick={() => setSelected(null)}>
                Close
                <X size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

createRoot(document.getElementById("root")).render(<App />)

