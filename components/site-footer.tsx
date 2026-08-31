import Link from 'next/link'
import { navItems, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold">{site.legalNameTitle}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
              {site.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold">Hızlı Bağlantılar</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold">İletişim</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-navy-foreground/70">
              <li>
                E-posta:{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-navy-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li>
                Telefon:{' '}
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition-colors hover:text-navy-foreground"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                Web Site:{' '}
                <a
                  href={site.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-navy-foreground"
                >
                  {site.websiteLabel}
                </a>
              </li>
              <li className="leading-relaxed">
                Adres:{' '}
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-navy-foreground"
                >
                  {site.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy-foreground/15 pt-6 text-center text-sm text-navy-foreground/60">
          © 2026 SawLink. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
