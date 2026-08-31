import Link from 'next/link'
import { FlaskConical, PackageCheck, LifeBuoy } from 'lucide-react'
import { Hero } from '@/components/hero'
import { Exhibitions } from '@/components/exhibitions'
import { InstrumentsShowcase } from '@/components/instruments-showcase'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const coreBusiness = [
  {
    icon: FlaskConical,
    title: 'Elmas Tel Testere Sarf Malzemeleri',
    text: 'Profesyonel bir tedarikçi olarak, dünya genelindeki kesme ve işleme sektörlerine yüksek kaliteli elmas tel testere sarf malzemeleri sağlıyoruz; istikrarlı kalite ve rekabetçi fiyatlarla müşterilerimizin toplu tedarik ihtiyaçlarını karşılıyoruz.',
  },
  {
    icon: PackageCheck,
    title: 'Komple Üretim Hattı Ekipmanları',
    text: "Müşterilerimizin üretim ölçeğine ve taleplerine göre özelleştirilmiş, gelişmiş elmas tel üretim hattı ekipmanlarının tamamını sunuyoruz; böylece elmas telin verimli ve standartlaştırılmış üretimini mümkün kılıyoruz.",
  },
  {
    icon: LifeBuoy,
    title: 'Profesyonel Teknik Destek',
    text: 'Ekipman satışıyla birlikte; yerinde kurulum, devreye alma, personel eğitimi ve satış sonrası bakım dahil olmak üzere baştan sona teknik destek sağlıyor, üretim sürecindeki tüm teknik sorunları müşterilerimiz adına çözüyoruz.',
  },
]

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Temel Faaliyetlerimiz */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <Reveal>
            <h2 className="text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
              Temel Faaliyet Alanlarımız
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {coreBusiness.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <article className="section-shell h-full p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_52px_rgba(30,58,138,0.12)]">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-sm">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-pretty text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Şirket Tanıtımı */}
      <section className="bg-muted py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Şirket Tanıtımı
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              SawLink&apos;in profesyonel yetkinlikleri ve küresel servis ağı
              hakkında daha fazla bilgi edinmek için tanıtım videomuzu izleyin.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="float-slow overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_50px_rgba(30,58,138,0.12)]">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                controls
                preload="metadata"
                poster="/images/product-3.jpg"
                className="aspect-video w-full bg-navy"
              >
                <source src="/video.mp4" type="video/mp4" />
                Tarayıcınız video etiketini desteklemiyor.
              </video>
            </div>
          </Reveal>
        </div>
      </section>

      <Exhibitions />

      <InstrumentsShowcase />

      {/* Hakkımızda önizleme */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto w-full max-w-[900px] px-6 text-center">
          <Reveal>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              SawLink Hakkında
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {site.legalName}, elmas tel testere sektörüne odaklanan
              profesyonel bir küresel üreticidir. Yüksek kaliteli elmas tel
              testere sarf malzemelerinin tedarikinde uzmanlaşmış olup, ayrıca
              baştan sona teknik destekle birlikte komple elmas tel üretim hattı
              ekipmanları da sunuyoruz. Profesyonel çözümler ve güvenilir
              ürünlerle dünya genelindeki müşterilerimize hizmet veriyoruz.
            </p>
            <Link
              href="/hakkimizda"
              className="mt-10 inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Hakkımızda Daha Fazlası
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="brand-gradient py-20 md:py-24">
        <div className="mx-auto w-full max-w-[900px] px-6 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            İş Birliğine Hazır mısınız?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-primary-foreground/90">
            İhtiyaçlarınızı görüşmek ve karşılıklı kazanç sağlayan bir iş
            birliğine başlamak için ekibimizle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-background px-8 py-4 text-base font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Bize Ulaşın
          </Link>
        </div>
      </section>
    </main>
  )
}
