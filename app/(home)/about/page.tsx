'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useRef, useState, type ReactNode} from 'react'

//Data type for the chapter section
type Chapter = { num: string; label: string; title: string; text: string }

const Chapters: Chapter[] = [
  {
    num: '01',
    label: 'Who we are',
    title: 'A Kenyan agency built on plain talk',
    text: 'We help individuals, families and businesses protect their cars, homes, health and travels, as part of a wider group that includes Advanta SMS and Jibu ERP.',
  },
  {
    num: '02',
    label: 'What we do',
    title: 'From first question to final claim',
    text: 'We turn policy wording into plain language, match you with cover that fits your life and budget, and stay beside you when it is time to claim.',
  },
  {
    num: '03',
    label: 'How we work',
    title: 'No fine-print surprises',
    text: 'We tell you what a policy does not cover before you buy, not after you claim. Clear terms, honest advice and quick answers are how we earn your trust.',
  },
  {
    num: '04',
    label: 'Join us',
    title: 'Your own insurance business starts here',
    text: 'You do not need a big office to build something lasting. If you are driven and willing to learn, we will talk you through the road ahead.',
  },
]

//Data type for the person section
type Person = { name: string; role: string; tagline: string; image: string }

const Team: Person[] = [
  {
    name: 'Lawrence Kamanda',
    role: 'Chief Executive Officer',
    tagline: 'Leads our mission of honest, plain-language insurance.',
    image: '/images/lawrence-kamanda.jpg',
  },
  {
    name: 'Edith Kabaki',
    role: 'Insurance Manager',
    tagline: 'Helps you choose the right cover and guides you through claims.',
    image: '/images/edith-kabaki.jpg',
  },
  {
    name: 'Paul Muchina',
    role: 'Finance Manager',
    tagline: 'Keeps our numbers accurate, transparent and on time.',
    image: '/images/paul-muchina.jpg',
  },
]

const NETWORK = [
  {
    name: 'Advanta SMS',
    href: 'https://advantasms.com/about-us',
    blurb: 'Messaging technology that keeps businesses connected to their customers.',
  },
  {
    name: 'Jibu ERP',
    href: 'https://jibuerp.com/',
    blurb: 'Business software that brings operations together in one place.',
  },
]

//Shared class strings
const eyebrow = 'text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]'
const fieldClass = 'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base font-normal text-slate-900 shadow-sm transition focus:border-[#f26a21] focus:outline-none focus:ring-4 focus:ring-[#f26a21]/20'

//Small helpers
/** Fades and slides its children in the first time they scroll into view. */
const Reveal = ({ children, className = '' }: { children: ReactNode; className?: string }) => 
{
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState<boolean>(false)

  useEffect(() => 
  {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => 
      {
        if (entry.isIntersecting) 
        {
          setShown(true)
          observer.disconnect()
        }
      },
      { 
        threshold: 0.15 
      }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${shown ? 'in translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}>
      {children}
    </div>
  )
}

//Partner (agent lead) form: markup only, no submit logic yet
const PartnerForm = () => 
{
  //State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    about: '',
    consent: false,
  })

  //Function to handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  //Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => 
  {
    e.preventDefault()

    //Checking if the form is filled correctly
    if (!formData.name || !formData.phone || !formData.consent)
    {
      alert('Please fill in all required fields and agree to the consent.')
      return
    }

    //Sending the data to the backend (this is a placeholder, replace with actual API call)
    console.log('Form submitted:', formData)
    alert('Thank you for your submission! We will contact you soon.')
  }
  return (
    <form className="module-form lead-form mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-[#0b2a4a]/5 sm:p-10" id="partner-form" data-form-type="agent" noValidate onSubmit={handleSubmit}>
      <label className="block text-sm font-semibold text-slate-700">
        Your full name
        <input type="text" name="name" autoComplete="name" required className={fieldClass} onChange={handleChange}/>
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Your phone number
        <input type="tel" name="phone" autoComplete="tel" required className={fieldClass} onChange={handleChange}/>
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Email (optional)
        <input type="email" name="email" autoComplete="email" className={fieldClass} onChange={handleChange}/>
      </label>

      <label className="block text-sm font-semibold text-slate-700">
        Tell us about yourself
        <input type="text" name="about" placeholder="Your town, your background, why insurance" className={fieldClass} onChange={handleChange}/>
      </label>

      <label className="consent flex items-start gap-3 pt-1 text-sm text-slate-600">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#f26a21]" />
        <span>I agree that Jaza Insurance Agency may use my details to contact me about this request.</span>
      </label>

      <button className="btn btn-primary mt-2 w-full rounded-lg bg-[#f26a21] py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:bg-[#d4560f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f26a21]/30" type="submit">Yes, I want to get started</button>
    </form>
  )
}

