export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  size: 'large' | 'medium' | 'small';
}

const GITHUB = 'https://github.com/Maddy67bh';

export const projects: Project[] = [
  {
    id: 'ai-resume-screening',
    title: 'AI Resume Screening — BERT',
    description:
      'ATS-style resume and job-description analyzer with NLP, role prediction, skill extraction, matched/missing skills and scoring.',
    tech: ['Python', 'Streamlit', 'BERT', 'NLP', 'ML'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'large',
  },
  {
    id: 'ecommerce-analytics',
    title: 'E-Commerce Sales & Customer Analytics',
    description:
      'Olist-based analytics project covering customer behavior, sales insights, SQL analysis and an interactive Power BI dashboard.',
    tech: ['Python', 'SQL', 'Power BI', 'Pandas', 'DAX'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'large',
  },
  {
    id: 'mutual-fund-capstone',
    title: 'Mutual Fund Analytics Capstone',
    description:
      'Investment analytics dashboard with NAV trends, Sharpe, Sortino, Alpha, Beta, VaR and AUM-focused reporting.',
    tech: ['Python', 'Pandas', 'Power BI', 'Finance'],
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com/Maddy67bh/mutual-fund-capstone',
    size: 'medium',
  },
  {
    id: 'ai-customer-churn',
    title: 'AI Customer Churn Platform',
    description:
      'Machine-learning workflow for customer churn prediction, feature analysis and actionable retention insights.',
    tech: ['Python', 'Pandas', 'Machine Learning', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'medium',
  },
  {
    id: 'credit-risk',
    title: 'AI Credit Risk Prediction',
    description:
      'Credit-risk prediction system built around exploratory analysis, feature engineering and ML-based risk classification.',
    tech: ['Python', 'Scikit-learn', 'ML', 'Streamlit'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'small',
  },
  {
    id: 'financial-intelligence',
    title: 'AI Financial Intelligence Platform',
    description:
      'FastAPI financial analytics platform with company data, SQLite persistence, endpoints and clustering-oriented insights.',
    tech: ['Python', 'FastAPI', 'SQLite', 'KMeans', 'AI'],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'small',
  },
  {
    id: 'cybersafe',
    title: 'CyberSafe Phone Analyzer',
    description:
      'FastAPI service for phone-number analysis with structured validation and API responses for security-focused workflows.',
    tech: ['Python', 'FastAPI', 'REST API', 'Security'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'small',
  },
  {
    id: 'nlp-job-matcher',
    title: 'NLP Resume–Job Matcher',
    description:
      'NLP matching workflow designed to compare resumes with job descriptions using text processing and semantic similarity.',
    tech: ['Python', 'NLP', 'spaCy', 'Sentence Transformers'],
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'medium',
  },
  {
    id: 'resq-ai',
    title: 'RESQ-AI',
    description:
      'Emergency decision-support and hospital matching concept designed to help route patients toward appropriate care faster.',
    tech: ['React Native', 'Expo', 'TypeScript', 'FastAPI', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'medium',
  },
  {
    id: 'docintel-ai',
    title: 'DocIntel-AI',
    description:
      'Document intelligence concept using retrieval-augmented generation for question answering over private documents.',
    tech: ['Python', 'FastAPI', 'RAG', 'GenAI'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'small',
  },
  {
    id: 'sales-performance',
    title: 'Business Sales Performance Analytics',
    description:
      'Interactive dashboard concept for sales trends, performance drivers, KPIs and business decision support.',
    tech: ['Power BI', 'DAX', 'Excel', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    github: GITHUB,
    size: 'small',
  },
];
