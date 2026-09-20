import { motion } from 'framer-motion';

const FOCUS_AREAS = [
  'Python',
  'SQL',
  'Machine Learning',
  'Power BI',
  'Data Visualization',
  'NLP',
  'AI/ML',
  'GenAI',
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-bg px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-muted">
            About Me
          </span>
          <h2 className="font-display text-4xl italic leading-tight text-text-primary sm:text-5xl">
            Turning data into meaningful stories.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I'm an aspiring Data Scientist and Data Analyst who enjoys working
            through messy, real-world data until it becomes something a
            decision can actually be built on. My current focus spans
            machine learning, natural language processing and generative AI,
            paired with the analytical fundamentals of Python, SQL and Power
            BI. I'm early in my journey, and I like it that way — every
            project is a chance to learn something I didn't know going in.
          </p>

          <div className="flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-full border border-stroke px-4 py-2 text-xs text-text-primary sm:text-sm"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
