'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

const NavLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Motor Insurance',
    href: '/motor',
    children: [
      { label: 'Third party', href: '/motor#third-party' },
      { label: 'Comprehensive', href: '/motor#comprehensive' },
      { label: 'PSV comprehensive', href: '/motor#psv-comprehensive' },
      { label: 'PSV third party', href: '/motor#psv-third-party' },
    ],
  },
  {
    label: 'Medical Insurance',
    href: '/medical',
    children: [
      { label: 'Individual medical', href: '/medical#individual' },
      { label: 'Corporate medical', href: '/medical#corporate' },
      { label: 'Seniors medical', href: '/medical#seniors' },
      { label: 'Personal accident cover', href: '/medical#personal-accident' },
    ],
  },
  {
    label: 'Home Insurance',
    href: '/home-insurance',
    children: [
      { label: 'Buildings cover', href: '/home-insurance#buildings' },
      { label: 'Contents cover', href: '/home-insurance#contents' },
      { label: 'Get a home quote', href: '/home-insurance#quote-home-form' },
    ],
  },
  {
    label: 'Travel Insurance',
    href: '/travel',
    children: [
      { label: 'Request a travel quote', href: '/travel#trip-quote' },
      { label: 'What is covered', href: '/travel#coverage' },
      { label: 'How to claim', href: '/travel#claims' },
    ],
  },
  { label: 'About Us', href: '/about' },
]

// Shared class strings so the styling is changed in one place
const navLink = 'relative py-2 text-[0.95rem] font-semibold text-[#0b2a4a] transition-colors hover:text-[#f26a21] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#f26a21] after:transition-transform hover:after:scale-x-100'
const activeNavLink = 'text-[#f26a21] after:scale-x-100'
const dropdownWrap = 'dropdown hidden pt-1 md:absolute md:left-0 md:top-full md:pt-3 md:group-hover:block md:group-focus-within:block'
const dropdownBox = 'overflow-hidden md:w-56 md:rounded-b-xl md:border md:border-t-[3px] md:border-slate-200 md:border-t-[#f26a21] md:bg-white md:py-2 md:shadow-xl md:shadow-[#0b2a4a]/10'
const dropdownLink = 'block px-5 py-2.5 text-sm text-slate-700 transition-colors hover:bg-[#f2f5f9] hover:text-[#d4560f]'

const Navbar = () => 
{
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const handleMenuToggle = (): void => setMenuOpen((open) => !open)
  const handleNavClick = (): void => setMenuOpen(false)

  const isActive = (href: string): boolean => href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="site-header sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-6 py-3 backdrop-blur md:px-[5%]">
      <Link className="brand flex items-center" href="/" onClick={handleNavClick}>
        <Image src="/images/logo.png" alt="Jaza Insurance Agency" width={140} height={56} priority className="h-12 w-auto" />
      </Link>

      <button type="button" className="nav-toggle rounded-md bg-[#0b2a4a] px-4 py-2 text-sm font-semibold text-white md:hidden"  aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={handleMenuToggle}>Menu</button>

      <nav className={`main-nav w-full flex-col gap-1 md:flex md:w-auto md:flex-row md:items-center md:gap-8 ${menuOpen ? 'flex' : 'hidden'}`} aria-label="Main">
        {
          NavLinks.map(item => 
          {
            const cls = `${navLink} ${isActive(item.href) ? `active ${activeNavLink}` : ''}`

            if (!item.children) 
            {
              return (
                <Link key={item.href} href={item.href} className={cls} onClick={handleNavClick}>{item.label}</Link>
              )
            }

            return (
              <div key={item.href} className="has-dropdown group relative">
                <Link href={item.href} className={cls} onClick={handleNavClick}>{item.label}</Link>
                <div className={`${dropdownWrap} ${menuOpen ? 'max-md:block' : ''}`}>
                  <div className={dropdownBox}>
                    {
                      item.children.map(child => (
                        <Link key={child.href} className={dropdownLink} href={child.href} onClick={handleNavClick}>{child.label}</Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            )
          })
        }
      </nav>
    </header>
  )
}

export default Navbar