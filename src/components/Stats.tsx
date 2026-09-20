import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Stat {
  value: number | null;
  suffix: string;
  label: string;
  display?: string;
}

const STATS: Stat[] = [
  { value: 20, suffix: '+', label: 'Projects / Experiments' },
  { value: 10, suffix: '+', label: 'Technologies Explored' },
  { value: null, suffix: '', label: 'Curiosity to Learn', display: '∞' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-6xl italic text-text-primary sm:text-7xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative w-full bg-bg px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            {stat.value !== null ? (
              <Counter value={stat.value} suffix={stat.suffix} />
            ) : (
              <span className="font-display text-6xl italic text-text-primary sm:text-7xl">
                {stat.display}
              </span>
            )}
            <span className="mt-3 text-sm text-muted">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
