'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/lib/site'

const fieldClass =
  'mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-[15px] text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/30'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()

    const subject = `Web sitesi talebi — ${get('name')}${
      get('company') ? ` (${get('company')})` : ''
    }`
    const body = [
      `Ad Soyad: ${get('name')}`,
      `Firma: ${get('company') || '-'}`,
      `E-posta: ${get('email')}`,
      `Telefon: ${get('phone') || '-'}`,
      `Ülke/Bölge: ${get('country') || '-'}`,
      '',
      'Mesaj:',
      get('message'),
    ].join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Ad Soyad <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Ahmet Yılmaz"
            className={fieldClass}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="text-sm font-medium text-foreground"
          >
            Firma
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Firma Adınız"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            E-posta Adresi <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="ahmet@firma.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Telefon Numarası
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+90 532 000 00 00"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="country" className="text-sm font-medium text-foreground">
          Ülke/Bölge
        </label>
        <input
          id="country"
          name="country"
          autoComplete="country-name"
          placeholder="Türkiye"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Mesaj <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="İhtiyaçlarınızdan kısaca bahsedin..."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        Mesajı Gönder
      </button>

      <p aria-live="polite" className="min-h-5 text-sm text-muted-foreground">
        {sent
          ? `E-posta uygulamanız hazırlanan mesajla birlikte açıldı. Dilerseniz doğrudan ${site.email} adresine de yazabilirsiniz.`
          : ''}
      </p>
    </form>
  )
}
