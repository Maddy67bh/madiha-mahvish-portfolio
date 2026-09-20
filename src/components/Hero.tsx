import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useHlsVideo } from '../hooks/useHlsVideo';
import AnimatedCharacter from './AnimatedCharacter';

const HLS_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

const ROLES = ['Data Scientist', 'Data Analyst', 'AI/ML Developer', 'BI Developer'];

export default function Hero() {
  const videoRef = useHlsVideo(HLS_SRC);
  const [roleIndex, setRoleIndex] = useState(0);
  const nameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 16, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 }
      )
        .fromTo(
          '.hero-name-line',
          { opacity: 0, y: 40, filter: 'blur(10px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.12 },
          '-=0.3'
        )
        .fromTo(
          '.hero-role',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-desc',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          '.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-bg"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center px-6 pb-28 text-center sm:pb-20"
      >
        <span className="hero-eyebrow mb-6 text-xs uppercase tracking-[0.3em] text-muted">
          Data Science • AI • Analytics
        </span>

        <div ref={nameRef} className="mb-6 flex flex-col leading-[0.95]">
          <span className="hero-name-line font-display text-6xl italic text-text-primary sm:text-8xl md:text-9xl">
            Madiha
          </span>
          <span className="hero-name-line font-display text-6xl italic text-text-primary sm:text-8xl md:text-9xl">
            Mahvish
          </span>
        </div>

        <div className="hero-role mb-6 h-7 overflow-hidden">
          <p key={roleIndex} className="animate-role-fade-in text-base text-muted sm:text-lg">
            A{' '}
            <span className="accent-gradient-text font-medium">{ROLES[roleIndex]}</span>{' '}
            based in Hyderabad.
          </p>
        </div>

        <p className="hero-desc mb-10 max-w-xl text-balance text-sm text-muted sm:text-base">
          Building practical data, AI and analytics solutions that turn complex
          information into meaningful decisions.
        </p>

        <div className="hero-cta flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => scrollTo('work')}
            className="hero-cta rounded-full accent-gradient px-7 py-3 text-sm font-medium text-bg transition-transform duration-200 hover:scale-[1.03]"
          >
            View My Work →
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hero-cta rounded-full border border-stroke px-7 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-surface"
          >
            Let's Connect ↗
          </button>
        </div>
      </div>

      <AnimatedCharacter />

      <div className="hero-scroll absolute bottom-8 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="absolute left-0 top-0 h-4 w-px animate-scroll-down bg-text-primary" />
        </div>
      </div>
    </section>
  );
}
