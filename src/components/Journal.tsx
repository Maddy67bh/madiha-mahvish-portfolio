import { motion } from 'framer-motion';

interface JournalEntry {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
}

const ENTRIES: JournalEntry[] = [
  {
    title: 'Building My First AI Portfolio',
    description: 'Notes on planning and structuring a portfolio around real, honest work.',
    category: 'Reflection',
    date: 'Coming soon',
    readTime: '4 min read',
  },
  {
    title: 'From Power BI Dashboards to Data Science',
    description: 'How dashboard work shaped the way I now approach analytical problems.',
    category: 'Analytics',
    date: 'Coming soon',
    readTime: '5 min read',
  },
  {
    title: 'Learning NLP and BERT',
    description: 'Working through transformer architectures and applying them to text.',
    category: 'Machine Learning',
    date: 'Coming soon',
    readTime: '6 min read',
  },
  {
    title: 'Exploring Generative AI and RAG',
    description: 'Early experiments retrieving and grounding LLM responses in real data.',
    category: 'AI',
    date: 'Coming soon',
    readTime: '5 min read',
  },
];

export default function Journal() {
  return (
    <section id="journal" className="relative w-full bg-bg px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-muted">
            Journal
          </span>
          <h2 className="font-display text-4xl italic text-text-primary sm:text-5xl">
            Notes on learning.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ENTRIES.map((entry, i) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex cursor-default flex-col justify-between rounded-2xl border border-stroke bg-surface p-6 transition-colors duration-300 hover:border-white/20"
            >
              <div>
                <span className="mb-4 inline-block text-[10px] uppercase tracking-[0.25em] text-muted">
                  {entry.category}
                </span>
                <h3 className="mb-2 text-base font-medium leading-snug text-text-primary sm:text-lg">
                  {entry.title}
                </h3>
                <p className="text-sm text-muted">{entry.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-[11px] text-muted">
                <span>{entry.date}</span>
                <span>{entry.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