// Main page component
const AboutPage = () => 
{
  const [activeChapter, setActiveChapter] = useState<number>(0)
  const progressRef = useRef<HTMLDivElement>(null)
  const chapterRefs = useRef<(HTMLElement | null)[]>([])

  // Reading progress bar
  useEffect(() => 
  {
    const update = (): void => 
    {
      const bar = progressRef.current
      if (!bar) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0
      bar.style.transform = `scaleX(${ratio})`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => 
    {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Pinned chapters: the one crossing the middle of the viewport becomes active
  useEffect(() => 
  {
    const observer = new IntersectionObserver(entries => 
    {
      entries.forEach((entry) => 
      {
        if (!entry.isIntersecting) return
        const index = Number((entry.target as HTMLElement).dataset.index)
        if (!Number.isNaN(index)) setActiveChapter(index)
      })
    },
    { 
      rootMargin: '-45% 0px -45% 0px', threshold: 0 
    })
    chapterRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const current = Chapters[activeChapter]

  return (
    <div className="scroll-smooth bg-white font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased">
      {/* READ PROGRESS */}
      <div ref={progressRef} className="read-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-[#f26a21]" aria-hidden="true"/>

      <main className="about">
        {/* HERO */}
        <section className="about-hero relative grid gap-5 overflow-hidden bg-gradient-to-br from-[#0b2a4a] to-[#12385f] px-6 py-20 text-white md:px-[5%] lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#f26a21] opacity-90" aria-hidden="true"/>
          <div className="relative z-10 max-w-3xl space-y-5">
            <p className={`hero-tag ${eyebrow}`}>About Jaza Insurance Agency</p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-6xl">
              Insurance in plain language. A business of your own, if you want one.
            </h1>
            <p className="max-w-[60ch] text-lg text-[#d6e0ec]">
              Whether you are protecting your family or building a livelihood in insurance, Jaza gives you clear
              cover, honest answers and a team that walks the road with you.
            </p>
            <div className="hero-actions flex flex-wrap gap-4 pt-2">
              <Link className="btn btn-primary rounded-lg bg-[#f26a21] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:-translate-y-0.5 hover:bg-[#d4560f]" href="#start">
                Start your insurance business
              </Link>
              <Link className="btn btn-ghost rounded-lg border-2 border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#0b2a4a]" href="#team">
                Meet the team
              </Link>
            </div>
          </div>
        </section>

        {/* CEO MESSAGE */}
        <section className="ceo section mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:px-[5%] lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <Reveal>
            <div className="blob relative mx-auto aspect-square w-[min(360px,90%)] overflow-hidden rounded-[58%_42%_52%_48%/48%_56%_44%_52%] shadow-[-16px_16px_0_#cfd9ea]">
              <Image src="/images/lawrence-kamanda.jpg" alt="Lawrence Kamanda, CEO" fill sizes="(max-width: 1024px) 90vw, 360px" className="object-cover"/>
            </div>
          </Reveal>
          <Reveal className="ceo-text space-y-4">
            <p className={`hero-tag ${eyebrow}`}>Our CEO&apos;s message</p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#0b2a4a] lg:text-4xl">
              Insurance should never feel like fine print
            </h2>
            <p className="max-w-[56ch] leading-relaxed text-slate-600">
              Most people buy insurance hoping never to use it, which is exactly why it should be easy to understand.
              At Jaza we tell you what you are covered for, what you are not, and what it costs, before you commit.
            </p>
            <p className="max-w-[56ch] leading-relaxed text-slate-600">
              We also believe insurance can create opportunity. Kenya is full of capable, hard-working people who
              could build a livelihood helping others stay protected. If that is you, consider this your invitation.
              Come as a client, come as a future agent, or both. We will take the time to do it right.
            </p>
            <p className="signoff pt-2 text-[#0b2a4a]">
              <strong>Lawrence Kamanda</strong>
              <br />
              Chief Executive Officer
            </p>
          </Reveal>
        </section>

        {/* OUR STORY: pinned chapters */}
        <section className="chapters grid bg-[#071d35] px-6 text-white md:px-[5%] lg:grid-cols-[1fr_1.2fr] lg:gap-10" id="story" aria-label="Our story">
          <div className="chapters-pin sticky top-[72px] z-10 flex items-center gap-4 bg-[#071d35] py-3 lg:top-[76px] lg:h-[calc(100vh-76px)] lg:flex-col lg:items-start lg:justify-center lg:gap-2 lg:bg-transparent lg:py-0 lg:pl-[4%]" aria-hidden="true">
            <span className="chapter-num text-5xl font-extrabold leading-none text-[#f26a21] lg:text-[clamp(5rem,14vw,11rem)]">
              {current.num}
            </span>
            <span className="chapter-label text-lg font-semibold tracking-wide">{current.label}</span>
            <div className="chapter-bar mt-4 hidden h-[120px] w-1 overflow-hidden rounded bg-white/20 lg:block">
              <i className="block w-full rounded bg-[#f26a21] transition-[height] duration-500 motion-reduce:transition-none" style={{ height: `${((activeChapter + 1) / Chapters.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="chapters-body">
            {
              Chapters.map((chapter, i) => (
                <article key={chapter.num} ref={(el) => {chapterRefs.current[i] = el }} data-index={i} className={`chapter flex min-h-[60vh] flex-col justify-center transition-opacity duration-500 motion-reduce:transition-none lg:min-h-[85vh] ${i === activeChapter ? 'opacity-100' : 'opacity-30'}`}>
                  <h2 className="mb-3.5 text-3xl font-extrabold leading-[1.15] lg:text-4xl">{chapter.title}</h2>
                  <p className="max-w-[40ch] text-lg text-[#c9d6e4]">{chapter.text}</p>
                </article>
              ))
            }
          </div>
        </section>

        {/* TEAM */}
        <section className="section mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-[5%]" id="team">
          <Reveal className="mb-12 text-center">
            <p className={eyebrow}>Our team</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">
              The people behind your peace of mind
            </h2>
          </Reveal>
          <div className="team grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-3">
            {
              Team.map(person => (
                <Reveal key={person.name} className="person">
                  <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full border-4 border-[#f26a21] shadow-lg shadow-[#0b2a4a]/10">
                    <Image src={person.image} alt={person.name} fill sizes="160px" className="object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b2a4a]">{person.name}</h3>
                  <p className="text-slate-500">{person.role}</p>
                  <p className="tagline mx-auto mt-2 max-w-[32ch] text-sm text-slate-600">{person.tagline}</p>
                </Reveal>
              ))
            }
          </div>
        </section>

        {/* START YOUR BUSINESS */}
        <section className="section-alt scroll-mt-16 bg-[#f2f5f9] px-6 py-20" id="start">
          <div className="mx-auto max-w-xl">
            <Reveal className="text-center">
              <p className={eyebrow}>Join us</p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">
                Ready to build your own insurance business?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Kenya&apos;s families and small businesses need someone they can trust to explain insurance. You could
                be that person. Share your details and we will call you to talk about how to get started, with no
                pressure.
              </p>
            </Reveal>
            <Reveal>
              <PartnerForm />
            </Reveal>
          </div>
        </section>

        {/* NETWORK */}
        <section className="section mx-auto max-w-7xl px-6 py-20 md:px-[5%]" id="network">
          <Reveal className="mb-10 text-center">
            <p className={eyebrow}>Our network</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">Part of a wider ecosystem</h2>
          </Reveal>
          <div className="cards mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {
              NETWORK.map(item => (
                <Reveal key={item.name}>
                  <Link className="card group block h-full rounded-xl border border-slate-200 border-t-4 border-t-[#f26a21] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a4a]/10" href={item.href} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-bold text-[#0b2a4a] transition group-hover:text-[#f26a21]">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.blurb}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#f26a21]">Visit website &rarr;</span>
                  </Link>
                </Reveal>
              ))
            }
          </div>
        </section>

        {/* VISIT */}
        <section className="section mx-auto max-w-7xl px-6 pb-20 md:px-[5%]" id="visit">
          <Reveal className="mb-8 text-center">
            <p className={eyebrow}>Visit us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">Come and say hello</h2>
          </Reveal>
          <Reveal>
            <div className="map mb-6 overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-[#0b2a4a]/10">
              <iframe title="Our location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=-1.259443,36.8007568&z=17&output=embed" className="block h-[380px] w-full border-0"/>
            </div>
            <p className="text-center">
              <Link className="btn btn-outline inline-block rounded-lg border-2 border-[#0b2a4a] px-7 py-3.5 font-semibold text-[#0b2a4a] transition hover:bg-[#0b2a4a] hover:text-white" href="https://www.google.com/maps/place/Advanta+Africa+Ltd/@-1.259443,36.8007568,17z" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
              </Link>
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  )
}

export default AboutPage