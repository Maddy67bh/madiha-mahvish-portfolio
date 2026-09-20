import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

const projects: Record<string, any> = {
  "01": {
    number: "01",
    title: "AI Resume Screening",
    type: "AI / NLP",
    description: "BERT-powered resume screening system that analyzes resumes against job descriptions, extracts skills and generates ATS-style matching insights.",
    tech: ["Python", "BERT", "NLP", "Streamlit", "Pandas", "PyPDF"],
    features: ["Resume PDF Analysis", "Job Description Matching", "Skill Extraction", "ATS Score", "Matched Skills", "Missing Skills"],
    github: "#",
    demo: "#"
  },
  "02": {
    number: "02",
    title: "Credit Risk Prediction",
    type: "MACHINE LEARNING",
    description: "Machine learning application for predicting credit risk and presenting model-driven financial insights through an interactive interface.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Streamlit"],
    features: ["Data Preprocessing", "Risk Prediction", "Feature Analysis", "ML Model", "Interactive Prediction", "Financial Insights"],
    github: "#",
    demo: "#"
  },
  "03": {
    number: "03",
    title: "Customer Churn Platform",
    type: "DATA SCIENCE",
    description: "Customer analytics and machine learning platform designed to identify churn patterns and generate actionable business insights.",
    tech: ["Python", "Pandas", "NumPy", "Machine Learning", "Streamlit"],
    features: ["Customer Analysis", "Churn Prediction", "Feature Engineering", "Segmentation", "Business Insights", "Analytics"],
    github: "#",
    demo: "#"
  },
  "04": {
    number: "04",
    title: "E-Commerce Analytics",
    type: "DATA ANALYTICS",
    description: "Olist e-commerce analytics project using Python, SQL and Power BI to understand customers, sales, geography and business performance.",
    tech: ["Python", "SQL", "Power BI", "Pandas", "DAX"],
    features: ["Customer Analytics", "Sales Analysis", "Geographic Analysis", "Customer Behavior", "Business KPIs", "Power BI Dashboard"],
    github: "#",
    demo: "#"
  },
  "05": {
    number: "05",
    title: "Mutual Fund Analytics",
    type: "FINANCIAL ANALYTICS",
    description: "Financial analytics dashboard analyzing historical NAV data, investment performance and risk-return metrics.",
    tech: ["Python", "Power BI", "Pandas", "DAX", "Financial Analytics"],
    features: ["NAV Analysis", "Sharpe Ratio", "Sortino Ratio", "Alpha", "Beta", "Value at Risk"],
    github: "#",
    demo: "#"
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects[id || ""];

  if (!project) {
    return (
      <main className="project-page section-cream">
        <h1>Project Not Found</h1>
        <Link to="/">Back Home</Link>
      </main>
    );
  }

  return (
    <main className="project-page section-cream">

      <header className="project-page-nav">
        <Link to="/" className="logo">Madiha</Link>

        <Link to="/#projects" className="back-link">
          <ArrowLeft size={18} />
          All Projects
        </Link>
      </header>

      <section className="project-hero">

        <div className="project-meta">
          <span>{project.number}</span>
          <span>{project.type}</span>
        </div>

        <h1>{project.title}</h1>

        <p className="project-lead">
          {project.description}
        </p>

        <div className="project-actions">
          <a href={project.github} className="project-button">
            <Github size={19} />
            GitHub
            <ArrowUpRight size={18} />
          </a>

          <a href={project.demo} className="project-button secondary">
            Live Demo
            <ArrowUpRight size={18} />
          </a>
        </div>

      </section>

      <section className="project-details">

        <div className="project-detail-block">

          <p className="eyebrow">TECHNOLOGIES</p>

          <div className="technology-list">
            {project.tech.map((technology: string) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

        </div>

        <div className="project-detail-block">

          <p className="eyebrow">KEY FEATURES</p>

          <div className="feature-list">

            {project.features.map((feature: string, index: number) => (
              <div className="feature-item" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature}</h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="project-next">

        <p className="eyebrow dark">BACK TO WORK</p>

        <Link to="/#projects">
          View all projects
          <ArrowUpRight size={24} />
        </Link>

      </section>

      <footer className="footer project-footer">
        <span>Madiha Mahvish</span>
        <span>Data Science · AI · ML</span>
        <span>© 2026</span>
      </footer>

    </main>
  );
}
