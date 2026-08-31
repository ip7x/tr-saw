import type { Metadata } from 'next'
import { Lightbulb, ShieldCheck, Users, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    "Xiamen merkezli XIAMEN SAWLINK INTERNATIONAL CO., LTD., elmas tel testere endüstri zincirine adanmış profesyonel bir üretim işletmesidir.",
}

const stats = [
  { value: '20+', label: 'Yıllık Deneyim' },
  { value: '500+', label: 'Küresel Müşteri' },
  { value: '50+', label: 'Hizmet Verilen Ülke' },
]

const strengths = [
  {
    icon: Lightbulb,
    title: 'Teknik Uzmanlık',
    text: 'Elmas tel teknolojisi ve hassas mühendislik alanında derin bilgi birikimi',
  },
  {
    icon: ShieldCheck,
    title: 'Kalite Güvencesi',
    text: 'Titiz test ve kalite kontrol süreçleri',
  },
  {
    icon: Users,
    title: 'Müşteri Hizmetleri',
    text: 'Hızlı yanıt veren destek ve kapsamlı dokümantasyon',
  },
  {
    icon: Zap,
    title: 'Sürekli İnovasyon',
    text: 'Teknolojimizi ileriye taşıyan kesintisiz Ar-Ge çalışmaları',
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="brand-gradient py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            SawLink Hakkında
          </h1>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1000px] px-6">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Biz Kimiz
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Çin&apos;in önemli bir uluslararası ticaret limanı olan
              Xiamen&apos;de faaliyet gösteren {site.legalName}, elmas tel
              testere endüstri zincirine adanmış profesyonel bir üretim
              işletmesidir. Temel faaliyet alanımız, tel testereyle kesim
              uygulamalarının çekirdek aksesuarı olan birinci sınıf elmas tel
              testere sarf malzemelerinin küresel tedarikini kapsamaktadır.
            </p>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Sarf malzemelerinin ötesinde, elmas tel üretimi için tek noktadan
              hizmet sunuyoruz: gelişmiş ve özelleştirilmiş komple üretim hattı
              ekipmanlarını tedarik ediyor; ekipman kurulumu, devreye alma,
              operasyonel eğitim ve satış sonrası bakım dahil sistematik teknik
              destek sağlıyoruz. Profesyonellik, güvenilirlik ve karşılıklı
              kazanç ilkesini benimseyerek dünyanın dört bir yanındaki
              müşterilerimizle istikrarlı iş birlikleri kurduk ve küresel elmas
              tel testere sektöründe güvenilir bir ortak olmayı hedefliyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-primary-dark md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
              Güçlü Yönlerimiz
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {strengths.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 120}>
                <article className="flex h-full items-start gap-5 rounded-xl border border-border bg-card p-7 shadow-sm">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-pretty text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
