'use client'

import { cn } from '@/lib/utils'

interface MarqueeItem {
  label: string
  category?: string
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[]
  speed?: 'slow' | 'normal' | 'fast'
  reverse?: boolean
  className?: string
}

const speedMap = {
  slow: '50s',
  normal: '35s',
  fast: '20s',
}

export function InfiniteMarquee({
  items,
  speed = 'normal',
  reverse = false,
  className,
}: InfiniteMarqueeProps) {
  const duration = speedMap[speed]

  return (
    <div
      className={cn('overflow-hidden animate-marquee-pause', className)}
      aria-hidden="true"
    >
      <div
        className="marquee-inner flex items-center gap-3 w-max"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {/* Render twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <MarqueePill key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

function MarqueePill({ item }: { item: MarqueeItem }) {
  return (
    <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface text-sm font-medium text-text-muted whitespace-nowrap select-none transition-colors hover:border-primary/40 hover:text-primary">
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{
          backgroundColor: getCategoryColor(item.category),
        }}
        aria-hidden="true"
      />
      {item.label}
    </span>
  )
}

function getCategoryColor(category?: string): string {
  const map: Record<string, string> = {
    python: '#0E7490',
    sql: '#0E7490',
    ml: '#14B8A6',
    bi: '#14B8A6',
    automation: '#F97316',
    devops: '#F97316',
    other: '#94A3B8',
  }
  return map[category?.toLowerCase() ?? 'other'] ?? '#94A3B8'
}
