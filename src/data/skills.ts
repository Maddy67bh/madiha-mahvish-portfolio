export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', description: 'Core language for analysis and modeling' },
      { name: 'SQL', description: 'Querying and shaping relational data' },
      { name: 'JavaScript', description: 'Interactive tooling and web interfaces' },
    ],
  },
  {
    category: 'Data',
    skills: [
      { name: 'Pandas', description: 'Data wrangling and transformation' },
      { name: 'NumPy', description: 'Numerical computing at scale' },
      { name: 'Excel', description: 'Fast, structured analysis' },
      { name: 'Power BI', description: 'Interactive business dashboards' },
      { name: 'DAX', description: 'Calculated measures and KPIs' },
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Scikit-learn', description: 'Classical ML models and pipelines' },
      { name: 'Machine Learning', description: 'Supervised and unsupervised methods' },
      { name: 'NLP', description: 'Text processing and language models' },
    ],
  },
  {
    category: 'AI',
    skills: [
      { name: 'PyTorch', description: 'Deep learning model development' },
      { name: 'BERT', description: 'Transformer-based language understanding' },
      { name: 'Generative AI', description: 'LLM-driven applications' },
      { name: 'RAG', description: 'Retrieval-augmented generation systems' },
    ],
  },
  {
    category: 'Development',
    skills: [
      { name: 'React', description: 'Component-driven interfaces' },
      { name: 'Vite', description: 'Fast front-end tooling' },
      { name: 'Streamlit', description: 'Rapid data app prototyping' },
      { name: 'FastAPI', description: 'Lightweight Python APIs' },
      { name: 'Git', description: 'Version control workflows' },
      { name: 'GitHub', description: 'Collaboration and code hosting' },
    ],
  },
];
