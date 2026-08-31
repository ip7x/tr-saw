'use client'

import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Lightbox({
  photos,
  index,
  onIndexChange,
  onClose,
  label = 'Fotoğraf galerisi',
}: {
  photos: readonly string[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
  label?: string
}) {
  const next = useCallback(
    () => onIndexChange((index + 1) % photos.length),
    [index, onIndexChange, photos.length],
  )
  const prev = useCallback(
    () => onIndexChange((index - 1 + photos.length) % photos.length),
    [index, onIndexChange, photos.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [next, prev, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[100] flex flex-col bg-navy/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-4 py-3 text-navy-foreground">
        <span className="text-sm tabular-nums text-navy-foreground/70">
          {index + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-navy-foreground/10"
        >
          <span className="sr-only">Kapat</span>
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4">
        <button
          type="button"
          onClick={prev}
          className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 md:left-6"
        >
          <span className="sr-only">Önceki</span>
          <ChevronLeft className="h-7 w-7" aria-hidden="true" />
        </button>

        <div className="relative h-full w-full max-w-5xl">
          <Image
            key={photos[index]}
            src={photos[index] || '/placeholder.svg'}
            alt={`Galeri fotoğrafı ${index + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <button
          type="button"
          onClick={next}
          className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground transition-colors hover:bg-navy-foreground/20 md:right-6"
        >
          <span className="sr-only">Sonraki</span>
          <ChevronRight className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <div className="overflow-x-auto px-4 pb-6">
        <div className="mx-auto flex w-max gap-2">
          {photos.map((photo, i) => (
            <button
              key={photo}
              type="button"
              onClick={() => onIndexChange(i)}
              aria-label={`${i + 1}. fotoğrafa git`}
              aria-current={i === index}
              className={cn(
                'relative h-16 w-24 overflow-hidden rounded-md border-2 transition-opacity',
                i === index
                  ? 'border-primary-foreground'
                  : 'border-transparent opacity-50 hover:opacity-100',
              )}
            >
              <Image
                src={photo || '/placeholder.svg'}
                alt=""
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
