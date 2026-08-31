import type { Metadata } from 'next'
import { Clock, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'İletişim',
  description:
    'Elmas tel testere sarf malzemeleri ve üretim hattı ekipmanları için Xiamen Sawlink ekibiyle iletişime geçin.',
}

export default function ContactPage() {
  return (
    <main>
      <section className="brand-gradient py-20 md:py-24">
        <div className="mx-auto w-full max-w-[900px] px-6 text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            İletişim
          </h1>
          <p className="mt-6 text-pretty leading-relaxed text-primary-foreground/90">
            {site.legalName}, elmas tel testere ürünleri ve üretim çözümleri
            alanında Çin merkezli lider bir üreticidir. Elmas tel testere sarf
            malzemelerinin ihracatında ve komple elmas tel üretim hattı
            ekipmanlarının tedarikinde uzmanlaşmış olup, proje döngüsünün
            tamamını kapsayan profesyonel teknik destek sunuyoruz.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/90">
            Olgunlaşmış tedarik zinciri kaynaklarımız ve zengin uluslararası
            ticaret deneyimimiz sayesinde, küresel müşterilerimize kapıdan
            kapıya tedarik ve satış sonrası hizmet sağlayarak verimli ve sorunsuz
            bir iş birliği güvence altına alıyoruz. Görüşme ve karşılıklı kazanç
            sağlayan iş birlikleri için tüm dünyadan iş ortaklarını içtenlikle
            bekliyoruz!
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Bize Mesaj Gönderin
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              İletişim Bilgileri
            </h2>
            <ul className="mt-8 flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">E-posta</h3>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Telefon</h3>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.phone}
                  </a>
                  {site.secondaryPhones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s+/g, '').replace(/^\+/, '+')}`}
                      className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Web Sitesi</h3>
                  <a
                    href={site.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.websiteLabel}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Adres</h3>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-pretty leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                  >
                    {site.address}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Çalışma Saatleri</h3>
                  <p className="mt-1 text-muted-foreground">{site.hours}</p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
