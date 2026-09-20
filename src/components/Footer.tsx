import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin } from 'lucide-react';

const MARQUEE_TEXT = 'DATA • AI • ANALYTICS • BUILD • LEARN • CREATE • ';

export default function Footer() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      const width = track.scrollWidth / 2;
      gsap.to(track, {
        x: -width,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative w-full border-t border-stroke bg-bg">
      <div className="overflow-hidden py-6">
        <div ref={trackRef} className="flex w-max whitespace-nowrap">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="px-4 font-display text-2xl italic text-muted/60 sm:text-3xl"
            >
              {MARQUEE_TEXT.repeat(4)}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:px-10 lg:px-20">
        <div>
          <p className="text-sm font-medium text-text-primary">Madiha Mahvish</p>
          <p className="text-xs text-muted">Data Science • AI • Analytics</p>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to opportunities
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-text-primary"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Maddy67bh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-text-primary"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
