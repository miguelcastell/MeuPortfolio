'use client'

import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ReadingProgress() {
  const progress = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-label="Progresso de leitura"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 z-[100] h-[2px] transition-all duration-100 ease-linear"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
      }}
    />
  )
}
