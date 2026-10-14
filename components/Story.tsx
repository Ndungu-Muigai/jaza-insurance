'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type StoryStep = {
  title: string;
  text: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

// Order matters: the pinned image at index i belongs to the step at index i
const STEPS: StoryStep[] = [
  {
    title: 'Drive with confidence',
    text: 'From the legal minimum to full cover for your own car, private or commercial.',
    cta: 'Explore motor cover',
    href: '/motor',
    image: '/images/motor.jpg',
    alt: 'Couple holding car keys beside their SUV in the city',
  },
  {
    title: 'Protect what you have built',
    text: 'Cover for your house and belongings against fire, theft and damage.',
    cta: 'Explore home cover',
    href: '/home-insurance',
    image: '/images/home.jpg',
    alt: 'Family standing in front of their home',
  },
  {
    title: 'Go further, worry less',
    text: 'Medical costs, delays and lost luggage covered while you are away.',
    cta: 'Explore travel cover',
    href: '/travel',
    image: '/images/travel.jpg',
    alt: 'Couple with passports and luggage at the airport',
  },
  {
    title: 'Care when it counts',
    text: 'Inpatient and outpatient plans for you, your family or your staff.',
    cta: 'Explore medical cover',
    href: '/medical',
    image: '/images/medical.jpg',
    alt: 'Doctor talking with a mother and her son in a clinic',
  },
];

export default function Story() {
  const [active, setActive] = useState<number>(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  // The step crossing the middle band of the viewport becomes active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="story bg-[#071d35] px-6 pb-10 pt-16 text-white md:px-[5%] lg:pt-20"
      id="story"
      aria-labelledby="story-title"
    >
      <div className="story-head mx-auto mb-10 max-w-7xl">
        <p className="hero-tag text-sm font-extrabold uppercase tracking-[0.12em] text-[#f26a21]">
          Life moves. Your cover should too.
        </p>
        <h2
          id="story-title"
          className="mt-2 max-w-[22ch] text-3xl font-extrabold leading-[1.15] lg:text-5xl"
        >
          Four ways Jaza keeps you covered
        </h2>
      </div>

      <div className="story-layout mx-auto grid max-w-7xl items-start gap-0 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        {/* Pinned images */}
        <div className="story-media sticky top-[84px] z-10 h-[34vh] min-h-[200px] overflow-hidden rounded-2xl bg-[#0b2a4a] shadow-2xl shadow-black/40 lg:top-28 lg:h-[calc(100vh-8rem)] lg:max-h-[640px]">
          {STEPS.map((step, i) => (
            <Image
              key={step.image}
              src={step.image}
              alt={step.alt}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={`story-img object-cover transition-all duration-[900ms] ease-out motion-reduce:transition-none ${
                i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0 motion-reduce:scale-100'
              }`}
            />
          ))}
          <div className="story-dots absolute bottom-5 left-5 flex gap-2" aria-hidden="true">
            {STEPS.map((step, i) => (
              <span
                key={step.image}
                className={`story-dot h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-[#f26a21]' : 'w-2.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrolling steps */}
        <div className="story-steps">
          {STEPS.map((step, i) => (
            <article
              key={step.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              data-index={i}
              className={`story-step flex items-start pt-6 lg:items-center lg:pt-0 ${
                i === STEPS.length - 1 ? 'min-h-[60vh] lg:min-h-[70vh]' : 'min-h-[55vh] lg:min-h-[85vh]'
              }`}
            >
              <div
                className={`story-card transition-all duration-500 motion-reduce:transition-none ${
                  i === active ? 'translate-y-0 opacity-100' : 'translate-y-3.5 opacity-30'
                }`}
              >
                <span className="story-num text-sm font-extrabold tracking-[0.08em] text-[#f26a21]">
                  {String(i + 1).padStart(2, '0')} / {String(STEPS.length).padStart(2, '0')}
                </span>
                <h3 className="mb-3 mt-2 text-3xl font-extrabold leading-[1.15] lg:text-4xl">{step.title}</h3>
                <p className="mb-6 max-w-[38ch] text-lg text-[#c9d6e4]">{step.text}</p>
                <Link
                  className="btn btn-primary inline-block rounded-lg bg-[#f26a21] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#f26a21]/30 transition hover:-translate-y-0.5 hover:bg-[#d4560f]"
                  href={step.href}
                >
                  {step.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}