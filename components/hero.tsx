'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { heroSlides, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden md:min-h-[640px]">
      {heroSlides.map((src, i) => (
        <Image
          key={src}
          src={src || '/placeholder.svg'}
          alt="Elmas tel üretim hattı"
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            'absolute inset-0 -z-20 object-cover transition-opacity duration-1000',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        />
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-primary-dark/55"
      />

      <div className="mx-auto w-full max-w-[1200px] px-6 py-24 text-center">
        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-extrabold uppercase leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
          {site.legalName}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/90 md:text-lg">
          Elmas tel testere sektörüne odaklanan profesyonel bir küresel üretici.
          Yüksek kaliteli sarf malzemeleri ve komple üretim hattı ekipmanlarını,
          baştan sona teknik destekle birlikte tedarik ediyoruz.
        </p>
        <Link
          href="/urunler"
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-background px-8 py-4 text-base font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Ürünleri Keşfedin
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}. görsele git`}
            aria-current={i === index}
            className={cn(
              'h-2 rounded-full bg-primary-foreground/50 transition-all',
              i === index ? 'w-8 bg-primary-foreground' : 'w-2',
            )}
          />
        ))}
      </div>
    </section>
  )
}
