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
      <footer className="site-footer space-y-3 bg-[#071d35] px-6 py-14 text-center text-sm text-[#c7d3e0]">
        <p className="text-lg font-extrabold text-white">Jaza Insurance Agency</p>
        <p>Phone: <a href="tel:+254794794410" className="font-semibold text-white underline-offset-4 hover:text-[#f26a21] hover:underline">0794 794 410</a> &nbsp;|&nbsp; Email: <a href="mailto:info@jia.co.ke" className="font-semibold text-white underline-offset-4 hover:text-[#f26a21] hover:underline">info@jia.co.ke</a></p>
        <p>Regulated by the Insurance Regulatory Authority: [add licence details]</p>
        <p className="social space-x-4">
          <a href="https://at.linkedin.com/company/advanta-africa-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-[#f26a21]">LinkedIn</a>
          <span aria-hidden="true">|</span>
          <a href="https://www.facebook.com/people/Advanta-SMS/100057590343710/#" target="_blank" rel="noopener noreferrer" className="hover:text-[#f26a21]">Facebook</a>
        </p>
        <p className="copyright border-t border-white/10 pt-6 text-xs text-slate-500">&copy; 2026 Jaza Insurance Agency</p>
      </footer>

    </div>
  );
}