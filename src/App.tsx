import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, BrainCircuit, BarChart3, Code2, Database, Github, Linkedin, Mail, Menu, Sparkles, X } from "lucide-react";
import "./index.css";

const projects = [
  { id:"01", title:"AI Resume Screening", category:"AI / NLP", description:"BERT-powered resume screening platform that analyzes resumes against job descriptions, extracts skills and generates ATS-style matching insights.", tech:["Python","BERT","NLP","Streamlit"] },
  { id:"02", title:"Credit Risk Prediction", category:"MACHINE LEARNING", description:"Machine learning application for predicting credit risk and transforming financial data into understandable decision-support insights.", tech:["Python","Pandas","Scikit-learn","Streamlit"] },
  { id:"03", title:"Customer Churn Platform", category:"DATA SCIENCE", description:"End-to-end customer churn analytics platform combining data preparation, machine learning and interactive business insights.", tech:["Python","ML","Pandas","Streamlit"] },
  { id:"04", title:"E-Commerce Analytics", category:"DATA ANALYTICS", description:"Olist e-commerce analytics project exploring customers, sales patterns, geography and business performance through dashboards.", tech:["SQL","Python","Power BI","Pandas"] },
  { id:"05", title:"Mutual Fund Analytics", category:"FINANCIAL ANALYTICS", description:"Interactive financial analytics dashboard covering NAV trends, Sharpe, Sortino, Alpha, Beta and VaR metrics.", tech:["Python","Power BI","Finance","Analytics"] }
];

const skills = ["Python","SQL","Pandas","NumPy","Power BI","Machine Learning","Artificial Intelligence","NLP","BERT","Streamlit","FastAPI","Data Visualization","Git","GitHub"];

export default function App() {
  const [menu,setMenu] = useState(false);
  const [active,setActive] = useState(0);
  const [scroll,setScroll] = useState(0);

  useEffect(()=>{
    const fn=()=>setScroll(window.scrollY);
    window.addEventListener("scroll",fn);
    const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
    return()=>{window.removeEventListener("scroll",fn);obs.disconnect()};
  },[]);

  const go=(id:string)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"})};

  return (
    <div className="portfolio">
      <div className="noise"/>
      <div className="cursor-glow" style={{transform:`translate(${scroll*.02}px,${scroll*.01}px)`}}/>

      <nav className={`navbar ${scroll>40?"solid":""}`}>
        <button className="logo" onClick={()=>go("home")}>MADIHA<span>.</span></button>
        <div className={`nav-menu ${menu?"open":""}`}>
          <button onClick={()=>go("about")}>ABOUT</button>
          <button onClick={()=>go("projects")}>PROJECTS</button>
          <button onClick={()=>go("skills")}>SKILLS</button>
          <button onClick={()=>go("contact")}>CONTACT</button>
        </div>
        <button className="mobile-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
      </nav>

      <section id="home" className="hero">
        <div className="grid-bg"/>
        <div className="glow glow-a"/><div className="glow glow-b"/>

        <div className="hero-left reveal">
          <div className="availability"><span/> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="label">DATA SCIENCE · AI / ML · ANALYTICS</p>
          <h1>Madiha<br/><i>Mahvish</i></h1>
          <p className="hero-text">I build intelligent, data-driven products by combining analytics, machine learning and artificial intelligence.</p>
          <div className="hero-buttons">
            <button className="primary" onClick={()=>go("projects")}>EXPLORE MY WORK <ArrowUpRight/></button>
            <button className="outline" onClick={()=>go("contact")}>CONTACT ME</button>
          </div>
        </div>

        <div className="hero-art reveal">
          <div className="orbit o1"/><div className="orbit o2"/><div className="orbit o3"/>
          <div className="portrait-wrap">
            <div className="portrait">
              <div className="front"><img src="/portrait.jpg" alt="Madiha Mahvish"/></div>
              <div className="back"><b>MADIHA</b><span>DATA · AI · ML</span></div>
            </div>
          </div>
          <div className="float-card fc1"><BrainCircuit/><span>AI / ML</span></div>
          <div className="float-card fc2"><BarChart3/><span>ANALYTICS</span></div>
          <div className="float-card fc3"><Sparkles/><span>CREATIVE DATA</span></div>
        </div>

        <button className="scroll" onClick={()=>go("about")}>SCROLL <ArrowDown/></button>
      </section>

      <section id="about" className="section about">
        <div className="num">01</div>
        <div className="container">
          <p className="label reveal">ABOUT ME</p>
          <h2 className="reveal">Curious mind.<br/><i>Data-driven thinking.</i></h2>
          <div className="about-grid">
            <p className="big reveal">I am a B.Tech Data Science student at JNTUH College of Engineering Hyderabad, passionate about turning raw data into meaningful insights and practical intelligent applications.</p>
            <div className="details reveal">
              <div><span>EDUCATION</span><b>B.Tech · Data Science</b><small>JNTUH College of Engineering Hyderabad</small></div>
              <div><span>FOCUS</span><b>Data · AI · Machine Learning</b><small>Analytics & Intelligent Applications</small></div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects">
        <div className="num">02</div>
        <div className="container">
          <p className="label reveal">SELECTED WORK</p>
          <h2 className="reveal">Projects <i>& experiments.</i></h2>

          <div className="projects-grid">
            <div className="project-list">
              {projects.map((p,i)=>(
                <Link to={`/projects/${p.id}`} className={`project ${active===i?"active":""}`} key={p.id} onMouseEnter={()=>setActive(i)}>
                  <span className="pnum">{p.id}</span>
                  <div><small>{p.category}</small><h3>{p.title}</h3></div>
                  <ArrowUpRight className="picon"/>
                </Link>
              ))}
            </div>

            <div className="project-card">
              <div className="card-bg-number">{projects[active].id}</div>
              <Sparkles className="spark"/>
              <small>{projects[active].category}</small>
              <h3>{projects[active].title}</h3>
              <p>{projects[active].description}</p>
              <div className="tags">{projects[active].tech.map(t=><span key={t}>{t}</span>)}</div>
              <Link to={`/projects/${projects[active].id}`} className="view">VIEW PROJECT <ArrowUpRight/></Link>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="num">03</div>
        <div className="container">
          <p className="label reveal">TOOLKIT</p>
          <h2 className="reveal">Things I <i>work with.</i></h2>
          <div className="skill-icons reveal">
            <div><Code2/><b>CODE</b></div><div><Database/><b>DATA</b></div><div><BrainCircuit/><b>AI / ML</b></div><div><BarChart3/><b>ANALYTICS</b></div>
          </div>
          <div className="skill-cloud reveal">{skills.map((s,i)=><span key={s} style={{animationDelay:`${i*.05}s`}}>{s}</span>)}</div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="num">04</div>
        <div className="container reveal">
          <p className="label">LET'S CONNECT</p>
          <h2>Have an idea?<br/><i>Let's build it.</i></h2>
          <p className="contact-text">Open to internships, data science opportunities, AI/ML projects and meaningful collaborations.</p>
          <div className="contact-links">
            <a href="mailto:hello@example.com"><Mail/> EMAIL</a>
            <a href="https://github.com/Maddy67bh" target="_blank" rel="noreferrer"><Github/> GITHUB</a>
            <a href="https://www.linkedin.com/in/madiha-mahvish-6a95a12a4" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN</a>
          </div>
        </div>
      </section>

      <footer><span>© {new Date().getFullYear()} MADIHA MAHVISH</span><span>DATA · AI · INTELLIGENCE</span><span>BUILT WITH CURIOSITY</span></footer>
    </div>
  );
}
