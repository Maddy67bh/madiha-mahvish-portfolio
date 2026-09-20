import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  BrainCircuit,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Programming: Code2,
  Data: Database,
  'Machine Learning': BrainCircuit,
  AI: Sparkles,
  Development: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-bg px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.3em] text-muted">
            Skills
          </span>
          <h2 className="font-display text-4xl italic text-text-primary sm:text-5xl">
            Tools I build with.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-14">
          {skillCategories.map((group, groupIndex) => {
            const Icon = CATEGORY_ICONS[group.category] ?? Code2;
            return (
              <div key={group.category}>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.05 }}
                  className="mb-5 flex items-center gap-2 text-sm text-muted"
                >
                  <Icon size={16} />
                  <span>{group.category}</span>
                </motion.div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: i * 0.04 }}
                      className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface p-5 transition-colors duration-300 hover:border-transparent"
                    >
                      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 accent-gradient transition-opacity duration-300 group-hover:opacity-15" />
                      <div className="relative">
                        <p className="mb-1 text-sm font-medium text-text-primary sm:text-base">
                          {skill.name}
                        </p>
                        <p className="text-xs text-muted">{skill.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
