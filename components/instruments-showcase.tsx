'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { productImages } from '@/lib/site'

const showcase = productImages.slice(0, 10)

export function InstrumentsShowcase() {
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (direction: 1 | -1) => {
    const node = trackRef.current
    if (!node) return
    node.scrollBy({ left: direction * (node.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section className="bg-muted py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Hassas Üretim Ekipmanlarımız
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Gelişmiş elmas tel teknolojisi çözümlerimizi keşfedin
          </p>
        </Reveal>

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {showcase.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[4/3] w-[78%] shrink-0 snap-start overflow-hidden rounded-xl border border-border bg-card shadow-sm sm:w-[46%] lg:w-[31%]"
              >
                <Image
                  src={src || '/placeholder.svg'}
                  alt={`Hassas üretim ekipmanı ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 78vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <span className="sr-only">Geri kaydır</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <span className="sr-only">İleri kaydır</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/urunler"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
          >
            Tüm Ürünleri Görüntüle
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
