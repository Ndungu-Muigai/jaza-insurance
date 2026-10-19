import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = 
{
  title: 'Home Insurance | Jaza Insurance Agency',
  description: 'Buildings and contents cover for your house and belongings from Jaza Insurance Agency.',
}

//Data type for a home product
type HomeProduct = { id: string; title: string; description: string; covers: string[] }

const Products: HomeProduct[] = [
  {
    id: 'buildings',
    title: 'Buildings cover',
    description: 'Protects the structure of your home: walls, roof, floors and fixed fittings.',
    covers: [
      'Fire and lightning',
      'Storm and flood damage (check your policy)',
      'Damage from break-ins',
      'Cost to repair or rebuild',
    ],
  },
  {
    id: 'contents',
    title: 'Contents cover',
    description:
      'Protects what is inside your home. It also suits tenants, who need cover for their belongings but not the building.',
    covers: [
      'Theft and burglary',
      'Fire and water damage to belongings',
      'Furniture, appliances and electronics',
      'High-value items, if you add them to the policy',
    ],
  },
]

//Data type for a claim step
type ClaimStep = { title: string; text: ReactNode }

const textLink = 'font-semibold text-[#0b2a4a] underline-offset-4 hover:text-[#f26a21] hover:underline'

const ClaimSteps: ClaimStep[] = [
  {
    title: 'Contact us',
    text: (
      <>
        Call us on{' '}
        <Link className={textLink} href="tel:+254794794410">
          0794 794 410
        </Link>{' '}
        or email{' '}
        <Link className={textLink} href="mailto:info@jia.co.ke">
          info@jia.co.ke
        </Link>{' '}
        as soon as you can.
      </>
    ),
  },
  {
    title: 'Record the damage',
    text: 'Take photos of the damage and keep damaged items. Report a break-in to the police.',
  },
  {
    title: 'Send your documents',
    text: "Send us your documents and a list of what was lost or damaged, and we will guide you through the insurer's claim form.",
  },
];

const PropertyTypes = ['House or bungalow', 'Maisonette', 'Apartment'];
const WallMaterials = ['Stone or brick', 'Concrete', 'Timber', 'Iron sheet', 'Other'];
const Addons = ['High-value items (jewellery, art, electronics)', 'Flood and storm damage'];

//Shared class strings
const eyebrow = 'text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]';
const fieldClass = 'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base font-normal text-slate-900 shadow-sm transition focus:border-[#f26a21] focus:outline-none focus:ring-4 focus:ring-[#f26a21]/20';
const labelClass = 'block text-sm font-semibold text-slate-700';
const fieldsetClass = 'rounded-xl border border-slate-200 p-4';
const legendClass = 'px-2 text-sm font-extrabold text-[#0b2a4a]';
const optionClass = 'flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-normal text-slate-700 transition hover:border-[#f26a21] has-[:checked]:border-[#f26a21] has-[:checked]:bg-[#f26a21]/5';
const primaryButton = 'btn btn-primary rounded-lg bg-[#f26a21] px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:-translate-y-0.5 hover:bg-[#d4560f]';
const outlineButton = 'btn btn-outline rounded-lg border-2 border-[#0b2a4a] px-7 py-3.5 text-center font-semibold text-[#0b2a4a] transition hover:bg-[#0b2a4a] hover:text-white';

