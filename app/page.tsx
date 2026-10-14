import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Story from '@/components/Story';

// Shared class strings so the styling is changed in one place
const navLink =
  'relative py-2 text-[0.95rem] font-semibold text-[#0b2a4a] transition-colors hover:text-[#f26a21] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#f26a21] after:transition-transform hover:after:scale-x-100';
const dropdownWrap =
  'dropdown absolute left-0 top-full hidden pt-3 group-hover:block group-focus-within:block';
const dropdownBox =
  'w-56 overflow-hidden rounded-b-xl border border-t-[3px] border-slate-200 border-t-[#f26a21] bg-white py-2 shadow-xl shadow-[#0b2a4a]/10';
const dropdownLink =
  'block px-5 py-2.5 text-sm text-slate-700 transition-colors hover:bg-[#f2f5f9] hover:text-[#d4560f]';
const fieldClass =
  'mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-base font-normal text-slate-900 shadow-sm transition focus:border-[#f26a21] focus:outline-none focus:ring-4 focus:ring-[#f26a21]/20';

export default function HomePage() {
  return (
    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 bg-white antialiased">

      {/* NAVBAR */}
      <header className="site-header sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-3 backdrop-blur md:px-[5%]">
        <Link className="brand flex items-center" href="/">
          <Image src="/images/logo.png" alt="Jaza Insurance Agency" width={140} height={60} priority className="h-16 w-auto" />
        </Link>

        <button className="nav-toggle rounded-md bg-[#0b2a4a] px-4 py-2 text-sm font-semibold text-white md:hidden" aria-label="Open menu" aria-expanded="false">Menu</button>

        <nav className="main-nav hidden items-center gap-8 md:flex" aria-label="Main">
          <Link className={`active ${navLink} text-[#f26a21] after:scale-x-100`} href="/">Home</Link>

          <div className="has-dropdown relative group">
            <Link href="/motor" className={navLink}>Motor Insurance</Link>
            <div className={dropdownWrap}>
              <div className={dropdownBox}>
                <Link className={dropdownLink} href="/motor#third-party">Third party</Link>
                <Link className={dropdownLink} href="/motor#comprehensive">Comprehensive</Link>
                <Link className={dropdownLink} href="/motor#psv-comprehensive">PSV comprehensive</Link>
                <Link className={dropdownLink} href="/motor#psv-third-party">PSV third party</Link>
              </div>
            </div>
          </div>

          <div className="has-dropdown relative group">
            <Link href="/medical" className={navLink}>Medical Insurance</Link>
            <div className={dropdownWrap}>
              <div className={dropdownBox}>
                <Link className={dropdownLink} href="/medical#individual">Individual medical</Link>
                <Link className={dropdownLink} href="/medical#corporate">Corporate medical</Link>
                <Link className={dropdownLink} href="/medical#seniors">Seniors medical</Link>
                <Link className={dropdownLink} href="/medical#personal-accident">Personal accident cover</Link>
              </div>
            </div>
          </div>

          <div className="has-dropdown relative group">
            <Link href="/home-insurance" className={navLink}>Home Insurance</Link>
            <div className={dropdownWrap}>
              <div className={dropdownBox}>
                <Link className={dropdownLink} href="/home-insurance#buildings">Buildings cover</Link>
                <Link className={dropdownLink} href="/home-insurance#contents">Contents cover</Link>
                <Link className={dropdownLink} href="/home-insurance#quote-home-form">Get a home quote</Link>
              </div>
            </div>
          </div>

          <div className="has-dropdown relative group">
            <Link href="/travel" className={navLink}>Travel Insurance</Link>
            <div className={dropdownWrap}>
              <div className={dropdownBox}>
                <Link className={dropdownLink} href="/travel#trip-quote">Request a travel quote</Link>
                <Link className={dropdownLink} href="/travel#coverage">What is covered</Link>
                <Link className={dropdownLink} href="/travel#claims">How to claim</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className={navLink}>About Us</Link>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero relative overflow-hidden bg-[#0b2a4a] text-white">
          {/* soft decorative glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f26a21]/20 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-2 py-12 md:grid-cols-2 md:px-[5%] lg:py-12">
            <div className="hero-text space-y-6">
              <p className="hero-tag text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]">
                Reliable Kenyan protection
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight lg:text-6xl">
                Trusted insurance plans for your peace of mind
              </h1>
              <p className="max-w-[46ch] text-lg text-[#d6e0ec]">
                Cover your car, your health, your home and your travels with plans explained in plain language.
              </p>
              <div className="hero-actions flex flex-wrap gap-8 pt-2">
                <Link className="btn btn-primary rounded-lg bg-[#f26a21] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:-translate-y-0.5 hover:bg-[#d4560f]"  href="#quote">
                  Get a quote</Link>
                <Link className="btn btn-ghost rounded-lg border-2 border-white px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#0b2a4a]" href="#covers">See our covers</Link>
              </div>
            </div>

            <div className="hero-photo relative h-80 overflow-hidden rounded-3xl bg-[#12385f] shadow-2xl shadow-black/30 ring-1 ring-white/10 lg:h-[26rem]">
              <Image src="/images/home.jpg" alt="Family standing in front of their home" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-[30%_center]"/>
            </div>
          </div>
        </section>

        {/* SCROLLYTELLING: images stay pinned while the steps scroll past */}
        <Story />

        {/* INSURANCE CARDS */}
        <section className="section mx-auto max-w-7xl px-6 py-16 md:px-[5%]" id="covers">
          <div className="mb-12 text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]">Our covers</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#0b2a4a] lg:text-4xl">What would you like to cover?</h2>
          </div>
          <div className="cards grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link className="card group block overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-[#f26a21] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a4a]/10" href="/motor">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image className="card-img object-cover transition duration-500 group-hover:scale-105" src="/images/motor.jpg" alt="Couple holding car keys beside their SUV in the city" fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="card-body p-6">
                <h3 className="text-lg font-bold text-[#0b2a4a] transition group-hover:text-[#f26a21]">Motor insurance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Third-party and comprehensive cover for private and commercial vehicles.</p>
              </div>
            </Link>

            <Link className="card group block overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-[#f26a21] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a4a]/10" href="/home-insurance">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image className="card-img object-cover transition duration-500 group-hover:scale-105" src="/images/home.jpg" alt="Family standing in front of their home" fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="card-body p-6">
                <h3 className="text-lg font-bold text-[#0b2a4a] transition group-hover:text-[#f26a21]">Home insurance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Protect your house and belongings against fire, theft and damage.</p>
              </div>
            </Link>

            <Link className="card group block overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-[#f26a21] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a4a]/10" href="/travel">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image className="card-img object-cover transition duration-500 group-hover:scale-105" src="/images/travel.jpg" alt="Couple with passports and luggage at the airport" fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="card-body p-6">
                <h3 className="text-lg font-bold text-[#0b2a4a] transition group-hover:text-[#f26a21]">Travel insurance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Cover for medical costs, delays and lost luggage while you are away.</p>
              </div>
            </Link>

            <Link className="card group block overflow-hidden rounded-xl border border-slate-200 border-t-4 border-t-[#f26a21] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0b2a4a]/10" href="/medical">
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <Image className="card-img object-cover transition duration-500 group-hover:scale-105" src="/images/medical.jpg" alt="Doctor talking with a mother and her son in a clinic" fill sizes="(max-width: 768px) 100vw, 25vw" />
              </div>
              <div className="card-body p-6">
                <h3 className="text-lg font-bold text-[#0b2a4a] transition group-hover:text-[#f26a21]">Medical insurance</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">Inpatient and outpatient plans for you and your family.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* QUOTE FORM */}
        <section className="section-alt bg-[#f2f5f9] px-6 py-16" id="quote">
          <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-[#0b2a4a]/5 sm:p-10">
            <p className="text-center text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]">Get in touch</p>
            <h2 className="mb-2 mt-2 text-center text-3xl font-extrabold text-[#0b2a4a]">Request a quote</h2>
            <p className="mb-8 text-center text-sm text-slate-600">Tell us what you need and we will call you back.</p>
            <form className="quote-form space-y-5" id="quote-form" data-form-type="general" noValidate>
              <label className="block text-sm font-semibold text-slate-700">Full name
                <input type="text" name="name" autoComplete="name" required className={fieldClass} />
              </label>

              <label className="block text-sm font-semibold text-slate-700">Phone number
                <input type="tel" name="phone" autoComplete="tel" required className={fieldClass} />
              </label>

              <label className="block text-sm font-semibold text-slate-700">Email (optional)
                <input type="email" name="email" autoComplete="email" className={fieldClass} />
              </label>

              <label className="block text-sm font-semibold text-slate-700">Insurance type
                <select name="type" required className={fieldClass}>
                  <option value="">Choose one</option>
                  <option>Motor</option>
                  <option>Medical</option>
                  <option>Home</option>
                  <option>Travel</option>
                </select>
              </label>

              <div className="hp hidden" aria-hidden="true">
                <label>Leave this empty <input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>

              <label className="consent flex items-start gap-3 pt-1 text-sm text-slate-600">
                <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#f26a21]" />
                <span>I agree that Jaza Insurance Agency may use my details to contact me about this request.</span>
              </label>

              <button
                className="btn btn-primary mt-2 w-full rounded-lg bg-[#f26a21] py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:bg-[#d4560f] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#f26a21]/30"
                type="submit"
              >
                Send request
              </button>

              <p className="form-message mt-2 min-h-[1.5em] text-center text-sm font-semibold" id="form-message" role="status"></p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer relative overflow-hidden bg-[#071d35] text-sm text-[#c7d3e0]">
        {/* decorative glows */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#f26a21]/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#1d4f7c]/40 blur-3xl" aria-hidden="true" />

        {/* orange accent line */}
        <div className="relative h-1 w-full bg-gradient-to-r from-[#f26a21] via-[#f26a21]/50 to-transparent" aria-hidden="true" />

        <div className="relative mx-auto grid gap-10 px-3 py-12 md:grid-cols-2 md:px-[2%] lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* About Jaza */}
          <div className="space-y-5">
            <h3 className="text-2xl font-extrabold tracking-tight text-white">
              Jaza <span className="text-[#f26a21]">Insurance</span> Agency
            </h3>
            <span className="block h-1 w-12 rounded-full bg-[#f26a21]" aria-hidden="true" />
            <p className="max-w-[44ch] text-[0.95rem] leading-relaxed">
              Jaza Insurance Agency helps Kenyan families and businesses protect what matters most, with motor,
              medical, home and travel cover explained in plain language and backed by friendly, local support.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white">Quick links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Motor insurance', href: '/motor' },
                { label: 'Medical insurance', href: '/medical' },
                { label: 'Home insurance', href: '/home-insurance' },
                { label: 'Travel insurance', href: '/travel' },
                { label: 'About us', href: '/about' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 transition hover:text-white"
                  >
                    <span className="h-px w-3 bg-[#f26a21] transition-all duration-300 group-hover:w-6" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call us */}
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white">Call us</h3>
            <p className="mb-5 max-w-[30ch] leading-relaxed">Speak to our team about a quote or a claim.</p>
            <Link href="tel:+254794794410" aria-label="Call Jaza Insurance Agency on 0794 794 410" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:-translate-y-0.5 hover:border-[#f26a21] hover:bg-[#f26a21]/10">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f26a21] transition group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.6 21 3 13.4 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1l-2.22 2.2Z" />
                </svg>
              </span>
              <span className="font-semibold">0794 794 410</span>
            </Link>
          </div>

          {/* Social media */}
          <div>
            <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.12em] text-white">Follow us</h3>
            <p className="mb-5 max-w-[30ch] leading-relaxed">Stay in touch for updates, tips and news from our team.</p>
            <div className="social flex flex-col gap-3">
              <Link href="https://at.linkedin.com/company/advanta-africa-ltd" target="_blank" rel="noopener noreferrer" aria-label="Jaza Insurance Agency on LinkedIn" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:-translate-y-0.5 hover:border-[#f26a21] hover:bg-[#f26a21]/10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[#f26a21]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.12V21h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55V21h-4V9.75Z" />
                  </svg>
                </span>
                <span className="font-semibold">LinkedIn</span>
                <span className="ml-auto transition group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="https://www.facebook.com/people/Advanta-SMS/100057590343710/#" target="_blank" rel="noopener noreferrer" aria-label="Jaza Insurance Agency on Facebook" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:-translate-y-0.5 hover:border-[#f26a21] hover:bg-[#f26a21]/10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-[#f26a21]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                    <path d="M13.5 21v-7.5h2.52l.48-3H13.5V8.6c0-.87.3-1.6 1.6-1.6h1.5V4.3c-.26-.04-1.2-.12-2.27-.12-2.25 0-3.83 1.37-3.83 3.9v2.42H7.9v3h2.6V21h3Z" />
                  </svg>
                </span>
                <span className="font-semibold">Facebook</span>
                <span className="ml-auto transition group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 p-6 md:px-[5%]">
          <p className="copyright mx-auto max-w-7xl text-center text-xs text-slate-400">
            &copy; 2026 Jaza Insurance Agency. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}