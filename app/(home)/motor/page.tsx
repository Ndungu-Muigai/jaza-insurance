'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type FormEvent, type ReactNode } from 'react'

//Data type for a medical product
type MedicalProduct = { id: string; title: string; description: string; covers: string[] }

const Products: MedicalProduct[] = [
  {
    id: 'individual',
    title: 'Individual medical',
    description: 'A medical plan for one person or a family. You choose the benefit limits that fit your budget.',
    covers: [
      'Inpatient (hospital) care',
      'Outpatient visits (depends on the plan)',
      'Maternity, dental and optical as optional add-ons (check your plan)',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate medical',
    description: 'A group plan for employers who want to cover their staff and, if they choose, their dependants.',
    covers: [
      'Group inpatient and outpatient cover',
      'Cover for dependants (depends on the plan)',
      'One policy and one renewal for the whole team',
    ],
  },
  {
    id: 'seniors',
    title: 'Seniors medical',
    description: 'A medical plan designed for older adults, with benefits suited to their needs.',
    covers: [
      'Inpatient care',
      'Outpatient care and chronic condition support (check your plan)',
      'Age limits and waiting periods apply, so ask us for the terms',
    ],
  },
  {
    id: 'personal-accident',
    title: 'Personal accident cover',
    description:
      'Pays a benefit if an accident leads to injury, disability or death. It works alongside your medical plan.',
    covers: [
      'Accidental death benefit',
      'Permanent or temporary disability benefit',
      'Accident-related medical expenses (check your policy)',
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
    title: 'Plan ahead for treatment',
    text: 'For planned treatment, ask us about pre-authorisation before you go to hospital.',
  },
  {
    title: 'Keep your records',
    text: 'Keep your receipts and medical reports and send them to us so we can follow up with the insurer.',
  },
];

const PlanTypes = ['Individual medical', 'Corporate medical', 'Seniors medical', 'Personal accident cover'];

//API types
type QuotePayload = {
  formType: string
  fields: Record<string, string>
  consent: boolean
  website?: string // honeypot: must stay empty for real users
}

type QuoteResult =
  | { ok: true; reference: string; message: string }
  | { ok: false; message: string }

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

//Shared class strings
const eyebrow = 'text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]';
const fieldClass = 'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base font-normal text-slate-900 shadow-sm transition focus:border-[#f26a21] focus:outline-none focus:ring-4 focus:ring-[#f26a21]/20';
const labelClass = 'block text-sm font-semibold text-slate-700';
const primaryButton = 'btn btn-primary rounded-lg bg-[#f26a21] px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:-translate-y-0.5 hover:bg-[#d4560f]';
const outlineButton = 'btn btn-outline rounded-lg border-2 border-[#0b2a4a] px-7 py-3.5 text-center font-semibold text-[#0b2a4a] transition hover:bg-[#0b2a4a] hover:text-white';

//Sends the quote request to the backend
const submitQuote = async (payload: QuotePayload): Promise<QuoteResult> =>
{
  try {
    // TODO API: POST /api/quote/submit
    const res = await fetch(`${API_URL}/api/quote/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, website: payload.website ?? '' }),
    })

    const data = await res.json().catch(() => null)

    if (res.ok && data?.ok) return data as QuoteResult
    if (res.status === 429) {
      return { ok: false, message: 'Too many requests. Please wait a moment and try again.' }
    }
    return { ok: false, message: data?.message ?? 'Something went wrong. Please try again.' }
  } catch {
    return { ok: false, message: 'Network error. Please check your connection and try again.' }
  }
}

//Builds the payload the API expects from the form's current values
const buildPayload = (form: HTMLFormElement): QuotePayload =>
{
  const data = new FormData(form)
  const get = (key: string) => String(data.get(key) ?? '').trim()

  return {
    formType: 'medical',
    consent: data.get('consent') === 'on',
    website: get('website'),
    fields: {
      name: get('name'),
      phone: get('phone'),
      email: get('email'),
      cover: get('cover'),
      people: get('people'),
      company: get('company'),
    },
  }
}

//Mirrors the server checks so people get instant feedback. The server stays the source of truth.
const validatePayload = (payload: QuotePayload): string | null =>
{
  const { name, phone, email } = payload.fields
  const digits = phone.replace(/[\s+-]/g, '')

  if (name.length < 2) return 'Please enter your name.'
  if (!/^\d{9,13}$/.test(digits)) return 'Please enter a valid phone number, for example 0712 345 678.'
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return 'Please enter a valid email address.'
  if (!payload.consent) return 'Please agree to be contacted so we can respond to your request.'
  return null
}

const MedicalPage = () => 
{
    const [status, setStatus] = useState<FormStatus>('idle')
    const [message, setMessage] = useState('')
    const [reference, setReference] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
        if (status === 'submitting') return

        const form = e.currentTarget
        const payload = buildPayload(form)

        const error = validatePayload(payload)
        if (error) {
            setStatus('error')
            setMessage(error)
            return
        }

        setStatus('submitting')
        setMessage('')

        // TODO API: POST /api/quote/submit
        const result = await submitQuote(payload)

        if (result.ok) {
            setStatus('success')
            setReference(result.reference)
            setMessage(result.message)
            form.reset()
            return
        }

        setStatus('error')
        setMessage(result.message)
    }

    const isSubmitting = status === 'submitting'

    return (
        <div className="scroll-smooth bg-white font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased">
            <main>
                {/* HERO */}
                <section className="page-hero page-hero--medical relative flex min-h-[320px] flex-col justify-center overflow-hidden bg-[#0b2a4a] px-6 py-16 text-white md:min-h-[380px] md:px-[5%]">
                    <Image src="/images/medical.jpg" alt="" fill priority sizes="100vw" className="object-cover object-[65%_40%]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#071d35]/85 to-[#071d35]/75 md:bg-gradient-to-r md:from-[#071d35]/95 md:via-[#071d35]/80 md:to-[#071d35]/20" aria-hidden="true" />
                    <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f26a21]/20 blur-3xl" aria-hidden="true" />

                    <div className="relative mx-auto w-full max-w-6xl space-y-5">
                        <p className={eyebrow}>Jaza Insurance Agency</p>
                        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-6xl">Medical Insurance</h1>
                        <p className="max-w-[52ch] text-lg text-[#d6e0ec]">
                            Plans that help with hospital and treatment costs for you, your family or your staff.
                        </p>
                        <div className="flex flex-wrap gap-2.5 pt-2">
                        {
                            Products.map((product) => (
                                <Link key={product.id} href={`#${product.id}`} className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#f26a21] hover:bg-[#f26a21]">
                                    {product.title}
                                </Link>
                            ))
                        }
                        </div>
                    </div>
                </section>

                {/* PLANS */}
                <section className="products  px-6 py-16 md:px-[5%]">
                    <div className="mb-10 max-w-2xl">
                        <p className={eyebrow}>Our plans</p>
                        <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">Care for you, your family or your team</h2>
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
                                        product.covers.map((item) => (
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
                                        <Link className={primaryButton} href="#quote-medical-form">
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

                {/* QUOTE FORM */}
                <section className="scroll-mt-24 bg-[#f2f5f9] px-6 py-20 md:px-[5%]" id="quote-medical-form">
                    <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
                        <div className="space-y-5 lg:sticky lg:top-28">
                        <p className={eyebrow}>Get in touch</p>
                        <h2 className="text-3xl font-extrabold leading-tight text-[#0b2a4a] lg:text-4xl">Request a medical quote</h2>
                        <p className="max-w-[44ch] leading-relaxed text-slate-600">
                            Tell us who needs cover and we will call you with options.
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

                        <form className="module-form lead-form space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-[#0b2a4a]/5 sm:p-10" id="medical-form" data-form-type="medical" onSubmit={handleSubmit} noValidate>
                            {/* Honeypot: hidden from people, bots tend to fill it */}
                            <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                                <label>
                                    Website
                                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                                </label>
                            </div>

                            <label className={labelClass}>
                                Plan type
                                <select name="cover" defaultValue="" className={fieldClass}>
                                    <option value="">Choose one</option>
                                    {
                                        PlanTypes.map((plan) => (
                                            <option key={plan} value={plan}>
                                                {plan}
                                            </option>
                                        ))
                                    }
                                </select>
                            </label>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <label className={labelClass}>
                                    Number of people to cover
                                    <input type="number" name="people" min="1" defaultValue={1} className={fieldClass} />
                                </label>
                                <label className={labelClass}>
                                    Company name
                                    <input type="text" name="company" placeholder="Corporate plans only" className={fieldClass} />
                                </label>
                            </div>

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

                            {
                                status === 'error' && (
                                    <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                                        {message}
                                    </p>
                                )
                            }

                            {
                                status === 'success' && (
                                    <p role="status" className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                                        <span className="font-semibold">{message}</span> Your reference is <strong>{reference}</strong>. We will call you soon.
                                    </p>
                                )
                            }

                            <button className="btn btn-primary mt-2 w-full rounded-lg bg-[#f26a21] py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:bg-[#d4560f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f26a21]/30 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Request quote'}
                            </button>
                        </form>
                    </div>
                </section>

                {/* CLAIMS */}
                <section className=" scroll-mt-24 px-6 py-20 md:px-[5%]" id="claims">
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
                <div className=" px-6 pb-20 md:px-[5%]">
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

export default MedicalPage