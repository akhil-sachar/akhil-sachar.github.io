import portfolioHero from "./assets/portfolio-hero.png";

type Project = {
  title: string;
  category: string;
  year: string;
  summary: string;
  impact: string;
  stack: string[];
  link?: string;
};

const projectLinksNote =
  "Selected projects from professional work, hackathons, and data science practice.";

const stats = [
  { label: "Years in data and AI", value: "7+" },
  { label: "MS Statistics GPA", value: "4.0" },
  { label: "Training speed gain", value: "40%" },
  { label: "Memory reduction", value: "30%" },
];

const projects: Project[] = [
  {
    title: "EmailSignal",
    category: "Hackathon AI Agents",
    year: "2026",
    summary:
      "Multi-agent decision intelligence platform that turns email activity into prioritized actions, hypotheses, and synthesized recommendations.",
    impact:
      "Recognized as Best Team Using CopilotKit at WeaveHacks 4 for agentic workflow automation and intelligent decision support.",
    stack: ["OpenAI Agents SDK", "CopilotKit", "Redis", "W&B Weave", "React"],
    link: "",
  },
  {
    title: "Solvit",
    category: "Hackathon Winner",
    year: "2026",
    summary:
      "Real-time AI whiteboard that interprets hand-drawn mathematical expressions and generates step-by-step symbolic solutions.",
    impact:
      "Won Best UI/UX at HackHayward by combining a fast React canvas experience with AI-assisted math reasoning.",
    stack: ["FastAPI", "React", "TypeScript", "Groq API", "SymPy"],
    link: "",
  },
  {
    title: "Human Resources Chatbot",
    category: "Generative AI",
    year: "2024",
    summary:
      "RAG-powered HR assistant that answers policy and organizational questions from proprietary knowledge sources.",
    impact:
      "Added retrieval evaluation, hallucination checks, memory, and dynamic prompt orchestration for dependable employee support workflows.",
    stack: ["Python", "FastAPI", "LangChain", "Docker", "Bitbucket"],
    link: "",
  },
  {
    title: "SOC Multi-Agent Security Analyst",
    category: "AI Operations",
    year: "2026",
    summary:
      "Agent-driven security operations dashboard that triages alerts, routes investigations, and presents analyst-ready findings.",
    impact:
      "Shows how agentic AI can compress noisy event streams into reviewable decisions for high-pressure operational teams.",
    stack: ["LangGraph", "FastAPI", "React", "TypeScript", "CopilotKit"],
    link: "",
  },
  {
    title: "Sales Forecasting Intelligence",
    category: "Predictive Analytics",
    year: "2022",
    summary:
      "Forecasting and regression analysis workflow for identifying business drivers and projecting sales performance.",
    impact:
      "Helped stakeholders make data-backed planning decisions across revenue, productivity, and operational spend.",
    stack: ["Python", "SQL", "Regression", "Forecasting", "Dashboards"],
    link: "",
  },
  {
    title: "Data Quality Monitoring Framework",
    category: "Data Engineering",
    year: "2024",
    summary:
      "Monitoring and evaluation framework for checking dataset reliability, model performance, and production data drift.",
    impact:
      "Improved operational visibility for machine learning systems that depended on multi-source analytical datasets.",
    stack: ["Python", "SQL", "ETL", "Validation", "Monitoring"],
    link: "",
  },
  {
    title: "NER Information Extraction Pipeline",
    category: "NLP",
    year: "2023",
    summary:
      "Named entity recognition pipeline that converts unstructured content into structured features for downstream analytics.",
    impact:
      "Made document-heavy workflows easier to search, classify, and model with repeatable NLP feature generation.",
    stack: ["spaCy", "Python", "NER", "Feature Engineering", "NLP"],
    link: "",
  },
  {
    title: "Experimentation and Model Evaluation Lab",
    category: "Statistics",
    year: "2025",
    summary:
      "Reusable analysis workspace for hypothesis testing, A/B testing, model validation, and performance comparison.",
    impact:
      "Connects statistical rigor with applied ML decisions by making experiment outcomes easier to audit and explain.",
    stack: ["R", "Python", "A/B Testing", "Statistical Inference", "Scikit-Learn"],
    link: "",
  },
  {
    title: "Semantic Retrieval Evaluation Suite",
    category: "RAG Evaluation",
    year: "2026",
    summary:
      "Evaluation pipeline for retrieval relevance, answer accuracy, and agent reliability across semantic search workflows.",
    impact:
      "Supports better RAG system quality by tracking retrieval behavior before it reaches user-facing automation.",
    stack: ["Vector Search", "W&B Weave", "Redis", "Prompt Engineering", "LLMs"],
    link: "",
  },
  {
    title: "Cost Optimization Analytics Dashboard",
    category: "Business Analysis",
    year: "2021",
    summary:
      "Recurring KPI dashboard for analyzing expenses, productivity, revenue trends, and avoidable operational costs.",
    impact:
      "Surfaced cost-saving opportunities and gave business teams a clearer view of performance levers.",
    stack: ["SQL", "Dashboards", "EDA", "KPI Reporting", "Forecasting"],
    link: "",
  },
];

const skillGroups = [
  {
    title: "Data Science",
    skills: [
      "Statistical inference",
      "Hypothesis testing",
      "Experimental design",
      "Forecasting",
      "Predictive analytics",
      "Regression analysis",
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      "Classification",
      "Random forests",
      "Gradient boosting",
      "SVM",
      "Feature engineering",
      "Model evaluation",
    ],
  },
  {
    title: "Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "AI agents",
      "Semantic retrieval",
      "Prompt engineering",
      "Question answering",
    ],
  },
  {
    title: "Engineering",
    skills: [
      "Python",
      "SQL",
      "R",
      "FastAPI",
      "Docker",
      "AWS",
      "Azure",
      "Airflow",
    ],
  },
];

const experience = [
  {
    role: "AI/ML Engineer",
    company: "Techchefz",
    date: "Apr. 2022 - Aug. 2024",
    points: [
      "Designed analytics, ETL, feature-engineering, and machine learning pipelines across multi-source datasets.",
      "Built NLP extraction and RAG applications with spaCy, LangChain, LLMs, and retrieval evaluation workflows.",
      "Improved training workflows by reducing model training time by 40% and memory utilization by 30%.",
    ],
  },
  {
    role: "Business Analyst",
    company: "Swastik Wood Products",
    date: "Sep. 2017 - Mar. 2022",
    points: [
      "Developed sales, expense, productivity, and revenue dashboards for recurring KPI reporting.",
      "Built forecasting models and regression analyses to identify business drivers and predict sales performance.",
      "Analyzed operational expenses and surfaced cost-saving opportunities through data-backed recommendations.",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Statistics, Data Science",
    school: "California State University, East Bay",
    location: "Hayward, CA",
    date: "Aug. 2024 - May 2026",
    highlights: [
      "Current graduate candidate with a 4.0 GPA.",
      "Coursework and applied focus in statistical modeling, data science, experimentation, and predictive analytics.",
      "Combines advanced statistical training with hands-on AI, analytics, and machine learning engineering.",
    ],
  },
];

function App() {
  return (
    <div className="portfolio-shell">
      <section className="hero" id="top" aria-label="Akhil Sachar portfolio">
        <img
          className="hero-image"
          src={portfolioHero}
          alt="Abstract data science workspace with analytics charts and AI workflow visuals"
        />
        <div className="hero-shade" />

        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand-lockup" href="#top" aria-label="Akhil Sachar home">
            <span className="brand-mark">AS</span>
            <span>Akhil Sachar</span>
          </a>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Data Scientist and AI/ML Engineer</p>
          <h1>Akhil Sachar</h1>
          <p className="hero-summary">
            I build analytics systems, machine learning workflows, and AI agents
            that turn complex data into decisions people can trust.
          </p>
          <div className="hero-actions" aria-label="Contact actions">
            <a href="mailto:asachar@horizon.csueastbay.edu">Email</a>
            <a
              href="https://linkedin.com/in/akhil-sachar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/akhil-sachar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="/Akhil-Sachar-Resume.pdf" download>
              Resume
            </a>
          </div>
          <div className="stat-strip" aria-label="Career highlights">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section className="intro-band" aria-labelledby="about-heading">
          <div className="section-shell intro-grid">
            <div>
              <p className="section-kicker">About</p>
              <h2 id="about-heading">
                A statistics-trained builder with production AI instincts.
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                I have 7+ years of experience across data analysis, machine
                learning, analytics automation, and generative AI. My work spans
                SQL-heavy business intelligence, statistical experimentation,
                feature pipelines, NLP extraction, RAG systems, and agentic
                applications.
              </p>
              <p>
                I am currently an MS Statistics candidate in Data Science at
                California State University, East Bay, where I combine rigorous
                statistical thinking with practical AI engineering.
              </p>
            </div>
          </div>
        </section>

        <section className="experience-band" id="experience" aria-labelledby="experience-heading">
          <div className="section-shell experience-grid">
            <div>
              <p className="section-kicker">Experience</p>
              <h2 id="experience-heading">Experience building analytics and AI systems.</h2>
            </div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.role}-${item.company}`}>
                  <span>{item.date}</span>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul className="timeline-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-band" id="education" aria-labelledby="education-heading">
          <div className="section-shell education-grid">
            <div>
              <p className="section-kicker">Education</p>
              <h2 id="education-heading">Education in statistics and data science.</h2>
            </div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-card" key={item.degree}>
                  <div className="education-meta">
                    <span>{item.date}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3>{item.degree}</h3>
                  <p className="company">{item.school}</p>
                  <ul className="education-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-band" id="skills" aria-labelledby="skills-heading">
          <div className="section-shell">
            <div className="section-heading compact">
              <p className="section-kicker">Skills</p>
              <h2 id="skills-heading">The toolkit behind the work.</h2>
            </div>
            <div className="skill-grid">
              {skillGroups.map((group) => (
                <article className="skill-panel" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-band" id="projects" aria-labelledby="projects-heading">
          <div className="section-shell">
            <div className="section-heading">
              <p className="section-kicker">Selected Work</p>
              <h2 id="projects-heading">Projects across data science, AI, and hackathons.</h2>
              <p>{projectLinksNote}</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tag-list" aria-label={`${project.title} stack`}>
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.link ? (
                    <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                      View project
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="contact-band" id="contact">
        <div className="section-shell contact-grid">
          <div>
            <p className="section-kicker">Contact</p>
            <h2>Let us build something measurable.</h2>
          </div>
          <div className="contact-links">
            <a href="mailto:asachar@horizon.csueastbay.edu">
              asachar@horizon.csueastbay.edu
            </a>
            <a href="https://linkedin.com/in/akhil-sachar" target="_blank" rel="noreferrer">
              linkedin.com/in/akhil-sachar
            </a>
            <a href="https://github.com/akhil-sachar" target="_blank" rel="noreferrer">
              github.com/akhil-sachar
            </a>
            <span>San Francisco, CA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
