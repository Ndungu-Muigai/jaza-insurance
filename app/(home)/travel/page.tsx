import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

export const metadata: Metadata = 
{
  title: 'Travel Insurance | Jaza Insurance Agency',
  description: 'Cover for medical emergencies, delays and lost luggage when you leave Kenya, visit Kenya or travel within it.',
}

//Data type for a coverage item (click to expand)
type CoverageItem = { title: string; text: string };

const Coverage: CoverageItem[] = [
  {
    title: 'Medical emergencies',
    text: 'Treatment, hospital stays and, where needed, emergency evacuation. Limits depend on the plan you choose.',
  },
  {
    title: 'Baggage and personal items',
    text: 'Lost, stolen or damaged luggage, up to the limit in your policy.',
  },
  {
    title: 'Trip delay and cancellation',
    text: 'Costs when your trip is delayed or cancelled for a reason the policy accepts.',
  },
  {
    title: 'What is usually not covered',
    text: 'Risky activities you did not declare, existing conditions you did not disclose, and some destinations. Ask us for the exact terms before you buy.',
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
        as soon as the incident happens.
      </>
    ),
  },
  {
    title: 'Keep your records',
    text: 'Keep receipts, medical reports and any police or airline reports.',
  },
  {
    title: 'Send your documents',
    text: "Send us your documents and we will guide you through the insurer's claim form.",
  },
]

const Directions = [
  { value: 'Outbound', label: 'Leaving Kenya' },
  { value: 'Inbound', label: 'Visiting Kenya' },
  { value: 'Domestic', label: 'Travelling within Kenya' },
]

const Addons = [
  'Adventure sports (diving, skiing, climbing)',
  'Business trip (laptop and equipment, business delays)',
]

const PageLinks = [
  { label: 'Request a travel quote', href: '#trip-quote' },
  { label: 'What is covered', href: '#coverage' },
  { label: 'How to claim', href: '#claims' },
]

//Shared class strings
const eyebrow = 'text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]'
const fieldClass = 'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base font-normal text-slate-900 shadow-sm transition focus:border-[#f26a21] focus:outline-none focus:ring-4 focus:ring-[#f26a21]/20'
const labelClass = 'block text-sm font-semibold text-slate-700'
const fieldsetClass = 'rounded-xl border border-slate-200 p-4'
const legendClass = 'px-2 text-sm font-extrabold text-[#0b2a4a]'
const optionClass = 'flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-sm font-normal text-slate-700 transition hover:border-[#f26a21] has-[:checked]:border-[#f26a21] has-[:checked]:bg-[#f26a21]/5'

const TravelPage = ()  =>
{
    return (
        <div className="scroll-smooth bg-white font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased">
            <main>
                {/* HERO */}
                <section className="page-hero page-hero--travel relative flex min-h-[320px] flex-col justify-center overflow-hidden bg-[#0b2a4a] px-6 py-16 text-white md:min-h-[380px] md:px-[5%]">
                    <Image src="/images/travel.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[65%_35%]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071d35]/85 to-[#071d35]/75 md:bg-gradient-to-r md:from-[#071d35]/95 md:via-[#071d35]/80 md:to-[#071d35]/20" aria-hidden="true" />
                    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f26a21]/20 blur-3xl" aria-hidden="true" />

                    <div className="relative mx-auto w-full max-w-6xl space-y-5">
                        <p className={eyebrow}>Jaza Insurance Agency</p>
                        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-6xl">Travel Insurance</h1>
                        <p className="max-w-[56ch] text-lg text-[#d6e0ec]">
                            Cover for medical emergencies, delays and lost luggage, whether you are leaving Kenya, visiting Kenya or
                            travelling within it.
                        </p>
                        <div className="flex flex-wrap gap-2.5 pt-2">
                        {
                            PageLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#f26a21] hover:bg-[#f26a21]">
                                {link.label}
                                </Link>
                            ))
                        }
                        </div>
                    </div>
                </section>

                {/* TRIP QUOTE (display only for now) */}
                <section className="scroll-mt-24 bg-[#f2f5f9] px-6 py-20 md:px-[5%]" id="trip-quote">
                    <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
                        <div className="space-y-5 lg:sticky lg:top-28">
                            <p className={eyebrow}>Your trip</p>
                            <h2 className="text-3xl font-extrabold leading-tight text-[#0b2a4a] lg:text-4xl">Tell us about your trip</h2>
                            <p className="max-w-[44ch] leading-relaxed text-slate-600">
                                Fill in your trip details and we will send you a quote.
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

                        <form className="module-form space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-[#0b2a4a]/5 sm:p-10" id="travel-form" data-form-type="travel">
                            <fieldset className={fieldsetClass}>
                                <legend className={legendClass}>Where are you travelling?</legend>
                                <div className="grid gap-3 sm:grid-cols-3">
                                {
                                    Directions.map((direction) => (
                                        <label key={direction.value} className={optionClass}>
                                            <input type="radio" name="direction" value={direction.value} defaultChecked={direction.value === 'Outbound'} className="h-4 w-4 accent-[#f26a21]" />
                                            {direction.label}
                                        </label>
                                    ))
                                }
                                </div>
                            </fieldset>

                            <label className={labelClass}>
                                Destination
                                <input type="text" name="destination" placeholder="e.g. Dubai" className={fieldClass} />
                            </label>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className={labelClass}>
                                    Departure date
                                    <input type="date" name="start" className={fieldClass} />
                                </label>
                                <label className={labelClass}>
                                    Return date
                                    <input type="date" name="end" className={fieldClass} />
                                </label>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className={labelClass}>
                                    Traveller age
                                    <input type="number" name="age" min="0" max="110" className={fieldClass} />
                                </label>
                                <label className={labelClass}>
                                    Number of travellers
                                    <input type="number" name="count" min="1" defaultValue={1} className={fieldClass} />
                                </label>
                            </div>

                            <fieldset className={fieldsetClass}>
                                <legend className={legendClass}>Add-ons (optional)</legend>
                                <div className="space-y-3">
                                    {
                                        Addons.map(addon => (
                                            <label key={addon} className={optionClass}>
                                            <input type="checkbox" name="addon" value={addon} className="h-4 w-4 accent-[#f26a21]" /> {addon}
                                            </label>
                                        ))
                                    }
                                </div>
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

                            <button className="btn btn-primary mt-2 w-full rounded-lg bg-[#f26a21] py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:bg-[#d4560f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f26a21]/30" type="button">
                                Request travel quote
                            </button>
                        </form>
                    </div>
                </section>

                {/* COVERAGE (click to expand) */}
                <section className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 md:px-[5%]" id="coverage">
                    <div className="mb-10 max-w-2xl">
                        <p className={eyebrow}>Coverage</p>
                        <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">What travel insurance usually covers</h2>
                    </div>
                    <div className="space-y-3">
                        {
                            Coverage.map((item) => (
                                <details key={item.title} className="group rounded-xl border border-slate-200 bg-white px-6 py-5 shadow-sm transition open:border-[#f26a21] open:shadow-lg open:shadow-[#0b2a4a]/5">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-[#0b2a4a] [&::-webkit-details-marker]:hidden">
                                        {item.title}
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f26a21]/15 text-[#f26a21] transition group-open:rotate-180 group-open:bg-[#f26a21] group-open:text-white">
                                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-3 max-w-[70ch] leading-relaxed text-slate-600">{item.text}</p>
                                </details>
                            ))
                        }
                    </div>
                </section>

                {/* CLAIMS */}
                <section className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20 md:px-[5%]" id="claims">
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

export default TravelPage