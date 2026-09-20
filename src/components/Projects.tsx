import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';

const SIZE_CLASSES: Record<string, string> = {
  large: 'lg:col-span-2 lg:row-span-2',
  medium: 'lg:col-span-1 lg:row-span-2',
  small: 'lg:col-span-1 lg:row-span-1',
};

export default function Projects() {
  return (
    <section id="work" className="relative w-full bg-bg px-6 py-28 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col leading-[0.95]"
        >
          <span className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
            Selected
          </span>
          <h2 className="font-display text-5xl italic text-text-primary sm:text-6xl">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -8, scale: 1.012 }}
              className={`group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-stroke ${SIZE_CLASSES[project.size]}`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/80 backdrop-blur-md transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <Sparkles size={15} />
              </div>
              <div className="relative flex flex-col gap-3 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] text-white/90 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl italic text-white sm:text-3xl">
                  {project.title}
                </h3>
                <p className="max-w-md text-xs text-white/70 sm:text-sm">
                  {project.description}
                </p>
                <div className="mt-1 flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white/80 transition-colors hover:text-white"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  )}
                  <a
                    href={project.github ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-white transition-colors hover:text-white/80"
                  >
                    View Project
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
