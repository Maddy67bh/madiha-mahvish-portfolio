import { motion } from 'framer-motion';

export default function AnimatedCharacter() {
  return (
    <motion.div
      className="pointer-events-none absolute -right-2 bottom-2 z-20 hidden w-44 sm:block lg:-right-8 lg:w-56"
      animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      <div className="character-glow absolute inset-6 rounded-full blur-3xl" />
      <svg viewBox="0 0 240 260" className="relative h-auto w-full overflow-visible">
        {/* floating sparkles */}
        <motion.g
          animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.08, 0.9] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <circle cx="30" cy="55" r="4" fill="currentColor" className="text-white/70" />
          <circle cx="205" cy="72" r="3" fill="currentColor" className="text-white/50" />
        </motion.g>

        {/* shadow */}
        <ellipse cx="120" cy="244" rx="62" ry="10" fill="currentColor" className="text-white/10" />

        {/* body */}
        <path d="M72 160 Q120 140 168 160 L180 224 Q120 244 60 224Z" fill="#4e85bf" />
        <path d="M84 171 Q120 158 156 171 L163 218 Q120 230 77 218Z" fill="#101318" />

        {/* neck */}
        <path d="M105 132 L135 132 L139 157 Q120 168 101 157Z" fill="#d99b73" />

        {/* head */}
        <ellipse cx="120" cy="93" rx="48" ry="50" fill="#e6ab80" />
        {/* hair */}
        <path d="M73 96 Q65 45 120 39 Q176 45 168 102 Q154 72 138 69 Q112 58 91 78 Q84 89 73 96Z" fill="#17181d" />
        <path d="M77 83 Q88 45 126 47 Q151 49 165 71" fill="none" stroke="#2b2d35" strokeWidth="8" strokeLinecap="round" />

        {/* ears */}
        <circle cx="73" cy="100" r="8" fill="#d99b73" />
        <circle cx="167" cy="100" r="8" fill="#d99b73" />

        {/* glasses */}
        <g fill="none" stroke="#1b2028" strokeWidth="4">
          <rect x="87" y="92" width="27" height="20" rx="8" />
          <rect x="126" y="92" width="27" height="20" rx="8" />
          <path d="M114 101 L126 101" />
        </g>
        <circle cx="101" cy="101" r="3" fill="#111" />
        <circle cx="139" cy="101" r="3" fill="#111" />

        {/* smile */}
        <path d="M108 119 Q120 128 132 119" fill="none" stroke="#9a4f4f" strokeWidth="3" strokeLinecap="round" />

        {/* arms */}
        <path d="M73 171 Q48 188 56 211" fill="none" stroke="#e6ab80" strokeWidth="16" strokeLinecap="round" />
        <path d="M167 171 Q192 187 184 211" fill="none" stroke="#e6ab80" strokeWidth="16" strokeLinecap="round" />

        {/* laptop */}
        <motion.g
          animate={{ rotate: [0, -1, 0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        >
          <rect x="78" y="184" width="84" height="47" rx="5" fill="#20242c" stroke="#89aacc" strokeWidth="3" />
          <rect x="84" y="190" width="72" height="35" rx="2" fill="#0a0d11" />
          <path d="M91 213 L104 203 L114 209 L129 196 L148 213" fill="none" stroke="#89aacc" strokeWidth="3" />
          <path d="M68 232 H172 L164 239 H76Z" fill="#8b929d" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
