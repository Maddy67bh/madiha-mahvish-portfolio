import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

const EMAIL = 'hello@example.com';
const LINKEDIN_URL = 'https://linkedin.com/in/placeholder';
const GITHUB_URL = 'https://github.com/Maddy67bh';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] w-full flex-col items-center justify-center bg-bg px-6 py-28 text-center sm:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center"
      >
        <span className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
          Contact
        </span>
        <h2 className="mb-6 font-display text-5xl italic leading-[0.95] text-text-primary sm:text-7xl">
          Let's build something
          <br />
          meaningful.
        </h2>
        <p className="mb-10 max-w-md text-sm text-muted sm:text-base">
          Have a project, opportunity or idea? I'd love to hear about it.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 rounded-full accent-gradient px-7 py-3 text-sm font-medium text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            <Mail size={16} />
            Email Me ↗
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stroke px-7 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-surface"
          >
            <Linkedin size={16} />
            LinkedIn ↗
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-stroke px-7 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-surface"
          >
            <Github size={16} />
            GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
