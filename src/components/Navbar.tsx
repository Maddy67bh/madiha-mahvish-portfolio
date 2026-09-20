import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-3xl -translate-x-1/2 sm:top-6">
        <nav
          className={`glass flex items-center justify-between rounded-full border border-stroke px-3 py-2 transition-shadow duration-300 sm:px-4 ${
            scrolled ? 'shadow-[0_8px_30px_rgba(0,0,0,0.35)]' : ''
          }`}
        >
          <button
            onClick={() => scrollTo('home')}
            className="flex h-9 w-9 items-center justify-center rounded-full p-[1.5px] accent-gradient"
            aria-label="Go to home"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-bg text-xs font-semibold tracking-wide text-text-primary">
              MM
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                  activeId === item.id ? 'text-text-primary' : 'text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-surface"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden shrink-0 rounded-full border border-stroke px-4 py-2 text-sm text-text-primary transition-colors duration-200 hover:bg-surface md:inline-flex"
          >
            Let's Talk ↗
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <span className="text-xs uppercase tracking-[0.3em] text-muted">Menu</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke text-text-primary"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: 'easeOut' }}
                  onClick={() => scrollTo(item.id)}
                  className="font-display text-4xl italic text-text-primary"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
            <div className="px-8 pb-10">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full rounded-full accent-gradient py-3 text-sm font-medium text-bg"
              >
                Let's Talk ↗
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
