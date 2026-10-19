import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Jaza Insurance Agency",
    default: "Jaza Insurance Agency | Trusted Insurance Plans in Kenya",
  },
  description: "Motor, medical, home and travel insurance from Jaza Insurance Agency."
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