const HomeInsurancePage = () => 
{
  return (
    <div className="scroll-smooth bg-white font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased">
      <main>
        {/* HERO */}
        <section className="page-hero page-hero--home relative flex min-h-[320px] flex-col justify-center overflow-hidden bg-[#0b2a4a] px-6 py-16 text-white md:min-h-[380px] md:px-[5%]">
          <Image src="/images/home.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[60%_55%]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071d35]/85 to-[#071d35]/75 md:bg-gradient-to-r md:from-[#071d35]/95 md:via-[#071d35]/80 md:to-[#071d35]/20" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f26a21]/20 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-6xl space-y-5">
            <p className={eyebrow}>Jaza Insurance Agency</p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-6xl">Home Insurance</h1>
            <p className="max-w-[52ch] text-lg text-[#d6e0ec]">
              Protect your house, your belongings and your peace of mind.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {
                Products.map((product) => (
                  <Link key={product.id} href={`#${product.id}`} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#f26a21] hover:bg-[#f26a21]">
                    {product.title}
                  </Link>
                ))
              }
              <Link href="#quote-home-form" className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#f26a21] hover:bg-[#f26a21]">
                Get a home quote
              </Link>
            </div>
          </div>
        </section>

        {/* COVERS */}
        <section className="products mx-auto max-w-6xl px-6 py-16 md:px-[5%]">
          <div className="mb-10 max-w-2xl">
            <p className={eyebrow}>Our covers</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">Protect the house and what is inside it</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {
              Products.map((product, i) => (
                <article key={product.id} id={product.id} className="product group scroll-mt-28 flex flex-col rounded-2xl border border-slate-200 border-t-4 border-t-[#f26a21] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a4a]/10">
                  <span className="text-sm font-extrabold tracking-[0.08em] text-[#f26a21]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 text-2xl font-extrabold text-[#0b2a4a]">{product.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{product.description}</p>

                  <h4 className="mb-3 mt-6 text-sm font-extrabold uppercase tracking-[0.1em] text-[#0b2a4a]">
                    What it usually covers
                  </h4>
                  <ul className="space-y-2.5">
                    {
                      product.covers.map(item => (
                        <li key={item} className="flex items-start gap-3 text-slate-600">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f26a21]/15 text-[#f26a21]">
                            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-none stroke-current" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))
                    }
                  </ul>

                  <div className="product-actions mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                    <Link className={primaryButton} href="#quote-home-form">
                      Get a quote
                    </Link>
                    <Link className={outlineButton} href="tel:+254794794410">
                      Call 0794 794 410
                    </Link>
                  </div>
                </article>
              ))
            }
          </div>
        </section>

        {/* QUOTE FORM (display only for now) */}
        <section className="scroll-mt-24 bg-[#f2f5f9] px-6 py-20 md:px-[5%]" id="quote-home-form">
          <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
            <div className="space-y-5 lg:sticky lg:top-28">
              <p className={eyebrow}>Get in touch</p>
              <h2 className="text-3xl font-extrabold leading-tight text-[#0b2a4a] lg:text-4xl">Request a home quote</h2>
              <p className="max-w-[44ch] leading-relaxed text-slate-600">
                Tell us about your property and we will call you with a quote.
              </p>
              <Link href="tel:+254794794410" aria-label="Call Jaza Insurance Agency on 0794 794 410" className="group flex max-w-sm items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#f26a21] hover:shadow-lg">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f26a21] text-white transition group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">Prefer to talk?</span>
                  <span className="block text-lg font-extrabold text-[#0b2a4a]">0794 794 410</span>
                </span>
              </Link>
            </div>

            <form className="module-form lead-form space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-[#0b2a4a]/5 sm:p-10" id="home-form" data-form-type="home">
              <fieldset className={fieldsetClass}>
                <legend className={legendClass}>I am the</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className={optionClass}>
                    <input type="radio" name="role" value="Owner" defaultChecked className="h-4 w-4 accent-[#f26a21]" /> Owner
                  </label>
                  <label className={optionClass}>
                    <input type="radio" name="role" value="Tenant" className="h-4 w-4 accent-[#f26a21]" /> Tenant
                  </label>
                </div>
              </fieldset>

              <label className={labelClass}>
                Property type
                <select name="property" defaultValue="" className={fieldClass}>
                  <option value="">Choose one</option>
                  {
                    PropertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))
                  }
                </select>
              </label>

              <label className={labelClass}>
                Location (town or estate)
                <input type="text" name="location" className={fieldClass} />
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Bedrooms
                  <input type="number" name="bedrooms" min="0" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Floor size (square metres)
                  <input type="number" name="size" min="0" className={fieldClass} />
                </label>
              </div>

              <label className={labelClass}>
                Main wall material
                <select name="walls" defaultValue="" className={fieldClass}>
                  <option value="">Choose one</option>
                  {
                    WallMaterials.map(material => (
                      <option key={material} value={material}>
                        {material}
                      </option>
                    ))
                  }
                </select>
              </label>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Estimated building value (KES)
                  <input type="number" name="buildingValue" min="0" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Estimated contents value (KES)
                  <input type="number" name="contentsValue" min="0" className={fieldClass} />
                </label>
              </div>

              <fieldset className={fieldsetClass}>
                <legend className={legendClass}>Add-ons (optional)</legend>
                <div className="space-y-3">
                  {
                    Addons.map((addon) => (
                      <label key={addon} className={optionClass}>
                        <input type="checkbox" name="addon" value={addon} className="h-4 w-4 accent-[#f26a21]" /> {addon}
                      </label>
                    ))
                  }
                </div>
              </fieldset>

              <fieldset className={fieldsetClass}>
                <legend className={legendClass}>Excess: the amount you pay first when you claim</legend>
                <input type="range" name="excess" id="excess-slider" min="1" max="3" defaultValue={2} aria-describedby="excess-text" className="mt-2 w-full accent-[#f26a21]" />
                <div className="mt-1 flex justify-between text-xs font-semibold uppercase tracking-[0.08em] text-slate-500" aria-hidden="true">
                  <span>Low</span>
                  <span>Medium</span>
                  <span>High</span>
                </div>
                <p id="excess-text" className="mt-3 text-sm text-slate-600">
                  Medium excess: a balance between premium and what you pay when you claim.
                </p>
              </fieldset>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>
                  Full name
                  <input type="text" name="name" autoComplete="name" className={fieldClass} />
                </label>
                <label className={labelClass}>
                  Phone number
                  <input type="tel" name="phone" autoComplete="tel" className={fieldClass} />
                </label>
              </div>

              <label className={labelClass}>
                Email (optional)
                <input type="email" name="email" autoComplete="email" className={fieldClass} />
              </label>

              <label className="consent flex items-start gap-3 pt-1 text-sm text-slate-600">
                <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#f26a21]" />
                <span>I agree that Jaza Insurance Agency may use my details to contact me about this request.</span>
              </label>

              <button className="btn btn-primary mt-2 w-full rounded-lg bg-[#f26a21] py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:bg-[#d4560f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f26a21]/30"type="button" >
                Request quote
              </button>
            </form>
          </div>
        </section>

        {/* CLAIMS */}
        <section className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-[5%]" id="claims">
          <div className="mb-10 max-w-2xl">
            <p className={eyebrow}>Claims</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">How to make a claim</h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-3">
            {
              ClaimSteps.map((step, i) => (
                <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0b2a4a] text-lg font-extrabold text-white ring-4 ring-[#f26a21]/30">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#0b2a4a]">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
                </li>
              ))
            }
          </ol>
        </section>

        {/* NOTE */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-[5%]">
          <p className="note flex items-start gap-3 rounded-xl border border-[#f26a21]/30 bg-[#f26a21]/5 px-5 py-4 text-sm leading-relaxed text-slate-600">
            <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-[#f26a21]" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z" />
            </svg>
            <span>
              Cover, limits and exclusions depend on the insurer and the policy you choose. Contact us for the exact
              terms before you buy.
            </span>
          </p>
        </div>
      </main>
    </div>
  )
}

export default HomeInsurancePage