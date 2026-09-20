import { motion } from 'framer-motion';

interface Milestone {
  title: string;
  detail: string;
}

const MILESTONES: Milestone[] = [
  {
    title: 'B.Tech in Data Science',
    detail: 'Building a foundation in statistics, programming and machine learning.',
  },
  {
    title: 'Data Science Projects',
    detail:
      'Hands-on work spanning NLP, predictive modeling and business intelligence dashboards.',
  },
  {
    title: 'Power BI & Analytics',
    detail: 'Developing interactive dashboards to turn raw business data into decisions.',
  },
  {
    title: 'AI/ML & GenAI Learning',
    detail: 'Deepening focus on transformers, RAG systems and generative AI applications.',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative w-full bg-bg px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-muted">
            Journey
          </span>
          <h2 className="font-display text-4xl italic text-text-primary sm:text-5xl">
            Steps along the way.
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-10 border-l border-stroke pl-8 sm:pl-10">
          {MILESTONES.map((milestone, i) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1.5 h-2.5 w-2.5 rounded-full accent-gradient sm:-left-[49px]" />
              <h3 className="mb-1.5 text-lg font-medium text-text-primary sm:text-xl">
                {milestone.title}
              </h3>
              <p className="max-w-md text-sm text-muted sm:text-base">{milestone.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
