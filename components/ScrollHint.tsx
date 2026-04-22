'use client'

import { motion } from 'framer-motion'

export default function ScrollHint() {
  return (
    <motion.div
      className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        <span className="font-sans text-[9px] tracking-[0.3em] font-bold uppercase text-charcoal select-none mb-1">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-5 h-5 text-charcoal"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M7 13l5 5 5-5M12 6v12" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )
}
