# Madiha Mahvish — Portfolio

A cinematic, dark single-page portfolio built with React, Vite, TypeScript,
Tailwind CSS, GSAP, Framer Motion and hls.js.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   All page sections (Hero, Navbar, Projects, etc.)
  hooks/        useHlsVideo (HLS video attach/cleanup), useScrollSpy (nav highlighting)
  data/         projects.ts, skills.ts — typed content data
  App.tsx       Composes the page and the loading screen
  main.tsx      React root + router
  index.css     Design tokens, gradient utility, custom keyframes
```

## Notes

- **Hero video**: streams from the Mux HLS URL in `Hero.tsx` via `hls.js`,
  with native fallback for Safari. Swap `HLS_SRC` for your own stream.
- **Project images**: currently placeholder Unsplash photos in
  `src/data/projects.ts` — swap these for real screenshots/case studies.
- **Contact details**: `src/components/Contact.tsx` and `Footer.tsx` use a
  placeholder email (`hello@example.com`) and a placeholder LinkedIn URL.
  Update both once you have the real links.
- **Content accuracy**: no employers, companies, certifications or awards
  are claimed anywhere — only the coursework, projects and skills provided
  in the brief. Update `Journey.tsx` if you'd like to add real dates or
  verified credentials.
- Respects `prefers-reduced-motion`, is keyboard/Escape-friendly for the
  Explorations lightbox, and is fully responsive down to mobile.


## Portfolio updates
- Added an animated data-scientist character to the hero section.
- Expanded the Projects section to include the major AI/ML, analytics, Power BI and API projects.
- Added hover motion and a subtle project-card shine effect.
