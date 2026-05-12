import React from 'react';

function Icon({ name, className = 'h-6 w-6' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  };

  const icons = {
    arrow: (
      <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    ),
    check: (
      <svg {...common}><path d="M20 6 9 17l-5-5" /><circle cx="12" cy="12" r="10" /></svg>
    ),
    chef: (
      <svg {...common}><path d="M6 13.5h12" /><path d="M6 18h12" /><path d="M7 13.5V21h10v-7.5" /><path d="M8 10a4 4 0 0 1 7.8-1.2A3.5 3.5 0 1 1 18 15H6a3.5 3.5 0 1 1 2-6.4Z" /></svg>
    ),
    compass: (
      <svg {...common}><path d="M12 2v4" /><path d="M12 18v4" /><path d="M2 12h4" /><path d="M18 12h4" /><circle cx="12" cy="12" r="5" /><path d="m14 10-4 4" /></svg>
    ),
    utensils: (
      <svg {...common}><path d="M4 3v7" /><path d="M8 3v7" /><path d="M6 3v18" /><path d="M19 3c-2.2 1.8-3 4.2-3 7v11" /></svg>
    ),
    truck: (
      <svg {...common}><path d="M3 7h11v10H3z" /><path d="M14 10h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>
    ),
    wrench: (
      <svg {...common}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3-3-3z" /></svg>
    ),
    shield: (
      <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    factory: (
      <svg {...common}><path d="M3 21h18" /><path d="M4 21V9l5 3V9l5 3V7h6v14" /><path d="M8 17h1" /><path d="M12 17h1" /><path d="M16 17h1" /></svg>
    ),
    snow: (
      <svg {...common}><path d="M12 2v20" /><path d="m17 4-5 5-5-5" /><path d="m17 20-5-5-5 5" /><path d="M2 12h20" /><path d="m4 7 5 5-5 5" /><path d="m20 7-5 5 5 5" /></svg>
    ),
    building: (
      <svg {...common}><path d="M3 21h18" /><path d="M5 21V5h14v16" /><path d="M9 8h1" /><path d="M14 8h1" /><path d="M9 12h1" /><path d="M14 12h1" /><path d="M9 16h1" /><path d="M14 16h1" /></svg>
    ),
    mail: (
      <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
    ),
    phone: (
      <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" /></svg>
    ),
    map: (
      <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    )
  };

  return icons[name] || icons.check;
}

function Button({ children, href, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300';
  const styles = variant === 'outline'
    ? 'border border-white/25 bg-white/5 text-white hover:bg-white/10'
    : variant === 'dark'
      ? 'bg-slate-950 text-white hover:bg-slate-800'
      : 'bg-orange-500 text-white hover:bg-orange-600';

  return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
}

function Card({ children, className = '' }) {
  return <div className={`rounded-3xl border bg-white shadow-sm ${className}`}>{children}</div>;
}

const services = [
  {
    icon: 'compass',
    title: 'Foodservice Design',
    text: 'Practical kitchen layouts, equipment planning, and custom solutions built around your concept, budget, and workflow.'
  },
  {
    icon: 'utensils',
    title: 'Restaurant Equipment Sales',
    text: 'Commercial-grade cooking, preparation, refrigeration, stainless steel, display, and back-of-house equipment.'
  },
  {
    icon: 'truck',
    title: 'Supply & Delivery Support',
    text: 'Support with supply, import, export, delivery coordination, invoicing, and project fulfilment across Barbados and the Caribbean.'
  },
  {
    icon: 'wrench',
    title: 'Training & After-Sales Service',
    text: 'Ongoing product support, equipment guidance, and service solutions after installation.'
  }
];

const products = [
  'Cooking Equipment',
  'Refrigeration Systems',
  'Stainless Steel Tables',
  'Shelving & Storage',
  'Display Equipment',
  'Food Prep Equipment',
  'Bar & Beverage Solutions',
  'Commercial Kitchen Supplies'
];

const projects = [
  ['Grantley Adams Intl. Airport', 'Commercial foodservice project'],
  ['Buzz Box Cafe & Bistro', 'Contemporary cafe space in St. James'],
  ['Mount Gay Visitor Centre', 'Caterers kitchen extension'],
  ['Hugo’s Restaurant', 'High-end restaurant in Speightstown'],
  ['The Cliff Beach Club', 'Restaurant kitchen support'],
  ['Ross University', 'Cold storage working space']
];

const brands = ['Vulcan Hart', 'Advance Tabco', 'True Foodservice', 'Franke', 'Hussmann', 'Alto-Shaam'];

function runSmokeTests() {
  const tests = [
    ['services list has four items', services.length === 4],
    ['products list has eight items', products.length === 8],
    ['projects list has six items', projects.length === 6],
    ['brands list includes Vulcan Hart', brands.includes('Vulcan Hart')],
    ['contact email is present', 'customerservice@ressbarbados.com'.includes('@')]
  ];

  if (typeof console !== 'undefined') {
    tests.forEach(([name, passed]) => {
      if (!passed) console.error(`Test failed: ${name}`);
    });
  }

  return tests.every(([, passed]) => passed);
}

runSmokeTests();

export default function RessWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/20">
              <Icon name="chef" className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">RESS Barbados</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Commercial Kitchen Equipment</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <Button href="mailto:customerservice@ressbarbados.com" className="hidden sm:inline-flex">Request Quote</Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_35%)]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm text-orange-200">
                <Icon name="shield" className="h-4 w-4" /> Trusted foodservice equipment supplier since 2010
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Equip your kitchen for serious performance.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Restaurant Equipment Sales & Services Ltd. supplies commercial kitchen equipment, foodservice design, premium brands, delivery support, and after-sales service for restaurants, hotels, cafes, institutions, and hospitality projects across Barbados and the Caribbean.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="mailto:customerservice@ressbarbados.com?subject=RESS%20Quote%20Request">
                  Get a Quote <Icon name="arrow" className="ml-2 h-5 w-5" />
                </Button>
                <Button href="tel:+12462567646" variant="outline">Call (246) 256-7646</Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-800 p-6">
                    <Icon name="factory" className="mb-8 h-10 w-10 text-orange-400" />
                    <p className="text-4xl font-black">2010</p>
                    <p className="mt-2 text-sm text-slate-400">Founded with a vision to lead foodservice equipment supply in Barbados & the Caribbean.</p>
                  </div>
                  <div className="rounded-3xl bg-orange-500 p-6 text-white">
                    <Icon name="snow" className="mb-8 h-10 w-10" />
                    <p className="text-4xl font-black">360°</p>
                    <p className="mt-2 text-sm text-orange-50">Design, supply, delivery, training, and service support.</p>
                  </div>
                  <div className="rounded-3xl bg-white p-6 text-slate-950 sm:col-span-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">Built for</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold md:grid-cols-4">
                      {['Hotels', 'Restaurants', 'Cafes', 'Institutions'].map((item) => (
                        <div key={item} className="rounded-2xl bg-slate-100 p-3 text-center">{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white py-24 text-slate-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-semibold uppercase tracking-[0.25em] text-orange-600">What RESS Does</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Complete commercial kitchen solutions</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">From the first layout to final installation support, RESS helps businesses choose the right equipment and keep operations moving.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} className="border-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="p-7">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                      <Icon name={service.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="bg-slate-100 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-orange-600">Products</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Equipment for every foodservice operation</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Choose from commercial-grade equipment and supplies for restaurants, hotels, bars, cafes, supermarkets, catering kitchens, and institutions.</p>
              <Button href="mailto:customerservice@ressbarbados.com?subject=Equipment%20Quote%20Request" variant="dark" className="mt-8">Request Product Pricing</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {products.map((product) => (
                <div key={product} className="flex items-center gap-3 rounded-3xl bg-white p-5 shadow-sm">
                  <Icon name="check" className="h-5 w-5 flex-none text-orange-500" />
                  <span className="font-semibold">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-semibold uppercase tracking-[0.25em] text-orange-400">Brands</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Premier foodservice equipment brands</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">RESS represents trusted industry brands across cooking, refrigeration, stainless steel, and specialty commercial kitchen systems.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {brands.map((brand) => (
                  <div key={brand} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center font-bold text-slate-100 shadow-lg">{brand}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="bg-white py-24 text-slate-950">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold uppercase tracking-[0.25em] text-orange-600">Our Work</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Projects across Barbados & the Caribbean</h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-600">RESS has supported projects for airports, restaurants, schools, medical institutions, cafes, supermarkets, and hospitality spaces.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {projects.map(([name, type]) => (
                <div key={name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange-300 hover:bg-orange-50">
                  <Icon name="building" className="mb-8 h-9 w-9 text-orange-500" />
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="mt-2 text-slate-600">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-orange-500 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">Need equipment or a kitchen consultation?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-orange-50">Tell RESS what products you require or ask how they can help you start, grow, or upgrade your foodservice business.</p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 text-slate-950 shadow-2xl">
              <div className="space-y-5">
                <a href="mailto:customerservice@ressbarbados.com" className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4 font-semibold hover:bg-slate-200">
                  <Icon name="mail" className="h-5 w-5 text-orange-600" /> customerservice@ressbarbados.com
                </a>
                <a href="tel:+12462567646" className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4 font-semibold hover:bg-slate-200">
                  <Icon name="phone" className="h-5 w-5 text-orange-600" /> (246) 256-7646
                </a>
                <div className="flex items-center gap-4 rounded-2xl bg-slate-100 p-4 font-semibold">
                  <Icon name="map" className="h-5 w-5 text-orange-600" /> Barbados & Caribbean service support
                </div>
              </div>
              <Button href="mailto:customerservice@ressbarbados.com?subject=RESS%20Quote%20Request&body=Hello%20RESS,%0A%0AI%20would%20like%20a%20quote%20for:%0A%0ABusiness%20Name:%0APhone:%0AEquipment%20Needed:%0AProject%20Location:%0A" variant="dark" className="mt-6 w-full py-4 text-base">
                Start Quote Request
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 py-10 text-center text-sm text-slate-400">
        <p>© 2026 Restaurant Equipment Sales & Services Ltd. Professional website concept.</p>
      </footer>
    </div>
  );
}

