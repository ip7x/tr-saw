'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Lightbox } from '@/components/lightbox'
import { Reveal } from '@/components/reveal'
import { productImages } from '@/lib/site'

export function ProductGallery() {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productImages.map((src, i) => (
          <Reveal key={src} delay={(i % 4) * 80}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-muted shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="sr-only">{`Ürün görseli ${i + 1} — büyüt`}</span>
              <Image
                src={src || '/placeholder.svg'}
                alt={`Ürün görseli ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      {index !== null && (
        <Lightbox
          photos={productImages}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setIndex(null)}
          label="Ürün galerisi"
        />
      )}
    </>
  )
}
