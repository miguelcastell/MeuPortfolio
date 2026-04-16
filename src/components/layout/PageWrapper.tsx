'use client'

import { motion } from 'framer-motion'
import { ReadingProgress } from '@/components/ui/ReadingProgress'
import { cn } from '@/lib/utils'

interface PageWrapperProps {
  children: React.ReactNode
  showProgress?: boolean
  className?: string
}

const pageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export function PageWrapper({ children, showProgress = false, className }: PageWrapperProps) {
  return (
    <>
      {showProgress && <ReadingProgress />}
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className={cn('pt-16', className)}
      >
        {children}
      </motion.div>
    </>
  )
}
