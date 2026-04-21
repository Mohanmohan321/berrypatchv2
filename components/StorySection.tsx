'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function StorySection() {
  return (
    <section
      id="story"
      className="flex items-center bg-white overflow-hidden relative"
      style={{ height: '100dvh', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}
    >
      <motion.div className="absolute top-6 left-6 md:top-12 md:left-12 z-10" {...reveal(0)}>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-sans text-xs text-muted hover:text-charcoal transition-colors duration-200 cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          back to berry patch
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-8 md:py-12">

        <motion.p className="font-sans text-sm tracking-[0.35em] uppercase text-berry mb-6 md:mb-10 text-center font-semibold" {...reveal(0)}>
          The Origin
        </motion.p>

        <motion.blockquote
          className="font-serif text-xl md:text-3xl lg:text-4xl italic font-normal text-charcoal leading-[1.4] text-center max-w-3xl mx-auto mb-10 md:mb-16"
          {...reveal(0.1)}
        >
          &ldquo;When you eat our berries, you aren&rsquo;t just tasting fruit.
          You&rsquo;re tasting the Kodaikanal mist.&rdquo;
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className="grid grid-cols-3 gap-2 md:gap-4 w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-square">
              <Image src="/assets/real-farm2.jpg" alt="Strawberry Plant" fill className="object-cover" sizes="(max-width: 768px) 33vw, 16vw" />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-square">
              <Image src="/assets/real-berries2.jpg" alt="Strawberries on the farm" fill className="object-cover" sizes="(max-width: 768px) 33vw, 16vw" />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] md:aspect-square">
              <Image src="/assets/real-farm.jpg" alt="Strawberry Farm Rows" fill className="object-cover" sizes="(max-width: 768px) 33vw, 16vw" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.h2 className="font-serif text-2xl md:text-4xl font-bold text-charcoal leading-tight" {...reveal(0.15)}>
              Our Story
            </motion.h2>
            <motion.p className="font-sans text-sm md:text-[15px] text-muted leading-[1.8]" {...reveal(0.22)}>
              Nestled at 2,100 metres above sea level, our farm sits where the clouds touch the hills of Kodaikanal. The cool mist, the rich soil, and the patience of our farmers create strawberries unlike anything grown in the plains below.
            </motion.p>
            <motion.p className="font-sans text-sm md:text-[15px] text-muted leading-[1.8] hidden md:block" {...reveal(0.29)}>
              We grow the Camarosa variety — known for its deep red colour, intense sweetness, and firm texture. No synthetic pesticides. No shortcuts. Every batch is tested by ICAR‑IIHR certified laboratories.
            </motion.p>
            <motion.div className="flex items-center gap-4 pt-1" {...reveal(0.36)}>
              <div className="h-px flex-1 bg-border" />
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted">Est. Kodaikanal</span>
              <div className="h-px flex-1 bg-border" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
