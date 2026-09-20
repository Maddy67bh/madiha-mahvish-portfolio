import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const COLUMN_A = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
];

const COLUMN_B = [
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop',
];

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colARef = useRef<HTMLDivElement>(null);
  const colBRef = useRef<HTMLDivElement>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (colARef.current) {
        gsap.to(colARef.current, {
          y: -160,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
      if (colBRef.current) {
        gsap.to(colBRef.current, {
          y: 120,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImg(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative min-h-[250vh] w-full overflow-hidden bg-bg px-6 py-28 sm:px-10 lg:min-h-[280vh]"
    >
      <div className="sticky top-0 flex min-h-screen w-full items-center justify-center">
        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr_1fr]">
          <div ref={colARef} className="hidden flex-col gap-6 lg:flex">
            {COLUMN_A.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxImg(src)}
                className="overflow-hidden rounded-2xl border border-stroke transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${i % 2 === 0 ? -3 : 2}deg)` }}
              >
                <img src={src} alt="Exploration" className="h-52 w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="z-10 flex flex-col items-center text-center">
            <span className="mb-4 text-xs uppercase tracking-[0.3em] text-muted">
              Explorations
            </span>
            <h2 className="mb-4 font-display text-4xl italic text-text-primary sm:text-5xl">
              Where data meets creativity.
            </h2>
            <p className="max-w-sm text-sm text-muted sm:text-base">
              Experimenting with AI, visualization, interfaces and emerging
              technologies.
            </p>
          </div>

          <div ref={colBRef} className="hidden flex-col gap-6 lg:flex">
            {COLUMN_B.map((src, i) => (
              <button
                key={src}
                onClick={() => setLightboxImg(src)}
                className="overflow-hidden rounded-2xl border border-stroke transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${i % 2 === 0 ? 3 : -2}deg)` }}
              >
                <img src={src} alt="Exploration" className="h-52 w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="col-span-1 grid grid-cols-2 gap-4 lg:hidden">
            {[...COLUMN_A, ...COLUMN_B].map((src) => (
              <button
                key={src}
                onClick={() => setLightboxImg(src)}
                className="overflow-hidden rounded-xl border border-stroke"
              >
                <img src={src} alt="Exploration" className="h-32 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
              onClick={() => setLightboxImg(null)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightboxImg}
              alt="Exploration preview"
              className="max-h-[80vh] max-w-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
