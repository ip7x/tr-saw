import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BadgeCheck,
  Building2,
  Gauge,
  Globe2,
  Hammer,
  Layers,
  LineChart,
  MonitorSmartphone,
  Mountain,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import { ProductGallery } from '@/components/product-gallery'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Ürünler',
  description:
    'Elmas tel testere sarf malzemeleri ve komple üretim hattı ekipmanları — doğal taş ocakçılığı, taş işleme, profil kesme ve inşaat mühendisliği uygulamaları için hassas çözümler.',
}

const applications = [
  {
    icon: Mountain,
    title: 'Doğal Taş Ocakçılığı',
    text: 'Granit, mermer ve diğer doğal taşlar için verimli blok çıkarma çözümleri.',
  },
  {
    icon: Layers,
    title: 'Taş İşleme',
    text: 'Taş işleme fabrikalarında plaka ve karo üretimi için yüksek hassasiyetli kesim.',
  },
  {
    icon: Hammer,
    title: 'Taş Profil Kesme',
    text: 'Elmas tel testerelerle karmaşık form kesimi ve kontur işleme.',
  },
  {
    icon: Building2,
    title: 'İnşaat Mühendisliği',
    text: 'Büyük ölçekli altyapı projelerinde beton kesimi ve yıkım işleri.',
  },
]

const advantages = [
  { icon: Gauge, text: 'Minimum sapmayla yüksek hassasiyetli ölçüm' },
  { icon: ShieldCheck, text: 'Endüstriyel ortamlar için sağlam yapı' },
  { icon: MonitorSmartphone, text: 'Sezgisel kontrollerle kullanıcı dostu arayüz' },
  { icon: LineChart, text: 'Kapsamlı veri kaydı ve analizi' },
  { icon: Wrench, text: 'Düşük bakım gereksinimi' },
  { icon: Globe2, text: 'Dünya genelinde teknik destek' },
]

export default function ProductsPage() {
  return (
    <main>
      <section className="brand-gradient py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            Hassas Elmas Tel Ürünleri
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-primary-foreground/90">
            Zorlu uygulamalar için gelişmiş elmas tel testere teknolojisi
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
              Ürün Galerisi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
              Büyütmek için görsellere tıklayın.
            </p>
          </Reveal>
          <div className="mt-12">
            <ProductGallery />
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
              Uygulama Alanları
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <article className="h-full rounded-xl border border-border bg-card p-7 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-pretty text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1000px] px-6">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
              Ürün Avantajları
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {advantages.map((item, i) => (
              <Reveal as="li" key={item.text} delay={(i % 2) * 100}>
                <div className="flex h-full items-start gap-4 rounded-xl bg-muted p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-pretty leading-relaxed text-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14 text-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
            >
              <BadgeCheck className="h-5 w-5" aria-hidden="true" />
              Teklif İsteyin
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
