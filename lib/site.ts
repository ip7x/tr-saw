export const site = {
  name: 'Nova Abrasiv',
  legalName: 'NOVA ABRASİV',
  legalNameTitle: 'Nova Abrasiv',
  tagline:
    'Kendi abrasiv markamız ile Ege bölgesi başta olmak üzere yurtiçi ve yurtdışı müşterilere hizmet veriyoruz.',
  email: 'info@novaabrasiv.com',
  phone: '+90 532 561 31 99',
  phoneHref: '+905325613199',
  secondaryPhones: ['+90 272 218 52 52', '+90 532 388 32 11', '+90 533 928 32 11'],
  address: 'OSB Mah. 4. Sok. 3. Cad. No:4, D:5, 03200 Afyonkarahisar, Türkiye',
  city: 'Afyonkarahisar',
  country: 'Türkiye',
  websiteUrl: 'https://novaabrasiv.com/',
  websiteLabel: 'novaabrasiv.com',
  mapUrl:
    'https://maps.google.com/?q=OSB+Mah.+4.+Sok.+3.+Cad.+No:4,+D:5,+03200+Afyonkarahisar',
  hours: 'Pazartesi - Cuma: 09:00 - 18:00',
} as const

export const navItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/urunler', label: 'Ürünler' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' },
] as const

export const heroSlides = [
  '/images/product-1.jpg',
  '/images/product-3.jpg',
  '/images/product-5.jpg',
  '/images/product-12.jpg',
  '/images/product-17.jpg',
] as const

export const productImages = Array.from(
  { length: 19 },
  (_, i) => `/images/product-${i + 1}.jpg`,
)

export const exhibitions = [
  {
    id: 1,
    title: 'Xiamen Doğal Taş Fuarı',
    city: 'Xiamen, Çin',
    year: '2026',
    cover: '/exhibition/1/1_1.jpg',
    photos: [
      '/exhibition/1/1_1.jpg',
      '/exhibition/1/1_13.jpg',
      '/exhibition/1/1_21.jpg',
      '/exhibition/1/1_22.jpg',
      '/exhibition/1/1_23.jpg',
      '/exhibition/1/1_24.jpg',
    ],
  },
  {
    id: 2,
    title: 'İzmir Uluslararası Doğal Taş ve Teknolojileri Fuarı',
    city: 'İzmir, Türkiye',
    year: '2026',
    cover: '/exhibition/2/2_1.jpg',
    photos: [
      '/exhibition/2/2_1.jpg',
      '/exhibition/2/2_2.jpg',
      '/exhibition/2/2_3.jpg',
    ],
  },
] as const
