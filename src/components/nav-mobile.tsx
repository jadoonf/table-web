"use client";
import Link from "next/link";
import { Menu , X } from "lucide-react";
import { useState } from "react";
export default function MobileNav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center px-6 mx-auto w-full max-w-5xl md:hidden md:max-w-7xl h-[58px] backdrop-blur-md">
        <Link href="/" className="lg:w-[180px]">
          <h1 className="font-mono text-3xl font-bold tracking-tighter uppercase">
            SHARP
          </h1>
        </Link>

        <div className="flex gap-4">
          {showNav ? (
            <button
              className="text-[rgb(120,125,129)]  hover:text-slate-50 transition ease-in-out duration-150"
              onClick={() => setShowNav(false)}
            >
              <X className="text-3xl" />
            </button>
          ) : (
            <button
              className="text-[rgb(120,125,129)]  hover:text-slate-50 transition ease-in-out duration-150"
              onClick={() => setShowNav(true)}
            >
              <Menu className="text-3xl" />
            </button>
          )}
        </div>
      </div>
      {showNav ? (
        <div className="z-30 py-6 px-4 mx-auto w-full h-auto bg-black md:hidden">
          <div className="flex-col">
            <button className="text-[rgb(190,193,196)] h-[46px] rounded-md  w-full bg-[#1C1E24] transition ease-in-out duration-150 font-bold hover:bg-[#282a2f] border border-[#42444b]">
              Sign in
            </button>
            <button className="flex justify-center items-center mt-4 w-full text-gray-800 bg-white rounded-md transition duration-150 ease-in-out h-[46px] hover:bg-white/90">
              <p className="text-sm font-bold">Get Started</p>
            </button>
            <div className="flex flex-col mt-6 gap-5 text-[rgb(120,125,129)] mx-auto text-base font-bold w-full">
              <Link
                href="/about"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                Blog
              </Link>
              <Link
                href="/customers"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                Customers
              </Link>
              <Link
                href="/pricing"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                Pricing
              </Link>
              <Link
                href="/enterprice"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                Enterprice
              </Link>
              <Link
                href="/changelog"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                Changelog
              </Link>
              <Link
                href="/docs"
                className="hover:text-slate-50 transition ease-in-out duration-150 pb-4 border-b-[.5px]  border-[#2f3136]"
              >
                Docs
              </Link>
              <Link
                href="/contact"
                className="transition duration-150 ease-in-out hover:text-slate-50"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}