'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CalendarDays, Images, MapPin } from 'lucide-react'
import { exhibitions } from '@/lib/site'
import { Lightbox } from '@/components/lightbox'
import { Reveal } from '@/components/reveal'

export function Exhibitions() {
  const [openId, setOpenId] = useState<number | null>(null)
  const [index, setIndex] = useState(0)
  const active = exhibitions.find((e) => e.id === openId)

  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Reveal className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Küresel Fuarlar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Elmas tel testere ürünlerimizi tanıtmak ve sektör paydaşlarıyla
            buluşmak için dünya genelindeki uluslararası fuarlara katılıyoruz.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {exhibitions.map((exhibition, i) => (
            <Reveal key={exhibition.id} delay={i * 120}>
              <button
                type="button"
                onClick={() => {
                  setOpenId(exhibition.id)
                  setIndex(0)
                }}
                className="group w-full overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={exhibition.cover || '/placeholder.svg'}
                    alt={exhibition.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/35" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground">
                    <Images className="h-4 w-4" aria-hidden="true" />
                    {exhibition.photos.length} Fotoğraf
                  </span>
                  <span className="absolute inset-x-0 bottom-4 text-center text-sm font-semibold text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    Galeriyi Görüntüle
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-pretty text-lg font-bold">
                    {exhibition.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      {exhibition.city}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" aria-hidden="true" />
                      {exhibition.year}
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <Lightbox
          photos={active.photos}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setOpenId(null)}
          label={`${active.title} galerisi`}
        />
      )}
    </section>
  )
}
