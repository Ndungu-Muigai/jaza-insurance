"use client"

import Link from "next/link"

const Footer = () =>
{
    //Getting the current year
    const currentYear = new Date().getFullYear()

    return(
        <>
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
                                    <Link href={link.href} className="group inline-flex items-center gap-2 transition hover:text-white">
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
                        &copy; {currentYear} Jaza Insurance Agency. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer